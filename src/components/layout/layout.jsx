import { Box, Container, Image } from '@mantine/core';

import { AppFooter } from './footer';
import { AppHeader } from './header';

export const AppLayout = ({ children, pageName }) => {
  return (
    <Box className="h-screen">
      <AppHeader />
      {pageName === 'HOME' && (
        <div className="w-full">
          <Image src="/top/main.svg" alt="main-header-image" fit="cover" />
        </div>
      )}

      <main>
        <Container mt={84} mx={{ md: 'auto', xs: 0 }}>
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
