import { Text } from '@mantine/core';
import { IconArrowBigRightLines } from '@tabler/icons-react';

export const LoadLink = ({ title, children }) => {
  return (
    <div className="my-5 flex  flex-col text-sm sm:flex-row">
      <div className="w-1/5">{title}</div>
      <div className="flex">
        <IconArrowBigRightLines
          size={30}
          strokeWidth={2}
          color={'#d2797b'}
          className="mr-2"
        />
        <Text variant="link" component="span" inherit>
          {children}
        </Text>
      </div>
    </div>
  );
};
