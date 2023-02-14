import { ArrowNav } from '@/components/parts/ArrowNav';
import { PageHeader } from '@/components/parts/PageHeader';
import { PAGES } from '@/constants/link';

export const Other = () => {
  const currentPage = PAGES.OTHER;
  const previousPage = PAGES.SURVEY;
  const nextPage = PAGES.NO_CODE;

  return (
    <div>
      <PageHeader pageTitle={currentPage.name} />
      <div className="text-center font-mono text-3xl font-bold">
        あなたはWebサイト以外で情報発信するべきです
      </div>
      <img src="/result/other.svg" alt="other" className="mx-auto my-5" />

      <div className="my-20 flex">
        <div className="w-14 rounded-full bg-red-200" />
        <div className="ml-4 sm:my-10 sm:ml-10">
          <div className="mb-6 sm:mb-10">
            <div className="mb-3 text-xl font-semibold sm:mb-5">
              なぜWebサイト以外の手段がおすすめなのか
            </div>
            <div className="pl-5 text-base text-stone-500">
              情報を瞬時に簡単に発信できるということが、Webサイト以外で情報発信をする大きな特徴です。
              <br />
              質問に答えてもらった結果から、あなたが達成したい目標のために最適なのはWebサイト以外の手段ではないのかと提案します。
            </div>
          </div>
          <div>
            <div className="mb-3 text-xl font-semibold sm:mb-5">
              Webサイト以外の手段の具体例
            </div>
            <div className="pl-5 text-base text-stone-500">
              Webサイト以外の手段として、本サイトではNotion、Instagramを紹介します。
              <br />
              それぞれの特色を理解し、この２つ以外の手段も参考にしながら、発信したい情報を見つめ直してみてください。
              <div className="mt-4 ml-2 font-bold text-neutral-900">・Notion</div>
              <div className="ml-4">
                Notionとは、複数のツールやアプリで管理・共有していた方法を全部まとめて一元管理・共有できるサービスです。
                <br />
                2022年11月に日本語版が正式リリースされた最新のサービスであるのにも関わらず、トヨタ自動車、三菱重工、サイバーエージェントといった大企業で導入されるなど急速に拡大が続いています。
                <br />
                Notionの機能の一つに、Notionで作成したページをWebサイトの代わりとして公開できるというものがあります。
                <br />
                複雑なコンテンツ管理システムの構築せずとも、いくつもの埋め込み機能や見出しやカラムなどのツールが備わっているので、簡単に制作できます。
                <br />
                また、デザイナーやエンジニアの手を借りずとも、自力で構築や拡張を行うことができます。
                <br />
                Notionでページを作成すれば簡単にWebに公開でき、アクセスリンクを共有したり、ネット検索で見つけられるようにしたりできます。
              </div>
              <div className="mt-4 ml-2 font-bold text-neutral-900">・Instagram</div>
              <div className="ml-4">
                Instagramとは、写真・動画共有ソーシャル・ネットワーキング・サービスです。
                <br />
                気軽に始めることができて、維持費がかからないということが大きな特徴です。
                <br />
                食品、服・アクセサリー、雑貨・家具など、見た目が重要なファクターを占めるものを扱いたい場合は、特に活用すべきです。
                <br />
                アクティブユーザーは3,300万人と非常に多く、アクセス数が増やせることが見込まれます。
                <br />
                メインのユーザー層は20〜40代となっており、若年から中年層へのリーチが得意といえます。
                <br />
                また、最近のInstagramはライブ配信も流行しており、リアルタイムな情報発信やユーザーとの双方向コミュニケーションにもよく活用されています。
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArrowNav previousPage={previousPage} nextPage={nextPage} />
    </div>
  );
};
