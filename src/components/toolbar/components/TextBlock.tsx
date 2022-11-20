import styles from '../../common/menuIcon/MenuIcon.module.css';
import text_block from '../../../assets/images/barIcons/text_block.svg';

const TextBlock = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={text_block} alt='Text_block' />
    </div>
  );
}

export default TextBlock;
