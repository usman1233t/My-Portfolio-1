import "./Home.scss";
import profile from "../../assets/my-pic.jpg"

 const Home = () => {
  return (
    <div className="home">
      <div className="details">
        <span className="intro">Hello, I'm</span>

        <div className="name">
          <div>
            <h1 className="txt">US</h1>
            <h1 className="txt">MA</h1>
          </div>

          <h1 className="txt lg">N</h1>

          <div className="stack">
            FULL-STACK <b>DEVELOPER</b>
          </div>
        </div>
      </div>

    <div className="profile-img">
     <img src={profile} alt="" />

    </div>
  </div>
  );
};

export default Home;