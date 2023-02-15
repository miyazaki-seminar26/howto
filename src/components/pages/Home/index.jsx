import { Flex, Space, Title } from '@mantine/core';

import Link from 'next/link';

import { CopilotIcon } from '@/components/icons/CopilotIcon';
import { ArrowNav } from '@/components/parts/ArrowNav';
import { PAGES } from '@/constants/link';

export const Home = () => {
  return (
    <div>
      <Title order={4} align="center">
        このWEBサイトでは何ができる？
        <Space h="xl" />
        <Space h="xl" />
      </Title>
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, 0)"
        gap="md"
        justify="center"
        align="flex-end"
        direction="row"
        wrap="wrap"
      >
        <img src="/top/picture1.svg" alt="自分の「目的」が見える" />
        <img src="/top/picture2.svg" alt="最適化される" />
        <img src="/top/picture3.svg" alt="自分の「手段」が分かる" />
      </Flex>

      <div className="mt-20 mb-10 flex items-center justify-center px-5 py-7 font-bold ">
        <CopilotIcon />
        <div className="text-sm sm:text-base">
          Webサイト制作という響きだけでWebサイトを作ろうとしているそこの君へ
        </div>
        <CopilotIcon />
      </div>

      <div className="mx-10 flex flex-col justify-between sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
          <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
              loading="lazy"
              alt="Photo by Radu Florin"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <div className="text-center font-bold text-indigo-500 sm:text-left md:text-lg">
              HTMLとCSSでWeb制作！
            </div>
            <p className="text-center text-sm text-gray-500 sm:text-left md:text-base">
              駆け出しエンジニア
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
          <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
              loading="lazy"
              alt="Photo by Ayo Ogunseinde"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <div className="text-center font-bold text-indigo-500 sm:text-left md:text-lg">
              Web制作で副業を始める！
            </div>
            <p className="text-center text-sm text-gray-500 sm:text-left md:text-base">
              大学生でよーいる奴
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-10 text-center font-mono text-3xl font-bold">
        悪いこと言わん、とりあえず診断受けよ。
      </div>
      <div className="text-center">
        <Link
          href="/survey"
          className="group relative overflow-hidden rounded-lg border border-gray-100 bg-gray-100 px-5 py-3 font-medium text-gray-600 shadow-inner"
        >
          <span className="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute top-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
          <span className="absolute inset-0 h-full w-full bg-gray-900 opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
          <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-white">
            今すぐ診断する→
          </span>
        </Link>
      </div>
      <ArrowNav nextPage={PAGES.SURVEY} />
    </div>
  );
};
