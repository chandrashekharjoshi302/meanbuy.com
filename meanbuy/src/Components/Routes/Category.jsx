import { Box ,Center,Grid,GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {getdata} from '../Fetch/axios'
import Datamap from '../Fetch/data_map'

const Category = () => {
    const [data, setdata] = useState([])
    const [cat, setcat] = useState(null)
    const [loading, setloading] = useState(false)
    useEffect(()=>{
        setloading(true)
        getdata({category:cat,limit:null}).then((res)=>setdata(res.data))
        setloading(false) 
    },[cat])
    console.log(cat)
    if(loading){
        return(
            <Center>
                <Image src='https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp' alt="..Loading"/>
            </Center>
        )
    }

  return (
    <div>
        <Box bg="black" color="white" mt="50px">
            <Grid templateColumns="repeat(8,150px)" templateRows="repeat(2,20px)" gap="20px">
                <GridItem>
                <GridItem cursor="pointer" onClick={()=>setcat("Kitchen")}>Kitchen</GridItem>
                <GridItem cursor="pointer"onClick={()=>setcat("fashion")}>Fashion</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("home_decor")}>Home decor</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("electronic")}>Electronic</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("jewellery")}>Jewellery</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("Bluetooth")}>Bluetooth</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("home_improvement")}>Home Improvement</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("keyboard")} >Keyboard</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("Makeup")}>Makeup</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("men_watch")}>Men's Watch</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("mobile")}>Mobile Accesories</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("small")}>Small Appliances</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("toys")}>Toys</GridItem>
                </GridItem>
            </Grid>          
        </Box>
        <Grid templateColumns="1fr 1fr 1fr 1fr" gap="10px" mt="50px" >
            
            {data.map((dat)=>(
                <Datamap key={dat.id} id={dat.id} src={dat.image} price={dat.price} save={dat.save} name={dat.name} category={dat.category} />
            ))}
        </Grid>
    </div>
  )
}

export default Category