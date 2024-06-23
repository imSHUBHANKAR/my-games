import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import {FcHome,FcManager,FcComments,FcComboChart,FcOpenedFolder,FcSettings,FcEngineering,FcInTransit,FcLike,FcAdvertising,FcPrevious} from 'react-icons/fc';

import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
// import SidebarMenu from "./SidebarMenu";


const routes=[
    {
        path:"/",
        name:"Home",
        icon: <FcHome />,
    },
    {
        path: "/users",
        name: "Users",
        icon: <FcManager />,
      },
      {
        path: "/saved",
        name: "Favourite",
        icon: <FcLike />,
      },
      {
        path: "/messages",
        name: "Notification",
        icon: <FcAdvertising />,
      },
      
      
    //   {
    //     path: "/file-manager",
    //     name: "File Manager",
    //     icon: <FcOpenedFolder />,
    //     subRoutes: [
    //       {
    //         path: "/settings/profile",
    //         name: "Profile ",
    //         icon: <FaUser />,
    //       },
    //       {
    //         path: "/settings/2fa",
    //         name: "2FA",
    //         icon: <FaLock />,
    //       },
    //       {
    //         path: "/settings/billing",
    //         name: "Billing",
    //         icon: <FaMoneyBill />,
    //       },
    //     ],
    //   },
    //   {
    //     path: "/analytics",
    //     name: "Analytics",
    //     icon: <FcComboChart />,
    //   },
    //   {
    //     path: "/order",
    //     name: "Order",
    //     icon: <FcInTransit />,
    //   },
      {
        path: "/settings",
        name: "Settings",
        icon: <FcEngineering />,
        exact: true,
        subRoutes: [
          {
            path: "/settings/profile",
            name: "Profile ",
            icon: <FaUser />,
          },
          {
            path: "/settings/2fa",
            name: "2FA",
            icon: <FaLock />,
          },
          {
            path: "/settings/billing",
            name: "Billing",
            icon: <FaMoneyBill />,
          },
        ],
      },
];
const Sidebar = ({children}) => {

    const [isOpen,setIsOpen] = useState(false);
    const [isOpen1,setIsOpen1] = useState(false);


    const toggle= () => setIsOpen(!isOpen);
    const toggle1= () => setIsOpen1(!isOpen1);

    const inputAnimation={
        hidden:{
            width:0,
            padding:"10px",
            opacity:0,
            Transition:{
                duration:0.2,
            },
        },
        show:{
            width:"auto",
            opacity:1,
            Transition:{
                duration:0.2,
            },
        },
    };

    const showAnimation={
        hidden:{
            width:0,
            opacity:0,
            Transition:{
                duration:0.5,
            },
        },
        show:{
            width:"140px",
            padding:"5px 15px",
            opacity:1,
            Transition:{
                duration:0.2,
            }
        },
    };

  return (
      <div className='main-container'>
          <motion.div 
          animate={{ width: isOpen ? "250px" : "60px" ,
          transition:{duration:0.5,type:"spring",damping:9}}} 
          className='sidebar'>
              <div className="top_section">
                  {isOpen && (
                      <motion.h1
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className='logo'>G for Games
                      </motion.h1>
                  )}
                  <div className='bars'>
                      <FaBars onClick={toggle} />
                  </div>
              </div>
              <div className='search'>
                  <div className="sreach_icon">
                      <BiSearch />
                  </div>
                  <AnimatePresence>
                      {isOpen && (
                          <motion.input
                              initial="hidden"
                              animate="show"
                              exit="hidden"
                              variants={inputAnimation}
                              placeholder='Search me ..'
                          />
                      )}
                  </AnimatePresence>
              </div>
              <section className='routes'>
                  {routes.map((route) => (
                      <NavLink activeClassName="active" className='link' to={route.path} key={route.name}>
                          <div className='icon'>{route.icon}</div>
                          <AnimatePresence>
                              {isOpen && (
                                  <motion.div
                                      variants={showAnimation}
                                      initial="hidden"
                                      animate="show"
                                      exit="hidden"
                                      className='link_text'
                                  >{route.name}
                                  </motion.div>
                              )}
                          </AnimatePresence>
                      </NavLink>
                  ))}
              </section>
          </motion.div>
          <main>
              {children}
          </main>
      </div>
  );
};

export default Sidebar;
