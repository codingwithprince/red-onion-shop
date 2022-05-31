import { SET_USER_LOGIN, SIGN_OUT_USER } from '../actions/userActions';

const initialUser = {
    loggedIn : false,
    userInfo : {}
}

export const userReducer = (state = initialUser, action) =>{
    switch(action.type){
        case SET_USER_LOGIN:
            return {
                userInfo : {...action.user},
                loggedIn: true
            }
            case SIGN_OUT_USER:
            return {
                userInfo : {},
                loggedIn: false
            }
            default : return state;
    }
}