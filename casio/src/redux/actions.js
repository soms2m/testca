import {LOGIN, LOGINPOPUP, BALANCE} from './types';

export const userLogin = (login) => {
    return {
        type: LOGIN,
        payload: login
    }
}

export const userLoginPopup = (login) => {
    return {
        type: LOGINPOPUP,
        payload: login
    }
}

export const userBalance = (bal) => {
    return {
        type: BALANCE,
        payload: bal
    }
}