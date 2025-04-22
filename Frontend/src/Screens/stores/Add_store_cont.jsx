import React from 'react';
import { Form } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import '../../css/Home.css';

const Add_store_cont = ({
  formValues,
  handleChange,      // Changed from changeHandler
  handleSubmit, 
  button,
  isButtonDisabled,
  zones,
  storecategories,
  imageUrl,
  handleFileSelect,
  chooseFromGallery,
  maplocation,
  containerStyle,
  selectedFile 
}) => {
  return (
<div className="cls_form_out_container">
                            <label htmlFor="" className="cls_form_out_label">{button ? "Add" : "Update"} Store</label>
                            <Form onSubmit={handleSubmit}>
                                <div class="cls_form_container">
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Name : <span className="cls_danger_label">*</span> </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORENAME' className='cls_form_div_input' value={formValues.STORENAME} onChange={handleChange} placeholder="Enter Store name" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Description : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='DESCRIPTION' className='cls_form_div_input' value={formValues.DESCRIPTION} onChange={handleChange} placeholder="Enter Description" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Image : </label>
                                        <div className="cls_form_div_right">
                                            <div className="cls_flex cls_flex_gap_6px">
                                                <button
                                                    type="button" // Important: prevent form submission
                                                    className="cls_btn_light"
                                                    onClick={chooseFromGallery}
                                                    disabled={!selectedFile}
                                                >
                                                    Choose From Gallery
                                                </button>
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    style={{ display: 'none' }}
                                                    onChange={handleFileSelect}
                                                    accept="image/*"
                                                />
                                                <button
                                                    type="button" // Important: prevent form submission
                                                    className="cls_btn_light"
                                                    onClick={() => document.getElementById('fileInput').click()}
                                                >
                                                    Upload Image
                                                </button>

                                            </div>
                                            {imageUrl && (
                                                <img
                                                    src={imageUrl}
                                                    alt="Uploaded"
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                        marginTop: '10px',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Default Rating : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='DEFAULT_RATING' className='cls_form_div_input' value={formValues.DEFAULT_RATING} onChange={handleChange} placeholder="Enter Default Rating" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Approx Delivery Time : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='APPROX_DELIVERYTIME' className='cls_form_div_input' value={formValues.APPROX_DELIVERYTIME} onChange={handleChange} placeholder="Enter Approx Delivery Time" />
                                        </div>
                                    </div>
                                    <div className="cls_break_line"></div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Category  :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name="STORECATEGORYID"
                                                className="cls_form_div_input"
                                                value={formValues.STORECATEGORYID}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Store Category</option>
                                                {storecategories.map((scat) => (
                                                    <option key={scat.STORECATEGORYID} value={scat.STORECATEGORYID}>
                                                        {scat.STORECATEGORYNAME}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store URL: </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORE_URL' className='cls_form_div_input' value={formValues.STORE_URL} onChange={handleChange} placeholder="Enter Store URL" />
                                        </div>
                                    </div>
                                    <div className="cls_break_line"></div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Full Address : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='FULL_ADDRESS' className='cls_form_div_input' value={formValues.FULL_ADDRESS} onChange={handleChange} placeholder="Enter Full Address" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Pincode : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='PINCODE' className='cls_form_div_input' value={formValues.PINCODE} onChange={handleChange} placeholder="Enter Pincode" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Landmark : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='LANDMARK' className='cls_form_div_input' value={formValues.LANDMARK} onChange={handleChange} placeholder="Enter Landmark" />
                                        </div>
                                    </div>
                                    <div className="cls_form_map_outline">
                                        <label className="cls_form_div_label ">Locate on Map : </label>
                                        <div className="cls_form_map_div">
                                            <LoadScript googleMapsApiKey="AIzaSyAPIyfsaN6qqfiiyvZkY-BtKL1fzgCFVpg">
                                                <GoogleMap mapContainerStyle={containerStyle} center={maplocation} zoom={15}>
                                                    <Marker position={maplocation} />
                                                </GoogleMap>
                                            </LoadScript>
                                        </div>

                                        <div className="cls_form_div1">
                                            <div className="cls_form_map_div2">
                                                <label className="cls_form_div_label ">Latitude of the Store  : </label>
                                                <div className="">
                                                    <Form.Control type="text" name='STORE_LATITUDE' className='cls_form_div_input' value={formValues.STORE_LATITUDE} onChange={handleChange} placeholder="Enter Latitude of the Store " />
                                                </div>
                                            </div>
                                            <div className="cls_form_map_div2">
                                                <label className="cls_form_div_label ">Longitude of the Store  : </label>
                                                <div className="">
                                                    <Form.Control type="text" name='STORE_LONGITUDE' className='cls_form_div_input' value={formValues.STORE_LONGITUDE} onChange={handleChange} placeholder="Enter Longitude of the Store " />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="cls_break_line"></div>

                                    </div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Certificate/License Code  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='CERTIFICATE' className='cls_form_div_input' value={formValues.CERTIFICATE} onChange={handleChange} placeholder="Enter Certificate/License Code " />
                                        </div>
                                    </div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Charge  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORE_CHARGE' className='cls_form_div_input' value={formValues.STORE_CHARGE} onChange={handleChange} placeholder="Enter Store Charge (Packing/Extra) " />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Charge Tax  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORE_CHARGE_TAX' className='cls_form_div_input' value={formValues.STORE_CHARGE_TAX} onChange={handleChange} placeholder="Enter Store Charge Tax" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Delivery Charge Type  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name='DELIVERY_CHARGE_TYPE'
                                                className='cls_form_div_input'
                                                value={formValues.DELIVERY_CHARGE_TYPE}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Delivery Charge Type</option>
                                                <option value="Type 1">Type 1</option>
                                                <option value="Type 2">Type 2</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Delivery Type  :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name='DELIVERY_TYPE'
                                                className='cls_form_div_input'
                                                value={formValues.DELIVERY_TYPE}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Delivery Type</option>
                                                <option value="Type 1">Type 1</option>
                                                <option value="Type 2">Type 2</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Delivery Charge  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='DELIVERY_CHARGE' className='cls_form_div_input' value={formValues.DELIVERY_CHARGE} onChange={handleChange} placeholder="Enter Delivery Charge" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Minimum Order Price  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='MIN_ORDER_PRICE' className='cls_form_div_input' value={formValues.MIN_ORDER_PRICE} onChange={handleChange} placeholder="Enter Minimum Order Price" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Tax Percentage  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORE_TAX_PERCENTAGE' className='cls_form_div_input' value={formValues.STORE_TAX_PERCENTAGE} onChange={handleChange} placeholder="Enter Store Tax Percentage" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Commission Type :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name='COMMISSION_TYPE'
                                                className='cls_form_div_input'
                                                value={formValues.COMMISSION_TYPE}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Commission Type</option>
                                                <option value="Type 1">Type 1</option>
                                                <option value="Type 2">Type 2</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Commission Rate  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='COMMISSION_RATE' className='cls_form_div_input' value={formValues.COMMISSION_RATE} onChange={handleChange} placeholder="Enter Commission Rate" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Zone  :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name="ZONE"
                                                className="cls_form_div_input"
                                                value={zones.find((zone) => zone.zoneid === formValues.ZONE)?.zonename || ""}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select ZONE</option>
                                                {zones.map((zone) => (
                                                    <option key={zone.zoneid} value={zone.zonename}>
                                                        {zone.zonename}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_break_line"></div>
                                    <div className="cls_form_btn1">
                                        <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                                            {button ? ("Save") : ("Update")}
                                        </button>
                                    </div>
                                </div>

                            </Form>
                        </div>
  );
};

export default Add_store_cont;