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
      <div className="text-center font-mono text-3xl font-bold">
        ノーコードでWebサイト制作すべきです
      </div>
      <img src="/result/no-code.svg" alt="no-code" className="mx-auto my-5" />

      <div className="my-20 flex">
        <div className="w-14 rounded-full bg-red-200" />
        <div className="ml-4 sm:my-10 sm:ml-10">
          <div className="mb-6 sm:mb-10">
            <div className="mb-3 text-xl font-semibold sm:mb-5">
              ノーコードとは
            </div>
            <div className="pl-5 text-base text-stone-500">
              とまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまる
            </div>
          </div>
          <div>
            <div className="mb-3 text-xl font-semibold sm:mb-5">
              なぜノーコードなのか
            </div>
            <div className="pl-5 text-base text-stone-500">
              とまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまるとまる
            </div>
          </div>
        </div>
      </div>
      <ArrowNav previousPage={previousPage} nextPage={nextPage} />
    </div>
  );
};
