import {
  CheckCircle,
  TrendingUp,
  BarChart3,
  ThumbsUp,
  Clock,
  Search,
  Database,
  Users,
  FileText,
  Lightbulb,
  PieChart,
  BookOpen,
} from "lucide-react"

export function ServicesSlide() {
  const services = [
    {
      number: "01",
      icon: CheckCircle,
      title: "연차료 누락 방지",
      description: "IPNOW DB와 사용자 DB 간 Cross-Check 시스템 제공",
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "비용 예측 및 예산 수립",
      description: "향후 15년간 연차료 예측으로 체계적 비용 관리 가능",
    },
    {
      number: "03",
      icon: BarChart3,
      title: "특허 등급 및 시장성 정보 제공",
      description: "Smart5 등급 + IP 시장성 평가 정보 (NOW 지표) 제공",
    },
    {
      number: "04",
      icon: ThumbsUp,
      title: "납부 판단 지원 기능",
      description: "유지/포기 판단 위한 시그널 제공 → 비용 절감 유도",
    },
    {
      number: "05",
      icon: BookOpen,
      title: "특허 활용 보고서",
      description: "기술동향, 키워드, 시장/제품/기업 정보, AI 추출 DB 등 납부 판단을 위한 다양한 정보 제공",
    },
    {
      number: "06",
      icon: Clock,
      title: "업무 효율 개선",
      description: "기한 관리 및 알림 서비스 제공",
    },
    {
      number: "07",
      icon: Search,
      title: "IP 검토·포기·유지 건 통합 관리",
      description: "검토·포기·유지 내역 실시간 관리, 검토건 추가/의견 반영 날짜 관리 리마인드 제공",
    },
    {
      number: "08",
      icon: Database,
      title: "검토 이력 DB화",
      description: "전해 의견 관련 히스토리 관리, 담당자 변경 시 리스크 최소화",
    },
    {
      number: "09",
      icon: Users,
      title: "발명자·공동관리자 의견 수렴",
      description: "이메일을 통한 납부 의견 수렴, 의견 및 상태 현황 등을 통한 관리",
    },
    {
      number: "10",
      icon: FileText,
      title: "기술가치평가",
      description: "One Click으로 특허의 숨겨진 가치 제공",
    },
    {
      number: "11",
      icon: Lightbulb,
      title: "IP 수익화 인사이트 제공",
      description: "수요기업 리스트 및 정보 등 수익화 가능 후보기업의 핵심 정보 제공 및 연계 지원",
    },
    {
      number: "12",
      icon: PieChart,
      title: "특허 자산 통계",
      description: "보유 특허의 출원/등록/이전 현 자산 통계 제공",
    },
  ]

  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 03 똑똑한 연차료 관리 방법</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">Paytent의 주요 서비스</h2>
        <p className="text-xl text-muted-foreground">IPNOW의 Paytent가 제공하는 12가지 핵심 연차료 서비스를 확인해보세요</p>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-primary">{service.number}</span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                {service.icon && <service.icon className="w-5 h-5 text-accent" />}
              </div>
            </div>
            <h3 className="text-[1.375rem] font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
