import { tw, css } from 'twind/css';
// import Logo from '@/constants/svg/logo.svg';
// import LogoTrans from '@/constants/svg/logo-trans-svg.svg';

const headerStyle = css`
  background-color: #43a5ff;
  min-height: calc(40vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <div className={tw(`flex justify-center items-center w-full mx-auto`)}>
        <img className={tw(`h-36 w-36 mr-10`)} src="logo-trans.svg" alt="logo" width={128} height={128} />
        <h1
          className={tw(
            `text-white font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-white`,
          )}
        >
          AV Hacks
        </h1>
      </div>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-8 text-white text-center text-2xl lg:text-4xl`)}>Join us in B-1, every Monday at lunch!</p>
      </div>
      {/*<div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>*/}
        {/* <button type="button" className={tw(`bg-white font-sans text-4xl py-4 px-6 border rounded text-custom-blue`)}>
          Register
        </button> */}
      {/*</div>*/}
    </div>
    {/* <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>These folks get it</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8`)} width={120} />
          <Netlify className={tw(`m-12`)} width={140} />
          <Nike className={tw(`m-12`)} width={140} />
          <Figma className={tw(`m-12`)} width={140} />
        </div>
      </div>
    </div> */}
  </header>
);

export default Header;
