import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
  <Link to={'/'} className="text-xl">Cloth House</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to={'/additem'}>Add New Item</Link></li>
      <li><a>Update Password</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default NavBar;