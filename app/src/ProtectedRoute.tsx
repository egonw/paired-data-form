import * as React from 'react';
import { Route, RouteProps } from 'react-router';
import { useState } from 'react';

import { Login, Credentials } from './pages/Login';
import { AuthContext } from './auth';
import { Logout } from './pages/Logout';
import { checkToken } from './api';

export const ProtectedRoute = (props: RouteProps) => {
    const storageKey = 'pdb-token';
    const defaultToken = localStorage.getItem(storageKey) ? localStorage.getItem(storageKey) as string : '';
    const [token, setToken] = useState<string>(defaultToken);
    const [loginError, setLoginError] = useState('');
    const onLogin = async (creds: Credentials) => {
        const password = creds.password;
        try {
            await checkToken(password);
            setToken(password);
            localStorage.setItem(storageKey, password);
        } catch (error) {
            setLoginError(error.message);
        }
    }
    const onLogout = () => {
        setToken('');
        localStorage.removeItem(storageKey);
    }
    return (
        <AuthContext.Provider value={{
            token,
            setToken
        }}>
            {(token) ? <><Route {...props} /><Logout onLogout={onLogout} /></> : <Login onLogin={onLogin} error={loginError} />}
        </AuthContext.Provider>
    );
}