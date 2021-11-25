import { ADD_COMMENT } from "./actionTypes";

const initicalState = { name: "Kenzie", comments: [] };

const userReducer = (state = initicalState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      // Lembre do fluxo da aula anterior, essa action chega aqui após passar no thunk
      return action.updateUser;

    default:
      return state;
  }
};

export default userReducer;
