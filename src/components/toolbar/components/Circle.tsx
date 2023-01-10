import styles from '../../common/barIcon/BarIcon.module.css';
import circle from '../../../assets/images/barIcons/circle.svg';
import {addBlock} from '../../../store/actionCreators/slides';
import {getLastSelectedSlideId} from '../../../common/functions/slides';
import store from '../../../store/store';
import {CIRCLE_TYPE, defaultFigureData} from '../../../common/consts/slides';
import {generateId} from '../../../common/functions/id';
import {useDispatch} from 'react-redux';

const Circle = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <img className={styles.icon} src={circle} alt="Circle" onClick={() => {
                dispatch(addBlock(getLastSelectedSlideId(store.getState().selectedSlides), {
                    ...defaultFigureData,
                    id: generateId(),
                    figureType: CIRCLE_TYPE,
                }))
            }
            }/>
        </div>
    );
}

export default Circle;
