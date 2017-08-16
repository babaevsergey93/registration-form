const initialState = {
    user: {},
    authorized: false,
};


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'USER_LOGGED':
            debugger;
            return Object.assign({}, state, {
                authorized: !state.authorized
            });
        default:
            return state;
    }
}