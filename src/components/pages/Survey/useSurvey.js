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
    { yes: 5, no: 0 }, // Q1
    { yes: 5, no: -6 }, // Q2
    { yes: -10, no: 4 }, // Q3
    { yes: 5, no: -6 }, // Q4
    { yes: 15, no: -6 }, // Q5
    { yes: 5, no: -1 }, // Q6
    { yes: 18, no: -6 }, // Q7
    { yes: 5, no: -6 }, // Q8
    { yes: 20, no: -10 }, // Q9
    { yes: 5, no: -6 }, // Q10
  ];

  return {
    reducer,
    initialState,
    questionList,
    scores,
  };
};
