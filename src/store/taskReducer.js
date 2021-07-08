const initialState = {
    currentEmail: 'проверочный',
    isAuth: false,
    tasks: [
        {
            idEmail: 'ivanBybenkov@mail.ru',
            id: 0,
            text: '1 акк',
            isDone: false
        },
        {
            idEmail: 'kate123kate@mail.ru',
            id: 1,
            text: '2 акк',
            isDone: false
        },
        {
            idEmail: 'vasyaPupkin222@mail.ru',
            id: 2,
            text: '3 акк',
            isDone: false
        },
        {
            idEmail: 'vasyaPupkin222@mail.ru',
            id: 3,
            text: '3 акк, 2 заметка',
            isDone: false
        },
        {
            idEmail: 'lenapoleno@mail.ru',
            id: 4,
            text: '4 акк',
            isDone: false
        },
        {
            idEmail: 'maksimShmelev1994@mail.ru',
            id: 5,
            text: '5 акк',
            isDone: false
        },
        {
            idEmail: 'ivanBybenkov@mail.ru',
            id: 6,
            text: '1 акк 2я заметка',
            isDone: false
        },
        {
            idEmail: 'ivanBybenkov@mail.ru',
            id: 7,
            text: '1 акк 3я заметка',
            isDone: false
        },
    ]
}

export default function tasklist(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            if (action.payload.isAuth === true) {
                return {
                    ...state,
                    tasks: [...state.tasks,
                        {
                            idEmail: state.currentEmail,
                            id: Date.now(),
                            text: action.payload.textAdd,
                            isDone: false,
                        }
                    ]
                }
            }
            return state

        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.id !== action.payload)
            }

        case 'SIGN_IN':
            const e = action.payload.email;
            const p = action.payload.password;
            const i = action.payload.acc.filter(item => item.email === e && item.password === p)
            if (i.length !== 0) {
                return {
                    ...state,
                    currentEmail: e,
                    isAuth: true
                }
            }
            else {
                return {
                    ...state,
                }
            }

        case 'SIGN_OUT':
            console.log('SIGN_OUT')
            return {
                ...state,
                currentEmail: '',
                isAuth: false
            }

        default:
            return state;
    }
}