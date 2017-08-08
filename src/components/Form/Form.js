import React from 'react';
import './Form.css';

class Form extends React.Component {
    handleSubmit = () => {
      this.props.addUser(
          this.name.value,
          this.surname.value,
          this.email.value,
          this.password.value,
      );
    };
    render() {
        return (
            <div>
                <form className="form" onSubmit = {(e) => {
                    this.handleSubmit();
                    e.preventDefault();
                }}>
                    <input ref={(input) => this.name = input} className='form-input' type="text" placeholder='Имя'/>
                    <input ref={(input) => this.surname = input} className='form-input' type="text" placeholder='Фамилия'/>
                    <input ref={(input) => this.email = input} className='form-input' type="text" placeholder='e-mail'/>
                    <input ref={(input) => this.password = input} className='form-input' type="password" placeholder='Пароль'/>
                    <input className='form-button' type="submit" value='Аторизация'/>
                    <input className='form-button' type="submit" value='Регистрация' />
                </form>
            </div>
        )
    }
}

export default Form;