import styles from './../Button.module.css';
import add from '../../img/add.svg';

const AddNewSlide = () => {
return (
    <div>
<img className={styles.button} src={add} alt='Add new slide'/>
    </div>
  );
}

export default AddNewSlide;
