import styles from '../../common/barIcon/BarIcon.module.css';
import add from '../../../assets/images/barIcons/add.svg';
import {useDispatch} from 'react-redux';
import {addSlide} from '../../../store/actionCreators/slides';
import store from '../../../store/store';

function AddNewSlide() {
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper} onClick={() => {
            dispatch(addSlide(store.getState().selectedSlides));
        }}>
            <img className={styles.icon} src={add} alt='Add new slide'/>
        </div>
    );
}

export default AddNewSlide;