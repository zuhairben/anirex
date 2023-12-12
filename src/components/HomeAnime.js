import React from 'react'
import './homeanime.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Search from "../components/Search";
import { useGlobalContext } from './global'
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';

function HomeAnime() {
    const {isSearch, searchResults} = useGlobalContext();

    const conditionalRender = () => {
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
    

    return (
        <>
        <div>
        <Search> {conditionalRender}</Search>
            <div className="container-fluid my-3">
                <div className="heading col-md-4 my-4" style={{
                    color: "red", "font-size": "30px",
                    "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                }}>Popular Anime</div>
                {/* <div className="row"> */}
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={6}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay = {{"delay": 2000,
                    "disableOnInteraction": false}}
                >
                <SwiperSlide><Card style={{width: '10rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" />
                    <Card.Body>
                        <Card.Title>Attack On Titan</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1079/138100.jpg" />
                    <Card.Body>
                        <Card.Title>Death Note</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1208/94745.jpg" />
                    <Card.Body>
                        <Card.Title>Fullmetal Alchemist...</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/12/76049.jpg" />
                    <Card.Body>
                        <Card.Title>One Punch Man</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/11/39717.jpg" />
                    <Card.Body>
                        <Card.Title>Sword Art Online</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>


                <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/10/78745.jpg" />
                    <Card.Body>
                        <Card.Title>My Hero Academia</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" />
                    <Card.Body>
                        <Card.Title>Demon Slayer</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/13/17405.jpg" />
                    <Card.Body>
                        <Card.Title>Naruto</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1498/134443.jpg" />
                    <Card.Body>
                        <Card.Title>Tokyo Ghoul</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1337/99013.jpg" />
                    <Card.Body>
                        <Card.Title>Hunter X Hunter</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/5/87048.jpg" />
                    <Card.Body>
                        <Card.Title>Your Name</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                    <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/4/84177.jpg" />
                    <Card.Body>
                        <Card.Title>Attack on Titan...</Card.Title>
                        <Button variant="danger">View</Button>
                    </Card.Body>
                </Card></SwiperSlide>



            </Swiper>
        </div >



            <div className="container-fluid my-4">
                <div className="heading col-md-4 my-4" style={{
                    color: "red", "font-size": "30px",
                    "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                }}>Airing Anime</div>
                {/* <div className="row"> */}
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={6}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay = {{"delay": 2000,
                    "disableOnInteraction": false}}
                >
                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1015/138006.jpg" />
                        <Card.Body>
                            <Card.Title>Frieren: Beyond Journey's End</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1792/138022.jpg" />
                        <Card.Body>
                            <Card.Title>Jujutsu Kaisen Season 2</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1280/138635.jpg" />
                        <Card.Body>
                            <Card.Title>Heaven Official's Blessing...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/6/73245.jpg" />
                        <Card.Body>
                            <Card.Title>One Piece</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1708/138033.jpg" />
                        <Card.Body>
                            <Card.Title>The Apothecary Diaries</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1622/139331.jpg" />
                        <Card.Body>
                            <Card.Title>The Eminence in Shadow Season 2</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1236/138696.jpg" />
                        <Card.Body>
                            <Card.Title>Dr.STONE NEW WORLD</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '12.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1259/110227.jpg" />
                        <Card.Body>
                            <Card.Title>Holo Graffiti</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1506/138982.jpg" />
                        <Card.Body>
                            <Card.Title>SPY×FAMILY Season 2</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '12rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/7/75199.jpg" />
                        <Card.Body>
                            <Card.Title>Case Closed</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '10rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1419/126374.jpg" />
                        <Card.Body>
                            <Card.Title>Fights Break Sphere...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '10rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1384/136408.jpg" />
                        <Card.Body>
                            <Card.Title>Zom 100: Bucket List of the Dead</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>
                </Swiper>
            </div>

            <div className="container-fluid my-4">
                <div className="heading col-md-4 my-4" style={{
                    color: "red", "font-size": "30px",
                    "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                }}>Upcoming Anime</div>
                {/* <div className="row"> */}
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={6}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay = {{"delay": 2000,
                    "disableOnInteraction": false}}
                >
                    <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1800/136599.jpg" />
                        <Card.Body>
                            <Card.Title>KonoSuba: God's Blessing on This...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1752/139314.webp" />
                        <Card.Body>
                            <Card.Title>Tsukimichi-Moonlit Fantasy...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1885/127108.jpg" />
                        <Card.Body>
                            <Card.Title>One Punch Man Season 3</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1332/139318.jpg" />
                        <Card.Body>
                            <Card.Title>Classroom of the Elite III</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '10rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1766/130895.jpg" />
                        <Card.Body>
                            <Card.Title>That Time I Got Reincarnated...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1437/115925.jpg" />
                        <Card.Body>
                            <Card.Title>Saga of Tanya the Evil II</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1230/136537.jpg" />
                        <Card.Body>
                            <Card.Title>Demon Slayer: Hashira Training Arc</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1477/136727.jpg" />
                        <Card.Body>
                            <Card.Title>Oshi No Ko Season 2</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1267/136999.webp" />
                        <Card.Body>
                            <Card.Title>Mushoku Tensei: Jobless Reincarnation...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1160/128045.jpg" />
                        <Card.Body>
                            <Card.Title>My Dress-Up Darling (Sequel)</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1432/105265.webp" />
                        <Card.Body>
                            <Card.Title>Uzumaki: Spiral into...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1954/136491.webp" />
                        <Card.Body>
                            <Card.Title>My Hero Academia...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                </Swiper>
            </div>


            <div className="container-fluid my-4">
                <div className="heading col-md-4 my-4" style={{
                    color: "red", "font-size": "30px",
                    "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                }}>Top Ranked</div>
                {/* <div className="row"> */}
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={6}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay = {{"delay": 2000,
                    "disableOnInteraction": false}}
                >
                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1208/94745.webp" />
                        <Card.Body>
                            <Card.Title>Fullmetal Alchemist...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1015/138006.webp" />
                        <Card.Body>
                            <Card.Title>Frieren: Beyond Journey's End</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/3/72078.webp" />
                        <Card.Body>
                            <Card.Title>Gintama Season 4</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1517/100633.webp" />
                        <Card.Body>
                            <Card.Title>Attack on Titan Season 3...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1337/99013.webp" />
                        <Card.Body>
                            <Card.Title>Hunter x Hunter</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1908/135431.webp" />
                        <Card.Body>
                            <Card.Title>Bleach: Thousand-Year...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1245/116760.webp" />
                        <Card.Body>
                            <Card.Title>Gintama: The Very Final</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1160/122627.webp" />
                        <Card.Body>
                            <Card.Title>Kaguya-sama: Love is War...</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '11rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/1452/123686.webp" />
                        <Card.Body>
                            <Card.Title>Gintama: Enchousen</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    <SwiperSlide><Card style={{ width: '10.5rem', color: "red", "font-size": "30px", "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/4/50361.webp" />
                        <Card.Body>
                            <Card.Title>Gintama Season 2</Card.Title>
                            <Button variant="danger">View</Button>
                        </Card.Body>
                    </Card></SwiperSlide>

                    

                </Swiper>
            </div>
            </div>

        </>
    )
}


export default HomeAnime


