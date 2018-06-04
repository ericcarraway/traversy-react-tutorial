import React, { Component } from 'react';
import AddProject from './Components/AddProject';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
 
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'E-Commerce Shopping Cart',
          category: 'Web Development'
        } 
      ]
    });
  }

  handleAddProject(project) {
    console.log(project);
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
