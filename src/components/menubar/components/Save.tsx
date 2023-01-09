import styles from '../../common/barIcon/BarIcon.module.css';
import save_as from '../../../assets/images/barIcons/save_as.svg';

const Save = () => {
    return (
        <div className={styles.container}>
            <img className={styles.icon} src={save_as} alt="Save"/>
            <span className={styles.text}>Save file</span>
        </div>
    );
}

export default Save;