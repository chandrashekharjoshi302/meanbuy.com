import { HStack,Image, Box, Text, Button, Heading, Flex, Spacer, Center, Grid } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getcart, rem } from './Fetch/axios'




const Cart = () => {
    const [data, setdata] = useState([])
    const [final, setfinal] = useState({
        id:"",
        image:"",
        name:"",
        price:"",
        save:"",
        wasPrice:""
      })
    //   const [tot, settot] = useState(0)
    const [loading, setloading] = useState(false)
    useEffect(()=>{
        setloading(true)
        getcart().then((res)=>setdata(res.data))
        setloading(false)
    },[])
    // console.log(data)
    const handleDelete=async (e)=>{
        setfinal({...final,id:e.id,image:e.image,name:e.name,price:e.price,save:e.save,wasPrice:e.wasPrice})

    }
    useEffect(()=>{
        if(final.image!==""){
            console.log("hi")
            setloading(true)
            del(final)
            setfinal({...final,
                id:"",
                image:"",
                name:"",
                price:"",
                save:"",
                wasPrice:""
            })
            total=total-Number(final.price)
            // window.location.reload(true);
            alert("Item has been successfully removed.")
            getcart().then((res)=>setdata(res.data))
            setloading(false)
        }
        // getcart().then((res)=>setdata(res.data))
    },[handleDelete])
    
    const del=(e)=>{
        rem(e.id)
    }
    // console.log(data.price)
    let total=0

    if(loading){
        <Center>
                <Image src='https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp' alt="..Loading"/>
            </Center>
    }
  return (
    <>
    <Heading>
        <Center>Cart</Center>
    </Heading>
    <Flex>
    <Grid templateColumns="1fr 1fr 1fr" gap="20px">
    {data.map((dat)=>(
        <HStack key={dat.id}>
            {total=total+Number(dat.price)}
            <Box mt="60px">
            <Image src={dat.image} borderRadius="10%"/>
            <Box>
                <Text>
                {dat.name}
                </Text>
                <Text>
                   ₹ {dat.price}
                </Text>
            </Box>
            <Button onClick={()=>handleDelete(dat)} color="white" bg="green">Remove</Button>
            </Box>
        </HStack>
    ))}
    </Grid>
    <Spacer/>
    <Box>
    <Text>Cart Total: {total}</Text>
        <NavLink to={`/buy/${total}`}>
        <Button>Checkout</Button>
        </NavLink>
        
    </Box>
    </Flex>
    </>
  )
}

export default Cart