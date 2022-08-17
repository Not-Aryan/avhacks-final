import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const meetingInfoData = [
  {
    title: "First Meeting",
    date: 'March 20, 2020',
    description: 'Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia',
    link: "https://forms.gle/JUjF9Yxd5zytTx8Q8",
  },
  {
    title: "Second Meeting",
    date: 'March 20, 2020',
    description: 'Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia',
    link: "https://forms.gle/JUjF9Yxd5zytTx8Q8",
  },
  {
    title: "Third Meeting",
    date: 'March 20, 2020',
    description: 'Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia',
    link: "https://forms.gle/JUjF9Yxd5zytTx8Q8",
  }
]

// todo impl club calendar that supports mark down?
const Calendar = () => (
  <section id={"meetings"} className={tw(`bg-gray-50 pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-gray-50`)}>
        <div className={tw(`mb-16 text-center flex flex-col text-center items-center justify-center`)}>
          <div className={tw(`accent-box`)} />
          <p className={tw(`mt-8 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
            Our Club Calendar
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>

          hello world

        </div>
      </div>
    </div>
  </section>
);

export default Calendar;
