export const user = (username) => {
    return {
        type: 'USERNAME',
        payload: username
    };
}

export const islogged = () => {
    return {
        type: 'LOGIN',
    }
}