import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';
import Link from 'next/link'

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
  hidden: boolean;
};

const links = [
  {
    label: "Meetings",
    href: "#meetings",
    hidden: false,
  },
  {
    label: "Calendar",
    href: "#calendar",
    hidden: false,
  },
  {
    label: "Officers",
    href: "#officers",
    hidden: false,
  },

  // {
  //   label: `Workshops`,
  //   href: `https://codeday.acecoding.org/`,
  //   hidden: false,
  // },
  // {
  //   label: `Register`,
  //   href: `https://forms.gle/JUjF9Yxd5zytTx8Q8`,
  //   hidden: true,
  // },
];

// const secondaryLinks = [
//   {

//   }
// ];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-white`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <a href={link.href} className={tw(`text-white block px-3 py-2 text-base font-medium`)} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
    {/* <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <a
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw(`block px-3 py-2 text-base font-medium text-white`)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div> */}
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={tw(`bg-custom-blue`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className={tw(`h-16 w-16`)} src="logo-trans.svg" alt="logo" width={48} height={48} />
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => {
                  if (!link.hidden) {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className={tw(`text-lg text-white hover:text-white px-3 py-2 rounded-md font-large`)}
                      >
                        {link.label}
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              {/* <Button modifier="border-0 mr-2">Contact sales</Button>
              <Button modifier="border-0 mr-2">Log in</Button> */}
              <Link href="https://forms.gle/HjixYDAEFxDPfDwY8" >
                <Button primary>Register Here!</Button>
              </Link>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
