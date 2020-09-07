import React from 'react';

import './MenuButton.css';

const menuButton = (props) => (
    <div className="MenuButton" onClick={props.clickEvent}>
      <div></div>
      <div></div>
      <div></div>
    </div>
);

export default menuButton;
