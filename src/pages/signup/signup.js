import React from 'react';

import "./signup.css";
import useSignUpForm from "./signUpHook";
import Event from "../../components/event/event";

const SignUp = ({}) => {

    const submit = () => {
        alert(`Sign up succesfully
        Name: ${inputs.firstName} ${inputs.lastName}
        Email: ${inputs.email}
        Allergies: ${inputs.allergies}
        Alcohol: ${inputs.alcohol}
        Table Group: ${inputs.tableGroup}
        Avec: ${inputs.avec}`
        );

    };

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(submit);

    return <div className={"Base"}>
        <p className={"Info"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p> Ilmoittautumalla hyväksyt
        <a className={"PrivacyPolicy"}
           target="blank_"
           href="https://www.inkubio.fi/wp-content/uploads/tiedostot/muut/tapahtumien-ilmoittautumisrekisterin-tietosuojaseloste.pdf"
        > tietosuojaselosteen</a></p>
        <form onSubmit={handleSubmit}>
            <div className={"Names"}>
                <div>
                    <label className={"required"}>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={handleInputChange}
                        placeholder={"First Name"}
                        value={inputs.firstName}
                        required />
                </div>
                <div>
                    <label className={"required"}>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder={"Last Name"}
                        onChange={handleInputChange}
                        value={inputs.lastName}
                        required />
                </div>
            </div>
            <label className={"required"}>Email Address</label>
            <input
                type="email"
                name="email"
                placeholder={"matti.meikalaine@aalto.fi"}
                onChange={handleInputChange}
                value={inputs.email}
                required />
            <label>Allergies</label>
            <input
                type="text"
                name="allergies"
                placeholder={"Allergiat"}
                onChange={handleInputChange}
                value={inputs.allergies}
                />
            <div className={"RadioSelect"}>
                <label className={"required"}>Alchol</label>
                <div className={"radioOption"}>
                    <input
                        className={"radioInput"}
                        type="radio"
                        name="alcohol"
                        value="yes"
                        checked={inputs.alcohol === "yes"}
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
                        checked={inputs.alcohol === "no"}
                        onChange={handleInputChange}
                    />
                    <label>No</label>
                </div>
            </div>
            <label>Pöytäseuruetoive</label>
            <input
                type="text"
                name="tableGroup"
                placeholder={"matti ja teppo"}
                onChange={handleInputChange}
                value={inputs.tableGroup}
            />
            <label>Avec</label>
            <input
                type="text"
                name="avec"
                placeholder={"rakkainpain"}
                onChange={handleInputChange}
                value={inputs.avec}
            />
            <button className={"Submit"} type="submit">Sign Up</button>
        </form>
    </div>
};

export default SignUp;