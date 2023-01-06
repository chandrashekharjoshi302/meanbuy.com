import { Box, Grid, HStack, Input,Button,Center,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getdata } from '../Fetch/axios'
import Datamap from '../Fetch/data_map'

const keys=[
    {k:"Bluetooth"},
    {k:"electronic"},
    {k:"fashion"},
    {k:"home_decor"},
    {k:"home_improvement"},
    {k:"jewellery"},
    {k:"keyboard"},
    {k:"Kitchen"},
    {k:"Makeup"},
    {k:"men_watch"},
    {k:"mobile"},
    {k:"small"},
    {k:"toys"}
]

const Search = () => {
    const [sea, setsea] = useState(null)
    const [fianl, setfianl] = useState(null)
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    // console.log(sea,fianl)
    useEffect(()=>{
        // setloading(true)
        getdata({category:fianl,limit:null}).then((res)=>setdata(res.data))
        setloading(false)
    },[fianl])
    // console.log(data)
    if(loading){
        return(
            <Center>
                <Image src='https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp' alt="..Loading"/>
            </Center>
        )
    }
  return (
    <>
    <Box mt="50px" color="white" bg="#090979">
    Search like these :-
    <Grid templateColumns="1fr 1fr 1fr 1fr 1fr 1fr" color="white">
        {keys.map((ke)=>(
            <div key={ke.k}>
                {ke.k}
            </div>
        ))}
    </Grid>
    </Box>
    <HStack mt="30px">
    <Input onChange={(e)=>setsea(e.target.value)} placeholder="Search" w="40%" autoFocus/>
    <Button onClick={()=>setfianl(sea)} bg="blue" color='white' borderRadius="15px">🔍 Search</Button>
    </HStack>
    <Grid templateColumns="1fr 1fr 1fr 1fr" gap="20px">
    {data.map((dat)=>(
           <Datamap key={dat.id} id={dat.id} src={dat.image} price={dat.price} save={dat.save} name={dat.name} category={dat.category} />
    ))}
    </Grid>
    </>
  )
}

export default Search