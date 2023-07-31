import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';

const Search = () => {
    const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280";
    const newencodingTitle = useSelector((state) => state.ecodingReducer.encodingTitle)
    console.log("🚀 ~ file: Search.jsx:9 ~ Search ~ newencodingTitle:", newencodingTitle)
    const [movieDetail, setMovieDetail] = useState([])

    const getMovies = async () => {
        await axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=4ed08358326bfbef17487ba953a86239&query=${newencodingTitle}&language=ko-KR`
            )
            .then((response) => {
                // 요청 성공 시의 처리
                console.log("응답 데이터:", response.data.results);
                setMovieDetail(response.data.results)
            })
            .catch((error) => {
                console.error("오류 발생:", error);
            });
    };

    useEffect(() => {
      getMovies();
    }, [newencodingTitle]);

    console.log(movieDetail)
    return (
    <div>
        {
            movieDetail.map((item, idx) => {
                return(
                    <p>{item.title}</p>
                )
            })
        }
    </div>
  )
}

export default Search