import { Center, Flex, Space, Text, Title } from '@mantine/core';

import { ArrowNav } from '@/components/parts/ArrowNav';
import { PAGES } from '@/constants/link';

export const Home = () => {
  return (
    <div>
      <Title order={4} align="center">
        このWEBサイトでは何ができる？
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
