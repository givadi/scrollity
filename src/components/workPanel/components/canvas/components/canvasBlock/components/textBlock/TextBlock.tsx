import {TextBlockType} from '../../../../../../../../types/blocks';

type TextBlockProps = {
    textBlock: TextBlockType
}

function TextBlock(props: TextBlockProps) {
    const textBlockStyles = {
        fontSize: props.textBlock.fontSize,
        fontFamily: props.textBlock.fontFamily,
        fontStyle: props.textBlock.fontStyle ? 'normal' : 'italic',
        fontWeight: props.textBlock.fontWeight ? 'normal' : 'bold',
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
           
            {/* <input defaultValue='' type="text" placeholder="Please..." onFocus={(event)=> {
                event.stopPropagation();
                console.log('djdjdjdjdj');
            }}></input> */}
            {props.textBlock.chars}
        </foreignObject>
    );
}

export {
    TextBlock
}