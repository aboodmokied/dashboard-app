import React,{useContext} from 'react'
import { allStatesContext } from '../context/ContextProvider'
const Button = (props) => {
  let {mainColor}=useContext(allStatesContext)
  return (
    <button className='p-2 text-white rounded-md hover:shadow-md shadow-black duration-150' style={{backgroundColor:mainColor}}>{props.content}</button>
  )
}

export default Button