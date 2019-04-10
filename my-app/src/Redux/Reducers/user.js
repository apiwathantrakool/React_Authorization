
import {
    ADMIN,
    STAFF,
    CEO
} from "../../Util/roles";
import { SET_CURRENT_USER } from "../Constants/user";

const initialState = {
    userList: [
        {
            userName: "user001",
            password: "123456",
            roles: [ADMIN, CEO]
        },
        {
            userName: "user002",
            password: "123456",
            roles: [ADMIN]
        },
        {
            userName: "user003",
            password: "123456",
            roles: [STAFF]
        },
        {
            userName: "user004",
            password: "123456",
            roles: [CEO]
        },
    ],
    currentUser: null
};

export default function tableReducer(state = initialState, action) {
    switch (action.type) {

        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
}