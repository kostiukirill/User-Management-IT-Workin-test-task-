import { UserType, ActionType } from '../types';





function userRedusers(state = {}, action: ActionType) {
    switch (action.type) {
        case "ADD_USER":
            const newUser = {
                id: action.payload.id,
                name: action.payload.name,
                surname: action.payload.surname,
                e_mail: action.payload.e_mail
            }
            return newUser
            default:
                return {};
        }
    }


function usersReducers(state: UserType[]=[], action: ActionType) {

    switch (action.type) {
        case "ADD_USER":
            return [...state, userRedusers({} ,action)];
        case "REMOVE_USER":
                const actionPayloadId = action.payload.id
            return state.filter(s => s.id !== actionPayloadId)
        default:
            return state;
    }
}

export {userRedusers, usersReducers}