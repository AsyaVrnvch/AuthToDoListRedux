const initialState = {
    isSuccessSignUp: null,
    singUpError: '',

    isAuth: false,
    currentEmail:'',
    accounts: [
        {
            email: 'ivanBybenkov@mail.ru',
            password: 'vanya1234'
        },
        {
            email: 'kate123kate@mail.ru',
            password: 'kate321'
        },
        {
            email: 'vasyaPupkin222@mail.ru',
            password: '222vasya'
        },
        {
            email: 'lenapoleno@mail.ru',
            password: 'polenolena'
        },
        {
            email: 'maksimShmelev1994@mail.ru',
            password: 'shmel94'
        }
    ]

}

export default function account(state = initialState, action) {
    switch (action.type) {
        case 'SIGN_UP':
            const registeredUser = state.accounts.find((account) => account.email === action.payload.e)
            if (registeredUser) {
                return {
                    ...state,
                    isSuccessSignUp: false,
                    singUpError: 'Please check the data.The user with this email address is already registered or you entered incorrect data'
                }
            }
            else {
                return {
                    ...state,
                    isSuccessSignUp: true,
                    singUpError:'',
                    accounts: [
                        ...state.accounts,
                        {
                            email: action.payload.e,
                            password: action.payload.p
                        }
                    ]
                }
            }

        case 'SIGN_IN':
            const email = action.payload.email;
            const password = action.payload.password;
            const currentAccount = state.accounts.find((item) => item.email === email && item.password === password)
            let curEmail='';
            if(currentAccount) curEmail= currentAccount.email
            return {
                ...state,
                isAuth: !!currentAccount,
                currentEmail:curEmail
            }
            
        case 'MAIN_MENU':
            return {
                ...state,
                isSuccessSignUp: null,
                singUpError: '',
                emailValid: null,
                passwordValid: null,
                currentEmail: '',
                isAuth: false
            }
        default: return state;
    }
}