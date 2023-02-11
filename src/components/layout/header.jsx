import { Center, createStyles, Group, Image, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';

import { PATHS } from '@/constants/link';

const links = [
  {
    label: '基礎編',
    links: [
      { label: PATHS.PROJECT_PLAN.name, link: PATHS.PROJECT_PLAN.path },
      { label: 'Service 2', link: '/services/2' },
      { label: 'Service 3', link: '/services/3' },
    ],
  },
  {
    label: '応用編',
    links: [
      { label: PATHS.PRACTICE1.name, link: PATHS.PRACTICE1.path },
      { label: 'Service 2', link: '/services/2' },
      { label: 'Service 3', link: '/services/3' },
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
  },
}));

export const AppHeader = () => {
  const { classes } = useStyles();

  const items = links.map(link => {
    const menuItems = link.links?.map(item => (
      <Menu.Item key={item.link}>
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
    <header>
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
