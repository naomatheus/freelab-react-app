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
import UserDetail from './UserDetail';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      loginSuccess: false,
      username: "", 
      userId: "",
      
      // form information for this user: 
      niche: {}
    }
  }

  getUserInfo = () => {
    
  };

  login = (username, userId) => {
        
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
      motivation: false,
      showDetails: false
    });    

  };

  logout = (userId) => {
    console.log('logout at App level hit');

    this.setState(prevState => ({
        loggedIn: false
    }))
  };

  showDetails = () => {

    if (!this.state.showDetails){
      this.setState(prevState => ({

          showDetails:true
        })
      )
    } else {
        this.setState(prevState => ({
            showDetails: false
        }))
    }
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
    })
  };

  moveToBizStructure = () => {
      this.setState({
        bizStructure:true,
        niche: false,
        portfolio: false,
        jobsContainer: false
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
  };

  moveToFinancials = () => {
    this.setState({
      jobsContainer: false,
      financials: true,
      motivation: false
    })
  };

  moveToMotivation = () => {
    this.setState({
      financials: false,
      motivation: true,
    })
  }

  logOut = () => {
    
  }

  render (){
    console.log(this.state);
    
    const loggedIn = this.state.loggedIn;
    const intro = this.state.intro;
    const niche = this.state.niche; 
    const bizStructure = this.state.bizStructure;
    const portfolio = this.state.portfolio;
    const jobsContainer = this.state.jobsContainer;
    const financials = this.state.financials;
    const motivation = this.state.motivation;
    const showDetails = this.state.showDetails;

    return (
      <div className="App">
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
               
              <Niche moveToBizStructure={this.moveToBizStructure} moveToIntro={this.moveToIntro} userId={this.state.userId}/>
              : 
              null }
            
            <br/>

            {bizStructure ? 

              <BizStructure moveToNiche={this.moveToNiche} moveToPortfolio={this.moveToPortfolio} /> 
              : 
              null }
            
            <br/>

            {portfolio ? 

              <Portfolio moveToBizStructure={this.moveToBizStructure} moveToJobsContainer={this.moveToJobsContainer} userId={this.state.userId}/> 
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
            null }

            <br/>
            { (!loggedIn) ? 

              <UserDetail showDetails={this.showDetails} logout={this.logout} userId={this.state.userId}/>
              : 
               <button onClick={this.showDetails}>Account Details</button>
            }
            
          </div>
          :
          <div>
            <Login className="login" login={this.login} loginSuccess={this.props.loginSuccess} handleSubmit={this.handleSubmit}/>
             <br/>

            <Register className='register'/>

            <br/>

          </div>
        }
        
        { (showDetails && loggedIn)  ? 

          
          <UserDetail showDetails={this.showDetails} logout={this.logout} userId={this.state.userId}/>

          : 

          null

        }

      </div>
    )
  }
}

export default App;
