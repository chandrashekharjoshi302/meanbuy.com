import React,{useState} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Button,
    FormLabel,
    FormControl,
    Text,
  } from '@chakra-ui/react'


const Checkout = () => {
    const params=useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Card, setCard] = useState("")
    const [Name, setName] = useState("")
    const [Cvv, setCvv] = useState("")
    const [date, setdate] = useState("")

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
    console.log(date)
    const handleSubmit=async ()=>{
        if(Card!="" && Name!="" && Cvv!="" && date!=""){
            alert("Payment has been made successful")
            alert("Money has been debited")
        }else{
            alert("Fill all Credentials to Confirm order.")
        }
    }
  return (
    <>
        <Text>Proceed to payment, Your cart value is: {params.price} </Text>
      <Button onClick={onOpen}>Proceed</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Gateway</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Total Bill:₹{params.price}</Text>
            <FormControl>

              <FormLabel>Card Number</FormLabel>
              <Input type="number" ref={initialRef} placeholder='Card Number' onChange={(e)=>setCard(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder='Last name' onChange={(e)=>setName(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>CVV</FormLabel>
              <Input type="password" placeholder='CVV' onChange={(e)=>setCvv(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Expiry Date:</FormLabel>
              <Input type="date" placeholder='Expiry Date' onChange={(e)=>setdate(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Make Payment
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Checkout