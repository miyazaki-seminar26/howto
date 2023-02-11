import { Box, Container, Flex, Image } from '@mantine/core';

import { AppFooter } from './footer';
import { AppHeader } from './header';

export const AppLayout = ({ children, pageName }) => {
  return (
    <Box className="h-screen">
      <Flex className="absolute top-0 w-full justify-between">
        <div className="w-[20vw]">
          <Image
            src="/top/left-header-image.svg"
            alt="left-header-image"
            className="h-[40vh] w-[120em]"
          />
        </div>
        <Container mt="md" mx={{ md: '10%', xs: 0 }} className="sticky right-0">
          <AppHeader />
        </Container>
        <div className="absolute top-0 right-0 -z-10 w-[28vw]">
          <Image src="/top/right-header-image.svg" alt="right-header-image" />
        </div>

        {pageName !== 'HOME' && (
          <div className="absolute right-12 top-12 w-[36vw]">
            <Image
              src="/top/26th.svg"
              alt="right-header-image"
              className="opacity-70"
            />
          </div>
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
