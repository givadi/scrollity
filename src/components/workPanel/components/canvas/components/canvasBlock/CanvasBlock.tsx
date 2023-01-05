import {FigureBlock} from './components/figureBlock/FigureBlock';
import {TextBlock} from './components/textBlock/TextBlock';
import {ImageBlock} from './components/imageBlock/ImageBlock';
import {BlockType} from '../../../../../../types/blocks';
import {ReactElement} from 'react';
import {BLOCK_SELECTED_BORDER_COLOR, BLOCK_SELECTED_BORDER_DASHARRAY} from '../../../../../../common/consts/slides';

type CanvasBlockProps = {
    block: BlockType,
    sizeCoefficient: number
}

function getBorder(x: number, y: number, width: number, height: number) {
    return `M ${x} ${y} h ${width} v ${height} h ${(-1) * width} Z`;
}

function getBlock(block: BlockType, sizeCoefficient: number) {
    block = {
        ...block,
        width: block.width / sizeCoefficient,
        height: block.height / sizeCoefficient,
        x: block.x / sizeCoefficient,
        y: block.y / sizeCoefficient
    }

    let blockElement: ReactElement;

    switch (block.type) {
        case 'figure':
            blockElement = <FigureBlock figure={block}/>;
            break;
        case 'text':
            block = {
                ...block,
                fontSize: block.fontSize / sizeCoefficient
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
            <path
                d={getBorder(block.x, block.y, block.width, block.height)}
                stroke={BLOCK_SELECTED_BORDER_COLOR}
                fill="transparent"
                strokeDasharray={BLOCK_SELECTED_BORDER_DASHARRAY}
            ></path>
        </g>
    );

}

function CanvasBlock(props: CanvasBlockProps) {
    const canvasBlock = getBlock(props.block, props.sizeCoefficient);
    return (
        <g>
            {canvasBlock}

        </g>
    );
}

export {
    CanvasBlock
}