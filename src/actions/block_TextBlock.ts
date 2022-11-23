// import TextBlock from "../components/toolbar/components/TextBlock";
import { Block, TextBlock } from "./types";

function addTextBlock(blocks: Array<Block>): Array<Block> {
    return [
        ...blocks,
        {
            id: '1',
            x: 30.0,
            y: 50.0,
            width: 20.0,
            height: 30.0,
            isSelected: false,
            blockType: {
                type: 'text',
                chars: 'my super text',
                fontSize: 12,
                fontFamily: 'roboto',
                color: '#ffffff'
            }
        }
    ]
}