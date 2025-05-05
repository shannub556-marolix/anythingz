import React, { useEffect, useState } from "react";
import { Form, FormCheck } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, put } from '../../Components/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import { Category_Model } from '../../Models/CategoryModel';
import { postImage } from "../../Components/api";


export default function Promosliders() {


    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [loading, setLoading] = useState(false);
    const [button, setButton] = useState(1);

    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [activeTab, setActiveTab] = useState('general');

    return (
        <>
            <div>
                {loading ? (
                    <Spinner title="Loading..," />
                ) : (

                    <div className="cls_promo_outline">
                        <div className="cls_promo_out_container">
                            <div className="cls_flex cls_flex_justify_spacebet">
                            <label htmlFor="" className="cls_form_out_label">Primary Position Slider</label>

                            <div className="cls_flex cls_flex_gap_6px cls_flex_align_center">
                            <label class="switch"><input type="checkbox" checked="" /><span class="slider round"></span></label>
                            <button className="cls_btn_light"><a href="/editsliders"> Edit </a></button>
                            </div>

                            </div>

                            <Form >
                             <div className="cls_promo_container">

                                <img src="https://anythingz.in/assets/backend/global_assets/images/primary-position-promo-slider.png" alt="" className="cls_promo_img_left"/>

                                <div className="cls_promo_content">
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />


                                </div>

                             </div>


                                <div className="cls_form_btn1 cls_flex_gap_6px">
                                    <button type="submit" className="cls_btn_blue"  >
                                        8 
                                        <br />
                                        Slides
                                    </button>
                                    <button type="submit" className="cls_btn_blue"  >
                                        10 months ago0 
                                        <br />
                                       Last Modified
                                    </button>
                                </div>


                            </Form>
                        </div>

                        <div className="cls_promo_out_container1">
                            <div className="cls_flex cls_flex_justify_spacebet">
                            <label htmlFor="" className="cls_form_out_label">After First Store Slider (Slider Title: RECOMMENDED)</label>

                            <div className="cls_flex cls_flex_gap_6px cls_flex_align_center">
                            <label class="switch"><input type="checkbox" checked="" /><span class="slider round"></span></label>
                            <button className="cls_btn_light">Edit</button>
                            </div>

                            </div>

                            <Form >
                             <div className="cls_promo_container">

                                <img src="https://anythingz.in/assets/backend/global_assets/images/primary-position-promo-slider.png" alt="" className="cls_promo_img_left"/>

                                <div className="cls_promo_content">
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />


                                </div>

                             </div>


                                <div className="cls_form_btn1 cls_flex_gap_6px">
                                    <button type="submit" className="cls_btn_blue"  >
                                        8 
                                        <br />
                                        Slides
                                    </button>
                                    <button type="submit" className="cls_btn_blue"  >
                                        10 months ago0 
                                        <br />
                                       Last Modified
                                    </button>
                                </div>


                            </Form>
                        </div>

                        <div className="cls_promo_out_container1">
                            <div className="cls_flex cls_flex_justify_spacebet">
                            <label htmlFor="" className="cls_form_out_label">After Second Store Slider (Slider Title: FAVOURITES💛)</label>

                            <div className="cls_flex cls_flex_gap_6px cls_flex_align_center">
                            <label class="switch"><input type="checkbox" checked="" /><span class="slider round"></span></label>
                           <button className="cls_btn_light"> Edit</button>
                            </div>

                            </div>

                            <Form >
                             <div className="cls_promo_container">

                                <img src="https://anythingz.in/assets/backend/global_assets/images/primary-position-promo-slider.png" alt="" className="cls_promo_img_left"/>

                                <div className="cls_promo_content">
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />
                                <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/items/5a6013c0-9a66-4b63-9d9e-5dad769ef7c0.webp" alt="" className="cls_promo_img_right" />


                                </div>

                             </div>


                                <div className="cls_form_btn1 cls_flex_gap_6px">
                                    <button type="submit" className="cls_btn_blue"  >
                                        8 
                                        <br />
                                        Slides
                                    </button>
                                    <button type="submit" className="cls_btn_blue"  >
                                        10 months ago0 
                                        <br />
                                       Last Modified
                                    </button>
                                </div>


                            </Form>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}


