import { useEffect, useReducer, useState } from 'react';

import { ArrowNav } from '@/components/parts/ArrowNav';
import { PageHeader } from '@/components/parts/PageHeader';
import { PAGES } from '@/constants/link';

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
      <PageHeader pageTitle={currentPage.name} />
      {questionList.map((question, index) => (
        <div className="my-10 flex justify-between" key={index}>
          <div className="bg-blue-300">
            {question.index}
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

      <div>あなたの点数は{result}点です</div>

      <ArrowNav previousPage={previousPage} />
    </div>
  );
};
