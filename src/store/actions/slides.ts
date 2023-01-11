import {generateId} from '../../common/functions/id';
import {
    getLastSelectedSlideId, getSelectedSlideIds,
    getSlidesByOppositeSelection,
} from '../../common/functions/slides';
import {Slide, SlideBackground} from '../../types/slides';
import {BlockPositionType, BlockType} from '../../types/blocks';
import {Selection} from '../../types/selectedSlides';

function getEmptySlide(): Slide {
    return {
        id: generateId(),
        data: [],
        background: {
            type: 'color',
            data: '#ffffff'
        }
    }
}

function addSlide(slides: Array<Slide>, selectedSlides: Array<string> | Selection): Array<Slide> {
    const newSlide: Slide = getEmptySlide();
    const selectedSlideId: string = getLastSelectedSlideId(selectedSlides);
    const indexToInsert: number = slides.findIndex(slide => slide.id === selectedSlideId) + 1;

    const newSlides: Array<Slide> = slides;
    newSlides.splice(indexToInsert, 0, newSlide);

    return [...newSlides];
}

function deleteSlides(slides: Array<Slide>, selectedSlides: Array<string> | Selection): Array<Slide> {
    let newSlides = getSlidesByOppositeSelection(slides, selectedSlides);

    newSlides = newSlides.length > 0 ? newSlides : [getEmptySlide()];

    return newSlides;
}

function changeSlideBackground(
    slides: Array<Slide>,
    selectedSlides: Array<string> | Selection,
    newBackground: SlideBackground)
    : Array<Slide> {
    const selectedSlidesIdToChangeBackground: Array<string> = getSelectedSlideIds(selectedSlides);

    const newSlides = slides;

    newSlides.map((slide: Slide) => {
        if (selectedSlidesIdToChangeBackground.includes(slide.id)) {
            return slide.background = newBackground;
        }

        return slide;
    })

    return [...newSlides];
}

function addBlock(slides: Array<Slide>, slideId: string, block: BlockType): Array<Slide> {
    return slides.map((slide) => {
        if (slide.id === slideId) {
            const newBlocks = slide.data;
            newBlocks.push(block)

            return {
                ...slide,
                data: newBlocks
            }
        }

        return slide;
    });
}

function upload(newSlides: Array<Slide>): Array<Slide> {
    return {...newSlides};
}

function moveBlocks(slides: Array<Slide>, slideId: string, blockIds: Array<string>, newPosition: BlockPositionType): Array<Slide> {
    return slides.map((slide) => {
         if (slide.id === slideId) {
             const newBlocks = slide.data.map((block: BlockType) => {
                 if (blockIds.includes(block.id)) {
                     return {
                         ...block,
                         x: newPosition.x,
                         y: newPosition.y
                     }
                 }
                 return block;
             });
             return {
                 ...slide,
                 data: newBlocks
             }
         }

         return slide;
    });
}

function blockToFront(slides: Array<Slide>, selection: Selection): Array<Slide> {
    const selectedSlide: Slide = slides.filter((slide) => {
       return slide.id === selection.selectedSlideId
    })[0];
    const data = selectedSlide.data;

    const selectedBlockIndex = selectedSlide.data.findIndex((block) => block.id === selection.selectedBlocksId[0]);

    let movableBlock = data[selectedBlockIndex];

    let newSlides: Array<Slide> = Object.values(slides);

    if (selectedBlockIndex + 1 < data.length) {
        data[selectedBlockIndex] = data[selectedBlockIndex + 1];
        data[selectedBlockIndex + 1] = movableBlock;

        newSlides = slides.map((slide) => {
            if (slide.id === selection.selectedSlideId) {
                return {
                    ...slide,
                    data: data
                }
            }
            return slide;
        })
    }

    return newSlides;
}

function changeBlocksColor(slides: Array<Slide>, selection: Selection, newColor: string): Array<Slide> {
    return slides.map((slide) => {
         if (slide.id === selection.selectedSlideId) {
             const newBlocks = slide.data.map((block: BlockType) => {
                 if (selection.selectedBlocksId.includes(block.id) && block.type === 'figure') {
                     return {
                         ...block,
                         colorBackground: newColor
                     }
                 }
                 return block;
             });
             return {
                 ...slide,
                 data: newBlocks
             }
         }

         return slide;
    });
}

export {
    addSlide,
    deleteSlides,
    getEmptySlide,
    addBlock,
    moveBlocks,
    changeSlideBackground,
    changeBlocksColor,
    upload,
    blockToFront
}