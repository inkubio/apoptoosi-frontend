import React from 'react';
import CountDownTimer from "../../utils/countdownTimer";
import "./home.css"


function Home({date}) {
    return <div className={"Container"}>
        <div className={"Grid"}>
            <Item1/>
            <Item2/>
            <Item3/>
            <Item4/>
        </div>
        <div className={"TitleCard"}>
            <h1 className={"Title"}>Apoptoosi XVI</h1>
            <p className={"Date"}>{date.toLocaleString()}</p>
            <CountDownTimer className={"Timer"} date={date}/>
        </div>
    </div>
}

function Item1() {
    return <div className={"BaseItem Item-1"}>
        <div className={"Item1-Rect"}/>
        <div className={"Item1-Triangle"}/>
    </div>
}

function Item2() {
    return <div className={"BaseItem Item-2"}>
        <div className={"Item2-MidRect"}/>
        <div className={"Item2-TopRect"}/>
    </div>

}

function Item3() {
    return <div className={"BaseItem Item-3"}>
        <div className={"Item3-TopRect"}/>
        <div className={"Item3-BottomRect"}/>
    </div>
}

function Item4() {
    return <div className={"BaseItem Item-4"}>
        <div className={"Item4-LeftRect"}/>
        <div className={"Item4-RightRect"}/>
    </div>
}

export default Home;