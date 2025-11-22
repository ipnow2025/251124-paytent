import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"

export function PaytentVsAiSlide() {
  const paytentFeatures = [
    "연도별·월별 연차료 예산 관리",
    "연차료 납부 기한 관리 및 실시간 모니터링",
    "납부 판단을 위한 특허활용보고서",
    "발명자/공동권리자 실시간 납부의견 확인",
  ]

  const remainingChallenges = [
    "무엇을 먼저 챙길지 TO DO를 스스로 만들어야 함",
    "유지/포기·예산을 매번 사람 머리로 조합하며 결정",
    "경영진 질문이 나오면 자료 찾고, 모으고, 요약하는 일을 반복",
  ]

  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 04 Paytent AI</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">
          Paytent로 채운 것, 그리고 Paytent AI가 채울 것
        </h2>
        <div className="space-y-2">
          <p className="text-xl text-muted-foreground">
            IP 출원은 '수익화'를 위한 시작이지만, 등록 후 부실한 관리로 IP 수익화 기회를 놓치고 있습니다.
          </p>
          <p className="text-xl text-muted-foreground">
            {"Paytent가 연차료 "}
            <span className="font-bold text-accent">{"'납부 판단·공동특허관리·납부' 등의 문제를 해결"}</span>
            {"했다면, Paytent AI는 "}
            <span className="font-bold text-accent">{"'IP와 관련된 생각·판단' 문제를 해결"}</span>
            {"합니다"}
          </p>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Left: What Paytent Solved */}
        <div className="flex flex-col">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="w-7 h-7 text-primary" />
              <h3 className="text-[1.375rem] font-bold text-foreground">기존 Paytent가 잘하는 것</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              빈틈없는 프로세스로 리스크는 최소, IP 수익화와 연차료 판단 가치는 최대로
            </p>
          </div>

          <div className="flex-1 space-y-3">
            {paytentFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Remaining Challenges */}
        <div className="flex flex-col">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-7 h-7 text-accent" />
              <h3 className="text-[1.375rem] font-bold text-foreground">여전히 남아 있던 과제</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              사람이 직접 생각하고 판단해야 하는 영역, 업무 부담은 최대, 의사결정 효율은 최소
            </p>
          </div>

          <div className="flex-1 space-y-3">
            {remainingChallenges.map((challenge, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent/40 transition-all"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: AI Solution */}
      <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-accent/30">
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-2">기존 Paytent 위에</p>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-bold text-lg">덜 챙기기</span>
              <span className="text-lg text-muted-foreground">+</span>
              <span className="px-4 py-2 rounded-lg bg-accent/20 text-accent font-bold text-lg">덜 고민하기</span>
              <span className="text-lg text-muted-foreground">+</span>
              <span className="px-4 py-2 rounded-lg bg-secondary/20 text-secondary font-bold text-lg">덜 찾기</span>
            </div>
          </div>
          <ArrowRight className="w-7 h-7 text-accent" />
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-2">세 가지 AI 레이어</p>
            <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg">
              Paytent AI
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
