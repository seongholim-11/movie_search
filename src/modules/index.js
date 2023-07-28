// modules/index.ts
import { combineReducers } from "redux";
import searchReducer from "./search";
import sliderReducer from "./slider";

const rootReducer = combineReducers({
    searchReducer,
    sliderReducer,

});

export default rootReducer;
