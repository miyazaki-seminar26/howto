import { Box, Container } from '@mantine/core';

import { AppFooter } from './footer';
import { AppHeader } from './header';

export const AppLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <AppHeader />
      </Container>
      <main>
        <Container mt={84} mx={{ md: 'auto', xs: 0 }}>
          {children}
        </Container>
      </main>
      <Container>
        <AppFooter />
      </Container>
    </Box>
  );
};
