type BlockPositionType = {
    x: number,
    y: number
}

type TextBlockType = BlockBase & {
    type: 'text',
    chars: string,
    fontSize: number,
    fontFamily: string,
    fontStyle: string
    color: string,
    fontWeight: string,
    textDecoration: string
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

export type { BlockType, TextBlockType, ImageBlockType, FigureBlockType, BlockPositionType };
