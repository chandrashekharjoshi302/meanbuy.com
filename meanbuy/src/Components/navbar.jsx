import React from 'react'
import {Box,HStack,Text,Image,Input, Flex,Link} from "@chakra-ui/react"
import {  NavLink} from "react-router-dom"
// import { useState } from 'react'
import Login from './login.jsx'
const links=[
  {
      to:"/Category",
      title:"Category"
  },
  {
      to:"/flashsale",
      title:"Flash Sale"
  },
  {
      to:"/bestdeals",
      title:"Best deals"
  },
  {
    to:"/shopbrand",
    title:"Shop By Brand"
  },
  {
    to:"/trending",
    title:"Trending"
  },{
    to:"new",
    title:"New Arrivals"
  }
]
const Navbar = () => {
  
  return (
    <>
    <div>
        <Box  h="25px" bg="black" color="white"
        
        zIndex="9"
      pl={{ base: "5%", md: "", xl: "10%" }}
      pr={{ base: "5%", md: "", xl: "10%" }}
      position="sticky"
      top="0"
      left="0"
      boxShadow=" 2px 2px 8px rgba(0,0,0,0.2)"
        >
             <Text ml="20%"  >
             Upto Rs.500 off on Prepaid Purchases use coupon code - PREPAID 
             </Text>
             </Box>
           
          
        <HStack spacing={20} >
            <NavLink to="/">
            <Image src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png" w="200px"ml="20px"/>
            </NavLink>
            <NavLink to="/search">
            <Input placeholder='Search' w="200px"/>
            
            </NavLink>
            <Flex fontSize={15}>
                <Link href='https://www.meanbuy.com/in/merchant/signup'>Seller's Corner </Link>
                <Link href='https://www.meanbuy.com/in/contact'>| Feedback </Link>
                <Link href='https://www.meanbuy.com/in/blog'>| Blog </Link>
                <Link href='https://www.meanbuy.com/in/shipping_return'>| Delivery's Info </Link>
            </Flex>
            <Box>
                <Login />
               
            </Box>
            <NavLink to="/cart">
            <Image w="50px" src='https://cdn-icons-png.flaticon.com/512/891/891462.png'/>
            </NavLink>
        </HStack>
        
    <Box bg="black" color="white">
        {links.map((link)=>(
          <NavLink key={link.to} to={link.to}>★{link.title}  </NavLink>
      
        ))}
        </Box>
    </div>
    </>
  )
}

export default Navbar