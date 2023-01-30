import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({route}) => {
    return (
        <div>
             <li className='mr-12'>
                <Link to={route.path}>{route.name}</Link>
            </li>
        </div>
    );
};

export default NavLink;