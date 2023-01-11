import {BlockType, FigureBlockType, ImageBlockType, TextBlockType} from '../types/blocks';
import {Slide, SlideBackground} from '../types/slides';
import {Presentation} from '../types/presentation';

const block1: BlockType & TextBlockType = {
    id: 'blockId1',
    x: 30.0,
    y: 50.0,
    width: 100.0,
    height: 30.0,
    type: 'text',
    chars: 'my super text',
    fontSize: 12,
    fontFamily: 'roboto',
    fontStyle: 'italic',
    color: '#090808'
}

const block3: BlockType & FigureBlockType = {
    id: 'blockId3',
    x: 130.0,
    y: 250.0,
    width: 200.0,
    height: 30.0,
    type: 'figure',
    colorBorder: '#ff00ff',
    colorBackground: '#d6a1ea',
    figureType: 'rectangle',
}

const block4: BlockType & FigureBlockType = {
    id: 'blockId4',
    x: 450.0,
    y: 50.0,
    width: 20.0,
    height: 30.0,
    type: 'figure',
    colorBorder: '#8d3222',
    colorBackground: '#fda95f',
    figureType: 'triangle',
}

const block5: BlockType & FigureBlockType = {
    id: 'blockId5',
    x: 500.0,
    y: 450.0,
    width: 50.0,
    height: 50.0,
    type: 'figure',
    colorBorder: '#205479',
    colorBackground: '#96f898',
    figureType: 'circle',
}

const slideBackground: SlideBackground = {
    type: 'color',
    data: '#fff999'
}

const slide1: Slide = {
    id: '1',
    data: [block1, block3, block4, block5],
    background: slideBackground,
}

const slide2: Slide = {
    id: '2',
    data: [block1, block3, block5],
    background: slideBackground,
}

const slide3: Slide = {
    id: '3',
    data: [block4],
    background: slideBackground,
}

const presentation: Presentation = {
    name: 'name',
    slides: [slide1, slide2, slide3],
    selectedSlides:
        {
            selectedSlideId: '1',
            selectedBlocksId: [
                'blockId1',
                'blockId3'
            ]
        }
}

export function getState(): Presentation {
    return presentation;
}