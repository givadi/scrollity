import styles from '../../common/barIcon/BarIcon.module.css';
import font_family from '../../../assets/images/barIcons/font_family.svg';
import store from '../../../store/store';
import {useDispatch} from 'react-redux';
import {changeFontFamily} from '../../../store/actionCreators/slides';
import { getLastSelectedSlideId, getSelectedBlocks } from '../../../common/functions/slides';

const FontFamily = () => {
  const dispatch = useDispatch();
 
  return (
    <div className={styles.container}>
      <form >
        <label>Font family: </label>
       
          <select  onChange = {(event) => { 
            const selectedSlides = store.getState().selectedSlides;
            const slides = store.getState().slides;
            const selectedBlocks = getSelectedBlocks(selectedSlides, slides)[0];
            const newFontFamily = event.target.value;
            dispatch(changeFontFamily(getLastSelectedSlideId(selectedSlides), selectedBlocks, newFontFamily));
            }}>
            <option value='Arial'>Arial</option>
            <option value='Tahoma'>Tahoma</option>
            <option value='Impact'>Impact</option>
            <option value='Times'>Times</option>
          </select>
      </form>  
    </div>
);

}

export default FontFamily;