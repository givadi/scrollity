import styles from '../../common/menuIcon/MenuIcon.module.css';
import view from '../../../assets/images/barIcons/view.svg';

const View = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={view} alt='View' />
    </div>
  );
}

export default View;
