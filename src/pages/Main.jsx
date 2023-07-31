import React from "react";
import Header from "../components/Header";
import Slider from "../components/Main/Slider";
import SearchInput from "../components/Main/SearchInput";
import styled from "styled-components";

const MainWrap = styled.div`
    width: 1440px;
    margin: 0 auto;
`

const Main = () => {
    return (
        <MainWrap >
            <Header></Header>
            <Slider />
            <SearchInput/>
        </MainWrap>
    );
};

export default Main;
