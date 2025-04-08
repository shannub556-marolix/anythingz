import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar2 from "../Components/Navbar2";
import axios from 'axios';
import '../css/Home.css';
import { Alert, Form } from 'react-bootstrap';
import Sidebar from '../Components/sidebar';
import { get, post, put, remove, API_URL, setAccessToken, clearAccessToken } from '../Components/api';
import Products_Sidebar from "../Components/products_sidebar";
import { Overlay } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function Category(props) {
    const [mode, setMode] = useState("light");
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const stateValus = useSelector(state => state.userLogin)
    const { loading, data, error, accessToken } = stateValus;
    const [selectedOption, setSelectedOption] = useState("");
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const [categoryData, setCategoryData] = useState([]);
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({
        catid: '',
        category: '',
        isactive: false,
        button:1
    })
    const { catid, category, isactive, button } = formValues;
    const changeHandler = (e) => {
        const newvalue = e.target.type === "checkbox" ? e.target.checked === true ? 1 : 0 : e.target.value
        setFormValues({ ...formValues, [e.target.name]: newvalue })
    }

    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                const response = await get('/getcategories');
                setCategoryData(response.data);
            } catch (error) {
                alert('Error fetching data:', error);
            }
        }
        fetchDataFromAPI();
    }, [isButtonDisabled]);

    const removeItem = async (id) => {
        try {
            setButtonDisabled(true);
            const response = await post('/deletecategory', { catid: id });
            if (response.status === 200) {
                alert(response.data.data);
            } else {
                alert('Failed to delete category');
            }
            setTimeout(() => {
                setButtonDisabled(false);
            }, 2000);
        } catch (error) {
            alert('Error deleting category:', error.message);
        }
    };
    const saveCategory = async () => {
        //button 0 is update && button 1 is save
        if(button===1){
            try {
                const response = await post('/insertcategory', { catname: category, isactive: isactive, createdby: "ADMIN" });
                if (response.status === 200) {
                    alert('Category Created successfully');
                } else {
                    alert('Failed to Create category');
                }
            } catch (error) {
                alert('Error Creating category:', error.message);
            }
        }
        else{
            try {
                const response = await put('/updatecategory', { catid:catid,catname: category, isactive: isactive, createdby: "ADMIN" });
                setFormValues({category:'',button:1})//1 is for setting the button text to save
                if (response.status === 200) {
                    alert('Category Updated successfully');
                } else {
                    alert('Failed to update category');
                }
            } catch (error) {
                alert('Error Updating category:', error.message);
            }
        }
        
    };
    const updateCategory = async (id, name, isactive) => {
        setFormValues({...formValues,catid:id,category:name,isactive:isactive,button:0}); 
    };
    const submitHandler = (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        saveCategory();
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    }
    return (
        <>
            <div className="d-flex fixed-top" style={{ gap: "10px", height: "700px", marginLeft: "10px", marginRight: "10px", background: '#f8f9fc' }}>
                <div className="card col my-2 sticky-top">
                    <div className="card-header text-bg-primary h5">
                        Category Master
                    </div>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="inputcategory" style={{ padding: "5px" }}>
                            <Form.Control
                                type="text"
                                name='category'
                                value={category}
                                onChange={changeHandler}
                                placeholder="Category Name" />
                        </Form.Group>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                                <input type="checkbox" name="isactive" checked={isactive} className="custom-control-input" id="customCheck" onChange={changeHandler} />
                                <label className="custom-control-label" htmlFor="customCheck">Isactive</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isButtonDisabled} >
                            {button ? ("Save") : ("Update")}
                        </button>
                    </Form>
                    <div className="card-header text-bg-primary h5">
                        Category View
                    </div>
                    <div className="scrollable-div" style={{ height: "550px", overflow: "auto" }}>
                        {categoryData.map((item, index) => (
                            <div className="row border" style={{ marginLeft: "5px", marginRight: "5px" }} key={index}>
                                <div className="row">
                                    <div className="col">{item.CATNAME}</div>
                                    <input type="checkbox" name="isactive" checked={item.ISACTIVE} className="col-1" id="CheckShow" />
                                    <div className="col-1"><BiEdit size={32} onClick={() => updateCategory(item.CATID, item.CATNAME, item.ISACTIVE)} color="green" /></div>
                                    <div className="col-1"><BiTrash size={32} onClick={() => removeItem(item.CATID)} color="red" /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

const selectedStyles = {
    backgroundColor: '#090464',
    color: '#fff',
    /* Add any other styles you want for selected items */
};
