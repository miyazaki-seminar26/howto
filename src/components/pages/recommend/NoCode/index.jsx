import { ArrowNav } from '@/components/parts/ArrowNav';
import { PageHeader } from '@/components/parts/PageHeader';
import { PAGES } from '@/constants/link';

export const NoCode = () => {
  // 一つ前、現在、一つ後のページを定義（PAGESはconstants/link.jsで定義）
  const currentPage = PAGES.NO_CODE;
  const previousPage = PAGES.SURVEY;
  const nextPage = PAGES.OTHER;

  return (
    <div>
      <PageHeader pageTitle={currentPage.name} />
      <ArrowNav previousPage={previousPage} nextPage={nextPage} />
    </div>
  );
};
