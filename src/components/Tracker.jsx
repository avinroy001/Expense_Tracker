import React from 'react'
import DispBal from './DispBal'
import DispExp from './DispExp'
import BasicPie from './Pi'

const Tracker = () => {
  return (
    <div>
         <div className='heading'>Expense Tracker</div>
    <div className="trackerWrapper">
        <DispBal />
        <DispExp />
        <BasicPie />
      </div>
    </div>
   
  )
}

export default Tracker