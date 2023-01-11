import styles from '../../common/barIcon/BarIcon.module.css';
import {useDispatch, useSelector} from 'react-redux';
import store from '../../../store/store';
import {Presentation} from '../../../data/types';
import {DEFAULT_COLOR} from '../../../common/consts/common';
import {getSelectedBlocks} from '../../../common/functions/slides';
import {changeBlockBorder} from '../../../store/actionCreators/slides';

function getCurrentBlockBorder(): string {
    const currentBlock = getSelectedBlocks(store.getState().selectedSlides, store.getState().slides)[0];

    return currentBlock && currentBlock.type === 'figure'
        ? currentBlock.colorBorder
        : DEFAULT_COLOR;
}

function BlockBorder() {
    const dispatch = useDispatch();
    useSelector((state: Presentation) => {
        const colorPickerInput: HTMLInputElement = document.getElementById('blockBorderColorPicker') as HTMLInputElement;

        if (colorPickerInput) {
            colorPickerInput.value = getCurrentBlockBorder();
        }
        return state.selectedSlides;
    });

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <input className={styles.colorPicker}
                       defaultValue={getCurrentBlockBorder()}
                       id={'blockBorderColorPicker'}
                       type={'color'}
                       onBlur={(event) => {
                           const selectedSlides = store.getState().selectedSlides;

                           if (!Array.isArray(selectedSlides)) {
                               dispatch(changeBlockBorder(
                                   selectedSlides,
                                   event.currentTarget.value
                               ))}
                           }
                       }

                       onKeyDown={(event) => {
                           const selectedSlides = store.getState().selectedSlides;

                           if (!Array.isArray(selectedSlides)) {
                               if (event.key === 'Enter') {
                                   dispatch(changeBlockBorder(
                                       selectedSlides,
                                       event.currentTarget.value
                                   ))
                               }
                           }
                       }}
                />
            </div>
        </div>
    );
}

export default BlockBorder;