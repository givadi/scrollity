import {TextBlockType} from '../../../../../../../../types/blocks';

type TextBlockProps = {
    textBlock: TextBlockType
}

function TextBlock(props: TextBlockProps) {
    const textBlockStyles = {
        fontSize: props.textBlock.fontSize,
        fontFamily: props.textBlock.fontFamily,
        fontStyle: props.textBlock.fontStyle,
        fill: props.textBlock.color,
    }

    return (
        <text x={props.textBlock.x} y={props.textBlock.y} style={textBlockStyles}>
            {props.textBlock.chars}
        </text>
    );
}

export {
    TextBlock
}