import styles from './../Icon.module.css';
import insert_picture from '../../img/insert_picture.svg';

const InsertPicture = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={insert_picture} alt='Insert_picture' />
    </div>
  );
}

export default InsertPicture;
