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