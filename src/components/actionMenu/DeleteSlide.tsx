import styles from './../Button.module.css';
import delete_slide from '../../img/delete_slide.svg';

const DeleteSlide = () => {
  return (
    <div>
<img className={styles.button} src={delete_slide} alt='Delete Slide'/>
    </div>
  );
}

export default DeleteSlide;
