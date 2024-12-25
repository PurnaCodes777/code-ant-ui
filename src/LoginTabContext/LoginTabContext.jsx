import { Children, createContext, useState } from "react"

export const LoginContext = createContext();

const LoginTabContext = ({ children }) => {

    const [loginTab, setLoginTab] = useState('sass');
    const intialPage = 'login';

    const values = {
        loginTab,
        setLoginTab,
        intialPage
    };

    return (
        <LoginContext.Provider value={values} >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginTabContext;