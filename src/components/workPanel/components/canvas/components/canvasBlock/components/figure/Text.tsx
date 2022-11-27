import {Block, TextBlock} from "../../../../../../../../data/types";

type TextProps = {
    text: TextBlock,
    blockStyles: BlockParams
}

type BlockParams = {
    x: number,
    y: number,
    width: number,
    height: number,
}

function getText(text: TextBlock, blockStyles: BlockParams) {
    // const textStyles = {
    //     stroke: text.colorBorder,
    //     fill: text.colorBackground
    // }

            return (
                <svg height={blockStyles.height} width={blockStyles.width}>
<div>dfsfsdfsdfsdf
    gfhfghf
    fghfghf
</div>
                </svg>
            );

}

function Text(props: TextProps) {
    const text = getText(props.text, props.blockStyles);
    return (text);
}

export {
    Text
}
