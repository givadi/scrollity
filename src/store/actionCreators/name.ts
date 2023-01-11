import {NameActionTypes} from '../../types/name';

export const changeName = (newName: string) => (
    {
        type: NameActionTypes.CHANGE_NAME,
        payload: newName
    }
);

export const uploadName = (newName: string) => ({
    type: NameActionTypes.UPLOAD_NAME,
    payload: newName
});