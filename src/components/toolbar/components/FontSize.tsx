import styles from '../../common/barIcon/BarIcon.module.css';
import font_size from '../../../assets/images/barIcons/font_size.svg';
import store from '../../../store/store';
import {useDispatch} from 'react-redux';
import {changeFontSize} from '../../../store/actionCreators/slides';
import { getLastSelectedSlideId, getSelectedBlocks } from '../../../common/functions/slides';

const FontSize = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <form >
        <label>Font size: </label>
          <select  onChange = {(event) => { 
            const selectedSlides = store.getState().selectedSlides;
            const slides = store.getState().slides;
            const selectedBlocks = getSelectedBlocks(selectedSlides, slides)[0];
            const newFontSize = Number(event.target.value);
            dispatch(changeFontSize(getLastSelectedSlideId(selectedSlides), selectedBlocks, newFontSize));
            }}>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option value="32">32</option>
            <option value="36">36</option>
          </select>
      </form>  
    </div>
);
}

export default FontSize;