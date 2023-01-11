import styles from '../../common/barIcon/BarIcon.module.css';
import insert_picture from '../../../assets/images/barIcons/insert_picture.svg';
import {useRef, MutableRefObject} from 'react';
import {addBlock} from '../../../store/actionCreators/slides';
import store from '../../../store/store';
import {useDispatch} from 'react-redux';
import {getLastSelectedSlideId} from '../../../common/functions/slides';
import {defaultImageData} from '../../../common/consts/slides';
import {generateId} from '../../../common/functions/id';

function InsertPicture() {
    const dispatch = useDispatch();
    const filePicker: MutableRefObject<HTMLInputElement | null> = useRef(null);

    const handleChange = () => {
        if ((filePicker.current) && (filePicker.current.files)) {
            const reader = new FileReader();
            reader.readAsDataURL(filePicker.current.files[0]);
            reader.onload = () => {
                let image = new Image();
                image.src = reader.result as string;

                image.onload = () => {
                    dispatch(addBlock(getLastSelectedSlideId(store.getState().selectedSlides), {
                        ...defaultImageData,
                        id: generateId(),
                        imageResource: image.src,
                        width: image.width,
                        height: image.height
                    }));

                    if((filePicker.current)) {
                        filePicker.current.value = '';
                    }
                }

            }
        }
    };

    const handlePick = () => {
        if (filePicker.current) {
            filePicker.current.click()
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles.icon} src={insert_picture} alt="Insert_picture" onClick={handlePick}/>
            <input className={styles.hidden} type="file" ref={filePicker} onChange={handleChange}
                   accept="image/*, .png, .jpg, .jpeg"/>
        </div>
    )
}

export default InsertPicture;