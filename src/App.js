import React, { Component } from 'react';
import BtnIcon from './components/BtnIcon';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: false,
    };

    this.openSidebar = this.openSidebar.bind(this);
  }

  openSidebar() {
    this.setState({
      isSidebarOpen: true,
    });
  }

  render() {
    const { isSidebarOpen } = this.state;

    return (
      <div className="App">
        <header className="App__header App__header--primary">
          <BtnIcon icon="menu" onClick={this.openSidebar} />
        </header>
        <main className="App__main" />
      </div>
    );
  }
}

export default App;
