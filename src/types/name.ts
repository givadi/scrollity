export enum NameActionTypes {
    CHANGE_NAME = 'CHANGE_NAME',
}

interface ChangeNameAction {
    type: NameActionTypes.CHANGE_NAME,
    payload: string
}

export type NameAction = ChangeNameAction;