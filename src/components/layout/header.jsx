import { Center, createStyles, Group, Image, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';

const links = [
  {
    label: '基礎編',
    links: [
      { label: 'プロジェクト企画', link: '/basic/project-plan' },
      { label: 'WEBサイト設計', link: '/basic/site-structure' },
      { label: 'デザイン制作', link: '/basic/design' },
      { label: '具体的な設定', link: '/basic/specific-setting' },
      { label: '基本的な使い方', link: '/basic/basic-usage' },
    ],
  },
  {
    label: '応用編',
    links: [
      { label: '実践1', link: '/advanced/practice1' },
      { label: '実践2', link: '/advanced/practice2' },
      { label: '実践3', link: '/advanced/practice3' },
      { label: 'サイト運営', link: '/advanced/site-management' },
      { label: 'インフラ整備', link: '/advanced/infra' },
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
    <header className>
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
