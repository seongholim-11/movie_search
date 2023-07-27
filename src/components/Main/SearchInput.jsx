import React, { useState } from 'react'



const SearchInput = () => {
    const [movieTitle, setMovieTitle] =useState("");
    const [encodingTitle, setEncodingTitle] =useState("");
    
    const onSubmit = (e) => {
        setMovieTitle("")
        e.preventDefault();
        setEncodingTitle(encodeURIComponent(movieTitle));
        console.log("🚀 ~ file: SearchInput.jsx:8 ~ SearchInput ~ encodingTitle:", encodingTitle)
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder='검색할 영화 제목을 입력해주세요' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}/>
        <input type="submit" />
    </form>
  )
}

export default SearchInput