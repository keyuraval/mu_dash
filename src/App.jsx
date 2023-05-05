import { useState } from "react";


import data from './assets/data/data.json'
import "./assets/css/app.css";
import Card from "./components/Card";


function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [currentSong, setcurrentSong] = useState(0);

  return (
    <>
      <nav className="navbar">
        <div className="logo">MUSIK</div>
      </nav>
      <div className="container" style={showDialog ? { "height": "100vh", "overflow-y": "hidden" } : {}}>
        {data.map((song, index) => {
          return <Card song={song} index={index} key={index} />;
        })}
      </div>
      {/* <div className="modal" style={showDialog ? {'z-index':"1"} : {'z-index':"-1"}}>
        <div className="title"><h1>{data[currentSong].title}</h1></div>
        <div className="chart-container"><label>Stats for {data[currentSong].title} </label><Bar className="chart" data={song} options={options}/></div>
        <div className="progress-container"><label>Completion Rate</label><progress max="100" value={data[currentSong].completion_rate} data-label={`${data[currentSong].completion_rate}` + '%'} className="progressbar"></progress></div>
        <div className="btn-container"><button className="btn close-btn" onClick={()=>{setShowDialog(!showDialog)}}>Close</button></div>
      </div> */}
    </>
  );
}

export default App;