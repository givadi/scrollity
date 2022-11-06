import styles from './../Button.module.css';
import circle from '../../img/circle.svg';

const Circle = () => {
  return (
    <div>
<img className={styles.button} src={circle} alt='Circle'/>
    </div>
  );
}

export default Circle;
