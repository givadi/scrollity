import styles from '../../common/menuIcon/MenuIcon.module.css';
import order_front from '../../../img/order_front.svg';

const OrderFront = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={order_front} alt='Order front' />
    </div>
  );
}

export default OrderFront;
