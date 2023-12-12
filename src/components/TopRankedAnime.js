import React from 'react'
import { useGlobalContext } from './global'
import { Link } from 'react-router-dom';
import styled from "styled-components"
import Search from './Search';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function TopRankedAnime() {
    const {topAnime, isSearch, searchResults} = useGlobalContext();

    const conditionalRender = () => {
        if(!isSearch){
            return topAnime.map((anime) => {
                // return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                //     <img src={anime.images.jpg.large_image_url} alt=""/>
                // </Link>
                return <Card style={{width: '15rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                <Card.Img variant="top" src={anime.images.jpg.large_image_url} />
                <Card.Body>
                    <Card.Title>{anime.title}</Card.Title>
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <Button variant="danger">View</Button></Link>
                </Card.Body>
            </Card>
            })
        }
        else{
            return searchResults.map((anime) => {
                // return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                //     <img src={anime.images.jpg.large_image_url} alt=""/>
                // </Link>
                return <Card style={{width: '15rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                <Card.Img variant="top" src={anime.images.jpg.large_image_url} />
                <Card.Body>
                    <Card.Title>{anime.title}</Card.Title>
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <Button variant="danger">View</Button></Link>
                </Card.Body>
            </Card>
            })
        }
    }
  return (
    <>
    <Search/>
    <div className="heading col-md-4 my-4" style={{
        color: "red", "font-size": "40px",
        "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    }}>Top Ranked Anime</div>
    <PopularStyled>
      <div className="popular-anime">
            {conditionalRender()}
      </div>
    </PopularStyled>
    </>
  )
}

const PopularStyled = styled.div`
    display: flex;
    .popular-anime{
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 5rem;
        padding-right:0;
        width: 100%;
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        border-top: 5px solid red
        a{
            height: 500px;
            border-radius: 7px;
            border: 5px solid red;
        }
        a img{
            width: 85%;
            height: 85%;
            object-fit: cover;
            border-radius: 5px;
        }
    }
`;

export default TopRankedAnime
