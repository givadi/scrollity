import styles from '../../common/barIcon/BarIcon.module.css';
import align from '../../../assets/images/barIcons/align.png';
import store from '../../../store/store';
import {useDispatch} from 'react-redux';
import {changeFontSize} from '../../../store/actionCreators/slides';
import { getLastSelectedSlideId, getSelectedBlocks } from '../../../common/functions/slides';

const TextAlign = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <form >
        <label><img className={styles.icon} src={align} alt='text align' /> </label>

      </form>  
    </div>
);
}

export default TextAlign;