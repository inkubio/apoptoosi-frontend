import {useState} from 'react';
import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
    fi:{
        home: "Etusivu",
        events: "Tapahtumat",
        contact: "Ota yhteyttä",
        signUp: "Ilmoittaudu",
        days: "päivää",
        hours: "tuntia",
        minutes: "minuuttia",
        seconds: "sekuntia",
        eventTitle1: "Virpin läpilaulu",
    },
    en:{
        home: "Home",
        events: "Events",
        contact: "Contact",
        signUp: "Sign Up",
        days: "days",
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds",
        eventTitle1: "Virpi singthrought",
    }
});

export default strings;