import Tech from './Tech';
import '../components/stylesheets/about.css';


const About = () => {
    return(
        <div className='infoContainer'>
            <div className='intro'>
                <h1>Overview</h1>
                <p>im a skilled self-taught developer with experience in HTML, CSS, JavaScipt, C, Python and expertise in frameworks like React, bootstrap and Three.js. Im a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Lets work together to bring your ideas to life!</p>
            </div>
            <div className='techContainer'>
                <h1 className='techTitle'>Technologies:</h1>
                <Tech />
            </div>
        </div>
    )
}

export default About;