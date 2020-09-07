import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavagationItems/NavagationItems';

import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.scss';

const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closedHandler} />
      <div className={attachedClasses.join(' ')}>
        <div className="SidedrawerLogo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
