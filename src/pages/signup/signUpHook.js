import React, {useState} from 'react';

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        alcohol: true,
        tableGroup: "",
        diet: "",
        avec: "",
        gift: false,
        invited: false,
        alumnu: false,
    });

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    };

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default useSignUpForm;