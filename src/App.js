import React ,{useContext} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ThemeSetting from "./components/ThemeSetting"
import Sidebar from "./components/Sidebar"

import Calendar from "./pages/Calendar"
import ColorPicker from "./pages/ColorPicker"
import Customers from "./pages/Customers"
import Ecommerce from "./pages/Ecommerce"
import Editor from "./pages/Editor"
import Employees from "./pages/Employees"
import Kanban from "./pages/Kanban"
import Orders from "./pages/Orders"
import Area from "./pages/Charts/Area"  
import Bar from "./pages/Charts/Bar"  
import ColorMapping from "./pages/Charts/ColorMapping"  
import Financial from "./pages/Charts/Financial"  
import Line from "./pages/Charts/Line"  
import Pie from "./pages/Charts/Pie"  
import Pyramid from "./pages/Charts/Pyramid"  
import Stacked from "./pages/Charts/Stacked"  

import { allStatesContext } from "./context/ContextProvider";

import "./App.css"

function App() {
  let {mainColor,showMenu}=useContext(allStatesContext)
  return (
    <BrowserRouter>

    
    <div className="h-screen overflow-y-hidden flex relative bg-main-bg dark:bg-main-dark-bg font-body">
    
    {/* sidebar */}
        {showMenu&&<Sidebar/>}

      <div className="grow overflow-y-auto">
      {/* setting icon */}
      <div className="fixed right-4 bottom-4" style={{zIndex:"1000"}}>
        <TooltipComponent
        content="setting" position="top"
        >
          <button 
          type="button" 
          className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
          style={{ background:mainColor,borderRadius:"50%",}}
          >
            <FiSettings/>
          </button>
        </TooltipComponent>
      </div>
      
      {/* header */}
        <Header/>
      

      {/* routes */}
      <div className="containerr">
        <Routes>
            {/* dashboard */}
            <Route path="/" element={<Ecommerce/>}/>
            <Route path="/ecommerce" element={<Ecommerce/>}/>

            {/* pages */}
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/customers" element={<Customers/>}/>
            
            {/* Apps */}
            <Route path="/kanbaan" element={<Kanban/>}/>
            <Route path="/editor" element={<Editor/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/color-picker" element={<ColorPicker/>}/>

            {/* Charts */}
            <Route path="/line" element={<Line/>}/>
            <Route path="/area" element={<Area/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/financial" element={<Financial/>}/>
            <Route path="/color-mapping" element={<ColorMapping/>}/>
            <Route path="/pyramid" element={<Pyramid/>}/>
            <Route path="/stacked" element={<Stacked/>}/>
            
        </Routes>
      </div>

        <Footer/>
            </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
