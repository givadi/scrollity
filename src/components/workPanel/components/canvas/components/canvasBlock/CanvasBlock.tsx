import {Figure} from './components/figure/Figure';
import {BlockType} from '../../../../../../data/types';

type CanvasBlockProps = {
    block: BlockType
}

function getBlock(block: BlockType) {
    if (block.type === 'figure') {
        return (
            <Figure figure={block} />
        );
    }
    else {
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