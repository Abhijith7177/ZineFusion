import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './Components/User/Homepage';
import AboutUs from './Components/User/AboutUs';
import Contact from './Components/User/Contact';
import Blog from './Components/User/Blog';
import Service from './Components/User/Service';
import CaravanBooking from './Components/User/CaravanBooking';
import TicketBooking from './Components/User/TicketBooking';
import Login from './Components/User/Login';
import Menu from './Components/User/Menu';
import Movies from './Components/User/Movies/Movies';
import ShortFilms from './Components/User/ShortFilms/ShortFilms';
import WebSeries from './Components/User/WebSeries/WebSeries';
import Header from './Components/User/Header';
import Footer from './Components/User/Footer';
import TvShows from './Components/User/TvShows/TvShows';
import Events from './Components/User/Events/Events';
import Albums from './Components/User/Albums/Albums';

import Details from "./Components/User/Details";
import ActorDetails from "./Components/Pages/ActorDetails";
import MovieDetails from './Components/User/MovieDetails';


// Admin
import DefaultLayout from "../src/Components/Admin/DefaultLayout/Index";
import AdminRoutes from "./Routes/AdminRoutes";


// New login
import LoginPage from "../src/Components/Login&Singup/LoginPage.js"
import SingupPage from "../src/Components/Login&Singup/SingupPage.js"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/header" element={<Header/>} />
      <Route path="/footer" element={<Footer/>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/services/caravanbooking" element={<CaravanBooking/>} />
        <Route path="/services/ticketbooking" element={<TicketBooking/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signin" element={<SingupPage />} />
        <Route path="/menu" element={<Menu/>} /> 
        <Route path="/movies" element={<Movies/>} />
        <Route path="/shortfilms" element={<ShortFilms/>}/>
        <Route path="/webseries" element={<WebSeries/>}/>
        <Route path="/tvshows" element={<TvShows/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/albums" element={<Albums/>}/>
       

        <Route path="/actorDetails" element={<ActorDetails/>}/>
        <Route path="/movieDetails" element={<MovieDetails/>}/>

        {/* Admin*/}

     
        <Route path="/admin" element={<DefaultLayout />}>
          {AdminRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>

      </Routes>
    </Router>
  );
}

export default App;