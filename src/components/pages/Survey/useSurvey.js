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
      case 'ELEVENTH':
        return { ...state, ELEVENTH: !state.ELEVENTH };
      case 'TWELFTH':
        return { ...state, TWELFTH: !state.TWELFTH };
      case 'THIRTEENTH':
        return { ...state, THIRTEENTH: !state.THIRTEENTH };
      case 'FOURTEENTH':
        return { ...state, FOURTEENTH: !state.FOURTEENTH };

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
    ELEVENTH: true,
    TWELFTH: true,
    THIRTEENTH: true,
    FOURTEENTH: true,
  };

  // ①問題文の設定
  const questionList = [
    { name: 'FIRST', text: 'あなたはコードを書きたい' },
    { name: 'SECOND', text: '今すぐ簡単に情報を発信したい' },
    {
      name: 'THIRD',
      text: '今作ろうとしているwebサイト以外で既に情報発信をしている',
    },
    {
      name: 'FOURTH',
      text: '情報発信するうえで大切にしたいのはアクセス数を増やすことである',
    },
    {
      name: 'FIFTH',
      text: '情報発信をするうえで大切にしたいのは複数の発信経路をどこかにまとめておくことである',
    },
    { name: 'SIXTH', text: '作るwebサイトは友人・趣味仲間に見てもらいたい' },
    { name: 'SEVENTH', text: '作るwebサイトは自分の仕事に関わるものである' },
    {
      name: 'EIGHTH',
      text: '常に最新の情報を発信し続けることだけに注力したい',
    },
    {
      name: 'NINTH',
      text: '以前の考えやアイデアも蓄積し伝え続けることが重要である',
    },
    { name: 'TENTH', text: 'webサイトで商品を販売したい' },
    {
      name: 'ELEVENTH',
      text: 'webサイトで自身の理念や提供するサービスを紹介したい',
    },
    {
      name: 'TWELFTH',
      text: 'webサイトでサービスの予約や問い合わせを行いたい',
    },
    { name: 'THIRTEENTH', text: 'webサイトの型は既に決まっている' },
    {
      name: 'FOURTEENTH',
      text: 'あなたのwebサイトやそのアイデアは類を見ない非常に独創的なものである',
    },
  ];

  // ②問題ごとのスコアの設定
  const scores = [
    { yes: 300, no: 0 }, // Q1
    { yes: -15, no: 5 }, // Q2
    { yes: 5, no: -20 }, // Q3
    { yes: -5, no: +5 }, // Q4
    { yes: 15, no: -20 }, // Q5
    { yes: -5, no: 5 }, // Q6
    { yes: 5, no: -5 }, // Q7
    { yes: -40, no: 0 }, // Q8
    { yes: 15, no: -5 }, // Q9
    { yes: 5, no: 0 }, // Q10
    { yes: 5, no: 0 }, // Q11
    { yes: -5, no: 0 }, // Q12
    { yes: 15, no: -5 }, // Q13
    { yes: 20, no: -5 }, // Q14
  ];

  return {
    reducer,
    initialState,
    questionList,
    scores,
  };
};
