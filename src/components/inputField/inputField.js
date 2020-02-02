import React from 'react';
import PropTypes from 'prop-types';

import './inputField.css';

const InputField = ({className, type, required, name, placeholder, value, onChange, inputClass, children}) => {
    return <div className={className}>
        <label className={required ? "required" : ''}>{children}</label> :
        <input
            className={inputClass}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder || children}
            value={value}
            required={required}/>
    </div>
};

InputField.propTypes = {
    className: PropTypes.string,
    inputClass: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node])
};

InputField.defaultProps = {
    required: false,
    type: "text"
};

export default InputField;