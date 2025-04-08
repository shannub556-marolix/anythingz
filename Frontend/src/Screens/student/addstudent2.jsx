import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormCheck } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import person from '../../images/person.jpg';
import help from '../../images/help.png';
import './addstudent.css';

export default function Addstudent2(props) {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(person);
    const [tabstate, setTabstate] = useState(1);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        admissionno: '',
        admissiontype: '',
        admissiondate: '',
        _class: '',
        section: '',
        caste: '',
        subcaste: '',
        rollno: '',
        firstname: '',
        lastname: '',
        mobileno: '',
        religion: '',
        nationality: '',
        dob: '',
        isactive: false,
        chkprmaddress: false,
        createdby: '',
        discount: '',
        orderno: '',
        uom: '',
        presenthno: '',
        presentstreet: '',
        presentarea: '',
        presentvillage: '',
        presentcity: '',
        presentcountry: '',
        presentstate: '',
        presentpincode: '',
        permanenthno: '',
        permanentstreet: '',
        permanentarea: '',
        permanentvillage: '',
        permanentcity: '',
        permanentcountry: '',
        permanentstate: '',
        permanentpincode: '',
        email: '',
        contactno: '',
        identificationmark1: '',
        identificationmark2: '',
        previousinstitutionname: '',
        previousinstitutionclass: '',
        previousinstitutionboard: '',
        previousinstitutiontotalmarks: '',
        previousinstitutionpercentage: '',
        fathername: '',
        fatherrelationship: '',
        fathergender: '',
        fatherqualification: '',
        fatheroccupation: '',
        fatheremailaddress: '',
        fathercontactno: '',
        fathermobileno: '',
        fatheraadharno: '',
        fatherbankname: '',
        fatherbankacno: '',
        fatherbankifsc: '',
        rationcardno: '',
        mothername: '',
        motherrelationship: '',
        mothergender: '',
        motherqualification: '',
        motheroccupation: '',
        motheremailaddress: '',
        mothercontactno: '',
        mothermobileno: '',
        motheraadharno: '',
        motherbankname: '',
        motherbankacno: '',
        motherbankifsc: '',
        birthcertificate: '',
        button: 1
    })
    const { admissionno, admissiontype, admissiondate, _class, section, rollno, caste, subcaste, firstname, lastname, mobileno, religion, nationality, dob, isactive, chkprmaddress, createdby, discount, orderno, uom, presenthno, presentstreet, presentarea, presentvillage, presentcity, presentcountry, presentstate, presentpincode, permanenthno, permanentstreet, permanentarea, permanentvillage, permanentcity, permanentcountry, permanentstate, permanentpincode, email, contactno, identificationmark1, identificationmark2, previousinstitutionname, previousinstitutionclass, previousinstitutionboard, previousinstitutiontotalmarks, previousinstitutionpercentage,
        fathername, fatherrelationship, fathergender, fatherqualification, fatheroccupation, fatheremailaddress, fathercontactno, fathermobileno, fatheraadharno, fatherbankname, fatherbankacno, fatherbankifsc, rationcardno,
        mothername, motherrelationship, mothergender, motherqualification, motheroccupation, motheremailaddress, mothercontactno, mothermobileno, motheraadharno, motherbankname, motherbankacno, motherbankifsc,
        birthcertificate, button } = formValues;
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
            setImagePreview(person);
        }
    };
    let chksprmadrs = (e) => {
        if (e.target.checked === true) {
            setFormValues({ permanenthno: presenthno, permanentstreet: presentstreet, permanentarea: presentarea, permanentvillage: presentvillage, permanentcity: presentcity, permanentcountry: presentcountry, permanentstate: presentstate, permanentpincode: presentpincode })
        }
        else {
            setFormValues({ permanenthno: '', permanentstreet: '', permanentarea: '', permanentvillage: '', permanentcity: '', permanentcountry: '', permanentstate: '', permanentpincode: '' })
        }
    }
    const tabchange = (index) => {
        setTabstate(index);
    }
    useEffect(() => {

    }, [isButtonDisabled]);

    const submitHandler = (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    }


    return (
        <>
            <div className="d-flex" style={{ gap: "10px", marginLeft: "10px", marginRight: "10px", background: '#f8f9fc' }}>
                <div className="card col my-2 sticky-top">
                    <div className="card-header text-bg-primary h5">
                        Admission Details
                    </div>
                    <Form onSubmit={submitHandler}>
                        <table>
                            <tbody>
                                <tr>
                                    <td align='left' valign='middle'>
                                        <span>
                                            <b>
                                                " Admission Details "
                                            </b>
                                        </span>
                                    </td>
                                    <td align='right' valign='middle'>
                                        <span className="red">*</span>
                                        " Mandatory Fields "
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div className="tabcontent">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td width={"50%"} align="left" valign="top" style={{ paddingRight: "0px" }}>
                                                                            <table>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style={{ paddingLeft: '20px' }}>
                                                                                            " Admission No. "
                                                                                            <span className="red">*</span>
                                                                                            <img src={help} title="Admission No. is Unique for entire branch, so no two students should have same Admission No. If you want to have an Admission No. of your own, in configuration settings the value of Auto Admission No has to be set to “False”.  If your configuration value is set to “True”  your Admission No. will be of the mentioned format :  Your Prefix + Academic end Year + Auto number" style={{ height: "16px", width: "16px" }} /> :
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style={{ paddingLeft: '20px' }}>
                                                                                            <input name="admissionno" type="text" maxLength={17} tabIndex={1} />
                                                                                        </td>
                                                                                    </tr>

                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="admissionno" style={{ padding: "5px" }}>
                                <label style={{ width: '100%' }}>
                                    Admission No. <span className="red">*</span>
                                    <img src={help} title="Admission No. is Unique for entire branch, so no two students should have same Admission No. If you want to have an Admission No. of your own, in configuration settings the value of Auto Admission No has to be set to “False”.  If your configuration value is set to “True”  your Admission No. will be of the mentioned format :  Your Prefix + Academic end Year + Auto number" style={{ height: "16px", width: "16px" }} /> :
                                    <Form.Control
                                        type="text"
                                        name='admissionno'
                                        value={admissionno}
                                        onChange={changeHandler}
                                    />
                                    {/* <input className="inputtextadmissionno" type="text" name="admissionno" value={admissionno} onChange={changeHandler} /> */}
                                </label>
                                <label style={{ width: '50%' }}>
                                    Admission Type <span className="red">*</span> :
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label className="custom-control-label" htmlFor="fdate" style={{ width: '50%' }}>
                                    Admission Date <span className="red">*</span>
                                    <img src={help} title="Enter Student Admission date.  It should be below the current date" style={{ height: "16px", width: "16px" }} /> :
                                    <br />
                                    <DatePicker selected={admissiondate ? new Date(admissiondate) : new Date()} maxDate={new Date('2099-12-31')} onChange={(date) => setFormValues({ ...formValues, admissiondate: date })} />
                                </label>
                                <label style={{ width: '65%', float: 'left' }}>
                                    First Name:
                                    <Form.Control
                                        type="text"
                                        name='firstname'
                                        value={firstname}
                                        onChange={changeHandler}
                                    />
                                </label>
                                <label style={{ width: '35%', float: 'right' }}>
                                    Last Name:
                                    <Form.Control
                                        type="text"
                                        name='lastname'
                                        value={lastname}
                                        onChange={changeHandler}
                                    />
                                </label>
                                <label style={{ width: '50%' }}>
                                    Mobile No. :
                                    <Form.Control
                                        type="text"
                                        name='mobileno'
                                        value={mobileno}
                                        onChange={changeHandler}
                                    />
                                </label>
                                <label style={{ width: '50%' }}>
                                    Religion :
                                    <Form.Control
                                        as="select"
                                        value={religion}
                                        name='religion'
                                        onChange={changeHandler}>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Christian">Christian</option>
                                        <option value="Muslim">Muslim</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '50%' }}>
                                    Nationality :
                                    <Form.Control
                                        as="select"
                                        value={nationality}
                                        name='nationality'
                                        onChange={changeHandler}>
                                        <option value="Indian">Indian</option>
                                    </Form.Control>
                                </label>
                                <label className="custom-control-label" htmlFor="fdate" style={{ width: '50%' }}>
                                    DOB :
                                    <DatePicker selected={dob ? new Date(dob) : new Date()} maxDate={new Date('2099-12-31')} onChange={(date) => setFormValues({ ...formValues, dob: date })} />
                                </label>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="admission" style={{ padding: "5px" }}>
                                <label htmlFor="imageInput" style={{ cursor: 'pointer', width: '200px', height: '150px' }}>
                                    {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
                                </label>
                                <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                                <label style={{ width: '100%' }}>
                                    Class :
                                    <Form.Control
                                        as="select"
                                        value={_class}
                                        name='_class'
                                        onChange={changeHandler}>
                                        <option value="Nursery">Nursery</option>
                                        <option value="LKG">LKG</option>
                                        <option value="UKG">UKG</option>
                                        <option value="1st Class">1st Class</option>
                                        <option value="2nd Class">2nd Class</option>
                                        <option value="3rd Class">3rd Class</option>
                                        <option value="4rth Class">4rth Class</option>
                                        <option value="5th Class">5th Class</option>
                                        <option value="6th Class">6th Class</option>
                                        <option value="7th Class">7th Class</option>
                                        <option value="8th Class">8th Class</option>
                                        <option value="9th Class">9th Class</option>
                                        <option value="10th Class">10th Class</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Section :
                                    <Form.Control
                                        as="select"
                                        value={section}
                                        name='section'
                                        onChange={changeHandler}>
                                        <option value="A Section">A Section</option>
                                        <option value="B Section">B Section</option>
                                        <option value="C Section">C Section</option>
                                        <option value="D Section">D Section</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Roll No. :
                                    <Form.Control
                                        type="text"
                                        name='rollno'
                                        value={rollno}
                                        onChange={changeHandler}
                                    />
                                </label>
                                <label style={{ width: '50%' }}>
                                    Caste :
                                    <Form.Control
                                        as="select"
                                        value={caste}
                                        name='caste'
                                        onChange={changeHandler}>
                                        <option value="--Select--">--Select--</option>
                                        <option value="BC">BC</option>
                                        <option value="BC-A">BC-A</option>
                                        <option value="BC-B">BC-B</option>
                                        <option value="BC-C">BC-C</option>
                                        <option value="BC-D">BC-D</option>
                                        <option value="BC-E">BC-E</option>
                                        <option value="OC">OC</option>
                                        <option value="SC">SC</option>
                                        <option value="ST">ST</option>
                                        <option value="Others">Others</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '50%' }}>
                                    Sub Caste :
                                    <Form.Control
                                        type="text"
                                        name='subcaste'
                                        value={subcaste}
                                        onChange={changeHandler}
                                    />
                                </label>
                            </Form.Group>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="otherdetailsleft" style={{ padding: "5px" }}>
                                <label style={{ width: '100%' }}>
                                    Gender :
                                    <input type="radio" name="gender" value="male" />Male
                                    <input type="radio" name="gender" value="female" />Female
                                </label>
                                <label style={{ width: '100%' }}>
                                    Blood Group:
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    First Language :
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Second Language :
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Third Language :
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Mother Tongue :
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Scholarship Applied :
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Admission Reference :
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Elective1 :
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Elective3 :
                                    <Form.Control
                                        as="select"
                                        value={admissiontype}
                                        name='admissiontype'
                                        onChange={changeHandler}>
                                        <option value="Regular">Regular</option>
                                        <option value="IrRegular">IrRegular</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Admission Enquiry Incharge:
                                    <Form.Control
                                        type="text"
                                        name='firstname'
                                        value={firstname}
                                        onChange={changeHandler}
                                    />
                                </label>
                                <label style={{ width: '100%' }}>
                                    Child Info / Samagra ID :
                                    <Form.Control
                                        type="text"
                                        name='lastname'
                                        value={lastname}
                                        onChange={changeHandler}
                                    />
                                </label>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="otherdetailsright" style={{ padding: "5px" }}>
                                <br></br>
                                <label style={{ width: '100%' }}>
                                    Medium :
                                    <Form.Control
                                        as="select"
                                        value={_class}
                                        name='_class'
                                        onChange={changeHandler}>
                                        <option value="English">English</option>
                                        <option value="Telugu">Telugu</option>
                                        <option value="Hindi">Hindi</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Admitted Class :
                                    <Form.Control
                                        as="select"
                                        value={section}
                                        name='section'
                                        onChange={changeHandler}>
                                        <option value="A Section">A Section</option>
                                        <option value="B Section">B Section</option>
                                        <option value="C Section">C Section</option>
                                        <option value="D Section">D Section</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Admitted Section :
                                    <Form.Control
                                        as="select"
                                        value={section}
                                        name='section'
                                        onChange={changeHandler}>
                                        <option value="A Section">A Section</option>
                                        <option value="B Section">B Section</option>
                                        <option value="C Section">C Section</option>
                                        <option value="D Section">D Section</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Student Type :
                                    <Form.Control
                                        as="select"
                                        value={section}
                                        name='section'
                                        onChange={changeHandler}>
                                        <option value="Day Scholar">Day Scholar</option>
                                        <option value="Resident">Resident</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Aadhar Number :
                                    <Form.Control
                                        type="text"
                                        name='rollno'
                                        value={rollno}
                                        onChange={changeHandler}
                                    />
                                </label>
                                <label style={{ width: '100%' }}>
                                    Scholarship Type:
                                    <Form.Control
                                        as="select"
                                        value={caste}
                                        name='caste'
                                        onChange={changeHandler}>
                                        <option value="type1">type1</option>
                                        <option value="Others">Others</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Elective2:
                                    <Form.Control
                                        as="select"
                                        value={caste}
                                        name='caste'
                                        onChange={changeHandler}>
                                        <option value="type1">type1</option>
                                        <option value="Others">Others</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Elective4:
                                    <Form.Control
                                        as="select"
                                        value={caste}
                                        name='caste'
                                        onChange={changeHandler}>
                                        <option value="type1">type1</option>
                                        <option value="Others">Others</option>
                                    </Form.Control>
                                </label>
                                <label style={{ width: '100%' }}>
                                    Board Admission No. :
                                    <Form.Control
                                        type="text"
                                        name='subcaste'
                                        value={subcaste}
                                        onChange={changeHandler}
                                    />
                                </label>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row" style={{ padding: "15px" }}>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-personalinformation-tab" data-bs-toggle="tab" data-bs-target="#nav-personalinformation" type="button" role="tab" aria-controls="nav-personalinformation" aria-selected="true">Personal Information</button>
                                <button className="nav-link" id="nav-Parentdetails-tab" data-bs-toggle="tab" data-bs-target="#nav-parentdetails" type="button" role="tab" aria-controls="nav-parentdetails" aria-selected="false">Parent Details</button>
                                <button className="nav-link" id="nav-Transportation-tab" data-bs-toggle="tab" data-bs-target="#nav-transportation" type="button" role="tab" aria-controls="nav-transportation" aria-selected="false">Transportation</button>
                                <button className="nav-link" id="nav-documents-tab" data-bs-toggle="tab" data-bs-target="#nav-documents" type="button" role="tab" aria-controls="nav-documents" aria-selected="false">Documents</button>
                                <button className="nav-link" id="nav-health-tab" data-bs-toggle="tab" data-bs-target="#nav-health" type="button" role="tab" aria-controls="nav-health" aria-selected="false">Health</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-personalinformation" role="tabpanel" aria-labelledby="nav-personalinformation-tab" tabindex="0">
                                <div className="row">
                                    <div className="col">
                                        <div id="presentaddress">
                                            <h5>Present Address</h5>
                                            <label style={{ width: '100%' }}>
                                                H.No. :
                                                <Form.Control
                                                    type="text"
                                                    name='presenthno'
                                                    value={presenthno}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Street. :
                                                <Form.Control
                                                    type="text"
                                                    name='presentstreet'
                                                    value={presentstreet}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Area. :
                                                <Form.Control
                                                    type="text"
                                                    name='presentarea'
                                                    value={presentarea}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Village. :
                                                <Form.Control
                                                    type="text"
                                                    name='presentvillage'
                                                    value={presentvillage}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                City. :
                                                <Form.Control
                                                    type="text"
                                                    name='presentcity'
                                                    value={presentcity}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Country. :
                                                <Form.Control
                                                    type="text"
                                                    name='presentcountry'
                                                    value={presentcountry}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                State. :
                                                <Form.Control
                                                    type="text"
                                                    name='presentstate'
                                                    value={presentstate}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Pincode. :
                                                <Form.Control
                                                    type="text"
                                                    name='presentpincode'
                                                    value={presentpincode}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" name="chkprmaddress" checked={chkprmaddress} className="custom-control-input" id="customCheck" onChange={chksprmadrs} />
                                                <label className="custom-control-label" htmlFor="customCheck">Same with Permanent Address</label>
                                            </div>
                                        </div>
                                        <div id="permanentaddress">
                                            <h5>Present Address</h5>
                                            <label style={{ width: '100%' }}>
                                                H.No. :
                                                <Form.Control
                                                    type="text"
                                                    name='permanenthno'
                                                    value={permanenthno}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Street. :
                                                <Form.Control
                                                    type="text"
                                                    name='permanentstreet'
                                                    value={permanentstreet}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Area. :
                                                <Form.Control
                                                    type="text"
                                                    name='permanentarea'
                                                    value={permanentarea}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Village. :
                                                <Form.Control
                                                    type="text"
                                                    name='permanentvillage'
                                                    value={permanentvillage}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                City. :
                                                <Form.Control
                                                    type="text"
                                                    name='permanentcity'
                                                    value={permanentcity}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Country. :
                                                <Form.Control
                                                    type="text"
                                                    name='permanentcountry'
                                                    value={permanentcountry}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                State. :
                                                <Form.Control
                                                    type="text"
                                                    name='permanentstate'
                                                    value={permanentstate}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                            <label style={{ width: '100%' }}>
                                                Pincode. :
                                                <Form.Control
                                                    type="text"
                                                    name='permanentpincode'
                                                    value={permanentpincode}
                                                    onChange={changeHandler}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5>Contact Information</h5>
                                        <label style={{ width: '100%' }}>
                                            Email Address. :
                                            <Form.Control
                                                type="text"
                                                name='email'
                                                value={email}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Contact No. :
                                            <Form.Control
                                                type="text"
                                                name='contactno'
                                                value={contactno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <h5>Identification Marks</h5>
                                        <label style={{ width: '100%' }}>
                                            Identification Mark1 :
                                            <Form.Control
                                                type="text"
                                                name='identificationmark1'
                                                value={identificationmark1}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Identification Mark2 :
                                            <Form.Control
                                                type="text"
                                                name='identificationmark2'
                                                value={identificationmark2}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <h5>Previous Institution Information</h5>
                                        <label style={{ width: '100%' }}>
                                            Previous Institution Name :
                                            <Form.Control
                                                type="text"
                                                name='previousinstitutionname'
                                                value={previousinstitutionname}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Previous Institution Class :
                                            <Form.Control
                                                type="text"
                                                name='previousinstitutionclass'
                                                value={previousinstitutionclass}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Previous Institution Board / University :
                                            <Form.Control
                                                type="text"
                                                name='previousinstitutionboard'
                                                value={previousinstitutionboard}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Previous Institution Total Marks :
                                            <Form.Control
                                                type="text"
                                                name='previousinstitutiontotalmarks'
                                                value={previousinstitutiontotalmarks}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Previous Institution Percentage :
                                            <Form.Control
                                                type="text"
                                                name='previousinstitutionpercentage'
                                                value={previousinstitutionpercentage}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-parentdetails" role="tabpanel" aria-labelledby="nav-parentdetails-tab" tabindex="0">
                                <h5>Father and Mother or Guardian Details</h5>
                                <hr />
                                <div className="row">
                                    <div className="col">
                                        <h5>Father</h5>
                                        <hr />
                                        <label style={{ width: '100%' }}>
                                            Name :
                                            <Form.Control
                                                type="text"
                                                name='fathername'
                                                value={fathername}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            RelationShip :
                                            <Form.Control
                                                as="select"
                                                value={fatherrelationship}
                                                name='fatherrelationship'
                                                onChange={changeHandler}>
                                                <option value="Father">Father</option>
                                                <option value="Mother">Mother</option>
                                                <option value="Grand Father">Grand Father</option>
                                                <option value="Grand Mother">Grand Mother</option>
                                                <option value="Guardian">Guardian</option>
                                                <option value="Brother">Brother</option>
                                                <option value="Sister">Sister</option>
                                            </Form.Control>
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Gender :
                                            <input type="radio" name="fathergender" value="male" />Male
                                            <input type="radio" name="fathergender" value="female" />Female
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Qualification :
                                            <Form.Control
                                                type="text"
                                                name='fatherqualification'
                                                value={fatherqualification}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Occupation :
                                            <Form.Control
                                                type="text"
                                                name='fatheroccupation'
                                                value={fatheroccupation}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Email Address :
                                            <Form.Control
                                                type="text"
                                                name='fatheremailaddress'
                                                value={fatheremailaddress}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Contact Number. :
                                            <Form.Control
                                                type="text"
                                                name='fathercontactno'
                                                value={fathercontactno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Mobile Number. :
                                            <Form.Control
                                                type="text"
                                                name='fathermobileno'
                                                value={fathermobileno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Aadhar Number. :
                                            <Form.Control
                                                type="text"
                                                name='fatheraadharno'
                                                value={fatheraadharno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Bank Name :
                                            <Form.Control
                                                type="text"
                                                name='fatherbankname'
                                                value={fatherbankname}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Account Number :
                                            <Form.Control
                                                type="text"
                                                name='fatherbankacno'
                                                value={fatherbankacno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            IFSC :
                                            <Form.Control
                                                type="text"
                                                name='fatherbankifsc'
                                                value={fatherbankifsc}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            RationCard Number / Rice Card Number :
                                            <Form.Control
                                                type="text"
                                                name='rationcardno'
                                                value={rationcardno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <h5>Mother</h5>
                                        <hr />
                                        <label style={{ width: '100%' }}>
                                            Name :
                                            <Form.Control
                                                type="text"
                                                name='mothername'
                                                value={mothername}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            RelationShip :
                                            <Form.Control
                                                as="select"
                                                value={motherrelationship}
                                                name='motherrelationship'
                                                onChange={changeHandler}>
                                                <option value="Mother">Mother</option>
                                                <option value="Father">Father</option>
                                                <option value="Grand Father">Grand Father</option>
                                                <option value="Grand Mother">Grand Mother</option>
                                                <option value="Guardian">Guardian</option>
                                                <option value="Brother">Brother</option>
                                                <option value="Sister">Sister</option>
                                            </Form.Control>
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Gender :
                                            <input type="radio" name="mothergender" value="male" />Male
                                            <input type="radio" name="mothergender" value="female" />Female
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Qualification :
                                            <Form.Control
                                                type="text"
                                                name='motherqualification'
                                                value={motherqualification}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Occupation :
                                            <Form.Control
                                                type="text"
                                                name='motheroccupation'
                                                value={motheroccupation}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Email Address :
                                            <Form.Control
                                                type="text"
                                                name='motheremailaddress'
                                                value={motheremailaddress}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Contact Number. :
                                            <Form.Control
                                                type="text"
                                                name='mothercontactno'
                                                value={mothercontactno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Mobile Number. :
                                            <Form.Control
                                                type="text"
                                                name='mothermobileno'
                                                value={mothermobileno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Aadhar Number. :
                                            <Form.Control
                                                type="text"
                                                name='motheraadharno'
                                                value={motheraadharno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Bank Name :
                                            <Form.Control
                                                type="text"
                                                name='motherbankname'
                                                value={motherbankname}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Account Number :
                                            <Form.Control
                                                type="text"
                                                name='motherbankacno'
                                                value={motherbankacno}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            IFSC :
                                            <Form.Control
                                                type="text"
                                                name='motherbankifsc'
                                                value={motherbankifsc}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-transportation" role="tabpanel" aria-labelledby="nav-transportation-tab" tabindex="0">
                                <h5>Transportation Details</h5>
                                <hr />
                                <div className="row">
                                    <div className="col">
                                        <label style={{ width: '100%' }}>
                                            Route Name :
                                            <Form.Control
                                                as="select"
                                                value={motherrelationship}
                                                name='motherrelationship'
                                                onChange={changeHandler}>
                                                <option value="Select">Select</option>
                                            </Form.Control>
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Vehicle Number :
                                            <Form.Control
                                                as="select"
                                                value={motherrelationship}
                                                name='motherrelationship'
                                                onChange={changeHandler}>
                                                <option value="Select">Select</option>
                                            </Form.Control>
                                        </label>
                                    </div>
                                    <div className="col">
                                        <label style={{ width: '100%' }}>
                                            Location :
                                            <Form.Control
                                                as="select"
                                                value={motherrelationship}
                                                name='motherrelationship'
                                                onChange={changeHandler}>
                                                <option value="Select">Select</option>
                                            </Form.Control>
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Route Type :
                                            <Form.Control
                                                as="select"
                                                value={motherrelationship}
                                                name='motherrelationship'
                                                onChange={changeHandler}>
                                                <option value="Select">Select</option>
                                            </Form.Control>
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="nav-documents" role="tabpanel" aria-labelledby="nav-documents-tab" tabindex="0">
                                <h5>Documents & Certificates</h5>
                                <hr />
                                <table>
                                    <th>Document</th>
                                    <th>Reference No.</th>
                                    <tr>
                                        <td><input type="text" name="birthcertificate" value={birthcertificate} onChange={changeHandler} /></td>
                                    </tr>
                                    <th>remarks</th>
                                    <tr>Birth Certificate</tr>

                                    <tr>Transfer Certificate</tr>
                                    <tr>Residence Certificate</tr>

                                </table>
                            </div>
                            <div className="tab-pane fade" id="nav-health" role="tabpanel" aria-labelledby="nav-health-tab" tabindex="0">
                                <h5 className="h5">Health Record</h5>
                                <hr />
                                <div className="row">
                                    <div className="col">
                                        <label style={{ width: '100%' }}>
                                            Height :
                                        </label>
                                        <div className="row">
                                            <div className="col">
                                                <label style={{ width: '100%' }}>
                                                    Infeet :
                                                    <Form.Control
                                                        type="text"
                                                        name='motherbankifsc'
                                                        value={motherbankifsc}
                                                        onChange={changeHandler}
                                                    />
                                                </label>
                                            </div>
                                            <div className="col">
                                                <label style={{ width: '100%' }}>
                                                    Inches :
                                                    <Form.Control
                                                        type="text"
                                                        name='motherbankifsc'
                                                        value={motherbankifsc}
                                                        onChange={changeHandler}
                                                    />
                                                </label>
                                            </div>
                                            <div className="col">
                                                <label style={{ width: '100%' }}>
                                                    In Cms :
                                                    <Form.Control
                                                        type="text"
                                                        name='motherbankifsc'
                                                        value={motherbankifsc}
                                                        onChange={changeHandler}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label style={{ width: '100%' }}>
                                                    Right :
                                                    <Form.Control
                                                        type="text"
                                                        name='motherbankifsc'
                                                        value={motherbankifsc}
                                                        onChange={changeHandler}
                                                    />
                                                </label>
                                            </div>
                                            <div className="col">
                                                <label style={{ width: '100%' }}>
                                                    Left :
                                                    <Form.Control
                                                        type="text"
                                                        name='motherbankifsc'
                                                        value={motherbankifsc}
                                                        onChange={changeHandler}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <label style={{ width: '100%' }}>
                                            Oral Hygiene :
                                            <Form.Control
                                                type="text"
                                                name='motherbankifsc'
                                                value={motherbankifsc}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Medication Undergoing,if any :
                                            <Form.Control
                                                type="text"
                                                name='motherbankifsc'
                                                value={motherbankifsc}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <label style={{ width: '100%' }}>
                                            Weight :
                                        </label>
                                        <label style={{ width: '15%' }}>
                                            In Kgs :
                                            <Form.Control
                                                type="text"
                                                name='motherbankifsc'
                                                value={motherbankifsc}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Dental Hygiene :
                                            <Form.Control
                                                type="text"
                                                name='motherbankifsc'
                                                value={motherbankifsc}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Specific Aliments,if any :
                                            <Form.Control
                                                type="text"
                                                name='motherbankifsc'
                                                value={motherbankifsc}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                        <label style={{ width: '100%' }}>
                                            Is PH ? if yes please specifiy :
                                            <Form.Control
                                                type="text"
                                                name='motherbankifsc'
                                                value={motherbankifsc}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isButtonDisabled} >
                        {button ? ("Save") : ("Update")}
                    </button>
                </Form>
            </div>
        </div >
        </>
    );
}


