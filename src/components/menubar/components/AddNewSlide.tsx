import styles from '../../common/barIcon/BarIcon.module.css';
import add from '../../../assets/images/barIcons/add.svg';
import {useDispatch} from 'react-redux';
import {addSlide} from '../../../store/actionCreators/slides';

function AddNewSlide() {
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper} onClick={() => {
            dispatch(addSlide());
        }}>
            <img className={styles.icon} src={add} alt='Add new slide'/>
        </div>
    );
}

export default AddNewSlide;
