// outlineはconstants/outline.jsにある

import { Flex } from '@mantine/core';

/**
 * outlineの例
 * [
    { title: 'Webサイトのイメージ', content: 'Webサイトのイメージを掴みます。',},
    { title: 'Webサイトの完成像', content: 'Webサイトの完成像を掴みます。' },
  ]
 */

export const PageHeader = ({ pageTitle, outline }) => {
  return (
    <div>
      <div>{pageTitle}</div>

      {/* ここで目次を表示する */}
      {outline.map((item, index) => {
        return (
          <Flex key={index}>
            <div>
              {index}
              {item.title}
            </div>
            <div>{item.content}</div>
          </Flex>
        );
      })}
    </div>
  );
};
