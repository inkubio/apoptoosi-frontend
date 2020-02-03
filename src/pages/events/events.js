import React from 'react';
import "./events.css"

import Event from '../../components/event/event';
import strings from "../../utils/translations";

const Events = () => {
  const data = strings.eventsList;
  const events = data.map((item, index) => <Event
      key={index}
      title={item.title}
      linkText={item.linkText}
      link={item.link}
      date={item.date}
      >
      {item.content}
    </Event>
  );
  return <div className={"Base"}>
    <div className={"Events"}>
        {events}
    </div>
  </div>
};

export default Events;