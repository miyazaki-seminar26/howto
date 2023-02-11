import { Flex } from '@mantine/core';
import Link from 'next/link';

export const ArrowNav = ({ previousPage, nextPage }) => {
  // ページ遷移のナビゲーション
  // tailwindを使う
  return (
    <Flex className="justify-between">
      <div>
        <Link href={previousPage.path}>{previousPage.name}</Link>
      </div>
      <div>ここに家</div>
      <div>
        <Link href={nextPage.path}>{nextPage.name}</Link>
      </div>
    </Flex>
  );
};
