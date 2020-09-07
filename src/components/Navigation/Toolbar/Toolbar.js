import React from 'react';

import NavigationItems from '../NavagationItems/NavagationItems';
import Logo from '../../Logo/Logo';
import MenuButton from '../../UI/MenuButton/MenuButton';

import './Toolbar.css';

const toolbar = (props) => (
    <header className="Toolbar">
      <div>
        <MenuButton clickEvent={props.toggleSideDrawerHandler}/>
      </div>
      <div className="ToolbarLogo DesktopOnly">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
);

export default toolbar;
