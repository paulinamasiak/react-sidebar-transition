import React, { Component } from 'react';
import Backdrop from './components/Backdrop';
import Sidebar from './components/Sidebar';
import BtnIcon from './components/BtnIcon';
import Button from './components/Button';

import './App.css';

const SIDEBAR_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: false,
      sidebarPosition: SIDEBAR_POSITIONS.LEFT,
    };

    this.toggleSidebarPosition = this.toggleSidebarPosition.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  toggleSidebarPosition() {
    this.setState((prevState) => {
      const nextPosition =
        prevState.sidebarPosition === SIDEBAR_POSITIONS.LEFT
          ? SIDEBAR_POSITIONS.RIGHT
          : SIDEBAR_POSITIONS.LEFT;

      return {
        sidebarPosition: nextPosition,
      };
    });
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
    const { isSidebarOpen, sidebarPosition } = this.state;

    return (
      <div className="App">
        <header className="App__header App__header--primary">
          <BtnIcon
            className={`App__burger-menu App__burger-menu--${sidebarPosition}`}
            icon="menu"
            onClick={this.openSidebar}
          />
          <h1 className="App__header-title">Sidebar transition</h1>
        </header>
        <main className="App__main">
          <Backdrop show={isSidebarOpen} onClick={this.closeSidebar}>
            <BtnIcon
              className={`App__backdrop-close App__backdrop-close--${sidebarPosition}`}
              icon="close"
              onClick={this.closeSidebar}
            />
          </Backdrop>
          <Sidebar show={isSidebarOpen} position={sidebarPosition} />
          <div className="App__buttons-container">
            <Button onClick={this.toggleSidebarPosition}>
              Toggle position
            </Button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
