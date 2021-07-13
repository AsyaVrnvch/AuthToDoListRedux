const initialState = {
    tasks: [
        {
            idEmail: 'ivanBybenkov@mail.ru',
            id: 0,
            text: 'Помыть посуду',
            isDone: false
        },
        {
            idEmail: 'kate123kate@mail.ru',
            id: 1,
            text: 'Сходить в магазин',
            isDone: false
        },
        {
            idEmail: 'vasyaPupkin222@mail.ru',
            id: 2,
            text: 'Починить велосипед',
            isDone: false
        },
        {
            idEmail: 'vasyaPupkin222@mail.ru',
            id: 3,
            text: 'Выкинуть мусор',
            isDone: false
        },
        {
            idEmail: 'lenapoleno@mail.ru',
            id: 4,
            text: 'Купить продукты',
            isDone: false
        },
        {
            idEmail: 'maksimShmelev1994@mail.ru',
            id: 5,
            text: 'Выучить стих',
            isDone: false
        },
        {
            idEmail: 'ivanBybenkov@mail.ru',
            id: 6,
            text: 'Помыть собаку',
            isDone: false
        },
        {
            idEmail: 'ivanBybenkov@mail.ru',
            id: 7,
            text: 'Почитать книгу',
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
                        idEmail: action.payload.currentEmail,
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

        case 'CHANGE_TASK':
            const a = state.tasks.map((item) => item.id === action.payload ? { ...item, isDone: !item.isDone } :item)
            return {
                ...state,
                tasks: a
            }

        default:
            return state;
    }
}