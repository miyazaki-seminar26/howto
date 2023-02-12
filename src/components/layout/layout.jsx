import { Box, Button, Container, Image } from '@mantine/core';
import Link from 'next/link';

import { AppFooter } from './footer';
import { AppHeader } from './header';

export const AppLayout = ({ children, pageName }) => {
  return (
    <Box className="h-screen">
      <AppHeader />
      {pageName === 'HOME' && (
        <div className="relative w-full">
          <Image src="/top/top-main.svg" alt="main-header-image" fit="cover" />
          <Button
            variant="gradient"
            gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
            radius="xl"
            size="lg"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Link href="/survey">テストを受ける→</Link>
          </Button>
        </div>
      )}

      <main>
        <Container mt={40} mx={{ md: 'auto', xs: 0 }}>
          {children}
        </Container>
      </main>
      <div className="sticky bottom-0 top-full w-full bg-[#323232]">
        <Container mx={{ md: 'auto', xs: 0 }}>
          <AppFooter />
        </Container>
      </div>
    </Box>
  );
};
