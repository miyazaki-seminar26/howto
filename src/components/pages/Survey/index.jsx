import { useEffect, useReducer, useState } from 'react';

import { Flex, Text } from '@mantine/core';

import Link from 'next/link';

import { IconSquareArrowRight } from '@tabler/icons-react';

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
    const temp = 0;
    stateArray.forEach((value, index) => {
      if (value) {
        temp = temp + scores[index].yes;
      } else {
        temp = temp + scores[index].no;
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
        <div
          className="my-10 flex flex-col justify-between sm:flex-row"
          key={index}
        >
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

      <div className="md:mx-48">
        <Link href="/recommend/no-code">
          <div className="mb-2 flex cursor-pointer items-center justify-center font-semibold transition-all duration-300 hover:text-blue-600 hover:translate-x-1">
            <IconSquareArrowRight size={40} strokeWidth={1} color={'black'} />
            0点<span className="text-blue-600">以上</span>の方はこちら
          </div>
        </Link>
        <Link href="/recommend/other">
          <div className="flex cursor-pointer items-center justify-center font-semibold transition-all duration-300 hover:text-blue-600 hover:translate-x-1">
            <IconSquareArrowRight size={40} strokeWidth={1} color={'black'} />
            0点<span className="text-red-600">未満</span>の方はこちら
          </div>
        </Link>
        <div className="my-5 text-center text-xs text-gray-600/70">
          0点付近の方は、どちらもチェックしてみてください。
        </div>
      </div>

      <ArrowNav previousPage={previousPage} />
    </div>
  );
};
