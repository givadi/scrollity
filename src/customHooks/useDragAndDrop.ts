import React from 'react';
import {BlockPositionType} from '../types/blocks';

function useDragAndDrop(
    element: React.MutableRefObject<any>,
    position: BlockPositionType,
    setPos: React.Dispatch<React.SetStateAction<BlockPositionType>>
) {
    function onMouseDownHandler(event: React.MouseEvent<SVGGElement>) {
        event.preventDefault();
        const startPos: BlockPositionType = {x: event.pageX, y: event.pageY}

        function onMouseMoveListener(event: MouseEvent) {
            const delta = {x: event.pageX - startPos.x, y: event.pageY - startPos.y}
            const newPos = {x: position.x + delta.x, y: position.y + delta.y}

            setPos(newPos);
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

export {useDragAndDrop};