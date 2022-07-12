import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.component.css';

const Header: React.FC = () => {
   return(
    <header>
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">Other Link</NavLink>
                </li>
            </ul>
        </div>
    </header>
   );
}

export default Header;