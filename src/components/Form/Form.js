import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <div>
                <form className="form" onSubmit = {(e) => {e.preventDefault()}}>
                    <input className='form-input' type="text" placeholder='Имя'/>
                    <input className='form-input' type="text" placeholder='Фамилия'/>
                    <input className='form-input' type="text" placeholder='e-mail'/>
                    <input className='form-input' type="password" placeholder='Пароль'/>
                    <input className='form-button' type="submit" value='Зарегистрироваться'/>
                </form>
            </div>
        )
    }
}

export default Form;