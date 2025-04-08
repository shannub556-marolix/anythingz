import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear, faHouse, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../css/Sidebar.css';

export default function Products_Sidebar  () {
  const [smallMenu,setSmallMenu] = useState(true)
  return (
    <div className={smallMenu ? 'sidebar small':'sidebar'}  >
        <div className="top">
            <h2>Sidebar</h2>
            <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars" />
        </div>
        <div className="menus">
          <div className="item active">
          <FontAwesomeIcon icon={faHouse} className="fa-solid fa-house" />
          <span>Dashboard</span>
          </div>
          <div className="item">
          <FontAwesomeIcon icon={faUsers} className="fa-solid fa-users" />
          <span>Organization</span>
          </div>
          <div className="item">
          <FontAwesomeIcon icon={faGear} className="fa-solid fa-gear" />
          <span>Settings</span>
          </div>
          <div className="item">
          <FontAwesomeIcon icon={faRightFromBracket} className="fa-solid fa-right-from-bracket" />
          {/* <i className="fa-solid fa-right-from-bracket"></i> */}
          <span>Logout</span>
          </div>
        </div>
    </div>
  )
}
