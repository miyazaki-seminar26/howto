import { Anchor, Flex, Image, Tabs } from '@mantine/core';
// import { IconMessageCircle, IconPhoto } from '@tabler/icons';
import { useRouter } from 'next/router';

import { LINKS } from '@/constants/link';

const MENU = [
  {
    label: '基礎編',
    href: LINKS.HOME,
  },
  {
    label: '応用編',
    href: LINKS.PROJECT_PLAN,
  },
];

const AppLink = ({ path, label }) => {
  const pathname = useRouter().pathname;
  return (
    <Anchor
      variant="text"
      href={path}
      color="dark"
      className={`transition-all hover:opacity-80 ${
        pathname === path && 'font-bold underline'
      }`}
    >
      {label}
    </Anchor>
  );
};

export const AppHeader = () => {
  return (
    <header>
      <Flex>
        <Image src="/top/icon.svg" alt="icon" />
        <Tabs defaultValue="basic">
          <Tabs.List>
            <Tabs.Tab value="basic">基礎編</Tabs.Tab>
            <Tabs.Tab value="advanced">応用編</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="basic" pt="xs">
            Gallery tab content
          </Tabs.Panel>

          <Tabs.Panel value="advanced" pt="xs">
            Messages tab content
          </Tabs.Panel>
        </Tabs>
        {/* <nav>
          <ul className="flex gap-4 text-[15px] md:gap-8 md:text-xl">
            {MENU.map(item => (
              <li key={item.label}>
                <AppLink path={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav> */}
      </Flex>
    </header>
  );
};
