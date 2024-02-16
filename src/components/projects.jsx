import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import reacticon from '../assets/reactjs.png';
import bike from '../assets/bikelifeapp.jpg';
import waldo from '../assets/weresthewierdos.jpg';
import resume from '../assets/resumeapp.jpg';
import msgboard from '../assets/msgboard.jpg';
import inventory from '../assets/inventory.jpg';
import club from '../assets/club1000.jpg';
import apex from '../assets/apex.png';
import apexbottom from '../assets/apexbottom.png';
// import rbm from '../assets/resumebuildermobile.png';
// import focused from '../assets/resumebuildermobilefocused.png';
import preview from '../assets/resumebuilderpreview.png';
// import weirdomobile from '../assets/weirdomobile.png';
import apexSignUp from '../assets/apexsignup.png';
// import bsMobileFeat from '../assets/bikeshopmobilefeatured.png';
import weirdBoard from '../assets/weirdoleaderboard.png';
import bsCart from '../assets/bikeshopcart.png';
import gAuth from '../assets/weirdogoogleauth.png';
import bsList from '../assets/bikeshoplist.png';
// import mobileMsg from '../assets/mmmobilemessage.png';
import bsAbout from '../assets/bikeshopabout.png';
import weirdoFinder from '../assets/weirdofinder.png';
// import mobileHome from '../assets/mmmobilehome.png';
import sssList from '../assets/sssmobilemakelist.png';
// import clubMobileHome from '../assets/club1000mobilehome.png';
// import sssmobileHome from '../assets/sssmobilehome.png';
import sssmakeList from '../assets/sssmakelist.png';
// import clubSignUp from '../assets/club1000mobilesignup.png';
// import apexmobileLatest from '../assets/apexmobilelatest.png';
// import apexmobileMenu from '../assets/apexmobilemenu.png';
import clubHome from '../assets/club1000home.png';
import apexLatest from '../assets/apexlatest.png';
import msgBoardMsg from '../assets/msgboardmsg.png';
import Carousel from './Carousel';

const apexPics = [apex, apexSignUp, apexLatest, apexbottom];
const clubPics = [club, clubHome];
const sssPics = [inventory, sssmakeList];
const msgrPics = [msgboard, msgBoardMsg];
const bsPics = [bike, bsAbout, bsList, bsCart];
const weirdPics = [waldo, weirdoFinder, gAuth, weirdBoard];
const rbPics = [resume, preview];

const experiences = [
  {
    title: "Apex Predators",
    icon: reacticon,
    iconBG: "#E6DEDD",
    live: "https://apex-predators.netlify.app",
    code: "https://github.com/pethoburr/blog-server-api",
    points: [
      "Blog website authoring and consuming RESTful API",
      "Second website for admin users to perform CRUD operations on posts and topics following blog site best practices",
      "Admin can view, publish and unpublish any post, including ones stored in the database that have not yet been published",
      "Admin has ability to delete any comment",
      "Test account username: frigger, password: trigger",
      "Backend deployed on fly.io and frontend deployed on netlify",
      "Backend: NodeJS, ExpressJS, MongoDB",
      "Frontend: HTML, CSS, JavaScript, React, Material UI, Bootstrap",
    ],
    app: 'https://blog-client-admin.netlify.app',
    repo: 'https://github.com/pethoburr/blog-admin',
    vid: apexPics
  },
  {
    title: "Club 1000",
    icon: reacticon,
    iconBg: "#E6DEDD",
    live: "https://green-fire-8194.fly.dev/members",
    code: "https://github.com/pethoburr/members-only",
    points: [
      "Members only message board application",
      "Implemented user authentication with PassportJs",
      "Each posts author and timestamp details are hidden unless user has joined club",
      "Added a membership option where users must answer a question correctly to gain club membership and be authorized to see posts author, username and time posted",
      "Created admin user (username: petho, password: burr) who has the ability to delete anyones message",
      "Deployed and hosted on fly.io",
      "Backend: NodeJs, ExpressJS, MongoDB",
      "Frontend: HTML, CSS, EJS",
    ],
    vid: clubPics
  },
  {
    title: "Super Sport Shop",
    icon: reacticon,
    iconBg: "#E6DEDD",
    live: "https://young-feather-4191.fly.dev/",
    code: "https://github.com/pethoburr/inventory-app",
    points: [
      "Inventory application to manage motorcycle's stock",
      "Developed with MVC software design pattern and all CRUD operations",
      "Deployed and hosted on fly.io",
      "Backend: NodeJs, ExpressJS, MongoDB",
      "Frontend: HTML, CSS, PUG",
    ],
    vid: sssPics
  },
  {
    title: "Mini message board",
    icon: reacticon,
    iconBg: "#E6DEDD",
    live: "https://weathered-dream-325.fly.dev/",
    code: "https://github.com/pethoburr/mini-message-board",
    points: [
      "Deployed and hosted with fly.io PaaS",
      "Backend: NodeJS, ExpressJS, MongoDB",
      "Frontend: HTML, CSS, PUG",
    ],
    vid: msgrPics
  },
    {
      title: "Shopping Cart",
      iconBg: "#383E56",
      live: "https://pethoburr.github.io/shopping-cart/",
      code: "https://github.com/pethoburr/shopping-cart",
      points: [
        "Developed a mock shopping website using React, React Router, functional components and hooks",
        "Included mobile responsivness, WCAG guidelines, semantic HTML",
        "Deployment and CI/CD with Github Actions",
        "Frontend: HTML, CSS, JavaScript, React"
      ],
      vid: bsPics
    },
    {
      title: "Where's the weirdos?",
      iconBg: "#E6DEDD",
      live: "https://pethoburr.github.io/photo-tagging/",
      code: "https://github.com/pethoburr/photo-tagging/",
      points: [
        "Developed a Where's Waldo style game involving 3 characters to find with a timer to track your score",
        "Included option to sign in with google account and use google username for updating score to leaderboard or manually entering custom name",
        "Global leaderboards for scorekeeping",
        "Backend: Google's Cloud PaaS Firebase",
        "Frontend: HTML, CSS, JavaScript, React, Bootstrap",
      ],
      vid: weirdPics
    },
    {
      title: "Resume Builder",
      icon: reacticon,
      live: "https://pethoburr.github.io/cv-project/",
      code: "https://github.com/pethoburr/cv-project/",
      iconBg: "#383E56",
      points: [
        "Developed a Resume builder app in which you can enter your details into a form and on submit it will render a Resume preview",
        "Built with full mobile responsivness using React and implemented form best practices",
        "Frontend: HTML, CSS, JavaScript, React, Font Awesome"
      ],
      vid: rbPics
    }
  ];
  
  const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.title}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full bg-slate-600 rounded-full'>
            
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'><a href={experience.live} target="_blank" rel="noreferrer">Live</a><span>&nbsp;|&nbsp;</span><a href={experience.code} target="_blank" rel="noreferrer">Code</a></h3>
          
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
          {experience.app && <li><a href={experience.app} target="_blank">Admin live</a></li>}
          {experience.repo && <li><a href={experience.repo} target="_blank">Admin code</a></li>}
            <li>
              {console.log('arr passed to carousel:' + experience.vid)}
              <Carousel arr={experience.vid} />
              {/* <img src={experience.vid} alt={experience.title} /> */}
              </li>
        </ul>
      </VerticalTimelineElement>
    );
  };
  
  const Projects = () => {
    return (
      <div className='pjContain'>
        <motion.div variants={textVariant()}>
          <h1>
            Projects
          </h1>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  };

export default Projects;