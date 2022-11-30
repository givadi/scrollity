import {ImageBlockType} from '../../../../../../../../data/types';

type ImageBlockProps = {
    imageBlock: ImageBlockType
}

function ImageBlock(props: ImageBlockProps) {
    const ImageBlockStyles = {
        x: props.imageBlock.x,
        y: props.imageBlock.y,
        width: props.imageBlock.width,
        height: props.imageBlock.height
    }

    return (
        <image preserveAspectRatio="none" href={props.imageBlock.imageResource} style={ImageBlockStyles}></image>
    );
}

export {
    ImageBlock
}