import React, {useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import './signup.css';
import useSignUpForm from './signUpHook';
import InputField from '../../components/inputField/inputField';
import YesNoRadio from '../../components/yesNoRadio/YesNoRadio';

import strings from '../../utils/translations';
import env from '../../env';

const SignUp = () => {

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(submit);
    const [subPage, setSubPage] = useState(-1);
    const [participants, setParticipants] = useState([]);
    const [spots, setSpots] = useState({
        maxSpots: 0,
        usedSpots: 0,
    });
    const [isSuccess, setSuccess] = useState(false);
    const [enableSignUp, setEnableSignUp] = useState({
        guest: false,
        others: false
    });

    useEffect(() => {
        const enableSignUp = new EventSource(env.api + '/signup/enable');
        enableSignUp.onmessage = (e) => {
            let d = JSON.parse(e.data);
            setEnableSignUp(enableSignUp => ({...enableSignUp, ...d}));
        };
        return function cleanup() {
            enableSignUp.close();
        }
    }, []);

    function submit() {
        if (subPage === 0) {
            inputs.invited = true;
        }
        inputs.language = strings.getLanguage();
        fetch(env.api + '/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
            .then((response) => {
                if (response.status === 201) {
                    setSuccess(true);
                } else {
                    throw response.status;
                }
            })
            .catch((error) => {
                console.log(error);
                alert('Something went wrong');
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
        switch (subPage) {
            case 0:
            case 1:
                return <form onSubmit={handleSubmit}>
                    <Name firstName={inputs.firstName} lastName={inputs.lastName}
                          handleInputChange={handleInputChange}/>
                    <Email email={inputs.email} handleInputChange={handleInputChange}/>
                    <Diet diet={inputs.diet} handleInputChange={handleInputChange}/>
                    <AlcoholStatus alcohol={inputs.alcohol} handleInputChange={handleInputChange}/>
                    <TableGroup tableGroup={inputs.tableGroup} handleInputChange={handleInputChange}/>
                    <Avec avec={inputs.avec} handleInputChange={handleInputChange}/>
                    <GiftStatus gift={inputs.gift} handleInputChange={handleInputChange}/>
                    <AlumniStatus alumni={inputs.alumni} handleInputChange={handleInputChange}/>
                    <Organisation organisation={inputs.organisation} handleInputChange={handleInputChange}/>
                    <SillisStatus sillis={inputs.sillis} handleInputChange={handleInputChange}/>
                    <Consent/>
                    <button className={'Button'} type='submit'>{strings.signUp}</button>
                </form>;
            case 2:
                return <div className={'Participants'}>
                    <div>
                        {spots.usedSpots} / {spots.maxSpots}
                    </div>
                    <div className={'Row'}>
                        <p>{strings.name}</p>
                        <p>{strings.formFields.tableGroup}</p>
                    </div>
                    {participants.map(i => (
                        <div key={i.id} className={'Row'}>
                            <p>{i.firstname} {i.lastname}</p>
                            <p>{i.tableGroup}</p>
                        </div>
                    ))}
                </div>;
            default:
                return <div/>
        }
    }


    return <div className={'Base'}>
        {isSuccess ? <Redirect to={{
            pathname: '/signup/success',
            state: { id: '123' }
        }} /> : null}
        <p className={'Info'}>{strings.signUpInfo}</p>
        <div>
            <button disabled={!enableSignUp.guest} className={'Button' + (subPage === 0 ? ' Button-selected' : '')}
                    onClick={() => setSubPage(0)}>{strings.guests}</button>
            <button disabled={!enableSignUp.others} className={'Button' + (subPage === 1 ? ' Button-selected' : '')}
                    onClick={() => setSubPage(1)}>{strings.other}</button>
            <button className={'Button' + (subPage === 2 ? ' Button-selected' : '')} onClick={() => {
                fetchParticipants();
                fetchSpots();
                setSubPage(2);
            }}>{strings.participants}</button>
        </div>
        {renderSwitch()}

    </div>
};

const Name = ({firstName, lastName, handleInputChange}) => {
    return <div className={'Names'}>
        <InputField required={true}
                    inputClass={'nameField'}
                    type='text'
                    text={'text'}
                    name={'firstName'}
                    maxLength={50}
                    onChange={handleInputChange}
                    placeholder={"Teemu"}
                    value={firstName}
        >{strings.formFields.firstName} ({strings.public})</InputField>
        <InputField required={true}
                    inputClass={'nameField'}
                    type='text'
                    text={'text'}
                    name={'lastName'}
                    maxLength={50}
                    onChange={handleInputChange}
                    placeholder={"Teekkari"}
                    value={lastName}
        >{strings.formFields.lastName} ({strings.public})</InputField>
    </div>
};

const Email = ({email, handleInputChange}) => {
    return <InputField required={true}
                       type={'email'}
                       name={'email'}
                       maxLength={255}
                       placeholder={"teemu.teekkari@aalto.fi"}
                       onChange={handleInputChange}
                       value={email}
    >{strings.formFields.email}</InputField>
};

const Diet = ({diet, handleInputChange}) => {
    return <InputField
        type={'text'}
        name={'diet'}
        onChange={handleInputChange}
        value={diet}
    >{strings.formFields.diet}</InputField>
};

const AlcoholStatus = ({alcohol, handleInputChange}) => {
    return <YesNoRadio
        label={strings.formFields.alcohol}
        name={'alcohol'}
        input={alcohol}
        required={true}
        handleInputChange={handleInputChange}
    />
};
const GiftStatus = ({gift, handleInputChange}) => {
    return <YesNoRadio
        label={strings.formFields.gift}
        name={'gift'}
        input={gift}
        handleInputChange={handleInputChange}
    />
};
const AlumniStatus = ({alumni, handleInputChange}) => {
    return <YesNoRadio
        label={strings.formFields.alumni}
        name={'alumni'}
        input={alumni}
        handleInputChange={handleInputChange}
    />
};
const SillisStatus = ({sillis, handleInputChange}) => {
    return <YesNoRadio
        label={strings.formFields.sillis}
        name={'sillis'}
        input={sillis}
        handleInputChange={handleInputChange}
    />
};

const TableGroup = ({tableGroup, handleInputChange}) => {
    return <InputField
        type={'text'}
        name={'tableGroup'}
        onChange={handleInputChange}
        placeholder={"Teekkarit"}
        value={tableGroup}
    >{strings.formFields.tableGroup} ({strings.public})</InputField>
};

const Avec = ({avec, handleInputChange}) => {
    return <InputField
        type={'text'}
        name={'avec'}
        onChange={handleInputChange}
        value={avec}
    >{strings.formFields.avec}</InputField>
};
const Organisation = ({organisation, handleInputChange}) => {
    return <InputField
        type={'text'}
        name={'organisation'}
        maxLength={255}
        onChange={handleInputChange}
        value={organisation}
    >{strings.formFields.organisation}</InputField>
};

const Consent = () => {
    return <div>
        <input type='checkbox' id='consent' name='consent' value='consent' required/>
        <label htmlFor='consent' className={'Consent'}>
            {strings.consent}
            <a className={'PrivacyPolicy'}
               target='blank_'
               href='https://www.inkubio.fi/wp-content/uploads/tiedostot/muut/tapahtumien-ilmoittautumisrekisterin-tietosuojaseloste.pdf'
            > {strings.privacyPolicy}</a>
        </label>
    </div>
};


export default SignUp;