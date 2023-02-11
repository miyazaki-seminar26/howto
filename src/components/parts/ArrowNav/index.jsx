import { Flex, Space } from '@mantine/core';
import Link from 'next/link';

export const ArrowNav = ({ previousPage, nextPage }) => {
  // ページ遷移のナビゲーション
  // tailwindを使う
  return (
    <div>
      <img src="/prefooter/line.svg" />
      <Space h="xl" />
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, 0)"
        gap="lg"
        justify="center"
        align="flex-end"
        direction="row"
        wrap="wrap"
      >
        <div className="flex flex-col items-center">
          <Link href={previousPage.path}>
            <img src="/prefooter/left.svg" width="50" height="50" />
          </Link>
        </div>
        <Space w="xl" />
        <img src="/prefooter/house.svg" width="70" height="70" />
        <Space w="lg" />
        <div className="flex flex-col items-center">
          <Link href={nextPage.path}>
            <img src="/prefooter/right.svg" width="50" height="50" />
          </Link>
        </div>
      </Flex>
    </div>
  );
};
