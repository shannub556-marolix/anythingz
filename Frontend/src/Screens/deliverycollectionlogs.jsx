import React, { useEffect, useState } from "react";

import Spinner from '../Components/Spinner';

const Deliverycollectionlogs = () => {
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
                                <label htmlFor="" className="cls_store_label">Delivery Collection Logs</label>

                            </div>

                            <div className="cls_store_right">
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
                                        <th style={{color:"rgb(255, 255, 255)"}}>Delivery Guy Name </th>
                                            <th style={{color:"rgb(255, 255, 255)"}}>Phone</th>

                                            <th style={{color:"rgb(255, 255, 255)"}}>Amount</th>
                               
                                            <th>Message</th>
                                            <th>Date</th>
                                            <th>Collected By</th>
                                            <th></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>SUNKE VAMSHI KUMAR</td>
                                            <td className='cls_flex cls_flex_column '>
                                            +919346184840
                                            </td>
                                            <td>
                                            ₹895.00
                                            </td>
                                            <td>
                                            Recived cod amount
                                            </td>
                                            <td>
                                            Apr 03, 2025 - 09:50pm
                                            </td>
                                            <td>Admin</td>
                                            
                                            <td style={{display: "flex",columnGap:"2%"}}>
                                                <button className='cls_btn_blue'>View Details</button>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>SUNKE VAMSHI KUMAR</td>
                                            <td className='cls_flex cls_flex_column '>
                                            +919346184840
                                            </td>
                                            <td>
                                            ₹895.00
                                            </td>
                                            <td>
                                            Recived cod amount
                                            </td>
                                            <td>
                                            Apr 03, 2025 - 09:50pm
                                            </td>
                                            <td>Admin</td>
                                            
                                            <td style={{display: "flex",columnGap:"2%"}}>
                                                <button className='cls_btn_blue'>View Details</button>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>SUNKE VAMSHI KUMAR</td>
                                            <td className='cls_flex cls_flex_column '>
                                            +919346184840
                                            </td>
                                            <td>
                                            ₹895.00
                                            </td>
                                            <td>
                                            Recived cod amount
                                            </td>
                                            <td>
                                            Apr 03, 2025 - 09:50pm
                                            </td>
                                            <td>Admin</td>
                                            
                                            <td style={{display: "flex",columnGap:"2%"}}>
                                                <button className='cls_btn_blue'>View Details</button>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>SUNKE VAMSHI KUMAR</td>
                                            <td className='cls_flex cls_flex_column '>
                                            +919346184840
                                            </td>
                                            <td>
                                            ₹895.00
                                            </td>
                                            <td>
                                            Recived cod amount
                                            </td>
                                            <td>
                                            Apr 03, 2025 - 09:50pm
                                            </td>
                                            <td>Admin</td>
                                            
                                            <td style={{display: "flex",columnGap:"2%"}}>
                                                <button className='cls_btn_blue'>View Details</button>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td style={{ fontSize: "14px", fontWeight: "650" }}>SUNKE VAMSHI KUMAR</td>
                                            <td className='cls_flex cls_flex_column '>
                                            +919346184840
                                            </td>
                                            <td>
                                            ₹895.00
                                            </td>
                                            <td>
                                            Recived cod amount
                                            </td>
                                            <td>
                                            Apr 03, 2025 - 09:50pm
                                            </td>
                                            <td>Admin</td>
                                            
                                            <td style={{display: "flex",columnGap:"2%"}}>
                                                <button className='cls_btn_blue'>View Details</button>
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
export default Deliverycollectionlogs