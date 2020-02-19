import React from 'react'
import './App.css'
import LandingPage from './components/landingPage'
import { Route, withRouter } from 'react-router-dom'
import SelectACar from './components/routes/SelectACar'
import ResultsNav from './components/ResultsNav';
import ResultsPage from './components/ResultsPage'


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <ResultsNav/>
        <ResultsPage/>
        {/* <Route exact path="/" component={LandingPage} /> */}
        {/* <Route exact path="/carselect" component={SelectACar} /> */}
      </div>
    </React.Fragment>
  );
}


export default withRouter(App)

