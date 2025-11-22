import { Calendar, Brain, Search } from "lucide-react"

export function CustomerRealitySlide() {
  const pains = [
    {
      icon: Calendar,
      number: "①",
      title: "계속 챙겨야 하는 일정과 마감",
      reality: "각 사무소·기관 메일, 엑셀, 캘린더를 오가며 TO DO를 직접 정리",
      quote: '"어제도, 오늘도, 내일도 마감일을 직접 챙겨야 함"',
      color: "blue",
    },
    {
      icon: Brain,
      number: "②",
      title: "매번 다시 하는 유지/포기·예산 고민",
      reality: '"어떤 특허를 유지해야 할지, 어디서 비용을 줄일지"',
      quote: "연차·관납료·감면 여부·실시 여부를 머릿속에서 조합함",
      color: "purple",
    },
    {
      icon: Search,
      number: "③",
      title: "찾고 정리하는 데 쓰는 시간",
      reality: '분기마다 반복되는 질문: "이번 분기 얼마 내야 돼?" "포기 후보는 뭐야?"',
      quote: "엑셀 필터·피벗·복붙으로 보고서 만드는 데 시간이 대부분 소요",
      color: "indigo",
    },
  ]

  return (
    <div className="h-full flex flex-col px-16 pb-8 pt-8 bg-background">
      <div className="mb-8">
        <div className="inline-block px-4 py-2 bg-blue-100 rounded-lg mb-4">
          <span className="text-lg font-semibold text-blue-600">Chapter 04 Paytent AI</span>
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-4">IP 관리 담당자의 현실</h2>
        <p className="text-2xl text-muted-foreground">IP 담당자의 3대 어려움, 그리고 AI가 필요한 결정적 이유</p>
      </div>

      <div className="flex-1 space-y-3">
        {pains.map((pain, index) => (
          <div
            key={index}
            className={`flex items-start gap-6 p-6 rounded-xl bg-card border-2 border-${pain.color}-200 hover:shadow-xl transition-all`}
          >
            <div className={`w-16 h-16 rounded-xl bg-${pain.color}-100 flex items-center justify-center flex-shrink-0`}>
              <pain.icon className={`w-8 h-8 text-${pain.color}-600`} />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-3">
                <span className={`text-xl font-bold text-${pain.color}-600`}>{pain.number}</span>
                <h3 className="text-2xl font-bold text-foreground">{pain.title}</h3>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{pain.reality}</p>
              <div className={`p-3 rounded-lg bg-${pain.color}-50 border-l-4 border-${pain.color}-500`}>
                <p className="text-xs text-muted-foreground italic">{pain.quote}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Summary */}
        <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border-2 border-blue-200">
          <p className="text-base text-center text-foreground leading-relaxed">
            "기술적인 계산은 시스템이 해도, 실제{" "}
            <span className="font-bold text-blue-600">'판단하고 정리하는 고생'</span>은 여전히{" "}
            <span className="font-bold text-blue-600">담당자의 몫</span>입니다."
          </p>
        </div>
      </div>
    </div>
  )
}
