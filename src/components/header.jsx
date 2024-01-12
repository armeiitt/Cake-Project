import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className='w-100 bg-zinc-900 text-white'>
      <nav className='flex flex-row justify-between p-5'>
        <div>LOGO NAME</div>
          <ul className='w-100 flex flex-row gap-3'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/information">Information</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;