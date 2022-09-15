import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const NavBar = () => {
  const navigate=useNavigate()
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
    navigate("/login")
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={'/home'} className="text-xl">Cloth House</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'/additem'}>Add New Item</Link></li>
            <li><Link to={'/updateuser'}>Update User Profile</Link></li>
            <li>
            {
                user ?
                  <button onClick={handleSignout} type="button" class="btn btn-link text-decoration-none">Sign Out</button> :
                  <Link to={'/login'}>Login</Link>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;