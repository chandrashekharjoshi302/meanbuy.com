import { Box, HStack ,Text, Link} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <br /><br /><br />
    <Box w="100%" h="500px" bg="#f2f2f2" >
        <HStack spacing='40px'>
            <Box w='200px' h="200px" mt="10px">
                <Text color="#f3af93">
                    OUR POLICIES
                </Text>
                <Text>
                <Link href="https://www.meanbuy.com/precautions">Covid-19 Precautions</Link>
                </Text>
                <Text>    
                <Link href='https://www.meanbuy.com/about/our_promise'>Our Promise</Link>
                </Text>
                <Text>    
                <Link href='https://www.meanbuy.com/terms/terms_and_conditions'>Terms & Conditions</Link>
                </Text>
                <Text>    
                <Link href='https://www.meanbuy.com/customs'>Customs Tariffs & Fees</Link>
                </Text>
                <Text>
                <Link href='https://www.meanbuy.com/terms/privacy'>Privacy Policy</Link>
                </Text>
            </Box>
            <Box w='200px' h="200px" mt="10px">
            <Text color="#f3af93">
                CORPORATE
            </Text>
            <Text>
                 <Link href='https://www.meanbuy.com/merchant/signup'>Sell with us</Link>
            </Text>
            <Text>
                 <Link href='https://www.meanbuy.com/careers'>Carrer Opportunity</Link>
            </Text>
            <Text>
                 <Link href='https://www.meanbuy.com/blog' >Our Blog</Link>
            </Text>
            <Text>
                 <Link href='https://www.meanbuy.com/sitemap' >Sitemap</Link>   
            </Text>
            </Box>
            <Box w='150px' h="200px" mt="10px">
                <Text color="#f3af93">
                    HELP
                </Text>
                <Text>
                    <Link href='https://www.meanbuy.com/howitworks'>How Meanbuy Works</Link>
                </Text>
                <Text>
                    <Link >My orders</Link>
                </Text>
                <Text>
                    <Link href='https://www.meanbuy.com/shipping_return/returns'>Exchanges, Returns & Refunds</Link>
                </Text>
                <Text>
                    <Link href='https://www.meanbuy.com/contact'>Contact Us</Link>
                </Text>
                <Text>
                    <Link href='https://www.meanbuy.com/faq'>FAQ</Link>
                </Text>
            </Box>
            <Box w='150px' h="200px">
                <Text color="#f3af93">
                    SELL WITH US
                </Text>
                <Text>
                    <Link href='https://www.meanbuy.com/sell'>General Information</Link>
                </Text>
                <Text>
                    <Link>Signup</Link>
                </Text>
            </Box>
        </HStack>
        <br /><br />
    <Text color="#DF0C0C " >Meanbuy Is Your One Stop Destination For Online Shopping</Text>
    <Text color="#020003">Meanbuy is a comprehensive platform for you to choose how you shop, whether it is buying instantly, waiting to save or to pick up your order from the store after freezing it.</Text>
    <br />
    <Text color="#020003">
Everyone will agree that it is not easy to go down to the market in massive traffic, driving through crowds, all striving for the same trendy clothing, expecting in line to try on the picked up items in the trial rooms, and finally deciding on the product you buy. Some people like to personally analyze the product before purchasing it in the store. Although some people do not like to shop online, others beg to differ by using the internet to do things. For all you internet enthusiasts who like online shopping,</Text>
    <br />
    <Text color="#DF0C0C ">Get The Best Of Your Online Shopping Experience</Text>
    <Text color="#020003">Keeping mind the fact that everything is just a tap away in today's world, fashion and clothing have no escape from the cyberspace. Online shopping is made easier with various categories and filters that let you get the best result of what you're looking for. At Meanbuy.com we specialize in categorizing the required fields as per your convenience to provide you the best online shopping experience. Categories like Online shopping for kids, online shopping for men, online shopping for women, online shopping for accessories, etc. is curated to make this experience even more convenient. Find the Best Online Shopping in Hyderabad only at Meanbuy.</Text>
    <br />
    <Text color="#DF0C0C ">Meanbuy Let You choose At Your Convenience</Text>
    <Text color="#020003">What if you belong to the former kind, where you like to buy the product from the shop after analyzing it personally? But don't want to miss out on a fantastic product in the process? We got your back! At Meanbuy.com, you can freeze the product and pick up from your neighboring store without the worry of missing the product. Another additional feature of this website is, you can wait and save on the products you like.</Text>
    </Box>
    </>
  )
}

export default Footer