import React, {useEffect} from 'react';
import {BlockPositionType} from '../types/blocks';
import {useDispatch} from 'react-redux';
import {moveBlocks} from '../store/actionCreators/slides';
import store from '../store/store';
import {getLastSelectedSlideId, getSelectedBlocksIds} from '../common/functions/slides';

function useDragAndDrop(
    element: React.MutableRefObject<any>,
    position: BlockPositionType,
    setPos: React.Dispatch<React.SetStateAction<BlockPositionType>>
) {
    const dispatch = useDispatch();

    let newPosition: BlockPositionType = {x: position.x, y: position.y};
    function onMouseDownHandler(event: React.MouseEvent<SVGGElement>) {
        event.preventDefault();
        const startPos: BlockPositionType = {x: event.pageX, y: event.pageY}


        function onMouseMoveListener(event: MouseEvent) {
            const delta = {x: event.pageX - startPos.x, y: event.pageY - startPos.y}
            newPosition = {x: position.x + delta.x, y: position.y + delta.y}

            setPos(newPosition);
        }

        function onMouseUpListener() {
            const a = getLastSelectedSlideId(store.getState().selectedSlides);
            const b = getSelectedBlocksIds(store.getState().selectedSlides);
            const c = newPosition;
            setPos(newPosition);
            dispatch(moveBlocks(a,b,c));
            element.current.removeEventListener('mousedown', onMouseDownHandler);
            document.removeEventListener('mousemove', onMouseMoveListener);
            document.removeEventListener('mouseup', onMouseUpListener);
        }

        document.addEventListener('mousemove', onMouseMoveListener);
        document.addEventListener('mouseup', onMouseUpListener);
    }

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener('mousedown', onMouseDownHandler);
        }
    }, [element, onMouseDownHandler])
}

export {useDragAndDrop};