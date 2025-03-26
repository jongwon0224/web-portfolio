import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>황종원 Portfolio</h1>

      <div className="pf-container">
  
        <div className="pf-video">
          <video src={"https://jongwon0224.github.io/web-portfolio/videos/pf1.mp4"} autoPlay muted loop></video>
        </div>
        
        <div className="pf-video">
          <video src={"https://jongwon0224.github.io/web-portfolio/videos/pf2.mp4"} autoPlay muted loop></video>
        </div>

        <div className="pf-video">
          <h3>주제 : ~ </h3>
          <p>일정 : ~ </p>
          <video src={"https://jongwon0224.github.io/web-portfolio/videos/pf3.mp4"} autoPlay muted loop></video>
        </div>
      </div>
    </div>
  );
}

export default App;
