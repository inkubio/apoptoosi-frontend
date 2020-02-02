import React from 'react';
import strings from '../../utils/translations';

import './YesNoRadio.css'

const YesNoRadio = ({label, name, input, handleInputChange}) => {
    return <div className={"RadioSelect"}>
        <label className={"required"}>{label}</label>
        <div className={"radioOption"}>
            <input
                className={"radioInput"}
                type="radio"
                name={name}
                value="yes"
                checked={input === "yes"}
                onChange={handleInputChange}
                required
            />
            <label>{strings.yes}</label>
        </div>
        <div className={"radioOption"}>
            <input
                className={"radioInput"}
                type="radio"
                name={name}
                value="no"
                checked={input === "no"}
                onChange={handleInputChange}
            />
            <label>{strings.no}</label>
        </div>
    </div>
};

export default YesNoRadio;