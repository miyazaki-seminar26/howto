import { useReducer } from 'react';

import { ArrowNav } from '@/components/parts/ArrowNav';
import { PageHeader } from '@/components/parts/PageHeader';
import { PAGES } from '@/constants/link';

import { useSurvey } from './useSurvey';

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
export const Survey = () => {
  // 一つ前、現在、一つ後のページを定義（PAGESはconstants/link.jsで定義）
  const currentPage = PAGES.SURVEY;
  const previousPage = PAGES.HOME;

  const { reducer, initialState } = useSurvey();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = num => {
    dispatch({ type: num });
  };

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

      <ArrowNav previousPage={previousPage} />
    </div>
  );
};
