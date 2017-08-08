const initialState = {
    users: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'ADD_USER':
            debugger;
            return Object.assign({}, state, {
                users: [...state.users, {
                    name: action.name,
                    surname: action.surname,
                    email: action.email,
                    password: action.password
                }]
            });
        default:
            return state;
    }
}