import { ArrowNav } from '@/components/parts/ArrowNav';
import { Question } from '@/components/parts/Question';

import { PAGES } from '@/constants/link';

export const ProjectPlan = () => {
  return (
    <div>
      <Question text="設定したゴールの達成度は自分で計測、確認できますか？" />
      <ArrowNav previousPage={PAGES.HOME} nextPage={PAGES.SITE_STRUCTURE} />
    </div>
  );
};
