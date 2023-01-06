import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Img,Input,
    Container,
    Text,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    HStack
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react'
  import { PinInput, PinInputField } from '@chakra-ui/react'

  function Login() {
    const toast = useToast()
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [auth,setAuth] = useState(false);
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [verify,setVerify] = useState(false) ;
    const [otp1,setOtp1] = useState("")
    const [otp2,setOtp2] = useState("")
    const [otp3,setOtp3] = useState("")
    const [otp4,setOtp4] = useState("")
    const [got,setGot] = useState("") ;
     const [logout,setLogout] = useState(false)
    
    let finalOtp = [];
    finalOtp.push(otp1,otp2,otp3,otp4)
    let gotOtp = [];
  //console.log(finalOtp)
    const createOtp = () => {
      var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    setGot(OTP)
    return OTP;
    }

    // alert(createOtp())

    const handleOtp = () => {
         
      if(phone.length < 10) {
        alert('Please Enter 10 Digit Valid phone')
       }
       else if(name.length < 4){
        alert("Please enter Valid Name")
       }
       else {
        if(verify===false && phone.length >= 10 && name.length >= 4) {
          toast({
            title: `Your OTP Is : ${createOtp()}`,
            description: "Enter This Otp to Login",
            position: "top",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          setVerify(!verify)
        }else {
          alert("Enter All Details")
        }
       }
    }

   const handleLogin = () => {
    if(finalOtp.length < 3 || got !== finalOtp.join("") ){
      alert('Please Enter Valid OTP')
    }
    if(got == finalOtp.join("")){
      toast({
        title: "Login Succesfull",
        description: "You are Successfully Logged in",
        position: "top",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      document.getElementById("top").style.backgroundColor="green";
      document.getElementById("top").innerText=`Mr. ${name}.`
      onClose()
      setVerify(!verify)
      setLogout(true)
    }
   }
   

   const handleLogout = () => {
    toast({
      title: "Logout Succesfull",
      description: `You are Succesfully Logged out from Our Website.`,
      position: "top",
      zIndex:"10",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setLogout(false);
    document.getElementById("top").style.backgroundColor="#dc3226";
      document.getElementById("top").innerText=`Loggin/SignUp`
      onClose();
      setVerify(false)
   }
    
  
    return (
      <>
        <Button id="top" onClick={onOpen} style={{backgroundColor:"#dc3226",color:"white"}}>Login/SignUp</Button>
  
        
        <Modal onClose={onClose} isOpen={isOpen} size={{sm:"sm",md: "md",lg: 'lg',xl:"xl",base : "xs"}} isCentered  >
          <ModalOverlay />
          <ModalContent  >
            <ModalHeader>{logout===false ? "Login" : `Logged In as Mr. ${name}`}</ModalHeader>
            <ModalCloseButton />
            <ModalBody  >
             <Box height={{
              sm: "350px",
              md:'400px',
              lg:"500px",
              xl:"500px",
              base :"300px"
             }} style={{
              backgroundColor: "#f5f7fa",
              borderRadius:"8px",
              padding: '4%'
             }}>
              <Text style={{fontWeight: "bold"}} fontSize={{
                 sm: "15px",
                 md: "16px",
                 lg: "18px",
                 xl: "20px",
                 base : "14px"
              }}>Enter your number to Signup or Login</Text>
              <Box style={{backgroundColor:"white",marginTop:"5%",padding:"3%",borderRadius:"5px"}}>
                <Text fontSize={{
                 sm: "13px",
                 md: "14px",
                 lg: "16px",
                 xl: "18px",
                 base : "12px"
              }}>Enter your 10 Digit phone number*</Text>
              <InputGroup>
             <InputLeftAddon children='+91' /> 
              <Input onChange={(e)=> setPhone(e.target.value)} type="number" style={{border: "none",textAlign:"left"}} maxLength="10"  variant='flushed' />
              </InputGroup>
            
                
             
              </Box>

              <Box> <Box style={{backgroundColor:"white",marginTop:"5%",padding:"3%",borderRadius:"5px"}}>
             <Text fontSize={{
                 sm: "13px",
                 md: "14px",
                 lg: "16px",
                 xl: "18px",
                 base : "12px"
              }}>Enter your  Name</Text>
              <InputGroup>
             <InputLeftAddon children='Mr./Mrs.' /> 
              <Input onChange={(e)=> setName(e.target.value)} type="text" style={{border: "none",textAlign:"left"}} maxLength="10"  variant='flushed'  />
              </InputGroup>
             </Box></Box>

              <Box style={{backgroundColor:"white",marginTop:"5%",padding:"1%",borderRadius:"5px"}} >
                {verify ? <Box style={{width:"60%",margin:"auto",marginTop:"5%"}}>
              <Text fontSize={{
                 sm: "13px",
                 md: "14px",
                 lg: "16px",
                 xl: "18px",
                 base : "12px"
              }}>Enter your  OTP</Text> <HStack >
              <PinInput  size={{
                sm: "sm",
                md: "md",
                lg: "lg",
              xl : "lg",
              base: "xs"
              }}>
                <PinInputField onChange={(e)=> setOtp1(e.target.value)} />
                <PinInputField onChange={(e)=> setOtp2(e.target.value)} />
                <PinInputField  onChange={(e)=> setOtp3(e.target.value)} />
                <PinInputField  onChange={(e)=> setOtp4(e.target.value)} />
              </PinInput>
            </HStack></Box> : null}</Box>
              <Box style={{width:"50%",margin:"auto",marginTop:"5%",}}>
              {verify===false ? <Button fontSize={{
                sm:"15px",
                md:"17px",
                lg:"18px",
                xl:"20px",
                base:"14px"
              }} style={{
                backgroundColor:"#c64b8a",color:"white"
              }} onClick={()=>  handleOtp()}>{verify ? "Verify OTP" : 'Create OTP'}</Button> : null}
              </Box>
             </Box>
            </ModalBody>
            <ModalFooter>
          
            {logout ? <Button fontSize={{
              sm:"15px",
              md:"17px",
              lg:"18px",
              xl:"20px",
              base:"14px"
            }} onClick={()=> handleLogout()} style={{
                  backgroundColor:"#dc3226",color:"white",marginRight:"5%"
                }}>Logout</Button> :  (verify ? <Button fontSize={{
                  sm:"15px",
                  md:"17px",
                  lg:"18px",
                  xl:"20px",
                  base:"14px"
                }} onClick={()=> handleLogin()} style={{
                  backgroundColor:"#c64b8a",color:"white",marginRight:"5%"
                }}>Login</Button> : null)}
              <Button onClick={onClose}>Close</Button>
           
            </ModalFooter>
          </ModalContent>
        </Modal>
       
      </>
    )
  }

  export default Login