import React from 'react'
import {Doughnut} from "react-chartjs-2"
import {ecomPieChartData} from "../../data/dummy"
const Pie = () => {
  let xLabels=ecomPieChartData.map(e=>e.x) 
  let yLabels=ecomPieChartData.map(e=>e.y) 

  const data = {
    labels:xLabels ,
    datasets: [
      {
        label: 'Sales',
        
        data: yLabels,
        backgroundColor:["#00bdae","#404041","#357cd2","#e56590"] ,
      }
    ]
  };

  const config = {
    
    data: data,
    options: {
      
      responsive: true,
      plugins: {
        tooltip:{
          yAlign:"bottom",
          callbacks:{
            title:(data)=>data[0].dataset.label,
            
            
            
          },
          
        },
        legend: {
          display:false,
        },
        
      }
    },
  };

  return (
    <div className='w-[140px] h-[140px]'>
      <Doughnut
      {...config}
      />
    </div>
  )
}

export default Pie