import React from 'react';
import CountDownTimer from "../../utils/countdownTimer";
import "./home.css"

import Ilma from "../../assets/Ilma.png"
import Maa from "../../assets/Maa.png"
import Tuli from "../../assets/Tuli.png"
import Vesi from "../../assets/Vesi.png"


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
    return <div alt="Maa" src={Maa} className={"BaseItem Item-1"}>
    </div>
}

function Item2() {
    return <div alt="Ilma" src={Ilma} className={"BaseItem Item-2"}>
    </div>

}

function Item3() {
    return <div alt="Tuli" src={Tuli} className={"BaseItem Item-3"} >
    </div>
}

function Item4() {
    return <div alt="Vesi" src={Vesi} className={"BaseItem Item-4"}>
    </div>
}

export default Home;