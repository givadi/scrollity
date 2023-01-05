import {generateId} from '../common/id';

const DEFAULT_BLOCK_COLOR = '#ffffff';
const FIGURE_TYPE = 'figure';
const RECTANGLE_TYPE = 'rectangle';

const BLOCK_SELECTED_BORDER_COLOR = '#000000';
const BLOCK_SELECTED_BORDER_DASHARRAY = '5';

type TextBlockType = BlockBase & {
    type: 'text',
    chars: string,
    fontSize: number,
    fontFamily: string,
    fontStyle: string
    color: string
}

type ImageBlockType = BlockBase & {
    type: 'image',
    imageResource: string
}

type FigureBlockType = BlockBase & {
    type: 'figure',
    colorBorder: string,
    colorBackground: string,
    figureType: 'circle'|'triangle'|'rectangle',
}

type BlockBase = {
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
}

type BlockType = TextBlockType | ImageBlockType | FigureBlockType

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

export {
    defaultBlockBase,
    defaultFigureData,
    DEFAULT_BLOCK_COLOR,
    RECTANGLE_TYPE,
    FIGURE_TYPE,
    BLOCK_SELECTED_BORDER_COLOR,
    BLOCK_SELECTED_BORDER_DASHARRAY
};

export type { BlockType, TextBlockType, ImageBlockType, FigureBlockType };
