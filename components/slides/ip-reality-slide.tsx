import { HelpCircle, TrendingDown, AlertTriangle, ArrowDown, RefreshCw, Coins, FileX } from "lucide-react"

export function IpRealitySlide() {
  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 01 Prologue</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">IP 관리의 현실</h2>
        <p className="text-xl text-muted-foreground">
          IP 출원은 '수익화'를 위한 시작이지만, 등록 후 부실한 관리로 IP 수익화 기회를 놓치고 있습니다.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
        {/* Left Box: Why isn't it making money? */}
        <div className="p-8 rounded-xl bg-slate-50 border-2 border-slate-200 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-slate-700" />
            </div>
            <h3 className="text-[1.375rem] font-bold text-slate-800">"왜 우리 특허는 돈이 되지 않을까?"</h3>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto pr-2">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">출원 목적은 수익화인데…</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  기업/기관은 <span className="font-semibold text-blue-600">미래 수익(사업화·기술이전·라이선스)</span>을
                  기대하며 IP를 출원하지만, 출원 직후에는 제품·시장·매출이 불확실한 상태입니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-blue-600">2</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">등록 후 가치 판단·활용 계획 부재</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  등록된 특허 중 어떤 것이 돈이 될 핵심 IP인지 선별하지 못하며,{" "}
                  <span className="font-semibold text-blue-600">"언제/어디서/어떻게 쓸지"</span>에 대한 수익화 시나리오
                  관리가 없습니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-blue-600">3</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">IP권리 유지를 위한 연차료가 '비용'으로만 인식</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  재평가 없이 연차료만 계속 내다 보면, 변화한 시장·활용 가능성을 반영하지 못해{" "}
                  <span className="font-semibold text-blue-600">유지할 특허</span>와{" "}
                  <span className="font-semibold text-blue-600">정리할 특허</span>를 구분하지 못합니다. 그 결과{" "}
                  <span className="font-semibold text-blue-600">핵심 특허는 포기</span>되고,{" "}
                  <span className="font-semibold text-blue-600">가치 낮은 특허는 남아 장롱특허</span>만 늘어납니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Box: Vicious Cycle */}
        <div className="p-8 rounded-xl bg-red-50 border-2 border-red-100 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6 shrink-0">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-[1.375rem] font-bold text-red-900">수익화 실패의 악순환</h3>
          </div>

          <div className="flex-1 flex flex-col items-center justify-between relative py-1">
            {/* Step 1 */}
            <div className="w-full bg-white p-3 rounded-lg border border-red-100 shadow-sm flex items-center gap-3 z-10">
              <div className="bg-red-100 p-1.5 rounded-md shrink-0">
                <TrendingDown className="w-4 h-4 text-red-600" />
              </div>
              <span className="font-semibold text-slate-700 text-xl">수익화를 기대하며 IP 출원</span>
            </div>

            <ArrowDown className="text-red-300 w-4 h-4 shrink-0" />

            {/* Step 2 */}
            <div className="w-full bg-white p-3 rounded-lg border border-red-100 shadow-sm flex items-center gap-3 z-10">
              <div className="bg-red-100 p-1.5 rounded-md shrink-0">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <span className="font-semibold text-slate-700 text-xl">등록 후 방치 (활용/수익화 계획 없음)</span>
            </div>

            <ArrowDown className="text-red-300 w-4 h-4 shrink-0" />

            {/* Step 3 */}
            <div className="w-full bg-white p-3 rounded-lg border border-red-100 shadow-sm flex items-center gap-3 z-10">
              <div className="bg-red-100 p-1.5 rounded-md shrink-0">
                <Coins className="w-4 h-4 text-red-600" />
              </div>
              <span className="font-semibold text-slate-700 text-xl">유지비용(연차료)만 지속 발생</span>
            </div>

            <ArrowDown className="text-red-300 w-4 h-4 shrink-0" />

            {/* Step 4 */}
            <div className="w-full bg-white p-3 rounded-lg border border-red-100 shadow-sm flex items-center gap-3 z-10">
              <div className="bg-red-100 p-1.5 rounded-md shrink-0">
                <FileX className="w-4 h-4 text-red-600" />
              </div>
              <span className="font-semibold text-slate-700 text-xl">비용 부담 → 포기 or 장롱특허화</span>
            </div>

            <ArrowDown className="text-red-300 w-4 h-4 shrink-0" />

            {/* Step 5 */}
            <div className="w-full bg-red-600 p-3 rounded-lg shadow-md text-center z-10">
              <p className="font-bold text-white mb-0.5 text-xl">수익화 기회 상실 & 예산 낭비</p>
              <p className="text-red-100 text-xl">다시 "출원만 늘고 수익은 없는 구조" 반복</p>
            </div>

            {/* Connecting Line */}
            <div className="absolute top-4 bottom-4 left-1/2 w-0.5 bg-red-100 -translate-x-1/2 z-0"></div>
          </div>
        </div>
      </div>

      {/* Bottom Message Bar */}
      <div className="mt-4 p-4 rounded-xl bg-primary text-primary-foreground shadow-lg shrink-0">
        <p className="text-center text-[1.375rem] font-bold">
          "단순한 '관리'를 넘어 '수익화'로 이어지기 위해서는 특허의 가치를 주기적으로 평가하고 선별하는 과정이
          필수적입니다."
        </p>
      </div>
    </div>
  )
}
