import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
// import VideoSection from '@/components/video-section';
// import ListSection from '@/components/list-section';
// import FeatureSection from '@/components/feature-section';
// import CasesSection from '@/components/cases-section';
// import SocialProof from '@/components/social-proof';
// import PricingTable from '@/components/pricing-table';
// import Footer from '@/components/footer';
import Footer2 from '@/components/footer-real';

import About from '@/components/about';
import FAQ from '@/components/FAQ';
import Schedule from '@/components/schedule';
import Register from '@/components/register';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="AV Hacks"
        description="AV Hacks is a 12-hour event where programmers, artists, designers, & other high schoolers from across the Bay Area will come together to build apps & games. We’ll provide workshops, mentorship, free meals & drinks, & prizes!"
      />
      <Header />
      <main>
        {/* <VideoSection /> */}
        <About />
        <FAQ />
        <Schedule />
        <Register />

        {/* <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable /> */}
      </main>
      {/* <Footer2 /> */}
    </Page>
  );
}
