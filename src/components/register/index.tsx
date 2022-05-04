import { tw } from 'twind';

const Register = () => (
  <div className="bg-custom-blue">
    <section className={tw(`lg:pt-14 pt-14 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`mb-6 flex flex-col text-center items-center justify-center`)}>
          <div className={tw(`accent-box`)} />
          <p className={tw(`mt-8 mb-8 text-4xl lg:text-5xl font-bold tracking-tight text-white`)}>Register</p>
          <iframe
            title="registration form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeYonr-0QqNYFG6gVeJSnTq1l34rLO1lG-4xDYAvyt1LCxFxg/viewform?embedded=true"
            width="640"
            height="1000"
            frameBorder="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  </div>
);

export default Register;
