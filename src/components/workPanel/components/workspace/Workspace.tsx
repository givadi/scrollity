import styles from './Workspace.module.css';
import {WorkspaceCanvas} from '../canvas/WorkspaceCanvas';
import {useDispatch, useSelector} from 'react-redux';
import {
    getLastSlideBySelection,
} from '../../../../common/functions/slides';
import {Presentation} from '../../../../types/presentation';
import {Slide} from '../../../../types/slides';
import {clearSelectedBlocks} from '../../../../store/actionCreators/selectedSlides';

function Workspace() {
    useSelector((state: Presentation) => state.slides);
    useSelector((state: Presentation) => state.selectedSlides);
    const dispatch = useDispatch();

    const currentSlide: Slide = getLastSlideBySelection();

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