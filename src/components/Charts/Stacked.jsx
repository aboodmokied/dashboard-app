import React from 'react'
import {stackedChartData} from "../../data/dummy"
import { Bar } from 'react-chartjs-2'
// import "chart.js/auto"
const Stacked = (props) => {
  const xLabels1=stackedChartData[0].map(ele=>ele.x)
  const yLabels1=stackedChartData[0].map(ele=>ele.y)
  // const xLabels2=stackedChartData[1].map(ele=>ele.x)
  const yLabels2=stackedChartData[1].map(ele=>ele.y)
  let data={
    labels:xLabels1,
    datasets:[
      {
        label:"Budget",
        data:yLabels1,
        backgroundColor:props.mainColor,
      },
      {
        label:"Expense",
        data:yLabels2,
        backgroundColor:"rgb(82 82 91)",
      },
    ]
  }

  const config = {
    
    data: data,
    options: {
      plugins: {
        legend: {
          position: "bottom",
        
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          grid:{
            display:false,
          },
        },
        y: {
          stacked: true,
          grid:{
            // color: 'rgb(209 213 219)',
            borderColor: 'transparent',
            
          }
        }
      }
    },
    
  };

  return (
    <div>
      <Bar
      {...config}
      width={280}
      height={300}
      />
    </div>
  )
}

export default Stacked