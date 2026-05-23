'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import {
  Smartphone,
  Video,
  Database,
  MapPin,
  ShoppingCart,
  Car,
  Gift,
  TrendingUp,
  Users,
  Leaf,
  Mountain,
  ChevronRight,
  Play,
  CheckCircle2,
  Lightbulb,
  Target,
  BarChart3
} from 'lucide-react';

// Mock数据
const mockData = {
  hero: {
    visitorPeak: 3000,
    parkingPeak: 2000,
    activityPeriod: '2-3个月',
    problem: '数据正在消散',
    goal: '沉淀乡村数字资产'
  },
  
  dashboard: {
    todayVisitors: 2860,
    todayParking: 1760,
    liveViewers: 12800,
    orders: 536,
    trunkList: 328,
    hotVillages: ['四坪村', '龙潭古镇', '漈下村'],
    hotProducts: ['柿子礼盒', '高山茶', '蜂蜜'],
    visitorSources: ['福州', '宁德', '泉州', '厦门', '温州']
  },
  
  productVisitors: [
    { name: '柿子礼盒', value: 856 },
    { name: '高山茶', value: 623 },
    { name: '农家蜂蜜', value: 512 },
    { name: '黄酒', value: 398 },
    { name: '非遗文创', value: 345 },
    { name: '柿子干', value: 287 }
  ],
  
  hourlyVisitors: [
    { hour: '08:00', visitors: 320 },
    { hour: '09:00', visitors: 580 },
    { hour: '10:00', visitors: 850 },
    { hour: '11:00', visitors: 1020 },
    { hour: '12:00', visitors: 980 },
    { hour: '13:00', visitors: 1100 },
    { hour: '14:00', visitors: 1350 },
    { hour: '15:00', visitors: 1520 },
    { hour: '16:00', visitors: 1680 },
    { hour: '17:00', visitors: 1420 },
    { hour: '18:00', visitors: 980 },
    { hour: '19:00', visitors: 650 }
  ],
  
  interestDistribution: [
    { name: '购买特产', value: 35, color: '#F97316' },
    { name: '游览古村', value: 28, color: '#10B981' },
    { name: '品尝美食', value: 20, color: '#06B6D4' },
    { name: '民宿体验', value: 12, color: '#8B5CF6' },
    { name: '非遗文化', value: 5, color: '#EC4899' }
  ]
};

// 推荐数据
const recommendations = {
  buy: {
    title: '屏南好物推荐',
    items: ['四坪柿子礼盒', '柿子干', '柿子文创', '顺路提货点']
  },
  village: {
    title: '古村游览推荐',
    items: ['古村半日游路线', '咖啡馆打卡点', '民宿推荐', '非遗体验']
  },
  parking: {
    title: '停车导航',
    items: ['四坪村停车场(剩余86位)', '龙潭停车场(剩余42位)', '临时停车区', '充电桩位置']
  },
  live: {
    title: '直播推荐',
    items: ['柿子采摘直播', '古村慢生活', '农家厨房', '非遗手作']
  },
  gift: {
    title: '伴手礼精选',
    items: ['高山茶礼盒', '农家蜂蜜', '屏南黄酒', '非遗竹编']
  }
};

// 商品数据
const products = [
  {
    id: 1,
    name: '屏南柿子礼盒',
    reason: '四坪村特产，口感软糯香甜',
    audience: '家庭游客、送礼人群',
    conversion: '32%'
  },
  {
    id: 2,
    name: '柿子干',
    reason: '自然晾晒，保留原味',
    audience: '养生人群、零食爱好者',
    conversion: '28%'
  },
  {
    id: 3,
    name: '高山茶',
    reason: '海拔800米云雾茶园',
    audience: '茶友、商务人群',
    conversion: '35%'
  },
  {
    id: 4,
    name: '农家蜂蜜',
    reason: '百花蜜，自然成熟',
    audience: '养生人群、家庭主妇',
    conversion: '24%'
  },
  {
    id: 5,
    name: '黄酒',
    reason: '古法酿造，醇香绵柔',
    audience: '酒友、传统美食爱好者',
    conversion: '22%'
  },
  {
    id: 6,
    name: '非遗文创',
    reason: '竹编工艺，手工制作',
    audience: '文艺青年、收藏爱好者',
    conversion: '18%'
  }
];

export default function Home() {
  const [activeRecommendation, setActiveRecommendation] = useState<'buy' | 'village' | 'parking' | 'live' | 'gift'>('buy');
  const [trunkItems, setTrunkItems] = useState<number[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const addToTrunk = (productId: number) => {
    if (!trunkItems.includes(productId)) {
      setTrunkItems([...trunkItems, productId]);
    }
  };

  const navItems = [
    { id: 'hero', label: '首页' },
    { id: 'modules', label: '核心模块' },
    { id: 'phone', label: '游客端' },
    { id: 'trunk', label: '后备箱' },
    { id: 'dashboard', label: '数据大屏' },
    { id: 'ai', label: 'AI分析' },
    { id: 'path', label: '实现路径' },
    { id: 'summary', label: '价值总结' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              <span className="font-bold text-lg">屏南数字新农资</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-orange-600 font-semibold'
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero区块 */}
      <section id="hero" className="min-h-screen pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
          {/* 主标题 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-6">
              <Mountain className="w-4 h-4" />
              <span>屏南乡村数字化黑客松 Demo</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-600 via-green-700 to-orange-600 bg-clip-text text-transparent">
              屏南数字新农资
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              让游客流量，变成乡村生产力
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg">
              <Badge variant="outline" className="px-4 py-2 text-base border-green-600 text-green-700">
                手机变新农具
              </Badge>
              <span className="text-gray-400">｜</span>
              <Badge variant="outline" className="px-4 py-2 text-base border-orange-600 text-orange-700">
                直播变新农活
              </Badge>
              <span className="text-gray-400">｜</span>
              <Badge variant="outline" className="px-4 py-2 text-base border-blue-600 text-blue-700">
                数据变新农资
              </Badge>
            </div>
          </div>

          {/* 数据卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl mb-12">
            <Card className="bg-white/60 backdrop-blur border-2 border-green-200 hover:border-green-400 transition-all">
              <CardContent className="pt-4 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-3xl font-bold text-green-700">{mockData.hero.visitorPeak}</p>
                <p className="text-sm text-gray-600">游客峰值(人/天)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 backdrop-blur border-2 border-orange-200 hover:border-orange-400 transition-all">
              <CardContent className="pt-4 text-center">
                <Car className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <p className="text-3xl font-bold text-orange-700">{mockData.hero.parkingPeak}</p>
                <p className="text-sm text-gray-600">停车峰值(辆/天)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 backdrop-blur border-2 border-cyan-200 hover:border-cyan-400 transition-all">
              <CardContent className="pt-4 text-center">
                <Leaf className="w-8 h-8 mx-auto mb-2 text-cyan-600" />
                <p className="text-2xl font-bold text-cyan-700">{mockData.hero.activityPeriod}</p>
                <p className="text-sm text-gray-600">活动周期</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 backdrop-blur border-2 border-red-200 hover:border-red-400 transition-all">
              <CardContent className="pt-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <p className="text-base font-semibold text-red-700">数据消散</p>
                <p className="text-sm text-gray-600">当前问题</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 backdrop-blur border-2 border-blue-200 hover:border-blue-400 transition-all col-span-2 md:col-span-1">
              <CardContent className="pt-4 text-center">
                <Database className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-base font-semibold text-blue-700">沉淀资产</p>
                <p className="text-sm text-gray-600">项目目标</p>
              </CardContent>
            </Card>
          </div>

          {/* 向下箭头 */}
          <button 
            onClick={() => scrollToSection('modules')}
            className="animate-bounce text-green-600"
          >
            <ChevronRight className="w-10 h-10 rotate-90" />
          </button>
        </div>
      </section>

      {/* 三大核心模块 */}
      <section id="modules" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">三大核心模块</h2>
            <p className="text-lg text-gray-600">让数据成为乡村发展的新农资</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 模块一 */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-green-700">手机变新农具</CardTitle>
                <CardDescription className="text-base">
                  游客扫码进入屏南数字导览页面，手机不只是拍照工具，也成为乡村数据采集入口。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['扫码入园', '游客来源记录', '游玩路线记录', '商品兴趣记录', '活动反馈收集'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 模块二 */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Video className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-orange-700">直播变新农活</CardTitle>
                <CardDescription className="text-base">
                  村民、商户、合作社通过直播展示柿子节、古村、农产品和乡村生活，把流量转化为订单。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['AI 直播脚本生成', '农产品卖点提炼', '直播间商品推荐', '短视频内容生成', '村播数据统计'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 模块三 */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-700">数据变新农资</CardTitle>
                <CardDescription className="text-base">
                  游客流量、停车、浏览、购买、直播互动等数据被沉淀下来，成为乡村发展的新型生产资料。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['游客画像', '热门村庄分析', '热门产品分析', '后备箱经济推荐', '活动流量预测'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 游客手机端模拟 */}
      <section id="phone" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">游客手机端模拟</h2>
            <p className="text-lg text-gray-600">扫码进入，开启数字乡村之旅</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* 手机模拟 */}
            <div className="flex justify-center">
              <div className="w-80 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* 手机顶部 */}
                  <div className="h-8 bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">
                    <div className="w-20 h-1 bg-white/30 rounded-full" />
                  </div>
                  
                  {/* 手机内容 */}
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <Mountain className="w-12 h-12 mx-auto mb-3 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-800">欢迎来到屏南柿子节</h3>
                      <p className="text-sm text-gray-500 mt-1">选择您感兴趣的内容</p>
                    </div>
                    
                    <div className="space-y-3">
                      <Button
                        onClick={() => setActiveRecommendation('village')}
                        className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-700 border border-green-200"
                        variant="outline"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        我想逛古村
                      </Button>
                      
                      <Button
                        onClick={() => setActiveRecommendation('buy')}
                        className="w-full justify-start bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200"
                        variant="outline"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        我想买柿子
                      </Button>
                      
                      <Button
                        onClick={() => setActiveRecommendation('parking')}
                        className="w-full justify-start bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
                        variant="outline"
                      >
                        <Car className="w-4 h-4 mr-2" />
                        我想找停车
                      </Button>
                      
                      <Button
                        onClick={() => setActiveRecommendation('live')}
                        className="w-full justify-start bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200"
                        variant="outline"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        我想看直播
                      </Button>
                      
                      <Button
                        onClick={() => setActiveRecommendation('gift')}
                        className="w-full justify-start bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200"
                        variant="outline"
                      >
                        <Gift className="w-4 h-4 mr-2" />
                        我想带点伴手礼
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 推荐结果 */}
            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-orange-600" />
                  {recommendations[activeRecommendation].title}
                </CardTitle>
                <CardDescription>基于您的选择，AI 为您智能推荐</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations[activeRecommendation].items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-400 transition-all cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="flex-1 font-medium">{item}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 后备箱经济 */}
      <section id="trunk" className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">后备箱经济推荐系统</h2>
            <p className="text-lg text-gray-600">把游客流量变成购买力</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <Card key={product.id} className="bg-white border-2 border-orange-100 hover:border-orange-400 hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-orange-600" />
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-700">推荐理由：</span>
                    <span className="text-gray-600">{product.reason}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-700">适合人群：</span>
                    <span className="text-gray-600">{product.audience}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">转化率 {product.conversion}</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addToTrunk(product.id)}
                      disabled={trunkItems.includes(product.id)}
                      className={
                        trunkItems.includes(product.id)
                          ? 'bg-green-600 hover:bg-green-600'
                          : 'bg-orange-600 hover:bg-orange-700'
                      }
                    >
                      {trunkItems.includes(product.id) ? '已加入' : '加入后备箱'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {trunkItems.length > 0 && (
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-full">
                <CheckCircle2 className="w-5 h-5" />
                <span>
                  已加入 {trunkItems.length} 个商品到后备箱清单，离开屏南前可顺路提货
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 数据大屏 */}
      <section id="dashboard" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">屏南乡村数据大屏</h2>
            <p className="text-lg text-blue-200">实时数据，驱动决策</p>
          </div>

          {/* 数据卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[
              { label: '今日游客数', value: mockData.dashboard.todayVisitors, icon: Users, color: 'green' },
              { label: '今日停车数', value: mockData.dashboard.todayParking, icon: Car, color: 'orange' },
              { label: '直播观看人数', value: mockData.dashboard.liveViewers, icon: Video, color: 'purple' },
              { label: '农产品意向订单', value: mockData.dashboard.orders, icon: ShoppingCart, color: 'cyan' },
              { label: '后备箱清单', value: mockData.dashboard.trunkList, icon: Gift, color: 'pink' }
            ].map((item, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur border border-white/20">
                <CardContent className="pt-4 text-center">
                  <item.icon className={`w-8 h-8 mx-auto mb-2 text-${item.color}-400`} />
                  <p className="text-3xl font-bold text-white">{item.value.toLocaleString()}</p>
                  <p className="text-sm text-blue-200">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 热门分析 */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-white/10 backdrop-blur border border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">热门村庄</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockData.dashboard.hotVillages.map((v, i) => (
                    <div key={i} className="flex items-center gap-2 text-white">
                      <Badge className="bg-green-600">{i + 1}</Badge>
                      {v}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">热门商品</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockData.dashboard.hotProducts.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-white">
                      <Badge className="bg-orange-600">{i + 1}</Badge>
                      {p}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">游客来源</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockData.dashboard.visitorSources.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-white">
                      <Badge className="bg-blue-600">{i + 1}</Badge>
                      {s}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 图表 */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* 柱状图 */}
            <Card className="bg-white/10 backdrop-blur border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">热门商品关注度</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={mockData.productVisitors}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="name" tick={{ fill: '#ffffff', fontSize: 10 }} />
                    <YAxis tick={{ fill: '#ffffff', fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e3a8a', border: 'none' }}
                      labelStyle={{ color: '#ffffff' }}
                    />
                    <Bar dataKey="value" fill="#F97316" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* 折线图 */}
            <Card className="bg-white/10 backdrop-blur border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">今日游客流量</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={mockData.hourlyVisitors}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="hour" tick={{ fill: '#ffffff', fontSize: 10 }} />
                    <YAxis tick={{ fill: '#ffffff', fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e3a8a', border: 'none' }}
                      labelStyle={{ color: '#ffffff' }}
                    />
                    <Line type="monotone" dataKey="visitors" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981' }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* 饼图 */}
            <Card className="bg-white/10 backdrop-blur border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">游客兴趣分布</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={mockData.interestDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {mockData.interestDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e3a8a', border: 'none' }}
                      labelStyle={{ color: '#ffffff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI分析报告 */}
      <section id="ai" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 自动生成屏南运营建议</h2>
            <p className="text-lg text-gray-600">数据驱动，精准决策</p>
          </div>

          {/* AI分析内容 */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 border-2 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div className="text-gray-700 leading-relaxed">
                  根据今日游客数据，四坪村游客热度最高，柿子礼盒和高山茶关注度较高。
                  建议在下午 <span className="font-semibold text-orange-600">15:00-17:00</span> 加强停车引导，
                  并在离场路线设置后备箱经济提货点。直播内容建议重点展示
                  <span className="font-semibold text-green-600">柿子采摘、古村慢生活</span>和
                  <span className="font-semibold text-blue-600">农家伴手礼</span>，
                  提高游客离开前的购买转化。
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 建议卡片 */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-2 border-green-200 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>对村集体</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  根据游客热力，优化停车、厕所、摊位和志愿者布点，提升游客体验，增加二次消费机会。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-orange-200 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-3">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>对农户商家</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  根据游客兴趣，提前准备高频伴手礼产品，优化库存，避免缺货，提高转化率。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-blue-200 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle>对政府运营方</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  把每次活动数据沉淀为下一次活动的决策依据，形成数字资产闭环，持续优化运营策略。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 价值总结 */}
      <section id="summary" className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            我们不是做一个平台，而是帮屏南留下游客数据
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl text-white/90 leading-relaxed">
              游客来了，不只是热闹一次，而是沉淀为长期数字资产
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              数据不是报表，而是新时代的新农资
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              过去靠经验发展乡村，未来靠数据运营乡村
            </p>
          </div>

          <Button
            onClick={() => setShowDialog(true)}
            size="lg"
            className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl"
          >
            <Play className="w-5 h-5 mr-2" />
            启动屏南数字新农资 Demo
          </Button>
        </div>
      </section>

      {/* 弹窗 */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="w-6 h-6" />
              Demo 已启动
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              屏南数字新农资 Demo 已启动：
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              手机采集数据，直播激活流量，数据反哺产业，
              最终形成<span className="font-semibold text-green-700">乡村数字资产闭环</span>。
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
