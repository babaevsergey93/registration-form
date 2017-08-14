import React from 'react';
import { connect } from 'react-redux';
import './Form.css';
import { addUser } from '../../actions/index';
import Backendless from 'backendless';




class Form extends React.Component {

    resetFields = () => {
        this.name.value = '';
        this.surname.value = '';
        this.email.value = '';
        this.password.value = '';
    };

    getAllUsers = () => {
        const queryBuilder = Backendless.DataQueryBuilder.create();
        console.log(queryBuilder);
        getUsers( queryBuilder );

        function getUsers( queryBuilder ) {
            Backendless.Persistence.of("User").find( queryBuilder )
                .then( handleResult )
                .catch( handleError );
        }

        function handleResult( users ) {
            printUsers( users );

            if( users.length > 0 ) {
                queryBuilder.prepareNextPage();
                getUsers( queryBuilder );
            }
            else {
                console.log( "Reached the end of collection" );
            }
        }

        function handleError( error ) {
            console.log( "Server reported an error - " );
            console.log( error.message );
            console.log( error.errorCode );
        }

        function printUsers( usersCollection ) {
            console.log( "Loaded " + usersCollection.length +
                " users in the current page" );

            for( let i in usersCollection )
                console.log( "\t" + usersCollection[ i ].name );
        }
    };


    createUser = () => {
        const user = new Backendless.User();
        user.name = this.name.value;
        user.surname = this.surname.value;
        user.email = this.email.value;
        user.password = this.password.value;

        // put user in database
        Backendless.Data.of( "User" ).save( user )
            .then( function( obj ) {
                console.log( "object saved. objectId " + obj.objectId )
            } )
            .catch( function( error ) {
                console.log( "got error - " + error )
            })
    };

    handleSubmit = () => {
        // create user

        // this.createUser();

        // get database
        this.getAllUsers();

        // reset fields
        this.resetFields();

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