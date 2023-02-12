import { ArrowNav } from '@/components/parts/ArrowNav';

import { PAGES } from '@/constants/link';

export const ProjectPlan = () => {
  return (
    <div>
      {/* YESに色がついているパターン */}
      <div className="m-10 flex justify-between">
        <div className="bg-blue-300">あなたが落としたのは金の斧ですか？</div>
        <div>
          <button className="bg-slate-500">YES</button>
          <button>NO</button>
        </div>
      </div>
      {/* NOに色がついているパターン */}
      <div className="m-10 flex justify-between">
        <div className="bg-blue-300">あなたが落としたのは金の斧ですか？</div>
        <div>
          <button className="bg-slate-500">YES</button>
          <button>NO</button>
        </div>
      </div>
      <ArrowNav previousPage={PAGES.HOME} nextPage={PAGES.SITE_STRUCTURE} />
    </div>
  );
};
