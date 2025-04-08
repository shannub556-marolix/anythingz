import '../../css/Stores.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { get, post } from '../../Components/api';
import { BiEdit, BiTrash } from "react-icons/bi";
import Spinner from '../../Components/Spinner';

const Vstores = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const [pageNumber, setPageNumber] = useState([]);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleItemClick = (itemid) => {
        navigate('/addStores', { state: { STOREID: '' } });
    };
    const PriviewReport = () => {
        console.log('Test ');
        navigate('/ReportPreview');
        // <ReportPreview data={StoresData} reportTitle="User Report" />
    };
    
    const [StoresData, setStoresData] = useState([]);
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
    // const filteredData = StoresData.filter((store) => {
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
                const response = await get('/stores');
                setStoresData(response.data.Data);
            } catch (error) {
                alert('Error fetching Stores:', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchDataFromAPI();
    }, [reload]);
    useEffect(() => {
        console.log('Filter:', filter);
        console.log('StoresData:', StoresData);

        const filtered = StoresData.filter((store) => {
            const filterText = filter?.toLowerCase() || "";
            return store?.STORENAME?.toString().toLowerCase().includes(filterText);
        });

        console.log('Filtered Data:', filtered);
        setFilteredData(filtered);
    }, [filter, StoresData]);

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



    const UpdateItem = async (id) => {
        navigate('/addStores', { state: { STOREID: id } });
    };
    const removeItem = async (id) => {
        try {
            setButtonDisabled(true);
            const response = await post('/stores/delete', { "STOREID": id });
            console.log("remove response: " + response);
            if (response.status === 200) {
                alert(response.data.Data);
                handleReload();
            } else {
                alert('Failed to delete Store');
            }
            setTimeout(() => {
                setButtonDisabled(false);
            }, 2000);
        } catch (error) {
            alert('Error deleting Store:', error);
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
                                <label htmlFor="" className="cls_store_label">Store Management</label>

                            </div>

                            <div className="cls_store_right">
                                <button className="cls_store_btn" onClick={() => { handleItemClick() }}>Add New Store</button>
                                <button className="cls_store_btn">Sort Stores</button>
                                <button className="cls_store_btn" onClick={() => { PriviewReport() }}>Pending Approval</button>
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
                                            <th style={{ width: "10%",color:"#FFF" }}>Image</th>
                                            <th style={{ width: "24%",color:"#FFF" }}>Name</th>
                                            <th style={{ width: "15%",color:"#FFF" }}>Operational Areas</th>
                                            <th style={{ width: "15%",color:"#FFF" }}>Store Owner</th>
                                            <th style={{ width: "14%",color:"#FFF" }}>Delivery Partner</th>
                                            <th style={{ width: "12%",color:"#FFF" }}>Joined Date</th>
                                            <th style={{ width: "10%",color:"#FFF" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentRecords.map((store) => (
                                            store ? (
                                                <tr key={store.STOREID}>
                                                    <td><img src="/images/waffle_img.jpg" alt="" width={"73px"} /></td>
                                                    <td style={{ fontSize: "14px", fontWeight: "650" }}>{store.STORENAME}</td>
                                                    <td>
                                                        <label htmlFor="" className="cls_table_label">{store.FULL_ADDRESS}</label>
                                                        <label htmlFor="" className="cls_table_label">Zone:{store.ZONE}</label>
                                                    </td>
                                                    <td style={{ color: "orangered", fontSize: "14px" }}>{store.DESCRIPTION}</td>
                                                    <td>Multiple</td>
                                                    <td style={{ color: "#a38b8b" }}>date</td>
                                                    <td style={{ color: "#a38b8b" }}>
                                                        <div className="row">
                                                            <div className="col">
                                                                <BiEdit size={32} onClick={() => UpdateItem(store.STOREID)} color="green" />
                                                            </div>
                                                            <div className="col">
                                                                <BiTrash size={32} onClick={() => removeItem(store.STOREID)} color="red" />
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
export default Vstores