import { DollarSign } from "lucide-react"

export function AnnuityManagementSlide() {
  return (
    <div className="h-full flex flex-col p-12 bg-background">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-block px-3 py-1.5 bg-primary/10 rounded-lg mb-3">
          <span className="text-base font-semibold text-primary">Chapter 02 해결방안</span>
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-3">IP 수익화의 출발점, 연차료 관리</h2>
        <p className="text-lg text-muted-foreground">
          연차료 관리는 단순 비용 납부가 아닌, 미래 수익을 위한 전략적 의사결정입니다
        </p>
      </div>

      <div className="flex-1 space-y-4">
        {/* What is Annual Fee */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1.5">연차료란?</h3>
              <p className="text-sm text-muted-foreground">
                {
                  "IP(특허, 상표, 디자인) 의 권리 유지를 위해 매년(미국 3.5)마다 국가별 특허청에 납부하는 비용 ➜ 연차료 납부의 이유는 "
                }
                해당 IP가 <strong>{'"수익화 가능성"'}</strong>
                {"이 있기 떄문"}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Three Columns */}
        <div className="grid grid-cols-3 gap-4">
          {/* Column 1: 현재 연차료 관리의 현황·문제 */}
          <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-base">
                1
              </div>
              <h2 className="text-base font-bold text-gray-900">현재 연차료 관리의 현황·문제</h2>
            </div>

            <div className="space-y-2">
              <div className="bg-red-50 p-2.5 rounded-lg">
                <div className="font-semibold text-red-900 mb-1 text-sm">형식적 관리</div>
                <p className="text-xs text-gray-700">단순 납부 대행 중심의 수동적 관리</p>
              </div>

              <div className="bg-red-50 p-2.5 rounded-lg">
                <div className="font-semibold text-red-900 mb-1 text-sm">판단 근거 부재</div>
                <p className="text-xs text-gray-700">특허 가치 평가 없이 일괄 납부 또는 무분별한 포기</p>
              </div>

              <div className="bg-red-50 p-2.5 rounded-lg">
                <div className="font-semibold text-red-900 mb-1 text-sm">연차료 누락 사고</div>
                <p className="text-xs text-gray-700">체계적 관리 시스템 부재로 우수 특허 소멸</p>
              </div>

              <div className="bg-red-50 p-2.5 rounded-lg">
                <div className="font-semibold text-red-900 mb-1 text-sm">과도한 비용 부담</div>
                <p className="text-xs text-gray-700">다단계 구조로 인한 불필요한 비용 증가</p>
              </div>
            </div>
          </div>

          {/* Column 2: 왜 연차료 관리가 중요한가? */}
          <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-base">
                2
              </div>
              <h2 className="text-base font-bold text-gray-900">왜 연차료 관리가 중요한가?</h2>
            </div>

            <div className="space-y-2">
              <div className="bg-blue-50 p-2.5 rounded-lg">
                <div className="font-semibold text-blue-900 mb-1 text-sm">가치 판단의 시점</div>
                <p className="text-xs text-gray-700">연차료 납부 시점은 특허 가치를 재평가하는 핵심 타이밍</p>
              </div>

              <div className="bg-blue-50 p-2.5 rounded-lg">
                <div className="font-semibold text-blue-900 mb-1 text-sm">전략적 자원 배분</div>
                <p className="text-xs text-gray-700">핵심 특허 집중 관리로 효율적 예산 운영</p>
              </div>

              <div className="bg-blue-50 p-2.5 rounded-lg">
                <div className="font-semibold text-blue-900 mb-1 text-sm">수익화 기회 발굴</div>
                <p className="text-xs text-gray-700">가치있는 특허 선별로 기술이전·라이선싱 기회 창출</p>
              </div>

              <div className="bg-blue-50 p-2.5 rounded-lg">
                <div className="font-semibold text-blue-900 mb-1 text-sm">기업 가치 상승</div>
                <p className="text-xs text-gray-700">우수 특허 포트폴리오 유지로 투자 유치 및 M&A 가치 제고</p>
              </div>
            </div>
          </div>

          {/* Column 3: 지금의 핵심 문제 정의 */}
          <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-base">
                3
              </div>
              <h2 className="text-base font-bold text-gray-900">IP 수익화를 위한 핵심 문제</h2>
            </div>

            <div className="space-y-2">
              <div className="bg-purple-50 p-2.5 rounded-lg border-l-4 border-purple-500">
                <div className="font-bold text-purple-900 mb-1.5 text-sm">문제의 본질</div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  연차료 관리가 <span className="font-bold text-purple-900">단순 비용 처리</span>로만 인식되어,
                  <span className="font-bold text-purple-900"> IP 수익화의 핵심 출발점</span>으로 활용되지 못하고 있음
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-3 rounded-lg">
                <div className="font-bold text-purple-900 mb-1.5 text-sm">필요한 변화</div>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-600 font-bold mt-0.5">→</span>
                    <span>
                      <strong>시장·기술·산업·사업화 데이터</strong> 기반 권리유지 판단 정보 제공
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-600 font-bold mt-0.5">→</span>
                    <span>
                      <strong>실시간 연동</strong> 기반 관리 프로세스
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-600 font-bold mt-0.5">→</span>
                    <span>
                      <strong>수익화 연계</strong> 전문 서비스
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-600 font-bold mt-0.5">→</span>
                    <span>
                      <strong>합리적 관리 비용</strong> 구조 개선
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl text-white text-center flex-shrink-0">
        <p className="font-bold text-xl">IP 수익화의 본질을 꿰뚫어 본 IPNOW의 해답, Paytent</p>
      </div>
    </div>
  )
}
