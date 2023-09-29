import * as Icons from "react-icons/vsc"
import { useDispatch } from "react-redux"
import { NavLink, matchPath, useLocation } from "react-router-dom"
import { resetCourseState } from "../../../slices/courseSlice"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const options = [
  { label: 'Add Resources', value: '' },
  { label: 'Videos', value: '/dashboard/add-course' },
  { label: 'Articles', value: '/error' },
  { label: 'Textbooks', value: '/error' },
  { label: 'Interactive materials', value: '/error' },
];


export default function SidebarLink({ link, iconName }) {

  const Icon = Icons[iconName]
  const location = useLocation()
  const dispatch = useDispatch()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }
  
  
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    if(selectedValue){
      dispatch(resetCourseState())
      navigate(selectedValue);            // Navigate to the selected route
    }
  };
 

  return (
<>

    { link.name == "Add Resource" ? (
         
         <div>
            <select className="form-style w-[80%] mx-7 my-1 py-2 " onChange = {handleOptionChange} >
                
                {options.map((option, index) => (
                  <>
                    { option.label == "Add Resources" ? (
                          <option key={index} value={option.value} disabled selected  className="bg-opacity-0 text-white text-opacity-20"> {option.label} </option>
                          ) : (
                                <option key={index} value={option.value} className="bg-opacity-0 text-white text-opacity-70"> {option.label} </option>
                              )
                      }
                  </>

                ))}
            </select>
       </div>
     
    ) :  (
          <NavLink to = {link.path} onClick = {() => dispatch(resetCourseState())}
                  className = {`relative px-8 py-2 text-sm font-medium ${matchRoute(link.path) ? "bg-yellow-800 text-yellow-50" : "bg-opacity-0 text-richblack-300" } transition-all duration-200`} >
          
            <span className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${matchRoute(link.path) ? "opacity-100" : "opacity-0" }`}></span>
                                                                                        {/* here matchRoute means link is opened or not , if opened then its color is yellow  */}
            <div className="flex items-center gap-x-2">
              <Icon className="text-lg" />              {/* Icon Goes Here */}
              <span>{link.name}</span>
            </div>
               
          </NavLink>
        )}

</>
  
)}