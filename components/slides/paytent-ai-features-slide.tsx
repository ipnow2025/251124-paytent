import { Bell, Brain, MessageSquare } from "lucide-react"

export function PaytentAiFeaturesSlide() {
  const features = [
    {
      icon: Bell,
      title: "덜 챙기기",
      subtitle: "지능형 알림 및 캘린더",
      description: "연차료 납부 마감일, 권리 포기 여부 결정 시점 등을 자동으로 알림",
      details: [
        "주간/월간 및 D-2 최종 데드라인 알림",
        "플랫폼, 메일 등 희망하는 방법으로 알림",
        "주간/월간 일정을 한눈에 보는 캘린더",
      ],
      benefit: "별도 TO DO LIST 없이 중요 업무 즉시 인지",
      color: "primary",
    },
    {
      icon: Brain,
      title: "덜 고민하기",
      subtitle: "AI 추천 시스템",
      description: "SMART5 등급, 연차, 시장성 등을 AI가 종합 분석하여 유지/포기, 우선순위, 예산 배분 추천",
      details: ["특허별 연차 유지/포기 추천", "우선 검토 대상 자동 정리", "예산 배분 방향 제시"],
      benefit: "전체 검토 대신 AI 정리 결과 중심으로 업무 시간 단축",
      color: "accent",
    },
    {
      icon: MessageSquare,
      title: "덜 찾기",
      subtitle: "AI 챗봇 & 자동 보고서",
      description: "자연어 질문만으로 필요한 정보 조회, 통계 분석, 보고서 생성까지 제공",
      details: ["자연어 질의로 즉시 정보 조회", "분기/반기/연간 예상 연차료 자동 제공", "보고서 초안 자동 생성"],
      benefit: "복잡한 필터 없이 질문→정보→보고서 원스톱",
      color: "secondary",
    },
  ]

  return (
    <div className="h-full flex flex-col px-16 pb-8 pt-8 bg-background">
      <div className="mb-8">
        <div className="inline-block px-4 py-2 bg-blue-100 rounded-lg mb-4">
          <span className="text-lg font-semibold text-blue-600">Chapter 04 Paytent AI</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">Paytent AI 핵심 기능</h2>
        <p className="text-xl text-muted-foreground">고객이 체감하는 3가지 '편리함'</p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl bg-card border-2 border-${feature.color}/30 hover:shadow-xl transition-all flex flex-col`}
          >
            <div className={`w-16 h-16 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6`}>
              <feature.icon className={`w-8 h-8 text-${feature.color}`} />
            </div>

            <div className="mb-6">
              <h3 className="text-[1.375rem] font-bold text-foreground mb-2">{feature.title}</h3>
              <p className={`text-xl font-semibold text-${feature.color} mb-3`}>{feature.subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>

            <div className="flex-1 space-y-2 mb-6">
              {feature.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className={`text-${feature.color} mt-1`}>•</span>
                  <span className="text-lg text-foreground">{detail}</span>
                </div>
              ))}
            </div>

            <div className={`p-4 rounded-lg bg-${feature.color}/5 border border-${feature.color}/20`}>
              <p className="text-lg font-semibold text-foreground">💡 {feature.benefit}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="max-w-[1344px] w-full p-6 rounded-xl bg-accent/10 border-2 border-accent/30">
          <p className="text-[1.375rem] font-bold text-center text-foreground">
            모든 기능은 고객이 <span className="font-bold">덜 챙기고, 덜 고민하고, 덜 찾게</span> 만드는 데 FOCUS가
            맞춰진, <span className="font-bold">AI 판단 도우미</span>입니다.
          </p>
        </div>
      </div>
    </div>
  )
}
