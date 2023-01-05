import {FigureBlock} from './components/figureBlock/FigureBlock';
import {TextBlock} from './components/textBlock/TextBlock';
import {ImageBlock} from './components/imageBlock/ImageBlock';
import {BlockType} from '../../../../../../types/blocks';

type CanvasBlockProps = {
    block: BlockType,
    sizeCoefficient: number
}

function getBlock(block: BlockType, sizeCoefficient: number) {
    block = {
        ...block,
        width: block.width / sizeCoefficient,
        height: block.height / sizeCoefficient,
        x: block.x / sizeCoefficient,
        y: block.y / sizeCoefficient
    }

    switch (block.type)
    {
        case 'figure':
            return (
                <FigureBlock figure={block} />
            );
        case 'text':
            block = {
                ...block,
                fontSize: block.fontSize / sizeCoefficient
            }
            return (
                <TextBlock textBlock={block} />
            );
        case 'image':
            return (
                <ImageBlock imageBlock={block} />
            );
        default:
            return null;
    }
}

function CanvasBlock(props: CanvasBlockProps) {
    const canvasBlock = getBlock(props.block, props.sizeCoefficient);
    return (
        canvasBlock
    );
}

export {
    CanvasBlock
}