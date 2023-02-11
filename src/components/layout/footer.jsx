import { Anchor, Flex, Text } from '@mantine/core';

import { LINKS } from '@/constants/link';

import { GithubIcon } from '../icons/GithubIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { TwitterIcon } from '../icons/TwitterIcon';

export const AppFooter = () => {
  return (
    <footer className="flex  py-4">
      <Flex gap={24}>
        <Anchor
          className="transition-opacity hover:opacity-80"
          href={LINKS.INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </Anchor>
        <Anchor className="transition-opacity hover:opacity-80">
          <TwitterIcon />
        </Anchor>
        <Anchor
          className="transition-opacity hover:opacity-80"
          href={LINKS.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
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
