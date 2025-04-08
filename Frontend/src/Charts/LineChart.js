import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mgmtsaleAction } from '../Actions/mgmtsaleAction';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import {  Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    plugins: {
      legend: {
        //bottom , top , left , right
        position: "top",
      },
    },
  };

 export const LineChart = () => {
    const mgsaledata = useSelector(state=> state.mgmtsaledata)
  const {loading,data,error} = mgsaledata;
  const [mgsalevalues,setMgsalevalues] = useState({
    fdate:'12-01-2022',
    tdate:'12-05-2022'
  })
  const dispatch = useDispatch()
  useEffect(() => {
    //dispatch(mgmtsaleAction(mgsalevalues))
  }, [dispatch]);

  if (!data || !data.labels || !data.datasets) {
    return (<div>
      <div className="spinner-border text-primary" role="status"></div>
      <h1>Loading...</h1>
      </div>
      ) // Display a loading message while data is being fetched
  }
  if (error) {
    return (
      <div className='d-flex flex-row mt-2 justify-content-center'>
        <h1>Something went wrong</h1>;
      </div>
    );
  } 
  return (
    <div style={{ width: "100%" ,height:"100%"}}>
      {data.labels.length > 0 ? (
        <Line data={data} options={options}/>
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  )
}

