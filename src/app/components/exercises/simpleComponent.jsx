import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    if (isAuth) {
        return (
            <button className="btn btn-primary" onClick={onLogout}>
                Выйти из системы
            </button>
        );
    } else {
        return (
            <button className="btn btn-primary" onClick={onLogin}>
                Войти
            </button>
        );
    }
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
};
export default SimpleComponent;
