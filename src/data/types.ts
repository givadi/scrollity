type TextBlockType = BlockBase & {
    type: 'text',
    chars: string,
    fontSize: number,
    fontFamily: string,
    fontStyle: string,
    fontWeight: string,
    textDecoration: string,
    color: string
}

type ImageBlockType = BlockBase & {
    type: 'image',
    imageResource: string
}

type FigureType = BlockBase & {
    type: 'figure',
    colorBorder: string,
    colorBackground: string,
    figureType: 'circle'|'triangle'|'rectangle',
}

type BlockBase = {
    id: string,
    x: number,
    y: number, // x, y - координата верхнего левого угла графического объекта. по умолчанию одинаковые для всех объектов
    width: number,
    height: number,
}

type BlockType = TextBlockType | ImageBlockType | FigureType

type Slide = {
    id: string,
    data: Array<BlockType>,
    background: SlideBackground,
}

type SlideBackground = {
    type: 'image'|'color',
    data: string
}

type Presentation = {
    name: string,
    slides: Array<Slide>,
    selectedSlides: Array<string> | Selection
}

type Selection = {
    selectedSlideId: string,
    selectedBlocksId: Array<string>
}

export type {
    Presentation,
    Selection,
    Slide,
    SlideBackground,
    TextBlockType,
    ImageBlockType,
    FigureType,
    BlockType,
    BlockBase
}