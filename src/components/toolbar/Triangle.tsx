import styles from './../Button.module.css';
import triangle from '../../img/triangle.svg';

const Triangle = () => {
  return (
    <div>
<img className={styles.button} src={triangle} alt='Triangle'/>
    </div>
  );
}

export default Triangle;
