import React from 'react'
import {Stack,Image,Box,Heading, Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { putcart } from './axios'

const Datamap = ({id,src,name,price,save}) => {
  const [final, setfinal] = useState({
    id:"",
    image:"",
    name:"",
    price:"",
    save:""
  })
  const handleAdd=async ({id,src,name,price,save})=>{
    
    setfinal({...final,id:id,image:src,name:name,save:save,price:price})
    
  }
  useEffect(()=>{
    if(final.image!==""){
      handleSubmit(final)
      alert("Product has been added to cart.")
    }
  },[handleAdd])
  const handleSubmit=(e)=>{
    putcart(e)
  }
  return (
    <>
        <Stack  key={id} boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px">
        <Link to={`/category/${id}`}>
        <Image w="100%" src={src} borderRadius="10%"/>
        <Box ml="5px" fontFamily="Helvectics">{name}</Box>
        <Box fontFamily="Algerian">
        ☆ {save}
          </Box>
        <Heading color="green" fontSize="25px" fontFamily="Arial" ml="55%">
          ₹ {price}
          </Heading>
        </Link>
          <Button bg="red" color="white" onClick={()=>handleAdd({id,src,name,price,save})}>Add to Cart</Button>
      </Stack>
    </>
  )
}

export default Datamap