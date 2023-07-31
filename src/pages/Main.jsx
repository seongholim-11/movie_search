import React from "react";
import Header from "../components/Header";
import Slider from "../components/Main/Slider";
import SearchInput from "../components/Main/SearchInput";
import styled from "styled-components";

import bg from "../assets/theater_bg.jpeg";

const MainBg = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background: url(${bg}) #000;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center center;
    position: relative;
    padding: 110px 370px 370px;
    box-sizing: border-box;
    .mainWrap{
        position: absolute;
        top: 42%; left: 50%;
        transform: translate(-50%, -50%);
        width: 70vw;
        min-width: 700px;
       aspect-ratio: 16 / 8;
        margin: 0 auto;
        background: #fff;
        overflow-y: scroll;
    }
`;

const Main = () => {
    return (
        <MainBg>
            <div className="mainWrap">
                <Header></Header>
                <Slider />
                <SearchInput />
            </div>
        </MainBg>
    );
};

export default Main;
