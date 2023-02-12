import { useEffect, useReducer, useState } from 'react';

import { Flex, Text } from '@mantine/core';

import Link from 'next/link';

import { IconArrowNarrowRight } from '@tabler/icons-react';

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
      <div className="my-5 text-xs text-gray-600/70">
        簡単なアンケートに答えてください！YESかNOのボタンを押すだけです。
      </div>
      {questionList.map((question, index) => (
        <div className="my-10 flex flex-col justify-between sm:flex-row" key={index}>
          <Text fz="sm" fw={700} className="m-5 flex">
            Q.
            {question.text}
          </Text>
          {state[question.name] ? (
            <div>
              <Flex
                mih={50}
                bg="rgba(0, 0, 0, 0)"
                gap="xl"
                justify="flex-end"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <button onClick={() => handleClick(question.name)}>
                  <img
                    src="/yesorno/yes1.svg"
                    alt="YES"
                    width="50"
                    height="50"
                  />
                </button>
                <button onClick={() => handleClick(question.name)}>
                  <img src="/yesorno/no2.svg" alt="NO" width="85" height="85" />
                </button>
              </Flex>
            </div>
          ) : (
            <div>
              <Flex
                mih={50}
                bg="rgba(0, 0, 0, 0)"
                gap="xl"
                justify="flex-end"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <button onClick={() => handleClick(question.name)}>
                  <img
                    src="/yesorno/yes2.svg"
                    alt="YES"
                    width="50"
                    height="50"
                  />
                </button>
                <button onClick={() => handleClick(question.name)}>
                  <img src="/yesorno/no1.svg" alt="NO" width="85" height="85" />
                </button>
              </Flex>
            </div>
          )}
        </div>
      ))}

      <div className="my-5 flex items-center justify-center border px-5 py-7 font-bold shadow-md sm:mx-32">
        <CopilotIcon />
        <div>あなたの点数は{result}点です</div>
        <CopilotIcon />
      </div>

      <Link href="#">
        <div className="flex items-center justify-center hover:text-blue-500">
          <IconArrowNarrowRight size={40} strokeWidth={0.5} color={'black'} />
          x点以上の方はこちら
        </div>
      </Link>
      <Link href="#">
        <div className="flex items-center justify-center hover:text-blue-500">
          <IconArrowNarrowRight size={40} strokeWidth={0.5} color={'black'} />
          x点以下の方はこちら
        </div>
      </Link>

      <ArrowNav previousPage={previousPage} />
    </div>
  );
};
