import styles from '../../common/menuIcon/MenuIcon.module.css';
import open_file from '../../../img/open_file.svg';

const Open = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={open_file} alt='Open file' />
    </div>
  );
}

export default Open;
