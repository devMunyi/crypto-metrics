import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { FaChevronLeft, FaMicrophone } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';

const NavBar = () => {
  const location = useLocation()?.pathname;

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location);
  }, [location]);

  return (
    <nav className="mb-2 d-flex justify-content-between align-items-center container-fluid headline">
      <div>
        {currentPath === '/' ? (
          '2022'
        ) : (
          <NavLink style={{ color: '#fff' }} to="/">
            <FaChevronLeft title="Click to go back" />
          </NavLink>
        )}
      </div>
      <div>{currentPath === '/' ? 'Home' : 'Details'}</div>
      <div
        style={{ width: '60px' }}
        className="d-flex justify-content-between align-items-center"
      >
        <div className="mic">
          <FaMicrophone />
        </div>
        <div className="settings">
          <BsFillGearFill />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
