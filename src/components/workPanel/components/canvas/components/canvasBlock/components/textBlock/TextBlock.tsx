import {TextBlockType} from '../../../../../../../../types/blocks';
import Italic from '../../../../../../../toolbar/components/Italic';

type TextBlockProps = {
    textBlock: TextBlockType
}

function TextBlock(props: TextBlockProps) {
    console.log('(props.textBlock.fontStyle', props.textBlock.fontStyle);
    const textBlockStyles = {
        fontSize: props.textBlock.fontSize,
        fontFamily: props.textBlock.fontFamily,
        fontStyle: props.textBlock.fontStyle ? 'italic' : 'normal',
        fontWeight: props.textBlock.fontWeight ? 700 : 0,
        textDecoration:props.textBlock.textDecoration,
        fill: props.textBlock.color,
    }

    return (
        <foreignObject
            x={props.textBlock.x}
            y={props.textBlock.y}
            width={props.textBlock.width}
            height={props.textBlock.height}
            style={{...textBlockStyles}}
        >
            {props.textBlock.chars}
        </foreignObject>
    );
}

export {
    TextBlock
}