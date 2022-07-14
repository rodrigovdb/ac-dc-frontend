import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.component.css';

const Header: React.FC = () => {
   return(
    <header>
        <div>
            <ul>
                <li>
                    <NavLink to="/ac-dc-frontend/albums">Albums</NavLink>
                </li>
            </ul>
        </div>

        <div>
            <h1>AC/DC Studio Albums</h1>
        </div>
    </header>
   );
}

export default Header;