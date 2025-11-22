export function ContentsSlide() {
  const chapters = [
    {
      number: "01",
      title: "프롤로그",
      subtitle: "IP 관리 현황 및 문제점",
    },
    {
      number: "02",
      title: "IP 관리",
      subtitle: "문제 해결 방안",
    },
    {
      number: "03",
      title: "똑똑한 연차료 관리 방법",
      subtitle: "Paytent",
    },
    {
      number: "04",
      title: "Paytent AI",
      subtitle: "AI 기반 차세대 연차료 관리 솔루션",
    },
  ]

  return (
    <div className="h-full flex flex-col p-16 bg-background">
      <div className="mb-12">
        <h2 className="text-[2.75rem] font-bold text-foreground">CONTENTS</h2>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-8">
        {chapters.map((chapter) => (
          <div
            key={chapter.number}
            className="flex items-center gap-8 p-8 rounded-xl bg-card border-2 border-border hover:border-primary/50 transition-all"
          >
            <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-primary text-primary-foreground">
              <span className="text-3xl font-bold">{chapter.number}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-foreground mb-2">{chapter.title}</h3>
              <p className="text-xl text-muted-foreground">{chapter.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
