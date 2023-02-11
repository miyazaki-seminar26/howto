import { ArrowNav } from '@/components/parts/ArrowNav';

import { PATHS } from '@/constants/link';

export const ProjectPlan = () => {
  return (
    <div>
      <ArrowNav previousPage={PATHS.HOME} nextPage={PATHS.SITE_STRUCTURE} />
    </div>
  );
};
