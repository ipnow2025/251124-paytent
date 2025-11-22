export function ThankYouSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground p-16">
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-7xl font-bold tracking-tight">
            감사합니다
          </h1>
          <div className="h-px w-96 mx-auto bg-primary-foreground/30" />
        </div>
        
        <div className="space-y-4">
          <div className="inline-block px-10 py-5 bg-primary-foreground/10 backdrop-blur rounded-xl">
            <p className="text-4xl font-bold tracking-wider">IPNOW</p>
          </div>
          <p className="text-xl font-light">
            IP를 가장 잘 아는 기업이 제공하는 연차료 관리방법
          </p>
        </div>

      </div>
    </div>
  )
}
