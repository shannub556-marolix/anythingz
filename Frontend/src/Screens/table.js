import React, { useEffect, useState } from "react";
import { loadcustAction, saleorderAction } from "../Actions/saleorderAction";
import { useDispatch, useSelector } from 'react-redux';
import DataTable from "react-data-table-component";
import { tableCustomStyles } from '../Components/tablestyle';
import Navbar2 from "../Components/Navbar2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/table.css';
import moment from 'moment';


export default function Ttable() {
  const [searchText, setSearchText] = useState('');
  const salesitems = useSelector(state=> state.salesorder);
  const {loading,data,error} = salesitems;
  const custData = useSelector(state => state.loadcust);
  const {custloadingss,custdata,custerror} = custData;
  const [tdate, setTdate] = useState(new Date());
  const [cname, setCname] = useState('Select Customer ');
  const [formvalues,setFormvalues] = useState({
    ccode:'',
    tdate:'',
    rcode:''
  })
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(loadcustAction())
    }, [dispatch]);
    const columns=[
      {
        name:'ITEMNAME',
      selector:row=>row.ITEMNAME,
      sortable:true,
      width:"220px"
      },
      {
        name:'PKGUNIT',
      selector:row=>row.PKGUNIT,
      width:"80px"
      },
      {
        name:'LTR_UNIT',
      selector:row=>row.LTR_UNIT,
      width:"70px"
      },
      {
        name:'RATE',
      selector:row=>row.RATE,
      width:"80px"
      },
      {
        name:'CATID',
      selector:row=>row.CATID,
      width:"60px"
      },
      {
        name:'ISBYPRODUCT',
      selector:row=>row.ISBYPRODUCT,
      width:"100px"
      }
      ,
      {
        name:'TUBISSUE',
      selector:row=>row.TUBISSUE,
      width:"80px"
      },
      {
        name:'SCHEME',
      selector:row=>row.SCHEME,
      width:"80px"
      },
      {
        name:'CGST',
      selector:row=>row.CGST,
      width:"60px"
      },
      {
        name:'SGST',
      selector:row=>row.SGST,
      width:"60px"
      },
      {
        name:'IGST',
      selector:row=>row.IGST,
      width:"60px"
      },
      {
        name:'TAXRATE',
      selector:row=>row.TAXRATE,
      width:"80px"
      }
      ,
      {
        name:'TAXAMOUNT',
      selector:row=>row.TAXAMOUNT,
      width:"100px"
      },
      {
        name:'Edit',
      selector:row=><img src={require("../images/edit.png")}/>,
      }
    ];
    const submitHandler = (ccode,cname,rcode) => {
      const formattedDate = moment(tdate).format('MM-DD-YYYY');
      setFormvalues({ccode:ccode.toString(),tdate:formattedDate,rcode:rcode.toString()});
      setCname({cname:cname});
      console.log(formvalues);
      if(formvalues.ccode===''||formvalues.rcode===''||formvalues.tdate===''){
        return
      }
      dispatch(saleorderAction(formvalues))
  }
    const handleFilter = (event) =>{
      if(event.target.value==="")
      {
        
        return salesitems;
      } 
      else{
        console.log(event.target.value)
      }
    }
    const changeHandler=(e) =>{
      const values = e.target.value.split(",");
      const ccode = values[0];
      const rcode = values[2];
      const formattedDate = moment(tdate).format('MM-DD-YYYY');
    
      setFormvalues((prevFormValues) => ({
        ...prevFormValues,
        ccode: ccode.toString(),
        tdate:formattedDate,
        rcode: rcode.toString(),
      }));
    }
    useEffect(()=>{
      if (formvalues.ccode !== '' && formvalues.rcode !== '' && formvalues.tdate !== '') {
        dispatch(saleorderAction(formvalues));
      }
    },[formvalues,dispatch])
  return (
    <>
    {/* <Navbar2 title="VST TECHONOLOGIES" /> */}
    <div>
      <div className="row">
        <div className="col">
    <div className="card mx-5" style={{width: '15rem'}}>
      <div className="card-header">
        <h5>Sales Data Report</h5>
        </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                <h5 className="card-title">Select Date</h5>
              <DatePicker portalId="root-portal" selected={tdate} onChange={(date) => setTdate(date)} dateFormat="dd/MM/yyyy" />
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col">
          <div className="card mx-5" style={{width: '15rem'}}>
      <div className="card-header">
        <h5>Sales Data Report</h5>
        </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                <h5 className="card-title">{cname?cname.cname:'Select Customer'}</h5>
                <select onChange={(e)=>changeHandler(e)}>
                <option key={0} value={[0,0,0]}>Select Customer</option>
                {custdata && custdata.map(item => (
                          <option key={item.ccode} value={[item.ccode,item.cname,item.rcode]}>
                            {item.cname}
                          </option>
                        ))}
                </select>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
   { loading ? (<div className="d-flex flex-row mt-2 justify-content-center">
    <div> 
      <div className="spinner-border text-primary" role="status"></div>
     </div>
          <h1>Loading...</h1>
       </div>) : error ? <h1>Something went Wrong</h1> : 
    data && data.length > 0 ? (
      <div>
        <div className="container mt-5">
        <DataTable
        customStyles={tableCustomStyles}
        title="Sales Data"
        columns ={columns}
        data = {data}
        //data={filteredItems}
        //expandableRows
        //expandOnRowClicked //still we need to work on expandables 
        //expandableRowsComponent={"testtttttttttttttttttttttttttttttttttttttttttttt"}
        //data = {records}// if we want to filter the records we use this
        selectableRows
        fixedHeader
        dense
        // pagination //uses for paging the records to next pages
        ></DataTable>
      </div>
      </div>
      ) : (
        <h1>No data available</h1>
      )  
      }
  </div>
      </>
  )
}
