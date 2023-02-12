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

  const questionList = [
    { name: 'FIRST', text: 'あなたが落としたのは金の斧ですか？' },
    { name: 'SECOND', text: 'あなたが落としたのは金の斧ですか？' },
    { name: 'THIRD', text: 'あなたが落としたのは金の斧ですか？' },
    { name: 'FOURTH', text: 'あなたが落としたのは金の斧ですか？' },
    { name: 'FIFTH', text: 'あなたが落としたのは金の斧ですか？' },
    { name: 'SIXTH', text: 'あなたが落としたのは金の斧ですか？' },
    { name: 'SEVENTH', text: 'あなたが落としたのは金の斧ですか？' },
    { name: 'EIGHTH', text: 'あなたが落としたのは金の斧ですか？' },
    { name: 'NINTH', text: 'あなたが落としたのは金の斧ですか？' },
    { name: 'TENTH', text: 'あなたが落としたのは金の斧ですか？' },
  ];

  const scores = [
    2, // Q1
    3, // Q2
    2, // Q3
    3, // Q4
    4, // Q5
    3, // Q6
    2, // Q7
    3, // Q8
    4, // Q9
    3, // Q10
  ];

  return {
    reducer,
    initialState,
    questionList,
    scores,
  };
};
