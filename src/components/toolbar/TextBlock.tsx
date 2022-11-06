import styles from './../Button.module.css';
import text_block from '../../img/text_block.svg';

const TextBlock = () => {
  return (
    <div>
<img className={styles.button} src={text_block} alt='Text_block'/>
    </div>
  );
}

export default TextBlock;
