'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Home,
  MapPin,
  ShoppingCart,
  User,
  Search,
  Video,
  Gift,
  Car,
  Leaf,
  Mountain,
  ChevronRight,
  ChevronLeft,
  Phone,
  Clock,
  Star,
  Navigation,
  Heart,
  Share2,
  QrCode,
  Camera,
  MessageCircle,
  Bell,
  Settings,
  HelpCircle,
  Wallet,
  Package,
  TrendingUp,
  Award,
  CheckCircle2
} from 'lucide-react';

export default function MiniProgramPage() {
  const [activeTab, setActiveTab] = useState<'home' | 'guide' | 'shop' | 'mine'>('home');
  const [showSearch, setShowSearch] = useState(false);
  const [selectedVillage, setSelectedVillage] = useState<'longtan' | 'siping'>('longtan');
  const [trunkItems, setTrunkItems] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Mock数据
  const bannerData = [
    { id: 1, title: '屏南柿子节', subtitle: '盛夏避暑·柿子飘香', color: 'from-orange-500 to-red-500' },
    { id: 2, title: '龙潭古镇', subtitle: '千年古村·慢享时光', color: 'from-green-600 to-teal-600' },
    { id: 3, title: '四平村', subtitle: '柿子之乡·生态田园', color: 'from-blue-500 to-cyan-500' }
  ];

  const quickActions = [
    { icon: Mountain, label: '逛古村', color: 'bg-green-500', action: 'guide' },
    { icon: Leaf, label: '买柿子', color: 'bg-orange-500', action: 'shop' },
    { icon: Car, label: '找停车', color: 'bg-blue-500', action: 'parking' },
    { icon: Video, label: '看直播', color: 'bg-purple-500', action: 'live' },
    { icon: Gift, label: '伴手礼', color: 'bg-pink-500', action: 'gift' }
  ];

  const hotSpots = [
    {
      id: 1,
      name: '龙潭古镇',
      village: 'longtan',
      image: '🏞️',
      rating: 4.9,
      visitors: '2.8万',
      distance: '1.2km',
      tags: ['千年古村', '青瓦建筑', '慢生活'],
      description: '古韵悠长的明清建筑群，青瓦白墙间的慢时光'
    },
    {
      id: 2,
      name: '四平村',
      village: 'siping',
      image: '🍅',
      rating: 4.8,
      visitors: '3.2万',
      distance: '2.5km',
      tags: ['柿子之乡', '生态田园', '采摘体验'],
      description: '屏南柿子主产区，体验采摘乐趣'
    },
    {
      id: 3,
      name: '漈下村',
      village: 'jixia',
      image: '💧',
      rating: 4.7,
      visitors: '1.5万',
      distance: '3.8km',
      tags: ['古村落', '瀑布景观', '清凉避暑'],
      description: '古村与瀑布相映成趣的清凉胜地'
    }
  ];

  const products = [
    { id: 1, name: '屏南柿子礼盒', price: 98, originalPrice: 128, image: '🎁', sales: 856, tag: '爆款' },
    { id: 2, name: '高山云雾茶', price: 168, originalPrice: 198, image: '🍵', sales: 623, tag: '特产' },
    { id: 3, name: '农家百花蜜', price: 88, originalPrice: 108, image: '🍯', sales: 512, tag: '养生' },
    { id: 4, name: '屏南老黄酒', price: 78, originalPrice: 98, image: '🍶', sales: 398, tag: '非遗' }
  ];

  const liveStreams = [
    { id: 1, title: '龙潭古村慢生活', viewers: 3200, host: '村播小王', image: '📺' },
    { id: 2, title: '柿子采摘现场', viewers: 2800, host: '农户李姐', image: '🎥' },
    { id: 3, title: '农家厨房做饭', viewers: 1900, host: '农家张婶', image: '🍳' }
  ];

  const addToTrunk = (productId: number, productName: string) => {
    if (!trunkItems.includes(productId)) {
      setTrunkItems([...trunkItems, productId]);
      setSuccessMessage(`${productName} 已加入后备箱清单`);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  // 首页内容
  const renderHome = () => (
    <div className="pb-20">
      {/* 顶部搜索栏 */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <div 
              className="flex-1 flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-full"
              onClick={() => setShowSearch(true)}
            >
              <Search className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">搜索景点、商品、活动...</span>
            </div>
            <Bell className="w-5 h-5 text-gray-600" />
            <QrCode className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>

      {/* 轮播图 */}
      <div className="px-4 py-3">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <div className={`h-48 bg-gradient-to-r ${bannerData[0].color} flex items-center justify-center`}>
            <div className="text-center text-white">
              <div className="text-5xl mb-2">{selectedVillage === 'longtan' ? '🏞️' : '🍅'}</div>
              <h2 className="text-2xl font-bold mb-1">{bannerData[selectedVillage === 'longtan' ? 0 : 1].title}</h2>
              <p className="text-white/90">{bannerData[selectedVillage === 'longtan' ? 0 : 1].subtitle}</p>
            </div>
          </div>
          {/* 切换按钮 */}
          <button
            onClick={() => setSelectedVillage('longtan')}
            className={`absolute left-4 bottom-4 px-4 py-1.5 rounded-full text-sm ${
              selectedVillage === 'longtan' ? 'bg-white text-green-700' : 'bg-white/30 text-white'
            }`}
          >
            龙潭古镇
          </button>
          <button
            onClick={() => setSelectedVillage('siping')}
            className={`absolute right-4 bottom-4 px-4 py-1.5 rounded-full text-sm ${
              selectedVillage === 'siping' ? 'bg-white text-orange-700' : 'bg-white/30 text-white'
            }`}
          >
            四平村
          </button>
        </div>
      </div>

      {/* 快捷入口 */}
      <div className="px-4 py-2">
        <div className="flex justify-around">
          {quickActions.map((action, i) => (
            <button key={i} className="flex flex-col items-center gap-1.5">
              <div className={`w-12 h-12 ${action.color} rounded-2xl flex items-center justify-center shadow-md`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AI智能推荐 */}
      <div className="px-4 py-3">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">AI智能推荐</span>
          </div>
          <p className="text-sm text-white/90 mb-3">
            根据您的位置和兴趣，为您推荐最佳游览路线
          </p>
          <Button size="sm" className="bg-white text-purple-700 hover:bg-gray-100">
            立即体验
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* 热门景点 */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">🔥 热门景点</h3>
          <button className="text-sm text-gray-500 flex items-center gap-1">
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-3">
          {hotSpots.map(spot => (
            <Card key={spot.id} className="overflow-hidden border border-gray-100 shadow-sm">
              <CardContent className="p-3 flex gap-3">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
                  {spot.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-semibold text-gray-800">{spot.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-orange-600">
                      <Star className="w-3 h-3 fill-current" />
                      {spot.rating}
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {spot.tags.slice(0, 2).map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-1">{spot.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>👥 {spot.visitors}</span>
                      <span>📍 {spot.distance}</span>
                    </div>
                    <Button size="sm" className="h-7 text-xs bg-green-600 hover:bg-green-700">
                      <Navigation className="w-3 h-3 mr-1" />
                      导航
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 正在直播 */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">📺 正在直播</h3>
          <button className="text-sm text-gray-500 flex items-center gap-1">
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2">
          {liveStreams.map(live => (
            <Card key={live.id} className="min-w-[160px] border border-gray-100 shadow-sm">
              <CardContent className="p-2">
                <div className="h-28 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-4xl mb-2 relative">
                  {live.image}
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 rounded-full text-xs text-white flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    直播中
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{live.title}</h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-500">{live.host}</span>
                  <span className="text-xs text-red-600">🔥 {live.viewers}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 乡村好物推荐 */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">🛍️ 乡村好物</h3>
          <button className="text-sm text-gray-500 flex items-center gap-1">
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {products.map(product => (
            <Card key={product.id} className="border border-gray-100 shadow-sm">
              <CardContent className="p-2">
                <div className="h-32 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center text-5xl mb-2 relative">
                  {product.image}
                  {product.tag && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-orange-500 rounded text-xs text-white">
                      {product.tag}
                    </div>
                  )}
                </div>
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{product.name}</h4>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-lg font-bold text-orange-600">¥{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">¥{product.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">已售 {product.sales}</span>
                  <Button
                    size="sm"
                    className="h-7 text-xs bg-orange-600 hover:bg-orange-700"
                    onClick={() => addToTrunk(product.id, product.name)}
                  >
                    加入清单
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 后备箱清单入口 */}
      {trunkItems.length > 0 && (
        <div className="fixed bottom-24 right-4 z-20">
          <button className="w-14 h-14 bg-orange-600 rounded-full shadow-xl flex items-center justify-center relative">
            <Gift className="w-6 h-6 text-white" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              {trunkItems.length}
            </div>
          </button>
        </div>
      )}
    </div>
  );

  // 导览页
  const renderGuide = () => (
    <div className="pb-20">
      {/* 顶部 */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-6">
        <h2 className="text-xl font-bold mb-2">🗺️ 智能导览</h2>
        <p className="text-sm text-white/80">AI为您规划最佳游览路线</p>
      </div>

      {/* 地图区域 */}
      <div className="px-4 py-4">
        <div className="h-64 bg-gradient-to-br from-green-100 via-blue-50 to-orange-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-green-600 mx-auto mb-3" />
            <p className="text-gray-600">屏南乡村旅游地图</p>
          </div>
          {/* 标记点 */}
          <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
            🍅
          </div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
            🏞️
          </div>
          <div className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
            💧
          </div>
        </div>
      </div>

      {/* 推荐路线 */}
      <div className="px-4 py-2">
        <h3 className="text-lg font-bold mb-3">📍 推荐路线</h3>
        
        <div className="space-y-3">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">古村半日游</h4>
                  <p className="text-xs text-gray-500">龙潭古镇 → 四平村 → 漈下村</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">时长: 3-4小时</Badge>
                <Badge variant="outline" className="text-xs">距离: 8.5km</Badge>
                <Badge variant="outline" className="text-xs">适合: 文化爱好者</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-100">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">柿子采摘体验</h4>
                  <p className="text-xs text-gray-500">四平村柿子园 → 农家午餐 → 伴手礼选购</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">时长: 2-3小时</Badge>
                <Badge variant="outline" className="text-xs">距离: 5km</Badge>
                <Badge variant="outline" className="text-xs">适合: 家庭游客</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 语音导览 */}
      <div className="px-4 py-3">
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">AI语音导览</h4>
                <p className="text-sm text-gray-600">走到哪讲到哪，边走边听</p>
              </div>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                开启
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 商城页
  const renderShop = () => (
    <div className="pb-20">
      {/* 顶部 */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-6">
        <h2 className="text-xl font-bold mb-2">🛒 后备箱经济</h2>
        <p className="text-sm text-white/80">带走屏南的味道与记忆</p>
      </div>

      {/* 分类 */}
      <div className="px-4 py-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['全部', '柿子系列', '茶叶', '蜂蜜', '酒类', '非遗文创'].map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                i === 0 ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 商品列表 */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-2 gap-3">
          {[
            ...products,
            { id: 5, name: '柿子干', price: 38, originalPrice: 48, image: '🥭', sales: 287, tag: '特产' },
            { id: 6, name: '非遗竹编', price: 128, originalPrice: 158, image: '🧺', sales: 156, tag: '非遗' }
          ].map(product => (
            <Card key={product.id} className="border border-gray-100 shadow-sm">
              <CardContent className="p-2">
                <div className="h-36 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center text-5xl mb-2 relative">
                  {product.image}
                  {product.tag && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 rounded text-xs text-white">
                      {product.tag}
                    </div>
                  )}
                </div>
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{product.name}</h4>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-lg font-bold text-orange-600">¥{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">¥{product.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">已售 {product.sales}</span>
                  <Button
                    size="sm"
                    className={`h-7 text-xs ${trunkItems.includes(product.id) ? 'bg-green-600' : 'bg-orange-600 hover:bg-orange-700'}`}
                    onClick={() => addToTrunk(product.id, product.name)}
                    disabled={trunkItems.includes(product.id)}
                  >
                    {trunkItems.includes(product.id) ? '已加入' : '加入清单'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 提货点 */}
      <div className="px-4 py-3">
        <Card className="bg-blue-50 border border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h4 className="font-semibold">顺路提货点</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">📍 四平村游客中心</span>
                <span className="text-blue-600">距您 500m</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">📍 龙潭古镇停车场</span>
                <span className="text-blue-600">距您 1.2km</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 我的页
  const renderMine = () => (
    <div className="pb-20">
      {/* 用户信息 */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
            😊
          </div>
          <div>
            <h2 className="text-xl font-bold">屏南游客</h2>
            <p className="text-sm text-white/80">欢迎来到柿子节</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div>
            <p className="text-2xl font-bold">{trunkItems.length}</p>
            <p className="text-xs text-white/80">后备箱清单</p>
          </div>
          <div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-white/80">打卡景点</p>
          </div>
          <div>
            <p className="text-2xl font-bold">1</p>
            <p className="text-xs text-white/80">优惠券</p>
          </div>
        </div>
      </div>

      {/* 功能列表 */}
      <div className="px-4 py-4">
        <Card className="border border-gray-100">
          <CardContent className="p-0">
            {[
              { icon: Package, label: '后备箱清单', value: trunkItems.length, color: 'text-orange-600' },
              { icon: Wallet, label: '我的订单', color: 'text-blue-600' },
              { icon: Heart, label: '我的收藏', color: 'text-pink-600' },
              { icon: Award, label: '打卡记录', color: 'text-green-600' },
              { icon: TrendingUp, label: '浏览历史', color: 'text-purple-600' },
              { icon: Bell, label: '消息通知', color: 'text-red-600' },
              { icon: HelpCircle, label: '帮助中心', color: 'text-gray-600' },
              { icon: Settings, label: '设置', color: 'text-gray-600' }
            ].map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center justify-between px-4 py-3.5 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-gray-700">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.value !== undefined && (
                    <span className="text-sm text-orange-600">{item.value}</span>
                  )}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 联系客服 */}
      <div className="px-4 py-3">
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <h4 className="font-semibold text-sm">游客服务热线</h4>
                  <p className="text-xs text-gray-500">400-888-XXXX</p>
                </div>
              </div>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                拨打
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      {/* 小程序状态栏 */}
      <div className="bg-white h-6 flex items-center justify-center text-xs text-gray-500">
        <Clock className="w-3 h-3 mr-1" />
        {new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
      </div>

      {/* 主内容区 */}
      <div className="bg-white">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'guide' && renderGuide()}
        {activeTab === 'shop' && renderShop()}
        {activeTab === 'mine' && renderMine()}
      </div>

      {/* 底部TabBar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
        <div className="flex">
          {[
            { id: 'home', icon: Home, label: '首页' },
            { id: 'guide', icon: MapPin, label: '导览' },
            { id: 'shop', icon: ShoppingCart, label: '商城' },
            { id: 'mine', icon: User, label: '我的' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 flex flex-col items-center py-2 ${
                activeTab === tab.id ? 'text-green-600' : 'text-gray-500'
              }`}
            >
              <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'text-green-600' : 'text-gray-400'}`} />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 成功提示 */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-xs">
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-700">{successMessage}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
