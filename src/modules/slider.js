// module/slider.js

// ----------------------액션 타입 작성----------------------

export const CALL_API_POSTER = "slider/CALL_API_POSTER";
// 규칙 2번 참고

// ----------------------액션 함수 작성----------------------

export const callApiPoster = value => {
    return {
        type: CALL_API_POSTER,
        payload: value,
    };
};

// ----------------------초기 상태 작성----------------------

const initialState = {
    moviePoster: [],
};

// -----------------------리듀서 작성------------------------

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALL_API_POSTER:
            return {
                ...state,
                moviePoster: action.payload,
            };
        default:
            return state;
    }
};
export default sliderReducer;
// 규칙 1번에 따르면 reducer로 내보내야 하지만, 이 경우 import 하는 곳에서 항상 as 문법을 이용해야 하므로 위와 같이 처리했다.
