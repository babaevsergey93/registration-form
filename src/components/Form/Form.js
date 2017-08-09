import React from 'react';
import { connect } from 'react-redux';
import './Form.css';
import { addUser } from '../../actions/index';
import Backendless from 'backendless';

// handle success
function userRegistered(user) {
    console.log("user has registered");
}

// handle error
function gotError(err) {
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
}


class Form extends React.Component {
    handleSubmit = () => {
        // create user
        const user = new Backendless.User();
              user.name = this.name.value;
              user.surname = this.surname.value;
              user.email = this.email.value;
              user.password = this.password.value;

        // put user in database
        Backendless.UserService.register(user).then(userRegistered).catch(gotError);
        // вызываю метод
        // this.props.addUser(name, surname, email, password);

        this.name.value = '';
        this.surname.value = '';
        this.email.value = '';
        this.password.value = '';
    };

    checkUser = () => {
        console.log(this.props.users.forEach(item => console.log(item)))
    };

    render() {
        return (
            <div>
                <form className="form" onSubmit = {(e) => {
                    e.preventDefault();
                }}>
                    <input ref={(input) => this.name = input} className='form-input' type="text" placeholder='Имя'/>
                    <input ref={(input) => this.surname = input} className='form-input' type="text" placeholder='Фамилия'/>
                    <input ref={(input) => this.email = input} className='form-input' type="text" placeholder='e-mail'/>
                    <input ref={(input) => this.password = input} className='form-input' type="password" placeholder='Пароль'/>
                    <input onClick = {this.checkUser} className='form-button' type="submit" value='Аторизация'/>
                    <input onClick = {this.handleSubmit} className='form-button' type="submit" value='Регистрация' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    users: store.users
});
const mapDispatchToProps = (dispatch) => ( {
    addUser: (name, surname, email, password) => dispatch(addUser(name, surname, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);