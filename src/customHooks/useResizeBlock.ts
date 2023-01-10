import React from 'react';
import {BlockPositionType} from '../types/blocks';

type BlockSizeType = {
    width: number,
    height: number
}

function useResizeBlock(
    element: React.MutableRefObject<any>,
    position: BlockSizeType,
    setSize: React.Dispatch<React.SetStateAction<BlockSizeType>>
) {
    function onMouseDownHandler(event: React.MouseEvent<SVGGElement>) {
        event.stopPropagation();
        event.preventDefault();
        const startPos: BlockPositionType = {x: event.pageX, y: event.pageY}

        function onMouseMoveListener(event: MouseEvent) {
            const delta = {x: event.pageX - startPos.x, y: event.pageY - startPos.y}
            let newSize = {
                width: 0, height: 0
            }

             newSize = {width: position.width + delta.x, height: position.height + delta.y}
            if (newSize.width < 1 ) {
                newSize.width = 1;
            }
            if (newSize.height < 1 ) {
                newSize.height = 1;
            }
            if (event.shiftKey) {
                newSize.width = newSize.height;
            }

            setSize(newSize);
        }

        function onMouseUpListener() {
            element.current.removeEventListener('mousedown', onMouseDownHandler);
            document.removeEventListener('mousemove', onMouseMoveListener);
            document.removeEventListener('mouseup', onMouseUpListener);
        }

        document.addEventListener('mousemove', onMouseMoveListener);
        document.addEventListener('mouseup', onMouseUpListener);
    }

    if (element.current) {
        element.current.addEventListener('mousedown', onMouseDownHandler);
    }
}

export {useResizeBlock};