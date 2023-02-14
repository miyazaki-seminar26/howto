import { Anchor, Flex, Text } from '@mantine/core';

import { PAGES } from '@/constants/link';

import { GithubIcon } from '../icons/GithubIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { TwitterIcon } from '../icons/TwitterIcon';

export const AppFooter = () => {
  return (
    <footer className="mt-10  flex py-4">
      <Flex gap={24}>
        <Anchor
          className="transition-opacity hover:opacity-80"
          href={PAGES.INSTAGRAM.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </Anchor>
        <Anchor
          className="transition-opacity hover:opacity-80"
          href={PAGES.TWITTER.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </Anchor>
        <Anchor
          className="transition-opacity hover:opacity-80"
          href={PAGES.GITHUB.path}
          target="_blank"
          rel="nPAGESer noreferrer"
        >
          <GithubIcon />
        </Anchor>
        <Text color="white" size="xs" className="flex items-center">
          ©️miyazaki-seminar 2023
        </Text>
      </Flex>
    </footer>
  );
};
