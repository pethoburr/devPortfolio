import '../components/stylesheets/tech.css';
import javascript from '../assets/javascript.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import git from '../assets/git.png';
import reactjs from '../assets/reactjs.png';
import node from '../assets/nodejs.png';
import mongo from '../assets/mongodb.png';
import tailwind from '../assets/tailwind.png';

const technologies = [
    {
        name: 'HTML 5',
        icon: html
    },
    {
        name: 'CSS 3',
        icon: css
    },
    {
        name: 'Javascript',
        icon: javascript
    },
    {
        name: 'React JS',
        icon: reactjs
    },
    {
        name: 'git',
        icon: git
    },
    {
        name: 'Node',
        icon: node
    },
    {
        name: 'MongoDB',
        icon: mongo
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind
    },
]

const Tech = () => {
    return(
        <div className='ballContainer'>
            {technologies.map((tech) => (
                <div className='ball'>
                    <img id='techImg' src={tech.icon} alt={tech.name} />
                </div>
            ))}
        </div>
    )
}

export default Tech;