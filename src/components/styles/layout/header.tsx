import { LINKS } from '@/constants/link';
import { Anchor } from '@mantine/core';
import { useRouter } from 'next/router';
import { FC } from 'react';

type MenuType = {
  label: string;
  href: string;
}[];

const MENU: MenuType = [
  {
    label: 'HOME',
    href: LINKS.HOME,
  },
  {
    label: 'PROJECT',
    href: LINKS.PROJECT,
  },
  {
    label: 'ABOUT US',
    href: LINKS.ABOUTUS,
  },
  {
    label: 'FAQ',
    href: LINKS.FAQ,
  },
];

type Props = {
  path: string;
  label: string;
};

const AppLink: FC<Props> = ({ path, label }) => {
  const pathname = useRouter().pathname;
  return (
    <Anchor
      variant="text"
      href={path}
      color="dark"
      className={`hover:opacity-80 transition-all ${
        pathname === path && 'font-bold underline'
      }`}
    >
      {label}
    </Anchor>
  );
};

export const AppHeader: FC = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 md:gap-8 text-[15px] md:text-xl">
          {MENU.map(item => (
            <li key={item.label}>
              <AppLink path={item.href} label={item.label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
