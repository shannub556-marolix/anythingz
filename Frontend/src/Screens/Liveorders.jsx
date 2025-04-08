import '../css/Stores.css';
import '../css/Home.css';

import React, { useEffect, useState } from "react";

import Spinner from '../Components/Spinner';

const Liveorders = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            {loading ? (
                <Spinner title="Loading..," />
            ) : (
                <div className="cls_store_management_outline">
                    <div className='cls_dash_main'>
                        <div className="cls_store_container">
                            <div className="cls_store_left">
                                <label className="cls_store_label">Live Orders</label>
                            </div>
                            <div className="cls_store_right">
                                <label htmlFor="" className='cls_header_time'>1:30 PM</label>
                            </div>
                        </div>

                        <div className="cls_dash_container">

                            <div className="cls_dash_content">
                                <div className="cls_dash_content_left">
                                    <label className="cls_dash_content_label">8</label>
                                    <label className="cls_dash_content_label1">Completed Orders</label>
                                </div>
                                <div className="cls_dash_content_right">
                                    <img src="/images/help 1.png" alt="" width="24px" />
                                </div>
                            </div>

                            <div className="cls_dash_content">
                                <div className="cls_dash_content_left">
                                    <label className="cls_dash_content_label">8</label>
                                    <label className="cls_dash_content_label1">Cancelled Orders</label>
                                </div>
                                <div className="cls_dash_content_right">
                                    <img src="/images/help 1.png" alt="" width="24px" />
                                </div>
                            </div>

                            <div className="cls_dash_content">
                                <div className="cls_dash_content_left">
                                    <label className="cls_dash_content_label">8</label>
                                    <label className="cls_dash_content_label1">On Going Orders</label>
                                </div>
                                <div className="cls_dash_content_right">
                                    <img src="/images/help 1.png" alt="" width="24px" />
                                </div>
                            </div>

                            <div className="cls_dash_content">
                                <div className="cls_dash_content_left">
                                    <label className="cls_dash_content_label">8</label>
                                    <label className="cls_dash_content_label1">Total Sales Today</label>
                                </div>
                                <div className="cls_dash_content_right">
                                    <img src="/images/help 1.png" alt="" width="24px" />
                                </div>
                            </div>

                            <div className='cls_dash_content1'>
                                <div className='cls_dash_content1_top'>
                                <label htmlFor="" className='cls_dash_content_label'>New</label>

                                </div>
                                <div className='cls_dash_content1_btm'>
                                    <label htmlFor="" className='cls_dash_content_label1'>No data to show</label>
                                </div>

                            </div>

                            <div className='cls_dash_content1'>
                                <div className='cls_dash_content1_top'>
                                <label htmlFor="" className='cls_dash_content_label'>Preparing</label>

                                </div>
                                <div className='cls_dash_content1_btm'>
                                    <label htmlFor="" className='cls_dash_content_label1'>No data to show</label>
                                </div>

                            </div>

                            <div className='cls_dash_content1'>
                                <div className='cls_dash_content1_top'>
                                <label htmlFor="" className='cls_dash_content_label'>Delivery Assigned</label>

                                </div>
                                <div className='cls_dash_content1_btm'>
                                    <label htmlFor="" className='cls_dash_content_label1'>No data to show</label>
                                </div>

                            </div>

                            <div className='cls_dash_content1'>
                                <div className='cls_dash_content1_top'>
                                <label htmlFor="" className='cls_dash_content_label'>Picked Up</label>

                                </div>
                                <div className='cls_dash_content1_btm'>
                                    <label htmlFor="" className='cls_dash_content_label1'>No data to show</label>
                                </div>

                            </div>

                            <div className='cls_dash_content1'>
                                <div className='cls_dash_content1_top'>
                                <label htmlFor="" className='cls_dash_content_label'>Ready for Pickup</label>

                                </div>
                                <div className='cls_dash_content1_btm'>
                                    <label htmlFor="" className='cls_dash_content_label1'>No data to show</label>
                                </div>

                            </div>

                            <div className='cls_dash_content1'>
                                <div className='cls_dash_content1_top'>
                                <label htmlFor="" className='cls_dash_content_label'>Scheduled</label>

                                </div>
                                <div className='cls_dash_content1_btm'>
                                    <label htmlFor="" className='cls_dash_content_label1'>No data to show</label>
                                </div>

                            </div>

                            <div className='cls_dash_content1'>
                                <div className='cls_dash_content1_top'>
                                <label htmlFor="" className='cls_dash_content_label'>Scheduled Confirmed</label>

                                </div>
                                <div className='cls_dash_content1_btm'>
                                    <label htmlFor="" className='cls_dash_content_label1'>No data to show</label>
                                </div>

                            </div>


                            <div className='cls_dash_content1'>
                                <div className='cls_dash_content1_top'>
                                <label htmlFor="" className='cls_dash_content_label'>Completed</label>
                                <label htmlFor="" className='cls_dash_content_label1'>2</label>

                                </div>
                                
                                <div className='cls_dash_content1_btm1 '>
                                    <div className='cls_dash_content1_btm_cont '>

                                    <div className='cls_flex cls_flex_justify_spacebet cls_flex_gap_6px'>
                                        <label htmlFor="" className='cls_live_label'>#OD-6524</label>
                                        <label htmlFor="" className='cls_live_label1'>$540</label>
                                    </div>
                                    <div className='cls_flex cls_flex_justify_spacebet cls_flex_gap_6px cls_flex_align_flex_start'>
                                        <label htmlFor="" className='cls_live_label2'>MANASA MUTTON AND CHICKEN CENTER</label>
                                        <button className='cls_cod_btn'>COD</button>
                                    </div>
                                    <label htmlFor="" className='cls_liver_ord_label'>Mohamad sahil Khan</label>
                                    <label htmlFor="" className='cls_liver_ord_label1'>4 hours ago</label>
                                    <label htmlFor="" className='cls_liver_ord_label2'>Delivery By: Prudhvi</label>
                                    
                                    </div>


                                    <div className='cls_dash_content1_btm_cont'>

                                    <div className='cls_flex cls_flex_justify_spacebet cls_flex_gap_6px'>
                                        <label htmlFor="" className='cls_live_label'>#OD-6524</label>
                                        <label htmlFor="" className='cls_live_label1'>$540</label>
                                    </div>
                                    <div className='cls_flex cls_flex_justify_spacebet cls_flex_gap_6px cls_flex_align_flex_start'>
                                        <label htmlFor="" className='cls_live_label2'>MANASA MUTTON AND CHICKEN CENTER</label>
                                        <button className='cls_cod_btn'>COD</button>
                                    </div>
                                    <label htmlFor="" className='cls_liver_ord_label'>Mohamad sahil Khan</label>
                                    <label htmlFor="" className='cls_liver_ord_label1'>4 hours ago</label>
                                    <label htmlFor="" className='cls_liver_ord_label2'>Delivery By: Prudhvi</label>
                                    </div>
                                </div>

                            </div>

                            <div className='cls_dash_content1'>
                                <div className='cls_dash_content1_top'>
                                <label htmlFor="" className='cls_dash_content_label'>Awaiting Payment</label>

                                </div>
                                <div className='cls_dash_content1_btm'>
                                    <label htmlFor="" className='cls_dash_content_label1'>No data to show</label>
                                </div>

                            </div>

                           

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Liveorders;
