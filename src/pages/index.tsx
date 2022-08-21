import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import Footer2 from '@/components/footer-real';
import About from '@/components/about';
import {tw} from "twind";
import {ReactNode, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// todo impl calendar logic here
const writeToCalendar: ReactNode = (date: string) => {
  return "the date is " + date;
}

export default function Home() {
  const [value, change] = useState<Date>(new Date());

  // @ts-ignore
  return (
    <Page>
      <NextSeo
        title="AV Hacks"
        description="AV Hacks is a 12-hour event where programmers, artists, designers, & other high schoolers from across the Bay Area will come together to build apps & games. We’ll provide workshops, mentorship, free meals & drinks, & prizes!"
      />
      <Header />
      <main>
        <About />
        <FeatureSection />
        <CasesSection />

        {/*calendar section*/}
        <div id={"calendar"} className={tw(`mt-12 flex flex-col text-center items-center justify-center`)}>
          <div className={tw(`accent-box`)} />
          <p className={tw(`mt-8 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
            Our Club Calendar
          </p>
        </div>
        <Calendar onChange={change}
                  value={value}
        />
        <p className={tw(`text-center mb-10`)}>{writeToCalendar(value.toLocaleDateString())}</p>
      </main>
       {/*end of calendar section*/}

       <Footer2 />
    </Page>
  );
}
