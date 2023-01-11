import styles from '../../common/barIcon/BarIcon.module.css';
import {useDispatch, useSelector} from 'react-redux';
import store from '../../../store/store';
import {Presentation} from '../../../data/types';
import {DEFAULT_COLOR} from '../../../common/consts/common';
import {getSelectedBlocks} from '../../../common/functions/slides';
import {changeBlockColor} from '../../../store/actionCreators/slides';

function getCurrentBlockColor(): string {
    const currentBlock = getSelectedBlocks(store.getState().selectedSlides, store.getState().slides)[0];

    return currentBlock && currentBlock.type === 'figure'
        ? currentBlock.colorBackground
        : DEFAULT_COLOR;
}

function BlockColor() {
    const dispatch = useDispatch();
    useSelector((state: Presentation) => {
        const colorPickerInput: HTMLInputElement = document.getElementById('blockBackgroundColorPicker') as HTMLInputElement;

        if (colorPickerInput) {
            colorPickerInput.value = getCurrentBlockColor();
        }
        return state.selectedSlides;
    });

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <input className={styles.colorPicker}
                       defaultValue={getCurrentBlockColor()}
                       id={'blockBackgroundColorPicker'}
                       type={'color'}
                       onBlur={(event) => {
                           const selectedSlides = store.getState().selectedSlides;

                           if (!Array.isArray(selectedSlides)) {
                               dispatch(changeBlockColor(
                                   selectedSlides,
                                   event.currentTarget.value
                               ))}
                           }
                       }

                       onKeyDown={(event) => {
                           const selectedSlides = store.getState().selectedSlides;

                           if (!Array.isArray(selectedSlides)) {
                               if (event.key === 'Enter') {
                                   dispatch(changeBlockColor(
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

export default BlockColor;