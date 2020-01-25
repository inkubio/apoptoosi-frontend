import React, { useState } from 'react';
import './event.css';

const Event = ({title, children, link, linkText, day, month}) => {

    const [showDesc, setDesc] = useState(false);

    return <div className={"Card"} onClick={() => setDesc(!showDesc)}>
        <h2 className={"title"}>{title}</h2>
        <time>{day}/{month}</time>
        {showDesc ? <p className={"content"}>{children}</p>: ''}
        <a className={"link"} href={link} target={"_blank"}>{linkText || link}</a>
    </div>
};

export default Event;