import React, {Component} from 'react';
import './App.css';
import MainContainer from './MainContainer';
import Login from './Login';
import Register from './Register';
import Introduction from './Introduction';
import Niche from './Niche';
import Portfolio from './Portfolio';
import Motivation from './Motivation';
import BizStructure from './BizStructure';
import Financials from './Financials';
import JobsContainer from './JobsContainer';


class App extends Component {
  constructor(){
    super();
    this.state = {

    };
  }

/// 


  render (){
    console.log(process.env);
    return (
      <div className="App">
        App container
        <br/>
        <MainContainer />
        <br/>
        <Login />
        <br/>
        <Register />
        <br/>
        <Introduction />
        <br/>
        <Niche />
        <br/>
        <BizStructure />
        <br/>
        <Portfolio />
        <br/>
        <JobsContainer />
        <br/>
        <Financials />
        <br/>
        <Motivation />


      </div>
    )
  }
}

export default App;
