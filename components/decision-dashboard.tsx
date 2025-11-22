"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { cn } from "@/lib/utils"
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Search,
  Calendar,
  Download,
  FileText,
  TrendingUp,
  XOctagon,
  ArrowUpDown,
} from "lucide-react"

type DecisionType = "maintain" | "abandon" | "review"

interface PatentItem {
  id: string
  applicationNumber: string
  title: string
  type: "patent" | "trademark" | "design"
  country: string
  status: string
  aiScore: number
  decision: DecisionType
  annualFee: number
  totalCost: number
  dueDate: string
  riskLevel: "low" | "medium" | "high"
  marketValue: number
  smart5Grade: string
  annualYear: number
}

const mockData: PatentItem[] = [
  {
    id: "1",
    applicationNumber: "10-2020-0156946",
    title: "자율주행 차량 제어 시스템",
    type: "patent",
    country: "KR",
    status: "등록",
    aiScore: 85,
    decision: "maintain",
    annualFee: 98000,
    totalCost: 980000,
    dueDate: "2025-11-01",
    riskLevel: "low",
    marketValue: 0,
    smart5Grade: "BB",
    annualYear: 5,
  },
  {
    id: "2",
    applicationNumber: "10-2014-0190929",
    title: "인공지능 기반 데이터 분석 방법",
    type: "patent",
    country: "KR",
    status: "등록",
    aiScore: 28,
    decision: "abandon",
    annualFee: 328500,
    totalCost: 3285000,
    dueDate: "2025-11-01",
    riskLevel: "high",
    marketValue: 0,
    smart5Grade: "CCC",
    annualYear: 10,
  },
  {
    id: "3",
    applicationNumber: "10-2017-0080907",
    title: "스마트 홈 자동화 시스템",
    type: "patent",
    country: "KR",
    status: "등록",
    aiScore: 48,
    decision: "review",
    annualFee: 181000,
    totalCost: 1810000,
    dueDate: "2025-11-01",
    riskLevel: "medium",
    marketValue: 0,
    smart5Grade: "BBB",
    annualYear: 9,
  },
  {
    id: "4",
    applicationNumber: "21925908.2",
    title: "양자컴퓨팅 알고리즘",
    type: "patent",
    country: "EP",
    status: "출원",
    aiScore: 92,
    decision: "maintain",
    annualFee: 925,
    totalCost: 9250,
    dueDate: "2025-11-01",
    riskLevel: "low",
    marketValue: 0,
    smart5Grade: "B",
    annualYear: 5,
  },
  {
    id: "5",
    applicationNumber: "10-2021-0020233",
    title: "블록체인 기반 결제 시스템",
    type: "patent",
    country: "KR",
    status: "등록",
    aiScore: 82,
    decision: "maintain",
    annualFee: 78000,
    totalCost: 780000,
    dueDate: "2025-11-01",
    riskLevel: "low",
    marketValue: 0,
    smart5Grade: "CCC",
    annualYear: 4,
  },
  {
    id: "6",
    applicationNumber: "10-2020-0059729",
    title: "클라우드 기반 보안 시스템",
    type: "patent",
    country: "KR",
    status: "등록",
    aiScore: 88,
    decision: "maintain",
    annualFee: 168000,
    totalCost: 1680000,
    dueDate: "2025-11-02",
    riskLevel: "low",
    marketValue: 0,
    smart5Grade: "BB",
    annualYear: 5,
  },
  {
    id: "7",
    applicationNumber: "10-2020-0012087",
    title: "친환경 에너지 관리 시스템",
    type: "patent",
    country: "KR",
    status: "등록",
    aiScore: 25,
    decision: "abandon",
    annualFee: 58000,
    totalCost: 580000,
    dueDate: "2025-11-02",
    riskLevel: "high",
    marketValue: 0,
    smart5Grade: "CCC",
    annualYear: 5,
  },
  {
    id: "8",
    applicationNumber: "10-2014-0061532",
    title: "5G 통신 프로토콜",
    type: "patent",
    country: "KR",
    status: "등록",
    aiScore: 30,
    decision: "abandon",
    annualFee: 304000,
    totalCost: 3040000,
    dueDate: "2025-11-02",
    riskLevel: "high",
    marketValue: 0,
    smart5Grade: "B",
    annualYear: 11,
  },
  {
    id: "9",
    applicationNumber: "10-2020-0044132",
    title: "AR/VR 콘텐츠 플랫폼",
    type: "patent",
    country: "KR",
    status: "등록",
    aiScore: 45,
    decision: "review",
    annualFee: 58000,
    totalCost: 580000,
    dueDate: "2025-11-02",
    riskLevel: "medium",
    marketValue: 0,
    smart5Grade: "CCC",
    annualYear: 5,
  },
  {
    id: "10",
    applicationNumber: "10-2020-0157998",
    title: "IoT 디바이스 제어 시스템",
    type: "patent",
    country: "KR",
    status: "등록",
    aiScore: 86,
    decision: "maintain",
    annualFee: 58000,
    totalCost: 580000,
    dueDate: "2025-11-03",
    riskLevel: "low",
    marketValue: 0,
    smart5Grade: "BB",
    annualYear: 5,
  },
]

export function DecisionDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterDecision, setFilterDecision] = useState<string>("all")
  const [filterCountry, setFilterCountry] = useState<string>("all")
  const [filterSmart5Grade, setFilterSmart5Grade] = useState<string>("all")
  const [filterAnnualYear, setFilterAnnualYear] = useState<string>("all")
  const [dateFrom, setDateFrom] = useState<Date | undefined>(undefined)
  const [dateTo, setDateTo] = useState<Date | undefined>(undefined)
  const [sortBy, setSortBy] = useState<string>("aiScore")

  const filteredPatents = mockData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.applicationNumber.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDecision = filterDecision === "all" || item.decision === filterDecision
    const matchesCountry = filterCountry === "all" || item.country === filterCountry
    const matchesSmart5Grade = filterSmart5Grade === "all" || item.smart5Grade === filterSmart5Grade
    const matchesAnnualYear = filterAnnualYear === "all" || item.annualYear.toString() === filterAnnualYear
    const itemDate = new Date(item.dueDate)
    const matchesDateRange = (!dateFrom || itemDate >= dateFrom) && (!dateTo || itemDate <= dateTo)
    return (
      matchesSearch && matchesDecision && matchesCountry && matchesSmart5Grade && matchesAnnualYear && matchesDateRange
    )
  })

  const stats = {
    total: 60,
    maintain: 49, // Updated to 49 as requested
    abandon: 3, // Updated to 3 as requested
    review: mockData.filter((item) => item.decision === "review").length,
    totalCost: mockData.reduce((sum, item) => sum + item.totalCost, 0),
    estimatedSavings: mockData
      .filter((item) => item.decision === "abandon")
      .reduce((sum, item) => sum + item.annualFee, 0),
  }

  const getDecisionBadge = (decision: DecisionType) => {
    const config = {
      maintain: {
        label: "유지",
        className: "bg-white text-gray-800 border-gray-300",
        icon: CheckCircle2,
      },
      abandon: {
        label: "포기",
        className: "bg-red-100 text-red-700 border-red-300",
        icon: XCircle,
      },
      review: {
        label: "검토",
        className: "bg-green-100 text-green-700 border-green-300",
        icon: AlertCircle,
      },
    }

    const { className, icon: Icon } = config[decision]
    return (
      <Badge variant="outline" className={className}>
        <Icon className="h-4 w-4" />
      </Badge>
    )
  }

  const getRiskBadge = (risk: string) => {
    const config = {
      low: { label: "낮음", className: "bg-green-100 text-green-700" },
      medium: { label: "보통", className: "bg-chart-3/20 text-chart-3" },
      high: { label: "높음", className: "bg-destructive/20 text-destructive" },
    }

    const { label, className } = config[risk as keyof typeof config]
    return (
      <Badge variant="outline" className={className}>
        {label}
      </Badge>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-foreground">AI 의사결정 보드</h1>
              <p className="mt-0.5 text-xs text-muted-foreground">
                IP(특허·상표·디자인)의 유지/포기 추천 및 비용 시뮬레이션
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs px-2 py-1 h-7">
                <FileText className="mr-1 h-3 w-3" />
                AI 보고서 생성하기
              </Button>
              <Button variant="outline" size="sm" className="text-xs px-2 py-1 h-7 bg-transparent">
                <Download className="mr-1 h-3 w-3" />
                내보내기
              </Button>
              <Button size="sm" className="text-xs px-2 py-1 h-7">
                일괄 처리
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-3">
        {/* Stats Overview */}
        <div className="mb-3 grid gap-2 md:grid-cols-4">
          <Card className="bg-card p-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">전체 건수</p>
                <p className="mt-0.5 text-xl font-bold text-foreground">{stats.total}</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-2">
                <FileText className="h-4 w-4 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="bg-card p-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">유지 추천</p>
                <p className="mt-0.5 text-xl font-bold text-green-600">{stats.maintain}</p>
              </div>
              <div className="rounded-lg bg-green-100 p-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-card p-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">포기 추천</p>
                <p className="mt-0.5 text-xl font-bold text-destructive">{stats.abandon}</p>
              </div>
              <div className="rounded-lg bg-destructive/10 p-2">
                <XOctagon className="h-4 w-4 text-destructive" />
              </div>
            </div>
          </Card>

          <Card className="bg-card p-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">예상 절감액</p>
                <p className="mt-0.5 text-xl font-bold text-chart-3">
                  {(stats.estimatedSavings / 10000).toFixed(0)}만원
                </p>
              </div>
              <div className="rounded-lg bg-chart-3/10 p-2">
                <TrendingUp className="h-4 w-4 text-chart-3" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="mb-3 bg-card p-2">
          <div className="flex flex-col gap-2">
            {/* First row - Search and Date Range */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="키워드, 출원번호 또는 등록번호로 검색하세요"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-7 bg-background border-input text-xs h-7"
                />
              </div>

              <div className="flex items-center gap-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[120px] justify-start text-left font-normal bg-background text-xs h-7",
                        !dateFrom && "text-muted-foreground",
                      )}
                    >
                      <Calendar className="mr-1 h-3 w-3" />
                      {dateFrom ? format(dateFrom, "yyyy-MM-dd", { locale: ko }) : "시작날짜"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent mode="single" selected={dateFrom} onSelect={setDateFrom} initialFocus />
                  </PopoverContent>
                </Popover>
                <span className="text-muted-foreground text-xs">~</span>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[120px] justify-start text-left font-normal bg-background text-xs h-7",
                        !dateTo && "text-muted-foreground",
                      )}
                    >
                      <Calendar className="mr-1 h-3 w-3" />
                      {dateTo ? format(dateTo, "yyyy-MM-dd", { locale: ko }) : "종료날짜"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent mode="single" selected={dateTo} onSelect={setDateTo} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Second row - Other filters and Sort */}
            <div className="flex items-center gap-2">
              <Select value={filterCountry} onValueChange={setFilterCountry}>
                <SelectTrigger className="w-28 bg-background text-xs h-7">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 국가</SelectItem>
                  <SelectItem value="KR">한국</SelectItem>
                  <SelectItem value="US">미국</SelectItem>
                  <SelectItem value="EP">유럽</SelectItem>
                  <SelectItem value="CN">중국</SelectItem>
                  <SelectItem value="JP">일본</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterAnnualYear} onValueChange={setFilterAnnualYear}>
                <SelectTrigger className="w-24 bg-background text-xs h-7">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">연차</SelectItem>
                  <SelectItem value="1">1년차</SelectItem>
                  <SelectItem value="2">2년차</SelectItem>
                  <SelectItem value="3">3년차</SelectItem>
                  <SelectItem value="4">4년차</SelectItem>
                  <SelectItem value="5">5년차</SelectItem>
                  <SelectItem value="6">6년차</SelectItem>
                  <SelectItem value="7">7년차</SelectItem>
                  <SelectItem value="8">8년차</SelectItem>
                  <SelectItem value="9">9년차</SelectItem>
                  <SelectItem value="10">10년차</SelectItem>
                  <SelectItem value="11">11년차</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterSmart5Grade} onValueChange={setFilterSmart5Grade}>
                <SelectTrigger className="w-28 bg-background text-xs h-7">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Smart5</SelectItem>
                  <SelectItem value="BBB">BBB</SelectItem>
                  <SelectItem value="BB">BB</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="CCC">CCC</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterDecision} onValueChange={setFilterDecision}>
                <SelectTrigger className="w-32 bg-background text-xs h-7">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 의사결정</SelectItem>
                  <SelectItem value="maintain">유지</SelectItem>
                  <SelectItem value="abandon">포기</SelectItem>
                  <SelectItem value="review">검토필요</SelectItem>
                </SelectContent>
              </Select>

              <div className="ml-auto">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32 bg-background text-xs h-7">
                    <ArrowUpDown className="mr-1 h-3 w-3" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aiScore">AI 점수순</SelectItem>
                    <SelectItem value="cost">비용순</SelectItem>
                    <SelectItem value="dueDate">납부기한순</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* Decision Table */}
        <Card className="bg-card">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="w-8 py-2">
                    <input type="checkbox" className="rounded border-input" aria-label="Select all" />
                  </TableHead>
                  <TableHead className="py-2 text-xs">국가</TableHead>
                  <TableHead className="py-2 text-xs">Smart5 등급</TableHead>
                  <TableHead className="min-w-[120px] py-2 text-xs">출원번호</TableHead>
                  <TableHead className="py-2 text-xs">연차</TableHead>
                  <TableHead className="py-2 text-xs">납부기한</TableHead>
                  <TableHead className="text-right py-2 text-xs">연차료</TableHead>
                  <TableHead className="text-right py-2 text-xs">
                    <div className="flex items-center justify-end gap-1">
                      AI 점수
                      <TrendingUp className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead className="py-2 text-xs">의사결정</TableHead>
                  <TableHead className="text-center py-2 text-xs">특허활용보고서</TableHead>
                  <TableHead className="text-center py-2 text-xs">기술가치평가</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatents.map((patent) => (
                  <TableRow key={patent.id} className="border-border hover:bg-muted/50 cursor-pointer">
                    <TableCell className="py-1.5">
                      <input type="checkbox" className="rounded border-input" aria-label={`Select ${patent.id}`} />
                    </TableCell>
                    <TableCell className="py-1.5">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-primary/10 text-primary font-medium text-xs">
                        {patent.country}
                      </span>
                    </TableCell>
                    <TableCell className="py-1.5">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                          patent.smart5Grade === "CCC"
                            ? "bg-green-100 text-green-700"
                            : patent.smart5Grade === "BBB"
                              ? "bg-blue-100 text-blue-700"
                              : patent.smart5Grade === "BB"
                                ? "bg-yellow-100 text-yellow-700"
                                : patent.smart5Grade === "B"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {patent.smart5Grade}
                      </span>
                    </TableCell>
                    <TableCell className="font-mono text-xs py-1.5">{patent.applicationNumber}</TableCell>
                    <TableCell className="text-center text-xs py-1.5">{patent.annualYear}</TableCell>
                    <TableCell className="text-muted-foreground text-xs py-1.5">{patent.dueDate}</TableCell>
                    <TableCell className="text-right font-medium text-xs py-1.5">{patent.annualFee}</TableCell>
                    <TableCell className="text-right py-1.5">
                      {patent.aiScore !== 0 ? (
                        <div className="flex items-center justify-end gap-1">
                          <div className="flex-1 bg-secondary rounded-full h-1.5 max-w-[50px]">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: `${patent.aiScore}%` }} />
                          </div>
                          <span className="text-xs font-medium min-w-[35px]">{patent.aiScore}점</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-xs">-</span>
                      )}
                    </TableCell>
                    <TableCell className="py-1.5">{getDecisionBadge(patent.decision)}</TableCell>
                    <TableCell className="text-center py-1.5">
                      <button className="px-2 py-1 text-xs border border-border rounded hover:bg-muted transition-colors">
                        확인하기
                      </button>
                    </TableCell>
                    <TableCell className="text-center py-1.5">
                      <button className="px-2 py-1 text-xs border border-border rounded hover:bg-muted transition-colors">
                        확인하기
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Pagination */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">총 60건 중 1-10건 표시</p>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled className="text-xs h-7 px-2 bg-transparent">
              이전
            </Button>
            <Button variant="outline" size="sm" className="text-xs h-7 px-2 bg-transparent">
              1
            </Button>
            <Button variant="outline" size="sm" disabled className="text-xs h-7 px-2 bg-transparent">
              다음
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
