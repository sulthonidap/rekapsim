import React from 'react'
import { UserNav } from './user-nav'
import { MainNav } from './main-nav'

const Navbar = () => {
  return (
    <div className="border-b bg-[#203863]">
          <div className="flex h-16 items-center px-4">
            <div className='w-[250px]'>
            <img src="/Logo-Nav.png" alt="" />
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <MainNav className="mx-6" />
              <UserNav />
            </div>
          </div>
        </div>
  )
}

export default Navbar