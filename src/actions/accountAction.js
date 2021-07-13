export function MainMenu() {
    return {
        type: 'MAIN_MENU'
    }
}

export function SetFirstData(email, pass) {
    return {
        type: 'SIGN_UP',
        payload: {
            e: email,
            p: pass
        }
    }
}

export function Sign_In(curEmail, curPass) {
    return {
        type: 'SIGN_IN',
        payload: {
            email: curEmail,
            password: curPass
        }
    }
}