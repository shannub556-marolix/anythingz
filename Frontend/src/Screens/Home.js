import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { mgmtsaleAction } from "../Actions/mgmtsaleAction";
import { Doughnut } from "react-chartjs-2";
import { BarChart } from '../Charts/BarChart';
import '../css/Home.css';
import Sidebar from '../Components/sidebar';
import { mgmtmilkAction } from '../Actions/mgmtmilkAction';
import { DoughnutChart } from "../Charts/DoughnutChart";
import { LineChart } from "../Charts/LineChart";
import { PieChart } from "../Charts/PieChart";
import Navbar2 from "../Components/Navbar2";



export default function Home(props) {
  const [text, setText] = useState('Enter text here');
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  }

  const handleclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleclicklo = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };


  return (
    <>
            <div className="cls_dash_main">
                <div className="cls_dash_container cls_flex_justify_spacebet">
                    <label htmlFor="" className="cls_dash_container_label">Overview</label>
                    <button className="cls_dash_btn">This Month</button>
                </div>
                <div className="cls_dash_container">
                    <div className="cls_dash_content">
                        <div className="cls_dash_content_left">
                            <label htmlFor="" className="cls_dash_content_label">8</label>
                            <label htmlFor="" className="cls_dash_content_label1">Customer Acquired</label>

                        </div>
                        <div className="cls_dash_content_right">
                            <img src="/images/help 1.png" alt=""  width={"24px"}/>

                        </div>

                    </div>

                    <div className="cls_dash_content">
                        <div className="cls_dash_content_left">
                            <label htmlFor="" className="cls_dash_content_label">8</label>
                            <label htmlFor="" className="cls_dash_content_label1">Customer Acquired</label>

                        </div>
                        <div className="cls_dash_content_right">
                            <img src="/images/help 1.png" alt=""  width={"24px"}/>

                        </div>

                    </div>
                    <div className="cls_dash_content">
                        <div className="cls_dash_content_left">
                            <label htmlFor="" className="cls_dash_content_label">8</label>
                            <label htmlFor="" className="cls_dash_content_label1">Customer Acquired</label>

                        </div>
                        <div className="cls_dash_content_right">
                            <img src="/images/help 1.png" alt=""  width={"24px"}/>

                        </div>

                    </div>

                    <div className="cls_dash_content">
                        <div className="cls_dash_content_left">
                            <label htmlFor="" className="cls_dash_content_label">8</label>
                            <label htmlFor="" className="cls_dash_content_label1">Customer Acquired</label>

                        </div>
                        <div className="cls_dash_content_right">
                            <img src="/images/help 1.png" alt=""  width={"24px"}/>

                        </div>

                    </div>



                </div>

                <div className="cls_dash_container1">
                    <div className="cls_rec_order">
                        <label htmlFor="" className="cls_rec_label">Recent Orders</label>
                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                    </div>

                    <div className="cls_rec_order1">
                    <label htmlFor="" className="cls_rec_label">New Signups</label>
                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>



                    

                    </div>

                    <div className="cls_rec_order2">
                    <label htmlFor="" className="cls_rec_label">Wallet Transactions</label>
                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>


                    </div>

                    <div className="cls_rec_order3">
                    <label htmlFor="" className="cls_order_label">6 Orders Today</label>
                    <button className="cls_order_btn">^ 100 % compared yesterday (as of 3:58PM)</button>


                    </div>

                </div>

                <div className="cls_dash_container2">
                    <div className="cls_review_outline">
                        <label htmlFor="" className="cls_rec_label">Latest Reviews</label>
                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                    </div>

                    <div className="cls_review_outline">
                        <label htmlFor="" className="cls_rec_label">Top Stores</label>
                        <label htmlFor="" className="cls_rec_label1">(This Month)</label>
                        <div className="cls_review">
                        <div className="cls_review_right">
                                <button className="cls_review_btn1">1</button>

                            </div>
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label1">MANASA MUTTON AND CHICKEN CENTER</label>
                                <label htmlFor="" className="cls_review_label2"><span className="cls_review_span1">$2222.00</span>revenue with 3 orders</label>

                            </div>
                            

                        </div>

                        <div className="cls_review">
                        <div className="cls_review_right">
                                <button className="cls_review_btn1">1</button>

                            </div>
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label1">MANASA MUTTON AND CHICKEN CENTER</label>
                                <label htmlFor="" className="cls_review_label2"><span className="cls_review_span1">$2222.00</span>revenue with 3 orders</label>

                            </div>
                            

                        </div>

                        <div className="cls_review">
                        <div className="cls_review_right">
                                <button className="cls_review_btn1">1</button>

                            </div>
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label1">MANASA MUTTON AND CHICKEN CENTER</label>
                                <label htmlFor="" className="cls_review_label2"><span className="cls_review_span1">$2222.00</span>revenue with 3 orders</label>

                            </div>
                            

                        </div>

                        <div className="cls_review">
                        <div className="cls_review_right">
                                <button className="cls_review_btn1">1</button>

                            </div>
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label1">MANASA MUTTON AND CHICKEN CENTER</label>
                                <label htmlFor="" className="cls_review_label2"><span className="cls_review_span1">$2222.00</span>revenue with 3 orders</label>

                            </div>
                            

                        </div>

                    </div>

                    <div className="cls_review_outline">
                        <label htmlFor="" className="cls_rec_label">Notes</label>

                        <input type="text"  className="cls_review_input" placeholder="Add a note here"/>                    

                    </div>

                </div>

            </div>
    </>
  )
}
