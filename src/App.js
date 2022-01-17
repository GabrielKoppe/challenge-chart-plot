import './App.scss';
import Input from './Components/Input/Input.jsx'
import PlotGraph from './Components/PlotGraph/PlotGraph.jsx'
import Button from './Components/Button/Button'

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>Gabriel's Challenge</h1>
      </div>
        <Input />
        <PlotGraph />
      <div>
        <Button />
      </div>
    </div>
  );
}

export default App;
