import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar2 from "../Components/Navbar2";
import axios from 'axios';
import '../css/Home.css';
import { Form } from 'react-bootstrap';
import Sidebar from '../Components/sidebar';
import { get, post, put, remove, API_URL, setAccessToken, clearAccessToken } from '../Components/api';
import Products_Sidebar from "../Components/products_sidebar";
import { Overlay } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function Products(props) {
    const [mode, setMode] = useState("light");
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const stateValus = useSelector(state => state.userLogin)
    const { loading, data, error, accessToken } = stateValus;
    const [categoryData, setCategoryData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        itemid: '',
        itemname: '',
        category: '',
        catid: '',
        isactive: false,
        createdby: '',
        picture: null,
        discount: '',
        orderno: '',
        uom: '',
        button: 1
    })
    const { itemid, itemname, category, catid, isactive, createdby, picture, discount, orderno, uom, button } = formValues;
    const changeHandler = (e) => {
        const newvalue = e.target.type === "checkbox" ? e.target.checked === true ? 1 : 0 : e.target.value
        setFormValues({ ...formValues, [e.target.name]: newvalue })
    }
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        if (selectedImage) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setImagePreview(e.target.result);
          };
          reader.readAsDataURL(selectedImage);
        } else {
          setImagePreview(null);
        }
      };
    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                try {
                    const responseproducts = await get('/getproducts');
                    setProductsData(responseproducts.data);
                } catch (error) {
                    alert('Error fetching products:', error);
                }
                const responsecategory = await get('/getactivecategories');
                if (Array.isArray(responsecategory.data)) {
                    const categoriesArray = responsecategory.data.map((category) => ({
                        CATID: category.CATID,
                        CATNAME: category.CATNAME,
                    }));
                    setCategoryData(categoriesArray);
                } else {
                    alert('Invalid data received from API:', responsecategory);
                }
            } catch (error) {
                alert('Error fetching categories:', error);
            }
        }
        fetchDataFromAPI();
    }, [isButtonDisabled]);
    const removeItem = async (id) => {
        try {
            setButtonDisabled(true);
            const response = await post('/deleteproducts', { itemid: id });
            if (response.status === 200) {
                alert(response.data.data);
            } else {
                alert('Failed to delete Product');
            }
            setTimeout(() => {
                setButtonDisabled(false);
            }, 2000);
        } catch (error) {
            alert('Error deleting Product:', error.message);
        }
    };
    const saveProduct = async () => {
        //button 0 is update && button 1 is save
        if (button === 1) {
            try {
                const response = await post('/insertproducts', { catid: catid, itemname: itemname, isactive: isactive, createdby: "ADMIN", discount: discount, orderno: orderno, uom: uom });
                if (response.status === 200) {
                    alert('Product Created successfully');
                } else {
                    alert('Failed to Create Product');
                }
            } catch (error) {
                alert('Error Creating Product:', error.message);
            }
        }
        else {
            try {
                const response = await put('/updateproducts', { catid: catid, itemname: itemname, isactive: isactive, createdby: "ADMIN", discount: discount, orderno: orderno, uom: uom, itemid: itemid });
                setFormValues({ itemname: '', discount: '', orderno: '', uom: '', catid: '', itemid: '', category: '', button: 1 })//1 is for setting the button text to save
                if (response.status === 200) {
                    alert('Product Updated successfully');
                } else {
                    alert('Failed to update Product');
                }
            } catch (error) {
                alert('Error Updating Product:', error.message);
            }
        }

    };
    const updateProduct = async (id, catid, name, isactive, discount, orderno, uom) => {
        setFormValues({ ...formValues, itemid: id, catid: catid, itemname: name, isactive: isactive, button: 0, discount: discount, orderno: orderno, uom: uom });
    };
    const submitHandler = (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        saveProduct();
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    }


    return (
        <>
            <div className="d-flex fixed-top" style={{ gap: "10px", height: "700px", marginLeft: "10px", marginRight: "10px", background: '#f8f9fc' }}>
                <div className="card col my-2 sticky-top">
                    <div className="card-header text-bg-primary h5">
                        Products Master
                    </div>

                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col">
                                <Form.Group controlId="inputitemname" style={{ padding: "5px" }}>
                                    <Form.Control
                                        type="text"
                                        name='itemname'
                                        value={itemname}
                                        onChange={changeHandler}
                                        placeholder="Item Name"
                                    />
                                </Form.Group>
                                <Form.Group controlId="selectCategory" style={{ padding: "5px" }}>
                                    <Form.Control
                                        as="select"
                                        value={catid}
                                        name='catid'
                                        onChange={changeHandler}>
                                        <option value="">Select Category...</option>
                                        {Object.keys(categoryData).map((key) => (
                                            <option key={categoryData[key].CATID} value={categoryData[key].CATID}>
                                                {categoryData[key].CATNAME}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group controlId="inputdiscount" style={{ padding: "5px" }}>
                                            <Form.Control
                                                type="text"
                                                name='discount'
                                                value={discount}
                                                onChange={changeHandler}
                                                placeholder="Discount"
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="inputorderno" style={{ padding: "5px" }}>
                                            <Form.Control
                                                type="text"
                                                name='orderno'
                                                value={orderno}
                                                onChange={changeHandler}
                                                placeholder="Order No."
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className="col">
                                        <Form.Group controlId="inputuom" style={{ padding: "5px" }}>
                                            <Form.Control
                                                type="text"
                                                name='uom'
                                                value={uom}
                                                onChange={changeHandler}
                                                placeholder="UOM"
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" name="isactive" checked={isactive} className="custom-control-input" id="customCheck" onChange={changeHandler} />
                                        <label className="custom-control-label" htmlFor="customCheck">Isactive</label>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-2">
                            {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isButtonDisabled} >
                                    {button ? ("Save") : ("Update")}
                                </button>
                        </div>
                    </Form>
                <div className="card-header text-bg-primary h5">
                    Products View
                </div>
                <div className="scrollable-div" style={{ height: "550px", overflow: "auto" }}>
                    {productsData.map((item, index) => (
                        <div className="row border" style={{ marginLeft: "5px", marginRight: "5px" }} key={index}>
                            <div className="row">
                                <div className="col">{item.ITEMNAME}</div>
                                <input type="checkbox" name="isactive" checked={item.ISACTIVE} className="col-1" id="CheckShow" />
                                <div className="col-1"><BiEdit size={32} onClick={() => updateProduct(item.ITEMID, item.CATID, item.ITEMNAME, item.ISACTIVE, item.DISCOUNT, item.ORDERNO, item.UOM)} color="green" /></div>
                                <div className="col-1"><BiTrash size={32} onClick={() => removeItem(item.ITEMID)} color="red" /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
        </>
    );
}

const selectedStyles = {
    backgroundColor: '#090464',
    color: '#fff',
    /* Add any other styles you want for selected items */
};
