import { AppLayout } from '@/components/layout/layout';
import { Home } from '@/components/pages/Home';

const HomePage = () => {
  return (
    <AppLayout pageName="HOME">
      <Home />
    </AppLayout>
  );
};

export default HomePage;
