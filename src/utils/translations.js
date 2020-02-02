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
        yes: "Kyllä",
        no: "Ei",
        name: "Nimi",
        public: "Julkinen",
        participants: "Ilmoittautuneet",
        guests: "Kutsuvieraat",
        other: "Muut vieraat",
        consent: "Hyväksyn",
        privacyPolicy: "tietosuojaselosteen",
        signUpInfo: "Lorem ipsum",
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
            organisation: "Edustamani taho",
        },
        timetable: "Aikataulu",
        eventsList:   [
            {
                title: "Otsikko",
                date: "Päivämäärä",
                content: "sisältö",
                link: "http://www.example.com",
                linkText: "Facebook tapahtuma"
            },
            {
                title: "Toinen otsikko",
                date: "03/04",
                content: "jotain kivaa",
                link: "http://www.example.com",
                linkText: "Facebook tapahtuma"
            }
        ],
        mainEvent: {
            title: "Apoptoosi XVI",
            description: "Lorem ipsum",
            cocktailParty: {
                title: "Cocktail tilaisuus",
                when: "Klo 15:00",
                where: "Jossain"
            },
            mainParty: {
                title: "Pääjuhla",
                when: "Klo 18:00",
                where: "Toisessa paikassa"
            },
            afterparty: {
                title: "Jatkot",
                when: "Klo 24:00",
                where: "Paikka X",
            },
            sillis: {
                title: "Sillis",
                when: "8.3. Klo 12:00",
                where: "Paikka Y",
            }
        },


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
        signUpInfo: "Lorem ipsum",
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
            organisation: "Represented Organisation",
        },
        timetable: "Timetable",
        eventsList:   [
            {
                title: "title1",
                date: "03/03",
                content: "content",
                link: "http://www.example.com",
                linkText: "Facebook Event"
            },
            {
                title: "title2",
                date: "03/04",
                content: "something nice",
                link: "http://www.example.com",
                linkText: "Facebook Event"
            }
        ],
        mainEvent: {
            title: "Apoptoosi XVI",
            description: "Lorem ipsum",
            cocktailParty: {
                title: "Cocktail party",
                when: "At 15:00",
                where: "Somewhere"
            },
            mainParty: {
                title: "Main party",
                when: "At 18:00",
                where: "Somewhere else"
            },
            afterparty: {
                title: "Afterparty",
                when: "At 24:00",
                where: "Place X",
            },
            sillis: {
                title: "Sillis",
                when: "8.3. At 12:00",
                where: "Place Y",
            }
        },
    }
});

export default strings;