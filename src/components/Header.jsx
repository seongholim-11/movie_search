import React from 'react'
import styled from "styled-components";


const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    font-size: 30px;
    padding: 10px 0;
    background: rgba(85, 122, 70, 0.5);
    user-select: none;
    color: #7A9D54;
    letter-spacing: 2px;
`

const Header = () => {
  return (
    <HeaderStyle >
        <div>Movie</div>
        <h1>🌳</h1>
        <div>Theater</div>
    </HeaderStyle>
  )
}

export default Header