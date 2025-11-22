import { DollarSign, AlertTriangle, XCircle } from "lucide-react"

export function CurrentIssuesSlide() {
  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 01 Prologue</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">연차료 관리의 핵심 문제점</h2>
        <p className="text-xl text-muted-foreground text-left">
          무관심과 관리 체계 부재로 'IP 권리 손실·비용 낭비·판단 실패'가 반복되는 구조
        </p>
      </div>

      <div className="flex-1 space-y-4">
        {/* Why Indifference */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-amber-50 border border-amber-200">
            <h3 className="text-[1.375rem] font-bold text-amber-900 mb-3">연차료 관리에 대한 무관심 사유</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-lg">
                <span className="text-amber-600 mt-0.5">•</span>
                <span className="text-gray-700">중요하지 않다는 인식</span>
              </li>
              <li className="flex items-start gap-2 text-lg">
                <span className="text-amber-600 mt-0.5">•</span>
                <span className="text-gray-700">비전문성 (연차료 납부 구조를 이해하지 못함)</span>
              </li>
              <li className="flex items-start gap-2 text-lg">
                <span className="text-amber-600 mt-0.5">•</span>
                <span className="text-gray-700">관리 변경에 많은 Resource 필요 (비용, 노력, 지식)</span>
              </li>
              <li className="flex items-start gap-2 text-lg">
                <span className="text-amber-600 mt-0.5">•</span>
                <span className="text-gray-700">100% 외주 운영에 적응 (납부대행업체 or 특허사무소)</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-blue-50 border border-blue-200">
            <h3 className="text-[1.375rem] font-bold text-blue-900 mb-3">연차료 관리 단계의 중요성</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold text-lg">1.</span>
                <p className="text-lg text-gray-700">유지되어야 하는 특허권리에 대해서만 납부해야 효율적</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold text-lg">2.</span>
                <p className="text-lg text-gray-700">유지가 필요한 특허권리는 평가를 통해서 확인 가능</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold text-lg">3.</span>
                <p className="text-lg text-gray-700">보유특허의 평가는 연차료 납부 시점에 진행되어야 함</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold text-lg">4.</span>
                <p className="text-lg text-gray-700 font-semibold">
                  따라서, 연차료 납부는 특허전략에서 매우 중요한 절차
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Problems */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 rounded-xl bg-red-50 border-2 border-red-300">
            <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center mb-3">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[1.375rem] font-bold text-red-900 mb-2">① 불필요한 비용 발생</h4>
            <ul className="space-y-1.5 text-lg text-gray-700">
              <li>• 무분별한 비용 집행</li>
              <li>• 고가의 외주 비용 부담</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-red-50 border-2 border-red-300">
            <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center mb-3">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[1.375rem] font-bold text-red-900 mb-2">② 주요 특허 소멸</h4>
            <ul className="space-y-1.5 text-lg text-gray-700">
              <li>• 외주업체 관리 미흡</li>
              <li>• 담당자 관리의 한계</li>
              <li className="font-semibold text-red-700">예) A대학 '23년 연차료 미납으로 특허권 상실</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-red-50 border-2 border-red-300">
            <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center mb-3">
              <XCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[1.375rem] font-bold text-red-900 mb-2">③ 판단 시기 상시</h4>
            <ul className="space-y-1.5 text-lg text-gray-700">
              <li>· 우수·핵심 특허를 선별 못함</li>
              <li>· 유지/포기 결정을 해야 할 타이밍을 놓침</li>
              <li>· → 수익화 가능 IP를 남기지 못하고 기회와 예산이 동시에 사라짐</li>
            </ul>
          </div>
        </div>

        {/* Bottom Warning */}
        <div className="p-5 rounded-xl bg-destructive text-destructive-foreground">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="w-6 h-6" />
            <p className="text-[1.375rem] font-bold text-center text-white">
              IP 관리의 본질은 단순 연차료 '납부'가 아닌, 수익화 가능 IP를 제때 골라내는 판단과 관리 체계의 부재입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
