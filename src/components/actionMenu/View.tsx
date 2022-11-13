import styles from './../Icon.module.css';
import view from '../../img/view.svg';

const View = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={view} alt='View' />
    </div>
  );
}

export default View;
