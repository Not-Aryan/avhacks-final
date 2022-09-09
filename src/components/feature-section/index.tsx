import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const meetingInfoData = [
  {
    title: "AV Hacks Meeting #1",
    date: 'September 16, 2022',
    description: 'We introduced what we will do at AV Hacks, how we plan to organize projects, and teach programming material.',
    link: "https://tinyurl.com/mvx4nud7",
  },
  // {
  //   title: "Second Meeting",
  //   date: 'March 20, 2020',
  //   description: 'Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia',
  //   link: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScEI6BpxhazFEJqMdJThRRdyRCbQaHumVvqUtZixj1S2A9_sA/viewform?usp=send_form",
  // },
  // {
  //   title: "Third Meeting",
  //   date: 'March 20, 2020',
  //   description: 'Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia',
  //   link: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScEI6BpxhazFEJqMdJThRRdyRCbQaHumVvqUtZixj1S2A9_sA/viewform?usp=send_form",
  // }
]


const FeatureSection = () => (
  <section id={"meetings"} className={tw(`bg-gray-50 pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-gray-50`)}>
        <div className={tw(`mb-16 text-center flex flex-col text-center items-center justify-center`)}>
          <div className={tw(`accent-box`)} />
          <p className={tw(`mt-8 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
            Our Meeting Resources/Info
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>

          {meetingInfoData.map((data, index) => (
            <div className={tw(`w-full bg-white border-b lg:border-r rounded-xl shadow-md p-8 my-4`)}>
              <div className={tw(`flex flex-col justify-start  mb-6`)}>
                <div className={tw(`text-3xl font-bold`)}>{data.title}</div>
                <h3 className={tw(`leading-loose text-gray-500 text-xl`)}>{data.date}</h3>
              </div>
              <p className={tw(`leading-loose text-gray-500 text-xl`)}>
                {data.description}
              </p>
              <p className={tw(`leading-loose text-gray-500 mt-10 text-xl`)}>
                Link to resources: <a rel={"noopener noreferrer"} target={"_blank"} style={{color: "rgb(6 182 212) !important"}} href={data.link}>{data.link}</a>
              </p>
            </div>
            ))
          }

        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
//
// <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
//             <div className={tw(`flex items-center mb-6`)}>
//               <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
//               <div className={tw(`ml-4 text-xl`)}>Enterprise-ready</div>
//             </div>
//             <p className={tw(`leading-loose text-gray-500 `)}>
//               Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.
//             </p>
//           </div>
//           <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
//             <div className="flex items-center mb-6">
//               <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
//               <div className={tw(`ml-4 text-xl`)}>Unlimited growth</div>
//             </div>
//             <p className={tw(`leading-loose text-gray-500`)}>
//               Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.
//             </p>
//           </div>
//           <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
//             <div className={tw(`flex items-center mb-6`)}>
//               <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
//               <div className={tw(`ml-4 text-xl`)}>Recommended by experts</div>
//             </div>
//             <p className={tw(`leading-loose text-gray-500`)}>
//               Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.
//             </p>
//           </div>
//           <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
//             <div className={tw(`flex items-center mb-6`)}>
//               <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
//               <div className={tw(`ml-4 text-xl`)}>Modern platform</div>
//             </div>
//             <p className={tw(`leading-loose text-gray-500`)}>
//               Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet
//               reprehenderit.
//             </p>
//           </div>
//           <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
//             <div className={tw(`flex items-center mb-6`)}>
//               <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
//               <div className={tw(`ml-4 text-xl`)}>Integrations</div>
//             </div>
//             <p className={tw(`leading-loose text-gray-500`)}>
//               Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia
//               consectetur.
//             </p>
//           </div>
