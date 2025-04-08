import React, { useEffect, useState } from 'react'
import { Chart as ChartJS,ArcElement, Tooltip, Legend } from 'chart.js'
import { useDispatch, useSelector } from 'react-redux';
import { mgmtsaleAction } from '../Actions/mgmtsaleAction';
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

 
  var options = {
    maintainAspectRatio:false,
    legend:{
        labels:{
            fontSize:26
        }
    }
  }
  export const DoughnutChart = () => {
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
    <div>
      {data.labels.length > 0 ? (
        <Doughnut data={data}height={400} options={options} />
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  )
}
