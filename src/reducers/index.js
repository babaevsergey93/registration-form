const initialState = {
    users: []
};


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_USER':
            return Object.assign({}, state, {
                users: [
                    ...state.users,
                    {
                        id: action.id,
                        name: action.name,
                        surname: action.surname,
                        email: action.email,
                        password: action.password
                    }
                ]
            });
        default:
            return state;
    }
}