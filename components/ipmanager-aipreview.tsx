"use client"

import { useState, useEffect } from "react"
import { MessageSquare } from "lucide-react"

interface ChatMessage {
  type: "user" | "ai"
  text?: string
  table?: Array<{ stage: string; count: number; status: string }>
}

export default function IPManagerAIPreview({ isActive }: { isActive?: boolean }) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (!isActive) return

    setMessages([])
    setIsTyping(false)

    const conversation: Array<ChatMessage & { delay: number }> = [
      { type: "user", text: "10-2488493 특허의 2030년까지의 예상 연차료 금액을 알려줘", delay: 1000 },
      {
        type: "ai",
        text: " 2023년 1월 10일 등록된 10-2488493 특허는 중소기업 감면 50%를 적용받아 2026년부터 2030년까지 400,000원의 연차료가 발생합니다.",
        delay: 3500,
      },
      { type: "user", text: "이 특허와 핵심 키워드를 뽑아줘", delay: 7000 },
      {
        type: "ai",
        text: "본 특허의 핵심 키워드는 비면허대역, NR시스템, SSB전송 입니다.",
        delay: 9500,
      },
    ]

    conversation.forEach((msg) => {
      setTimeout(() => {
        if (msg.type === "ai") {
          setIsTyping(true)
          setTimeout(() => {
            setMessages((prev) => [...prev, { type: msg.type, text: msg.text }])
            setIsTyping(false)
          }, 1200)
        } else {
          setMessages((prev) => [...prev, { type: msg.type, text: msg.text }])
        }
      }, msg.delay)
    })

    const resetTimeout = setTimeout(() => {
      setMessages([])
    }, 14000)

    return () => clearTimeout(resetTimeout)
  }, [isActive])

  return (
    <div className="relative w-full h-full bg-white flex">
      {/* Left: Patent Detail UI - 70% width */}
      <div className="w-[70%] bg-gray-50 border-r border-gray-200 overflow-y-auto p-6">
        <img src="/images/image.png" alt="Paytent" className="w-full h-auto rounded-lg shadow-sm" />
      </div>

      {/* Right: AI Chatbot - 30% width */}
      <div className="w-[30%] bg-white flex flex-col">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 flex items-center gap-2 border-b border-orange-600">
          <div className="p-1.5 bg-white/20 rounded-lg">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold">N:OW ai</h3>
            <p className="text-xs text-white/90">특허 검색</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
          {messages.length === 0 && (
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
          )}
          <div className="space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[90%] rounded-xl px-3 py-2 shadow-sm ${
                    msg.type === "user" ? "bg-orange-500 text-white" : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {msg.text && <p className="text-xs leading-relaxed whitespace-pre-line">{msg.text}</p>}
                  {msg.table && (
                    <div className="mt-2 overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="text-left py-1.5 px-2 font-semibold text-gray-700">단계</th>
                            <th className="text-center py-1.5 px-2 font-semibold text-gray-700">건수</th>
                            <th className="text-center py-1.5 px-2 font-semibold text-gray-700">상태</th>
                          </tr>
                        </thead>
                        <tbody>
                          {msg.table.map((row, i) => (
                            <tr key={i} className="border-b border-gray-200">
                              <td className="py-1.5 px-2 text-gray-800">{row.stage}</td>
                              <td className="text-center py-1.5 px-2 font-semibold text-blue-600">{row.count}</td>
                              <td className="text-center py-1.5 px-2">
                                <span
                                  className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                                    row.status === "완료"
                                      ? "bg-green-100 text-green-700"
                                      : row.status === "진행중"
                                        ? "bg-blue-100 text-blue-700"
                                        : row.status === "종료"
                                          ? "bg-red-100 text-red-700"
                                          : "bg-yellow-100 text-yellow-700"
                                  }`}
                                >
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
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
          </div>
        </div>

        {/* Chat Input */}
        <div className="px-3 py-2 bg-white border-t border-gray-200">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="질문을 입력하세요..."
              className="flex-1 bg-transparent text-xs text-gray-500 outline-none"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  )
}
