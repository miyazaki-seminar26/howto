import { Center, Flex, Space, Text, Title } from '@mantine/core';

import { ArrowNav } from '@/components/parts/ArrowNav';
import { PAGES } from '@/constants/link';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';

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
        <img src="/top/picture1.svg" />
        <img src="/top/picture2.svg" />
        <img src="/top/picture3.svg" />
      </Flex>
      <Space h="xl" />
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, 0)"
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <img src="/top/line1.svg" />
        <Center className="w-48 sm:w-96">
          <Text fz="xs" c="dimmed" ta="left">
            WEBサイトを作るときに完成までの8割の時間をかけると言われている場所は目に見えない部分、
            つまりプログラムを書いていない時間なのです。
            <br></br>
            まだ自分の「作りたい」がぼやけているならここから一緒に見つけにいきましょう！
       <Link href="#">
            <div className="flex justify-start items-center font-bold  text-neutral-800 mt-2 cursor-pointer hover:text-blue-600 duration-300 mr-64">
              <IconChevronRight
            size={20} strokeWidth={2} color={'#000000'} className="mr-2 mb-1 flex items-center justify-center  "/>テストを受ける</div>
       </Link>
          </Text>
          
          <div></div>
        </Center>
            
      </Flex>
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, 0)"
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <img src="/top/line2.svg" />
        <Center className="w-48 sm:w-96">
          <Text fz="xs" c="dimmed" ta="left">
            WEBサイトを作るときに完成までの残りの2割は見える部分、つまりこの先からプログラムを書いて行きます。
            <br></br>
            自分の「作りたい」が見えたら、あとは形にするだけです！
          </Text>
        </Center>
      </Flex>
      <ArrowNav nextPage={PAGES.SURVEY} />
    </div>
  );
};
