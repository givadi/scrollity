import styles from '../../common/barIcon/BarIcon.module.css';
import text_block from '../../../assets/images/barIcons/text_block.svg';
import {useDispatch} from 'react-redux';
import {addBlock} from '../../../store/actionCreators/slides';
import {getLastSelectedSlideId} from '../../../common/functions/slides';
import store from '../../../store/store';
import {defaultTextData, TEXT_TYPE} from '../../../common/consts/slides';

const TextBlock = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <img className={styles.icon} src={text_block} alt="Text block"
                 onClick={() => {
                     dispatch(addBlock(getLastSelectedSlideId(store.getState().selectedSlides), {
                         ...defaultTextData,
                         type: TEXT_TYPE,
                     }))
                 }
                 }/>
        </div>
    );
}

export default TextBlock;