import {FigureBlockType} from '../../../../../../../../types/blocks';

type FigureProps = {
    figure: FigureBlockType
}

function getFigureBlock(figure: FigureBlockType) {
    const figureStyles = {
        stroke: figure.colorBorder,
        fill: figure.colorBackground
    }

    switch (figure.figureType) {
        case ('circle'):
            const circleStyles = {
                ...figureStyles,
                cx: figure.x,
                cy: figure.y,
                r: figure.width / 2
            }

            return (
                <circle style={circleStyles}></circle>
            );
        case ('rectangle'):
            const rectStyles = {
                ...figureStyles,
                ...figure
            }

            return (
                <rect style={rectStyles}></rect>
            );
        case ('triangle'):
            const trianglePoints = `${figure.x},${figure.y + figure.height} ${figure.x + figure.width / 2},${figure.y} 
                ${figure.x + figure.width},${figure.y + figure.height}`
            return (
                <polygon points={trianglePoints} style={figureStyles}></polygon>
            );
        default:
            return null;
    }
}

function FigureBlock(props: FigureProps) {
    const figure = getFigureBlock(props.figure);
    return (figure);
}

export {
    FigureBlock
}