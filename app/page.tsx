"use client"

import React, { useState, useEffect, useCallback } from "react"
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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, slides.length - 1)))
  }, [])

  const goToFirstSlide = useCallback(() => {
    setCurrentSlide(0)
  }, [])

  const goToLastSlide = useCallback(() => {
    setCurrentSlide(slides.length - 1)
  }, [])

  // 프레젠테이션 포인터 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 다음 슬라이드: ArrowRight, Space, PageDown, Enter, N
      if (
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "PageDown" ||
        e.key === "Enter" ||
        e.key === "n" ||
        e.key === "N"
      ) {
        e.preventDefault()
        nextSlide()
      }
      // 이전 슬라이드: ArrowLeft, PageUp, Backspace, P
      else if (
        e.key === "ArrowLeft" ||
        e.key === "PageUp" ||
        e.key === "Backspace" ||
        e.key === "p" ||
        e.key === "P"
      ) {
        e.preventDefault()
        prevSlide()
      }
      // 첫 슬라이드: Home
      else if (e.key === "Home") {
        e.preventDefault()
        goToFirstSlide()
      }
      // 마지막 슬라이드: End
      else if (e.key === "End") {
        e.preventDefault()
        goToLastSlide()
      }
      // 숫자 키로 특정 슬라이드로 이동 (1-9)
      else if (e.key >= "1" && e.key <= "9") {
        e.preventDefault()
        const slideIndex = parseInt(e.key) - 1
        if (slideIndex < slides.length) {
          goToSlide(slideIndex)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide, goToFirstSlide, goToLastSlide])

  // 슬라이드 영역 클릭으로 다음 슬라이드 이동
  const handleSlideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // 네비게이션 컨트롤 영역이 아닌 경우에만 처리
      const target = e.target as HTMLElement
      if (
        !target.closest("button") &&
        !target.closest("[role='button']") &&
        !target.closest(".navigation-controls")
      ) {
        // 왼쪽 클릭: 다음 슬라이드, 오른쪽 클릭: 이전 슬라이드
        if (e.button === 0) {
          // 왼쪽 클릭
          const rect = e.currentTarget.getBoundingClientRect()
          const clickX = e.clientX - rect.left
          const middleX = rect.width / 2

          if (clickX > middleX) {
            nextSlide()
          } else {
            prevSlide()
          }
        }
      }
    },
    [nextSlide, prevSlide]
  )

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Slide Container - 16:9 aspect ratio */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div
          className="w-full max-w-[1920px] aspect-video bg-card rounded-lg shadow-2xl overflow-hidden relative cursor-pointer"
          onClick={handleSlideClick}
          onContextMenu={(e) => {
            e.preventDefault()
            prevSlide()
          }}
        >
          <CurrentSlideComponent />

          {/* Slide Counter */}
          <div className="absolute bottom-6 right-8 text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="navigation-controls p-4 flex items-center justify-center gap-4">
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
