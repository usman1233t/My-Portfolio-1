import './About.scss'
import InfoCard from '../../components/InfoCard/InfoCard'


const About = () => {
  return <div className='about'>
    <div className="name">
        <div>
        <h1 className="txt">AB</h1>
          <h1 className="txt">OU</h1>
        </div>

        <h1 className="txt lg">T</h1>

        <div className="me">ME</div>
    </div>

    <div className="info">
      <InfoCard
       title="About Me"
       details="I'm Muhammad Usman Baig, a 17-year-old student with a passion for learning, cricket, and reading. Embracing diversity, I aspire to make a positive impact in the world through education and understanding."
      />

      <InfoCard 
      title ="Education" 
      details ="MATRIC from : Metropolitan Foundation School, passed with A Grade [2022].
    INTERMEDIATE from : Government Comprehensive College (In progress) [2023-2024]. "
    />

      <InfoCard 
      title="Skills"
      details="I possess a wide range of frontend skills, including HTML, CSS, JavaScript, Bootstrap, and React, enabling me to craft engaging user interfaces. On the backend, I excel in Node.
      js for server-side development and MongoDB for database management. Additionally, I have experience working with Django for web application development."

      />
      <InfoCard 
      title="Social Life"
      details="Beyond my passion for coding, I lead an active social life that keeps me balanced and energized. On weekends, you'll find me on the cricket pitch or football field, indulging in friendly matches with friends.
       Gaming is another avid interest of mine, exploring virtual worlds and connecting with fellow enthusiasts online. Embracing these activities nurtures my teamwork, sportsmanship, and camaraderie."
      />
    
    </div>
  </div>
  
}

export default About