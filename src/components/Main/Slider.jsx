// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import styled from "styled-components";

const ImgWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: 0.5s;
    overflow: hidden;
    &:hover {
        transform: scale(1.1);
        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.5);
        }
    }
    .movieInfo {
        display: none;
        color: #fff;
    }
    &:hover .movieInfo {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
    }
`;

const Slider = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviePoster, setMoviePoster] = useState([]);

    const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280";

    const getMovies = async () => {
        await axios
            .get(
                "https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR"
            )
            .then((response) => {
                // 요청 성공 시의 처리
                console.log("응답 데이터:", response.data.results);
                setMoviePoster(response.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("오류 발생:", error);
            });
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                loop={true}
                navigation={true}
                slidesPerView={3}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{ margin: "0", width: "100%" }}
            >
                {moviePoster.map((item, idx) => (
                    <SwiperSlide
                        key={item.id}
                        style={{
                            userSelect: "none",
                            boxSizing: "border-box",
                            padding: "50px 30px",
                        }}
                    >
                        <ImgWrap>
                            <img
                                src={
                                    IMG_BASE_URL + moviePoster[idx].poster_path
                                }
                                alt="poster"
                                className="movieImg"
                                style={{
                                    
                                }}
                            />
                            <div className="movieInfo">
                                <h1 className="movieTile">{item.title}</h1>
                                <h2 className="movieRelease">{item.release_date}</h2>
                            </div>
                        </ImgWrap>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;
