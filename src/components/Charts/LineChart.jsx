import React from 'react'
import {Line} from "react-chartjs-2"
import {lineCustomSeries} from "../../data/dummy"
const LineChart = () => {
  const XLabels=lineCustomSeries[0].dataSource.map(e=>e.x)
  const dataSets=lineCustomSeries.map(e=>{
    return ({
      label:e.name,
      data:e.dataSource.map(ele=>ele.y),
      borderColor:e.color,
    })
  })
  const data = {
    labels: XLabels,
    datasets: dataSets
    
  };

  const config = {
    
    data: data,
    options: {
      borderWidth:2,
      pointRadius:4,
      pointBackgroundColor:"white",
      responsive: true,
      scales: {
        x: {
          
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero:true,
          
          grid: {
            borderColor: 'transparent',
          },
          
      },
        },
      plugins: {
        legend: {
          position: 'bottom',
        },
        
      }
    },
  };
  return (
    <div className='w-full'>
      
      <Line
      {...config}
      height={130}
        width="200px"
      />

    </div>
  )
}

export default LineChart