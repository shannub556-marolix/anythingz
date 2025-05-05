import React, { useEffect, useState } from "react";
import { Form, FormCheck } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, put } from '../../Components/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import { Category_Model } from '../../Models/CategoryModel';
import { postImage } from "../../Components/api";
import ToAll from "./ToAll";
import ToSelected from "./ToSelected";
import ToNonRegisteredAppUsers from "./ToNonRegisteredAppUsers";


export default function Sendpushnotification() {


    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [loading, setLoading] = useState(false);
    const [button, setButton] = useState(1);
    
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [activeTab, setActiveTab] = useState('To All');


    return (
        <>
            <div>
                {loading ? (
                    <Spinner title="Loading..," />
                ) : (

                    <div className="cls_notification_outline">
                        <div className="cls_notification_dash">

                            <div class="cls_dash_content">
                                <div class="cls_dash_content_left">
                                    <label for="" class="cls_dash_content_label">2883</label>
                                    <label for="" class="cls_dash_content_label1">Reistered Customers</label>
                                </div>

                            </div>

                            <div class="cls_dash_content">
                                <div class="cls_dash_content_left">
                                    <label for="" class="cls_dash_content_label">2673</label>
                                    <label for="" class="cls_dash_content_label1">Subscribers</label>
                                </div>

                            </div>

                            <div class="cls_dash_content">
                                <div class="cls_dash_content_left">
                                    <label for="" class="cls_dash_content_label">2970</label>
                                    <label for="" class="cls_dash_content_label1">App Users</label>
                                </div>

                            </div>

                            <div class="cls_dash_content">
                                <div class="cls_dash_content_left">
                                    <label for="" class="cls_dash_content_label">39776570</label>
                                    <label for="" class="cls_dash_content_label1">Delete Junk Data</label>
                                </div>

                            </div>

                        </div>

                        <>

                            {button && (
                                <div className="cls_form_outline">
                                    {/* Left Menu */}
                                    <div className="cls_notification_cont_left">
                                        <div className="cls_menu_container">
                                            {[
                                                { id: 'To All', label: 'To All' },
                                                { id: 'To Selected', label: 'To Selected' },
                                                { id: 'To Non-Registered App Users', label: 'To Non-Registered App Users' }
                                            ].map((tab) => (
                                                <a
                                                    key={tab.id}
                                                    href="#"
                                                    className={`cls_menu_container_cont ${activeTab === tab.id ? 'active_tab' : ''}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setActiveTab(tab.id);
                                                    }}
                                                >
                                                    <img src="icon.png" alt="" width="16px" />
                                                    <label>{tab.label}</label>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="cls_block cls_width60">
                                        {activeTab === 'To All' && <ToAll />}
                                        {activeTab === 'To Selected' && <ToSelected />}
                                        {activeTab === 'To Non-Registered App Users' && <ToNonRegisteredAppUsers />}
                                    </div>
                                </div>
                            )}






                        </>

                    </div>

                )}
            </div>
        </>
    );
}


