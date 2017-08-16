import React from 'react';
import Backendless from 'backendless';

class Registration extends React.Component {
    resetFields = () => {
        this.name.value = '';
        this.surname.value = '';
        this.email.value = '';
        this.password.value = '';
    };

    userWasRegistred = () => {
        Backendless.Files.listing('/media', '*.jpg', false, null, null)
            .then( function( fileInfoArray ) {
                fileInfoArray.forEach(item => console.log(item));
                console.log('We are get the images array')
            })
            .catch( function( error ) {
            });
    };

    authorithation = () => {
        console.log('autorization start');
        Backendless.UserService.login( this.email.value, this.password.value, true )
            .then( function( loggedInUser ) {
                console.log('User was authorized' + loggedInUser)
            })
            .then(this.userWasRegistred())
            .catch( function( error ) {
                console.log('User was not authorized' + error)
            });
    };


    register = () => {
        const user = new Backendless.User();
        user.name = this.name.value;
        user.surname = this.surname.value;
        user.email = this.email.value;
        user.password = this.password.value;

        Backendless.UserService.register( user )
            .then( function( registeredUser ) {console.log('User was registred')})
            // Зарегались. Давай и авторизацию запилим. Причем работало а потом отъебнулось, очень странная хуйня.
            .then( this.authorithation())
            .catch( function( error ) {console.error('User was not registred')});
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
                    <input onClick = {this.register} className='form-button' type="submit" value='Регистрация' />
                </form>
            </div>
        )
    }
};

export default Registration;