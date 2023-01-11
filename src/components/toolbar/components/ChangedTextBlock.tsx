import styles from '../../common/barIcon/BarIcon.module.css';
import align from '../../../assets/images/barIcons/align.png';
import {useDispatch} from 'react-redux';
import {addBlock, changeTextBlock} from '../../../store/actionCreators/slides';
import {getLastSelectedSlideId, getSelectedBlocks} from '../../../common/functions/slides';
import store from '../../../store/store';
import {defaultTextData, TEXT_TYPE} from '../../../common/consts/slides';
import React, { useState } from 'react';
import { generateId } from '../../../common/functions/id';
import TextBlock from './TextBlock';

const ChangedTextBlock = () => {
    // const dispatch = useDispatch();
    // const [text, setText] = useState('Please, enter yout text here');
    
  
    // return (
    //     <div className={styles.container} >
    //     <img className={styles.icon} src={align} alt="Text block"
    //          onClick={(event) => {
    //             const slides = store.getState().slides;
    //             const newText = TextBlock.input.value;
    //             // const selectedBlock = getSelectedBlocks(selectedSlides, slides)[0];
    //             dispatch(changeTextBlock(getLastSelectedSlideId(store.getState().selectedSlides), newText));
    //          }
    //          }/>
    // </div>
    // );
}

export default ChangedTextBlock; 