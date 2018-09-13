import React, { Component } from 'react';
import Backdrop from './components/Backdrop';
import Sidebar from './components/Sidebar';
import BtnIcon from './components/BtnIcon';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: false,
    };

    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  openSidebar() {
    this.setState({
      isSidebarOpen: true,
    });
  }

  closeSidebar() {
    this.setState({
      isSidebarOpen: false,
    });
  }

  render() {
    const { isSidebarOpen } = this.state;

    return (
      <div className="App">
        <header className="App__header App__header--primary">
          <BtnIcon icon="menu" onClick={this.openSidebar} />
        </header>
        <main className="App__main">
          <Backdrop show={isSidebarOpen} onClick={this.closeSidebar}>
            <BtnIcon
              className="App__backdrop-close"
              icon="close"
              onClick={this.closeSidebar}
            />
          </Backdrop>
          <Sidebar show={isSidebarOpen} />
        </main>
      </div>
    );
  }
}

export default App;
