import { Action, AnyAction } from "redux";

export interface UserType {
    id: string;
    name: string;
    surname: string;
    e_mail: string;
}



export interface ActionType extends AnyAction {
    payload: UserType;
}

export interface StateType {
    data: UserType[];
    loaded: boolean;
    loading: boolean
}