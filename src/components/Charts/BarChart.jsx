import React from 'react'
import { Bar } from 'react-chartjs-2'
import { SparklineAreaData } from '../../data/dummy';
const BarChart = () => {
    let xLabels=SparklineAreaData.map(e=>e.x)
    let yLabels=SparklineAreaData.map(e=>e.yval)
    const data={
        labels:xLabels,
        datasets:[
            {
                data:yLabels,
                backgroundColor:"white",
            }
        ],
    }

    const config={
        data:data,
            options:{
            
                plugins:{
    
                legend:{
                    display:false,
                },
    
                tooltip:{
                    yAlign:"bottom",
                    callbacks:{
                    title:()=>"",
                    label:(data)=>`${data.label}:data ${data.formattedValue}`,
                    
                    
                    },
                    displayColors:false,
                },
                },
    
    
                scales: {
                x: {
                    display:false,
                    // grid: {
                    //   display: false
                    // }
                },
                y: {
                    // beginAtZero:true,
                    display:false,
                    // grid: {
                    //   display: false
                    // },
                    // ticks:{
                    //   display:false,
                    // }
                    
                }
            
                }
            }
    }
  return (
    <div>
        <Bar
        {...config}
        height={100}
        width={320}
        />
    </div>
  )
}

export default BarChart