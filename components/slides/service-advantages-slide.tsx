import { ArrowRight, ArrowLeft, BarChart3, FileText, TrendingUp, Users, Clock, MessageSquare } from "lucide-react"

export function ServiceAdvantagesSlide() {
  const problems = [
    {
      title: "프로세스 문제로",
      subtitle: "우수특허의 부지불식간 소멸",
      issue: "특허소멸 Issue",
    },
    {
      title: "특허사무소 사용시 비용 낭비",
      subtitle: "(불필요 단계로 2~4배 비용 추가)",
      issue: "과도한 비용부담",
    },
    {
      title: "인력투입이 불가한",
      subtitle: "업무 프로세스",
      issue: "특허권자에 대한 대응 미흡",
    },
  ]

  const solutions = [
    {
      title: "4단계 Cross Checking",
      subtitle: "(남부누락의 구조적 방지)",
    },
    {
      title: "비용처리 단계축소 및",
      subtitle: "경제적 네트워크",
    },
    {
      title: "플랫폼을 통한 관리 및",
      subtitle: "전문인력 운영",
    },
  ]

  const essentialServices = [
    { icon: BarChart3, text: "특허 평가\n등급 제공" },
    { icon: FileText, text: "관련기업\n정보제공" },
    { icon: TrendingUp, text: "관련 시장\n정보제공" },
    { icon: Clock, text: "납부 추천\n시그널제공" },
    { icon: Users, text: "발명자\n정보제공" },
    { icon: MessageSquare, text: "의견 수집\n자동 시스템" },
  ]

  return (
    <div className="h-full flex flex-col p-16 bg-background">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 03 똑똑한 연차료 관리 방법</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">IPNOW의 연차료 관리 서비스, Paytent</h2>
        <p className="text-xl text-muted-foreground">
          빈틈없는 프로세스로 리스크는 제로, IP수익화 가능성은 최대로 기존 서비스와의 차이를 확인하세요
        </p>
      </div>

      <div className="flex-1 flex gap-10">
        {/* Left Section: Comparison Flow (2/3) */}
        <div className="w-2/3 flex flex-col">
          {/* Header Labels */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-center mb-10">
            <div className="text-center">
              <div className="p-6 rounded-xl bg-muted border-2 border-muted-foreground/30 shadow-sm flex items-center justify-center min-h-[100px] mb-3">
                <h3 className="text-[1.375rem] font-bold text-muted-foreground">기존 시장</h3>
              </div>
            </div>
            <div className="w-16"></div>
            <div></div>
            <div className="w-16"></div>
            <div className="text-center">
              <div className="p-6 rounded-xl bg-primary border-2 border-primary shadow-sm flex items-center justify-center min-h-[100px]">
                <h3 className="text-[1.375rem] font-bold text-primary-foreground">IPNOW</h3>
              </div>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="flex-1 grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-start">
            {/* Problems Column */}
            <div className="flex flex-col gap-7 h-full justify-around">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-muted/50 border border-border shadow-sm flex flex-col justify-center hover:shadow-md transition-shadow min-h-[100px]"
                >
                  <p className="text-xl font-bold text-foreground text-center leading-relaxed">{problem.title}</p>
                  <p className="text-xl font-bold text-muted-foreground text-center leading-relaxed mt-2">{problem.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Arrow Column 1 */}
            <div className="flex flex-col gap-7 justify-around h-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-center min-h-[100px]">
                  <ArrowLeft className="w-8 h-8 text-muted-foreground/40" strokeWidth={2.5} />
                </div>
              ))}
            </div>

            {/* Issues Column */}
            <div className="flex flex-col gap-7 h-full justify-around">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-amber-50 border-2 border-amber-300 shadow-sm flex items-center justify-center min-h-[100px]"
                >
                  <p className="text-xl font-bold text-amber-900 text-center leading-relaxed">{problem.issue}</p>
                </div>
              ))}
            </div>

            {/* Arrow Column 2 */}
            <div className="flex flex-col gap-7 justify-around h-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-center min-h-[100px]">
                  <ArrowRight className="w-8 h-8 text-primary" strokeWidth={3} />
                </div>
              ))}
            </div>

            {/* Solutions Column */}
            <div className="flex flex-col gap-7 h-full justify-around">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow min-h-[100px]"
                >
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-xl font-bold text-red-600 text-center leading-relaxed">{solution.title}</p>
                    <p className="text-xl font-bold text-red-500 text-center leading-relaxed mt-2">{solution.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Services (1/3) */}
        <div className="w-1/3 flex flex-col gap-6">
          {/* Essential Services - Top Section */}
          <div className="flex-[2] p-8 rounded-2xl bg-white border-2 border-dashed border-blue-300 shadow-lg flex flex-col">
            <h3 className="text-[1.375rem] font-bold text-center text-foreground mb-8">연차료 관리 필수 제공 기능</h3>

            <div className="flex-1 grid grid-cols-3 gap-4 mb-6">
              {essentialServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="flex flex-col items-center justify-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <p className="text-base font-medium text-center text-foreground leading-tight whitespace-pre-line">
                      {service.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <p className="text-xs text-muted-foreground text-center italic mt-auto">*시스템 내 제공</p>
          </div>

          {/* Divider with "전문가 지원" label and plus icon */}
          <div className="relative flex items-center justify-center py-2">
            <div className="relative flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
                <div className="text-2xl font-bold text-white leading-none">+</div>
              </div>
              <span className="text-base font-bold text-foreground">전문가 지원</span>
            </div>
          </div>

          <div className="flex-[1] p-6 rounded-2xl bg-white border-2 border-muted/30 shadow-lg">
            <div className="h-full grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-blue-100 border border-blue-200 shadow-sm flex items-center justify-center">
                <p className="text-lg font-bold text-blue-900 text-center">IP 컨설팅</p>
              </div>
              <div className="p-5 rounded-xl bg-blue-100 border border-blue-200 shadow-sm flex items-center justify-center">
                <p className="text-lg font-bold text-blue-900 text-center">
                  IP수익화
                  <br />
                  지원
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
