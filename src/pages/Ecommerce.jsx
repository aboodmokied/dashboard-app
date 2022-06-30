import React,{useContext} from 'react'
import { allStatesContext } from '../context/ContextProvider'
import {BsCurrencyDollar} from "react-icons/bs"
import {GoPrimitiveDot} from "react-icons/go"

import Button from '../components/Button'
import SparkLine from '../components/Charts/SparkLine'
import Stacked from '../components/Charts/Stacked'
import BarChart from '../components/Charts/BarChart'
import Pie from '../components/Charts/Pie'
import LineChart from '../components/Charts/LineChart'
// import { SparklineAreaData } from '../data/dummy'
import {earningData} from "../data/dummy"
import {recentTransactions} from "../data/dummy"
import {weeklyStats} from "../data/dummy"
import {medicalproBranding} from "../data/dummy"
import Product from "../data/product9.jpg"
const Ecommerce = () => {
  let {mainColor}=useContext(allStatesContext)
  return (
    <div>
      <div className="hero  bg-white dark:text-gray-200 mb-3 mt-10 dark:bg-secondary-dark-bg h-44 rounded-xl p-5  bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className='flex justify-between items-center'>
          <div>
          <h4 className='font-bold text-gray-400'>Earnings</h4>
          <p className='text-2xl dark:text-white'>$63,448.78</p>
          </div>
          <div className='mr-3 text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-[50%]  p-4' style={{backgroundColor:mainColor,}}><BsCurrencyDollar/></div>
        </div>
        <div className="mt-7">
          <Button content="Download"/>
        </div>
      </div>
      
      <div className=" my-10 statistics grid grid-cols-2 md:grid-cols-4 gap-5">
      {earningData.map(e=>{
        let perStyle={
          color:e.pcColor==='green-600'?"#06b906":"red"
        }
        return(
          <div key={e.title} className='bg-white dark:bg-secondary-dark-bg py-5 px-7 rounded-lg justify-self-center w-full flex flex-col items-center justify-start  lg:items-start '>
            <div className="cursor-pointer  text-2xl opacity-0.9 text-white hover:drop-shadow-xl  p-4 duration-150 rounded-full"
            style={{backgroundColor:e.iconBg,color:e.iconColor,}}
            >{e.icon}</div>
            <div className="flex gap-2 items-center mt-3"><p className='font-bold text-lg dark:text-white'>{e.amount}</p>
            <span style={perStyle}>{e.percentage}</span></div>
            
            <p className='text-gray-400'>{e.title}</p>
          </div>
        )
      })}
      </div>

      <div className=" flex flex-wrap items-start gap-10">

      
      <div className="revenue lg:w-[780px] w-full max-w-[400px] lg:max-w-full shrink-0 grow mx-auto  p-5 rounded-2xl dark:text-gray-200 bg-white dark:bg-secondary-dark-bg">
          <div className="header md:text-lg flex items-center justify-between gap-5 md:gap-0">
            <h1 className='md:text-xl text-lg font-semibold'>Revenue Updates</h1>
              
              <div className='flex items-center gap-2 '>

              <div className="flex items-center gap-1 text-gray-600 ">
                <span><GoPrimitiveDot/></span>
                <span>Expense</span>
              </div>
                <div className="flex items-center gap-1 "
                style={{color:mainColor,}}>
                <span><GoPrimitiveDot/></span>
                <span>Budget</span>
                </div>
              </div>

            </div>
              <div className='charts  mt-10 w-[90%] mx-auto grid gap-10 grid-cols-1 lg:grid-cols-2'>
                
                <div className='left-part max:w-[315px] lg:border-r-1 pr-[40px]'>

                <div className=''>
                  <div className='flex items-center gap-3'>
                    <span className='text-2xl font-semibold'>$93,438</span>
                    <span className='-mb-3 text-white font-semibold text-xs p-1 rounded-xl '
                    style={{background:mainColor,}}
                    >23%</span>
                  </div>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>
                <div className='my-8'>
                  <div className='flex items-center gap-3'>
                    <span className='text-2xl font-semibold'>$48,487</span>
                    
                  </div>
                  <p className='text-gray-500 mt-1'>Expense</p>
                </div>
                
                <SparkLine
                lineColor={mainColor}
                width={1}
                fill={false}
                />
                
                <div className="mt-10" >
                <Button content="Download Report"/>
                </div>


                </div>

                <div className="right-part max:w-[315px]">
                <Stacked mainColor={mainColor}/>
                </div>

              </div>
      </div>


      <div className="earning-pie w-full mx-auto max-w-[400px] shrink    text-white"
      >
        
        <div className='top rounded-2xl px-5 py-7'
        style={{background:mainColor,}}
        >

          <div className="flex items-start justify-between mb-4">
            <h1 className='text-2xl font-semibold'>Earnings</h1>
            <div className="">
              <p className='text-2xl font-semibold'>$63,448.78</p>
              <p className='text-gray-200'>Monthly revenue</p>
            </div>
          </div>
          
          <BarChart/>
        </div>

        <div className="bottom h-[240px] rounded-2xl bg-white text-black dark:bg-secondary-dark-bg dark:text-white mt-3 p-8 flex items-center justify-between gap-10">
          <div className="">
            <p className='text-2xl font-semibold'>$43,246</p>
            <p className='text-gray-400'>Yearly sales</p>

          </div>
          
          <div className="">
          <Pie/>
          </div>

        </div>

      </div>

    </div>

    <div className=" mt-10 flex flex-wrap gap-10 ">
        <div className="recent w-full max-w-[400px] mx-auto bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl sm:w-[400px]">
          <div className="title">
            <p className='text-2xl font-semibold'>Recent Transactions</p>
          </div>
          <div className="content mt-5">
          {recentTransactions.map(e=>{
            let perStyle={
              color:e.pcColor==='green-600'?"#06b906":"red",
            }
            return(
            <div key={e.title} className="item mt-4 flex justify-between items-center">
              <div className='flex gap-4'>
              <div className="text-2xl cursor-pointer rounded-lg p-4 hover:drop-shadow-xl"
              style={{color:e.iconColor,background:e.iconBg,}}
              >{e.icon}</div>
              <div>
                <p className='text-md font-semibold'>{e.title}</p> 
                <p className='text-gray-400'>{e.desc}</p>
              </div>
              </div>
              <p className=''
              style={perStyle}
              >{e.amount}</p>
            </div>
            )
          })}
          </div>
          <div className="foot flex justify-between mt-5 py-3 border-t dark:border-t-black">
            <Button content="Add"/>
            <p className='text-sm text-gray-400'>36 Recent Transactions</p>
          </div>
        </div>

        <div className="sales-chart grow mx-auto  min-w-0 sm:min-w-[400px] sm:max-w-[760px] bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
        <div className="title mb-2">
            <p className='text-2xl font-semibold'>Sales Overview</p>
        </div>
            <div className="chart h-full flex items-center">
            <LineChart/>
            </div>
        </div>
    </div>

        <div className="cont mt-10 flex gap-y-5 flex-wrap justify-center gap-x-3">
        <div className="weekly w-full max-w-[400px]  bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl ">
          <div className="title">
            <p className='text-2xl font-semibold'>Weekly Stats</p>
          </div>
          <div className="content mt-5">
          {weeklyStats.map(e=>{
            let perStyle={
              color:e.pcColor==='green-600'?"#06b906":"red",
            }
            return(
            <div key={e.title} className="item mt-4 flex justify-between items-center">
              <div className='flex gap-4'>
              <div className="text-2xl cursor-pointer rounded-full p-4 hover:drop-shadow-xl text-white"
              style={{background:e.iconBg,}}
              >{e.icon}</div>
              <div>
                <p className='text-md font-semibold'>{e.title}</p> 
                <p className='text-gray-400'>{e.desc}</p>
              </div>
              </div>
              <p className=''
              style={perStyle}
              >{e.amount}</p>
            </div>
            )
          })}
          </div>
          <div className="foot mt-5 py-3 border-t dark:border-t-black">
          <SparkLine
                lineColor={mainColor}
                width={3}
                fill={true}
                />
          </div>
        </div>
        
        <div className="MedicalPro w-full max-w-[400px]  bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl ">
          <div className="title">
            <p className='text-2xl font-semibold'>MedicalPro Branding</p>
          </div>
          <div className="content mt-5">
          
            <button className='text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 '>16 APR, 2021</button>
            <div className="flex mt-5 border-b">
              {medicalproBranding.data.map(e=>{
                return (
                  <div 
                  key={e.title}
                  className='px-4 pb-2 border-r'>
                  <p className='text-xs text-gray-400'>{e.title}</p>
                  <p className='text-sm'>{e.desc}</p>
                </div>
                )
              })}
            
            </div>

            <div className="py-4 border-b">
              <h4 className='mb-3 font-semibold'>Teams</h4>
              <div className='flex gap-5'>
                {medicalproBranding.teams.map(e=>{
                  return (

                    <button
                    key={e.name}
                    className='text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24  py-0.5 px-2 text-white '
                    style={{background:e.color,}}
                    >{e.name}</button>
                  )
                })}
              </div>
            </div>
            <div className="py-4 ">
              <h4 className='mb-3 font-semibold'>Leaders</h4>
              <div className='flex gap-5'>
                {medicalproBranding.leaders.map((e,index)=>{
                  return (

                    <div 
                    key={index}
                    className='w-8 h-8 rounded-full overflow-hidden'
                    ><img src={e.image} alt="avatar" className="w-full h-full" /></div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="foot flex justify-between  py-3 border-t dark:border-t-black">
            <Button content="Add"/>
            <p className='text-sm text-gray-400'>36 Recent Transactions</p>
          </div>
        </div>
        <div className="Daily w-full max-w-[400px]  bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl ">
          <div className="title">
            <p className='text-2xl font-semibold'>Daily Activities</p>
          </div>
          <div className="content mt-5">
            <div className="image w-full h-[200px] my-7">
              <img src={Product} alt="product9" className="w-full h-full" />
            </div>
          <h2 className="font-semibold text-lg">React 18 coming soon!</h2>
          <p className="text-gray-400 ">By Johnathan Doe</p>
          <p className="mt-8 text-sm text-gray-400 mb-3">
          This will be the small description for the news you have shown here. There could be some great info.
          </p>
          <Button content="Read More"/>
          </div>
          
        </div>

        </div>
        
  </div>
  )
}

export default Ecommerce