import React, { useState } from 'react'
import { useDispatch  } from 'react-redux';

import { encodingTitle } from '../../modules/searchInput';
import Search from './Search';

import styled from 'styled-components'

const InputWrap = styled.div`
  width: 100%;
  .form{
    display: flex;

  }
  
`

const InputStyle = styled.div`
  input{
    width: 200px;
    height: 50px;
    
  }
`

const SearchInput = () => {
    const [movieTitle, setMovieTitle] =useState("");

    const dispatch = useDispatch()
    
    const onSubmit = (e) => {
        setMovieTitle("")
        e.preventDefault();
        const newTitle = encodeURIComponent(movieTitle)
        dispatch(encodingTitle(newTitle));
      }
      
  return (
   <div>
      <InputWrap>
        <form onSubmit={onSubmit}>
            <div className='form'>
              <InputStyle><input type="text" placeholder='검색할 영화 제목을 입력해주세요' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}/></InputStyle>
              <input type="submit" />
            </div>
        </form>
      </InputWrap>
      <Search/>
   </div>

  )
}

export default SearchInput