import { LOGIN, LOGINPOPUP, BALANCE } from './types';

const initialState = {
  isLoggedIn: false,
  isLoginPopUp: false,
  balance: 9.99
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: return {
      ...state,
      isLoggedIn: action.payload
    }

    case LOGINPOPUP: return {
      ...state,
      isLoginPopUp: action.payload
    }

    case BALANCE: return {
      ...state,
      balance: action.payload
    }

    default: return state
  }
}

export default Reducer;
