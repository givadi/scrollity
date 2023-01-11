export enum NameActionTypes {
    CHANGE_NAME = 'CHANGE_NAME',
    UPLOAD_NAME = 'UPLOAD_NAME'
}

interface ChangeNameAction {
    type: NameActionTypes.CHANGE_NAME,
    payload: string
}

interface UploadAction {
    type: NameActionTypes.UPLOAD_NAME,
    payload: string
}

export type NameAction = ChangeNameAction | UploadAction;