import type { NextPage } from "next";
import TypeIt from "typeit-react";

import { PageTitle } from "../../components/PageTitle";

const introduce: NextPage = () => {
  return (
    <div>
      <PageTitle title={"Introduce"} sub={"AISM 소개"} />
      <TypeIt
        options={{
          strings: ["This will be typed!", "물리치료사"],
          speed: 10,
          waitUntilVisible: true,
        }}
      />
      <div>
        AISM은 2013년 AMTI 학회를 시작으로 2016년 AISM 학회로 변경하여 현재에
        이르고 있습니다.
      </div>
      <div>
        학회 초기에는 물리치료사들의 도수치료기법들을 강의하는 것을 시작으로
        헬스트레이너, 요가강사 및 필라테스 강사, 물리치료사, 건강 분야 관련
        종사자 등 그 범위를 넓혀 고객 및 환자를 관리하는데 필요한 척추교정술,
        근막이완기법, 팝필라테스, 마사지 강의를 실시해왔습니다.
      </div>
      <div>
        앞으로도 AISM은 더 좋은 강의로 여러분에 든든한 버팀목이 되겠습니다.
      </div>
    </div>
  );
};

export default introduce;
