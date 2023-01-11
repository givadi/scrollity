import styles from '../../common/barIcon/BarIcon.module.css';
import order_front from '../../../assets/images/barIcons/order_front.svg';
import {useDispatch} from 'react-redux';
import {blockToFront} from '../../../store/actionCreators/slides';
import store from '../../../store/store';

const OrderFront = () => {
    const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={order_front} alt='Order front' onClick={() => {
          const selectedSlides = store.getState().selectedSlides;
          if (!Array.isArray(selectedSlides)) {
              dispatch(blockToFront(selectedSlides))}
      }
      }/>
    </div>
  );
}

export default OrderFront;
