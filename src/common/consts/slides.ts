import {generateId} from '../functions/id';
import {FigureBlockType, ImageBlockType} from '../../types/blocks';
import {BlockBase} from '../../data/types';

const DEFAULT_BLOCK_COLOR = '#ffffff';
const FIGURE_TYPE = 'figure';
const RECTANGLE_TYPE = 'rectangle';

const IMAGE_TYPE = 'image';

const BLOCK_SELECTED_BORDER_COLOR = '#000000';
const BLOCK_SELECTED_BORDER_DASHARRAY = '5';

const defaultBlockBase: BlockBase = {
    id: generateId(),
    x: 0,
    y: 0,
    width: 100,
    height: 100,
}

const defaultFigureData: FigureBlockType = {
    ...defaultBlockBase,
    type: FIGURE_TYPE,
    colorBorder: DEFAULT_BLOCK_COLOR,
    colorBackground: DEFAULT_BLOCK_COLOR,
    figureType: RECTANGLE_TYPE
}

const defaultImageData: ImageBlockType = {
    ...defaultBlockBase,
    type: IMAGE_TYPE,
    imageResource: ''
}

export {
    defaultBlockBase,
    defaultFigureData,
    defaultImageData,
    DEFAULT_BLOCK_COLOR,
    RECTANGLE_TYPE,
    FIGURE_TYPE,
    BLOCK_SELECTED_BORDER_COLOR,
    BLOCK_SELECTED_BORDER_DASHARRAY,
};