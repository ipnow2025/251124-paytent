export function PatentValueInfoSlide() {
  return (
    <div className="h-full flex flex-col p-8 bg-background">
      {/* Header */}
      <div className="mb-4">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-3">
          <span className="text-lg font-semibold text-primary">Chapter 03 똑똑한 연차료 관리 방법</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-3">
          특허연차료 전략적 납부판단 및 특허 Value Up을 위한 활용 정보
        </h2>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
          서지정보
        </button>
        <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
          Family
        </button>
        <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
          개별특허등급
        </button>
        <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
          Keyword
        </button>
        <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
          국내외 연관기업
        </button>
        <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
          시장/제품정보
        </button>
        <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
          기술성숙도
        </button>
        <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
          기술동향
        </button>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-4 overflow-hidden">
        <div className="rounded-xl border-2 border-border bg-card p-3 overflow-hidden flex items-center justify-center">
          <img src="/images/patent-info-1.png" alt="특허 검토 보고서" className="w-full h-full object-contain" />
        </div>

        <div className="rounded-xl border-2 border-border bg-card p-3 overflow-hidden flex items-center justify-center">
          <img
            src="/images/patent-info-2.png"
            alt="특허 등급 및 Family 정보"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="rounded-xl border-2 border-border bg-card p-3 overflow-hidden flex items-center justify-center">
          <img src="/images/patent-info-3.png" alt="연관 특허 분석 정보" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  )
}
