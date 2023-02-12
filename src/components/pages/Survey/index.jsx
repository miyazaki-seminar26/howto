import { useEffect, useReducer, useState } from 'react';

import { ArrowNav } from '@/components/parts/ArrowNav';
import { PageHeader } from '@/components/parts/PageHeader';
import { PAGES } from '@/constants/link';

import { BellText } from '@/components/parts/BellText';

import { CopilotIcon } from '@/components/icons/CopilotIcon';

import { useSurvey } from './useSurvey';

export const Survey = () => {
  // 一つ前、現在、一つ後のページを定義（PAGESはconstants/link.jsで定義）
  const currentPage = PAGES.SURVEY;
  const previousPage = PAGES.HOME;

  const { reducer, initialState, questionList, scores } = useSurvey();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = num => {
    dispatch({ type: num });
  };
  const [result, setResult] = useState(0);

  useEffect(() => {
    // objectであるstateのvalueを配列に変換
    const stateArray = Object.values(state);
    // stateArrayがtrueの場合、scoresのindexを取得し、その値をresultに加算
    const temp = 0;
    stateArray.forEach((value, index) => {
      if (value) {
        temp = temp + scores[index];
      }
    });
    setResult(temp);
  }, [state]);

  return (
    <div>
      <BellText text="あなたが作るべきものは本当にwebサイトですか？目的に合った手段を考えれていますか？あなたが本当に作るべきものは何なのか一緒に考えてみましょう！" />
      <PageHeader pageTitle={currentPage.name} />
      {questionList.map((question, index) => (
        <div className="my-10 flex justify-between" key={index}>
          <div>
            Q.
            {question.text}
          </div>
          {state[question.name] ? (
            <div>
              <button
                onClick={() => handleClick(question.name)}
                className="bg-slate-500"
              >
                YES
              </button>
              <button onClick={() => handleClick(question.name)}>NO</button>
            </div>
          ) : (
            <div>
              <button onClick={() => handleClick(question.name)}>YES</button>
              <button
                onClick={() => handleClick(question.name)}
                className="bg-slate-500"
              >
                NO
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="mx-32 flex items-center justify-center border px-5 py-7 font-bold shadow-md">
        <CopilotIcon />
        <div>あなたの点数は{result}点です</div>
        <CopilotIcon />
      </div>

      <ArrowNav previousPage={previousPage} />
    </div>
  );
};
