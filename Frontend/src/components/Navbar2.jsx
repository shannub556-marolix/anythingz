import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { get, post } from '../Components/api';
import '../css/Navbar2.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../Actions/userAction';

const Navbar2 = (props) => {
    const login = useSelector(state => state.userLogin)
    const { accessToken } = login;
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleClick = () => {
        navigate('/');
    };
    const logout = () => {
        dispatch(LOGOUT())
    };
    const [menuData, setMenuData] = useState([]);
    /*const generateDynamicStyles = () => {
        const levels = [1, 2, 3, 4, 5];

        const dynamicStyles = levels.map(level => `
        .sub-menu-${level}{
            display: none;
            background: rgb(30, 30, 150);
          }
          .hover-me-${level}:hover .sub-menu-${level} {
            display: block;
            position: absolute;
            top: 0;
            left:100%;
            background: rgb(30, 30, 150);
          }
          
        `).join('');
        return `${dynamicStyles}`;
    };*/
    const generateDynamicStyles = () => {
        const levels = [1, 2, 3, 4, 5];
        // background: rgb(242, 242, 242);
        //  background: rgb(242, 242, 242);
        // border-bottom: 3px solid #F2F2F2;
        const dynamicStyles = levels.map(level => `
        .sub-menu-${level}{
            display: none;
          }
          .hover-me-${level}:hover .sub-menu-${level} {
            display: block;
            position: absolute;
            background-color: #fff;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
          }
          
        `).join('');
        return `${dynamicStyles}`;
    };

    useEffect(() => {
        if (accessToken !== null && accessToken !== "") {
            async function fetchDataFromAPI() {
                try {
                    const response = await get('/getmodules');
                    setMenuData(response.data.Data);
                } catch (error) {
                    alert('Error fetching Modules:', error);
                }
            }
            fetchDataFromAPI();
        }
    }, []);

    const renderMenuItem = (menuItem, level = 1) => {
        const hasChildren = menuItem.children && menuItem.children.length > 0;

        return (
            <li key={menuItem.moduleid} className={`hover-me-${level}`}>
                {!menuItem.navigateto ? (
                    <a href="#">{menuItem.modulename}
                        <span className='arrowdown'>{hasChildren && level === 1 ? (<IoIosArrowDown />) : ('')}</span>
                        <span className='arrowforward'>{hasChildren && level > 1 ? (<IoIosArrowForward />) : ('')}</span></a>
                ) : (
                    // <a href={menuItem.navigateto}>{menuItem.modulename}</a>
                    <Link to={menuItem.navigateto}>{menuItem.modulename}</Link>
                )}
                {hasChildren && (
                    <div className={`sub-menu-${level}`}>
                        <ul>
                            {menuItem.children.map((child) => renderMenuItem(child, level + 1))}
                        </ul>
                    </div>
                )}
            </li>
        );
    };

    return (
        //     <nav className="navbar navbar-expand-lg navbar-dark" style={{  zIndex: 999, width: "100%" }}>
        //     <div className="container-fluid" style={{ background: 'white' }}>
        //       <img src={require('../images/icon.png')} width={40} alt="t" />
        //       <a className="navbar-brand" href="/" style={{ color: 'black' }}>{props.title}</a>
        //       {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //       </button> */}
        //       <style>{generateDynamicStyles()}</style>
        //         <div className='menu-bar'>
        //             <ul>
        //                 {menuData.map&&menuData.map((menuItem) => renderMenuItem(menuItem))}
        //             </ul>
        //         </div>
        //     </div>
        //   </nav>

        // <div className='header' style={{  zIndex: 999, width: "100%" }}>

        // <div className='home-r' onClick={handleClick} >
        // <img src={require('../images/icon.png')} width={30} height={30} alt="t" />
        // <span className='brand-title'>{props.title}</span>
        // </div>
        //     <style>{generateDynamicStyles()}</style>
        //     <div className='menu-bar'>
        //         <ul>
        //             {menuData.map&&menuData.map((menuItem) => renderMenuItem(menuItem))}
        //         </ul>
        //     </div>
        //     <div className='user-info'>
        //     <ul>
        //         <a onClick={logout}>
        //             admin   
        //         </a>
        //         </ul>
        //     </div>
        // </div>

        <div className="cls_nav" >
            <div className="cls_container">

                <div onClick={handleClick} className="cls_nav_left">
                    {/* <img src="https://anythingz.in/assets/backend/global_assets/images/dashboard-logo.png" alt="Dashboard"/> */}
                    <a>
                        Dashboard
                    </a>
                </div>
                <div className="cls_nav_right cls_mobile_dn">
                    <div className="cls_div">
                        <div className="navbar_new">
                            <div className="navbar">
                                {/* <div className="dropdown">
                                    <button className="dropbtn">
                                    Stores
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <a style={{padding:"0px"}} href="/">  Items & Menu</a>
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="dropbtn">
                                        Users
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                    <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>

                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="dropbtn">
                                        Orders
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                    <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="dropbtn">
                                    Promotions
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                    <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="dropbtn">
                                    Transactions
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                    <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                    </div>
                                </div> */}
                                <style>{generateDynamicStyles()}</style>
                                <div className='menu-bar'>
                                    <ul>
                                        {menuData.map && menuData.map((menuItem) => renderMenuItem(menuItem))}
                                        <li onClick={logout} className="cls_nav_btn">Log Out</li>
                                    </ul>

                                </div>


                            </div>
                        </div>



                    </div>

                </div>

            </div>

        </div>
    );
};

export default Navbar2;
