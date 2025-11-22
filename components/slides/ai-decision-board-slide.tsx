import { Brain, TrendingUp } from "lucide-react"
import { DecisionDashboard } from "@/components/decision-dashboard"

export function AiDecisionBoardSlide() {
  const aiCapabilities = [
    "AI가 특허 60건 분석 후 유지 49건, 포기 3건 자동 추천",
    "Smart5 등급, 연차, AI 점수로 우선순위 정렬 가능",
    "유지/포기 결정 시 예상 절감액 실시간 시뮬레이션",
    "납부기한·연차·국가별 필터로 즉시 의사결정 가능",
  ]

  const businessValue = [
    "경영진 질문에 즉시 답변 가능한 대시보드",
    "사람이 며칠 걸릴 분석을 AI가 몇 초만에 완료",
    "포트폴리오 전체를 한눈에 보며 전략적 판단 지원",
  ]

  return (
    <div className="h-full flex flex-col p-12 bg-background">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-3">
          <span className="text-base font-semibold text-primary">Chapter 04 Paytent AI</span>
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-3">AI 의사결정 보드로 포트폴리오를 한눈에</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          수십, 수백 건의 IP를 사람이 하나씩 검토하고 판단하는 시대는 끝났습니다. Paytent AI는 'AI 의사결정 보드'로 전체
          포트폴리오의 유지/포기 추천, 비용 시뮬레이션, 우선순위를 자동으로 제공합니다.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-[2fr_1fr] gap-8">
        {/* Left: DecisionDashboard Component */}
        <div className="flex flex-col overflow-hidden rounded-lg border-2 border-primary/20 shadow-lg">
          <div className="h-full overflow-auto">
            <DecisionDashboard />
          </div>
        </div>

        {/* Right: AI Capabilities and Business Value */}
        <div className="flex flex-col gap-4">
          {/* AI Capabilities */}
          <div className="flex flex-col">
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">AI가 자동으로 처리하는 것</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                복잡한 분석과 판단을 AI가 자동화, IP 담당자는 전략적 의사결정에만 집중
              </p>
            </div>

            <div className="space-y-2">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="p-2.5 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed">{capability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Value */}
          <div className="flex flex-col">
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">담당자가 얻는 가치</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                단순 반복 작업에서 해방, 데이터 기반의 빠르고 정확한 의사결정 실현
              </p>
            </div>

            <div className="space-y-2">
              {businessValue.map((value, index) => (
                <div key={index} className="p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
