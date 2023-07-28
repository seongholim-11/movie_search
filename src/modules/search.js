// module/search.ts

// ----------------------액션 타입 작성----------------------

export const CALL_API = 'counter/CALL_API';
// 규칙 2번 참고

// ----------------------액션 함수 작성----------------------

export const callapi = (value) => {
    return {
      type: 'CALL_API',
      payload: value,
    };
  };


// ----------------------초기 상태 작성----------------------

const initialState = {
    movieInfo: [],
};

// -----------------------리듀서 작성------------------------

function saveApi(state = initialState, action) {
  switch (action.type) {
    case CALL_API:
      return {
        ...state,
        movieInfo: action.payload
      };
    default:
      return state;
  }
}

export default saveApi;
// 규칙 1번에 따르면 reducer로 내보내야 하지만, 이 경우 import 하는 곳에서 항상 as 문법을 이용해야 하므로 위와 같이 처리했다.