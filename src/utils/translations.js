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
        ]
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
        eventsList:   [
            {
                title: "title",
                date: "date",
                content: "content",
                link: "http://www.example.com",
                linkText: "Facebook event"
            },
            {
                title: "title2",
                date: "date2",
                content: "content2",
                link: "http://www.example.com",
                linkText: "Facebook event 2"
            }
        ]
    }
});

export default strings;