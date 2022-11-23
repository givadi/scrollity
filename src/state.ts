import { TextBlock } from "./actions/types";

let textBlock: TextBlock = 
    {
        type: 'text',
        chars: 'my super text',
        fontSize: 12,
        fontFamily: 'roboto',
        color: '#ffffff'
    }

let changeTextBlockHandler: Function = () => {}

function getState(): TextBlock {
    return textBlock
    
}

function setState(newTextBlock: TextBlock) {
    textBlock = newTextBlock
    // changeTextBlockHandler
    
}

function dispatch(modifyFn: Function, payload: Object) {
    setState(modifyFn(textBlock, payload))
}

function addChangeTextBlockHandler(handler: Function) {
    changeTextBlockHandler = handler
}

export {
    getState,
    setState,
    dispatch,
    addChangeTextBlockHandler
}