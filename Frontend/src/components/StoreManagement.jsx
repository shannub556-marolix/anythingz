const StoreManagement=()=>{
    return(

        <div className="cls_store_management_outline">
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
                <div className="cls_store_container">
                    <div className="cls_store_left">
                        <label htmlFor="" className="cls_store_label">Store Management</label>
                         
                    </div>

                    <div className="cls_store_right">
                        <button className="cls_store_btn">Add New Store</button>
                        <button className="cls_store_btn">Sort Stores</button>
                        <button className="cls_store_btn">Pending Approval</button>
                        <button className="cls_store_btn">Reset All Filters</button>

                    </div>

                </div>

                <div className="cls_store_container1">

                    <div className="cls_store_cont">
                        <div className="cls_store_left">
                            <input type="text" className="cls_store_input" placeholder="Search Here "/>

                        </div>

                        <div className="cls_store_right">
                            <button className="cls_store_btn1">Export as CSV</button>
                            <select name="" id="" className="cls_store_select">
                                <option value="10">10</option>
                            </select>

                        </div>

                    </div>

                    <div className="cls_store_table">
                        <table>
                            <thead>
                                <tr>
                                <th style={{width:"10%"}}>Image</th>
                                <th style={{width:"24%"}}>Name</th>
                                <th style={{width:"20%"}}>Operational Areas</th>
                                <th style={{width:"20%"}}>Store Owner</th>
                                <th style={{width:"14%"}}>Delivery Partner</th>
                                <th style={{width:"12%"}}>Joined Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td><img src="/images/waffle_img.jpg" alt=""  width={"73px"}/></td>
                                <td style={{fontSize:"14px",fontWeight:"650"}}>London Waffle co</td>
                                <td><label htmlFor="" className="cls_table_label">Areas:Karimnagar, Boolanger manglore </label>
                                <label htmlFor="" className="cls_table_label">Zone:KARIMNAGAR</label></td>
                                <td style={{color:"orangered",fontSize:"14px"}}>Paka Santosh Kumar</td>
                                <td>Multiple</td>
                                <td style={{color:"#a38b8b"}}>Oct 07,2022</td>
                                </tr>
                                <tr>
                                <td><img src="/images/waffle_img.jpg" alt=""  width={"73px"}/></td>
                                <td style={{fontSize:"14px",fontWeight:"650"}}>London Waffle co</td>
                                <td><label htmlFor="" className="cls_table_label">Areas:Karimnagar, Boolanger manglore </label>
                                <label htmlFor="" className="cls_table_label">Zone:KARIMNAGAR</label></td>
                                <td style={{color:"orangered",fontSize:"14px"}}>Paka Santosh Kumar</td>
                                <td>Multiple</td>
                                <td>Oct 07,2022</td>
                                </tr>
                                <tr>
                                <td><img src="/images/waffle_img.jpg" alt=""  width={"73px"}/></td>
                                <td style={{fontSize:"14px",fontWeight:"650"}}>London Waffle co</td>
                                <td><label htmlFor="" className="cls_table_label">Areas:Karimnagar, Boolanger manglore </label>
                                <label htmlFor="" className="cls_table_label">Zone:KARIMNAGAR</label></td>
                                <td style={{color:"orangered",fontSize:"14px"}}>Paka Santosh Kumar</td>
                                <td>Multiple</td>
                                <td>Oct 07,2022</td>
                                </tr>
                                <tr>
                                <td><img src="/images/waffle_img.jpg" alt=""  width={"73px"}/></td>
                                <td style={{fontSize:"14px",fontWeight:"650"}}>London Waffle co</td>
                                <td><label htmlFor="" className="cls_table_label">Areas:Karimnagar, Boolanger manglore </label>
                                <label htmlFor="" className="cls_table_label">Zone:KARIMNAGAR</label></td>
                                <td style={{color:"orangered",fontSize:"14px"}}>Paka Santosh Kumar</td>
                                <td>Multiple</td>
                                <td>Oct 07,2022</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>

                </div>

            </div>

        </div>

    


    )
}


export default StoreManagement