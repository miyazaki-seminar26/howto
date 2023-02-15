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
              ノーコードとはコードを書かなくてもWeb制作などができるサービスのことです。
              <br />
              プログラミングの知識がない方でも、比較的簡単に始められることが最大の特徴となっています。
              <br />
              コードを書くよりも開発期間が圧縮できる、初期コストが抑えられるということもメリットとして挙げられます。
            </div>
          </div>
          <div>
            <div className="mb-3 text-xl font-semibold sm:mb-5">
              なぜノーコードなのか
            </div>
            <div className="pl-5 text-base text-stone-500">
              私たちが普段よく閲覧するようなWebサイトでHTML,CSSのみで書かれているものは少ないです。
              なぜなら、HTMLやCSSは仕様上、保守性や拡張性に問題があるためです。HTML、CSSの難点を補った技術で開発をする方が、安全且つ効率的です。しかしながら、これらの技術を習得することは難易度が高く、時間がかかります。そこで、ノーコードでWebサイトを制作することで、コストを抑え、開発期間を短縮することができます。
              <br />
              あなた＝主婦だとします。ディナーを作る時にご飯を稲から育て、鶏を育てチキンにするのと同じことです。スーパーで育てられたお米を買い、捌かれた鶏肉を買い、家で簡単に調理するほうが、簡単で、且つ美味しい料理が作れるに違いないです。
            </div>
          </div>
        </div>
      </div>

      <div className="text-center font-mono text-3xl font-bold">
        〜Your Load Map〜
      </div>

      <div className="my-10 flex justify-center">
        <Timeline color="pink" active={3} lineWidth={3} bulletSize={22}>
          <Timeline.Item
            bullet={<IconGitBranchDeleted size={12} />}
            title={<LoadTitle title="目に見えない部分" />}
          >
            <div className="my-5">
              <Text color="dimmed" className="text-sm sm:text-base">
                企画：課題発見、ゴール・ターゲット・コンセプトの決定
              </Text>
              <Text color="dimmed" className="text-base sm:text-base">
                設計：サイト・ページ構造の設計
              </Text>
            </div>
            <LoadLink title="企画〜設計">
              <Link href="https://zenn.dev/pm_translate/articles/054e6e384062f4">
                プロダクトマネジメントの優先順位付けフレームワークの究極ガイド
              </Link>
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
          <Timeline.Item
            bullet={<IconGitCommit size={12} />}
            title={<LoadTitle title="目に見える部分" />}
          >
            <Text color="dimmed" className="text-sm sm:text-base">
              制作：ノーコードツールを活用
            </Text>
            <Text color="dimmed" className="text-sm sm:text-base">
              公開と運用：公開し改善と検証を繰り返す
            </Text>
            <LoadLink title="ツール選びから">
              <Link href="https://nocodedb.world/archives/15839">
                Webサイト作成におすすめのノーコード開発ツール10選【NoCode DB】
              </Link>
            </LoadLink>
            <LoadLink title="studio">
              <Link href="https://zenn.dev/higashi10/articles/bf6e26b24872d0">
                NoCodeでWebページ作成してみた (zenn.dev)
              </Link>
            </LoadLink>
            <LoadLink title="アカウント作成">
              <Link href="https://note.com/can_kids_banana/n/nd3d16fad935b?magazine_key=mbd854623ba42">
                【ペライチ基礎】アカウント作成方法
              </Link>
            </LoadLink>
            <LoadLink title="公開と運用">
              <Link href="https://note.com/ad_creation/n/n18d051e08a53#NJS41">
                誰でも簡単にホームページが作れるペライチ/公開編
              </Link>
            </LoadLink>
            <LoadLink title="ITとは無縁なら">
              <Link href="https://zenn.dev/meihei/articles/efb14509ddaebb">
                IT とは無縁の小さなお店でホームページを運用する際に (zenn.dev)
              </Link>
            </LoadLink>
          </Timeline.Item>

          <Timeline.Item
            title="Let's try!"
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
          ></Timeline.Item>
          {/* ここまで */}
        </Timeline>
      </div>
      <ArrowNav previousPage={previousPage} nextPage={nextPage} />
    </div>
  );
};
