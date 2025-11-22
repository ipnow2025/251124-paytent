import { Users, Database, DollarSign, Puzzle, AlertTriangle } from "lucide-react"

export function WhyNotManagedSlide() {
  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 01 Prologue</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">왜 IP는 제대로 관리되지 않을까?</h2>
        <p className="text-xl text-muted-foreground text-left">
          특허는 기업의 생존·성장 자산인데, 등록 이후 관리가 방치되는 구조가 여전합니다.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Problem 1: Lack of Expertise */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">특허 관리 전문 인력 부재</h3>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3 text-slate-600">
              <p className="text-base leading-relaxed">
                최근 5년 간 지재권 분쟁을 겪은 벤처 및 중소·중견기업{" "}
                <span className="font-bold text-red-600">70%는 전문 인력 부재</span>
              </p>
              <p className="text-base leading-relaxed">관리 규모·복잡도 대비 담당자 수와 역량이 현저히 부족합니다.</p>
            </div>
            <div className="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="font-bold text-red-700 text-lg">비전문가도 쉽게 관리 할 수 있는 IP관리시스템 도입 필요</p>
            </div>
          </div>
        </div>

        {/* Problem 2: No Management System */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
              <Database className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">연차료 관리 시스템 부재</h3>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3 text-slate-600">
              <p className="text-base leading-relaxed">
                지재권에 대한 중요성과 시장이 커짐에도 특허 연차료 관리시스템은 개선되지 않음
              </p>
              <p className="text-base leading-relaxed">체계적인 연차료 관리 부재로 인한 권리 상실 위험이 상존합니다.</p>
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <p className="font-bold text-orange-700 text-lg">
                우수 특허 선별을 통한 비용 절감, 핵심 특허 지속관리로 기업가치 상승 및 매출 증대 필요
              </p>
            </div>
          </div>
        </div>

        {/* Problem 3: Cost-Only Perception */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">매출과 무관한 특허</h3>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3 text-slate-600">
              <p className="text-base leading-relaxed">비용만 쓰고 매출과 무관한 특허만 보유</p>
              <p className="text-base leading-relaxed">
                특허 가치와 사업 연계성에 대한 평가 없이 단순 유지만 반복됩니다.
              </p>
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
              <p className="font-bold text-amber-700 text-lg">특허 주변 정보를 종합해 매출로 연결시키는 플랫폼 필요</p>
            </div>
          </div>
        </div>

        {/* Problem 4: Difficult Portfolio Management */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <Puzzle className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">권리 행사가 어려운 특허 포트폴리오</h3>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3 text-slate-600">
              <p className="text-base leading-relaxed">특허권은 있으나 활용가능한 독점권은 확보하기 어려운 구조</p>
              <p className="text-base leading-relaxed">포트폴리오 전략 부재로 권리 행사의 실효성이 낮습니다.</p>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-500">
              <p className="font-bold text-gray-700 text-lg">
                활용가능한 권리범위 확보를 위한 효율적인 전문가 활용시스템 필요
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Warning */}
      <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg flex items-center justify-center gap-3">
        <AlertTriangle className="w-7 h-7" />
        <p className="text-center text-xl font-bold">IP 권리유지 의사결정 미흡 → 핵심·우수특허의 반복적 소멸</p>
      </div>
    </div>
  )
}
