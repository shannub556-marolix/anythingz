import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { faAlignJustify, faBars, faBoxes, faGear, faHouse, faMoneyBill, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../css/Sidebar.css';

export default function Sidebar() {
  const navigate = useNavigate();
  const [smallMenu, setSmallMenu] = useState(true)

  const handleOnClickProducts = () => {
    navigate('./products');
  };
  const handleOnClickProductRates = () => {
    navigate('./productrates');
  };
  const handleOnClickCategories = () => {
    navigate('./category');
  };
  return (
    <div className={smallMenu ? 'sidebar small' : 'sidebar'} onMouseEnter={() => setSmallMenu(!smallMenu)} onMouseLeave={() => setSmallMenu(!smallMenu)} >
      <div className="top">
        <h2>Sidebar</h2>
        <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars" />
        {/* <FontAwesomeIcon icon=""/> */}
      </div>
      <div className="menus">
        <div className="item active">
          <FontAwesomeIcon icon={faHouse} className="fa-solid fa-house" />
          {/* <i className="fa-solid fa-house"></i> */}
          <span>Dashboard</span>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faBoxes} onClick={handleOnClickCategories} className="fa-solid fa-users" />
          <span>Categories</span>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faAlignJustify} onClick={handleOnClickProducts} className="fa-solid fa-users" />
          <span>Products</span>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faMoneyBill} onClick={handleOnClickProductRates} className="fa-solid fa-users" />
          <span>Product Rates.</span>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faUsers} className="fa-solid fa-users" />
          {/* <i className="fa-solid fa-users"></i> */}
          <span>Organization</span>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faGear} className="fa-solid fa-gear" />
          {/* <i className="fa-solid fa-gear"></i> */}
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
