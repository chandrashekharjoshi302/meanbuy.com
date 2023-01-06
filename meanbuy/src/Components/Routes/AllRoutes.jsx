import { Heading } from '@chakra-ui/react';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../cart';
import Category from './Category';
import Checkout from './Checkout';
import Flashsale from './flashsale';
import Main from './main';
import Search from './Search';
import Single from './Single';
import Trending from './trending';

const AllRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/flashsale" element={<Flashsale/>} />
          <Route path="/bestdeals" element={<>
            <Heading>Page is under Construction..</Heading>
          </>
          } />
          <Route path="/shopbrand" element={<><Heading>Page is under Construction..</Heading></>} />
          <Route path="/trending" element={<Trending/>} />
          <Route path="/new" element={<><Heading>Page is under Construction..</Heading></>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/category/:product_id" element={<Single/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/buy/:price' element={<Checkout/>} />
          
        </Routes>
      );
}

export default AllRoutes