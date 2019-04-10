import { 
    REDUX_TEST,
 } from "../Constants/test";
  
  const initialState = {
    data: null
  };
  
  export default function tableReducer(state = initialState, action) {
    switch (action.type) {
      case REDUX_TEST:
        return {
          ...state,
          data: action.payload
        };

      default:
        return state;
    }
  }