import React from 'react';
import CountDownTimer from "../../utils/countdownTimer";
import "./home.css"

import PropTypes from 'prop-types';

const Home = ({date, className}) => {
    return <div className={"Container"}>
        <div className={"Grid"}>
            <Item className={"Item-1"}/>
            <Item className={"Item-2"}/>
            <Item className={"Item-3"}/>
            <Item className={"Item-4"}/>
        </div>
        <div className={"TitleCard"}>
            <h1 className={"Title"}>Apoptoosi XVI</h1>
            <p className={"Date"}>{date.toLocaleString()}</p>
            <CountDownTimer className={"Timer " + className} date={date}/>
        </div>
    </div>
};

const Item = ({className}) => {
    return <div className={"BaseItem " + className} />
};

Home.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    className: PropTypes.string
};

Item.propTypes = {
    className: PropTypes.string
};

export default Home;