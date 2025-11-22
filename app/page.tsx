"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CoverSlide } from "@/components/slides/cover-slide"
import { Chapter01Slide } from "@/components/slides/chapter-01-slide"
import { IpRealitySlide } from "@/components/slides/ip-reality-slide"
import { WhyNotManagedSlide } from "@/components/slides/why-not-managed-slide"
import { IpJudgmentCoreSlide } from "@/components/slides/ip-judgment-core-slide"
import { CurrentIssuesSlide } from "@/components/slides/current-issues-slide"
import { Chapter02Slide } from "@/components/slides/chapter-02-slide"
import { AnnuityManagementSlide } from "@/components/slides/annuity-management-slide"
import { CompetitiveAdvantageSlide } from "@/components/slides/competitive-advantage-slide"
import { Chapter03Slide } from "@/components/slides/chapter-03-slide"
import { ServiceAdvantagesSlide } from "@/components/slides/service-advantages-slide"
import { ServicesSlide } from "@/components/slides/services-slide"
import { CrossCheckSlide } from "@/components/slides/cross-check-slide"
import { DataServicesSlide } from "@/components/slides/data-services-slide"
import { TechValuationSlide } from "@/components/slides/tech-valuation-slide"
import { PatentValueInfoSlide } from "@/components/slides/patent-value-info-slide"
import { Chapter04Slide } from "@/components/slides/chapter-04-slide"
import { WhyPaytentAiSlide } from "@/components/slides/why-paytent-ai-slide"
import { PaytentAiFeaturesSlide } from "@/components/slides/paytent-ai-features-slide"
import { PaytentVsAiSlide } from "@/components/slides/paytent-vs-ai-slide"
import { AiCalendarSlide } from "@/components/slides/ai-calendar-slide"
import { PaytentAiAdoptionSlide } from "@/components/slides/paytent-ai-adoption-slide"
import { ThankYouSlide } from "@/components/slides/thank-you-slide"

// Slide Factory: 컴포넌트를 렌더링 함수로 변환
const createSlide = (Component: React.ComponentType<any>) => {
  return () => <Component />
}

// Slide Factory with Props: props가 필요한 컴포넌트를 위한 팩토리
const createSlideWithProps = <T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  props: T
) => {
  return () => <Component {...props} />
}

// Slides 배열 정의
const slides = [
  createSlide(CoverSlide),
  createSlide(Chapter01Slide),
  createSlide(IpRealitySlide),
  createSlide(WhyNotManagedSlide),
  createSlide(IpJudgmentCoreSlide),
  createSlide(CurrentIssuesSlide),
  createSlide(Chapter02Slide),
  createSlide(AnnuityManagementSlide),
  createSlide(CompetitiveAdvantageSlide),
  createSlide(Chapter03Slide),
  createSlide(ServiceAdvantagesSlide),
  createSlide(ServicesSlide),
  createSlide(CrossCheckSlide),
  createSlide(DataServicesSlide),
  createSlide(PatentValueInfoSlide),
  createSlide(TechValuationSlide),
  createSlide(Chapter04Slide),
  createSlide(WhyPaytentAiSlide),
  createSlide(PaytentAiFeaturesSlide),
  createSlide(PaytentVsAiSlide),
  createSlide(AiCalendarSlide),
  createSlideWithProps(AiCalendarSlide, { isPage22: true }),
  createSlideWithProps(AiCalendarSlide, { isPage23: true }),
  createSlide(PaytentAiAdoptionSlide),
  createSlide(ThankYouSlide),
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Slide Container - 16:9 aspect ratio */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[1920px] aspect-video bg-card rounded-lg shadow-2xl overflow-hidden relative">
          <CurrentSlideComponent />

          {/* Slide Counter */}
          <div className="absolute bottom-6 right-8 text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="p-4 flex items-center justify-center gap-4">
        <Button onClick={prevSlide} disabled={currentSlide === 0} variant="outline" size="icon">
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <Button onClick={nextSlide} disabled={currentSlide === slides.length - 1} variant="outline" size="icon">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
