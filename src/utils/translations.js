import LocalizedStrings from 'react-localization';

import events from '../data/events';
import mainEvents from '../data/mainEvents';

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
        yes: "Kyllä",
        no: "Ei",
        name: "Nimi",
        public: "Julkinen",
        participants: "Ilmoittautuneet",
        guests: "Kutsuvieraat",
        other: "Muut vieraat",
        consent: "Hyväksyn",
        privacyPolicy: "tietosuojaselosteen",
        signUpInfo: "Ilmoittautuminen kutsuvieraille aukeaa 5.2.2020 klo 12:00\n" +
            "Ilmoittautuminen kiltalaisille aukeaa 10.2.2020 klo 12:00\n" +
            "Ilmoittautuminen sulkeutuu 21.2.2020 23:59\n" +
            "Vuosijuhlille on 150 paikkaa.\n" +
            "\n" +
            "Vuosijuhla on iltapukujuhla, jossa asuna on frakki tai pitkä iltapuku. Juhlapukua koristaa lisäksi akateemiset kunniamerkit.\n" +
            "\n" +
            "Illalliskortti maksaa opiskelijalle 80 euroa ja valmistuneelle 95 euroa. Silliaamiainen kustantaa 15 euroa.",
        formFields: {
            firstName: "Etunimi",
            lastName: "Sukunimi",
            email: "Sähköposti",
            tableGroup: "Pöytäryhmä",
            diet: "Erityisruokavaliot",
            avec: "Avec",
            alcohol: "Alkoholillinen",
            gift: "Jätän tervehdyksen",
            alumni: "Olen alumni",
            invited: "Olen kutsuvieras",
            organisation: "Edustamani taho",
            sillis: "Sillis",
        },
        timetable: "Aikataulu",
        eventsList:   events.fi,
        mainEvent: mainEvents.fi,
        successInfo: "Kiitos ilmoittautumisesta. Sinulle on lähetetty vahvistusviesti antamaasi sähköpostiosoitteeseen"


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
        yes: "Yes",
        no: "No",
        name: "Name",
        public: "Public",
        participants: "Participants",
        guests: "Invited Guests",
        other: "Other Guests",
        consent: "I agree to",
        privacyPolicy: "Privacy Policy",
        signUpInfo: "For invited guests: 5.2.2020 at 12.00\n" +
            "For guild members: 10.2.2020 at 12.00\n" +
            "Registration ends 21.2.2020 at 23.59\n" +
            "There is 150 places to the annual ball.\n" +
            "\n" +
            "The annual ball is a white tie event, so the dresscode is a dark suit or an evening dress. In addition the academic honours are included in the dresscode.\n" +
            "\n" +
            "The annual ball costs 80 euros for students and 95 euros for alumni. The herring brunch costs 15 euros.\n",
        formFields: {
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            tableGroup: "Table Group",
            diet: "Dietary restrictions",
            avec: "Avec",
            alcohol: "Alcohol",
            gift: "I shall leave a salute",
            alumni: "I am an alumni",
            invited: "I am invited guest",
            organisation: "Represented Organisation",
            sillis: "Sillis",
        },
        timetable: "Timetable",
        eventsList: events.en,
        mainEvent: mainEvents.en,
        successInfo: "Thank you for signing up. Confirmation email have been send to given email address"
    }
});

export default strings;