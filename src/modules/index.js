// modules/index.ts
import { combineReducers } from "redux";
import searchReducer from "./search";
import sliderReducer from "./slider";
import ecodingReducer from "./searchInput";


const rootReducer = combineReducers({
    searchReducer,
    sliderReducer,
    ecodingReducer,
});

export default rootReducer;
