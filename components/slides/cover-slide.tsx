export function CoverSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground p-16">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-balance">
            IP 수익화를 위한
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-balance">
            똑똑한 연차료 관리방법
          </h1>
        </div>
        
        <div className="h-px w-64 mx-auto bg-primary-foreground/30" />
        
        <p className="text-2xl font-light tracking-wide">
          IP를 가장 잘 아는 기업이 제공하는 연차료 관리방법
        </p>
        
        <div className="pt-8">
          <div className="inline-block px-8 py-4 bg-primary-foreground/10 backdrop-blur rounded-lg">
            <p className="text-3xl font-bold tracking-wider">IPNOW</p>
          </div>
        </div>
      </div>
    </div>
  )
}
