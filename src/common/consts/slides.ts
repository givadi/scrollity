import {generateId} from '../functions/id';
import {FigureBlockType, ImageBlockType, TextBlockType} from '../../types/blocks';
import {BlockBase} from '../../data/types';

const DEFAULT_BLOCK_COLOR = '#ffffff';
const FIGURE_TYPE = 'figure';
const RECTANGLE_TYPE = 'rectangle';
const TRIANGLE_TYPE = 'triangle';
const CIRCLE_TYPE = 'circle';

const IMAGE_TYPE = 'image';
const TEXT_TYPE = 'text';

const BLOCK_SELECTED_BORDER_COLOR = '#000000';
const BLOCK_SELECTED_BORDER_DASHARRAY = '5';

const DEFAULT_BLOCK_TEXT = 'Please, enter your text';
const DEFAULT_BLOCK_FONT_COLOR = '#ffffff';
const DEFAULT_BLOCK_FONT_FAMILY ='Arial';
const DEFAULT_BLOCK_FONT_STYLE = 'normal';
const DEFAULT_BLOCK_FONT_SIZE = 20;


const defaultBlockBase: BlockBase = {
    id: '',
    x: 0,
    y: 0,
    width: 100,
    height: 100,
}

const defaultTextBlockBase: BlockBase = {
    id: generateId(),
    x: 0,
    y: 0,
    width: 300,
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

const defaultTextData: TextBlockType = {
    ...defaultTextBlockBase,
    type: TEXT_TYPE,
    chars: DEFAULT_BLOCK_TEXT,
    fontSize: DEFAULT_BLOCK_FONT_SIZE,
    fontFamily: DEFAULT_BLOCK_FONT_FAMILY,
    fontStyle: DEFAULT_BLOCK_FONT_STYLE,
    color: DEFAULT_BLOCK_FONT_COLOR,
}


export {
    defaultBlockBase,
    defaultFigureData,
    defaultImageData,
    defaultTextData,
    DEFAULT_BLOCK_COLOR,
    RECTANGLE_TYPE,
    TRIANGLE_TYPE,
    CIRCLE_TYPE,
    FIGURE_TYPE,
    TEXT_TYPE,
    BLOCK_SELECTED_BORDER_COLOR,
    BLOCK_SELECTED_BORDER_DASHARRAY,
};