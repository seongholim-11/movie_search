import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [movieInfo, setMovieInfo] = useState([]);

    const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280";

    const getMovies = async () => {
        await axios
            .get(
                "https://api.themoviedb.org/3/search/movie?query=%EB%B2%94%EC%A3%84&language=kr-KO"
            )
            .then((response) => {
                // 요청 성공 시의 처리
                console.log("응답 데이터:", response.data.results);
                setMovieInfo(response.data.results);
            })
            .catch((error) => {
                console.error("오류 발생:", error);
            });
    };

    useEffect(() => {
        getMovies();
    }, []);
  return (
    <div>Search</div>
  )
}

export default Search