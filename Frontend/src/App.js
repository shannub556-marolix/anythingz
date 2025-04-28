import React, { useState } from 'react';
import Home from './Screens/Home';
import About from './Screens/About';
import LoginPage from './Screens/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Ttable from './Screens/table';
import TableView from './Screens/tableView';
import PrivateRoutes from './Components/PrivateRoutes';
import CameraCapture from './Components/camera';
import FingerprintCapture from './Components/fingerprint';
import Orders from './Screens/Orders';
import Products from './Screens/Products';
import Category from './Screens/category';
import ProductRates from './Screens/ProductRates';
import Addstudent from './Screens/student/addstudent';
import Addstudent2 from './Screens/student/addstudent2';
// import Stores from './Screens/Stores';

import Vstores from './Screens/stores/stores';
import Add_store from './Screens/stores/Add_store';
import ReportPreview from './Screens/Reports/reportPreview';
import Categories from './Screens/Categories/categories';
import AddCategory from './Screens/Categories/add_Categories';
import Items from './Screens/Items/Items';
import AddProducts from './Screens/Items/Add_items';
import AddProductPricing from './Screens/ProductPricing/Add_ProductPrice';
import ProductPricing from './Screens/ProductPricing/ProductPricing';
import NotFound from './Screens/Notfound';
import StoreOwners from './Screens/stores/store_owners';
import DeliveryGuys from './Screens/stores/Delivery_guys';
import OrdersList from './Screens/Orderslist';
import Liveorders from './Screens/Liveorders';
import DropNow from './Screens/Dropnow';
import Storepayouts from './Screens/Storepayouts';
import Deliverycollections from './Screens/Deliverycollections';
import Deliverycollectionlogs from './Screens/deliverycollectionlogs';
import Settings from './Screens/Settings/Settings';
import Storeperformancereport from './Screens/Reports/Storeperformancereport';
import Storebalancereport from './Screens/Reports/Storebalancereport';
import Storewiseorderreport from './Screens/Reports/Storewiseorderreport';
import Deliveryguyearningreport from './Screens/Reports/Deliveryguyearningreport';
import Customerperformancereport from './Screens/Reports/Customerperformancereport';
import Adminearningreport from './Screens/Reports/Adminearningreport';
import Allinonereport from './Screens/Reports/Allinonereport';
import Paymentmethodreport from './Screens/Reports/Paymentmethodreport';
import Tax_report from './Screens/Reports/Tax_report';

// import './App.css'



export default function App() {
  const authToken = useSelector(state=>state.userLogin)
  //const isLoggedIn = useSelector(state=> state.userauth)
  return ( 
    <Routes>
      {/* public routes */}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LoginPage/>} />
      <Route path="/ReportPreview" element={<ReportPreview/>} />
      {/* protected / Private routes */}
            <Route element={<PrivateRoutes />}>
            <Route exact path="/home" element={<Home/>}/>
            {/* <Route exact path="/home" element={<Home/>}/> */}
            <Route exact path="/tableView" element={<TableView/>}/>
            <Route path="/tableView/orders/:id" element={<Orders/>}/>
            <Route path="/tableView/products" element={<Products/>}/>
            <Route path="/tableView/productrates" element={<ProductRates/>}/>
            <Route path="/tableView/category" element={<Category/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/table" element={<Ttable/>} />
            <Route path="/Camera" element={<CameraCapture/>} />
            <Route path="/finger" element={<FingerprintCapture/>} />
            <Route path="/addstudent" element={<Addstudent/>} />
            <Route path="/addstudent2" element={<Addstudent2/>} />
            {/* <Route path="/addStores" element={<Stores/>} /> */}
            {/* <Route path="/addStores" element={<add_stores/>} /> */}
            <Route path="/addStores" element={<Add_store/>}/>
            <Route path="/Stores" element={<Vstores/>} />
            <Route path="/Storeowners" element={<StoreOwners/>} />
            <Route path="/Menucategories" element={<Categories/>} />
            <Route path="/AddCategory" element={<AddCategory/>} />
            <Route path="/Items" element={<Items/>} />
            <Route path="/addItem" element={<AddProducts/>} />
            <Route path="/Itemattributes" element={<ProductPricing/>} />
            <Route path="/addProductPricing" element={<AddProductPricing/>} />
            <Route path="/deliveryguys" element={<DeliveryGuys/>} />
            <Route path="/Orderslist" element={<OrdersList/>} />
            <Route path="/liveorders" element={<Liveorders/>} />
            <Route path="/dropnow" element={<DropNow/>} />
            <Route path="/storepayouts" element={<Storepayouts/>} />
            <Route path="/deliverycollections" element={<Deliverycollections/>} />
            <Route path="/deliverycollectionlogs" element={<Deliverycollectionlogs/>} />
            <Route path='/allsettings' element={<Settings/>} />
            <Route path='/storeperformancereport' element={<Storeperformancereport/>} />
            <Route path='/storebalancereport' element={<Storebalancereport/>} />
            <Route path='/storewiseorderreport' element={<Storewiseorderreport/>} />
            <Route path='/deliveryguyearningreport' element={<Deliveryguyearningreport/>} />
            <Route path='/customerperformancereport' element={<Customerperformancereport/>} />
            <Route path='/adminearningreport' element={<Adminearningreport/>} />
            <Route path='/allinonereport' element={<Allinonereport/>} />
            <Route path='/paymentmethodreport' element={<Paymentmethodreport/>} />
            <Route path='/taxreport' element={<Tax_report/>} />





         </Route>
  </Routes>
  );
}