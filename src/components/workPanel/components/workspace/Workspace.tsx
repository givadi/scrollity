import styles from './Workspace.module.css';
import {WorkspaceCanvas} from '../canvas/WorkspaceCanvas';
import {useDispatch, useSelector} from 'react-redux';
import {getLastSelectedSlideId, getLastSlideBySelection, getSelectedBlocks, getSelectedBlocksIds} from '../../../../common/functions/slides';
import {Presentation} from '../../../../types/presentation';
import {Slide} from '../../../../types/slides';
import {clearSelectedBlocks} from '../../../../store/actionCreators/selectedSlides';
import { useEffect } from 'react';
import store from '../../../../store/store';
import { deleteBlock } from '../../../../store/actionCreators/slides';

function Workspace() {
    useSelector((state: Presentation) => state.slides);
    useSelector((state: Presentation) => state.selectedSlides);
    const dispatch = useDispatch();

    const currentSlide: Slide = getLastSlideBySelection();

    useEffect(() => {
        document.addEventListener('keydown', function(event) {
            if (event.code === 'Delete') {         
                const selectedSlides = store.getState().selectedSlides;
                const slides = store.getState().slides;
                const selectedBlock = getSelectedBlocks(selectedSlides, slides);
                dispatch(deleteBlock(getLastSelectedSlideId(selectedSlides),
                    getLastSlideBySelection().data.map((block) => block.id),
                    getSelectedBlocksIds(),
                ));
            }
        });
    }, [])

    return (
        <div className={styles.wrapper} id={'workspaceCanvas'}
             onClick={() => {
                 dispatch(clearSelectedBlocks());
             }}
        >
            <WorkspaceCanvas slide={currentSlide} isEditArea={false}/>
        </div>
    );
}

export default Workspace;