import { Center, createStyles, Group, Image, Menu } from '@mantine/core';
import { IconChevronDown, IconGitBranch } from '@tabler/icons-react';
import Link from 'next/link';

import { PAGES } from '@/constants/link';

const links = [
  {
    label: 'SURVEY',
    links: [
      { label: PAGES.HOME.name, link: PAGES.HOME.path },
      { label: PAGES.SURVEY.name, link: PAGES.SURVEY.path },
    ],
  },
  {
    label: 'RECOMMEND',
    links: [
      { label: PAGES.NO_CODE.name, link: PAGES.NO_CODE.path },
      { label: PAGES.OTHER.name, link: PAGES.OTHER.path },
    ],
  },
];

const useStyles = createStyles(theme => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 50px',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
  },

  linkLabel: {
    marginRight: 5,
    fontSize: 13,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 11,
    },
  },

  dropdown: {
    marginTop: 10,
    padding: 8,
    fontSize: 13,
    boxShadow: '10px 10px 4px #ccc',
  },
}));

export const AppHeader = () => {
  const { classes } = useStyles();

  const items = links.map(link => {
    const menuItems = link.links?.map(item => (
      <Menu.Item key={item.link} className="flex items-center">
        <IconGitBranch
          size={20}
          strokeWidth={1.5}
          color={'#000000'}
          className="mr-3 inline"
        />
        <Link href={item.link}>{item.label}</Link>
      </Menu.Item>
    ));

    return (
      <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
        <Menu.Target>
          <div className={classes.link}>
            <Center>
              <span className={classes.linkLabel}>{link.label}</span>
              <IconChevronDown size={12} stroke={1.5} />
            </Center>
          </div>
        </Menu.Target>
        <Menu.Dropdown className={classes.dropdown}>{menuItems}</Menu.Dropdown>
      </Menu>
    );
  });

  return (
    <header className="border">
      <div className={classes.inner}>
        <Link href="/">
          <Image src="/top/logo.svg" alt="logo" width={150} />
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
      </div>
    </header>
  );
};
