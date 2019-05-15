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
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }

/// 
  login = () => {
    
    /*if (the Login components lifted state has loginSuccess:true then set loggedIn), else (set loginSucces to false and do nothing)*/

    console.log(this.props.loginSuccess, '<-- login success prop from child ');

    this.setState({
      loggedIn: true
    });

  }


  render (){
    console.log(this.state);
    // console.log(process.env);
    return (
      <div className="App">
        App container
        <br/>
        <MainContainer />
        <br/>
        <Login login={this.login} loginSuccess={this.state.loginSuccess}/>
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
