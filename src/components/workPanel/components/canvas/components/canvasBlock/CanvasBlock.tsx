import {Figure} from './components/figure/Figure';
import {BlockType} from '../../../../../../data/types';
import {TextBlock} from './components/textBlock/TextBlock';
import {ImageBlock} from './components/imageBlock/ImageBlock';

type CanvasBlockProps = {
    block: BlockType
}

function getBlock(block: BlockType) {
    switch (block.type)
    {
        case 'figure':
            return (
                <Figure figure={block} />
            );
        case 'text':
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
    const canvasBlock = getBlock(props.block);
    return (
        canvasBlock
    );
}

export {
    CanvasBlock
}