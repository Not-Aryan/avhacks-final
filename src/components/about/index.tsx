import { tw } from 'twind';

const About = () => (
  <div>
    {/* <Headline color="primaryDark">Welcome to the “hackathon.”</Headline>
        <Lead my={3} maxWidth={48}>
        Hack Pennsylvania is a 24-hour event where 150 programmers, artists,
        designers, & other high schoolers from across the Northeast will
        come together to build apps & games. We’ll provide workshops,
        mentorship, free meals & drinks, & places to sleep. The next
        morning, judges will pick the best projects to demo and win prizes.
        </Lead>
        <Modules>
            <Module
            icon="welcome"
            name="Beginner-oriented"
            body="Students of all skill levels are welcome—we’ll hold multiple intro workshops & mentors will help you out!"
            />
            <Module
            icon="emoji"
            name="Endless fun"
            body="It goes way beyond coding. Meet new friends, come to the 2am dance party, win prizes."
            />
            <Module
            icon="rep"
            name="Fabulous food"
            body="You’ll be served Panera dinner, midnight ice cream, bagel breakfast, & continuous snacks. (alt’s available)"
            />
            <Module
            icon="bag"
            name="You woodn’t believe the prizes"
            body="Pine over the AirPods, Google Home, Raspberry Pi, speakers, batteries, software subscriptions, & much more."
            />
        </Modules> */}

    <section className={tw(`lg:pt-14 pt-14 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-12 flex flex-col text-center items-center justify-center`)}>
          <div className={tw(`accent-box`)} />
          <p className={tw(`mt-8 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
            12 hours of coding, fun, free food, & prizes.
          </p>
        </div>
        <div className={tw(`flex flex-col text-center items-center justify-center`)}>
          <h3 className={tw(`pb-4 text-3xl lg:text-3xl tracking-wider text-gray-900`)}>
            AV Hacks is a 12-hour event where 150 programmers, artists, designers, & other high schoolers and middle
            schoolers from across the Bay Area will come together to build apps & games. We’ll provide workshops,
            mentorship, free meals & drinks. Then, in the evening, judges will pick the best projects to demo and win
            prizes.
          </h3>
        </div>

        {/* <Modules>
                <Module
                icon="welcome"
                name="Beginner-oriented"
                body="Students of all skill levels are welcome—we’ll hold multiple intro workshops & mentors will help you out!"
                />
                <Module
                icon="emoji"
                name="Endless fun"
                body="It goes way beyond coding. Meet new friends, come to the 2am dance party, win prizes."
                />
                <Module
                icon="rep"
                name="Fabulous food"
                body="You’ll be served Panera dinner, midnight ice cream, bagel breakfast, & continuous snacks. (alt’s available)"
                />
                <Module
                icon="bag"
                name="You woodn’t believe the prizes"
                body="Pine over the AirPods, Google Home, Raspberry Pi, speakers, batteries, software subscriptions, & much more."
                />
            </Modules> */}
      </div>
    </section>
  </div>
);

export default About;
