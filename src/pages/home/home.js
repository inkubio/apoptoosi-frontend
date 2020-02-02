import React from 'react';
import PropTypes from 'prop-types';
import CountDownTimer from "../../utils/countdownTimer";
import strings from "../../utils/translations";

import "./home.css"

const Home = ({date, className}) => {
    return <div className={"Container"}>
        <div className={"TitleWrapper"}>
            <div className={"Grid"}>
                <Item className={"Item-1"}/>
                <Item className={"Item-2"}/>
                <Item className={"Item-3"}/>
                <Item className={"Item-4"}/>
            </div>
            <div className={"TitleCard"}>
                <h1 className={"Title"}>{strings.mainEvent.title}</h1>
                <p className={"Date"}>{date.toLocaleString()}</p>
                <CountDownTimer className={"Timer " + className} date={date}/>
            </div>
        </div>
        <h2 className={"Heading"}>{strings.mainEvent.title}</h2>
        <div className={"Description"}>{strings.mainEvent.description}</div>
        <h2 className={"Heading"}>{strings.timetable}</h2>
        <div className={"Timetable"}>
            <p>{strings.mainEvent.cocktailParty.title}</p>
            <p>{strings.mainEvent.cocktailParty.when}</p>
            <p>{strings.mainEvent.cocktailParty.where}</p>
            <p>{strings.mainEvent.mainParty.title}</p>
            <p>{strings.mainEvent.mainParty.when}</p>
            <p>{strings.mainEvent.mainParty.where}</p>
            <p>{strings.mainEvent.afterparty.title}</p>
            <p>{strings.mainEvent.afterparty.when}</p>
            <p>{strings.mainEvent.afterparty.where}</p>
            <p>{strings.mainEvent.sillis.title}</p>
            <p>{strings.mainEvent.sillis.when}</p>
            <p>{strings.mainEvent.sillis.where}</p>
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