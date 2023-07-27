import React from "react";
import Header from "../components/Header";
import Slider from "../components/Main/Slider";
import SearchInput from "../components/Main/SearchInput";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Slider />
            <SearchInput/>
        </div>
    );
};

export default Main;
