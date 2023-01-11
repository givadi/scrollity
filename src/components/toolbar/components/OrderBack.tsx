import styles from '../../common/barIcon/BarIcon.module.css';
import order_back from '../../../assets/images/barIcons/order_back.svg';
import {useDispatch} from 'react-redux';
import {blockToBack, blockToFront} from '../../../store/actionCreators/slides';
import store from '../../../store/store';

const OrderBack = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={order_back} alt='Order back' onClick={() => {
        const selectedSlides = store.getState().selectedSlides;
        if (!Array.isArray(selectedSlides)) {
            dispatch(blockToBack(selectedSlides))}
    }
    }/>
    </div>
  );
}

export default OrderBack;