import { TrendingUp, Database, Users } from "lucide-react"

export function TechValuationSlide() {
  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 03 똑똑한 연차료 관리 방법</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">핵심 기능 3. 기술가치평가</h2>
        <p className="text-xl text-muted-foreground">수익 기반의 진짜 특허가치를 계산합니다</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-8 min-h-0">
        {/* Left Box: Intro & Description */}
        <div className="p-6 rounded-xl bg-blue-50 border-2 border-blue-200 flex flex-col">
          <h3 className="text-[1.375rem] font-bold text-blue-900 mb-4">특허의 숨겨진 가치를 발견하세요</h3>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            IPNOW의 기술가치평가 시스템은 비용접근법, 수익접근법, 시장접근법을 통합적으로 활용하여 특허의 객관적 가치를
            산출합니다. 20년 이상의 특허 분석 노하우와 AI 기반 알고리즘이 만나 특허 자산의 정확한 가치를 도출합니다.
          </p>

          <div className="space-y-4 flex-1">
            <div className="p-4 rounded-lg bg-white border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Database className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-blue-900">차별화된 분석 시스템</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                150만건 이상의 특허 빅데이터를 기반으로 한 특허 평가 알고리즘으로 독자적인 가치를 발견합니다.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-blue-900">전문가 집단의 노하우</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                기술 개발, 소송, 라이센싱, 사업화 전문가 등 IBG의 IP 전문인력의 집약된 노하우를 반영한 다차원 분석을
                적용합니다.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-blue-900">신뢰할 수 있는 결과</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                다양한 기술 분야와 산업별 특성을 반영한 체계적인 평가 시스템으로 객관적이고 정밀한 가치평가 결과를
                제공합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Right Box: Valuation Example */}
        <div className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200 flex flex-col overflow-hidden">
          <h3 className="text-[1.375rem] font-bold text-slate-800 mb-4">기술가치평가보고서</h3>

          {/* Patent Valuation Image */}
          <div className="flex-1 rounded-lg overflow-hidden border-2 border-slate-200 bg-white">
            <img
              src="/images/tech-valuation-detail.png"
              alt="특허 상세 정보 및 최종 특허 가치 평가"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Message Bar */}
      <div className="mt-4 p-4 rounded-xl bg-primary text-primary-foreground shadow-lg shrink-0">
        <p className="text-center text-[1.375rem] font-bold">
          비용접근법, 수익접근법, 시장접근법을 통합한 정확한 특허 가치 산정으로 전략적 의사결정을 지원합니다
        </p>
      </div>
    </div>
  )
}
