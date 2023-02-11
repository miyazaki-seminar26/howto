import { Center, Flex, Space, Text, Title } from '@mantine/core';
import { IconArrowBadgeRight } from '@tabler/icons-react';
import Link from 'next/link';

import { PATHS } from '@/constants/link';

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
        align="center"
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
        <Center style={{ width: 400, height: 200 }}>
          <Text fz="xs" c="dimmed" ta="left">
            WEBサイトを作るときに完成までの8割の時間をかけると言われている場所は目に見えない部分、
            つまりプログラムを書いていない時間なのです。
            <br></br>
            まだ自分の「作りたい」がぼやけているならここから一緒に見つけにいきましょう！
          </Text>
          <div>
            <Center>
              <Link href={PATHS.PROJECT_PLAN.path}>
                <Text fz="xs" c="dimmed">
                  プロジェクト設計へ
                </Text>
              </Link>
              <IconArrowBadgeRight
                size={50}
                strokeWidth={1.5}
                color={'black'}
              />
            </Center>
          </div>
        </Center>
      </Flex>
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, 0)"
        gap="xl"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <img src="/top/line2.svg" />
        <Center style={{ width: 400, height: 200 }}>
          <Text fz="xs" c="dimmed" ta="left">
            WEBサイトを作るときに完成までの残りの2割は見える部分、つまりこの先からプログラムを書いて行きます。
            <br></br>
            自分の「作りたい」が見えたら、後は形にするだけです！
          </Text>
        </Center>
      </Flex>
    </div>
  );
};
