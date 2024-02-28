import React from 'react'
import Calendar from './Calendar'
import Shifts from './Shifts'
import Initview from './Left_view/Initview'

export default function Calendar_core() {
  return (
   <>
  <div className="flex">

  
   <div>
   <Initview />
   <Shifts />
   </div>

    <Calendar />
    </div>
 
    </>
    
  )
}
