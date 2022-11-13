import styles from './../Icon.module.css';
import order_back from '../../img/order_back.svg';

const OrderBack = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={order_back} alt='Order back' />
    </div>
  );
}

export default OrderBack;
