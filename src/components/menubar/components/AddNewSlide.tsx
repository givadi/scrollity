import styles from '../../common/barIcon/BarIcon.module.css';
import add from '../../../assets/images/barIcons/add.svg';
import { dispatch } from '../../../data/testData_v2';
import { addSlide } from '../../../actions/slides';

const AddNewSlide = () => {
  return (
    <div className={styles.wrapper} onClick={() => dispatch(addSlide, 1)}>
      <img className={styles.icon} src={add} alt='Add new slide' />
    </div>
  );
}

export default AddNewSlide;
