import styles from '../../common/menuIcon/MenuIcon.module.css';
import save_as from '../../../assets/images/barIcons/save_as.svg';

const Save = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={save_as} alt='Save' />
    </div>
  );
}

export default Save;