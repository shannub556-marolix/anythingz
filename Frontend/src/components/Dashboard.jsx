import React from "react";

const Dashboard=()=>{
    return(
        <div className="cls_dash">

        <div class="cls_nav">
            <div class="cls_container">
               
                <div class="cls_nav_left">
                    <a href="/">
                        Dashboard
                    </a>

                </div>
                <div class="cls_nav_right cls_mobile_dn">
                    <div class="cls_div">
                        <div class="navbar_new">
                            <div class="navbar">
                               
                                <div class="dropdown">
                                    <button class="dropbtn">
                                    Stores
                                        <i class="fa fa-caret-down"></i>
                                    </button>
                                    <div class="dropdown-content">
                                    <a href="/dashboard/store_management">Store Management</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>

                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="dropbtn">
                                        <a style={{padding:"0px"}} href="/">  Items & Menu</a>
                                        <i class="fa fa-caret-down"></i>
                                    </button>
                                    <div class="dropdown-content">
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="dropbtn">
                                        Users
                                        <i class="fa fa-caret-down"></i>
                                    </button>
                                    <div class="dropdown-content">
                                    <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>

                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="dropbtn">
                                        Orders
                                        <i class="fa fa-caret-down"></i>
                                    </button>
                                    <div class="dropdown-content">
                                    <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <button class="dropbtn">
                                    Promotions
                                        <i class="fa fa-caret-down"></i>
                                    </button>
                                    <div class="dropdown-content">
                                    <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <button class="dropbtn">
                                    Transactions
                                        <i class="fa fa-caret-down"></i>
                                    </button>
                                    <div class="dropdown-content">
                                    <a href="/">Link</a>
                                        <a href="/">Link</a>
                                        <a href="/">Link</a>
                                    </div>
                                </div>


                                <a href="/" class="cls_nav_btn">Log Out</a>
                            </div>
                        </div>



                    </div>

                </div>
              
            </div>

        </div>

        <div className="cls_dash_main">
            <div className="cls_dash_container">
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
           

        </div>
    )
}

export default Dashboard