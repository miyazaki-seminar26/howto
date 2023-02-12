export const useSurvey = () => {
  // reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FIRST':
        return { ...state, FIRST: !state.FIRST };
      case 'SECOND':
        return { ...state, SECOND: !state.SECOND };
      case 'THIRD':
        return { ...state, THIRD: !state.THIRD };
      case 'FOURTH':
        return { ...state, FOURTH: !state.FOURTH };
      case 'FIFTH':
        return { ...state, FIFTH: !state.FIFTH };
      case 'SIXTH':
        return { ...state, SIXTH: !state.SIXTH };
      case 'SEVENTH':
        return { ...state, SEVENTH: !state.SEVENTH };
      case 'EIGHTH':
        return { ...state, EIGHTH: !state.EIGHTH };
      case 'NINTH':
        return { ...state, NINTH: !state.NINTH };
      case 'TENTH':
        return { ...state, TENTH: !state.TENTH };

      default:
        return state;
    }
  };

  // 初期値の設定
  const initialState = {
    FIRST: true,
    SECOND: true,
    THIRD: true,
    FOURTH: true,
    FIFTH: true,
    SIXTH: true,
    SEVENTH: true,
    EIGHTH: true,
    NINTH: true,
    TENTH: true,
  };

  return {
    reducer,
    initialState,
  };
};
