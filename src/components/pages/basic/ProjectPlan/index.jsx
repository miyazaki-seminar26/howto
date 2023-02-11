import { ArrowNav } from '@/components/parts/ArrowNav';
import { Question } from '@/components/parts/Question';

import { PATHS } from '@/constants/link';

export const ProjectPlan = () => {
  return (
    <div>
      <Question text="設定したゴールの達成度は自分で計測、確認できますか？" />
      <ArrowNav previousPage={PATHS.HOME} nextPage={PATHS.SITE_STRUCTURE} />
    </div>
  );
};
