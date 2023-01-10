import {NameActionTypes} from '../../types/name';

export const changeName = (newName: string) => (
    {
        type: NameActionTypes.CHANGE_NAME,
        payload: newName
    }
);