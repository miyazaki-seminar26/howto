import { Flex, Space } from '@mantine/core';
import Link from 'next/link';

export const ArrowNav = ({ previousPage, nextPage }) => {
  // ページ遷移のナビゲーション
  // tailwindを使う
  return (
    <div className="mt-5">
      <img src="/prefooter/line.svg" alt="line" />
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
        {previousPage && (
          <div className="flex flex-col items-center">
            <Link href={previousPage.path}>
              <img
                src="/prefooter/left.svg"
                alt="前のページに戻るよ"
                width="40"
                height="40"
              />
            </Link>
          </div>
        )}
        <Space w="xl" />
        <img
          src="/prefooter/house.svg"
          alt="このページのことだよ"
          width="40"
          height="40"
        />
        <Space w="lg" />
        {nextPage && (
          <div className="flex flex-col items-center">
            <Link href={nextPage.path}>
              <img
                src="/prefooter/right.svg"
                alt="次のページに移動するよ"
                width="40"
                height="40"
              />
            </Link>
          </div>
        )}
      </Flex>
    </div>
  );
};
