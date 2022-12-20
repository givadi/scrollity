import {Presentation, FigureType, ImageBlockType, BlockType, Slide, SlideBackground, TextBlockType} from './types';

const block1: BlockType & TextBlockType = {
    id: '1',
    x: 30.0,
    y: 50.0,
    width: 20.0,
    height: 30.0,
    type: 'text',
    chars: 'my super text',
    fontSize: 12,
    fontFamily: 'roboto',
    fontStyle: 'italic',
    color: '#090808'
}

const block2: BlockType & ImageBlockType = {
    id: '2',
    x: 530.0,
    y: 50.0,
    width: 400.0,
    height: 300.0,
    type: 'image',
    imageResource: 'https://get.wallhere.com/photo/2559x1571-px-cave-coast-landscape-nature-photography-sea-water-1039832.jpg'
}

const block3: BlockType & FigureType = {
    id: '3',
    x: 130.0,
    y: 250.0,
    width: 200.0,
    height: 30.0,
    type: 'figure',
    colorBorder: '#ff00ff',
    colorBackground: '#d6a1ea',
    figureType: 'rectangle',
}

const block4: BlockType & FigureType = {
    id: '4',
    x: 450.0,
    y: 50.0,
    width: 20.0,
    height: 30.0,
    type: 'figure',
    colorBorder: '#8d3222',
    colorBackground: '#fda95f',
    figureType: 'triangle',
}

const block5: BlockType & FigureType = {
    id: '5',
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
    data: [block1, block2, block3, block4, block5],
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
            selectedSlideId: 'slideId1',
            selectedBlocksId: [
                'blockId1',
                'blockId2'
            ]
        }
}

export function getState(): Presentation {
    return presentation;
}

// const границы слайда с которым будут взаимодействовать блоки







// function createPresentation(): Presentation{
//     return {
//         newPresentation
//     }
// }

// function namePresentation(name: string){}

// function renamePresentation(newName: string) {}
// function openPresentation(): Presentation {}
// function save(presentation: Presentation) {}
// function exportPdf(presentation: Presentation) {}
// function previewPresentation(presentation: Presentation): ConvertedPresentation {}

// // фунцкии для работы с символами в текстовом блоке   (type Text) ???? не слишком ли низкий уровень

// function addTextChar(input с клавиатуры, Создаем массив с этим символом): Presentation {
//     return {
//         arrangeBlockLayer  ???
//         предыдущий массив с chars и новый char
// }
// }

// function deleteTextChar(текстовый блок, положение курсора индекс элемента массива + нажатие backspace? , ): Presentation {
//     return {
//         предыдущий массив с chars.filter((_, _index) => _index != index)
//     }
// }

// function copyTextChar(текстовый блок, положение курсора индекс элемента массива + нажатие ctrl+c ? , ): Presentation {
//     return {
//         поместить символ в стек
//     }
// }

// function pasteTextChar(текстовый блок, положение курсора индекс элемента массива + нажатие ctrl+v ? , ): Presentation {
//     return {
//         забрать символ из стека и поставить его перед курсором
//     }
// }


// // фунцкии для работы с блоком текста в текстовом блоке   (type TextBlock)

// function ChangeFontSize(blockId, fontSize: number): Presentation {
//     return {
//         TextBlock с применением выбранного размера
//     }
// }

// function ChangeFontFamily(blockId: string, fontFamily: string): Presentation {
//     return {
//         TextBlock с применением выбранного шрифта
//     }
// }


// function ChangeFontColor(blockId: string, fontColor: string): Presentation {
//     return {
//         TextBlock с применением выбранного цвета к шрифту
//     }
// }

// // фунцкии для работы с графическим объектом   (type GraphicObject)

// // клик по эчпочмаку в панели задач
// // вставка эчпочмака с дефолтными размерами и цветом в центр слайда
// function insertTriangle(slideId: string): Presentation {
//     return {}
// }

// // , клик по кругу в панели задач
// //вставка круга с дефолтными размерами и цветом в центр слайда
// function insertCircle(slideId: string): Presentation {
//     // создаем новый блок
//     // вызываем arrangeBlockLayer()
//     return {}
// }

// //, клик по прямоугольнику в панели задач
// //вставка прямоугольника с дефолтными размерами и цветом в центр слайда
// function insertRectangle(slideId: string): Presentation {
//     return {}
// }

// // считать клик? по выбранному цвету на панели инструмемнтов
// function setFillColor(blockId: string, color: string): Presentation { // что нужно возвращать: блок или слайд? и в какой момент будет обновляться информация сущности слайда. PageSlide - не оптимально каждый раз возвращать целую страницу. Нужно обсудить
//     return {
//         выбранная figure с новым ветом
//     }
// }

// function setBorderColor(blockId: string, borderColor: string): Presentation {
//     return {
//         выбранная figure с новым цветом
//         установлен bordercolor в css
//     }
// }

// function scale(blockId: string, newX: number, newY: number): Presentation {
//     return {
//         блок, увеличенного размера
//         если left mouseUp выходит за пределы слайда - применяется значение по умолчанию
//     }
// }


// // фунцкии для работы с Image   (type ImageBlock)
// // открыть окно загрузки,
// function uploadFromPC (imagePath: string): Presentation {
//     return {}
// }

// // считать движение мыши - left mouseDown до left mouseUp если он в пределах слайда
// //блок, увеличенного/уменьшенного размера
// //         если left mouseUp выходит за пределы слайда - применяется значение по умолчанию
// function scaleFigure(blockId: string): Presentation | null { // можно возвращать null, если изменений не было
//     return {

//     }
// }



// // фунцкии для работы с BLOCK   (type Block)



// function deleteBlock(selectableBlock: Selection): Presentation {
//     return {
//         ...blocks,
//         page: page.blocks.filter((_, _index) => _index != index)
//     }
// }

// // copy paste - нужно ли????
// function copy(selectableBlock: Selection): Presentation {
//     return {
//         push stack ? что идет в стэк? Переменная или ID БЛОКА?
//     }
// }

// function paste(copiedObjects: CopiedObjects): Presentation {
//     return {
//         add block из стека и сгенерить ему новый id
//     }
// }

// function moveBlock(presentation: Presentation, selection: {  }, newX: number, newY: number): Presentation {

//     return {
//     //     изменение координат:
//     // для круга - центральная точка
//     // для текста/картинки/треугольника/прямоугольника ? что будет, если вынести за границу слайда??
// }
// }


// function selectBlock(blockId: string): Presentation {
//     return {
//         блок с выделенным бордером (set bordercolor)
// }
// }

// function scaleBlock(blockId: string): Presentation | null { // можно возвращать null, если изменений не было
//     return {

//     }
// }

// // две кнопки на панели задачи - на передний план, на задний план
// ?? как менять z-index ?? не может быть одинковых z-index у двух и более блоков

// // , задаем z-index 0 для 1го блока, для последующих инкрементируем +1
// function arrangeBlockLayer (newBlock: Block): Presentation {
//     return [];
// }

// //клик по кнопке перезний план  - увеличение z-index
// function changeBlockTopLayer (blockId: string, selectedObjects: Selection, orderArrangement: OrderArrangement): Presentation

// // анимация под вопросом
// function animation(блок, клик по кнопке анимации в панели инструментов): Presentation {
//     return {
//         блок с работающей анимацией при превью ?
//     }
// }


// // СЛАЙД

// function addSlide(presentation: Presentation, index: number): Presentation { // откуда мы узнаем index?
//     const newSlide: Slide = { // в id нужно сгенерировать значение
//         id: 'id',
//         data: [],
//         background: {
//             type: 'color',
//             data: '#ffffff'
//         }
//     };

//     const oldSlides = [presentation.slides];
//     const newSlides: Array<Slide> = presentation.slides.length === index // в чем разница между разными способами объявить массив?
//         ? [...presentation.slides, newSlide]
//         : [...oldSlides.splice(index, 0, newSlide)]; // будет ли здесь персистентность данных

//     return {
//         ...presentation,
//         slides: newSlides
//     }
// }


// function deleteSlide(presentation: Presentation, indexesToDelete: Array<number>): Presentation { // лучше по индексам или по id?
//     const newSlides = [...presentation.slides.filter((slide: Slide, _index: number) =>   // для чего нижнее подчеркивание?
//         indexesToDelete.indexOf(_index) >= 0)]

//     return {
//         ...doc,
//         slides: doc.slides.filter((_, _index) => _index != index)
//     }
// }

// // copy paste
// function copySlide(doc: Presentation, index: number): Presentation {
//     return {
//         ...doc,
//         слайд в стэк???
// }
// }

// function pasteSlide(селект слайд, index: number, вставляем после выделенного слайда кнопкой на панели инструментов ): Presentation {
//     return {
//         ...doc,
//         слайд из стэка??? присвоить новый id и новый порядковый номер ( используем указатели?)
// }
// }


// function move(slideId: string): Presentation {
//     return {
//         изменение порядкового номера слайда ( используем указатели?)
//     изменение порядковых  номеров остальных слайдов (те, что ниже)
// }
// }




// /////////////////// БОКОВАЯ ПАНЕЛЬ

// // функция селект всегда применена к слайду
// function select(селект слайд, читать стрелки клавиатуры Up Down ): Presentation {
//     return {
//         слайд с выделенным бордером в превью (set bordercolor)
//     выбранный слайд должен отрисоваться на экране на выбранный слайд (по id)
// }
// }

// ??//function selectSeveral(селект слайды): Slide {
// если нажат ctrl и клик leftMouse по слайду
// return {
//     слайды с выделенным бордером в превью (set bordercolor)
// }
// }


// function preview для боковой панели (селект слайды): Slide {
//     return {
//         миниатюры слайдов
//     }
// }