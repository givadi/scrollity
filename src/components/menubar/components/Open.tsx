import styles from '../../common/barIcon/BarIcon.module.css';
import open_file from '../../../assets/images/barIcons/open_file.svg';

const Open = () => {
  return (
        <div className={styles.container}>
            <img className={styles.icon} src={open_file} alt='Open file' />
            <span className={styles.text}>Open file</span>
        </div>
  );
}

export default Open;
