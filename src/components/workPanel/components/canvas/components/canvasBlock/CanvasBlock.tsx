import {Block} from '../../../../../../data/types';
import {GraphicObject} from "../../../../../../data/types";
import {Figure} from "./components/figure/Figure";

type CanvasBlockProps = {
    block: Block
}

function getBlock(block: Block) {
    const blockStyles = {
        x: block.x,
        y: block.y,
        width: block.width,
        height: block.height,
    }

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