import styles from './../Icon.module.css';
import text_block from '../../img/text_block.svg';

const TextBlock = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={text_block} alt='Text_block' />
    </div>
  );
}

export default TextBlock;
