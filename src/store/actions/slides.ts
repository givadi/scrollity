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


function changeFontSize(slides: Array<Slide>, slideId: string, block: BlockType, newFontSize: number): Array<Slide> {
    return slides.map((slide: Slide) => {
        if (slideId === slide.id) {
            let newData =  slide.data;
             newData = newData.map((blockData: BlockType) => {
                if (blockData.id === block.id && blockData.type === 'text') {
                    return {
                        ...blockData,
                        fontSize: newFontSize
                    }
                }
                return blockData;
            });
            slide.data = newData;
        }
        return slide;
    });
}

function changeFontFamily(slides: Array<Slide>, slideId: string, block: BlockType, newFontFamily: string): Array<Slide> {
    return slides.map((slide: Slide) => {
        
        if (slideId === slide.id) {
            let newData =  slide.data;
             newData = newData.map((blockData: BlockType) => {
                if (blockData.id === block.id && blockData.type === 'text') {
                    return {
                        ...blockData,
                        fontFamily: newFontFamily
                    }
                }
                return blockData;
            });
            slide.data = newData;
        }
        return slide;
    });
}

function changeFontWeight(slides: Array<Slide>, slideId: string, block: BlockType, newFontWeight: boolean): Array<Slide> {
    return slides.map((slide: Slide) => {
        if (slideId === slide.id) {
            console.log(slide);
            let newData =  slide.data;
             console.log(slide.data);
             
             newData = newData.map((blockData: BlockType) => {
                if (blockData.id === block.id && blockData.type === 'text') {
                    console.log("blockData.fontWeight=", blockData.fontWeight);
                    return {
                        ...blockData,
                        newFontWeight: !blockData.fontWeight
                    }
                }
              
                return blockData;
            });
            slide.data = newData;
            console.log("newFontWeight=", newFontWeight);
        }
        return slide;
    });
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


export {
    addSlide,
    deleteSlides,
    getEmptySlide,
    addBlock,
    moveBlocks,
    changeSlideBackground,
    changeFontSize,
    changeFontFamily,
    changeFontWeight
}
