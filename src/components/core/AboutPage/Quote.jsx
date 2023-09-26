import React from 'react'
import HighlightText from '../HomePage/HighlightText'

function Quote(){
  return (

    <div className=" text-xl md:text-3xl font-semibold mx-auto py-5 pb-20 text-center text-white">
        Education or teaching in the broadest sense is any act or experience that has a formative effect on the mind, character or physical ability of an individual.  
        <HighlightText text={"In its technical sense,"} />,{" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">{" "} education  </span>
         is the process by which society deliberately transmits its accumulated knowledge,
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">{" "} skills and values from one generation to another.</span> 
    </div>
  
)}

export default Quote  