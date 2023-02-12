import { Flex, Text } from '@mantine/core';

import { ArrowNav } from '@/components/parts/ArrowNav';
import { PAGES } from '@/constants/link';

export const ProjectPlan = () => {
  return (
    <div>
      {/* YESに色がついているパターン */}
      <div className="m-10 flex justify-between">
        <Text fz="sm" fw={700} className="justify-content-center m-5 flex">
          あなたが落としたのは金の斧ですか？
        </Text>
        <div>
          <Flex
            mih={50}
            bg="rgba(0, 0, 0, 0)"
            gap="xl"
            justify="flex-end"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <button>
              <img src="/yesorno/yes1.svg" alt="" width="50" height="50" />
            </button>
            <button>
              <img src="/yesorno/no2.svg" alt="" width="85" height="85" />
            </button>
          </Flex>
        </div>
      </div>
      {/* NOに色がついているパターン */}
      <div className="m-10 flex flex-col justify-between sm:flex-row">
        <Text fz="sm" fw={700} className="m-5 flex">
          あなたが落としたのは金の斧ですか？
        </Text>
        <div>
          <Flex
            mih={50}
            bg="rgba(0, 0, 0, 0)"
            gap="xl"
            justify="flex-end"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <button>
              <img src="/yesorno/yes2.svg" alt="" width="50" height="50" />
            </button>
            <button>
              <img src="/yesorno/no1.svg" alt="" width="85" height="85" />
            </button>
          </Flex>
        </div>
      </div>

      <ArrowNav previousPage={PAGES.HOME} nextPage={PAGES.SITE_STRUCTURE} />
    </div>
  );
};
