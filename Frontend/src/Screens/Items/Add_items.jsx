import React, { useEffect, useRef, useState } from "react";
import { Form, FormCheck } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, put } from '../../Components/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { Product_Model } from '../../Models/Product_Model';


export default function AddProducts() {


    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState(true)
    const [formValues, setFormValues] = useState(Product_Model);
    const [button, setButton] = useState(1);
    const [selectedStore, setSelectedStore] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [storesMap, setStoresMap] = useState(new Map());
    const [attributes, setAttributes] = useState([]);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [addonPrices, setAddonPrices] = useState({});
    const containerRef = useRef(null);
    const [toggles, setToggles] = useState({
        recommended: false,
        popular: false,
        isNew: false,
      });
      
      const handleToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
      };
      

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsPopupVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getAttributes = async (ID) => {
        try {
            setLoading(true);
            const response = await post('/attribute2/bystoreid', { "storeid": ID });
            if (response.data.status === "success") {
                setAttributes(response.data.Data);
                  
            } else {
                alert('Failed to Fetch Attributes \n' + response.data);
            }
        } catch (error) {
            alert('Error while fetching Attributes:', error.message);
        } finally {
            setLoading(false);
        }
    }

    const visibleAttributes = attributes.filter(attribute => 
        selectedAddons.some(addon =>
          attribute.addons.some(a => a.addonid === addon.addonid)
        )
      );

    const getDetailsbyId = async (id) => {
        try {
            setLoading(true);
            const response = await post('/products/byid', { "productid": id });
            if (response.data.status === "success") {
                const Details = response.data.Data;
                // const storeid = storesMap.find((z) => z.zonename === Details.ZONE);
                const updatedFormValues = { ...formValues, ...Details };
                // if (zone) {
                //     updatedFormValues.ZONE = zone.zonename;
                // }
                setSelectedStore(updatedFormValues.STOREID);
                setFormValues(updatedFormValues);
                setButton(0);//Change Button Text to "Update"
            } else {
                alert('Failed to Fetch Product Details \n' + response.data);
            }

        } catch (error) {
            alert('Error while fetching Product Details :', error.message);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (state) {
            getStores();

            console.log('ID: ' + state.ID);
            if (state.ID !== '' && state.ID !== null) {
                getDetailsbyId(state.ID);
                setMode(false)
                getAttributes(state.ID);
                
            };
        }
    }, [state]);

    const changeHandler = (e) => {
        const newvalue = e.target.type === "checkbox" ? (e.target.checked ? 1 : 0) : e.target.value;
        setFormValues((prevFormValues) => {
            const updatedFormValues = { ...prevFormValues, [e.target.name]: newvalue };
            return updatedFormValues;
        });

        if (e.target.name === 'STOREID') {
            setSelectedStore(newvalue);
            if (newvalue) {
                getAttributes();
            }
        }
    }


    const submitHandler = (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        save();
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    }

    const handlePriceChange = (addonId, value) => {
        setAddonPrices(prev => ({
          ...prev,
          [addonId]: value
        }));
      };


    const getStores = async () => {
        try {
            setLoading(true);
            const response = await get('/stores');
            if (response.data.status === "success") {
                // console.log('STOREID: '+response.data.Data.STOREID);
                if (response.data.Data && response.data.Data.length > 0) {
                    response.data.Data.forEach((storeData) => {
                        setStoresMap((prevMap) => {
                            const newMap = new Map(prevMap);
                            newMap.set(storeData.STOREID, storeData.STORENAME);
                            return newMap;
                        });
                    });
                }

            } else {
                alert('Failed to Fetch Stores \n' + response.data);
            }
        } catch (error) {
            alert('Error while fetching Stores:', error.message);
        } finally {
            setLoading(false);
        }
    }

    const save = async () => {
        //button 0 is update && button 1 is save
        if (button === 1) {
            try {
                const formData = { ...formValues };
                delete formData.PRODUCTID;
                // const request = ;
                const response = await post('/products/add', {
                    products: [formData]
                });
                if (response.data.status === "success") {
                    alert('Product Created successfully ');
                    navigate('/Items');
                } else {
                    alert('Failed to Create Product \n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Creating Product:', error.message);
            }
        }
        else {
            try {
                const response = await post('/products/update', { products: [formValues] });
                if (response.data.status === "success") {
                    alert('Product Updated successfully ');
                    setFormValues({ CATEGORYID: '', button: 1 })//1 is for setting the button text to save
                    navigate('/Items');
                } else {
                    alert('Failed to update Product \n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Updating Product:', error);
            }
        }

    };
    return (
        <>
            <div>
                {loading ? (
                    <Spinner title="Loading..," />
                ) : (

                    <div className="cls_form_outline">
                        <div className="cls_form_out_container">
                            <label htmlFor="" className="cls_form_out_label">{button ? "Add" : "Update"} Product</label>

                            <Form onSubmit={submitHandler}>
                                <div className="cls_form_container">
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Item's Category :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Select
                                                as="select"
                                                name="STOREID"
                                                className="cls_form_div_input"
                                                value={selectedStore}
                                                onChange={changeHandler}
                                            >
                                                <option value="">Select Store</option>
                                                {Array.from(storesMap.entries()).map(([STOREID, STORENAME]) => (
                                                    <option key={STOREID} value={STOREID}>
                                                        {STORENAME}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Image : </label>
                                        <div className="cls_form_div_right">
                                            <div className="cls_flex cls_flex_gap_6px">
                                                <button className="cls_btn_light">Choose From Gallery </button>
                                                <button className="cls_btn_light">Upload Image </button>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Item Name : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Select name='PRODUCTNAME' className='cls_form_div_input' value={formValues.PRODUCTNAME} onChange={changeHandler} placeholder="Enter Product name">
                                                <option value="">Select</option>
                                            </Form.Select>                                                             </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Item Description : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='PRODUCT_DESCRIPTION' className='cls_form_div_input' value={formValues.PRODUCT_DESCRIPTION} onChange={changeHandler} placeholder="Enter Description" />
                                        </div>
                                    </div>
                                    {/* <div className="cls_form_div">
                                            <label className="cls_form_div_label cls_form_div_left">PRODUCT TYPE : </label>
                                            <div className="cls_form_div_right">
                                                <Form.Control type="text" name='PRODUCT_TYPE' className='cls_form_div_input' value={formValues.PRODUCT_TYPE} onChange={changeHandler} placeholder="Enter PRODUCT TYPE " />
                                            </div>
                                        </div> */}
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">PRICE: </label>
                                        <div className="cls_form_div_right">
                                            <div className="cls_flex cls_flex_gap_6px">
                                                <div className="">
                                                    <Form.Control type="text" name='PRODUCT_TYPE' className='cls_form_div_input' value={formValues.PRODUCT_TYPE} onChange={changeHandler} placeholder="Enter PRODUCT TYPE " />
                                                </div>
                                                <button className="cls_btn_light">Add Discounted Price </button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="cls_flex cls_flex_gap_6px " style={{ borderTop: "1px solid #ddd", paddingTop: "22px" }}>
                                        <button className="cls_btn_light">Set Custom Item Tax</button>
                                       
                                    </div>
                                    <div className="cls_flex cls_flex_gap_6px " style={{ borderTop: "1px solid #ddd", paddingTop: "22px" }}>
                                        <button className="cls_btn_light">Set Custom Item Commision</button>
                                    </div>
                                    <div className="cls_form_div" style={{ borderTop: "1px solid #ddd", paddingTop: "22px" }}>
  <label className="cls_form_div_label cls_form_div_left">Is Recommended?</label>
  <div className="cls_form_div_right">
    <label className="switch">
      <input type="checkbox" checked={toggles.recommended} onChange={() => handleToggle("recommended")} />
      <span className="slider round"></span>
    </label>
  </div>
</div>

<div className="cls_form_div">
  <label className="cls_form_div_label cls_form_div_left">Is Popular?</label>
  <div className="cls_form_div_right">
    <label className="switch">
      <input type="checkbox" checked={toggles.popular} onChange={() => handleToggle("popular")} />
      <span className="slider round"></span>
    </label>
  </div>
</div>

<div className="cls_form_div">
  <label className="cls_form_div_label cls_form_div_left">Is New?</label>
  <div className="cls_form_div_right">
    <label className="switch">
      <input type="checkbox" checked={toggles.isNew} onChange={() => handleToggle("isNew")} />
      <span className="slider round"></span>
    </label>
  </div>
</div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Veg/Non-Veg: </label>
                                        <div className="cls_form_div_right">
                                            <Form.Select name='PRODUCTNAME' className='cls_form_div_input' value={formValues.PRODUCTNAME} onChange={changeHandler} placeholder="Enter Product name">
                                                <option value="">Select an option</option>
                                            </Form.Select>                                                             </div>
                                    </div>

                                    <div className="cls_form_btn1">
                                        <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                                            {button ? ("Save") : ("Update")}
                                        </button>
                                    </div>

                                </div>

                            </Form>
                        </div>


                        {mode ? (
                            true
                        ) : (
                            // <div className="cls_add_items_right">





                            //     <div className="cls_form_out_wrapper" ref={containerRef}>
                            //         <div
                            //             className="cls_form_out_container1"
                            //             onClick={() => setIsPopupVisible((prev) => !prev)}
                            //         >
                            //             <label htmlFor="" className="cls_form_out_label">
                            //                 Variants and Addons
                            //             </label>

                            //             <div className="cls_form_div_input_div cls_flex cls_flex_gap_6px cls_flex_wrap">
                            //                 {selectedAddons.map((addon, index) => (
                            //                     <div key={index} className="cls_variants_con_btn">
                            //                         <label htmlFor="">{addon.addonname}</label>
                            //                         <label
                            //                             htmlFor=""
                            //                             onClick={(e) => {
                            //                                 e.stopPropagation();
                            //                                 setSelectedAddons(prev => prev.filter(a => a.addonid !== addon.addonid));
                            //                             }}
                            //                         >x</label>
                            //                     </div>
                            //                 ))}
                            //             </div>
                            //         </div>

                            //         {isPopupVisible && (
                            //             <div className="cls_variants_poup">
                            //                 {attributes.map((attribute) => (
                            //                     <div key={attribute.attributeid} className="cls_variants_container">
                            //                         <label className="cls_variants_container_label">
                            //                             {attribute.attributename}
                            //                         </label>
                            //                         <div className="cls_variants_btn_container">
                            //                             {attribute.addons.map((addon) => (
                            //                                 <button
                            //                                     key={addon.addonid}
                            //                                     className={`cls_variants_btn ${selectedAddons.some(a => a.addonid === addon.addonid) ? 'selected' : ''
                            //                                         }`}
                            //                                     onClick={(e) => {
                            //                                         e.stopPropagation();
                            //                                         setSelectedAddons(prev => {
                            //                                             // Check if addon is already selected
                            //                                             const isSelected = prev.some(a => a.addonid === addon.addonid);
                            //                                             if (isSelected) {
                            //                                                 return prev.filter(a => a.addonid !== addon.addonid);
                            //                                             } else {
                            //                                                 return [...prev, addon];
                            //                                             }
                            //                                         });
                            //                                     }}
                            //                                 >
                            //                                     {addon.addonname}
                            //                                 </button>
                            //                             ))}
                            //                         </div>
                            //                     </div>
                            //                 ))}
                            //             </div>
                            //         )}
                            //     </div>
                            //     <div className="cls_form_out_container1">

                            //         <div className="cls_flex  cls_flex_gap_6px cls_flex_column">
                            //             <label htmlFor="" className="cls_form_out_label">Fruits</label>

                            //             <div className="cls_flex cls_flex_justify_spacebet cls_flex_align_center cls_flex_gap_6px">
                            //                 <label htmlFor="" className="cls_add_item_label">Price for 250g</label>
                            //                 <input type="text" name="" id="" className="cls_form_div_input cls_width26" />
                            //             </div>

                            //             <div className="cls_flex cls_flex_justify_spacebet cls_flex_align_center cls_flex_gap_6px">
                            //                 <label htmlFor="" className="cls_add_item_label">Price for 250g</label>
                            //                 <input type="text" name="" id="" className="cls_form_div_input cls_width26" />
                            //             </div>

                            //             <div className="cls_flex cls_flex_justify_spacebet cls_flex_align_center cls_flex_gap_6px">
                            //                 <label htmlFor="" className="cls_add_item_label">Price for 250g</label>
                            //                 <input type="text" name="" id="" className="cls_form_div_input cls_width26" />
                            //             </div>

                            //         </div>

                            //         <div className="cls_flex  cls_flex_gap_6px cls_flex_column">
                            //             <label htmlFor="" className="cls_form_out_label">Fruits</label>

                            //             <div className="cls_flex cls_flex_justify_spacebet cls_flex_align_center cls_flex_gap_6px">
                            //                 <label htmlFor="" className="cls_add_item_label">Price for 250g</label>
                            //                 <input type="text" name="" id="" className="cls_form_div_input cls_width26" />
                            //             </div>

                            //             <div className="cls_flex cls_flex_justify_spacebet cls_flex_align_center cls_flex_gap_6px">
                            //                 <label htmlFor="" className="cls_add_item_label">Price for 250g</label>
                            //                 <input type="text" name="" id="" className="cls_form_div_input cls_width26" />
                            //             </div>

                            //             <div className="cls_flex cls_flex_justify_spacebet cls_flex_align_center cls_flex_gap_6px">
                            //                 <label htmlFor="" className="cls_add_item_label">Price for 250g</label>
                            //                 <input type="text" name="" id="" className="cls_form_div_input cls_width26" />
                            //             </div>

                            //         </div>


                            //     </div>

                            // </div>

                            <div className="cls_add_items_right">
  <div className="cls_form_out_wrapper" ref={containerRef}>
    
  <div className="cls_form_out_wrapper" ref={containerRef}>
                                    <div
                                        className="cls_block"
                                        onClick={() => setIsPopupVisible((prev) => !prev)}
                                    >
                                        <div className="cls_form_out_container1">
                                        <label htmlFor="" className="cls_form_out_label">
                                            Variants and Addons
                                        </label>

                                        <div className="cls_form_div_input_div cls_flex cls_flex_gap_6px cls_flex_wrap">
                                            {selectedAddons.map((addon, index) => (
                                                <div key={index} className="cls_variants_con_btn">
                                                    <label htmlFor="">{addon.addonname}</label>
                                                    <label
                                                        htmlFor=""
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedAddons(prev => prev.filter(a => a.addonid !== addon.addonid));
                                                        }}
                                                    >x</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    </div>

                                    {isPopupVisible && (
                                        <div className="cls_variants_poup">
                                            {attributes.map((attribute) => (
                                                <div key={attribute.attributeid} className="cls_variants_container">
                                                    <label className="cls_variants_container_label">
                                                        {attribute.attributename}
                                                    </label>
                                                    <div className="cls_variants_btn_container">
                                                        {attribute.addons.map((addon) => (
                                                            <button
                                                                key={addon.addonid}
                                                                className={`cls_variants_btn ${selectedAddons.some(a => a.addonid === addon.addonid) ? 'selected' : ''
                                                                    }`}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedAddons(prev => {
                                                                        // Check if addon is already selected
                                                                        const isSelected = prev.some(a => a.addonid === addon.addonid);
                                                                        if (isSelected) {
                                                                            return prev.filter(a => a.addonid !== addon.addonid);
                                                                        } else {
                                                                            return [...prev, addon];
                                                                        }
                                                                    });
                                                                }}
                                                            >
                                                                {addon.addonname}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
    
  </div>



  {/* <div className="cls_form_out_container1">
    {attributes.map(attribute => {
      const attributeAddons = selectedAddons.filter(addon => 
        attribute.addons.some(a => a.addonid === addon.addonid)
      );

      if (attributeAddons.length === 0) return null;

      return (
        <div key={attribute.attributeid} className="cls_flex cls_flex_gap_6px cls_flex_column">
          <label htmlFor="" className="cls_form_out_label">{attribute.attributename}</label>
          
          {attributeAddons.map(addon => (
            <div key={addon.addonid} className="cls_flex cls_flex_justify_spacebet cls_flex_align_center cls_flex_gap_6px">
              <label htmlFor="" className="cls_add_item_label">Price for {addon.addonname}</label>
              <input 
                type="text" 
                value={addonPrices[addon.addonid] || ''}
                onChange={(e) => handlePriceChange(addon.addonid, e.target.value)}
                className="cls_form_div_input cls_width26" 
              />
            </div>
          ))}
        </div>
      );
    })}
  </div> */}
  
  {visibleAttributes.length > 0 && (
  <div className="cls_form_out_container1">
    {visibleAttributes.map(attribute => {
      const attributeAddons = selectedAddons.filter(addon =>
        attribute.addons.some(a => a.addonid === addon.addonid)
      );

      return (
        <div key={attribute.attributeid} className="cls_flex cls_flex_gap_6px cls_flex_column">
          <label className="cls_form_out_label">{attribute.attributename}</label>
          
          {attributeAddons.map(addon => (
            <div key={addon.addonid} className="cls_flex cls_flex_justify_spacebet cls_flex_align_center cls_flex_gap_6px">
              <label className="cls_add_item_label">Price for {addon.addonname}</label>
              <input 
                type="text" 
                value={addonPrices[addon.addonid] || ''}
                onChange={(e) => handlePriceChange(addon.addonid, e.target.value)}
                className="cls_form_div_input cls_width26" 
              />
            </div>
          ))}
        </div>
      );
    })}
  </div>
)}


</div>

                            

                        )}
                    </div>

                )}
            </div>
        </>
    );
}


