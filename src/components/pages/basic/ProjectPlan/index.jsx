import { ArrowNav } from '@/components/parts/ArrowNav';
import { BottomText } from '@/components/parts/BottomText';
import { PATHS } from '@/constants/link';

export const ProjectPlan = () => {
  return (
    <div>
      <BottomText>
        自分の「作りたい」と比べてどうでしたか？
        <br />
        次のページからいよいよプログラミングに入っていきます！
      </BottomText>
      <ArrowNav previousPage={PATHS.HOME} nextPage={PATHS.SITE_STRUCTURE} />
    </div>
  );
};
