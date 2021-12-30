import React, { useState } from "react";
import CardWrapper from "../common/Card";
const withLoginLogout = (Component) => (props) => {
    const [isUser, setIsUser] = useState(localStorage.getItem("user"));
    const handleLogin = () => {
        localStorage.setItem("user", true);
        setIsUser(true);
    };
    const handleLogout = () => {
        localStorage.removeItem("user", false);
        setIsUser(false);
    };
    return (
        <CardWrapper>
            <h2>Wrapped with bootstrap card</h2>
            <Component
                onLogin={handleLogin}
                onLogout={handleLogout}
                isAuth={!!isUser}
            />
        </CardWrapper>
    );
};

export default withLoginLogout;
