import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    // Состояние для хранения значений поля ввода
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Отправляем данные на сервер
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/');
            } else {
                setErrorMessage(data.message || 'Ошибка входа');
            }
        } catch (error) {
            setErrorMessage('Ошибка подключения к серверу');
            console.error(error);
        }
    };

    return (
        <div className="login_form">
            <h2>Вход в аккаунт</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Имя пользователя</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Обновляем состояние при изменении значения
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Обновляем состояние при изменении значения
                        required
                    />
                </div>
                <button type="submit">Войти</button>
            </form>

            {errorMessage && <p className="error_message">{errorMessage}</p>} {/* Показать ошибку при неудачной попытке входа */}
        </div>
    );
}

export default Login;
