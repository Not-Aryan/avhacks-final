import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import Footer2 from '@/components/footer-real';
import About from '@/components/about';
import CalendarSection from "@/components/calendar";
import {tw} from "twind";

export default function Home() {
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
        <div className={tw(`mt-12 flex flex-col text-center items-center justify-center`)}>
          <div className={tw(`accent-box`)} />
          <p className={tw(`mt-8 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
            Our Club Calendar
          </p>
        </div>
        <CalendarSection />
      </main>
       <Footer2 />
    </Page>
  );
}
