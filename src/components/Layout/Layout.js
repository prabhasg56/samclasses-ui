import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({children}) => {
  return (
    <div className="h-screen flex flex-row justify-start bg-[#ffff] ">
    <Sidebar />
    <div className=" p-4">
        {children}
    </div>
  </div>
  )
}

export default Layout;
