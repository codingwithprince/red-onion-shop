export const SET_USER_LOGIN = 'SET_USER_LOGIN';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';


export const setUserLogin = (user) =>{
    return {
        type: SET_USER_LOGIN,
        user
    }
}

export const setSignOutUser = () =>{
    return {
        type: SIGN_OUT_USER
    }
}