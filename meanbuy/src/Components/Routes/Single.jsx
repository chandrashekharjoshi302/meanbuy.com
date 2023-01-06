import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getid, putcart } from '../Fetch/axios'
import {Box, Stack, Image,Text, Heading, HStack, Button} from "@chakra-ui/react"

const Single = () => {
    const params= useParams()
    const [data, setdata] = useState([])
    const [final, setfinal] = useState({
        id:"",
        image:"",
        name:"",
        price:"",
        save:"",
        wasPrice:""
      })
    // console.log(params.product_id)
    useEffect(()=>{
        getid({id:params.product_id}).then((res)=>setdata(res.data))
    },[])
    const handleChange=async (e)=>{
      setfinal({...final,id:e.id,image:e.image,name:e.name,price:e.price,save:e.save,wasPrice:e.wasPrice})
    }
    useEffect(()=>{
      if(final.image!=""){
        handleSubmit(final)
        alert("Product has been added to Cart checkout from the cart.")

      }
    },[handleChange])
    const handleSubmit=(e)=>{
      putcart(e)
    } 
  return (
    <div>
      {data.map((dat)=>(
        <HStack key={dat.id}>
          <Box>
          <Image src={dat.image} w="100%" />
          </Box>
          <HStack>

          <Box>
          <Heading>{dat.name}</Heading>
          <Text>Before: ₹{dat.wasPrice}</Text>
          <Heading>Offer Price: ₹{dat.price}</Heading>
          <Text>Valid for today only... .. .</Text>
          </Box>
          <Button onClick={()=>handleChange(data[0])} bg="black" color="white">Add to Cart</Button>
          </HStack>
        </HStack>
      ))}
    </div>
  )
}

export default Single