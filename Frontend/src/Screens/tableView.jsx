import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar2 from "../Components/Navbar2";
import axios from 'axios';
import '../css/Home.css';
import Sidebar from '../Components/sidebar';
import { useNavigate } from "react-router-dom";
import { post, API_URL, setAccessToken, clearAccessToken } from '../Components/api';



export default function TableView(props) {

    const [mode, setMode] = useState("light");
    const navigate = useNavigate();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                const response = await post('/gettablemaster', { mode: 1 });
                setTableData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchDataFromAPI();
    }, []);

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };
    const [selectedItems, setSelectedItems] = useState([]);
    const handleItemClick = (id) => {
        // Toggle selection for the clicked item
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
            //navigate to next screen with ITEM MASTER AND TRANSACTIONS.
        } else {
            setSelectedItems([...selectedItems, id]);
            navigate(`./orders/${id}`);
        }
    };


    return (
        <>
            {/* <Navbar2 title="VST TECHONOLOGIES" mode={mode} toggleMode={toggleMode} /> */}
            <div className="d-flex" style={{ gap: "10px", background: '#f8f9fc' }}>
                <Sidebar />
                <div className="row" style={{ background: '#f8f9fc' }}>
                    <div className="col">
                        <div className="container" style={{ marginTop: "50px" }}>
                            <div className="row">
                                <div className="col-md-3"></div>

                                <div className="d-flex justify-content-left">

                                    <h2>Table View</h2>

                                </div>
                                <div className="container text-center">
                                    <div className="row row-cols-10 row-cols-lg-10 g-3 g-lg-3">
                                        {tableData.map((item) => (
                                            <div className="col" key={item.id}>
                                                <div
                                                    className={`p-3 border rounded ${selectedItems.includes(item.id) ? "selected-item" : ""
                                                        }`}
                                                    onClick={() => handleItemClick(item.id)}
                                                    style={selectedItems.includes(item.id) ? selectedStyles : {}}
                                                >
                                                    {item.table_name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const selectedStyles = {
    backgroundColor: '#090464',
    color: '#fff',
    /* Add any other styles you want for selected items */
};

