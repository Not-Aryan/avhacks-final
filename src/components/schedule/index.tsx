import { tw } from 'twind';
import styled from 'styled-components';
import data from '../../data.json';

const List = styled.ol`
  list-style: none;
`;

const Event = styled.li.attrs({
  fontSize: [3, 4],
  pl: 0,
  mb: 2,
})`
  line-height: 1.5;
  strong {
    display: block;
  }
`;

const Schedule = () => (
  <div id="schedule">
    <section className={tw(`lg:pt-14 pt-14 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-6 flex flex-col text-center items-center justify-center`)}>
          <div className={tw(`accent-box`)} />
          <p className={tw(`mt-8 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>Schedule</p>
          <p className={tw(`mt-4 text-2xl lg:text-3xl font-bold tracking-tight text-gray-900`)}>Saturday, May 14</p>
        </div>
        <div className={tw(`mb-12 flex justify-center text-center`)}>
          {data.schedule.map((day) => (
            <List mt={1}>
              {day.events.map((event) => (
                <Event className={tw(`pt-4 pb-4`)}>
                  <strong className={tw(`mt-4 text-2xl lg:text-3xl font-bold tracking-tight text-gray-900`)}>
                    {event.time}
                  </strong>
                  {`\n`}
                  <span
                    className={tw(`mt-4 text-2xl lg:text-3xl font-bold tracking-tight text-gray-900`)}
                    role="img"
                    aria-label={event.name}
                  >
                    {event.emoji}
                  </span>
                  {` `}
                  <span className={tw(`mt-4 text-xl lg:text-xl font-bold tracking-tight text-gray-900`)}>
                    {event.name}
                  </span>
                </Event>
              ))}
            </List>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Schedule;
