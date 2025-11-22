import { Radio, FileText, Building2, TrendingUp, LineChart } from "lucide-react"

export function DataServicesSlide() {
  const services = [
    {
      icon: Radio,
      title: "연차료 시그널링",
      items: ["특허경쟁력 검토", "(연계특허, 주요국가출원)"],
      arrow: true,
      result: "특허 유지 or 포기 제안",
      outcome: "비전문가 판단근거 제공",
    },
    {
      icon: FileText,
      title: "특허등급 제공",
      items: ["보유 특허의 명확한 평가", "Smart5 등급 (발명진흥회)", "NOW 등급(자체 등급, 투자활용성 중점)"],
      arrow: false,
      result: "",
      outcome: "보유 특허 Value 확인",
    },
    {
      icon: Building2,
      title: "관련기업 Data제공",
      items: ["특허별 연관 기업군 정보", "(사업현황, 특허정보 등)", "Big Data 및 AI 활용", "Data 지속 Version Up"],
      arrow: false,
      result: "",
      outcome: "특허 수익화에 활용",
    },
    {
      icon: TrendingUp,
      title: "시장정보 제공",
      items: ["특허별 연계시장 Insight", "(시장 전망, 트렌드 등)", "특허별 시장 관심도 확인", "120개 분야 Data 보유"],
      arrow: false,
      result: "",
      outcome: "특허 운영방향에 활용",
    },
    {
      icon: LineChart,
      title: "연차료 예측",
      items: ["향후 17년간 연차료 예측", "연차료 예상 수립", "(실시간 특허운영 반영)"],
      arrow: false,
      result: "",
      outcome: "쉬운 예산 관리",
    },
  ]

  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 03 똑똑한 연차료 관리 방법</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">핵심 기능 2. 특허활용보고서</h2>
        <p className="text-xl text-muted-foreground">
          IP 수익화 및 연차료 전략적 납부판단 및 특허 Value Up을 위한 활용 정보
        </p>
      </div>

      <div className="flex-1 grid grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <service.icon className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-[1.375rem] font-bold text-foreground mb-4 whitespace-pre-line leading-tight">
              {service.title}
            </h3>

            {service.arrow && service.items.length >= 2 ? (
              <div className="mb-6 flex-1">
                <div className="p-3 rounded-lg bg-card text-center mb-2">
                  <p className="text-lg font-normal text-foreground leading-[1.5]">{service.items[0]}</p>
                  <p className="text-lg font-normal text-muted-foreground mt-1 leading-[1.5]">{service.items[1]}</p>
                </div>
                <div className="text-center mb-2">
                  <span className="text-2xl text-muted-foreground">↓</span>
                </div>
                <div className="p-3 rounded-lg text-center">
                  <span className="text-lg font-normal text-foreground leading-[1.5]">{service.result}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2 mb-6 flex-1">
                {service.items.map((item, idx) => (
                  <p key={idx} className="text-lg font-normal text-foreground text-center leading-[1.5]">
                    {item}
                  </p>
                ))}
              </div>
            )}

            <div className="mt-auto p-3 rounded-lg bg-primary/5 border-2 border-primary text-center">
              <span className="text-base font-semibold text-primary">{service.outcome}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
