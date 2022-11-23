import styles from '../../common/barIcon/BarIcon.module.css';
import text_block from '../../../assets/images/barIcons/text_block.svg';
import { useState } from 'react';
import { dispatch } from '../../../state';
import { addTextBlock } from '../../../actions/block_TextBlock';


function TextBlock() {
  const [state, setState] = useState('')
  console.log('g');
  return (

    <div className={styles.wrapper}>
      <img 
      onClick={() => dispatch(addTextBlock, Object)}
        className={styles.icon} 
        src={text_block} 
        alt='Text_block' 
        />
    </div>
  );
}

export default TextBlock;
