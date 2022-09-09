import { tw } from 'twind';
import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const articles = [
  {
    role: "Co-President - Aryan Jain",
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.`,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    role: "Co-President - Pranav Subbaraman",
    title: `Hi, I’m Pranav the co-president of AV Hacks this year. I love coding in my free time and hope to have a great year with all the members of AV Hacks.`,
    image: `/images/pranav.jpg`,
    alt: `Proident pariatur est.`,
  },
  {
    role: "External VP - Evan Tu",
    title: `Hi, I'm Evan and I'm a current junior at Amador. I'm passionate about web and app development, and I look forward on building more projects for my community.`,
    image: `/images/evan.png`,
    alt: `Proident pariatur est.`,
  },
  {
    role: "Internal VP - Ishayu Shikhare",
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.`,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    role: "Treasurer - Anuraag Aravindan",
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur esse.`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    role: "Secretary - Saagnik Mitra",
    title: `Velit reprehenderit culpa Lorem reprehenderit ipsum esse.`,
    image: `/images/case-2.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    role: "Public Relations - Saksham Nirvan",
    title: `Velit reprehenderit culpa Lorem reprehend excepteur esse.`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
  },
];

const CasesSection = () => (
  <section id={"officers"}>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Our Officers (2022-2023)</h1>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1 font-bold`)}>{article.role}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
