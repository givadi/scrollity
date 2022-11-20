import styles from '../../common/menuIcon/MenuIcon.module.css';
import order_back from '../../../assets/images/barIcons/order_back.svg';

const OrderBack = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={order_back} alt='Order back' />
    </div>
  );
}

export default OrderBack;
