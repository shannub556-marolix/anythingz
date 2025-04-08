import React, { useEffect, useState } from 'react'
import { Chart as ChartJS,BarElement } from 'chart.js'
import { useDispatch, useSelector } from 'react-redux';
import { mgmtsaleAction } from '../Actions/mgmtsaleAction';
import { Bar } from 'react-chartjs-2'
import { API_URL } from '../Components/api';

ChartJS.register(
    BarElement
)

 
  var options = {
    maintainAspectRatio:false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend:{
        labels:{
            fontSize:26
        }
    }
  }
  export const BarChart = () => {
    const mgsaledata = useSelector(state=> state.mgmtsaledata)
  const {loading,data,error} = mgsaledata;
  const [mgsalevalues,setMgsalevalues] = useState({
    fdate:'12-01-2022',
    tdate:'12-05-2022'
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(mgmtsaleAction(mgsalevalues))
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
    <div>
      {data.labels.length > 0 ? (
        <Bar data={data} options={options} />
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  )
}
