import React, {useState} from 'react';

import "./signup.css";
import useSignUpForm from "./signUpHook";
import InputField from "../../components/inputField/inputField";
import env from "../../env";

const SignUp = () => {

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(submit);
    const [subPage, setSubPage] = useState(0);
    const [participants, setParticipants] = useState([]);
    const [spots, setSpots]  = useState({
        maxSpots: 0,
        usedSpots: 0,
    });

    function submit() {
        fetch(env.api + '/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });
    }
    function fetchParticipants() {
        fetch(env.api + '/participants')
            .then(res => res.json())
            .then(data => {
                setParticipants(data);
            });
    }
    function fetchSpots() {
        fetch(env.api + '/spots')
            .then(res => res.json())
            .then(data => {
                setSpots(data);
            });
    }

    function renderSwitch() {
        switch(subPage) {
            case 1:
                return <form onSubmit={handleSubmit}>
                    <Name firstName={inputs.firstName} lastName={inputs.lastName} handleInputChange={handleInputChange}/>
                    <Email email={inputs.email} handleInputChange={handleInputChange}/>
                    <Diet diet={inputs.diet} handleInputChange={handleInputChange}/>
                    <AlcoholStatus alcohol={inputs.alcohol} handleInputChange={handleInputChange}/>
                    <TableGroup tableGroup={inputs.tableGroup} handleInputChange={handleInputChange}/>
                    <Avec avec={inputs.avec} handleInputChange={handleInputChange} />
                    <Consent/>
                    <button className={"Button"} type="submit">Sign Up</button>
                </form>;
            case 2:
                return <div className={"Participants"}>
                    <div>
                        {spots.usedSpots} / {spots.maxSpots}
                    </div>
                    <div className={"Row"}>
                        <p>Name</p>
                        <p>Table group</p>
                    </div>
                    {participants.map(i => (
                        <div key={i.id} className={"Row"}>
                            <p>{i.firstname} {i.lastname}</p>
                            <p>{i.tableGroup}</p>
                        </div>
                    ))}
                </div>;
            default:
                return <form onSubmit={handleSubmit}>
                    <Name firstName={inputs.firstName} lastName={inputs.lastName} handleInputChange={handleInputChange}/>
                    <Email email={inputs.email} handleInputChange={handleInputChange}/>
                    <Diet diet={inputs.diet} handleInputChange={handleInputChange}/>
                    <AlcoholStatus alcohol={inputs.alcohol} handleInputChange={handleInputChange}/>
                    <TableGroup tableGroup={inputs.tableGroup} handleInputChange={handleInputChange}/>
                    <Avec avec={inputs.avec} handleInputChange={handleInputChange} />
                    <Consent/>
                    <button className={"Button"} type="submit">Sign Up</button>
                </form>;
        }
    }

    return <div className={"Base"}>
        <p className={"Info"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
            <button className={"Button"} onClick={() => setSubPage(0)}>Kutsuvieraat</button>
            <button className={"Button"} onClick={() => setSubPage(1)}>Muut vieraat</button>
            <button className={"Button"}onClick={() => {
                fetchParticipants();
                fetchSpots();
                setSubPage(2);
            }}>Ilmoittautuneet</button>
        </div>
        {renderSwitch()}
    </div>
};

const Name = ({firstName, lastName, handleInputChange}) => {
    return <div className={"Names"}>
        <InputField required={true}
                   inputClass={"nameField"}
                   type="text"
                   text={"text"}
                   name={"firstName"}
                   onChange={handleInputChange}
                   placeholder={"Matti"}
                   value={firstName}
        >First Name</InputField>
        <InputField required={true}
                   inputClass={"nameField"}
                   type="text"
                   text={"text"}
                   name={"lastName"}
                   onChange={handleInputChange}
                   placeholder={"Meikäläinen"}
                   value={lastName}
        >Last Name</InputField>
    </div>
};

const Email = ({email, handleInputChange}) => {
    return <InputField required={true}
                      type={"email"}
                      name={"email"}
                      onChange={handleInputChange}
                      placeholder={"matti.meikalaine@aalto.fi"}
                      value={email}
    >Email Address</InputField>
};

const Diet = ({diet, handleInputChange}) => {
    return <InputField
            type={"text"}
            name={"diet"}
            onChange={handleInputChange}
            placeholder={"diet"}
            value={diet}
        >Diet</InputField>
};

const AlcoholStatus = ({alcohol, handleInputChange}) => {
    return <div className={"RadioSelect"}>
        <label className={"required"}>Alcohol</label>
        <div className={"radioOption"}>
            <input
                className={"radioInput"}
                type="radio"
                name="alcohol"
                value="yes"
                checked={alcohol === "yes"}
                onChange={handleInputChange}
                required
            />
            <label>Yes</label>
        </div>
        <div className={"radioOption"}>
            <input
                className={"radioInput"}
                type="radio"
                name="alcohol"
                value="no"
                checked={alcohol === "no"}
                onChange={handleInputChange}
            />
            <label>No</label>
        </div>
    </div>
};

const TableGroup = ({tableGroup, handleInputChange}) => {
    return <InputField
        type={"text"}
        name={"tableGroup"}
        onChange={handleInputChange}
        placeholder={"Matti ja Teppo"}
        value={tableGroup}
    >Table Group</InputField>
};

const Avec = ({avec, handleInputChange}) => {
  return <InputField
      type={"text"}
      name={"avec"}
      onChange={handleInputChange}
      placeholder={"Joku"}
      value={avec}
  >Avec</InputField>
};

const Consent = () => {
    return <div>
        <input type="checkbox" id="consent" name="consent" value="consent" required />
        <label htmlFor="consent" className={"Consent"}>
            Hyväksy
            <a className={"PrivacyPolicy"}
               target="blank_"
               href="https://www.inkubio.fi/wp-content/uploads/tiedostot/muut/tapahtumien-ilmoittautumisrekisterin-tietosuojaseloste.pdf"
            > tietosuojaseloste</a>
        </label>
    </div>
};



export default SignUp;