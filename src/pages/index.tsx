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
import ProjectsSection from "@/components/projects-section";

const clubMeetingDates = [
  "9/23/2022",
  "10/7/2022",
  "10/21/2022",
  "11/4/2022",
  "11/18/2022",
  "12/2/2022"
]

const writeToCalendar: Function = (date: string) => {

  if (clubMeetingDates.includes(date)) {
    return "Club Meeting Today!"
  }

  return "";
}

export default function Home() {
  const [value, change] = useState<Date>(new Date());

  // @ts-ignore
  return (
    <Page>
      <NextSeo
        title="AV Hacks"
        description="AV Hacks is a student-led organization that teaches students how to use technology to make an real world impact."
      />
      <Header />
      <main>
        <About />
        <FeatureSection />
        <CasesSection />
        <ProjectsSection />

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
