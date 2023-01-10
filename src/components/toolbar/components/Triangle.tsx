import styles from '../../common/barIcon/BarIcon.module.css';
import triangle from '../../../assets/images/barIcons/triangle.svg';
import {addBlock} from '../../../store/actionCreators/slides';
import {getLastSelectedSlideId} from '../../../common/functions/slides';
import store from '../../../store/store';
import {defaultFigureData,TRIANGLE_TYPE} from '../../../common/consts/slides';
import {generateId} from '../../../common/functions/id';
import {useDispatch} from 'react-redux';

const Triangle = () => {
    const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img className={styles.icon}
           src={triangle}
           alt='Triangle'
           onClick={() => {
               dispatch(addBlock(getLastSelectedSlideId(store.getState().selectedSlides), {
                   ...defaultFigureData,
                   id: generateId(),
                   figureType: TRIANGLE_TYPE,
               }))
           }
           }/>
    </div>
  );
}

export default Triangle;
