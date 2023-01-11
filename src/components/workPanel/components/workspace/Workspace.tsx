import styles from './Workspace.module.css';
import {WorkspaceCanvas} from '../canvas/WorkspaceCanvas';
import {useDispatch, useSelector} from 'react-redux';
import {getLastSelectedSlideId, getLastSlideBySelection, getSelectedBlocks} from '../../../../common/functions/slides';
import {Presentation} from '../../../../types/presentation';
import {Slide} from '../../../../types/slides';
import {clearSelectedBlocks} from '../../../../store/actionCreators/selectedSlides';
import { deleteBlock } from '../../../../store/actions/slides';
import { useEffect } from 'react';
import store from '../../../../store/store';

function Workspace() {
    useSelector((state: Presentation) => state.slides);
    useSelector((state: Presentation) => state.selectedSlides);
    const dispatch = useDispatch();

    const currentSlide: Slide = getLastSlideBySelection();

    useEffect(() => {
        document.addEventListener('keydown', function(event) {
            if (event.code === 'Delete') {
                console.log('del');
                const selectedSlides = store.getState().selectedSlides;
                const slides = store.getState().slides;
                const selectedBlock = getSelectedBlocks(selectedSlides, slides)[0];
                dispatch(deleteBlock(getLastSelectedSlideId(selectedSlides), selectedBlock));
            }
        });

        // return () => {
            // удалить  addEventListener keydown
        
    }, [])

    return (
        <div className={styles.wrapper} id={'workspaceCanvas'}
             onClick={() => {
                 dispatch(clearSelectedBlocks());
             }}
        >
            <WorkspaceCanvas slide={currentSlide} isFilmstrip={false}/>
        </div>
    );
}

export default Workspace;