import { 
    REDUX_TEST
 } from "../Constants/test";

export function test() {
    return dispatch => {
        dispatch({
          type: REDUX_TEST,
          payload: "Redux Work !"
        });
    };
  }