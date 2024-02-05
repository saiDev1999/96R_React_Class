






import React, { useState } from 'react'
import ChildUseMemo from './childUseMemo'
import { hourToGreeting } from '../../../utills/dateHelper'

function ParentUseMemo() {
    const data=new Date()
    const[greeting,setGreeting]=useState(hourToGreeting(data.getHours()))
   
  return (
    <div>
        <ChildUseMemo greeting={greeting}   />
    </div>
  )
}

export default ParentUseMemo