import React from 'react'
import './search.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { useGlobalContext } from './global';

function Search() {

  const {handleSubmit, search, searchAnime, handleChange} = useGlobalContext();

  return (
    <div >
      <nav className="navbar bg-body-white my-4" style={{ float: "left" }}>
        <div className="container-fluid">
          <form className="d-flex" role="search"  onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange}/>
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>
          <Dropdown className='mx-5'>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height:"200px", overflowY:"auto"}} role="menu">
              
              <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2" >Adventure</Dropdown.Item>
              <Dropdown.Item href="#/action-3" >Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-3" >Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3" >Horror</Dropdown.Item>
              <Dropdown.Item href="#/action-3" >Fantasy</Dropdown.Item>
              <Dropdown.Item href="#/action-3" >Psychological</Dropdown.Item>
              <Dropdown.Item href="#/action-3" >Romance</Dropdown.Item>
              <Dropdown.Item href="#/action-3" >Slice of Life</Dropdown.Item>
              <Dropdown.Item href="#/action-3" >Sports</Dropdown.Item>
              <Dropdown.Item href="#/action-3" >Sci-Fi</Dropdown.Item>
            
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='mx-4'>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Year
            </Dropdown.Toggle>

            <Dropdown.Menu role="menu" style={{height:"200px", overflowY:"auto"}}>
              
              <Dropdown.Item href="#/action-1">2023</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2022</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2021</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2020</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2019</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2018</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2017</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2016</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2015</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2014</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2013</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2012</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2011</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2010</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2009</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2008</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2007</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2006</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2005</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2004</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2003</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2002</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2001</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2000</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>


    </div>
  )
}

export default Search
