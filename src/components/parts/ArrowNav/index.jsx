import { Flex, Space } from '@mantine/core';
import Link from 'next/link';

export const ArrowNav = ({ previousPage, nextPage }) => {
  // ページ遷移のナビゲーション
  // tailwindを使う
  return (
    <div>
      <img src="/prefooter/line.svg" />
      <Space h="xl" />
      <Flex className="justify-between" align="flex-end">
        <div>
          <Link href={previousPage.path}>{previousPage.name}</Link>
          <img src="/prefooter/left.svg" />
        </div>
        <img src="/prefooter/house.svg" />
        <div>
          <Link href={nextPage.path}>{nextPage.name}</Link>
          <img src="/prefooter/right.svg" />
        </div>
      </Flex>
    </div>
  );
};
