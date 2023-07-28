import React, { useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux';
import { encodingTitle } from '../../modules/searchInput';
import { useNavigate } from "react-router-dom";



const SearchInput = () => {
    const [movieTitle, setMovieTitle] =useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const onSubmit = (e) => {
        setMovieTitle("")
        e.preventDefault();
        const newTitle = encodeURIComponent(movieTitle)
        dispatch(encodingTitle(newTitle));
        navigate('/search')
      }
      
  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder='검색할 영화 제목을 입력해주세요' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}/>
        <input type="submit" />
    </form>
  )
}

export default SearchInput