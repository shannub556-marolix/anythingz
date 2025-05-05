import '../../css/Items.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { get, post } from '../../Components/api';
import { BiEdit, BiTrash } from "react-icons/bi";
import Spinner from '../../Components/Spinner';
import { Form, FormCheck } from 'react-bootstrap';


const Storecategorysliders = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const [pageNumber, setPageNumber] = useState([]);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();
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
                                <label htmlFor="" className="cls_store_label">Total  44 Store Categories </label>
                            </div>
                            <div className="cls_store_right">
                                <button className="cls_store_btn" >Add New Store Category</button>

                            </div>
                        </div>
                        <div class="cls_promo_outline">
                            <div className='cls_store_container1'>
                                <div className='cls_categories_outline'>
                                    <div className='cls_categories_left'>
                                        <div class="cls_categories_con_btn"><label for="">Meat</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Roti</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Meal</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Meal</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Meal</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>
                                        <div class="cls_categories_con_btn"><label for="">Restaruant</label></div>

                                    </div>
                                    <div className='cls_categories_right'>
                                        <button className='cls_btn_light'>Manage Categories</button>
                                    </div>
                                </div>
                            </div>

                            <div class="cls_form_out_container1">
                                <Form>
                                    <div class="cls_storeCateg_container" >
                                    <div class="cls_form_div">
                                            <label class="cls_form_div_label cls_form_div_left">Enable Store Category Slider</label>
                                            <div class="cls_form_div_right">
                                                <label class="switch">
                                                    <input type="checkbox" />
                                                    <span class="slider round"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="cls_form_div">
                                            <label class="cls_form_div_label cls_form_div_left">Store Category Slider Heading </label>
                                            <div class="cls_form_div_right">
                                                <input name="PRODUCTNAME" placeholder="STORE CATEGORIES 👉" required type="text" class="cls_form_div_input form-control" value="" />
                                            </div>
                                        </div>

                                        <div class="cls_form_div">
                                            <label class="cls_form_div_label cls_form_div_left">Slider Position</label>
                                            <div class="cls_form_div_right">
                                                <select name="STOREID" disabled class="cls_form_div_input form-select">
                                                    <option value="">Select Store</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="cls_form_div">
                                            <label class="cls_form_div_label cls_form_div_left">Size</label>
                                            <div class="cls_form_div_right">
                                                <select name="CATEGORY" class="cls_form_div_input form-select">
                                                    <option value="">Select Item Category</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="cls_form_div">
                                            <label class="cls_form_div_label cls_form_div_left">Style</label>
                                            <div class="cls_form_div_right">
                                                <select name="CATEGORY" class="cls_form_div_input form-select">
                                                    <option value="">Select Item Category</option>
                                                </select>
                                            </div>
                                        </div>    

                                          <div class="cls_form_div">
                                            <label class="cls_form_div_label cls_form_div_left">Show Store Category Slider Label</label>
                                            <div class="cls_form_div_right">
                                                <label class="switch">
                                                    <input type="checkbox" />
                                                    <span class="slider round"></span>
                                                </label>
                                            </div>
                                        </div>                                 



                                        <div class="cls_form_div">
                                            <label class="cls_form_div_label cls_form_div_left">Item Description :</label>
                                            <div class="cls_form_div_right">
                                                <input name="PRODUCT_DESCRIPTION" placeholder="Enter Description" type="text" class="cls_form_div_input form-control" value="" />
                                            </div>
                                        </div>

                                      

                                        <div class="cls_form_btn1">
                                            <button type="submit" class="cls_btn_blue">Save Settings</button>
                                        </div>

                                    </div>
                                </Form>
                            </div>

                            <div className='cls_form_out_container1 cls_mar_top_12px'>
                                <div className='cls_storeCateg_container'>
                                    <div className='cls_store_switch_outline'>

                                        <div className='cls_store_switch_container'>
                                            <label htmlFor="" className='cls_store_switch_label'> Meat</label>
                                            <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/store-category-slider/8f370b56-e597-42ff-bbf2-687845e9c2bf.webp" alt=""  className='cls_store_switch_img'/>
                                            <div className='cls_store_switch_cont'>
                                                <button className='cls_store_switch_btn_light'>del</button>
                                                <button className='cls_store_switch_btn_light1'>dis</button>
                                            </div>
                                        </div>

                                        <div className='cls_store_switch_container'>
                                            <label htmlFor="" className='cls_store_switch_label'> Meat</label>
                                            <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/store-category-slider/8f370b56-e597-42ff-bbf2-687845e9c2bf.webp" alt=""  className='cls_store_switch_img'/>
                                            <div className='cls_store_switch_cont'>
                                                <button className='cls_store_switch_btn_light'>del</button>
                                                <button className='cls_store_switch_btn_orange'>dis</button>
                                            </div>
                                        </div>

                                        <div className='cls_store_switch_container'>
                                            <label htmlFor="" className='cls_store_switch_label'> Meat</label>
                                            <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/store-category-slider/8f370b56-e597-42ff-bbf2-687845e9c2bf.webp" alt=""  className='cls_store_switch_img'/>
                                            <div className='cls_store_switch_cont'>
                                                <button className='cls_store_switch_btn_light'>del</button>
                                                <button className='cls_store_switch_btn_light1'>dis</button>
                                            </div>
                                        </div>

                                        <div className='cls_store_switch_container'>
                                            <label htmlFor="" className='cls_store_switch_label'> Meat</label>
                                            <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/store-category-slider/8f370b56-e597-42ff-bbf2-687845e9c2bf.webp" alt=""  className='cls_store_switch_img'/>
                                            <div className='cls_store_switch_cont'>
                                                <button className='cls_store_switch_btn_light'>del</button>
                                                <button className='cls_store_switch_btn_orange'>dis</button>
                                            </div>
                                        </div>

                                        <div className='cls_store_switch_container'>
                                            <label htmlFor="" className='cls_store_switch_label'> Meat</label>
                                            <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/store-category-slider/8f370b56-e597-42ff-bbf2-687845e9c2bf.webp" alt=""  className='cls_store_switch_img'/>
                                            <div className='cls_store_switch_cont'>
                                                <button className='cls_store_switch_btn_light'>del</button>
                                                <button className='cls_store_switch_btn_light1'>dis</button>
                                            </div>
                                        </div>

                                        <div className='cls_store_switch_container'>
                                            <label htmlFor="" className='cls_store_switch_label'> Meat</label>
                                            <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/store-category-slider/8f370b56-e597-42ff-bbf2-687845e9c2bf.webp" alt=""  className='cls_store_switch_img'/>
                                            <div className='cls_store_switch_cont'>
                                                <button className='cls_store_switch_btn_light'>del</button>
                                                <button className='cls_store_switch_btn_orange'>dis</button>
                                            </div>
                                        </div>

                                        <div className='cls_store_switch_container'>
                                            <label htmlFor="" className='cls_store_switch_label'> Meat</label>
                                            <img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/store-category-slider/8f370b56-e597-42ff-bbf2-687845e9c2bf.webp" alt=""  className='cls_store_switch_img'/>
                                            <div className='cls_store_switch_cont'>
                                                <button className='cls_store_switch_btn_light'>del</button>
                                                <button className='cls_store_switch_btn_light1'>dis</button>
                                            </div>
                                        </div>

                                    </div>
                                    
                                    <div class="cls_form_btn1">
                                            <button type="submit" class="cls_btn_blue">Add new slide</button>
                                        </div>
                                </div>

                            </div>





                        </div>

                    </div>

                </div>
            )}
        </div>

    )
}
export default Storecategorysliders