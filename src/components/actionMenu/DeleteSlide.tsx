import styles from './../Icon.module.css';
import delete_slide from '../../img/delete_slide.svg';

const DeleteSlide = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={delete_slide} alt='Delete Slide' />
    </div>
  );
}

export default DeleteSlide;
