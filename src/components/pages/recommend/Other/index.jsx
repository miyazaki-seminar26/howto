import { ArrowNav } from '@/components/parts/ArrowNav';
import { PageHeader } from '@/components/parts/PageHeader';
import { PAGES } from '@/constants/link';

export const Other = () => {
  const currentPage = PAGES.OTHER;
  const previousPage = PAGES.SURVEY;
  const nextPage = PAGES.NO_CODE;

  return (
    <div>
      <PageHeader pageTitle={currentPage.name} />
      <ArrowNav previousPage={previousPage} nextPage={nextPage} />
    </div>
  );
};
