import React, {useEffect} from 'react';
import {BlockPositionType, BlockSizeType} from '../types/blocks';
import {useDispatch} from 'react-redux';
import {resizeBlocks} from '../store/actionCreators/slides';
import {getLastSelectedSlideId, getSelectedBlocksIds} from '../common/functions/slides';
import store from '../store/store';

function useResizeBlock(
    element: React.MutableRefObject<any>,
    position: BlockSizeType,
    setSize: React.Dispatch<React.SetStateAction<BlockSizeType>>
) {
    const dispatch = useDispatch();

    let newSize: BlockSizeType = {width: position.width, height: position.height};

    function onMouseDownHandler(event: React.MouseEvent<SVGGElement>) {
        event.stopPropagation();
        event.preventDefault();
        const startPos: BlockPositionType = {x: event.pageX, y: event.pageY}

        function onMouseMoveListener(event: MouseEvent) {
            const delta = {x: event.pageX - startPos.x, y: event.pageY - startPos.y}

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
            const a = getLastSelectedSlideId(store.getState().selectedSlides);
            const b = getSelectedBlocksIds(store.getState().selectedSlides);
            dispatch(resizeBlocks(a, b, newSize));
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

export {useResizeBlock};