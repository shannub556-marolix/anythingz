import '../css/Stores.css';
import '../css/Home.css';

import React, { useEffect, useState } from "react";

import Spinner from '../Components/Spinner';

const OrdersList = () => {
    const [loading, setLoading] = useState(false);


    return (
        <div>
            {loading ? (
                <Spinner title="Loading..," />
            ) : (
                <div className="cls_store_management_outline">
                    {/* <Navbar2 title="VST TECHONOLOGIES" /> */}
                    <div className="cls_dash_main">
                        <div className="cls_store_container">
                            <div className="cls_store_left">
                                <label htmlFor="" className="cls_store_label">Order Management</label>

                            </div>

                            <div className="cls_store_right">
                                <button className="cls_store_btn" >Eagle View</button>

                                <button className="cls_store_btn" >Reset All Filters</button>

                            </div>

                        </div>

                        <div className="cls_store_container1">
                            <div className="cls_store_cont">
                                <div className="cls_store_left">
                                    <input type="text" id="search_input" className="cls_store_input" placeholder="Search Here " />
                                </div>
                                <div className="cls_store_right">
                                    <button className="cls_store_btn1">Export as CSV</button>
                                    <select name="pages" id="" className="cls_store_select" >
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>

                                </div>

                            </div>

                            <div className="cls_store_table">
                                <table>
                                    <thead className='thead'>
                                        <tr>
                                            <th style={{color:"rgb(255, 255, 255)"}}>Order ID</th>
                                            <th style={{color:"rgb(255, 255, 255)",width:"20%",textAlign:"center"}}>Status</th>

                                            <th style={{color:"rgb(255, 255, 255)",width:"16%"}}>Store Name</th>
                                            <th style={{color:"rgb(255, 255, 255)"}}>Mode</th>
                                            <th style={{color:"rgb(255, 255, 255)"}}>Total</th>

                                            <th style={{color:"rgb(255, 255, 255)",width:"14%"}}>Order Placed At</th>
                                            <th style={{color:"rgb(255, 255, 255)",width:"13%",textAlign:"center"}}>Live Timer</th>
                                            <th style={{color:"rgb(255, 255, 255)"}}></th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>#OD-6520</td>
                                            <td className='cls_flex cls_flex_column cls_flex_align_center'>
                                                <button className='cls_btn_green'>Delivered</button>
                                                <label htmlFor="" >Order By: venu chanda</label>
                                                <label htmlFor="">Delivery By: SUNKE VAMSHI KUMAR</label>
                                            </td>
                                            <td >MADHURAM CHICKEN CENTRE	</td>
                                            <td>COD</td>
                                            <td>₹300</td>
                                            <td>
                                            Apr 05, 2025 - 08:21pm
                                            </td>
                                            <td className='cls_flex cls_flex_column cls_flex_justify_center' style={{textAlign:"center"}}>
                                                <label htmlFor="">Completed in:</label>
                                                <label htmlFor="">39 minutes 58 seconds</label>
                                            </td>
                                            <td >
                                                <button className='cls_btn_blue'>View</button>

                                            </td>

                                        </tr>

                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>#OD-6520</td>
                                            <td className='cls_flex cls_flex_column cls_flex_align_center'>
                                                <button className='cls_btn_green'>Delivered</button>
                                                <label htmlFor="" >Order By: venu chanda</label>
                                                <label htmlFor="">Delivery By: SUNKE VAMSHI KUMAR</label>
                                            </td>
                                            <td >MADHURAM CHICKEN CENTRE	</td>
                                            <td>COD</td>
                                            <td>₹300</td>
                                            <td>
                                            Apr 05, 2025 - 08:21pm
                                            </td>
                                            <td className='cls_flex cls_flex_column cls_flex_justify_center' style={{textAlign:"center"}}>
                                                <label htmlFor="">Completed in:</label>
                                                <label htmlFor="">39 minutes 58 seconds</label>
                                            </td>
                                            <td >
                                                <button className='cls_btn_blue'>View</button>

                                            </td>

                                        </tr>

                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>#OD-6520</td>
                                            <td className='cls_flex cls_flex_column cls_flex_align_center'>
                                                <button className='cls_btn_green'>Delivered</button>
                                                <label htmlFor="" >Order By: venu chanda</label>
                                                <button className='cls_btn_red'>First Order</button>

                                                <label htmlFor="">Delivery By: SUNKE VAMSHI KUMAR</label>
                                            </td>
                                            <td >MADHURAM CHICKEN CENTRE	</td>
                                            <td>COD</td>
                                            <td>₹300</td>
                                            <td>
                                            Apr 05, 2025 - 08:21pm
                                            </td>
                                            <td className='cls_flex cls_flex_column cls_flex_justify_center' style={{textAlign:"center"}}>
                                                <label htmlFor="">Completed in:</label>
                                                <label htmlFor="">39 minutes 58 seconds</label>
                                            </td>
                                            <td >
                                                <button className='cls_btn_blue'>View</button>

                                            </td>

                                        </tr>

                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>#OD-6520</td>
                                            <td className='cls_flex cls_flex_column cls_flex_align_center'>
                                                <button className='cls_btn_green'>Delivered</button>
                                                <label htmlFor="" >Order By: venu chanda</label>
                                                <label htmlFor="">Delivery By: SUNKE VAMSHI KUMAR</label>
                                            </td>
                                            <td >MADHURAM CHICKEN CENTRE	</td>
                                            <td>COD</td>
                                            <td>₹300</td>
                                            <td>
                                            Apr 05, 2025 - 08:21pm
                                            </td>
                                            <td className='cls_flex cls_flex_column cls_flex_justify_center' style={{textAlign:"center"}}>
                                                <label htmlFor="">Completed in:</label>
                                                <label htmlFor="">39 minutes 58 seconds</label>
                                            </td>
                                            <td >
                                                <button className='cls_btn_blue'>View</button>

                                            </td>

                                        </tr>

                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>#OD-6520</td>
                                            <td className='cls_flex cls_flex_column cls_flex_align_center'>
                                                <button className='cls_btn_green'>Delivered</button>
                                                <label htmlFor="" >Order By: venu chanda</label>
                                                <label htmlFor="">Delivery By: SUNKE VAMSHI KUMAR</label>
                                            </td>
                                            <td >MADHURAM CHICKEN CENTRE	</td>
                                            <td>COD</td>
                                            <td>₹300</td>
                                            <td>
                                            Apr 05, 2025 - 08:21pm
                                            </td>
                                            <td className='cls_flex cls_flex_column cls_flex_justify_center' style={{textAlign:"center"}}>
                                                <label htmlFor="">Completed in:</label>
                                                <label htmlFor="">39 minutes 58 seconds</label>
                                            </td>
                                            <td >
                                                <button className='cls_btn_blue'>View</button>

                                            </td>

                                        </tr>

                                    </tbody>
                                </table>

                            </div>



                        </div>

                    </div>

                </div>
            )}
        </div>

    )
}
export default OrdersList