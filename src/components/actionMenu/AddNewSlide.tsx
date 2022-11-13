import styles from './../Icon.module.css';
import add from '../../img/add.svg';

const AddNewSlide = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={add} alt='Add new slide' />
    </div>
  );
}

export default AddNewSlide;
