import Tech from './Tech';
import '../components/stylesheets/about.css';


const About = () => {
    return(
        <div className='infoContainer'>
            <div className='intro'>
                <h1>Overview</h1>
                <p>I am a self taught full stack developer with skills and experience derived from project based learning. I started my coding journey at Harvard CS50 Introduction to computer science online course. In this course I got an excellent foundation in computer science understanding how computers work to learning some C as well as practicing with C and SQL. I also got an in depth learning experience in data structures and algorithms. Next, I continued my journey with The Odin Project Full Stack Developer Coding Bootcamp. Here I learned all about HTML, CSS, JavaScript, React, Node, ExpressJs, MongoDB and Firebase. I have a desire to excel in anything that I do and am always eager to continue learning new technologies and growing as a person and as a developer.</p>
            </div>
            <div className='techContainer'>
                <h1 className='techTitle'>Technologies:</h1>
                <Tech />
            </div>
        </div>
    )
}

export default About;