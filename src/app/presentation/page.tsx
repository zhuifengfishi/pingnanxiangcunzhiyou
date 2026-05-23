'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Smartphone,
  Video,
  Database,
  Users,
  Car,
  ShoppingCart,
  TrendingUp,
  Leaf,
  Mountain,
  ChevronLeft,
  ChevronRight,
  Target,
  Lightbulb,
  BarChart3,
  Gift,
  CheckCircle2,
  Play,
  Heart,
  Zap
} from 'lucide-react';

export default function PresentationPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 12;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pages = [
    // 第1页：封面
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 text-center px-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur rounded-full text-lg mb-8">
              <Leaf className="w-5 h-5" />
              <span>屏南乡村数字化黑客松</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              屏南数字新农资
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-white/90">
              让游客流量，变成乡村生产力
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xl mb-12">
              <Badge variant="outline" className="px-6 py-3 text-lg border-white/50">
                手机变新农具
              </Badge>
              <span className="text-white/50">｜</span>
              <Badge variant="outline" className="px-6 py-3 text-lg border-white/50">
                直播变新农活
              </Badge>
              <span className="text-white/50">｜</span>
              <Badge variant="outline" className="px-6 py-3 text-lg border-white/50">
                数据变新农资
              </Badge>
            </div>
            
            <div className="text-white/70 text-lg">
              路演时间：5分钟 | 面向：游客·数据·带货文旅
            </div>
          </div>
          
          <div className="absolute bottom-8 right-8 text-white/50 text-sm">
            按 → 键或点击右侧继续
          </div>
        </div>
      )
    },

    // 第2页：问题背景
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white px-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-12">
              <Badge className="bg-red-100 text-red-700 mb-4">问题背景</Badge>
              <h2 className="text-5xl font-bold mb-6 text-gray-800">
                屏南柿子节的流量困局
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
                <CardContent className="pt-6 text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-orange-600" />
                  <p className="text-5xl font-bold text-orange-700 mb-2">3000+</p>
                  <p className="text-lg text-gray-600">单日游客峰值</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                <CardContent className="pt-6 text-center">
                  <Car className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <p className="text-5xl font-bold text-blue-700 mb-2">2000+</p>
                  <p className="text-lg text-gray-600">单日停车峰值</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
                <CardContent className="pt-6 text-center">
                  <Leaf className="w-16 h-16 mx-auto mb-4 text-green-600" />
                  <p className="text-3xl font-bold text-green-700 mb-2">2-3月</p>
                  <p className="text-lg text-gray-600">活动周期</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-700">核心痛点</h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                游客流量、停车数据、短视频传播数据、消费兴趣数据
              </p>
              <p className="text-2xl font-semibold text-red-700 mt-3">
                正在消散在网络里，没有沉淀成地方可用的生产资料
              </p>
            </div>
          </div>
        </div>
      )
    },

    // 第3页：核心洞察
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white px-8">
          <div className="max-w-5xl w-full text-center">
            <Badge className="bg-white/20 text-white mb-8">核心洞察</Badge>
            
            <h2 className="text-4xl font-bold mb-12">
              我们提出的三个新农资概念
            </h2>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 flex items-center gap-6">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-2">手机变新农具</h3>
                  <p className="text-xl text-white/80">
                    从拍照工具变成数据采集工具，每一次扫码都是数据沉淀
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 flex items-center gap-6">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Video className="w-10 h-10" />
                </div>
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-2">直播变新农活</h3>
                  <p className="text-xl text-white/80">
                    从田间劳作变成直播间带货，流量转化为订单和收入
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 flex items-center gap-6">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-10 h-10" />
                </div>
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-2">数据变新农资</h3>
                  <p className="text-xl text-white/80">
                    从流失的数字变成可沉淀的资产，驱动乡村精准运营
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第4页：解决方案架构
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white px-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-700 mb-4">解决方案</Badge>
              <h2 className="text-5xl font-bold mb-6 text-gray-800">
                三位一体的数字农资体系
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">数据采集层</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      扫码入园
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      游客画像记录
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      行为轨迹追踪
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      兴趣偏好分析
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-4">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">流量激活层</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                      AI直播脚本
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                      商品智能推荐
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                      短视频生成
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                      带货数据统计
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">资产沉淀层</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      热力分析
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      AI运营建议
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      流量预测
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      决策支持
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    },

    // 第5页：面向游客群体
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-white px-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-10">
              <Badge className="bg-green-100 text-green-700 mb-4">价值维度一</Badge>
              <h2 className="text-5xl font-bold mb-4 text-gray-800">
                面向游客群体
              </h2>
              <p className="text-xl text-gray-600">让每位游客都能获得个性化服务体验</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-2 border-green-200 shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">扫码即服务</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="font-semibold text-green-700 mb-2">智能推荐</p>
                      <p className="text-gray-600">根据游客兴趣，AI推荐古村路线、特产购买点、停车位置</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="font-semibold text-green-700 mb-2">一键导航</p>
                      <p className="text-gray-600">热门景点、提货点、洗手间位置精准导航</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-orange-200 shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">后备箱经济</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <p className="font-semibold text-orange-700 mb-2">顺路提货</p>
                      <p className="text-gray-600">离场路线设置提货点，不增加行程负担</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <p className="font-semibold text-orange-700 mb-2">智能清单</p>
                      <p className="text-gray-600">根据兴趣自动生成伴手礼清单，一键下单</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-100 to-orange-100 rounded-2xl p-6 text-center">
              <p className="text-xl text-gray-700">
                游客价值：<span className="font-bold text-green-700">体验升级</span> + 
                <span className="font-bold text-orange-700"> 购买便捷</span> + 
                <span className="font-bold text-blue-700"> 服务精准</span>
              </p>
            </div>
          </div>
        </div>
      )
    },

    // 第6页：面向数据分析
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white px-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-10">
              <Badge className="bg-white/20 text-white mb-4">价值维度二</Badge>
              <h2 className="text-5xl font-bold mb-4">
                面向数据分析
              </h2>
              <p className="text-xl text-blue-200">让数据成为乡村发展的决策依据</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold">实时数据大屏</h3>
                </div>
                <ul className="space-y-2 text-blue-100">
                  <li>• 游客流量实时监控</li>
                  <li>• 停车热力分布</li>
                  <li>• 直播观看数据</li>
                  <li>• 商品关注度排行</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-bold">AI智能分析</h3>
                </div>
                <ul className="space-y-2 text-blue-100">
                  <li>• 游客画像自动生成</li>
                  <li>• 高峰时段预测</li>
                  <li>• 运营策略建议</li>
                  <li>• 异常情况预警</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur rounded-2xl p-6 text-center">
              <p className="text-xl mb-3">数据分析的核心价值</p>
              <div className="flex justify-center gap-8">
                <div>
                  <p className="text-4xl font-bold text-cyan-400">决策</p>
                  <p className="text-blue-200">精准化</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-400">运营</p>
                  <p className="text-blue-200">智能化</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-purple-400">资产</p>
                  <p className="text-blue-200">沉淀化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第7页：面向带货文旅
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50 px-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-10">
              <Badge className="bg-orange-100 text-orange-700 mb-4">价值维度三</Badge>
              <h2 className="text-5xl font-bold mb-4 text-gray-800">
                面向带货与文旅融合
              </h2>
              <p className="text-xl text-gray-600">打通"看-播-买-带"全链路</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white border-2 border-purple-200 shadow-lg">
                <CardContent className="pt-6 text-center">
                  <Video className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="text-xl font-bold mb-2">直播赋能</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>AI生成直播脚本</li>
                    <li>农产品卖点提炼</li>
                    <li>互动话术推荐</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-orange-200 shadow-lg">
                <CardContent className="pt-6 text-center">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                  <h3 className="text-xl font-bold mb-2">商品推荐</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>游客兴趣匹配</li>
                    <li>热门商品排行</li>
                    <li>转化率优化</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-green-200 shadow-lg">
                <CardContent className="pt-6 text-center">
                  <Mountain className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-bold mb-2">文旅宣传</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>短视频内容生成</li>
                    <li>网红打卡点推荐</li>
                    <li>口碑传播追踪</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-purple-100 via-orange-100 to-green-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                完整的带货闭环
              </h3>
              <div className="flex items-center justify-center gap-4 text-lg">
                <div className="bg-white px-4 py-2 rounded-lg font-semibold text-purple-700">
                  游客看播
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
                <div className="bg-white px-4 py-2 rounded-lg font-semibold text-orange-700">
                  兴趣匹配
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
                <div className="bg-white px-4 py-2 rounded-lg font-semibold text-green-700">
                  下单购买
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
                <div className="bg-white px-4 py-2 rounded-lg font-semibold text-blue-700">
                  后备箱带走
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第8页：技术实现
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white px-8">
          <div className="max-w-5xl w-full">
            <div className="text-center mb-10">
              <Badge className="bg-purple-100 text-purple-700 mb-4">技术实现</Badge>
              <h2 className="text-5xl font-bold mb-4 text-gray-800">
                为什么1小时能跑起来？
              </h2>
              <p className="text-xl text-gray-600">Vibe Coding + AI辅助开发</p>
            </div>

            <div className="space-y-4">
              {[
                { time: '0-10分钟', task: 'AI生成前端页面', desc: '对话描述需求，AI生成完整UI' },
                { time: '10-20分钟', task: '接入游客行为模拟数据', desc: 'Mock数据驱动界面展示' },
                { time: '20-35分钟', task: '加入AI推荐逻辑', desc: '基于兴趣的智能推荐算法' },
                { time: '35-50分钟', task: '生成数据大屏', desc: 'Recharts图表可视化' },
                { time: '50-60分钟', task: '整理演示故事和路演', desc: '完善交互和演讲准备' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-white rounded-xl border-2 border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <Badge className="bg-purple-100 text-purple-700">{item.time}</Badge>
                      <span className="font-semibold text-gray-800">{item.task}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },

    // 第9页：实际效果Demo
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white px-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-8">
              <Badge className="bg-white/20 text-white mb-4">实际效果</Badge>
              <h2 className="text-5xl font-bold mb-4">
                Demo演示效果
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-green-400" />
                  游客端体验
                </h3>
                <div className="space-y-2 text-blue-100">
                  <p>✓ 扫码进入数字导览</p>
                  <p>✓ 5个场景智能推荐</p>
                  <p>✓ 后备箱清单一键加入</p>
                  <p>✓ 顺路提货点导航</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                  数据大屏
                </h3>
                <div className="space-y-2 text-blue-100">
                  <p>✓ 实时游客/停车数据</p>
                  <p>✓ 直播观看人数</p>
                  <p>✓ 热门商品/村庄排行</p>
                  <p>✓ 流量趋势图表</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6 text-orange-400" />
                  后备箱经济
                </h3>
                <div className="space-y-2 text-blue-100">
                  <p>✓ 6个屏南特产推荐</p>
                  <p>✓ 转化率数据展示</p>
                  <p>✓ 适合人群匹配</p>
                  <p>✓ 一键加入清单</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-purple-400" />
                  AI分析
                </h3>
                <div className="space-y-2 text-blue-100">
                  <p>✓ 智能运营建议生成</p>
                  <p>✓ 针对村集体/农户/政府</p>
                  <p>✓ 数据驱动决策支持</p>
                  <p>✓ 流量预测分析</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第10页：商业价值
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-orange-50 px-8">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-10">
              <Badge className="bg-green-100 text-green-700 mb-4">商业价值</Badge>
              <h2 className="text-5xl font-bold mb-4 text-gray-800">
                三方受益的共赢模式
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-2 border-green-200 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">游客</h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• 个性化服务体验</li>
                    <li>• 精准推荐节省时间</li>
                    <li>• 便捷购物提货</li>
                    <li>• 美好回忆留存</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-orange-200 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-10 h-10 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">商户农户</h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• 流量转化为订单</li>
                    <li>• AI赋能直播带货</li>
                    <li>• 库存精准准备</li>
                    <li>• 收入稳定增长</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-blue-200 shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">政府村集体</h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• 数据资产沉淀</li>
                    <li>• 精准运营决策</li>
                    <li>• 文旅品牌提升</li>
                    <li>• 乡村振兴赋能</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    },

    // 第11页：未来规划
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 text-white px-8">
          <div className="max-w-5xl w-full">
            <div className="text-center mb-10">
              <Badge className="bg-white/20 text-white mb-4">未来规划</Badge>
              <h2 className="text-5xl font-bold mb-4">
                可持续发展路径
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">技术迭代</h3>
                <ul className="space-y-2 text-purple-100">
                  <li>• 接入真实数据接口</li>
                  <li>• LLM大模型深度集成</li>
                  <li>• AR导览功能</li>
                  <li>• 实时语音助手</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <Target className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">应用拓展</h3>
                <ul className="space-y-2 text-purple-100">
                  <li>• 覆盖更多屏南村庄</li>
                  <li>• 模式复制到其他地区</li>
                  <li>• 四季活动持续运营</li>
                  <li>• 乡村数字资产交易</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <p className="text-xl mb-3">最终愿景</p>
              <p className="text-2xl font-bold text-green-400">
                打造全国乡村数字化标杆，让每个乡村都能沉淀自己的数字资产
              </p>
            </div>
          </div>
        </div>
      )
    },

    // 第12页：结束页
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 text-center px-8 max-w-4xl">
            <Heart className="w-20 h-20 mx-auto mb-8 text-red-400" />
            
            <h2 className="text-5xl font-bold mb-8">
              我们不是做一个平台<br />而是帮屏南留下游客数据
            </h2>

            <div className="space-y-4 mb-12 text-xl">
              <p className="text-white/90">
                游客来了，不只是热闹一次<br />
                而是沉淀为长期数字资产
              </p>
              <p className="text-white/90">
                数据不是报表，而是新时代的新农资
              </p>
              <p className="text-white/90">
                过去靠经验发展乡村<br />
                未来靠数据运营乡村
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-green-700 font-bold text-xl shadow-2xl">
              <Play className="w-6 h-6" />
              屏南数字新农资 Demo
            </div>
          </div>
          
          <div className="absolute bottom-8 text-white/50 text-sm">
            感谢聆听 | 期待合作
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative">
      {/* 页面内容 */}
      {pages[currentPage].content}

      {/* 导航控制 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur border-t border-gray-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            上一页
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentPage
                      ? 'w-8 bg-green-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {currentPage + 1} / {totalPages}
            </span>
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            下一页
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
