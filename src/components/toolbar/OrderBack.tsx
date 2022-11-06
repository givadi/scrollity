import styles from './../Button.module.css';
import order_back from '../../img/order_back.svg';

const OrderBack = () => {
  return (
    <div>
<img className={styles.button} src={order_back} alt='Order back'/>
    </div>
  );
}

export default OrderBack;
