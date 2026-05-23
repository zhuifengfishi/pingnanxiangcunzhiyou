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
  Phone,
  Clock,
  Star,
  Navigation,
  Heart,
  QrCode,
  Camera,
  MessageCircle,
  Bell,
  Settings,
  HelpCircle,
  Package,
  Calendar,
  Ticket,
  Bookmark,
  CheckCircle2,
  X
} from 'lucide-react';

export default function MiniProgramPage() {
  const [activeTab, setActiveTab] = useState<'home' | 'guide' | 'shop' | 'mine'>('home');
  const [trunkItems, setTrunkItems] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showProductDetail, setShowProductDetail] = useState(false);

  // 屏南8大特色村庄
  const villages = [
    {
      id: 1,
      name: '厦地村',
      tagline: '文艺顶流',
      icon: '📚',
      color: 'from-purple-500 to-pink-500',
      tags: ['水田书店', '稻田美学', '文艺打卡'],
      highlights: '先锋厦地水田书店全国地标',
      distance: '15km',
      visitors: '6万+',
      rating: 4.9,
      features: ['陶艺体验', '植物染坊', '稻田研学', '摄影基地']
    },
    {
      id: 2,
      name: '北墘村',
      tagline: '黄酒之乡',
      icon: '🍶',
      color: 'from-amber-500 to-orange-500',
      tags: ['黄酒非遗', '酒旅融合', '闽东样板'],
      highlights: '中国红粬黄酒第一村',
      distance: '18km',
      visitors: '5万+',
      rating: 4.8,
      features: ['古法酿酒', '封坛定制', '黄酒品鉴', '乡宴体验']
    },
    {
      id: 3,
      name: '漈下村',
      tagline: '武侠福地',
      icon: '⚔️',
      color: 'from-red-500 to-rose-500',
      tags: ['武侠文化', '福文化', '甘国宝'],
      highlights: '清代名将甘国宝故乡',
      distance: '3.8km',
      visitors: '3.5万+',
      rating: 4.7,
      features: ['武术表演', '古村市集', '夜游灯光', '廊桥打卡']
    },
    {
      id: 4,
      name: '双溪古镇',
      tagline: '千年古县',
      icon: '🏛️',
      color: 'from-blue-500 to-indigo-500',
      tags: ['文庙古建', '朱子文化', '汉服研学'],
      highlights: '屏南老县城，文庙城隍庙完整',
      distance: '20km',
      visitors: '63.5万+',
      rating: 4.9,
      features: ['汉服体验', '开笔礼', '古建打卡', '露天影院']
    },
    {
      id: 5,
      name: '漈头村',
      tagline: '3A景区',
      icon: '🌸',
      color: 'from-green-500 to-teal-500',
      tags: ['耕读文化', '科举文化', '县城近郊'],
      highlights: '屏南好漈头，交通最优',
      distance: '5km',
      visitors: '8万+',
      rating: 4.8,
      features: ['古厝集群', '西洋建筑', '非遗展馆', '短途研学']
    },
    {
      id: 6,
      name: '巴地村',
      tagline: '畲族风情',
      icon: '🔥',
      color: 'from-orange-500 to-red-500',
      tags: ['畲族非遗', '火凤凰', '民族村寨'],
      highlights: '省级非遗畲族火凤凰习俗',
      distance: '4km',
      visitors: '2万+',
      rating: 4.6,
      features: ['火凤凰演出', '畲族服饰', '民俗演艺', '民族美食']
    },
    {
      id: 7,
      name: '小梨洋村',
      tagline: '国风武侠',
      icon: '🎋',
      color: 'from-cyan-500 to-blue-500',
      tags: ['廉政文化', '亲子研学', '国风汉服'],
      highlights: '甘国宝出生地，廉政家风文化',
      distance: '4.5km',
      visitors: '2.5万+',
      rating: 4.7,
      features: ['国风市集', '亲子拓展', '侠客体验', '汉服打卡']
    },
    {
      id: 8,
      name: '白玉村',
      tagline: '花样田园',
      icon: '🌻',
      color: 'from-yellow-400 to-orange-500',
      tags: ['花海田园', '露营基地', '四季花景'],
      highlights: '油菜花海、樱花大道、稻田公社',
      distance: '25km',
      visitors: '4万+',
      rating: 4.7,
      features: ['花海打卡', '露营野餐', '农事体验', '亲子游玩']
    }
  ];

  // 四坪村（柿子之乡）
  const sipingVillage = {
    id: 9,
    name: '四坪村',
    tagline: '柿子之乡',
    icon: '🍅',
    color: 'from-orange-500 to-red-500',
    tags: ['柿子主产区', '采摘体验', '生态田园'],
    highlights: '屏南柿子节核心产区',
    distance: '2.5km',
    visitors: '3.2万+',
    rating: 4.8,
    features: ['柿子采摘', '柿饼制作', '果园研学', '农家美食']
  };

  // 龙潭古镇
  const longtanVillage = {
    id: 10,
    name: '龙潭古镇',
    tagline: '千年古村',
    icon: '🏞️',
    color: 'from-green-600 to-teal-600',
    tags: ['明清古建', '青瓦白墙', '慢享时光'],
    highlights: '800年明清古村，青瓦建筑群',
    distance: '1.2km',
    visitors: '2.8万+',
    rating: 4.9,
    features: ['古村漫步', '非遗体验', '民宿咖啡', '文创市集']
  };

  // 快捷功能入口
  const quickActions = [
    { icon: MapPin, label: '导览地图', color: 'bg-blue-500' },
    { icon: Camera, label: '景点打卡', color: 'bg-green-500' },
    { icon: Ticket, label: '优惠券', color: 'bg-orange-500' },
    { icon: Calendar, label: '活动日历', color: 'bg-purple-500' },
    { icon: Video, label: '正在直播', color: 'bg-pink-500' },
    { icon: Car, label: '智慧停车', color: 'bg-cyan-500' },
    { icon: MessageCircle, label: '语音导览', color: 'bg-indigo-500' },
    { icon: Leaf, label: '买柿子', color: 'bg-red-500' }
  ];

  // 特色体验分类
  const experiences = [
    {
      category: '🧘 文艺打卡',
      items: [
        { name: '水田书店打卡', location: '厦地村', price: '免费', tag: '网红' },
        { name: '陶艺体验工坊', location: '厦地村', price: '¥98', tag: '推荐' },
        { name: '植物染坊体验', location: '厦地村', price: '¥128', tag: '非遗' }
      ]
    },
    {
      category: '🍶 黄酒文化',
      items: [
        { name: '古法酿酒体验', location: '北墘村', price: '¥168', tag: '非遗' },
        { name: '黄酒品鉴会', location: '北墘村', price: '¥88', tag: '推荐' },
        { name: '封坛定制服务', location: '北墘村', price: '¥298', tag: '特色' }
      ]
    },
    {
      category: '⚔️ 武侠国风',
      items: [
        { name: '武术实景演出', location: '漈下村', price: '¥68', tag: '爆款' },
        { name: '汉服换装体验', location: '双溪古镇', price: '¥88', tag: '推荐' },
        { name: '侠客行沉浸活动', location: '小梨洋村', price: '¥128', tag: '特色' }
      ]
    },
    {
      category: '🌸 花样田园',
      items: [
        { name: '花海打卡拍照', location: '白玉村', price: '¥30', tag: '网红' },
        { name: '露营野餐体验', location: '白玉村', price: '¥198', tag: '推荐' },
        { name: '柿子采摘体验', location: '四坪村', price: '¥58', tag: '爆款' }
      ]
    }
  ];

  // 商品分类和产品数据
  const productCategories = [
    { id: 0, name: '全部', icon: '🛍️' },
    { id: 1, name: '柿子系列', icon: '🍅' },
    { id: 2, name: '黄酒系列', icon: '🍶' },
    { id: 3, name: '茶叶蜂蜜', icon: '🍵' },
    { id: 4, name: '非遗文创', icon: '🎨' },
    { id: 5, name: '农特产品', icon: '🌾' }
  ];

  // 完整产品列表（每个系列至少6个）
  const allProducts = [
    // 柿子系列（6个产品）
    { id: 1, name: '屏南柿子礼盒', price: 98, originalPrice: 128, image: '🎁', sales: 856, tag: '爆款', village: '四坪村', category: 1, desc: '四坪村特产柿子，软糯香甜，礼盒装适合送礼', detail: '精选四坪村核心产区柿子，传统古法晾晒，保留原汁原味。礼盒装包含柿饼、柿干等多种产品，是屏南柿子节最佳伴手礼。' },
    { id: 2, name: '有机柿饼', price: 68, originalPrice: 88, image: '🥮', sales: 623, tag: '特产', village: '四坪村', category: 1, desc: '传统古法晾晒，无添加天然甜', detail: '四坪村有机柿子自然晾晒而成，无任何添加剂，保留柿子天然甜味和营养成分，口感软糯，老少皆宜。' },
    { id: 3, name: '柿子干', price: 38, originalPrice: 48, image: '🥭', sales: 287, tag: '特产', village: '四坪村', category: 1, desc: '便携装柿子干，零食首选', detail: '便携装柿子干，方便携带，是旅游途中的健康零食选择。采用四坪村优质柿子制作，口感独特。' },
    { id: 4, name: '柿子果酱', price: 48, originalPrice: 58, image: '🍯', sales: 198, tag: '新品', village: '四坪村', category: 1, desc: '纯天然柿子果酱，早餐伴侣', detail: '四坪村柿子熬制果酱，无添加防腐剂，涂抹面包或搭配酸奶，美味健康。' },
    { id: 5, name: '柿子醋', price: 58, originalPrice: 78, image: '🫗', sales: 156, tag: '养生', village: '四坪村', category: 1, desc: '古法酿造柿子醋，养生佳品', detail: '四坪村古法酿造柿子醋，发酵一年以上，口感醇厚，具有养生保健功效。' },
    { id: 6, name: '柿子采摘体验券', price: 58, originalPrice: 88, image: '🎫', sales: 432, tag: '推荐', village: '四坪村', category: 1, desc: '现场采摘体验，带走新鲜柿子', detail: '四坪村柿子园采摘体验券，包含采摘工具和指导，可带走采摘的新鲜柿子，适合家庭亲子活动。' },
    
    // 黄酒系列（6个产品）
    { id: 7, name: '北墘黄酒礼盒', price: 168, originalPrice: 198, image: '🍶', sales: 623, tag: '非遗', village: '北墘村', category: 2, desc: '千年非遗黄酒，醇香绵柔', detail: '北墘村千年红粬黄酒非遗技艺酿造，酒香浓郁，口感绵柔，是屏南黄酒文化代表作。礼盒装适合送礼。' },
    { id: 8, name: '古法原浆黄酒', price: 198, originalPrice: 238, image: '🫙', sales: 456, tag: '限量', village: '北墘村', category: 2, desc: '十年陈酿原浆，收藏珍品', detail: '北墘村十年陈酿原浆黄酒，采用古法酿造，酒体醇厚，是收藏和宴请的佳品。限量发售。' },
    { id: 9, name: '黄酒品鉴套装', price: 88, originalPrice: 108, image: '🥃', sales: 312, tag: '推荐', village: '北墘村', category: 2, desc: '三种口味品鉴，了解黄酒文化', detail: '包含北墘村三种不同年份黄酒小样，配品鉴指南，让游客全面了解屏南黄酒文化。' },
    { id: 10, name: '封坛定制服务', price: 298, originalPrice: 358, image: '⚱️', sales: 189, tag: '定制', village: '北墘村', category: 2, desc: '专属封坛纪念，独一无二', detail: '北墘村封坛定制服务，可定制专属封坛黄酒，刻字纪念，是独一无二的礼物和纪念品。' },
    { id: 11, name: '黄酒鸡调料', price: 38, originalPrice: 48, image: '🥘', sales: 267, tag: '实用', village: '北墘村', category: 2, desc: '黄酒入菜，美味升级', detail: '北墘村黄酒特制调料，适合黄酒鸡、黄酒焖肉等屏南特色菜，带回家烹饪屏南味道。' },
    { id: 12, name: '黄酒酿制体验', price: 168, originalPrice: 198, image: '🏭', sales: 145, tag: '体验', village: '北墘村', category: 2, desc: '体验古法酿酒，带走作品', detail: '北墘村古法酿酒体验，亲手参与酿酒过程，了解非遗技艺，带走自己酿制的黄酒。' },
    
    // 茶叶蜂蜜系列（6个产品）
    { id: 13, name: '高山云雾茶', price: 158, originalPrice: 188, image: '🍵', sales: 512, tag: '特产', village: '漈头村', category: 3, desc: '海拔800米云雾茶园', detail: '漈头村海拔800米云雾茶园，高山云雾孕育优质茶叶，茶香清幽，回甘持久，是屏南高山茶代表作。' },
    { id: 14, name: '农家百花蜜', price: 88, originalPrice: 108, image: '🍯', sales: 398, tag: '养生', village: '龙潭古镇', category: 3, desc: '百花蜜，自然成熟', detail: '龙潭古镇农家自酿百花蜜，采集多种花蜜，自然成熟，无添加，营养价值高，适合养生。' },
    { id: 15, name: '屏南白茶', price: 128, originalPrice: 158, image: '🫖', sales: 278, tag: '新茶', village: '漈头村', category: 3, desc: '白茶新贵，清甜回甘', detail: '漈头村屏南白茶，采用优质茶青自然萎凋，茶汤清甜回甘，是白茶新贵。' },
    { id: 16, name: '野蜂蜜', price: 118, originalPrice: 148, image: '🐝', sales: 189, tag: '稀有', village: '白玉村', category: 3, desc: '深山野蜂蜜，稀有珍贵', detail: '白玉村深山野蜂蜜，采集野生花蜜，产量稀少，品质上乘，是珍贵养生佳品。' },
    { id: 17, name: '蜂蜜柚子茶', price: 68, originalPrice: 88, image: '🥤', sales: 234, tag: '便捷', village: '龙潭古镇', category: 3, desc: '蜂蜜+柚子，美味养生', detail: '龙潭古镇农家蜂蜜搭配柚子制作，冲水即饮，美味养生，方便携带。' },
    { id: 18, name: '茶具套装', price: 188, originalPrice: 238, image: '☕', sales: 167, tag: '配套', village: '漈头村', category: 3, desc: '便携茶具，品茶必备', detail: '漈头村便携茶具套装，包含茶壶、茶杯、茶盘，适合旅行途中品茶。' },
    
    // 非遗文创系列（6个产品）
    { id: 19, name: '非遗竹编', price: 128, originalPrice: 158, image: '🧺', sales: 156, tag: '非遗', village: '漈下村', category: 4, desc: '手工竹编，非遗技艺', detail: '漈下村非遗竹编技艺制作，纯手工编织，图案精美，是屏南非遗文化代表作。' },
    { id: 20, name: '畲族刺绣包', price: 188, originalPrice: 228, image: '👜', sales: 134, tag: '民族', village: '巴地村', category: 4, desc: '畲族刺绣，民族风情', detail: '巴地村畲族刺绣技艺，手工绣制，图案独特，展现畲族文化，是民族风伴手礼。' },
    { id: 21, name: '陶艺作品', price: 98, originalPrice: 128, image: '🏺', sales: 198, tag: '文艺', village: '厦地村', category: 4, desc: '厦地陶艺，文艺气息', detail: '厦地村陶艺工坊作品，手工制作，每件都独一无二，展现文艺气息。' },
    { id: 22, name: '植物染围巾', price: 158, originalPrice: 198, image: '🧣', sales: 167, tag: '环保', village: '厦地村', category: 4, desc: '植物染色，环保时尚', detail: '厦地村植物染坊作品，采用天然植物染色，环保健康，颜色自然柔和。' },
    { id: 23, name: '剪纸作品', price: 68, originalPrice: 88, image: '✂️', sales: 234, tag: '民俗', village: '双溪古镇', category: 4, desc: '传统剪纸，民俗艺术', detail: '双溪古镇传统剪纸艺术，手工剪制，图案丰富，展现屏南民俗文化。' },
    { id: 24, name: '木雕摆件', price: 138, originalPrice: 168, image: '🪵', sales: 145, tag: '匠心', village: '漈下村', category: 4, desc: '手工木雕，匠心独运', detail: '漈下村手工木雕作品，采用本地木材，精雕细琢，是匠心独运的艺术品。' },
    
    // 农特产品系列（6个产品）
    { id: 25, name: '屏南笋干', price: 58, originalPrice: 78, image: '🥬', sales: 345, tag: '干货', village: '漈头村', category: 5, desc: '高山笋干，天然美味', detail: '漈头村高山笋干，自然晾晒，保留笋的鲜味，是屏南山区特产。' },
    { id: 26, name: '农家土鸡蛋', price: 48, originalPrice: 58, image: '🥚', sales: 423, tag: '新鲜', village: '四坪村', category: 5, desc: '散养土鸡蛋，营养丰富', detail: '四坪村散养土鸡蛋，吃虫草长大，营养丰富，蛋黄饱满，是真正的农家土鸡蛋。' },
    { id: 27, name: '高山大米', price: 68, originalPrice: 88, image: '🍚', sales: 287, tag: '优质', village: '白玉村', category: 5, desc: '高山梯田米，香甜软糯', detail: '白玉村高山梯田大米，光照充足，米粒饱满，煮熟后香甜软糯。' },
    { id: 28, name: '野生菌干货', price: 88, originalPrice: 108, image: '🍄', sales: 189, tag: '山珍', village: '龙潭古镇', category: 5, desc: '深山野生菌，山珍美味', detail: '龙潭古镇深山野生菌，人工采摘晾晒，是屏南山区山珍美味。' },
    { id: 29, name: '农家菜干', price: 38, originalPrice: 48, image: '🥗', sales: 312, tag: '传统', village: '漈下村', category: 5, desc: '传统菜干，家乡味道', detail: '漈下村传统菜干，采用本地蔬菜晾晒，是屏南传统农家菜食材。' },
    { id: 30, name: '山茶油', price: 98, originalPrice: 128, image: '🫒', sales: 234, tag: '健康', village: '漈头村', category: 5, desc: '野生山茶油，健康食用油', detail: '漈头村野生山茶籽压榨而成，无添加，营养价值高，是健康食用油首选。' }
  ];

  // 根据分类筛选产品
  const getFilteredProducts = () => {
    if (activeCategory === 0) return allProducts;
    return allProducts.filter(p => p.category === activeCategory);
  };

  // 活动日历
  const activities = [
    { date: '7月15-20日', name: '屏南柿子节', location: '四坪村', status: '进行中', color: 'bg-red-500' },
    { date: '7月18日', name: '火凤凰演出', location: '巴地村', status: '今晚', color: 'bg-orange-500' },
    { date: '7月20日', name: '黄酒文化节', location: '北墘村', status: '即将开始', color: 'bg-amber-500' },
    { date: '每周六', name: '古村市集', location: '漈下村', status: '常态化', color: 'bg-green-500' }
  ];

  const addToTrunk = (productId: number, productName: string) => {
    if (!trunkItems.includes(productId)) {
      setTrunkItems([...trunkItems, productId]);
      setSuccessMessage(`${productName} 已加入清单`);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  const openProductDetail = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  // 首页内容
  const renderHome = () => (
    <div className="pb-20">
      {/* 顶部搜索栏 */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-full">
              <Search className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">搜索村庄、景点、商品...</span>
            </div>
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </div>
            <QrCode className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>

      {/* 柿子节轮播 */}
      <div className="px-4 py-3">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-44 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="absolute inset-0 flex items-center justify-between px-6">
            <div className="text-white">
              <div className="text-4xl mb-2">🍅</div>
              <h2 className="text-2xl font-bold mb-1">屏南柿子节</h2>
              <p className="text-sm text-white/90">盛夏避暑 · 柿子飘香 · 四坪村核心产区</p>
              <div className="flex gap-2 mt-3">
                <Badge className="bg-white/20 text-white">进行中</Badge>
                <Badge className="bg-white/20 text-white">7月15-20日</Badge>
              </div>
            </div>
            <div className="text-8xl">🎉</div>
          </div>
        </div>
      </div>

      {/* 快捷功能入口 */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, i) => (
            <button key={i} className="flex flex-col items-center gap-1.5">
              <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center shadow-md`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 活动日历 */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">📅 近期活动</h3>
          <button className="text-sm text-gray-500 flex items-center gap-1">
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {activities.map((act, i) => (
            <Card key={i} className="min-w-[200px] border border-gray-100 shadow-sm">
              <CardContent className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={act.color}>{act.status}</Badge>
                </div>
                <h4 className="font-semibold text-sm mb-1">{act.name}</h4>
                <p className="text-xs text-gray-500">{act.location}</p>
                <p className="text-xs text-gray-400">{act.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 特色村庄推荐 */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">🏘️ 屏南特色村庄</h3>
          <button className="text-sm text-gray-500 flex items-center gap-1">
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[longtanVillage, sipingVillage, ...villages.slice(0, 4)].map((v, i) => (
            <Card key={i} className="min-w-[160px] border border-gray-100 shadow-sm">
              <CardContent className="p-3">
                <div className={`h-24 bg-gradient-to-r ${v.color} rounded-lg flex items-center justify-center text-4xl mb-2`}>
                  {v.icon}
                </div>
                <h4 className="font-semibold text-sm">{v.name}</h4>
                <p className="text-xs text-gray-500 mb-1">{v.tagline}</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-orange-600">⭐ {v.rating}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">{v.distance}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 特色体验 */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">✨ 特色体验</h3>
        </div>
        
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeCategory === i ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {exp.category}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {experiences[activeCategory].items.map((item, i) => (
            <Card key={i} className="border border-gray-100 shadow-sm">
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center text-2xl">
                    {experiences[activeCategory].category.split(' ')[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-orange-600">{item.price}</p>
                  <Badge variant="outline" className="text-xs">{item.tag}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 后备箱乡村好物推荐 */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">🛍️ 后备箱乡村好物</h3>
          <button className="text-sm text-gray-500 flex items-center gap-1">
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {allProducts.slice(0, 4).map(product => (
            <Card 
              key={product.id} 
              className="border border-gray-100 shadow-sm cursor-pointer"
              onClick={() => openProductDetail(product)}
            >
              <CardContent className="p-2">
                <div className="h-28 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center text-4xl mb-2 relative">
                  {product.image}
                  {product.tag && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 rounded text-xs text-white">
                      {product.tag}
                    </div>
                  )}
                </div>
                <h4 className="text-sm font-semibold line-clamp-1">{product.name}</h4>
                <p className="text-xs text-gray-500">{product.village}</p>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-base font-bold text-orange-600">¥{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">¥{product.originalPrice}</span>
                </div>
                <Button
                  size="sm"
                  className={`w-full h-7 text-xs ${trunkItems.includes(product.id) ? 'bg-green-600' : 'bg-orange-600 hover:bg-orange-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToTrunk(product.id, product.name);
                  }}
                  disabled={trunkItems.includes(product.id)}
                >
                  {trunkItems.includes(product.id) ? '已加入' : '加入清单'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 后备箱清单入口 */}
      {trunkItems.length > 0 && (
        <div className="fixed bottom-24 right-4 z-20">
          <button className="w-14 h-14 bg-orange-600 rounded-full shadow-xl flex items-center justify-center relative animate-pulse">
            <Gift className="w-6 h-6 text-white" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-bold">
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
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-6">
        <h2 className="text-xl font-bold mb-2">🗺️ 智能导览</h2>
        <p className="text-sm text-white/80">AI为您规划最佳游览路线</p>
      </div>

      {/* 地图区域 */}
      <div className="px-4 py-4">
        <div className="h-64 bg-gradient-to-br from-green-100 via-blue-50 to-orange-50 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-green-600 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">屏南乡村旅游地图</p>
            <p className="text-xs text-gray-400 mt-1">点击村庄标记查看详情</p>
          </div>
          {/* 村庄标记点 */}
          <div className="absolute top-8 left-6 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg animate-pulse">
            📚
          </div>
          <div className="absolute top-16 right-8 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
            🍶
          </div>
          <div className="absolute bottom-12 left-10 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
            ⚔️
          </div>
          <div className="absolute bottom-8 right-6 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg animate-pulse">
            🍅
          </div>
          <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
            🏞️
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
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">古村文化一日游</h4>
                  <p className="text-xs text-gray-500">龙潭古镇 → 四坪村 → 漈下村</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">⏱️ 5-6小时</Badge>
                <Badge variant="outline" className="text-xs">📍 12km</Badge>
                <Badge variant="outline" className="text-xs">👨‍👩‍👧‍👦 家庭首选</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-100">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">文艺打卡半日游</h4>
                  <p className="text-xs text-gray-500">厦地村水田书店 → 陶艺工坊 → 稻田研学</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">⏱️ 3-4小时</Badge>
                <Badge variant="outline" className="text-xs">📸 网红打卡</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-100">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">黄酒文化体验</h4>
                  <p className="text-xs text-gray-500">北墘村古法酿酒 → 黄酒品鉴 → 封坛定制</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">⏱️ 2-3小时</Badge>
                <Badge variant="outline" className="text-xs">🍶 非遗体验</Badge>
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
        <h2 className="text-xl font-bold mb-2">🛒 后备箱乡村好物</h2>
        <p className="text-sm text-white/80">带走屏南的味道与记忆</p>
      </div>

      {/* 分类 */}
      <div className="px-4 py-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === cat.id ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 商品列表 */}
      <div className="px-4 py-2">
        <div className="mb-3 text-sm text-gray-500">
          共 {getFilteredProducts().length} 个商品
        </div>
        <div className="grid grid-cols-2 gap-3">
          {getFilteredProducts().map(product => (
            <Card 
              key={product.id} 
              className="border border-gray-100 shadow-sm cursor-pointer"
              onClick={() => openProductDetail(product)}
            >
              <CardContent className="p-2">
                <div className="h-32 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center text-4xl mb-2 relative">
                  {product.image}
                  {product.tag && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 rounded text-xs text-white">
                      {product.tag}
                    </div>
                  )}
                </div>
                <h4 className="text-sm font-semibold line-clamp-1">{product.name}</h4>
                <p className="text-xs text-gray-500">{product.village}</p>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-lg font-bold text-orange-600">¥{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">¥{product.originalPrice}</span>
                </div>
                <Button
                  size="sm"
                  className={`w-full h-7 text-xs ${trunkItems.includes(product.id) ? 'bg-green-600' : 'bg-orange-600 hover:bg-orange-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToTrunk(product.id, product.name);
                  }}
                  disabled={trunkItems.includes(product.id)}
                >
                  {trunkItems.includes(product.id) ? '已加入' : '加入清单'}
                </Button>
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
                <span className="text-gray-600">📍 四坪村游客中心</span>
                <span className="text-blue-600">距您 500m</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">📍 龙潭古镇停车场</span>
                <span className="text-blue-600">距您 1.2km</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">📍 厦地村文创中心</span>
                <span className="text-blue-600">距您 2.5km</span>
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
              { icon: Ticket, label: '我的优惠券', color: 'text-red-600' },
              { icon: Camera, label: '打卡记录', color: 'text-green-600' },
              { icon: Heart, label: '我的收藏', color: 'text-pink-600' },
              { icon: Bookmark, label: '浏览历史', color: 'text-purple-600' },
              { icon: Bell, label: '消息通知', color: 'text-blue-600' },
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

      {/* 产品详情弹窗 */}
      <Dialog open={showProductDetail} onOpenChange={setShowProductDetail}>
        <DialogContent className="max-w-sm">
          {selectedProduct && (
            <div>
              {/* 产品图片 */}
              <div className="h-48 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center text-7xl mb-4 relative">
                {selectedProduct.image}
                {selectedProduct.tag && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 rounded text-sm text-white font-semibold">
                    {selectedProduct.tag}
                  </div>
                )}
              </div>
              
              {/* 产品信息 */}
              <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
              
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">{selectedProduct.village}</Badge>
                <span className="text-sm text-gray-500">已售 {selectedProduct.sales}</span>
              </div>
              
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-orange-600">¥{selectedProduct.price}</span>
                <span className="text-base text-gray-400 line-through">¥{selectedProduct.originalPrice}</span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">简介：</span>
                  {selectedProduct.desc}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold">详情：</span>
                  {selectedProduct.detail}
                </p>
              </div>
              
              {/* 操作按钮 */}
              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-orange-600 hover:bg-orange-700"
                  onClick={() => {
                    addToTrunk(selectedProduct.id, selectedProduct.name);
                    setShowProductDetail(false);
                  }}
                  disabled={trunkItems.includes(selectedProduct.id)}
                >
                  {trunkItems.includes(selectedProduct.id) ? '已加入清单' : '加入清单'}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowProductDetail(false)}
                >
                  关闭
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
