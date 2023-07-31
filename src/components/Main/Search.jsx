import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MovieTable = styled.div`
    .movie-table {
        width: 90%;
        border-collapse: collapse;
        margin: 30px auto;
    }

    .movie-table th,
    .movie-table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
        font-size: 12px;
    }

    .movie-table th {
        background-color: #f2f2f2;
    }

    .movie-table img {
        max-width: 100px;
        height: auto;
    }

    .more-button {
        display: block;
        width: 200px;
        margin: 10px auto;
        padding: 10px 20px;
        background-color: #fff;
        color: #000;
        border: 1px solid black;
        border-radius: 10px;
        cursor: pointer;
    }

    .more-button:hover {
        background-color: #000;
        color: #fff;
    }
`;

const Search = () => {
    const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280";
    const newencodingTitle = useSelector(
        (state) => state.ecodingReducer.encodingTitle
    );

    const [movieDetail, setMovieDetail] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(10); // 처음에 5개만 보이도록 설정
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    console.log("🚀 ~ file: Search.jsx:57 ~ Search ~ currentPage:", currentPage)

    const getMovies = async (page) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=4ed08358326bfbef17487ba953a86239&&query=${newencodingTitle}&language=ko-KR&page=${page}`
            );
            // 요청 성공 시의 처리
            console.log("응답 데이터:", response.data.results);

            // 이전에 받아온 데이터와 새로운 데이터를 합쳐서 업데이트
            setMovieDetail((prevMovieDetail) => [
                ...prevMovieDetail,
                ...response.data.results
            ]);
        } catch (error) {
            console.error("오류 발생:", error);
        }
    };

    useEffect(() => {
        // 초기에 첫 페이지 데이터 가져오기
        getMovies(1);
        setMovieDetail([])
    }, [newencodingTitle]);

    console.log(movieDetail);

    const handleLoadMore = () => {
        // "더보기" 버튼을 클릭할 때 다음 페이지 데이터 가져오기
        setCurrentPage(currentPage + 1);
        setVisibleMovies(visibleMovies + 20);
        getMovies(currentPage);
    };

    // 줄거리를 150자로 제한하는 함수
    const trimOverview = (overview, limit = 150) => {
        if (overview) {
            if (overview.length <= limit) {
                return overview;
            } else {
                return overview.slice(0, limit) + "...";
            }
        }
    };

    return (
        movieDetail.length > 0 && (
            <MovieTable>
                <table className="movie-table">
                    <thead>
                        <tr>
                            <th>포스터</th>
                            <th>영화 제목</th>
                            <th>개봉 날짜</th>
                            <th>평점</th>
                            <th>줄거리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieDetail
                            .slice(0, visibleMovies)
                            .map((item, idx) => {
                                // 현재 상태에 맞게 보여질 영화 정보만 slice하여 표시
                                return (
                                    <tr key={idx}>
                                        <td>
                                            <div>
                                                <img
                                                    src={
                                                        IMG_BASE_URL +
                                                        item.poster_path
                                                    }
                                                    alt="poster"
                                                />
                                            </div>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.release_date}</td>
                                        <td>{item.vote_average}</td>
                                        <td>{trimOverview(item.overview)}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                {visibleMovies < movieDetail.length && (
                    <button className="more-button" onClick={handleLoadMore}>
                        더보기
                    </button>
                )}
            </MovieTable>
        )
    );
};

export default Search;
