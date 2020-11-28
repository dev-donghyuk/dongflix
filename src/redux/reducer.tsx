// 전역 state 값 타입정의
type ReducerType = {
   isLoading: Boolean;
};

// 전역 state 값 초기값 설정
const reducer: ReducerType = {
   isLoading: false,
};

// 액션 type 선언
// as const 를 안하면 string으로 정의 되어 리듀서 구현 오류 생김
const SET_IS_LOADING = 'SET_IS_LOADING' as const;

// 액션 생성 함수 선언
export const setIsLoading = (isLoading: Boolean) => ({
   type: SET_IS_LOADING,
   payload: isLoading,
});

// 액션 객체들을 위한 타입 정의
type ActionType = ReturnType<typeof setIsLoading>;

const action = (state: ReducerType = reducer, action: ActionType) => {
   switch (action.type) {
      case 'SET_IS_LOADING':
         return { ...state, isLoading: action.payload };

      default:
         return state;
   }
};

export default action;
