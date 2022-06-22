import { Route, Routes } from 'react-router-dom';
import Header from './components/main components/Header';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs'
import LeoClub from './components/Pages/LeoClub'
import LCIF from './components/Pages/LCIF'
import Member from './components/Pages/Member'
import Events from './components/Pages/Events'
import Conference from './components/Pages/Conference'
import Join from './components/Pages/Join';
import Donation from './components/Pages/Donation'
import Services from './components/Pages/Services'
import Leadership from './components/Pages/Leadership'
import RepliesOfContactUs from './components/Admin Page/RepliesOfContactUs';
import ReplyToFeedback from './components/Admin Page/ReplyToFeedback'
import Footer from './components/footer'
import Login from './components/Pages/Login';
import './App.css';




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/leoclub' element={<LeoClub />} />
        <Route path='/lcif' element={<LCIF />} />
        <Route path='/member' element={<Member />} />
        <Route path='/events' element={<Events />} />
        <Route path='/conference' element={<Conference />} />
        <Route path='/join' element={<Join />} />
        <Route path='/donate' element={<Donation />} />
        <Route path='/services' element={<Services />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/repliesofcontactUs' element={<RepliesOfContactUs />} />
        <Route path='/replytofeedback' element={<ReplyToFeedback />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />

{/* <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
