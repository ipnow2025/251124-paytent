import { ArrowRight, Calendar } from "lucide-react"

export function PaytentAiAdoptionSlide() {
  const beforeAfter = [
    {
      before: "메일·엑셀·캘린더를 오가며 마감일·TO DO 직접 정리",
      after: "아침에 Paytent AI 캘린더/알림으로 이번 주 TO DO 확인",
    },
    {
      before: "유지/포기·예산안을 사람 머리로 시뮬레이션",
      after: "유지/포기·예산 시나리오는 AI 추천안을 검토·수정만",
    },
    {
      before: "경영진 질문이 나오면, 자료 찾고 요약하는 데 대부분의 시간 사용",
      after: "질문은 챗봇에 맡기고, 최종 의사결정과 설득에 집중",
    },
  ]

  return (
    <div className="h-full flex flex-col px-12 pb-16 pt-12 bg-background">
      <div className="mb-6">
        <div className="inline-block px-4 py-2 bg-accent/20 rounded-lg mb-3">
          <span className="text-lg font-semibold text-accent">Chapter 04 Paytent AI</span>
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-3">Paytent AI 도입 후 변화</h2>
        <p className="text-lg text-muted-foreground">그리고 앞으로의 여정</p>
      </div>

      <div className="flex-1 space-y-6">
        {/* Before vs After */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Before vs After</h3>
          <div className="space-y-2.5">
            {beforeAfter.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                <div className="flex-1 p-2.5 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground">{item.before}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="flex-1 p-2.5 rounded-lg bg-accent/10 border border-accent/30">
                  <p className="text-sm text-foreground font-semibold">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-7 h-7 text-primary" />
              <h3 className="text-lg font-bold text-foreground">도입 일정</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-semibold text-foreground">2026년 상반기</p>
                <p className="text-xs text-muted-foreground">파일럿 고객사 적용</p>
              </div>
              <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-semibold text-foreground">2026년 하반기</p>
                <p className="text-xs text-muted-foreground">정식 오픈 및 기능 확장</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-accent/30">
          <div className="space-y-2.5">
            <p className="text-lg font-bold text-foreground text-center leading-relaxed">
              "Paytent AI는 저희가 혼자 완성하는 제품이 아니라, 고객사와 함께 만들어 가는 IP 판단 도우미입니다."
            </p>
            <p className="text-base text-muted-foreground text-center">
              "여러분의 실제 고민과 데이터를 기반으로, '정말 쓰는 AI'를 만드는 게 저희의 목표입니다."
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="p-5 rounded-xl bg-card border-2 border-accent/40 text-center">
          <p className="text-base text-foreground leading-relaxed">
            <span className="font-bold text-accent">Paytent AI</span>는 연차료를 <br />
            '얼마 내야 하는 비용'이 아니라, '<span className="font-bold text-accent">어디에 투자할 IP 자산인지</span>'
            보여주는 플랫폼입니다
          </p>
        </div>
      </div>
    </div>
  )
}
