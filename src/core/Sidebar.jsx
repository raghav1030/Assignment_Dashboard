import React from 'react'
import CreditInfo from '../components/sidebar/CreditInfo'
import UserPanel from '../components/sidebar/UserPanel'

const Sidebar = () => {
  return (
    <div className='sticky top-0'>
        <UserPanel/>
    </div>
  )
}

export default Sidebar