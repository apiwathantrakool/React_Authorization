import { 
    SET_CURRENT_USER
 } from "../Constants/user";

export function setCurrentUser(user) {
    return dispatch => {
        dispatch({
          type: SET_CURRENT_USER,
          payload: user
        });
    };
}