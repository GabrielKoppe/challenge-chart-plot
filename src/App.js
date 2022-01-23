import React, { useState } from 'react';
import Input from './Components/Input/Input.jsx'
import PlotGraph from './Components/PlotGraph/PlotGraph.jsx'
import Button from './Components/Button/Button'
import { useData } from './Context/DataContext.jsx';
import './App.scss';


function App() {
  const { data } = useData()
  const [renderData, setRenderData] = useState(data)
  function onClick(ev) {
    setRenderData(data)
  }

  return (
    <div className="app__container">
      <div className="header">
        <h1>Gabriel's Challenge</h1>
      </div>
        <Input />
        <PlotGraph data={renderData}/>
      <div className= "btn__container">
        <Button onClick={onClick}>
            GENERATE CHART          
        </Button>
      </div>
    </div>
  );
}

export default App;
