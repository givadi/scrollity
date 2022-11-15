type TextBlock = {
    type: 'text',
    chars: string,
    fontSize: number,
    fontFamily: string,
    color: string
}

type ImageBlock = {
    type: 'image',
    imageResource: string
}

type GraphicObject = {
    type: 'figure',
    colorBorder: string,
    colorBackground: string,
    figureType: 'circle'|'triangle'|'rectangle',
}

type Block = {
    id: string,
    x: number,
    y: number, // x, y - координата верхнего левого угла графического объекта. по умолчанию одинаковые для всех объектов
    width: number,
    height: number,
    isSelected: boolean,
    blockType: TextBlock|ImageBlock|GraphicObject
}

type Slide = {
    id: string,
    data: Array<Block>,
    background: SlideBackground,
}

type SlideBackground = {
    type: 'image'|'color',
    data: string
}

type Presentation = {
    name: string,
    slides: Array<Slide>,
    selectedSlides: Array<Selection>
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
    TextBlock,
    ImageBlock,
    GraphicObject,
    Block
}