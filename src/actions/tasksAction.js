export function AddTask(text, check, curEmail) {
    return {
        type: 'ADD_TASK',
        payload: {
            textAdd: text,
            isAuth: check,
            currentEmail: curEmail,
        }
    }
}

export function ChangeTask(index) {
    return {
        type: 'CHANGE_TASK',
        payload: index
    }
}

export function DeleteTask(index) {
    return {
        type: 'DELETE_TASK',
        payload: index
    }
}