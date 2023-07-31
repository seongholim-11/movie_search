import React from "react";
import Header from "../components/Header";
import Slider from "../components/Main/Slider";
import SearchInput from "../components/Main/SearchInput";
import styled from "styled-components";

import bg from "../assets/theater_bg.jpeg";

const MainBg = styled.div`
    width: 100vw;
    min-width: 700px;
    height: 100vh;
    margin: 0 auto;
    background: url(${bg}) black;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center center;
    position: relative;
    box-sizing: border-box;

    .main {
        position: absolute;
        top: 42%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70vw;
        min-width: 700px;
        aspect-ratio: 16 / 8;
        margin: 0 auto;
        background: #fff;
        overflow-y: scroll;
        box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.7);
    }
`;

const Main = () => {
    return (
        <MainBg>
            <div className="main">
                <Header></Header>
                <Slider />
                <SearchInput />
            </div>
        </MainBg>
    );
};

export default Main;
