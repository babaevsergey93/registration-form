import React from 'react';
import Backendless from 'backendless';

class AuthorizationForm extends React.Component {
    afterAuthorithation = () => {
        Backendless.Files.listing('/media', '*.jpg', false, null, null)
            .then( function( fileInfoArray ) {
                console.log('Oley op')
            })
            .catch( function( error ) {
            });
    }

    authorithation = () => {
        console.log('autorization');
        Backendless.UserService.login( this.email.value, this.password.value, true )
            .then( function( loggedInUser ) {
                console.log('User was authorized')
            })
            .then(this.afterAuthorithation())
            .catch( function( error ) {
                console.log('User was not authorized')
            });
    };

    render () {
        return (
            <div>
                <form className="form" onSubmit = {(e) => {
                    e.preventDefault();
                }}>
                    <input ref={(input) => this.email = input} className='form-input' type="text" placeholder='e-mail'/>
                    <input ref={(input) => this.password = input} className='form-input' type="password" placeholder='Пароль'/>
                    <input onClick = {this.authorithation} className='form-button' type="submit" value='Авторизация'/>
                </form>
            </div>
        )
    }
};

export default AuthorizationForm;