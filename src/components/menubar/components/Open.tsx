import styles from '../../common/barIcon/BarIcon.module.css';
import open_file from '../../../assets/images/barIcons/open_file.svg';
import { useState, useRef, MutableRefObject } from 'react';
import {Presentation, FigureType, ImageBlockType, BlockType, Slide, SlideBackground, TextBlockType} from '../../../data/types';
import { getState } from '../../../data/testData_v2'

// export type jsonPresentation = string;
//   const obj = JSON.parse(json);

 
// открыть диалоговое окно
// обработать загрузку файлаgit 
// сделать обновление презентации из этого файла 





const Open = () => {
  const filePicker: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null as (File | null));
  const [uploaded, setUploaded] = useState();
  const hostUrl = '/upload';

  const handleChange = () => {
    if((filePicker.current) && (filePicker.current.files)) {
      console.log(filePicker.current.files);
      setSelectedFile(filePicker.current.files[0])
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file");
      return;
    };
    const formData = new FormData();
    formData.append('file', selectedFile );

    const res = await fetch(hostUrl, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();

    setUploaded(data);
  
  };

const handlePick = () => {
  if (filePicker.current){
    filePicker.current.click()
  } 
}

return (
   <div className={styles.wrapper}>
     <img className={styles.icon} src={open_file} alt='Open file' onClick={handlePick} />
     <input className = {styles.hidden} type="file" ref={filePicker}  onChange = {handleChange} onLoad = {handleUpload} accept=".json, .txt"/>
    </div>

)
}

export default Open;
