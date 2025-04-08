import '../../css/ProductPricing.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { get, post } from '../../Components/api';
import { BiEdit, BiTrash } from "react-icons/bi";
import Spinner from '../../Components/Spinner';
import Utils from '../../Components/Utils';

const ProductPricing = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const [pageNumber, setPageNumber] = useState([]);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleItemClick = (itemid) => {
        navigate('/addProductPricing', { state: { ID: '' } });
    };
    const PriviewReport = () => {
        console.log('Test ');
        navigate('/ReportPreview');
        // <ReportPreview data={CategoryData} reportTitle="User Report" />
    };

    const [ProductsData, setProductsData] = useState([]); //Change this 
    const [filter, setFilter] = useState('');
    const handleResetClick = () => {
        setFilter("");
        setPageSize(parseInt(10));
        setCurrentPage(1);
    };
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        console.log(filter);
    };
    // const filteredData = CategoryData.filter((store) => {
    //     const storeName = store?.STORENAME?.toLowerCase();
    //     const filterText = filter.toLowerCase();
    //     return storeName?.includes(filterText) ?? false;
    // });
    const [filteredData, setFilteredData] = useState([]);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                setLoading(true);
                const response = await get('/productprice');//Change this 
                setProductsData(response.data.Data);  //Change this 
                //console.log('response.data.Data'+response.data.Data);
            } catch (error) {
                alert('Error fetching Products:', error);//Change this 
            }
            finally {
                setLoading(false);
            }
        }
        fetchDataFromAPI();
    }, [reload]);
    useEffect(() => {
        console.log('Filter:', filter);
        console.log('ProductsData:', ProductsData);//Change this 
        // const filtered = ProductsData.filter((product) => {
        //     const filterText = filter?.toLowerCase() || "";
        //     return product?.PRODUCTNAME?.toString().toLowerCase().includes(filterText);
        // });
        const filtered = ProductsData;//Change this 
        console.log('Filtered Data:', filtered);
        setFilteredData(filtered);
    }, [filter, ProductsData]);//Change this 

    useEffect(() => {
        const pages = [];
        for (let i = 1; i <= Math.ceil(filteredData.length / pageSize); i++) {
            pages.push(i);
        }
        setPageNumber(pages);
    }, [filteredData, pageSize]);


    const handleReload = () => {
        setReload(!reload);
    };
    const indexOfLastRecord = currentPage * pageSize;
    const indexOfFirstRecord = indexOfLastRecord - pageSize;
    const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handlePageSizeChange = (e) => {
        setPageSize(parseInt(e.target.value));
        setCurrentPage(1);
    };



    const UpdateItem = async (id,storeid) => {
        navigate('/addProductPricing', { state: { ID: id,STOREID:storeid } });//Change this 
    };
    const removeItem = async (id,storeid) => {
        try {
            setButtonDisabled(true);
            const response = await post('/productprice/delete', { "productid": id,"storeid":storeid });//Change this 
            console.log("remove response: " + response);
            if (response.status === 200) {
                alert(response.data.Data);
                handleReload();
            } else {
                alert('Failed to delete Product Price');//Change this 
            }
            setTimeout(() => {
                setButtonDisabled(false);
            }, 2000);
        } catch (error) {
            alert('Error deleting Product Price:', error);//Change this 
        }
    };

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
                                <label htmlFor="" className="cls_store_label">Manage Product Prices</label>
                            </div>
                            <div className="cls_store_right">
                                <button className="cls_store_btn" onClick={() => { handleItemClick() }}>Add Product Price</button>
                                <button className="cls_store_btn" onClick={() => { handleResetClick() }}>Reset All Filters</button>
                            </div>
                        </div>
                        <div className="cls_store_container1">
                            <div className="cls_store_cont">
                                <div className="cls_store_left">
                                    <input type="text" id="search_input" className="cls_store_input" placeholder="Search Here " value={filter} onChange={handleFilterChange} />
                                </div>
                                <div className="cls_store_right">
                                    <button className="cls_store_btn1">Export as CSV</button>
                                    <select name="pages" id="" className="cls_store_select" value={pageSize} onChange={handlePageSizeChange}>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>

                            </div>

                            <div className="cls_store_table">
                                <table>
                                    <thead className='thead'>
                                        <tr>
                                            <th style={{ width: "10%", color: "#FFF" }}>Image</th>
                                            <th style={{ width: "25%", color: "#FFF" }}>Product Name</th>
                                            <th style={{ width: "15%", color: "#FFF" }}>Price with Tax</th>
                                            <th style={{ width: "10%", color: "#FFF" }}>Start Date</th>
                                            <th style={{ width: "10%", color: "#FFF" }}>End Date</th>
                                            <th style={{ width: "10%", color: "#FFF" }}>Store</th>
                                            <th style={{ width: "10%", color: "#FFF" }}>Price</th>
                                            <th style={{ width: "10%", color: "#FFF" }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentRecords.map((product) => (
                                            product ? (
                                                <tr key={product.PRODUCTID}>
                                                    <td><img src="/images/waffle_img.jpg" alt="" width={"73px"} /></td>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>{product.PRODUCTNAME}</td>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>{product.PRICEWITHTAX}</td>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>{Utils.getDate(product.STARTDATE)}</td>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>{Utils.getDate(product.ENDDATE)}</td>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>{product.STORENAME}</td>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>{product.PRICE}</td>
                                                    <td style={{ color: "#a38b8b" }}>
                                                        <div className="row">
                                                            <div className="col">
                                                                <BiEdit size={32} onClick={() => UpdateItem(product.PRODUCTID,product.STOREID)} color="green"/>
                                                            </div>
                                                            <div className="col">
                                                                <BiTrash size={32} onClick={() => removeItem(product.PRODUCTID,product.STOREID)} color="red"/>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <td colSpan={7}>No data available</td>
                                                </tr>
                                            )
                                        ))}
                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>

                </div>
            )}
        </div>

    )
}
export default ProductPricing