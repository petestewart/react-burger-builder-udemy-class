import React from 'react';
import Aux from '../../hoc/Aux';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import './Layout.css';

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    return (
      <Aux>
        <Toolbar toggleSideDrawerHandler={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closedHandler={this.sideDrawerClosedHandler} />
        <main className={'Content'}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
