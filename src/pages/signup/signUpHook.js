import React, {useState} from 'react';

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        allergies: "",
        alcohol: "",
        tableGroup: "",
        diet: "",
        avec: "",
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