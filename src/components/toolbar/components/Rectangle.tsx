import styles from '../../common/barIcon/BarIcon.module.css';
import rectangle from '../../../assets/images/barIcons/rectangle.svg';
import {useDispatch} from 'react-redux';
import {addBlock} from '../../../store/actionCreators/slides';
import {getLastSelectedSlideId} from '../../../common/functions/slides';
import store from '../../../store/store';
import {defaultFigureData, RECTANGLE_TYPE} from '../../../common/consts/slides';

const Rectangle = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <img className={styles.icon} src={rectangle} alt="Rectangle"
                 onClick={() => {
                     dispatch(addBlock(getLastSelectedSlideId(store.getState().selectedSlides), {
                         ...defaultFigureData,
                         figureType: RECTANGLE_TYPE,
                     }))
                 }
                 }/>
        </div>
    );
}

export default Rectangle;
