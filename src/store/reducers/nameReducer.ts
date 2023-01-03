import {NameAction, NameActionTypes} from '../../types/name';
import {initialState} from '../../types/presentation';
import {changeName} from '../actions/name';

function nameReducer(state: string = initialState.name, action: NameAction): string {
    switch (action.type) {
        case NameActionTypes.CHANGE_NAME:
            return changeName(action.payload);
        default:
            return state;
    }
}

export {
    nameReducer
}