import React,{createContext,useState} from "react";

export const allStatesContext=createContext()

export default function ContextProvider({children}){
    const [showMenu,setShowMenu]=useState(false)
    const [mainColor,setMainColor]=useState("rgb(26, 151, 245)")
    return(
        <allStatesContext.Provider value={{showMenu,setShowMenu,mainColor,setMainColor}}>
            {children}
        </allStatesContext.Provider>
    )
}