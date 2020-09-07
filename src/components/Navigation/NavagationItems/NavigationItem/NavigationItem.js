import React from 'react';

import './NavigationItem.scss';

const navigationItem = (props) => (
    <div>
      <li className="NavigationItem">
        <a href={props.link} className={props.active ? 'active' : null}>{props.children}</a>
      </li>
    </div>
);

export default navigationItem;
