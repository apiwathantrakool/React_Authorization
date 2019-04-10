  
  import { 
      ADMIN,
      STAFF,
      CEO 
} from "../../Util/roles";
  
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
            roles: [ADMIN, STAFF]
        },
        {
            userName: "user004",
            password: "123456",
            roles: [CEO]
        },
    ],
  };
  
  export default function tableReducer(state = initialState, action) {
    switch (action.type) {

      default:
        return state;
    }
  }