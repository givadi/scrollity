import {DEFAULT_PRESENTATION_NAME} from '../../types/presentation';

function changeName(newName: string): string {
    return newName === ''
        ? DEFAULT_PRESENTATION_NAME
        : newName;
}

export {
    changeName
}