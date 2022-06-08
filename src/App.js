import logo from './logo.svg';
import React, {useState,useContext, useEffect} from 'react';
import './App.css';
import ButtonAppBar from './components/Appbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Source1Context } from './contexts/Source1Context';
import { Source3Context } from './contexts/Source3Context';
import { Source2Context } from './contexts/Source2Context';
import { useTickerContext } from './contexts/useTickerContext';
import { useSourcesContext } from './contexts/useSourcesContext';
import Table from './components/Table';

function App(props) {
  const [list, setList] = React.useState([]); //list points to table data
  const [source1, setSource1] = useContext(Source1Context);
  const [source2, setSource2] = useContext(Source2Context);
  const [source3, setSource3] = useContext(Source3Context);
  const [getTickers] = useContext(useTickerContext);
  const [getSources] = useContext(useSourcesContext);
  const [currentSource, setCurrentSource] = React.useState("SRC1");
  const [currentTicker, setCurrentTicker] = React.useState(["goog"]);

  useEffect(()=>{
    if (currentSource == "SRC1"){
      console.log(source1);
    setList(source1);
    }
    else if (currentSource == "SRC2"){
      setList(source2);
    }
    else{
      setList(source3);
    }
  },[source1, source2, source3, currentSource, currentTicker])

  const changeSource = (e) => {
    setCurrentSource(e.target.value)
  }

  const changeTicker = (e) =>{
    setCurrentTicker(e.target.value)
  }

  return (
    <div>
      <ButtonAppBar/>
      <br/>
      <div className="container">
        <h2>Ticker</h2>
        <div className="col text-center">
            <div className="dropdown">
            <label for="cars">Price Source:&nbsp;</label>
            <select name="sources" id="sources" onChange={changeSource}>
              {
                getSources.map((source) => <option value={source}>{source}</option>)
              }
            </select>
            </div>
      <br/>
        </div>
            <div className="col text-center">
            <div className="dropdown">
            <label for="cars">Current Ticker:&nbsp;</label>
            <select name="sources" id="sources" onChange={changeTicker}>
              {
                getTickers.map((ticker) => <option value={ticker}>{ticker}</option>)
              }
            </select>
            </div>
        </div>
        <br/>
        <br/>
        <div className='row'>
          <Table data={list} sourceName={currentSource} tickerName={currentTicker}></Table>
        </div>
      </div>
    </div>
  );
}

export default App;
