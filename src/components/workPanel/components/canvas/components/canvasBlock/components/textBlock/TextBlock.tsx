import {TextBlockType} from '../../../../../../../../data/types';

type TextBlockProps = {
    textBlock: TextBlockType
}

function TextBlock(props: TextBlockProps) {
    const textBlockStyles = {
        fontSize: props.textBlock.fontSize,
        fontFamily: props.textBlock.fontFamily,
        fontStyle: props.textBlock.fontStyle,
        fontWeight: props.textBlock.fontWeight,
        textDecoration:props.textBlock.textDecoration,
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