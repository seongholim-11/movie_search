import React, { useState } from 'react'
import { useDispatch  } from 'react-redux';

import { encodingTitle } from '../../modules/searchInput';
import Search from './Search';

import styled from 'styled-components'

const InputWrap = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  .form{
    display: flex;
    position: relative;
    .submit{
      background: none;
      border: none; outline: none;
      position: absolute;
      top: 50%; right: 0;
      transform: translateY(-50%);
      font-size: 20px;
      padding-right: 20px;
    }
  }
`

const InputStyle = styled.div`
  input{
    width: 550px;
    height: 50px;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 20px;
    padding: 0px 50px;
    font-size: 20px;
    box-shadow: 0px 0px 20px #ccc;
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
              <input type="submit" value="Search" className='submit'/>
            </div>
        </form>
      </InputWrap>
      <Search/>
   </div>

  )
}

export default SearchInput