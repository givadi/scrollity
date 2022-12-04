import styles from '../../common/barIcon/BarIcon.module.css';
import delete_slide from '../../../assets/images/barIcons/delete_slide.svg';
import { dispatch } from '../../../data/testData_v2';
import { deleteSlides } from '../../../actions/slides';

const DeleteSlide = () => {
  return (
    <div className={styles.wrapper} onClick={() => dispatch(deleteSlides, {})}>
      <img className={styles.icon} src={delete_slide} alt='Delete Slide' />
    </div>
  );
}

export default DeleteSlide;
