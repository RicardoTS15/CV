import React, { Component } from 'react';
import Navbar from './Navbar'
import PersonalInfo from './PersonalInfo'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfessionalSkills from './ProfessionalSkills';

class App extends Component {

  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <PersonalInfo/>
      <ProfessionalSkills/>
      </React.Fragment>
    );
  }
}

export default App;
