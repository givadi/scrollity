import styles from './../Button.module.css';
import view from '../../img/view.svg';

const View = () => {
  return (
    <div>
<img className={styles.button} src={view} alt='View'/>
    </div>
  );
}

export default View;
