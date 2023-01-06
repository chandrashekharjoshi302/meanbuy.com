import { Text , Flex, Heading,Center,Image } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getdata } from '../Fetch/axios'
import Datamap from '../Fetch/data_map'

const Main = () => {
    
    const [homedecor, sethomedecor] = useState([])
    const [jwellery, setjwellery] = useState([])
    const [electronic, setelectronic] = useState([])
    const [fashion, setfashion] = useState([])
    const [bluetooth, setbluetooth] = useState([])
    const [improve, setimprove] = useState([])
    const [keyboard, setkeyboard] = useState([])
    const [kitchen, setkitchen] = useState([])
    const [makeup, setmakeup] = useState([])
    const [flash, setflash] = useState([])
    useEffect(()=>{
       
        getdata({category:"home_decor",limit:4}).then((res)=>sethomedecor(res.data))
        getdata({category:"jewellery",limit:4}).then((res)=>setjwellery(res.data))
        getdata({category:"electronic",limit:4}).then((res)=>setelectronic(res.data))
        getdata({category:"fashion",limit:4}).then((res)=>setfashion(res.data))
        getdata({category:"Bluetooth",limit:4}).then((res)=>setbluetooth(res.data))
        getdata({category:"home_improvement",limit:4}).then((res)=>setimprove(res.data))
        getdata({category:"keyboard",limit:4}).then((res)=>setkeyboard(res.data))
        getdata({category:"Kitchen",limit:4}).then((res)=>setkitchen(res.data))
        getdata({category:"Makeup",limit:4}).then((res)=>setmakeup(res.data))
        getdata({category:"flashsale",limit:4}).then((res)=>setflash(res.data))
        
    },[])
    
    if(homedecor.length===0){
        return (
            <Center>
                <Image src='https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp' alt="..Loading"/>
            </Center>

        )
    }

  return (
    <>
    <Text fontSize="30px" fontWeight="bold" mt="50px" fontFamily="Italics">
        Home Decor
    </Text>
    <Flex gap={20} mt="10px">
    {homedecor.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>        
    ))}
    </Flex>
    <br/>
    <Text fontSize={30} fontFamily="Italics" fontWeight="bold">
        Jewellery
    </Text>
    <Flex gap={20}>
    {jwellery.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>
    ))}
    </Flex>
    <br/>
    <Text fontSize={30} fontFamily="Italics" fontWeight="bold">
        Electronic
    </Text>
    <Flex gap={20}>
    {electronic.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>
    ))}
    </Flex>
    <br/>
    <Text fontSize={30} fontFamily="Helevics" fontWeight="bold">
        Fashion
    </Text>
    <Flex gap={20}>
    {fashion.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>
    ))}
    </Flex>
    <br/>
    <Text fontSize={30} fontFamily="Italics" fontWeight="bold">
        Bluetooth
    </Text>
    <Flex gap={20}>
    {bluetooth.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>
    ))}
    </Flex>
    <br/>
    <Text fontSize={30} fontFamily="Italics" fontWeight="bold">
        Home Improvement
    </Text>
    <Flex gap={20}>
    {improve.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>
    ))}
    </Flex>
    <br/>
    <Text fontSize={30} fontFamily="Italics" fontWeight="bold">
        Keyboard & Mouses
    </Text>
    <Flex gap={20}>
    {keyboard.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>
    ))}
    </Flex>
    <br/>
    <Text fontSize={30} fontFamily="Italics" fontWeight="bold">
        Kitchen
    </Text>
    <Flex gap={20}>
    {kitchen.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>
    ))}
    </Flex>
    <br/>
    <Text fontSize={30} fontFamily="Italics" fontWeight="bold">
        Makeup
    </Text>
    <Flex gap={20}>
    {makeup.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>
    ))}
    </Flex><br/>
    <Text fontSize={30} fontFamily="Italics" fontWeight="bold">
        Flash Sale
    </Text>
    <Flex gap={20}>
    {flash.map((decor)=>(
        <Datamap key={decor.id} id={decor.id} src={decor.image} category={decor.category} name={decor.name} price={decor.price} save={decor.save}/>
    ))}
    </Flex>
    </>
  )
}

export default Main