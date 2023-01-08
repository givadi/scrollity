import {FigureBlock} from './components/figureBlock/FigureBlock';
import {TextBlock} from './components/textBlock/TextBlock';
import {ImageBlock} from './components/imageBlock/ImageBlock';
import {BlockType} from '../../../../../../types/blocks';
import {ReactElement, useRef, useState} from 'react';
import {BLOCK_SELECTED_BORDER_COLOR, BLOCK_SELECTED_BORDER_DASHARRAY} from '../../../../../../common/consts/slides';
import store from '../../../../../../store/store';
import {Selection} from '../../../../../../types/selectedSlides';
import {useDispatch} from 'react-redux';
import {selectBlock, selectBlocks} from '../../../../../../store/actionCreators/selectedSlides';
import {useDragAndDrop} from '../../../../../../customHooks/useDragAndDrop';

type CanvasBlockProps = {
    block: BlockType,
    isFilmstrip: boolean
}

function checkIfSelected(blockId: string): boolean {
    const selectedSlides: Array<string> | Selection = store.getState().selectedSlides;
    if (!Array.isArray(selectedSlides)) {
        return selectedSlides.selectedBlocksId.includes(blockId);
    }

    return false;
}

function getBorder(x: number, y: number, width: number, height: number) {
    return `M ${x} ${y} h ${width} v ${height} h ${(-1) * width} Z`;
}

function getBlock(block: BlockType, isFilmstrip: boolean) {
    let blockElement: ReactElement;

    switch (block.type) {
        case 'figure':
            blockElement = <FigureBlock figure={block}/>;
            break;
        case 'text':
            block = {
                ...block,
                fontSize: block.fontSize
            }
            blockElement = <TextBlock textBlock={block}/>;
            break;
        case 'image':
            blockElement = <ImageBlock imageBlock={block}/>;
            break;
        default:
            return null;
    }

    return (
        <g>
            {blockElement}
            {!isFilmstrip && checkIfSelected(block.id) && <path
                d={getBorder(block.x, block.y, block.width, block.height)}
                stroke={BLOCK_SELECTED_BORDER_COLOR}
                fill="transparent"
                strokeDasharray={BLOCK_SELECTED_BORDER_DASHARRAY}
            ></path>}
        </g>
    );

}

function CanvasBlock(props: CanvasBlockProps) {
    const dispatch = useDispatch();
    const [position, setPosition] = useState({x: props.block.x, y: props.block.y})
    let canvasBlock = getBlock({
        ...props.block,
        x: position.x,
        y: position.y
    }, props.isFilmstrip);
    const ref = useRef(null);
    useDragAndDrop(ref, position, setPosition);

    return (
        <g
            ref={ref}
            onClick={(event) => {
                if (props.isFilmstrip) return;

                event.stopPropagation();
                event.ctrlKey ? dispatch(selectBlocks(props.block.id)) : dispatch(selectBlock(props.block.id));
            }}
        >
            {canvasBlock}
        </g>
    );
}

export {
    CanvasBlock
}