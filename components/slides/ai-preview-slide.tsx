import IPManagerAIPreview from "@/components/ipmanager-aipreview"

export function AiPreviewSlide() {
  return (
    <div className="h-full flex flex-col p-16 bg-background">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
          <span className="text-lg font-semibold text-primary">Chapter 04 Paytent AI</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-4">AI 기반 연차료 관리시스템</h2>
        <p className="text-xl text-muted-foreground">
          자연어 질문만으로 필요한 정보 조회, 통계분석, 보고서 생성까지 제공
        </p>
      </div>

      {/* AI Preview Component */}
      <div className="flex-1 rounded-xl overflow-hidden shadow-2xl border border-border">
        <IPManagerAIPreview isActive={true} />
      </div>
    </div>
  )
}
