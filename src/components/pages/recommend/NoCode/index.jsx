import { Text, Timeline } from '@mantine/core';

import {
  IconGitBranchDeleted,
  IconGitCommit,
  IconGitPullRequest,
} from '@tabler/icons-react';

import Link from 'next/link';

import { ArrowNav } from '@/components/parts/ArrowNav';
import { LoadLink } from '@/components/parts/LoadLink';
import { PageHeader } from '@/components/parts/PageHeader';
import { PAGES } from '@/constants/link';

const LoadTitle = ({ title }) => {
  return <div className="font-semibold">{title}</div>;
};

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

      <div className="text-center font-mono text-3xl font-bold">
        Your Load Map
      </div>

      <div className="my-10 flex justify-center">
        <Timeline color="pink" active={3} lineWidth={3} bulletSize={22}>
          <Timeline.Item
            bullet={<IconGitBranchDeleted size={12} />}
            title={<LoadTitle title="企画" />}
          >
            <div className="my-5">
              <Text color="dimmed" size="md">
                企画：課題発見、ゴール・ターゲット・コンセプトの決定
              </Text>
              <Text color="dimmed" size="md">
                設計：サイト・ページ構造の設計
              </Text>
            </div>
            <LoadLink title="企画〜設計">
              <div>
                <Link href="https://zenn.dev/pm_translate/articles/054e6e384062f4">
                  プロダクトマネジメントの優先順位付けフレームワークの究極ガイド
                </Link>
              </div>
            </LoadLink>
            <LoadLink title="企画段階">
              <Link href="https://speakerdeck.com/tumada/liang-ike-ti-woxuan-bu-jia-zhi-hake-ti-dejue-maru">
                良い課題を選ぶ 💮 - 価値は課題で決まる 💲 - Speaker Deck
              </Link>
            </LoadLink>
            <LoadLink title="設計段階">
              <Link href="https://qiita.com/laineus/items/c43d302e974380993fca">
                設エンジニアでも知っておきたいデザインの基礎知識 - Qiita
              </Link>
            </LoadLink>
            <LoadLink title="設計が上手くいかないとき">
              <Link href="https://qiita.com/laineus/items/c43d302e974380993fca">
                設エンジニアでも知っておきたいデザインの基礎知識 - Qiita
              </Link>
            </LoadLink>
          </Timeline.Item>

          {/* ここから */}
          <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
            <Text color="dimmed" size="sm">
              You&apos;ve pushed 23 commits to
              <Text variant="link" component="span" inherit>
                <Link href="https://zenn.dev/pm_translate/articles/054e6e384062f4">
                  プロダクトマネジメントの優先順位付けフレームワークの究極ガイド
                </Link>
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              52 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Pull request"
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
          >
            <Text color="dimmed" size="sm">
              You&apos;ve submitted a pull request
              <Text variant="link" component="span" inherit>
                Fix incorrect notification message (#187)
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              34 minutes ago
            </Text>
          </Timeline.Item>
          {/* ここまで */}
        </Timeline>
      </div>
      <ArrowNav previousPage={previousPage} nextPage={nextPage} />
    </div>
  );
};
