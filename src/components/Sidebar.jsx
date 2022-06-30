import React,{useContext} from 'react'
import {Link,NavLink} from "react-router-dom"
import {SiShopware} from "react-icons/si"
import {IoIosCloseCircleOutline} from "react-icons/io"
import {links} from "../data/dummy"
import { allStatesContext } from '../context/ContextProvider'
const Sidebar = () => {
  let [list,setList]=React.useState()
  let {mainColor,setShowMenu}=useContext(allStatesContext)

  const linkStyle=` capitalize flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 `
  const activeLinkStyle={
    backgroundColor:mainColor,
    color:"white"
  }
  // make list of links
  React.useEffect(()=>{
    setList(links.map(ele=>{
      return(
        <div key={ele.title}>
          <h1 className='m-3 mt-4 uppercase text-gray-400'>{ele.title}</h1>
          {ele.links.map(e=><NavLink  key={e.name} to={`/${e.name}`} className={`${linkStyle}`} style={({isActive})=>isActive?activeLinkStyle:{}}>{e.icon}{e.name}</NavLink>)}
        </div>)}))},[])
        
          
  return (
    <div className=' w-72 sidebar fixed md:static bg-white  overflow-y-auto p-5 dark:bg-secondary-dark-bg'>
      
      <div className="logo mt-2 mb-10 flex justify-between items-center dark:text-white">
      
      {/* logo */}
      <Link to="/">
        <span className='font-bold text-xl flex items-center gap-3'><SiShopware/>Shoppy</span>
      </Link>
      
      {/* closing icon */}
      <div className="icon text-xl rounded-full p-2 hover:bg-light-gray block md:hidden"
      style={{color:mainColor}}
      onClick={()=>setShowMenu(false)}
      ><IoIosCloseCircleOutline/></div>
      </div>
      
      {/* list of links */}
      <div className="list">
      {list}
      </div>
    </div>
  )
}

export default Sidebar