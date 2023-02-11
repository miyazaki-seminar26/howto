import { PageHeader } from '@/components/parts/PageHeader';
import { PATHS } from '@/constants/link';
import { OUTLINE } from '@/constants/outline';

export const SiteStructure = () => {
  return (
    <div>
      <PageHeader
        pageTitle={PATHS.SITE_STRUCTURE.name}
        outline={OUTLINE.SITE_STRUCTURE}
      />
    </div>
  );
};
