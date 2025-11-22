import { Scale, TrendingUp, Target, CheckCircle2, AlertCircle } from "lucide-react"

export function IpJudgmentCoreSlide() {
  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 01 Prologue</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">IP 관리의 핵심은 '판단'입니다</h2>
        <p className="text-xl text-muted-foreground text-left">
          단순 연차료 납부가 아닌, 전략적 의사결정을 통한 포트폴리오 최적화가 필요합니다.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Key Decision 1 */}
        <div className="bg-white rounded-xl border-2 border-blue-200 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">IP 권리 유지 vs 포기 판단</h3>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3 text-slate-600">
              <p className="text-base leading-relaxed">
                <span className="font-bold text-blue-600">어떤 특허를 유지</span>하고,{" "}
                <span className="font-bold text-blue-600">어떤 특허를 포기</span>할 것인가?
              </p>
              <p className="text-base leading-relaxed">
                시장, 기술 및 산업의 변화를 반영한 체계적인 평가와 판단이 필요합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Key Decision 2 */}
        <div className="bg-white rounded-xl border-2 border-green-200 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">활용 전략 수립</h3>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3 text-slate-600">
              <p className="text-base leading-relaxed">
                <span className="font-bold text-green-600">언제, 어디서, 어떻게</span> 특허를 활용할 것인가?
              </p>
              <p className="text-base leading-relaxed">
                기술이전, 라이선스, 방어 등 구체적인 수익화 시나리오를 위한 판단 근거가 필요합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Key Decision 3 */}
        <div className="bg-white rounded-xl border-2 border-purple-200 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">핵심 특허 선별</h3>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3 text-slate-600">
              <p className="text-base leading-relaxed">
                <span className="font-bold text-purple-600">어떤 특허가 핵심</span>이고,{" "}
                <span className="font-bold text-purple-600">어떤 특허가 부가적</span>인가?
              </p>
              <p className="text-base leading-relaxed">
                사업 연관성, 기술 경쟁력, 권리 범위를 종합적으로 평가해야 합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Key Decision 4 */}
        <div className="bg-white rounded-xl border-2 border-orange-200 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">투자 우선순위 결정</h3>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3 text-slate-600">
              <p className="text-base leading-relaxed">
                <span className="font-bold text-orange-600">어떤 특허에 추가 투자</span>하고,{" "}
                <span className="font-bold text-orange-600">어떤 특허는 최소 유지</span>할 것인가?
              </p>
              <p className="text-base leading-relaxed">
                한정된 예산 내에서 수익화 가능성이 높은 특허에 집중하는 선택과 집중 전략이 필요합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg flex items-center justify-center gap-3">
        <AlertCircle className="w-7 h-7" />
        <p className="text-center text-xl font-bold">
          IP관리의 핵심은 단순 권리 유지를 위한 연차료 납부가 아닌, 포트폴리오 전체를 최적화하는 '전략적 판단'의
          연속입니다
        </p>
      </div>
    </div>
  )
}
