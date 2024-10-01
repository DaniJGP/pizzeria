import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();
            if (!data.error) {
                setToken(data.token);
                setUserEmail(data.email);
            } else {
                alert(data.error);
            }
        } catch (error) {
            alert(error);
        }
    };

    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();
            if (!data.error) {
                setToken(data.token);
                setUserEmail(data.email);
            } else {
                alert(data.error);
            }
        } catch (error) {
            alert(error);
        }
    };

    const logout = () => {
        setToken(null);
        setUserEmail(null);
    };

    return (
        <UserContext.Provider value={{ userEmail, token, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
};
