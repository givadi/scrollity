import styles from '../../common/barIcon/BarIcon.module.css';
import bold from '../../../assets/images/barIcons/bold.svg';
import store from '../../../store/store';
import {useDispatch} from 'react-redux';
import {changeFontWeight} from '../../../store/actionCreators/slides';
import { getLastSelectedSlideId, getSelectedBlocks } from '../../../common/functions/slides';

const Bold = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={bold} alt='Bold'  onClick = {(event) => { 
            const selectedSlides = store.getState().selectedSlides;
            const slides = store.getState().slides;
            const selectedBlock = getSelectedBlocks(selectedSlides, slides)[0];
            dispatch(changeFontWeight(getLastSelectedSlideId(selectedSlides), selectedBlock));
            }}
      />
    </div>
);
}

export default Bold;