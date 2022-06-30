import React,{useContext} from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart,AiOutlineBell} from "react-icons/ai"
import {FiMessageSquare} from "react-icons/fi"
import {RiArrowDropDownLine} from "react-icons/ri"
import { allStatesContext } from '../context/ContextProvider'
const Header = () => {
  let {mainColor,setShowMenu}=useContext(allStatesContext)
  let profileName='Michael'
  let avatar=require("../data/avatar.jpg")
  return (
    <div className='py-4 sidebar'>
      <div className="header-containerr flex justify-between items-center">

        <div className={`list-icon text-xl p-3 icon rounded-full hover:bg-light-gray`}
          style={{color:mainColor}}
          onClick={()=>setShowMenu(prev=>!prev)}
        >
          <AiOutlineMenu/>
        </div>

        <div className="profile flex items-center text-xl gap-2 md:gap-4"
        style={{color:mainColor}}
        >
          <div className='icon'><AiOutlineShoppingCart/></div>
          <div className='icon'><FiMessageSquare/></div>
          <div className='icon'><AiOutlineBell/></div>
          <div className='profile-info cursor-pointer flex items-center gap-1 text-base text-gray-400'>
            <div className="imag mr-1 w-[35px] rounded-full overflow-hidden"><img className='h-full w-full' src={avatar} alt="avatar" /></div>
            <div className="name">Hi, <span className='font-bold'>{`${profileName}`}</span></div>
            <div className='text-2xl'><RiArrowDropDownLine/></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header