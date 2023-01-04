import styles from '../../common/barIcon/BarIcon.module.css';
import delete_slide from '../../../assets/images/barIcons/delete_slide.svg';
import {useDispatch} from 'react-redux';
import {deleteSlides} from '../../../store/actionCreators/slides';
import store from '../../../store/store';
import {updateAfterDeletingSlides} from '../../../store/actionCreators/selectedSlides';

function DeleteSlide() {
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper} onClick={() => {
            dispatch(deleteSlides(store.getState().selectedSlides));
            dispatch(updateAfterDeletingSlides(store.getState().slides));
        }}>
            <img className={styles.icon} src={delete_slide} alt='Delete Slide' />
        </div>
    );
}

export default DeleteSlide;
