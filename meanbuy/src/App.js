
import './App.css';

import Navbar from './Components/navbar';

import Footer from './Components/footer';

import AllRoutes from './Components/Routes/AllRoutes';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
