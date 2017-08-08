import React from 'react';
import Form from '../components/Form/Form';
import { connect } from 'react-redux';
import { addUser } from '../actions/index';

class App extends React.Component {
    render() {
        return (
            <div>
                <Form addUser={addUser}/>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    users: []
});
const mapDispatchToProps = (dispatch) => ( {
    addUser: (name, surname, email, password) => dispatch(addUser(name, surname, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);