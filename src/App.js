
// import './App.css';

import { useEffect, useState } from "react";
import HomeAnime from "./components/HomeAnime";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from "./components/SignUp";
import { useGlobalContext } from "./components/global";
import PopularAnime from "./components/PopularAnime";
import AnimeInfo from "./components/AnimeInfo";
import UpcomingAnime from "./components/UpcomingAnime";
import { AuthProvider } from "./components/AuthContext";
import AiringAnime from "./components/AiringAnime";
import TopRankedAnime from "./components/TopRankedAnime";




function App() {
  const global = useGlobalContext();
  console.log(global)

  
  
  return (
    <div style={{"backgroundColor" : "black"}}>
    <AuthProvider>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      <Route exact path='/homeanime' element={<HomeAnime/>}/>
      <Route exact path='/' element={<HomeAnime/>}/>
      <Route exact path='/popular' element={<PopularAnime/>}/>
      <Route exact path='/upcoming' element={<UpcomingAnime/>}/>
      <Route exact path='/airing' element={<AiringAnime/>}/>
      <Route exact path='/top' element={<TopRankedAnime/>}/>
      <Route exact path='/anime/:id' element={<AnimeInfo/>}/>
    </Routes>
    </Router>
    </AuthProvider>

    {/* <PopularAnime/> */}
    </div>
  );
}

export default App;
