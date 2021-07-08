const initialState = {
    yetReg:5,
    accounts:[
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
            const a = state.accounts.filter((account) => account.email === action.payload.e)
            if(a.length !== 0) {
                return {
                    ...state,
                    yetReg:1
                }
            }
            else {
                return {
                    ...state,
                    yetReg:0,
                    accounts:[
                        ...state.accounts,
                        {
                            email: action.payload.e, 
                            password: action.payload.p
                        }
                    ]
                }
            }

        default: return state;
    }
}