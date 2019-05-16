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
      intro: true,
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
        niche: true,
        intro: false,
        bizStructure: false
      })
  };

  moveToIntro = () => {
    this.setState({
      niche: false,
      intro: true,
      bizStructure: false,
      // portfolio: false,
      // jobsContainer: false,
      // financials: false,
      // motivation: false
    })
  };

  moveToBizStructure = () => {
      this.setState({
        bizStructure:true,
        niche: false,
        portfolio: false,
        jobsContainer: false
        // financials: false,
        // motivation: false

      })
  };

  moveToPortfolio = () => {
    this.setState({
      portfolio: true,
      bizStructure: false,
      jobsContainer: false
    })
  };

  moveToJobsContainer = () => {
    this.setState({
      jobsContainer: true,
      portfolio: false,
      financials: false
    })
  }

  moveToFinancials = () => {
    this.setState({
      jobsContainer: false,
      financials: true,
      motivation: false
    })
  }

  moveToMotivation = () => {
    this.setState({
      financials: false,
      motivation: true,
    })
  }

  // should be 7 Booleans in state, that switch based on the page that the user wants to see.
  // It will prevent a lot of errors... I think

  render (){
    console.log(this.state);
    // console.log(process.env);
    const loggedIn = this.state.loggedIn;
    const intro = this.state.intro;
    const niche = this.state.niche; 
    const bizStructure = this.state.bizStructure;
    const portfolio = this.state.portfolio;
    const jobsContainer = this.state.jobsContainer;
    const financials = this.state.financials;
    const motivation = this.state.motivation;

    return (
      <div className="App">
        App container
        <br/>
        <MainContainer />
        <br/>
        { loggedIn ? 

          <div className='loggedInElements'>
            
            {intro ? 
              <Introduction moveToNiche={this.moveToNiche} /> 
              : 
              null }
            
            <br/>

            { niche ? 
               
              <Niche moveToBizStructure={this.moveToBizStructure} moveToIntro={this.moveToIntro}/>
              : 
              null }
            
            <br/>

            {bizStructure ? 

              <BizStructure moveToNiche={this.moveToNiche} moveToPortfolio={this.moveToPortfolio} /> 
              : 
              null }
            
            <br/>

            {portfolio ? 

              <Portfolio moveToBizStructure={this.moveToBizStructure} moveToJobsContainer={this.moveToJobsContainer}/> 
              : 
              null }
            
            <br/>

            {jobsContainer ? 

              <JobsContainer moveToPortfolio={this.moveToPortfolio} moveToFinancials={this.moveToFinancials}/>
            :
            null}
            
            <br/>

            {financials ? 

              <Financials moveToJobsContainer={this.moveToJobsContainer }moveToMotivation={this.moveToMotivation}/> 
              : 
              null }
            
            <br/>
            
            {motivation ? <Motivation moveToFinancials={this.moveToFinancials} /> 
            : 
            false }
            
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
