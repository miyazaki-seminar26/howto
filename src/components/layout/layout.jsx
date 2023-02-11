import { Box, Container, Flex } from '@mantine/core';

import { AppFooter } from './footer';
import { AppHeader } from './header';

export const AppLayout = ({ children, pageName }) => {
  return (
    <Box className="h-screen">
      <Flex className="absolute top-0 w-full justify-between">
        <Container mt="md" mx={{ md: '10%', xs: 0 }} className="sticky right-0">
          <AppHeader />
        </Container>

        {pageName !== 'HOME' && (
          <div className="absolute right-12 top-12 w-[36vw]">画像</div>
        )}
      </Flex>

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
