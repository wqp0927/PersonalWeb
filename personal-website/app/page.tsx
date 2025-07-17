"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Spade,
  User,
  Briefcase,
  Heart,
  FolderOpen,
  MessageCircle,
  MessageSquare,
} from "lucide-react"

type TabType = "about" | "experience" | "interests" | "projects" | "contact"

export default function PersonalWebsite() {
  const [activeTab, setActiveTab] = useState<TabType>("about")

  const tabs = [
    { id: "about", label: "关于我", icon: User },
    { id: "experience", label: "工作经历", icon: Briefcase },
    { id: "interests", label: "兴趣爱好", icon: Heart },
    { id: "projects", label: "个人项目", icon: FolderOpen },
    { id: "contact", label: "联系我", icon: MessageCircle },
  ] as const

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutContent />
      case "experience":
        return <ExperienceContent />
      case "interests":
        return <InterestsContent />
      case "projects":
        return <ProjectsContent />
      case "contact":
        return <ContactContent />
      default:
        return <AboutContent />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="flex h-screen relative z-10">
        {/* Left Sidebar */}
        <div className="w-80 bg-white/20 backdrop-blur-xl border-r border-white/30 flex flex-col">
          {/* Profile Header */}
          <div className="p-8 border-b border-white/20">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-200/50 to-orange-300/50 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
              </div>
              <h1 className="text-xl font-bold text-amber-900 mb-1">产品经理</h1>
              <p className="text-sm text-amber-700/80">腾讯产培生 · AI产品专家</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-white/40 backdrop-blur-sm border border-white/50 text-amber-900 shadow-lg"
                        : "text-amber-800/70 hover:bg-white/20 hover:text-amber-900"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-white/20">
            <div className="flex justify-center space-x-3">
              <Button size="sm" variant="ghost" className="text-amber-800 hover:bg-white/20 hover:text-amber-900">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-amber-800 hover:bg-white/20 hover:text-amber-900">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-amber-800 hover:bg-white/20 hover:text-amber-900">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}

function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">关于我</h2>
        <p className="text-lg text-amber-800/80">用心设计每一个AI产品，让技术更有温度</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-amber-900">个人简介</h3>
            <div className="space-y-4 text-amber-800/90">
              <p className="leading-relaxed">
                我是一名腾讯产培生，专注于AI产品的设计与开发。在产品生涯中，我有幸参与了多个Top3级别的AI产品项目，涵盖协同工具、社交产品和AI工具等多个领域。
              </p>
              <p className="leading-relaxed">
                我相信好的产品不仅要有强大的技术支撑，更要有人文关怀。我致力于将复杂的AI技术转化为用户友好的产品体验，让技术真正服务于人。
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl">
            <CardContent className="p-6">
              <h4 className="font-semibold text-amber-900 mb-4">核心技能</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-amber-200/50 text-amber-900 border-amber-300/50">产品设计</Badge>
                <Badge className="bg-orange-200/50 text-orange-900 border-orange-300/50">AI产品</Badge>
                <Badge className="bg-rose-200/50 text-rose-900 border-rose-300/50">用户体验</Badge>
                <Badge className="bg-amber-200/50 text-amber-900 border-amber-300/50">数据分析</Badge>
                <Badge className="bg-orange-200/50 text-orange-900 border-orange-300/50">项目管理</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl">
            <CardContent className="p-6">
              <h4 className="font-semibold text-amber-900 mb-4">工作理念</h4>
              <blockquote className="text-amber-800/90 italic border-l-4 border-amber-300 pl-4">
                "用户至上，数据驱动，持续创新"
              </blockquote>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-200/30 to-orange-200/30 backdrop-blur-xl border border-white/40 shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-amber-900 mb-2">3+</div>
              <div className="text-sm text-amber-800/80">年产品经验</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ExperienceContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">工作经历</h2>
        <p className="text-lg text-amber-800/80">在AI产品领域的成长历程</p>
      </div>

      <Card className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-amber-900">腾讯产培生</h3>
              <p className="text-amber-800/80 text-lg">腾讯科技</p>
              <p className="text-amber-700/70 text-sm mt-1">2023 - 至今</p>
            </div>
            <Badge className="bg-green-200/50 text-green-900 border-green-300/50">在职</Badge>
          </div>

          <div className="space-y-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Top3协同工具AI产品
              </h4>
              <p className="text-amber-800/90 leading-relaxed">
                负责产品的核心功能设计与用户体验优化，通过AI技术提升协同效率，用户满意度提升35%
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                AI社交产品
              </h4>
              <p className="text-amber-800/90 leading-relaxed">
                主导AI社交产品的用户体验设计，创新性地将AI技术融入社交场景，提升用户粘性
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                AI工具产品
              </h4>
              <p className="text-amber-800/90 leading-relaxed">
                参与AI工具产品的全生命周期管理，从需求分析到产品上线，确保产品质量与用户体验
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function InterestsContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">兴趣爱好</h2>
        <p className="text-lg text-amber-800/80">工作之外的精彩生活</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-red-100/40 to-rose-200/40 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
              <Spade className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-amber-900">德州扑克</h3>
            <p className="text-amber-800/90 mb-6 leading-relaxed">
              热爱德州扑克，享受策略思考与心理博弈的乐趣。通过扑克锻炼逻辑思维和风险管理能力。
            </p>
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/50">
              <div className="text-4xl font-bold text-green-600 mb-2">$30,000+</div>
              <div className="text-amber-800/80">累计盈利</div>
              <div className="text-sm text-amber-700/70 mt-2">持续盈利3年+</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-100/40 to-indigo-200/40 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
              <Code className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-amber-900">Vibe Coding</h3>
            <p className="text-amber-800/90 mb-6 leading-relaxed">
              享受编程的乐趣，用代码表达创意和想法。在音乐中编程，让代码充满节奏感。
            </p>
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/50">
              <div className="text-amber-800/90 italic mb-2">"代码是另一种艺术表达方式"</div>
              <div className="flex justify-center space-x-2 mt-4">
                <Badge className="bg-blue-200/50 text-blue-900 border-blue-300/50">React</Badge>
                <Badge className="bg-purple-200/50 text-purple-900 border-purple-300/50">TypeScript</Badge>
                <Badge className="bg-green-200/50 text-green-900 border-green-300/50">Node.js</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ProjectsContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">个人项目</h2>
        <p className="text-lg text-amber-800/80">用心打造的作品集</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="aspect-video bg-gradient-to-br from-amber-200/50 to-orange-300/50 rounded-lg mb-4 flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform duration-300">
              <Code className="w-12 h-12 text-amber-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">AI协同工具</h3>
            <p className="text-amber-800/90 mb-4 leading-relaxed">
              基于AI的智能协同工具，提升团队工作效率，支持实时协作和智能推荐。
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <Badge className="bg-amber-200/50 text-amber-900 border-amber-300/50">React</Badge>
                <Badge className="bg-orange-200/50 text-orange-900 border-orange-300/50">AI</Badge>
              </div>
              <Button variant="ghost" size="sm" className="text-amber-800 hover:bg-white/20">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="aspect-video bg-gradient-to-br from-rose-200/50 to-pink-300/50 rounded-lg mb-4 flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform duration-300">
              <Code className="w-12 h-12 text-rose-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">智能社交平台</h3>
            <p className="text-amber-800/90 mb-4 leading-relaxed">
              融合AI技术的社交平台，智能匹配用户兴趣，创造更有意义的社交体验。
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <Badge className="bg-rose-200/50 text-rose-900 border-rose-300/50">Next.js</Badge>
                <Badge className="bg-pink-200/50 text-pink-900 border-pink-300/50">TypeScript</Badge>
              </div>
              <Button variant="ghost" size="sm" className="text-amber-800 hover:bg-white/20">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-amber-100/40 to-orange-100/40 backdrop-blur-xl border border-white/40 shadow-xl">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-amber-900">更多项目正在路上...</h3>
          <p className="text-amber-800/80 mb-6">持续探索AI产品的无限可能</p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">查看GitHub</Button>
        </CardContent>
      </Card>
    </div>
  )
}

function ContactContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">联系我</h2>
        <p className="text-lg text-amber-800/80">期待与你的交流合作</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-amber-900">联系方式</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <Mail className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-amber-900">Email</div>
                  <div className="text-amber-800/80">{"AaronPM.Sup@gmail.com"}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <Github className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-amber-900">Github</div>
                  <div className="text-amber-800/80">{"github.com/yourusername"}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <MessageSquare className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-amber-900">WeChat/Rednote</div>
                  <div className="text-amber-800/80">{"AgentiAYN (Agent is Always All You Need) "}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-amber-900">快速联系</h3>
            <div className="space-y-4">
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white justify-start">
                <Mail className="w-4 h-4 mr-3" />
                发送邮件
              </Button>
              <Button
                variant="outline"
                className="w-full border-amber-300 text-amber-900 hover:bg-amber-50 justify-start bg-transparent"
              >
                <Github className="w-4 h-4 mr-3" />
                查看GitHub
              </Button>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-amber-200/30 to-orange-200/30 backdrop-blur-sm rounded-lg border border-white/40">
              <h4 className="font-semibold text-amber-900 mb-2">合作意向</h4>
              <p className="text-amber-800/90 text-sm leading-relaxed">
                如果你对AI产品感兴趣，或者想要讨论产品设计、技术合作等话题，随时欢迎联系我！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
