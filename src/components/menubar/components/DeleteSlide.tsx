import styles from '../../common/barIcon/BarIcon.module.css';
import delete_slide from '../../../assets/images/barIcons/delete_slide.svg';

const DeleteSlide = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={delete_slide} alt='Delete Slide' />
    </div>
  );
}

export default DeleteSlide;
