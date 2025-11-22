import { Sparkles, TrendingUp, Brain, Zap, Target } from "lucide-react"

export function WhyPaytentAiSlide() {
  return (
    <div className="h-full flex flex-col px-16 pb-16 pt-12 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-blue-100 rounded-lg mb-4">
          <span className="text-lg font-semibold text-blue-600">Chapter 04 Paytent AI</span>
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-4">왜 Paytent AI인가?</h2>
        <p className="text-2xl text-muted-foreground">연차료 관리에서 'AI 판단 도우미'로</p>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-4">
        {/* Current Status */}
        <div className="p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-4 mb-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-bold text-foreground">현재 위치</h3>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-foreground leading-relaxed">
              {'Paytent는 지금도 국내·해외 연차료를 통합 관리하는 "연차료 관리 전문 플랫폼"입니다.'}
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {"이미 많은 고객사들이 IPNOW의 우수성을 높이 평가하며, 연차료 업무에 적극 활용하고 있습니다."}
            </p>
          </div>
        </div>

        {/* Changing Environment */}
        <div className="p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-4 mb-2">
            <TrendingUp className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-bold text-foreground">환경이 바뀌고 있습니다</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
              <p className="text-base font-semibold text-foreground mb-1">특허 포트폴리오 증가</p>
              <p className="text-sm text-muted-foreground">관리 대상이 늘어남</p>
            </div>
            <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
              <p className="text-base font-semibold text-foreground mb-1">예산 압박 증가</p>
              <p className="text-sm text-muted-foreground">비용 효율화 요구</p>
            </div>
            <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
              <p className="text-base font-semibold text-foreground mb-1">담당 인원 부족</p>
              <p className="text-sm text-muted-foreground">업무 부담 가중</p>
            </div>
          </div>
          <div className="mt-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
            <p className="text-base text-foreground">
              <span className="font-semibold text-accent">경영진의 질문:</span>{" "}
              {'"어디에 더 투자해야 하냐?", "어디는 줄여도 되냐?"'}
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-accent/30">
          <div className="flex items-center gap-4 mb-2">
            <Brain className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-bold text-foreground">우리가 내린 결론</h3>
          </div>

          <p className="text-base text-foreground leading-relaxed mb-3">
            {
              "Paytent에 AI 기술을 결합하여 고객사의 연차료 업무 전반을 자동화·지능화한 Paytent AI로 고도화함으로써, 연차료 업무에서 생각과 판단까지 도와주는 IP 판단 도우미로 진화하고자 합니다."
            }
          </p>

          <div className="space-y-2">
            {/* Three Pillars */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-card border border-primary/30">
                <Target className="w-5 h-5 text-primary mb-1" />
                <p className="text-sm font-semibold text-foreground mb-1">자동화</p>
                <p className="text-xs text-muted-foreground">반복 업무 자동 처리</p>
              </div>
              <div className="p-3 rounded-lg bg-card border border-accent/30">
                <Brain className="w-5 h-5 text-accent mb-1" />
                <p className="text-sm font-semibold text-foreground mb-1">지능화</p>
                <p className="text-xs text-muted-foreground">AI 기반 의사결정 지원</p>
              </div>
              <div className="p-3 rounded-lg bg-card border border-secondary/30">
                <Zap className="w-5 h-5 text-secondary mb-1" />
                <p className="text-sm font-semibold text-foreground mb-1">편리함</p>
                <p className="text-xs text-muted-foreground">사용자 경험 혁신</p>
              </div>
            </div>

            {/* Definition */}
            <div className="p-3 rounded-xl bg-card border-2 border-accent/40 text-center">
              <p className="text-lg text-foreground">
                <span className="font-bold text-accent">Paytent AI</span>
                {"는 연차료 데이터를 기반으로, 일정·의사결정·보고까지 도와주는 "}
                <span className="font-bold text-accent">AI 판단 도우미</span>
                {"입니다."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
