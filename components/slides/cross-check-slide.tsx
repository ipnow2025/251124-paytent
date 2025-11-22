import { CheckCircle2, Shield, RefreshCcw } from "lucide-react"

export function CrossCheckSlide() {
  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 03 똑똑한 연차료 관리 방법</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">핵심 기능 1. Cross Check 시스템</h2>
        <p className="text-xl text-muted-foreground">연차료 누락 RISK 0% - 3단계 다중 구조 검증 통한 연차료 누락 위험을 최소화</p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8 w-full">
          <div className="flex flex-col items-center text-center space-y-6 p-8 rounded-xl bg-card border-2 border-primary/30">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-[1.375rem] font-bold text-foreground mb-3">1차 Risk 감소</h3>
              <p className="text-xl text-muted-foreground mb-4">시스템 크로스체크</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                독자적인 DB와 고객 IP List를 시스템으로 비교 분석하여 누락 방지
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-6 p-8 rounded-xl bg-card border-2 border-primary/30">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
              <Shield className="w-10 h-10 text-secondary" />
            </div>
            <div>
              <h3 className="text-[1.375rem] font-bold text-foreground mb-3">2차 Risk 감소</h3>
              <p className="text-xl text-muted-foreground mb-4">멀티 크로스체크</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                다중 검증 프로세스로 시스템 오류까지 방어하는 이중 안전망
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-6 p-8 rounded-xl bg-card border-2 border-primary/30">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
              <RefreshCcw className="w-10 h-10 text-accent" />
            </div>
            <div>
              <h3 className="text-[1.375rem] font-bold text-foreground mb-3">3차 Risk 감소</h3>
              <p className="text-xl text-muted-foreground mb-4">체크 주기 단축</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                실시간 모니터링으로 마감 직전까지 완벽하게 관리
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-center text-[1.375rem] text-foreground">
          <span className="font-bold text-primary">IPNOW만의 독자적인 멀티 크로스체킹 시스템</span>으로 연차료 누락으로
          인한 특허권 상실을 <span className="font-bold">구조적으로 방지</span>합니다
        </p>
      </div>
    </div>
  )
}
