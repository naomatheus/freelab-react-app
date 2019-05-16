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
      loggedIn: false,
      loginSuccess: false,
      username: "", 
      userId: ""
    }
  }

  login = (username, userId) => {
    
    console.log('login at App level hit');

    /*if (the username and userID were received. 

    the Login components lifted state has loginSuccess:true then set loggedIn), else (set loginSucces to false and do nothing)*/
    

    this.setState({
      loggedIn: true,
      username: username,
      userId: userId,
      niche: false,
      bizStructure: false,
      portfolio: false,
      jobsContainer: false,
      financials: false,
      motivation: false
    });    

  };

  moveToNiche = () => {
      this.setState({
        niche: true
      })
  };

  moveToBizStructure = () => {
      this.setState({
        bizStructure:true
      })
  }

  // should be 7 Booleans in state, that switch based on the page that the user wants to see.
  // It will prevent a lot of errors... I think


  render (){
    console.log(this.state);
    // console.log(process.env);
    const loggedIn = this.state.loggedIn;
    const niche = this.state.niche; 

    return (
      <div className="App">
        App container
        <br/>
        <MainContainer />
        <br/>
        { loggedIn ? 

          <div className='loggedInElements'>
            <Introduction moveToNiche={this.moveToNiche} />
            <br/>
            { niche ? 
               
              <Niche moveToBizStructure={this.moveToBizStructure}/>
              : 
              null }
            
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
          :
          <div className='loggedOutElements'>
            <Login login={this.login} loginSuccess={this.props.loginSuccess} handleSubmit={this.handleSubmit}/>
             <br/>

            <Register />
            <br/>
          </div>
        }
        
        


      </div>
    )
  }
}

export default App;
