import { tw } from 'twind';

const About = () => (
  <div>
    <section className={tw(`lg:pt-14 pt-14 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-12 flex flex-col text-center items-center justify-center`)}>
          <div className={tw(`accent-box`)} />
          <p className={tw(`mt-8 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
            {/*12 hours of coding, fun, free food, & prizes.*/}
            About Us
          </p>
        </div>
        <div className={tw(`flex flex-col text-center items-center justify-center`)}>
          <h3 className={tw(`pb-20 text-xl lg:text-3xl tracking-wider text-gray-900`)}>
            AV Hacks is a student-led organization that teaches students how to use technology to make an real world impact. We develop projects, invite guest speakers, and host hackathons in order to help students pursue passions for computer science.
            We are also partnered with Hack Club to provide benefits to our members.

          </h3>
        </div>
      </div>
    </section>
  </div>
);

export default About;
