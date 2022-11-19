import goat from "./image/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="qr">
          <img src= {goat} alt="" className="picture" />
        </div>
        <div className="heading">
          <h1 className="title">Improve your front-end skills by building projects</h1>
        </div>
        <div className="text">
          <p className="description">
Scan the QR code to visit front-end mentor and taking your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
