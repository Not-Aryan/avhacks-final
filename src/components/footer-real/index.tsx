import { tw } from 'twind';

const Footer2 = () => (
  <footer className={tw(`p-4 bg-white rounded-lg shadow md:px-6 md:py-8`)}>
    <div className={tw(`sm:flex sm:items-center sm:justify-around`)}>
      <a href="https://avhacks.org" className={tw(`flex items-center mb-4 sm:mb-0`)}>
        <img src="logo.svg" className={tw(`mr-4 h-12 w-12`)} alt="AV Hacks Logo" />
        <span className={tw(`self-center text-md font-semibold whitespace-nowrap`)}>AV Hacks</span>
      </a>
      <ul className={tw(`flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0`)}>
        <li>
          <a href="#officers" className={tw(`text-md  mr-4 hover:underline md:mr-6 `)}>
            Officers
          </a>
        </li>
        <li>
          <a href="#calendar" className={tw(`text-md  mr-4 hover:underline md:mr-6 `)}>
            Calendar
          </a>
        </li>
        <li>
          <a href="#meetings" className={tw(`text-md  mr-4 hover:underline md:mr-6 `)}>
            Meetings
          </a>
        </li>
      </ul>
    </div>

    <div className={tw(`px-80`)}>
      <hr className={tw(`my-6 border-gray-200 sm:mx-auto lg:my-8`)} />
    </div>
    <span className={tw(`block text-md text-gray-500 sm:text-center`)}>
      © 2022 <a className="hover:underline">AV Hacks™</a>. All Rights Reserved.
    </span>
  </footer>
);

export default Footer2;


