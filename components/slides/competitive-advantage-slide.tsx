import { CheckCircle, DollarSign, Users, FileCheck, Share2, TrendingUp } from "lucide-react"

export function CompetitiveAdvantageSlide() {
  const advantages = [
    {
      icon: CheckCircle,
      title: "연차료 납부 누락 위험 0%",
      description: "연차료 납부를 놓치지 않는 Cross Check 시스템",
    },
    {
      icon: DollarSign,
      title: "합리적 가격구조",
      description: "해외연차료의 다단계 납부 구조를 직접 납부로 단축",
    },
    {
      icon: Users,
      title: "고객 Resource 투입 최소화",
      description: "전 범위 System화로 기존 resource대비 추가 투입 없음",
    },
    {
      icon: FileCheck,
      title: "연차료 납부 판단 근거 제공",
      description: "다양한 필수 Data 제공으로 정확한 IP별 연차료 납부 여부 판단",
    },
    {
      icon: Share2,
      title: "연차료관리 플랫폼 이용",
      description: "가장 쉬운 플랫폼을 통해 고객과 IPNOW가 연차료 관리 및 납부 진행",
    },
    {
      icon: TrendingUp,
      title: "IP 수익화 기회 발굴",
      description: "다양한 레퍼런스 기반으로 IP 수익화까지 One-Stop 서비스 제공",
    },
  ]

  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 02 해결방안</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">
          IP 수익화 및 연차료 관리는 <span className="text-primary">IP를 가장 잘 아는 아이피나우</span>가 가장 잘
          합니다.
        </h2>
        <p className="text-xl text-muted-foreground">아이피나우(특허그룹) 연차료 관리 플랫폼의 경쟁력</p>
      </div>

      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-6">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="flex flex-col p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <advantage.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 whitespace-pre-line">{advantage.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm text-destructive text-center">
          * 타사들과 달리 모든 절차를 독자적인 자체 시스템으로 진행하므로 효율적이면서 누락 사고 발생 없음
        </p>
      </div>
    </div>
  )
}
