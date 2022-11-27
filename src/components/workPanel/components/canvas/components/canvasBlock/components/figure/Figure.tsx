import {Block, GraphicObject} from "../../../../../../../../data/types";

type FigureProps = {
    figure: GraphicObject,
}

type BlockParams = {
    x: number,
    y: number,
    width: number,
    height: number,
}

function getFigure(figure: GraphicObject, blockStyles: BlockParams) {
    const figureStyles = {
        stroke: figure.colorBorder,
        fill: figure.colorBackground
    }

    switch (figure.figureType) {
        case ('circle'):
            const circleStyles = {
                ...figureStyles,
                cx: blockStyles.x,
                cy: blockStyles.y,
                r: blockStyles.width / 2
            }

            return (
                <circle style={circleStyles}></circle>
            );
        case ('rectangle'):
            const rectStyles = {
                ...figureStyles,
                ...blockStyles
            }

            return (
                <rect style={rectStyles}></rect>
            );
        case ('triangle'):
            const triangleStyles = {
                ...figureStyles
            }

            return (
                <svg height={blockStyles.height} width={blockStyles.width}>
                    {/*<polygon style={triangleStyles} points={'10 200 120'}></polygon>*/}
                </svg>
            );
        default:
            return null;
    }
}

function Figure(props: FigureProps) {
    const figure = getFigure(props.figure, props.blockStyles);
    return (figure);
}

export {
    Figure
}