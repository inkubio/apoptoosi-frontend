import React from 'react';
import "./events.css"

import Event from '../../components/event/event';

const Events = () => {
  return <div className={"Base"}>
    <div className={"Events"}>
      <Event title={"joku kiva tapahtuma"} link={"http://www.example.com"} linkText={"link text"} day={"01"} month={"03"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Event>
      <Event title={"toinen hauskempi tapahtuma"} link={"http://www.example.com"} linkText={"link text"} day={"03"} month={"03"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Event>
      <Event title={"tosi kiva tapahtuma"} link={"http://www.example.com"} linkText={"link text"} day={"04"} month={"03"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Event>
      <Event title={"en tiedä enää mitään"} link={"http://www.example.com"} linkText={"link text"} day={"06"} month={"03"}>Loremp ipsum dolor sit amet</Event>
    </div>
  </div>
};

export default Events;