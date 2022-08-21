import { tw } from 'twind';
import Calendar from 'react-calendar';
import {useState} from "react";
import 'react-calendar/dist/Calendar.css';

const CalendarSection = () => {
  const [value, change] = useState(new Date());

  return (
    <section id={"meetings"} className={tw(`bg-gray-50 pb-6`)}>
      <Calendar onChange={change}
                value={value}
      />
    </section>
    )

};

export default Calendar;
