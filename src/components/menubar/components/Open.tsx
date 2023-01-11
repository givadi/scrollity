import styles from '../../common/barIcon/BarIcon.module.css';
import open_file from '../../../assets/images/barIcons/open_file.svg';
import { useRef, MutableRefObject } from 'react';
import { uploadSlides} from '../../../store/actionCreators/slides';
import {useDispatch} from 'react-redux';
import {uploadName} from '../../../store/actionCreators/name'

const Open = () => {
  const dispatch = useDispatch();
  const filePicker: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const handleChange = () => {
    if((filePicker.current) && (filePicker.current.files)) {
      const reader = new FileReader();
      reader.readAsText(filePicker.current.files[0], "UTF-8");
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          const presentation = JSON.parse(String(e.target.result))
          dispatch(uploadSlides(presentation.slides));
          dispatch(uploadName(presentation.name));
          if((filePicker.current)) {
            filePicker.current.value = '';
          }
        }
      }
    }
  };

  const handlePick = () => {
    if (filePicker.current){
      filePicker.current.click()
    }
  }

  return (
      <div className={styles.container}>
        <img className={styles.icon} src={open_file} alt='Open file' onClick={handlePick} />
        <input className = {styles.hidden} type="file" ref={filePicker}  onChange = {handleChange} accept=".json, .txt"/>
      </div>

  )
}

export default Open;
