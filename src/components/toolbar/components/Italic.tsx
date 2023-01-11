import styles from '../../common/barIcon/BarIcon.module.css';
import italic from '../../../assets/images/barIcons/italic.svg';
import store from '../../../store/store';
import {useDispatch} from 'react-redux';
import {changeFontStyle} from '../../../store/actionCreators/slides';
import { getLastSelectedSlideId, getSelectedBlocks } from '../../../common/functions/slides';

const Italic = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={italic} alt='Italic'  onClick = {(event) => { 
            const selectedSlides = store.getState().selectedSlides;
            const slides = store.getState().slides;
            const selectedBlock = getSelectedBlocks(selectedSlides, slides)[0];
            dispatch(changeFontStyle(getLastSelectedSlideId(selectedSlides), selectedBlock));
            }}
      />
    </div>
);
}

export default Italic;