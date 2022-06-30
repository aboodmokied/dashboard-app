import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto';
import { SparklineAreaData } from '../../data/dummy';



const SparkLine = (props) => {
  let xLabels=SparklineAreaData.map(e=>e.x)
  let yLabels=SparklineAreaData.map(e=>e.yval)
  return (
    <div className=''>
      <Line
        data={{
          labels:xLabels,
          datasets:[
            {
              
              data:yLabels,
              borderColor:props.lineColor,
              borderWidth:props.width,
              pointBackgroundColor:props.lineColor,
              pointHoverBackgroundColor:"white",
            }
          ],
        }}
        options={{
          backgroundColor:"rgb(242, 252, 253)",
          fill:props.fill,
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
        height={100}
        width="200px"
        
      />
    </div>
  )
}

export default SparkLine