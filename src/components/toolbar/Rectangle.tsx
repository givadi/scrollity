import styles from './../Button.module.css';
import rectangle from '../../img/rectangle.svg';

const Rectangle = () => {
  return (
    <div>
<img className={styles.button} src={rectangle} alt='Rectangle'/>
    </div>
  );
}

export default Rectangle;
