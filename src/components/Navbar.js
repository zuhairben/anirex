import React, { useState } from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
import PopularAnime from './PopularAnime';
import HomeAnime from './HomeAnime';
import { useAuth } from './AuthContext';
import { auth } from './FirebaseConfig'
import { useGlobalContext } from './global';



function Navbar() {

    const [rendered, setRendered] = useState('homeanime')

    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <PopularAnime rendered = {rendered}/>
            default:
                return <HomeAnime rendered = {rendered} />
        }
    }

    const {getUpcomingAnime, getAiringAnime, getTopRankedAnime} = useGlobalContext();


    const { user } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Anirex</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {user ? (
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
                        <li className="nav-link mx-4">
                            <Link className="nav-link btn btn-outline-danger" aria-current="page" to="/homeanime">Home</Link>
                        </li>
                        <li className="nav-link mx-4">
                            <Link className="nav-link btn btn-outline-danger" to="/popular">Popular</Link>
                        </li>
                        <li className="nav-link mx-4">
                            <Link className="nav-link btn btn-outline-danger" to="/airing" onClick={() => {getAiringAnime()}}>Airing</Link>
                        </li>
                        <li className="nav-link mx-4">
                            <Link className="nav-link btn btn-outline-danger" to="/upcoming" onClick={() => {getUpcomingAnime()}}>Upcoming</Link>
                        </li>
                        <li className="nav-link mx-4">
                            <Link className="nav-link btn btn-outline-danger" to="/top" onClick={() => {getTopRankedAnime()}}>Top Ranked</Link>
                        </li>
                    </ul>):
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
                    <li className="nav-link mx-4">
                        <Link className="nav-link btn btn-outline-danger disabled" aria-current="page" to="/homeanime" >Home</Link>
                    </li>
                    <li className="nav-link mx-4">
                        <Link className="nav-link btn btn-outline-danger disabled" to="/popular">Popular</Link>
                    </li>
                    <li className="nav-link mx-4">
                        <Link className="nav-link btn btn-outline-danger disabled" to="/airing">Airing</Link>
                    </li>
                    <li className="nav-link mx-4">
                        <Link className="nav-link btn btn-outline-danger disabled" to="/upcoming">Upcoming</Link>
                    </li>
                    <li className="nav-link mx-4">
                        <Link className="nav-link btn btn-outline-danger disabled" to="/top">Top Ranked</Link>
                    </li>
                </ul>
                }
                    {user ? (
                        <Link className="btn btn-danger mx-2" to="/login" role='button' onClick={() => auth.signOut()}>Logout</Link>
                    ) : (
                        <form className="d-flex" role="search">
                            <Link className="btn btn-danger mx-2" to="/login" role='button'>Login</Link>
                            <Link className="btn btn-danger mx-2" to="/signup" role='button'>SignUp</Link>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
