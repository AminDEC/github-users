import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <img src="/159.jpg" alt="" className="img__back" />
      <div className="card">
        <ul className="list">
          <li className="list__item">
            <Card />
          </li>
          <li className="list__item">
            <Card />
          </li>
          <li className="list__item">
            <Card />
          </li>
          <li className="list__item">
            <Card />
          </li>
          <li className="list__item">
            <Card />
          </li>
          <li className="list__item">
            <Card />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
