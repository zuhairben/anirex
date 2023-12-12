import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';

function AnimeInfo() {

    const { id } = useParams();


    const [anime, setAnime] = useState({})
    const [characters, setCharacters] = useState([])
    const [showMore, setShowMore] = useState(false)

    const { title, synopsis, trailer, duration, aired, season,
        images, rank, score, scored_by, popularity,
        status, rating, source } = anime

    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }


    const getCharacters = async(anime) =>{
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
    }


    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [])

    return (
        <AnimeStyled>
            <h1 className="my-3">{title}</h1>
            <div className="details">
                <div className="detail">
                    <div className="image">
                        <img src={images?.jpg.large_image_url} alt="" />
                    </div>
                    <div className="anime-details" style={{
                        color: "red", "font-size": "20px",
                        "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    }}>
                        <p><span>Aired: </span><span>{aired?.string}</span></p>
                        <p><span>Rating: </span><span>{rating}</span></p>
                        <p><span>Rank: </span><span>{rank}</span></p>
                        <p><span>Score: </span><span>{score}</span></p>
                        <p><span>Scored By: </span><span>{scored_by}</span></p>
                        <p><span>Popularity: </span><span>{popularity}</span></p>
                        <p><span>Status: </span><span>{status}</span></p>
                        <p><span>Source: </span><span>{source}</span></p>
                        <p><span>Season: </span><span>{season}</span></p>
                        <p><span>Duration: </span><span>{duration}</span></p>
                    </div>
                </div>
                <p className="description">
                    {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less' : 'Read More'}</button>
                </p>
            </div>
            <h3 className='title'>Trailer</h3>
            <div className="trailer-con">
                {trailer?.embed_url && 
                <iframe src={trailer?.embed_url} title={title} 
                width="800"
                height="450"
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyrascope; pictue-in-picture'
                allowFullScreen></iframe>
                }
            </div>
            <h3 className='title'>Characters</h3>
            <div className="characters">
                {characters?.map((character, index) => {
                    const {role} = character
                    const {images, name, mal_id} = character.character
                    return <Link to={`/character/${mal_id}`} key={index}>
                        <div className="character">
                        <img src={images?.jpg.image_url} alt="" />
                        <h4>{name}</h4>
                        <p>{role}</p>
                        </div>
                    </Link>
                })}
            </div>
        </AnimeStyled>
    )
}

const AnimeStyled = styled.div`
    padding: 3rem 18rem;
    h1{
        color: red; 
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        display: incline-block;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        cursor: pointer;
        background: linear-gradient( to right, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: red;
        transition: all .4s ease-in-out;
        &:hover{
            transform: skew(-5deg);
        }       
    }
    .title{
        color: red; 
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        display: incline-block;
        margin: 3rem 0;
        font-size: 2rem;
        cursor: pointer;
        background: linear-gradient( to right, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: red;
    }

    .description{
        color: red; 
        font-size: 20px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-top: 2rem;
        line-height: 1.7rem;
        button{
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: blue;
            font-weight: 600;
        }
    }

    .details{
        border-radius: 20px;
        padding: 2rem;
        border: 5px solid red; 
        .detail{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            img{
                border-radius: 7px;
            }
        } 
    }

    .trailer-con{
        display: flex;
        justify-content: center;
        align-items: center;
        iframe{
            outline: none;
            border: 5px solid red;
            padding: 1.5rem;
            border-radius: 5px;

        }
    }

    .characters{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 1.2rem;
        padding: 2rem;
        border-radius: 10px;
        border: 5px solid red;
        .character{
            padding: .4rem .6rem;
            border-radius: 5px;
            transition: all .4s ease-in-out;
            img{
                width: 75%;
            }

            h4{
                padding: .5rem 0;
                color: red;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }

            p{
                color: red;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }

            &:hover{
                transform: translateY(-5px);
            }
        }
    }
`;

export default AnimeInfo
