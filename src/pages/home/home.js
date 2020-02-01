import React from 'react';
import CountDownTimer from "../../utils/countdownTimer";
import "./home.css"

import PropTypes from 'prop-types';
import Event from "../../components/event/event";

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
                <h1 className={"Title"}>Apoptoosi XVI</h1>
                <p className={"Date"}>{date.toLocaleString()}</p>
                <CountDownTimer className={"Timer " + className} date={date}/>
            </div>
        </div>
        <h2 className={"Heading"}>Juhlapäivä</h2>
        <div className={"Description"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </div>
        <h2 className={"Heading"}>
            Aikataulu
        </h2>
        <div className={"Timetable"}>
            <p>Cocktail tilaisuus</p>
            <p>Klo 15.00</p>
            <p>Jossain</p>
            <p>Pääjuhla</p>
            <p>Klo 18.00</p>
            <p>Jossain muualla</p>
            <p>Jatkot</p>
            <p>Klo 24.00</p>
            <p>Paikka X</p>
            <p>Sillis</p>
            <p> 8.3. Klo 12.00</p>
            <p>Paikka Y</p>
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