"use client"

import { useState, useEffect, useRef } from "react"
import { Brain, TrendingUp, MessageSquare, X, Search, FileText, Download, Settings, ChevronLeft, ChevronRight, Circle, Calculator } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Sparkles, AlertTriangle, Calendar, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ChatMessage {
  type: "user" | "ai"
  text: string
}

type PopupType = "decision" | "urgent" | "abandon" | "lossRisk" | null

interface PatentRow {
  country: string
  grade: string
  appNo: string
  year: string
  due: string
  fee: string
  evalDate: string
  score: number | null
  decision: string
  market: string
  gradeColor: string
}

interface AiCalendarSlideProps {
  isPage22?: boolean
  isPage23?: boolean
}

export function AiCalendarSlide({ isPage22 = false, isPage23 = false }: AiCalendarSlideProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [popupType, setPopupType] = useState<PopupType>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isUserTyping, setIsUserTyping] = useState(false)
  const [demoStarted, setDemoStarted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [patentRows, setPatentRows] = useState<PatentRow[]>([
    { country: "KR", grade: "BB", appNo: "10-2023-001234", year: "2", due: "2024-12-31", fee: "150,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-yellow-100 text-yellow-800" },
    { country: "US", grade: "CCC", appNo: "17/234,567", year: "3", due: "2025-01-15", fee: "1,200", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-green-100 text-green-800" },
    { country: "EP", grade: "BBB", appNo: "18817150.8", year: "4", due: "2025-02-20", fee: "1,500", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-blue-100 text-blue-800" },
    { country: "KR", grade: "B", appNo: "10-2023-005678", year: "1", due: "2024-11-30", fee: "120,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-green-100 text-green-800" },
    { country: "JP", grade: "BB", appNo: "2023-123456", year: "2", due: "2025-01-10", fee: "80,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-yellow-100 text-yellow-800" },
    { country: "KR", grade: "BBB", appNo: "10-2022-009876", year: "3", due: "2025-03-05", fee: "180,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-blue-100 text-blue-800" },
    { country: "US", grade: "B", appNo: "16/789,012", year: "5", due: "2025-04-12", fee: "2,100", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-green-100 text-green-800" },
    { country: "EP", grade: "BB", appNo: "20123456.7", year: "2", due: "2025-01-25", fee: "1,300", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-yellow-100 text-yellow-800" },
    { country: "KR", grade: "CCC", appNo: "10-2024-001111", year: "1", due: "2024-12-15", fee: "100,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-green-100 text-green-800" },
    { country: "US", grade: "BBB", appNo: "18/345,678", year: "4", due: "2025-02-28", fee: "1,800", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-blue-100 text-blue-800" },
  ])
  const [currentEvalDate, setCurrentEvalDate] = useState<string>("")

  // 통계 계산
  const totalCount = patentRows.filter(row => row.evalDate).length
  const maintainCount = patentRows.filter(row => row.decision === "유지").length
  const abandonCount = patentRows.filter(row => row.decision === "포기").length
  
  // 예상 절감액 계산 (포기 추천된 건들의 연차료 합계, 통화별 환산)
  const totalSavings = patentRows
    .filter(row => row.decision === "포기")
    .reduce((sum, row) => {
      const feeStr = row.fee.replace(/,/g, "")
      const feeNum = parseFloat(feeStr) || 0
      
      // 통화별 원화 환산 (외국환 원화 환산 기준)
      let feeInKRW = 0
      if (row.country === "KR") {
        feeInKRW = feeNum // 원화는 그대로
      } else if (row.country === "US") {
        feeInKRW = feeNum * 1300 // $1 = 1,300원
      } else if (row.country === "EP") {
        feeInKRW = feeNum * 1400 // €1 = 1,400원
      } else if (row.country === "JP") {
        feeInKRW = feeNum * 10 // ¥1 = 10원
      } else {
        feeInKRW = feeNum // 기타 통화는 그대로
      }
      
      return sum + feeInKRW
    }, 0)
  
  const savingsText = totalSavings >= 10000 
    ? `${(totalSavings / 10000).toFixed(0)}만원 (추정)`
    : `${totalSavings.toLocaleString()}원 (추정)`

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  // 테이블 업데이트 함수 (외부에서 호출 가능하도록)
  const updateTableDemo = async () => {
    const scores = [85, 72, 91, 68, 79, 88, 65, 76, 82, 94]
    // AI 점수에 따라 의사결정 자동 결정: 70점 미만은 포기, 70점 이상은 유지
    const decisions = scores.map(score => score >= 70 ? "유지" : "포기")
    const markets = ["1,200만원", "500만원", "2,500만원", "800만원", "1,500만원", "3,000만원", "600만원", "1,800만원", "1,000만원", "4,000만원"]

    // 초기화: 모든 데이터를 빈 값으로
    setPatentRows([
      { country: "KR", grade: "BB", appNo: "10-2023-001234", year: "2", due: "2024-12-31", fee: "150,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-yellow-100 text-yellow-800" },
      { country: "US", grade: "CCC", appNo: "17/234,567", year: "3", due: "2025-01-15", fee: "1,200", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-green-100 text-green-800" },
      { country: "EP", grade: "BBB", appNo: "18817150.8", year: "4", due: "2025-02-20", fee: "1,500", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-blue-100 text-blue-800" },
      { country: "KR", grade: "B", appNo: "10-2023-005678", year: "1", due: "2024-11-30", fee: "120,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-green-100 text-green-800" },
      { country: "JP", grade: "BB", appNo: "2023-123456", year: "2", due: "2025-01-10", fee: "80,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-yellow-100 text-yellow-800" },
      { country: "KR", grade: "BBB", appNo: "10-2022-009876", year: "3", due: "2025-03-05", fee: "180,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-blue-100 text-blue-800" },
      { country: "US", grade: "B", appNo: "16/789,012", year: "5", due: "2025-04-12", fee: "2,100", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-green-100 text-green-800" },
      { country: "EP", grade: "BB", appNo: "20123456.7", year: "2", due: "2025-01-25", fee: "1,300", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-yellow-100 text-yellow-800" },
      { country: "KR", grade: "CCC", appNo: "10-2024-001111", year: "1", due: "2024-12-15", fee: "100,000", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-green-100 text-green-800" },
      { country: "US", grade: "BBB", appNo: "18/345,678", year: "4", due: "2025-02-28", fee: "1,800", evalDate: "", score: null, decision: "", market: "", gradeColor: "bg-blue-100 text-blue-800" },
    ])
    setCurrentEvalDate("")

    // 잠시 대기
    await new Promise((resolve) => setTimeout(resolve, 500))

    // 각 행을 순차적으로 업데이트
    for (let i = 0; i < 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      
      setPatentRows((prev) => {
        const updated = [...prev]
        // 평가일자 업데이트
        updated[i] = { ...updated[i], evalDate: "2025-11-14" }
        setCurrentEvalDate("2025-11-14")
        return updated
      })

      // AI 점수 업데이트
      await new Promise((resolve) => setTimeout(resolve, 400))
      setPatentRows((prev) => {
        const updated = [...prev]
        updated[i] = { ...updated[i], score: scores[i] }
        return updated
      })

      // 의사결정 업데이트
      await new Promise((resolve) => setTimeout(resolve, 400))
      setPatentRows((prev) => {
        const updated = [...prev]
        updated[i] = { ...updated[i], decision: decisions[i] }
        return updated
      })

      // 시장가치 업데이트
      await new Promise((resolve) => setTimeout(resolve, 400))
      setPatentRows((prev) => {
        const updated = [...prev]
        updated[i] = { ...updated[i], market: markets[i] }
        return updated
      })
    }
  }

  // 데모 자동 실행 및 반복
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const runQuestionAnswer = async (question: string) => {
      // 사용자 타이핑 시작
      setIsUserTyping(true)
      
      // 타이핑 애니메이션
      for (let i = 0; i <= question.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        setInputValue(question.slice(0, i))
      }
      
      setIsUserTyping(false)
      
      // 잠시 대기
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      // 사용자 메시지 추가 (누적)
      setMessages((prev) => [...prev, { type: "user", text: question }])
      setInputValue("")
      
      // AI 타이핑 시작
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsTyping(true)
      
      // AI 응답 대기
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setIsTyping(false)
      
      // 질문에 따라 다른 응답과 팝업 표시
      if (isPage23) {
        // 23p: 새로운 질문과 답변
        if (question === "연간 증가하는 연차료 금액이 너무 부담스러워.") {
          setMessages((prev) => [
            ...prev,
            {
              type: "ai",
              text: "연차료는 등록 연차가 올라갈수록 단계적으로 증가하는 구조로, 일정 구간부터 비용이 확 뛰는게 자연스러운 현상입니다.\n\nPaytent AI가 현재 포트폴리오 기준으로 향후 1~3년 연차료를 약 20% 줄이는 절감 시나리오를 바로 시뮬레이션해드릴까요?\n\n그리고 포기 없이 핵심 특허는 유지하고 싶으신 경우, 청구항 수 때문에 커지는 연차료를 줄이는 '청구항 다이어트' 후보와 예상 절감율도 함께 제안해드릴 수 있어요.",
            },
          ])
        } else if (question === "2026년 기준 청구항 다이어트 후보 건수와 예상 절감율 알려줘") {
          setMessages((prev) => [
            ...prev,
            {
              type: "ai",
              text: "2026년 기준으로 분석해드릴게요.\n\n연차료 납부 대상은 1,609건, 평균 연차는 11년차입니다. 이중 청구항 다이어트를 적용해 청구항을 3개만 유지하는 시나리오로 계산하면, 예산 연차료 비용을 약 4.3% 절감할 수 있습니다.\n\n더 정확한 절감률이 필요하면, 적용 연차와 대상 국가를 알려주시면 정밀 시뮬레이션해드릴게요.",
            },
          ])
        } else if (question === "해외 특허 비용이 부담스러워. 어느 국가를 유지하는게 좋을까?") {
          setMessages((prev) => [
            ...prev,
            {
              type: "ai",
              text: "현재 해외 특허 보유 비율을 살펴보면 미국 > 중국 > 유럽 > 일본 순으로 비중이 높은 편입니다.\n\n주요 기술 분야 구성을 기준으로 볼 때, 수익화 가능성과 협상 파트너 풀이 큰 US(미국)·EP(유럽)을 기본 축으로 우선 유지하시는 것이 가장 효율적일 것으로 판단됩니다.\n\n반면 CN(중국)은 전 분야를 일괄적으로 유지하기보다는, 제조·소재 분야 중 중국 내 생산·시장·파트너와 직접적으로 연계된 패밀리를 중심으로 선별 유지하시는 전략이 비용 대비 효과 측면에서 유리합니다.\n\n분석이 필요한 특허를 특정해주시면, 해당 패밀리를 기준으로 국가별 유지/포기 여부를 점검해 드릴 수 있습니다.",
            },
          ])
        }
      } else if (question === "납부현황을 알려줘") {
        // 21p: 납부현황 응답
        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            text: "납부현황을 알려드립니다. 우선 처리가 필요한 건들을 확인하세요.",
          },
        ])
        
        // 팝업 표시
        await new Promise((resolve) => setTimeout(resolve, 300))
        setPopupType("decision")
        setShowPopup(true)
        
        // 팝업을 6초간 표시
        await new Promise((resolve) => setTimeout(resolve, 6000))
        
        // 팝업 닫기
        setShowPopup(false)
        setPopupType(null)
      } else if (question === "의사결정 시뮬레이션") {
        // 22p: 의사결정 시뮬레이션
        // AI 응답 추가
        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            text: "AI 의사결정 시뮬레이션을 진행합니다.",
          },
        ])

        // 테이블 업데이트 시작 전 대기 애니메이션 표시
        await new Promise((resolve) => setTimeout(resolve, 500))
        setIsTyping(true)
        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            text: "의사결정 보드를 업데이트하고 있습니다...",
          },
        ])

        // 테이블 업데이트 실행
        await updateTableDemo()

        // 테이블 업데이트 완료 후 타이핑 애니메이션 종료
        setIsTyping(false)
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } else {
        // 22p인 경우: 포기추천 특허 응답
        if (isPage22) {
          const abandonPatents = [
            "• US 17/234,567 - 포기 추천 (AI 점수: 72)",
            "• US 16/789,012 - 포기 추천 (AI 점수: 65)",
          ]
          setMessages((prev) => [
            ...prev,
            {
              type: "ai",
              text: `포기 추천 특허를 확인했습니다:\n\n${abandonPatents.join("\n")}\n\n자세한 정보는 팝업에서 확인하실 수 있습니다.`,
            },
          ])
          
          // 팝업 표시
          await new Promise((resolve) => setTimeout(resolve, 300))
          setPopupType("abandon")
          setShowPopup(true)
          
          // 팝업을 6초간 표시
          await new Promise((resolve) => setTimeout(resolve, 6000))
          
          // 팝업 닫기
          setShowPopup(false)
          setPopupType(null)
        } else if (question === "손실위험이 있는 특허리스트") {
          // 21p: 손실위험이 있는 특허리스트 응답
          const lossRiskPatents = [
            "[특허A] 마감 14일 남음 / 가치등급 A / 공동권리자 미회신",
            "[특허B] 마감 10일 남음 / 해외 US 유지 필요 / 협상 중",
          ]
          setMessages((prev) => [
            ...prev,
            {
              type: "ai",
              text: `손실위험이 있는 특허를 확인했습니다:\n\n${lossRiskPatents.join("\n")}\n\n자세한 정보는 팝업에서 확인하실 수 있습니다.`,
            },
          ])
          
          // 팝업 표시
          await new Promise((resolve) => setTimeout(resolve, 300))
          setPopupType("lossRisk")
          setShowPopup(true)
          
          // 팝업을 6초간 표시
          await new Promise((resolve) => setTimeout(resolve, 6000))
          
          // 팝업 닫기
          setShowPopup(false)
          setPopupType(null)
        } else {
          // 21p인 경우: 긴급한 특허 응답 (기존)
          const urgentPatents = [
            "• KR10-2345678 - 연차료 납부 (마감일: 2026-12-31)",
            "• KR10-1234567 - 권리 포기 결정 필요",
            "• EP18817150.8 - 연차료 납부 (마감일: 2027-01-13)",
          ]
          setMessages((prev) => [
            ...prev,
            {
              type: "ai",
              text: `긴급한 특허를 확인했습니다:\n\n${urgentPatents.join("\n")}\n\n자세한 정보는 팝업에서 확인하실 수 있습니다.`,
            },
          ])
          
          // 팝업 표시
          await new Promise((resolve) => setTimeout(resolve, 300))
          setPopupType("urgent")
          setShowPopup(true)
          
          // 팝업을 6초간 표시
          await new Promise((resolve) => setTimeout(resolve, 6000))
          
          // 팝업 닫기
          setShowPopup(false)
          setPopupType(null)
        }
      }
      
      // 질문-대답 사이 1초 대기
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    const startDemo = async () => {
      if (isPage23) {
        // 23p: 새로운 질문과 답변
        // 첫 번째 질문
        await runQuestionAnswer("연간 증가하는 연차료 금액이 너무 부담스러워.")
        // 두 번째 질문
        await runQuestionAnswer("2026년 기준 청구항 다이어트 후보 건수와 예상 절감율 알려줘")
        
        // 5초 후 리셋
        await new Promise((resolve) => setTimeout(resolve, 5000))
        setMessages([])
        setInputValue("")
        setIsTyping(false)
        setIsUserTyping(false)
        
        // 세 번째 질문
        await runQuestionAnswer("해외 특허 비용이 부담스러워. 어느 국가를 유지하는게 좋을까?")
        
        // 5초 후 리셋
        await new Promise((resolve) => setTimeout(resolve, 5000))
        setMessages([])
        setInputValue("")
        setIsTyping(false)
        setIsUserTyping(false)
      } else {
        // 첫 번째 질문: 22p는 "의사결정 시뮬레이션", 21p는 "납부현황을 알려줘"
        await runQuestionAnswer(isPage22 ? "의사결정 시뮬레이션" : "납부현황을 알려줘")
        
        // 두 번째 질문: 22p는 "포기추천 특허를 알려줘", 21p는 "긴급한 특허를 알려줘"
        await runQuestionAnswer(isPage22 ? "포기추천 특허를 알려줘" : "긴급한 특허를 알려줘")
        
        // 세 번째 질문: 21p만 "손실위험이 있는 특허리스트"
        if (!isPage22) {
          await runQuestionAnswer("손실위험이 있는 특허리스트")
        }
      }
      
      // 전체 사이클 완료 후 다음 사이클 시작 (23p는 이미 리셋됨)
      if (!isPage23) {
        // 전체 사이클 완료 후 초기화
        await new Promise((resolve) => setTimeout(resolve, 2000))
        
        // 초기화
        setMessages([])
        setInputValue("")
        setIsTyping(false)
        setIsUserTyping(false)
        
        // 3초 후 다음 사이클 시작
        timeoutId = setTimeout(() => {
          startDemo()
        }, 3000)
      } else {
        // 23p: 바로 다음 사이클 시작
        timeoutId = setTimeout(() => {
          startDemo()
        }, 1000)
      }
    }

    // 첫 데모는 2초 후 시작
    timeoutId = setTimeout(() => {
      startDemo()
    }, 2000)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isPage22, isPage23])

  return (
    <div className="h-full flex flex-col p-12 bg-background">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-3">
          <span className="text-lg font-semibold text-primary">Chapter 04 Paytent AI</span>
        </div>
        <h2 className="text-[2.75rem] font-bold text-foreground mb-3">
          {isPage23 ? "세번째 AI 기능 : AI 기반 연차료 관리시스템" :
           isPage22 ? "두번째 AI 기능 : AI 의사결정 보드로 포트폴리오를 한눈에" : "첫번째 AI 기능 : AI 지능형 알림 및 캘린더"}
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {isPage23 
            ? "자연어 질문만으로 필요한 정보 조회, 통계분석, 보고서 생성까지 제공."
            : isPage22
            ? "수십, 수백 건의 IP를 사람이 하나씩 검토하고 판단하는 시대는 끝났습니다. Paytent AI는 'AI 의사결정 보드'로 전체 포트폴리오의 유지/포기 추천, 비용 시뮬레이션, 우선순위를 자동으로 제공합니다."
            : "Paytent AI가 반복되는 일정추적을 줄이고, 판단이 필요한 시점만 선별해 알려드립니다."
          }
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex gap-6 min-h-0">
        {/* Left: Patent List (Default) + Popup Overlay */}
        <div className="flex-1 relative min-h-0">
          {isPage22 ? (
            /* 22p: AI 의사결정 보드 */
            <div className="h-full bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-[1.375rem] font-bold text-gray-900">AI 의사결정 보드</h3>
                    <p className="text-xl text-gray-600 mt-1">
                      IP(특허·상표·디자인)의 유지/포기 추천 및 비용 시뮬레이션
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Calculator className="w-4 h-4 mr-1" />
                      시뮬레이션
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <FileText className="w-4 h-4 mr-1" />
                      AI 보고서 생성하기
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      내보내기
                    </Button>
                    <Button size="sm" variant="outline" className="bg-gray-800 text-white hover:bg-gray-900">
                      <Settings className="w-4 h-4 mr-1" />
                      일괄 처리
                    </Button>
                  </div>
                </div>

                {/* Statistics */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">전체 건수</span>
                    <span className="text-lg font-bold text-gray-900">{totalCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-3 h-3 text-green-500 fill-green-500" />
                    <span className="text-sm text-gray-600">유지 추천</span>
                    <span className="text-lg font-bold text-green-600">{maintainCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-3 h-3 text-pink-500 fill-pink-500" />
                    <span className="text-sm text-gray-600">포기 추천</span>
                    <span className="text-lg font-bold text-red-600">{abandonCount}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">예상 절감액</span>
                      <span className="text-lg font-bold text-blue-600">{savingsText}</span>
                    </div>
                    <span className="text-xs text-gray-500">외국환 원화 환산 기준</span>
                  </div>
                  {currentEvalDate && (
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="text-sm text-gray-600">평가일자</span>
                      <span className="text-lg font-bold text-gray-900">{currentEvalDate}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Search and Filters */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="키워드, 출원번호 또는 등록번호로 검색하세요"
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="전체 국가" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체 국가</SelectItem>
                      <SelectItem value="kr">한국</SelectItem>
                      <SelectItem value="us">미국</SelectItem>
                      <SelectItem value="ep">유럽</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="연차" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">연차</SelectItem>
                      <SelectItem value="1">1년</SelectItem>
                      <SelectItem value="2">2년</SelectItem>
                      <SelectItem value="3">3년</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Smart5" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Smart5</SelectItem>
                      <SelectItem value="aaa">AAA</SelectItem>
                      <SelectItem value="aa">AA</SelectItem>
                      <SelectItem value="a">A</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="전체 의사결정" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체 의사결정</SelectItem>
                      <SelectItem value="maintain">유지 추천</SelectItem>
                      <SelectItem value="abandon">포기 추천</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-3">
                  <Input type="date" className="w-[140px]" placeholder="시작날짜" />
                  <span className="text-sm text-gray-500">~</span>
                  <Input type="date" className="w-[140px]" placeholder="종료날짜" />
                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="AI 점수순" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="score">AI 점수순</SelectItem>
                      <SelectItem value="date">날짜순</SelectItem>
                      <SelectItem value="name">이름순</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Table */}
              <div className="flex-1 overflow-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left">
                        <input type="checkbox" className="w-4 h-4" />
                      </th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">국가</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">Smart5 등급</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">출원번호</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">연차</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">납부기한</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">연차료</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">평가일자</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">AI 점수</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">의사결정</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">시장가치</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">특허활용보고서</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">기술가치평가</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {patentRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <input type="checkbox" className="w-4 h-4" />
                        </td>
                        <td className="px-4 py-3 text-gray-900">{row.country}</td>
                        <td className="px-4 py-3">
                          <Badge className={`${row.gradeColor} text-xs font-semibold`}>{row.grade}</Badge>
                        </td>
                        <td className="px-4 py-3 text-gray-900 font-mono text-xs">{row.appNo}</td>
                        <td className="px-4 py-3 text-gray-700">{row.year}</td>
                        <td className="px-4 py-3 text-gray-700">{row.due}</td>
                        <td className="px-4 py-3 text-gray-700">
                          {row.country === "KR" ? `${row.fee}원` :
                           row.country === "US" ? `$${row.fee}` :
                           row.country === "EP" ? `€${row.fee}` :
                           row.country === "JP" ? `¥${row.fee}` :
                           row.fee}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{row.evalDate || "-"}</td>
                        <td className="px-4 py-3">
                          {row.score !== null ? (
                            <div className="flex items-center gap-1.5">
                              <Circle className={`w-2.5 h-2.5 ${row.score >= 80 ? 'text-green-500 fill-green-500' : row.score >= 70 ? 'text-green-300 fill-green-300' : 'text-red-500 fill-red-500'}`} />
                              <span className="text-gray-900 font-medium">{row.score}</span>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {row.decision ? (
                            <Badge className={row.decision === "유지" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} variant="outline">
                              {row.decision}
                            </Badge>
                          ) : (
                            <Circle className="w-4 h-4 text-gray-300" />
                          )}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{row.market || "-"}</td>
                        <td className="px-4 py-3">
                          <Button size="sm" variant="outline" className="h-7 text-xs">
                            확인하기
                          </Button>
                        </td>
                        <td className="px-4 py-3">
                          <Button size="sm" variant="outline" className="h-7 text-xs">
                            확인하기
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 bg-white flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  총 60건 중 1-10건 표시
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="h-8">
                    <ChevronLeft className="w-4 h-4" />
                    이전
                  </Button>
                  <Button size="sm" variant="default" className="h-8 w-8">
                    1
                  </Button>
                  <Button size="sm" variant="outline" className="h-8">
                    다음
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* 21p: 연차료 지급리스트 */
            <div className="h-full bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-[1.375rem] font-bold text-gray-900">연차료 지급리스트</h3>
                    <p className="text-xl text-gray-600 mt-1">
                      2026년 1월 연차료 지급리스트
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      <Download className="w-4 h-4 mr-1" />
                      엑셀 다운로드
                    </Button>
                    <Button size="sm" variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                      검토/포기 모아보기
                    </Button>
                    <Button size="sm" variant="outline">
                      Tab 설정
                    </Button>
                    <Button size="sm" variant="outline">
                      연차료 비교
                    </Button>
                    <Button size="sm" variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                      연차료 일괄납부
                    </Button>
                  </div>
                </div>

                {/* Search and Year/Month Selection */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="출원번호"
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="표시 건수 10개" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10개</SelectItem>
                      <SelectItem value="20">20개</SelectItem>
                      <SelectItem value="50">50개</SelectItem>
                      <SelectItem value="100">100개</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">연월 선택</span>
                    <Select>
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="2026년" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2026">2026년</SelectItem>
                        <SelectItem value="2025">2025년</SelectItem>
                        <SelectItem value="2024">2024년</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="1월" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1월</SelectItem>
                        <SelectItem value="2">2월</SelectItem>
                        <SelectItem value="3">3월</SelectItem>
                        <SelectItem value="4">4월</SelectItem>
                        <SelectItem value="5">5월</SelectItem>
                        <SelectItem value="6">6월</SelectItem>
                        <SelectItem value="7">7월</SelectItem>
                        <SelectItem value="8">8월</SelectItem>
                        <SelectItem value="9">9월</SelectItem>
                        <SelectItem value="10">10월</SelectItem>
                        <SelectItem value="11">11월</SelectItem>
                        <SelectItem value="12">12월</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="flex-1 overflow-auto">
                <table className="w-full text-xs">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">순번</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">Smart5 등급</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">국가</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">출원번호</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">출원일</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">등록번호</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">등록일</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">납부기한</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">연차</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">청구항수</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">금액</th>
                      <th className="hidden px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">납부 추천</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">검토</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">연차료 포기/납부</th>
                      <th className="px-2 py-1.5 text-left text-gray-700 font-semibold text-[0.7rem]">활용보고서</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { no: 51, grade: "C", country: "KR", appNo: "10-2015-0152947", appDate: "2015-11-02", regNo: "10-1699627-0000", regDate: "2017-01-18", due: "2026-01-18", year: "10", claims: "7", amount: "279,500원", recommendation: "중", review: "검토 중" },
                      { no: 52, grade: "BB", country: "US", appNo: "15/234,567", appDate: "2016-03-15", regNo: "10,234,567", regDate: "2018-05-20", due: "2026-01-20", year: "8", claims: "12", amount: "860$", recommendation: "중", review: "검토 중" },
                      { no: 53, grade: "CCC", country: "EP", appNo: "16123456.7", appDate: "2016-08-10", regNo: "EP3123456", regDate: "2019-02-15", due: "2026-01-15", year: "7", claims: "9", amount: "1,200€", recommendation: "중", review: "검토 중" },
                      { no: 54, grade: "BBB", country: "KR", appNo: "10-2017-0087654", appDate: "2017-06-22", regNo: "10-1854321-0000", regDate: "2019-11-30", due: "2026-01-30", year: "7", claims: "15", amount: "320,000원", recommendation: "중", review: "검토 중" },
                      { no: 55, grade: "B", country: "JP", appNo: "2017-123456", appDate: "2017-09-05", regNo: "JP6543210", regDate: "2020-03-12", due: "2026-01-12", year: "6", claims: "11", amount: "95,000¥", recommendation: "중", review: "검토 중" },
                      { no: 56, grade: "BB", country: "KR", appNo: "10-2018-0034567", appDate: "2018-02-14", regNo: "10-1987654-0000", regDate: "2020-08-25", due: "2026-01-25", year: "6", claims: "8", amount: "280,000원", recommendation: "중", review: "검토 중" },
                      { no: 57, grade: "CCC", country: "US", appNo: "16/456,789", appDate: "2018-07-30", regNo: "11,456,789", regDate: "2021-01-10", due: "2026-01-10", year: "5", claims: "13", amount: "920$", recommendation: "중", review: "검토 중" },
                      { no: 58, grade: "BBB", country: "EP", appNo: "18123456.7", appDate: "2018-12-05", regNo: "EP3456789", regDate: "2021-06-20", due: "2026-01-20", year: "5", claims: "10", amount: "1,350€", recommendation: "중", review: "검토 중" },
                      { no: 59, grade: "C", country: "KR", appNo: "10-2019-0098765", appDate: "2019-04-18", regNo: "10-2076543-0000", regDate: "2021-10-15", due: "2026-01-15", year: "5", claims: "6", amount: "265,000원", recommendation: "중", review: "검토 중" },
                      { no: 60, grade: "BB", country: "JP", appNo: "2019-234567", appDate: "2019-11-25", regNo: "JP7890123", regDate: "2022-04-08", due: "2026-01-08", year: "4", claims: "14", amount: "88,000¥", recommendation: "중", review: "검토 중" },
                    ].map((row) => (
                      <tr key={row.no} className="hover:bg-gray-50">
                        <td className="px-2 py-1.5 text-gray-700 text-[0.7rem]">{row.no}</td>
                        <td className="px-2 py-1.5">
                          <Badge className="bg-gray-100 text-gray-800 text-[0.65rem] font-semibold">{row.grade}</Badge>
                        </td>
                        <td className="px-2 py-1.5 text-gray-900 text-[0.7rem]">{row.country}</td>
                        <td className="px-2 py-1.5 text-gray-900 font-mono text-[0.7rem]">{row.appNo}</td>
                        <td className="px-2 py-1.5 text-gray-700 text-[0.7rem]">{row.appDate}</td>
                        <td className="px-2 py-1.5 text-gray-900 font-mono text-[0.7rem]">{row.regNo}</td>
                        <td className="px-2 py-1.5 text-gray-700 text-[0.7rem]">{row.regDate}</td>
                        <td className="px-2 py-1.5 text-gray-700 text-[0.7rem]">{row.due}</td>
                        <td className="px-2 py-1.5 text-gray-700 text-[0.7rem]">{row.year}</td>
                        <td className="px-2 py-1.5 text-gray-700 text-[0.7rem]">{row.claims}</td>
                        <td className="px-2 py-1.5 text-gray-700 font-medium text-[0.7rem]">{row.amount}</td>
                        <td className="hidden px-2 py-1.5">
                          <div className="flex items-center gap-1.5">
                            <Circle className="w-2 h-2 text-red-500 fill-red-500" />
                          </div>
                        </td>
                        <td className="px-2 py-1.5">
                          <span className="text-[0.65rem] text-gray-700">{row.review}</span>
                        </td>
                        <td className="px-2 py-1.5">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                              <Button size="sm" variant="outline" className="h-5 text-[0.65rem] bg-red-50 text-red-700 hover:bg-red-100 border-red-300 px-2">
                                포기
                              </Button>
                              <Button size="sm" variant="outline" className="h-5 text-[0.65rem] bg-green-50 text-green-700 hover:bg-green-100 border-green-300 px-2">
                                납부
                              </Button>
                            </div>
                            <Button size="sm" variant="outline" className="h-5 text-[0.65rem] bg-gray-50 text-gray-700 hover:bg-gray-100 px-2">
                              기업체 납부
                            </Button>
                          </div>
                        </td>
                        <td className="px-2 py-1.5">
                          <Button size="sm" variant="outline" className="h-6 text-[0.65rem]">
                            확인하기
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 bg-white flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  총 60건 중 51-60건 표시
                </div>
                <div className="flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 w-8">
                    «
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                    <Button
                      key={page}
                      size="sm"
                      variant={page === 6 ? "default" : "outline"}
                      className="h-8 w-8"
                    >
                      {page}
                    </Button>
                  ))}
                  <Button size="sm" variant="outline" className="h-8 w-8">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8">
                    »
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Popup Overlay - 채팅 질문 시 표시되는 메인 콘텐츠 */}
          {showPopup && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="w-[81%] h-[81%] bg-white/95 backdrop-blur-sm rounded-lg border-2 border-primary/20 shadow-2xl overflow-hidden transform scale-100">
          <div className="h-full overflow-y-auto bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => {
                      setShowPopup(false)
                      setPopupType(null)
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {popupType === "abandon" ? (
                  /* 포기 추천 특허 리스트 (22p) - 현재 테이블 데이터 사용 */
                  <div className="space-y-4">
                    <div className="mb-4">
                      <h3 className="text-[1.375rem] font-bold text-gray-900 mb-2">포기 추천 특허</h3>
                      <p className="text-lg text-gray-600">AI가 포기 추천한 특허 목록입니다.</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">국가</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">Smart5 등급</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">출원번호</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">연차</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">납부기한</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">연차료</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">평가일자</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">AI 점수</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">의사결정</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">시장가치</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {patentRows
                            .filter((row) => row.decision === "포기")
                            .map((row, idx) => (
                              <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-gray-900">{row.country}</td>
                                <td className="px-4 py-3">
                                  <Badge className={`${row.gradeColor} text-xs font-semibold`}>{row.grade}</Badge>
                                </td>
                                <td className="px-4 py-3 text-gray-900 font-mono text-xs">{row.appNo}</td>
                                <td className="px-4 py-3 text-gray-700">{row.year}</td>
                                <td className="px-4 py-3 text-gray-700">{row.due}</td>
                                <td className="px-4 py-3 text-gray-700">
                                  {row.country === "KR" ? `${row.fee}원` :
                                   row.country === "US" ? `$${row.fee}` :
                                   row.country === "EP" ? `€${row.fee}` :
                                   row.country === "JP" ? `¥${row.fee}` :
                                   row.fee}
                                </td>
                                <td className="px-4 py-3 text-gray-700">{row.evalDate || "-"}</td>
                                <td className="px-4 py-3">
                                  {row.score !== null ? (
                                    <div className="flex items-center gap-1.5">
                                      <Circle className={`w-2.5 h-2.5 ${row.score >= 80 ? 'text-green-500 fill-green-500' : row.score >= 70 ? 'text-green-300 fill-green-300' : 'text-red-500 fill-red-500'}`} />
                                      <span className="text-gray-900 font-medium">{row.score}</span>
                                    </div>
                                  ) : (
                                    <span className="text-gray-400">-</span>
                                  )}
                                </td>
                                <td className="px-4 py-3">
                                  <Badge className="bg-red-100 text-red-800" variant="outline">
                                    {row.decision}
                                  </Badge>
                                </td>
                                <td className="px-4 py-3 text-gray-700">{row.market || "-"}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : popupType === "lossRisk" ? (
                  /* 손실위험이 있는 특허 리스트 (21p) */
                  <div className="space-y-4">
                    <div className="mb-4">
                      <h3 className="text-[1.375rem] font-bold text-gray-900 mb-2">손실위험이 있는 특허</h3>
                      <p className="text-lg text-gray-600">즉시 확인이 필요한 특허 목록입니다.</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">특허</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">상세 정보</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">확인해야 할 담당자/기관</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
                            { patent: "특허A", detail: "마감 14일 남음 / 가치등급 A / 공동권리자 미회신", contact: "공동권리자 담당팀" },
                            { patent: "특허B", detail: "마감 10일 남음 / 해외 US 유지 필요 / 협상 중", contact: "해외 특허 담당자, 협상팀" },
                          ].map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-900 font-semibold">{item.patent}</td>
                              <td className="px-4 py-3 text-gray-700">{item.detail}</td>
                              <td className="px-4 py-3">
                                <Badge className="bg-orange-100 text-orange-800" variant="outline">
                                  {item.contact}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : popupType === "urgent" ? (
                  /* 긴급 특허 리스트 */
                  <div className="space-y-4">
                    <div className="mb-4">
                      <h3 className="text-[1.375rem] font-bold text-gray-900 mb-2">긴급한 특허</h3>
                      <p className="text-lg text-gray-600">즉시 처리해야 할 특허 목록입니다.</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">특허번호</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">국가</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">상태</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">마감일</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">긴급도</th>
                            <th className="px-4 py-3 text-left text-gray-700 font-semibold">액션</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
                            { no: "KR10-2345678", country: "KR", status: "연차료 납부", due: "2024-12-31", urgency: "매우 긴급", daysLeft: 2 },
                            { no: "KR10-1234567", country: "KR", status: "권리 포기 결정", due: "2025-01-05", urgency: "긴급", daysLeft: 7 },
                            { no: "EP18817150.8", country: "EP", status: "연차료 납부", due: "2025-01-15", urgency: "긴급", daysLeft: 17 },
                          ].map((patent, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-900 font-mono text-xs">{patent.no}</td>
                              <td className="px-4 py-3 text-gray-700">{patent.country}</td>
                              <td className="px-4 py-3">
                                <Badge className={patent.urgency === "매우 긴급" ? "bg-red-100 text-red-800" : "bg-orange-100 text-orange-800"} variant="outline">
                                  {patent.status}
                                </Badge>
                              </td>
                              <td className="px-4 py-3 text-gray-700">{patent.due}</td>
                              <td className="px-4 py-3">
                                <Badge variant={patent.urgency === "매우 긴급" ? "destructive" : "outline"} className="text-xs">
                                  {patent.urgency}
                                </Badge>
                              </td>
                              <td className="px-4 py-3">
                                <Button size="sm" variant="outline" className="h-7 text-xs">
                                  상세보기
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  /* 의사결정 보드 */
            <div className="space-y-3">
              {/* AI Insights Card */}
              <Card className="border-orange-200">
                <CardHeader className="pb-2 pt-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Sparkles className="h-4 w-4 text-orange-600" />
                    AI 인사이트
                  </CardTitle>
                  <CardDescription className="text-xs">
                    IP특허·상표·디자인의 유지/포기 추천 및 비용 시뮬레이션
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Work Load Analysis */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-gray-700">업무 부하 분석</span>
                      <span className="text-xs font-bold text-red-600">90%</span>
                    </div>
                    <Progress value={90} className="h-1.5 bg-gray-200" />
                    <p className="text-[10px] text-blue-600 mt-1">
                      연계 업무들이 동반되니, 우선순위 업무에 집중하세요.
                    </p>
                  </div>

                  {/* Priority Tasks */}
                  <Card className="border-red-200 bg-red-50">
                    <CardHeader className="pb-1.5 pt-2">
                      <CardTitle className="flex items-center gap-1.5 text-xs text-red-900">
                        <AlertTriangle className="h-3 w-3" />
                        우선 처리 필요
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <ul className="space-y-0.5 text-xs">
                        <li className="text-gray-800">• 연차료 납부 (KR10-2345678)</li>
                        <li className="text-gray-800">• 권리 포기 결정 (KR10-1234567)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Tabs Section */}
              <Tabs defaultValue="calendar" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-7">
                  <TabsTrigger value="calendar" className="flex items-center gap-1 text-xs">
                    <Calendar className="h-3 w-3" />
                    캘린더
                  </TabsTrigger>
                  <TabsTrigger value="alerts" className="flex items-center gap-1 text-xs">
                    <Bell className="h-3 w-3" />
                    알림
                  </TabsTrigger>
                  <TabsTrigger value="analysis" className="flex items-center gap-1 text-xs">
                    <Sparkles className="h-3 w-3" />
                    AI 분석
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Stat Cards */}
              <div className="grid grid-cols-4 gap-2">
                <Card>
                  <CardHeader className="pb-1.5 pt-2">
                    <CardTitle className="flex items-center gap-1.5 text-xs text-red-600">
                      <AlertTriangle className="h-3 w-3" />
                      긴급 마감일
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-[10px] text-gray-600">2건 이내 마감</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-1.5 pt-2">
                    <CardTitle className="flex items-center gap-1.5 text-xs text-orange-600">
                      <TrendingUp className="h-3 w-3" />
                      예정된 일정
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-[10px] text-gray-600">다가오는 마감일</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-1.5 pt-2">
                    <CardTitle className="flex items-center gap-1.5 text-xs text-blue-600">
                      <Calendar className="h-3 w-3" />
                      연차료 납부
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-[10px] text-gray-600">예정된 건수</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-1.5 pt-2">
                    <CardTitle className="flex items-center gap-1.5 text-xs text-purple-600">
                      <Sparkles className="h-3 w-3" />
                      권리 결정
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="text-2xl font-bold">1</div>
                    <p className="text-[10px] text-gray-600">결정 필요</p>
                  </CardContent>
                </Card>
              </div>

              {/* AI Recommendations */}
              <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                <CardHeader className="pb-2 pt-2.5">
                  <CardTitle className="flex items-center gap-2 text-sm text-orange-900">
                    <Sparkles className="h-4 w-4" />
                    업무 최적화 제안
                  </CardTitle>
                  <CardDescription className="text-[10px]">건재 업무들을 분석한 AI의 제안입니다</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-gray-700">
                      • 연차료는 납부는 마감일 7일 전에 처리하는 것을 권장합니다
                    </div>
                    <div className="text-[11px] text-gray-700">
                      • 권리 포기 결정은 유료한 결단 시간이 허용합니다 (최소 14일)
                    </div>
                    <div className="text-[11px] text-gray-700">
                      • 비소인 시가의 마감일은 한 번에 처리하면 효율적입니다
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expected Work Pattern */}
              <Card>
                <CardHeader className="pb-2 pt-2.5">
                  <CardTitle className="text-sm">예상 업무 패턴</CardTitle>
                </CardHeader>
                <CardContent className="pb-2 space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-700">이번 주</span>
                      <Badge variant="destructive" className="text-[10px] h-4 px-1.5">
                        폭증
                      </Badge>
                    </div>
                    <Progress value={92} className="h-1.5 bg-gray-200" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-700">다음 주</span>
                      <Badge variant="outline" className="text-[10px] h-4 px-1.5">
                        중간
                      </Badge>
                    </div>
                    <Progress value={65} className="h-1.5 bg-gray-200" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-700">다음달</span>
                      <Badge variant="secondary" className="text-[10px] h-4 px-1.5">
                        낮음
                      </Badge>
                    </div>
                    <Progress value={25} className="h-1.5 bg-gray-200" />
                  </div>
                </CardContent>
              </Card>
            </div>
                )}
          </div>
            </div>
          </div>
          )}
        </div>

        {/* Right: Chat Window + Info Sections */}
        <div className="w-[30%] flex flex-col gap-4 min-h-0">
          {/* Chat Window */}
          <div className="bg-white flex flex-col rounded-lg border border-gray-200 shadow-sm overflow-hidden flex-[2] min-h-0">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 flex items-center gap-2 border-b border-orange-600 flex-shrink-0">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold">Paytent AI</h3>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-3 overflow-y-auto bg-gray-50 min-h-0">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-3 px-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                      <MessageSquare className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">질문을 시작해보세요</p>
                      <p className="text-xs text-gray-500 mt-1">특허에 대한 질문을 입력하면 AI가 답변해드립니다</p>
                </div>
              </div>
                </div>
              ) : (
            <div className="space-y-2">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-xl px-3 py-2 shadow-sm ${
                          msg.type === "user"
                            ? "bg-orange-500 text-white"
                            : "bg-white text-gray-800 border border-gray-200"
                        }`}
                      >
                        <p className="text-xs leading-relaxed whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                        <div className="flex gap-1">
                          <div
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                </div>
              </div>
                </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
              </div>

            {/* Chat Input */}
            <div className="px-3 py-2 bg-white border-t border-gray-200 flex-shrink-0">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                <input
                  type="text"
                  placeholder="질문을 입력하세요..."
                  value={inputValue}
                  onChange={(e) => {
                    if (!isUserTyping) {
                      setInputValue(e.target.value)
                    }
                  }}
                  disabled={isUserTyping}
                  className="flex-1 bg-transparent text-xs text-gray-500 outline-none disabled:opacity-50"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && inputValue.trim() && !isUserTyping) {
                      const userMessage = inputValue.trim()
                      
                      // 사용자 메시지 추가
                      setMessages((prev) => [...prev, { type: "user", text: userMessage }])
                      
                      // "납부현황을 알려줘" 질문인 경우 팝업 표시
                      if (userMessage.includes("납부현황") || userMessage.includes("납부")) {
                        setIsTyping(true)
                        setTimeout(() => {
                          setIsTyping(false)
                          setMessages((prev) => [
                            ...prev,
                            {
                              type: "ai",
                              text: "납부현황을 알려드립니다. 우선 처리가 필요한 건들을 확인하세요.",
                            },
                          ])
                          setPopupType("decision")
                          setShowPopup(true)
                        }, 1500)
                      } else if (userMessage.includes("긴급") || (userMessage.includes("특허") && userMessage.includes("알려"))) {
                        // "긴급한 특허" 질문 처리
                        setIsTyping(true)
                        setTimeout(() => {
                          setIsTyping(false)
                          const urgentPatents = [
                            "• KR10-2345678 - 연차료 납부 (마감일: 2026-12-31)",
                            "• KR10-1234567 - 권리 포기 결정 필요",
                            "• EP18817150.8 - 연차료 납부 (마감일: 2027-01-13)",
                          ]
                          setMessages((prev) => [
                            ...prev,
                            {
                              type: "ai",
                              text: `긴급한 특허를 확인했습니다:\n\n${urgentPatents.join("\n")}\n\n자세한 정보는 팝업에서 확인하실 수 있습니다.`,
                            },
                          ])
                          setPopupType("urgent")
                          setShowPopup(true)
                        }, 1500)
                      } else {
                        // 일반 질문에 대한 응답
                        setIsTyping(true)
                        setTimeout(() => {
                          setIsTyping(false)
                          setMessages((prev) => [
                            ...prev,
                            {
                              type: "ai",
                              text: "질문해주셔서 감사합니다. 더 자세한 정보가 필요하시면 '납부현황을 알려줘'라고 입력해주세요.",
                            },
                          ])
                        }, 1500)
                      }
                      
                      setInputValue("")
                    }
                  }}
                />
                {isUserTyping && (
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                )}
              </div>
            </div>
          </div>

          {/* Business Value */}
          {!isPage23 && (
            <div className="flex flex-col gap-4 overflow-hidden flex-1 min-h-0">
              <div className="flex flex-col bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h3 className="text-[1.375rem] font-bold text-foreground">담당자가 얻는 가치</h3>
              </div>
              <p className={isPage22 ? "text-[16px] text-muted-foreground" : "text-lg text-muted-foreground"}>
                    {isPage22 
                      ? "단순 반복 작업에서 해방, 데이터 기반의 빠르고 정확한 의사결정 실현"
                      : "일정 누락 방지와 체계적 업무 관리로 스트레스 감소 및 생산성 향상"
                    }
              </p>
            </div>

            <div className="space-y-2">
                {isPage22 ? (
                  <>
                    <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-[15px] text-foreground leading-relaxed">사용자 질문에 즉시 답변 가능한 대시보드</p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-[15px] text-foreground leading-relaxed">
                          사람이 며칠 걸릴 분석을 AI가 몇 초만에 완료
                        </p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-[15px] text-foreground leading-relaxed">
                          포트폴리오 전체를 한눈에 보며 전략적 판단 지원
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
              <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-[15px] text-foreground leading-relaxed">마감일 누락 걱정 없이 안심하고 업무 진행</p>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-[15px] text-foreground leading-relaxed">
                    엑셀과 캘린더를 뒤지는 시간 절약, 업무 효율 극대화
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-[15px] text-foreground leading-relaxed">
                    업무 부하가 높은 시기를 미리 파악해 계획적 대응 가능
                  </p>
                </div>
              </div>
                  </>
                )}
            </div>
          </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
