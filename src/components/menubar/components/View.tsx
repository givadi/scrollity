import styles from '../../common/barIcon/BarIcon.module.css';
import view from '../../../assets/images/barIcons/view.svg';

const View = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={view} alt='View' />
    </div>
  );
}

export default View;
