import styles from './../Button.module.css';
import order_front from '../../img/order_front.svg';

const OrderFront = () => {
  return (
    <div>
<img className={styles.button} src={order_front} alt='Order front'/>
    </div>
  );
}

export default OrderFront;
