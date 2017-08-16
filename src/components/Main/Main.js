import './Main.css'
import React from 'react';
import { Link } from 'react-router-dom'

const Main = () => (
    <div>
        <Link className="enter-button" to='/authorization'>
            <button className="form-button">Авторизация</button>
        </Link>
        <Link className="enter-button" to='/registration'>
            <button className="form-button">Регистрация</button>
        </Link>
    </div>
);

export default Main;