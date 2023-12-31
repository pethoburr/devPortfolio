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
import apex from '../assets/apex.png'

const experiences = [
  {
    title: "Apex Predators",
    icon: reacticon,
    iconBG: "#E6DEDD",
    live: "https://apex-predators.netlify.app",
    code: "https://github.com/pethoburr/blog-server-api",
    points: [
      "Fullstack blog website authoring and consuming RESTful API",
      "Backend developed with NodeJS, ExpressJS, MongoDB",
      "Frontend developed with HTML/CSS, JavaScript, React, Material UI, Bootstrap",
      "Created second website for admin users to Create, Read, Update and Delete posts as well as topics following blog site best practices to separate admin and user sites",
      "Admin user has ability to view all posts including unpublished ones as well as the ability to publish and unpublish any post",
      "Admin user also has ability to delete any comment",
      "Test admin account: frigger, password: trigger",
      "Admin live: https://blog-client-admin.netlify.app",
      "Admin code: https://github.com/pethoburr/blog-admin",
      "Backend hosted on fly.io and frontend hosted with netlify"
    ],
    vid: apex
  },
  {
    title: "Club 1000",
    icon: reacticon,
    iconBg: "#E6DEDD",
    live: "https://green-fire-8194.fly.dev/members",
    code: "https://github.com/pethoburr/members-only",
    points: [
      "Members only message board application developed with NodeJs, ExpressJS, MongoDB, Mongoose, PassportJs, EJS",
      "Implemented user authentication with PassportJs",
      "Each posts author and timestamp details are hidden unless user has joined club",
      "Added a membership option where users must answer a question correctly to gain club membership and be authorized to see posts author, username and time posted",
      "Created admin user (username: petho, password: burr) who has the ability to delete anyones message",
      "Deployed and hosted on fly.io"
    ],
    vid: club
  },
  {
    title: "Super Sport Shop",
    icon: reacticon,
    iconBg: "#E6DEDD",
    live: "https://young-feather-4191.fly.dev/",
    code: "https://github.com/pethoburr/inventory-app",
    points: [
      "Inventory application developed with NodeJs, ExpressJS, MongoDB, Mongoose, PUG",
      "Developed with MVC software design pattern and all CRUD operations",
      "Deployed and hosted on fly.io"
    ],
    vid: inventory
  },
  {
    title: "Mini message board",
    icon: reacticon,
    iconBg: "#E6DEDD",
    live: "https://weathered-dream-325.fly.dev/",
    code: "https://github.com/pethoburr/mini-message-board",
    points: [
      "Developed a mini message board app created using NodeJS, ExpressJS, MongoDB, Mongoose, PUG",
      "Deployed and hosted with fly.io"
    ],
    vid: msgboard
  },
    {
      title: "Shopping Cart",
      iconBg: "#383E56",
      live: "https://pethoburr.github.io/shopping-cart/",
      code: "https://github.com/pethoburr/shopping-cart",
      points: [
        "Developed a mock shopping website using React, React Router, functional components and hooks",
        "Included mobile responsivness, WCAG guidelines, semantic HTML"
      ],
      vid: bike
    },
    {
      title: "Where's the weirdos?",
      iconBg: "#E6DEDD",
      live: "https://pethoburr.github.io/photo-tagging/",
      code: "https://github.com/pethoburr/photo-tagging/",
      points: [
        "Developed a Where's Waldo style game involving 3 characters to find with a timer to track your score",
        "Included option to sign in with google account and use google username for updating score to leaderboard or manually entering custom name",
        "Implemented global leaderboards using Firebase backend",
      ],
      vid: waldo
    },
    {
      title: "Resume Builder",
      icon: reacticon,
      live: "https://pethoburr.github.io/cv-project/",
      code: "https://github.com/pethoburr/cv-project/",
      iconBg: "#383E56",
      points: [
        "Developed a Resume builder app in which you can enter your details into a form and on submit it will render a Resume preview",
        "Built with full mobile responsivness using React and implemented form best practices"
      ],
      vid: resume
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
          <div className='flex justify-center items-center w-full h-full'>
            
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
            <li>
              <img src={experience.vid} alt={experience.title} />
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