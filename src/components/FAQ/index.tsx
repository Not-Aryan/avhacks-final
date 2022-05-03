import { tw } from 'twind';
import styled from 'styled-components';

const Questions = styled.div.attrs({ maxWidth: 72, mt: [3, 4] })`
  display: grid;
  grid-gap: 2rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
`;
const Question = ({ name, body }) => (
  <a className={tw(`block p-6 max-w-sm bg-white rounded-lg border border-gray-200`)}>
    <h5 className={tw(`mb-4 text-2xl font-bold tracking-tight`)}>{name}</h5>
    <p className={tw(`text-xl font-normal`)}>{body}</p>
  </a>
);

const FAQ = () => (
  <div>
    <section className={tw(`lg:pt-14 pt-14 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-12 flex flex-col text-center items-center justify-center`)}>
          <div className={tw(`accent-box`)} />
          <p className={tw(`mt-8 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>FAQ</p>
        </div>
        <Questions>
          <Question
            name="How much does it cost?"
            body="Nothing, it’s totally free. Registration and attendance are 100% free, with meals, drinks, swag, & workshops included."
          />
          <Question
            name="Who can participate?"
            body="Any current student grades 8–12. If you’re under/over that age, send us a chat (in the corner) & we’ll see what we can do."
          />
          <Question
            name="What if I’m new to coding?"
            body="Are you elemen-tree? Complete beginners are not only welcome, but expected! Learn as you go with our intro workshops & mentors."
          />
          <Question
            name="What if I already know how to code?"
            body="All skill levels are welcome. Though we primarily market to beginners, we welcome experts (& everyone in between)."
          />
          <Question
            name="Do I need a team?"
            body="Nope! You’ll have an opportunity to meet fellow hackers and make teams of up to 4—find some new friends, bring yours, or work alone."
          />
          <Question
            name="What can I make?"
            body="Anything! A website, app, game, hardware, you name it. Judges will rate projects on creativity, technical skill demonstrated, polish, & utility."
          />
          <Question
            name="What should I bring?"
            body="Student ID, computer, chargers, anything for your hack (hardware?), toiletries, & a sleeping bag (maybe). For a few dozen hackers we have $30 travel reimbursements (bring receipts)."
          />
          <Question
            name="Who runs this? Is it supervised?"
            body={
              <>
                We’re independently-organized by high schoolers, sponsored via an intl. non-profit called{` `}
                <a href="https://hackclub.com" color="red">
                  Hack Club
                </a>
                . The event is fully supervised by over a dozen adults (with background checks).
              </>
            }
          />
        </Questions>
      </div>
    </section>
  </div>
);

export default FAQ;
