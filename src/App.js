import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import LeoClub from './pages/LeoClub';
import LCIF from './pages/LCIF';
import Members from './pages/Members';
import Events from './pages/Events';
import Conference from './pages/Conference';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about-us' element={ <AboutUs />} />
     <Route path='/leo-club' element={  <LeoClub />} />
     <Route path='/lcif' element={  <LCIF />} />
     <Route path='/members' element={  <Members />} />
     <Route path='/events' element={  <Events />} />
     <Route path='/conference' element={  <Conference />} />

     </Routes> 
   </Layout>
  );
}

export default App;
