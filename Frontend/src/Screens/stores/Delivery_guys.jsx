import '../../css/Stores.css';
import React, { useEffect, useState } from "react";

import Spinner from '../../Components/Spinner';

const DeliveryGuys = () => {
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
                                <label htmlFor="" className="cls_store_label">Delivery Guys</label>

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
                                            <th style={{ width: "18%",color:"#FFF" }}>Name</th>
                                            <th style={{ width: "15%",color:"#FFF" }}>Email</th>
                                            <th style={{ width: "15%",color:"#FFF" }}>Phone</th>
                                            <th style={{ width: "15%",color:"#FFF" }}>Anythingz Wallet</th>

                                            <th style={{ width: "12%",color:"#FFF" }}>Joined Date</th>
                                            <th style={{ width: "12%",color:"#FFF" }}>Status</th>
                                            <th style={{ width: "25%",color:"#FFF" }}>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                                <tr>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>PRUDHVI RAJ</td>
                                                    <td>
                                                    BUYCONDOMS@GMAIL.COM
                                                    </td>
                                                    <td >+919133245603	</td>
                                                    <td>Mar 29, 2025 - 04:48pm</td>
                                                    <td>$1342</td>
                                                    <td>
                                                        <button className='cls_btn_green'>Online</button>
                                                    </td>
                                                    <td style={{display:"flex",columnGap:"2%"}}>
                                                        <button className='cls_btn_light'>Manage Owner's Store</button>
                                                        <button className='cls_btn_blue'>View</button>
                                                       
                                                    </td>
                                                  
                                                </tr>

                                                <tr>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>PRUDHVI RAJ</td>
                                                    <td>
                                                    BUYCONDOMS@GMAIL.COM
                                                    </td>
                                                    <td >+919133245603	</td>
                                                    <td>Mar 29, 2025 - 04:48pm</td>
                                                    <td>$1342</td>
                                                    <td>
                                                        <button className='cls_btn_green'>Online</button>
                                                    </td>
                                                    <td style={{display:"flex",columnGap:"2%"}}>
                                                        <button className='cls_btn_light'>Manage Owner's Store</button>
                                                        <button className='cls_btn_blue'>View</button>
                                                      
                                                    </td>
                                                  
                                                </tr>

                                                <tr>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>PRUDHVI RAJ</td>
                                                    <td>
                                                    BUYCONDOMS@GMAIL.COM
                                                    </td>
                                                    <td >+919133245603	</td>
                                                    <td>Mar 29, 2025 - 04:48pm</td>
                                                    <td>$1342</td>
                                                    <td>
                                                        <button className='cls_btn_red'>Offline</button>
                                                    </td>
                                                    <td style={{display:"flex",columnGap:"2%"}}>
                                                        <button className='cls_btn_light'>Manage Owner's Store</button>
                                                        <button className='cls_btn_blue'>View</button>
                                                     
                                                    </td>
                                                  
                                                </tr>

                                                <tr>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>PRUDHVI RAJ</td>
                                                    <td>
                                                    BUYCONDOMS@GMAIL.COM
                                                    </td>
                                                    <td >+919133245603	</td>
                                                    <td>Mar 29, 2025 - 04:48pm</td>
                                                    <td>$1342</td>
                                                    <td>
                                                        <button className='cls_btn_red'>Offline</button>
                                                    </td>
                                                    <td style={{display:"flex",columnGap:"2%"}}>
                                                        <button className='cls_btn_light'>Manage Owner's Store</button>
                                                        <button className='cls_btn_blue'>View</button>
                                                       
                                                    </td>
                                                  
                                                </tr>

                                                <tr>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>PRUDHVI RAJ</td>
                                                    <td>
                                                    BUYCONDOMS@GMAIL.COM
                                                    </td>
                                                    <td >+919133245603	</td>
                                                    <td>Mar 29, 2025 - 04:48pm</td>
                                                    <td>$1342</td>
                                                    <td>
                                                        <button className='cls_btn_red'>Online</button>
                                                    </td>
                                                    <td style={{display:"flex",columnGap:"2%"}}>
                                                        <button className='cls_btn_light'>Manage Owner's Store</button>
                                                        <button className='cls_btn_blue'>View</button>
                                                     
                                                    </td>
                                                  
                                                </tr>

                                                <tr>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>PRUDHVI RAJ</td>
                                                    <td>
                                                    BUYCONDOMS@GMAIL.COM
                                                    </td>
                                                    <td >+919133245603	</td>
                                                    <td>Mar 29, 2025 - 04:48pm</td>
                                                    <td>$1342</td>
                                                    <td>
                                                        <button className='cls_btn_red'>Online</button>
                                                    </td>
                                                    <td style={{display:"flex",columnGap:"2%"}}>
                                                        <button className='cls_btn_light'>Manage Owner's Store</button>
                                                        <button className='cls_btn_blue'>View</button>
                                                     
                                                    </td>
                                                  
                                                </tr>

                                                <tr>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>PRUDHVI RAJ</td>
                                                    <td>
                                                    BUYCONDOMS@GMAIL.COM
                                                    </td>
                                                    <td >+919133245603	</td>
                                                    <td>Mar 29, 2025 - 04:48pm</td>
                                                    <td>$1342</td>
                                                    <td>
                                                        <button className='cls_btn_red'>Online</button>
                                                    </td>
                                                    <td style={{display:"flex",columnGap:"2%"}}>
                                                        <button className='cls_btn_light'>Manage Owner's Store</button>
                                                        <button className='cls_btn_blue'>View</button>
                                                     
                                                    </td>
                                                  
                                                </tr>

                                                <tr>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>PRUDHVI RAJ</td>
                                                    <td>
                                                    BUYCONDOMS@GMAIL.COM
                                                    </td>
                                                    <td >+919133245603	</td>
                                                    <td>Mar 29, 2025 - 04:48pm</td>
                                                    <td>$1342</td>
                                                    <td>
                                                        <button className='cls_btn_red'>Online</button>
                                                    </td>
                                                    <td style={{display:"flex",columnGap:"2%"}}>
                                                        <button className='cls_btn_light'>Manage Owner's Store</button>
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
export default DeliveryGuys