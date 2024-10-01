import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [user, setUser] = useState({})

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

    const getUser = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setUser(data);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <UserContext.Provider value={{ userEmail, token, user, login, register, logout, getUser }}>
            {children}
        </UserContext.Provider>
    );
};
