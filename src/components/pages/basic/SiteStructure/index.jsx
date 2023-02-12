import { useState } from 'react';

import Link from 'next/link';

import { IconArrowNarrowRight } from '@tabler/icons-react';

import { ArrowNav } from '@/components/parts/ArrowNav';
import { BellText } from '@/components/parts/BellText';
import { PageHeader } from '@/components/parts/PageHeader';
import { PAGES } from '@/constants/link';

export const SiteStructure = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };
  return (
    <div>
      <PageHeader pageTitle="サイト構造" />
      <BellText text="サイト構造は、サイトの構成要素をどのように配置するかを決めることです。サイト構造は、サイトの構成要素をどのように配置するかを決めることです。サイト構造は。" />
      <button onClick={handleClick}>click</button>
      <div>クリック数{state}</div>
      <Link href="#">
        <div className="flex items-center justify-center hover:text-blue-500">
          <IconArrowNarrowRight size={40} strokeWidth={0.5} color={'black'} />
          x点以上の方はこちら
        </div>
      </Link>
      <Link href="#">
        <div className="flex items-center justify-center hover:text-blue-500">
          <IconArrowNarrowRight size={40} strokeWidth={0.5} color={'black'} />
          x点以下の方はこちら
        </div>
      </Link>
      <ArrowNav previousPage={PAGES.HOME} nextPage={PAGES.HOME} />
    </div>
  );
};
