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
  X,
  Map,
  Mic,
  ShoppingCart as Cart,
  Navigation2,
  Volume2,
  Zap
} from 'lucide-react';

export default function MiniProgramPage() {
  const [activeTab, setActiveTab] = useState<'home' | 'guide' | 'shop' | 'mine'>('home');
  const [trunkItems, setTrunkItems] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showProductDetail, setShowProductDetail] = useState(false);
  
  // 功能弹窗状态
  const [showMapModal, setShowMapModal] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showLiveModal, setShowLiveModal] = useState(false);
  const [showParkingModal, setShowParkingModal] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [showPersimmonModal, setShowPersimmonModal] = useState(false);
  
  // 打卡状态
  const [checkInList, setCheckInList] = useState<number[]>([]);
  const [couponList, setCouponList] = useState<number[]>([]);

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
      features: ['陶艺体验', '植物染坊', '稻田研学', '摄影基地'],
      description: '厦地村是屏南文艺打卡顶流，拥有先锋厦地水田书店这一全国地标。800年明清古村与稻田、夯土古厝连片，文创业态密集，年接待游客6万+。',
      images: ['水田书店', '陶艺工坊', '植物染坊', '稻田景观'],
      tips: ['建议上午前往，避开人流高峰', '陶艺体验需提前预约', '书店免费开放', '适合文艺青年打卡']
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
      features: ['古法酿酒', '封坛定制', '黄酒品鉴', '乡宴体验'],
      description: '北墘村是中国红粬黄酒第一村，千年酿酒非遗传承地。酒坛垒墙、黄酒文化馆、古法酿酒体验，黄酒文化节常态化举办。',
      images: ['酒坛垒墙', '黄酒文化馆', '古法酿酒', '封坛定制'],
      tips: ['黄酒品鉴建议下午前往', '可定制专属封坛纪念', '黄酒鸡是必尝美食', '适合家庭出游']
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
      features: ['武术表演', '古村市集', '夜游灯光', '廊桥打卡'],
      description: '漈下村是清代名将甘国宝故乡，抗倭文化、福文化、传统武术非遗交融。龙漈溪、古廊桥、明清马头墙建筑群保存完整。',
      images: ['古廊桥', '武术演出', '马头墙', '古村市集'],
      tips: ['武术演出每周六晚', '廊桥打卡最佳时间黄昏', '古村市集有特色小吃', '夜游灯光秀值得一看']
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
      features: ['汉服体验', '开笔礼', '古建打卡', '露天影院'],
      description: '双溪古镇是屏南老县城遗存，文庙、城隍庙、瑞光塔、朱子庙、百年薛府等古建筑集群完整，朱子文化底蕴深厚。',
      images: ['文庙', '城隍庙', '瑞光塔', '薛府'],
      tips: ['文庙免费参观', '汉服体验需预约', '开笔礼适合亲子', '年接待游客63.5万+']
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
      features: ['古厝集群', '西洋建筑', '非遗展馆', '短途研学'],
      description: '漈头村素有"屏南好漈头"之称，耕读文化、科举文化底蕴深厚，西洋建筑群、古厝集群保存完整，距离县城最近。',
      images: ['古厝群', '西洋建筑', '非遗展馆', '科举文化'],
      tips: ['交通最便利', '适合短途半日游', '非遗展馆免费开放', '古厝可参观']
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
      features: ['火凤凰演出', '畲族服饰', '民俗演艺', '民族美食'],
      description: '巴地村是省级非遗畲族火凤凰习俗传承地，畲族村寨、民俗演艺、民族服饰体验丰富，火凤凰夜间实景演出常态化。',
      images: ['火凤凰演出', '畲族村寨', '民族服饰', '民俗演艺'],
      tips: ['火凤凰演出每周六晚', '可体验畲族服饰', '民族美食值得品尝', '适合文化体验']
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
      features: ['国风市集', '亲子拓展', '侠客体验', '汉服打卡'],
      description: '小梨洋村是甘国宝出生地，廉政家风文化、武侠国风主题突出，亲子游乐、国风汉服打卡、侠客行沉浸式活动常态化。',
      images: ['国风市集', '侠客体验', '汉服打卡', '亲子拓展'],
      tips: ['国风市集周末开放', '亲子拓展需预约', '汉服打卡免费', '侠客体验互动性强']
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
      features: ['花海打卡', '露营野餐', '农事体验', '亲子游玩'],
      description: '白玉村以油菜花/稻田花海、樱花大道、稻田公社为特色，连片田园景观，是露营、亲子、团建基地。',
      images: ['油菜花海', '樱花大道', '稻田公社', '露营基地'],
      tips: ['春季花海最佳', '露营需提前预约', '农事体验亲子友好', '四季花景不同']
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
    features: ['柿子采摘', '柿饼制作', '果园研学', '农家美食'],
    description: '四坪村是屏南柿子节核心产区，柿子主产区，采摘体验、柿饼制作、果园研学、农家美食一应俱全。',
    images: ['柿子园', '柿饼晾晒', '采摘体验', '农家美食'],
    tips: ['柿子节期间最热闹', '采摘需提前预约', '柿饼现场可买', '农家美食推荐柿子鸡']
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
    features: ['古村漫步', '非遗体验', '民宿咖啡', '文创市集'],
    description: '龙潭古镇是800年明清古村，青瓦建筑群保存完整，是屏南古村文化代表，民宿、咖啡、文创市集业态丰富。',
    images: ['青瓦古建', '民宿咖啡', '文创市集', '非遗体验'],
    tips: ['古村漫步最佳清晨', '民宿体验推荐', '咖啡文化浓厚', '文创产品丰富']
  };

  // 快捷功能入口
  const quickActions = [
    { icon: MapPin, label: '导览地图', color: 'bg-blue-500', action: () => setShowMapModal(true) },
    { icon: Camera, label: '景点打卡', color: 'bg-green-500', action: () => setShowCheckInModal(true) },
    { icon: Ticket, label: '优惠券', color: 'bg-orange-500', action: () => setShowCouponModal(true) },
    { icon: Calendar, label: '活动日历', color: 'bg-purple-500', action: () => setShowActivityModal(true) },
    { icon: Video, label: '正在直播', color: 'bg-pink-500', action: () => setShowLiveModal(true) },
    { icon: Car, label: '智慧停车', color: 'bg-cyan-500', action: () => setShowParkingModal(true) },
    { icon: MessageCircle, label: '语音导览', color: 'bg-indigo-500', action: () => setShowVoiceModal(true) },
    { icon: Leaf, label: '买柿子', color: 'bg-red-500', action: () => setShowPersimmonModal(true) }
  ];

  // 打卡景点列表
  const checkInSpots = [
    { id: 1, name: '先锋厦地水田书店', village: '厦地村', image: '📚', checked: checkInList.includes(1) },
    { id: 2, name: '北墘黄酒文化馆', village: '北墘村', image: '🍶', checked: checkInList.includes(2) },
    { id: 3, name: '漈下古廊桥', village: '漈下村', image: '🌉', checked: checkInList.includes(3) },
    { id: 4, name: '双溪文庙', village: '双溪古镇', image: '🏛️', checked: checkInList.includes(4) },
    { id: 5, name: '四坪柿子园', village: '四坪村', image: '🍅', checked: checkInList.includes(5) },
    { id: 6, name: '龙潭古村', village: '龙潭古镇', image: '🏞️', checked: checkInList.includes(6) },
    { id: 7, name: '白玉花海', village: '白玉村', image: '🌻', checked: checkInList.includes(7) },
    { id: 8, name: '巴地畲族村寨', village: '巴地村', image: '🔥', checked: checkInList.includes(8) }
  ];

  // 优惠券列表
  const coupons = [
    { id: 1, name: '柿子节满100减30', discount: '¥30', condition: '满100可用', expire: '2025.07.31', image: '🍅', taken: couponList.includes(1) },
    { id: 2, name: '黄酒品鉴8折券', discount: '8折', condition: '黄酒系列通用', expire: '2025.08.15', image: '🍶', taken: couponList.includes(2) },
    { id: 3, name: '民宿首单立减50', discount: '¥50', condition: '首单专享', expire: '2025.12.31', image: '🏠', taken: couponList.includes(3) },
    { id: 4, name: '陶艺体验9折券', discount: '9折', condition: '厦地村专享', expire: '2025.08.31', image: '🏺', taken: couponList.includes(4) },
    { id: 5, name: '农产品满200减50', discount: '¥50', condition: '满200可用', expire: '2025.07.31', image: '🌾', taken: couponList.includes(5) },
    { id: 6, name: '采摘体验立减20', discount: '¥20', condition: '采摘通用', expire: '2025.08.15', image: '🎫', taken: couponList.includes(6) }
  ];

  // 活动列表
  const activities = [
    { id: 1, date: '7月15-20日', name: '屏南柿子节', location: '四坪村', status: '进行中', color: 'bg-red-500', image: '🍅', desc: '柿子采摘、柿饼制作、果园研学、农家美食' },
    { id: 2, date: '每周六晚', name: '火凤凰实景演出', location: '巴地村', status: '常态化', color: 'bg-orange-500', image: '🔥', desc: '畲族非遗火凤凰习俗，夜间实景演出' },
    { id: 3, date: '7月20日', name: '黄酒文化节', location: '北墘村', status: '即将开始', color: 'bg-amber-500', image: '🍶', desc: '古法酿酒展示、黄酒品鉴、封坛定制' },
    { id: 4, date: '每周六', name: '古村市集', location: '漈下村', status: '常态化', color: 'bg-green-500', image: '🏘️', desc: '特色小吃、手工艺品、农产品展销' },
    { id: 5, date: '7月18-19日', name: '武术实景演出', location: '漈下村', status: '即将开始', color: 'bg-red-400', image: '⚔️', desc: '甘国宝武术文化，沉浸式演出' },
    { id: 6, date: '7月21日', name: '汉服文化节', location: '双溪古镇', status: '即将开始', color: 'bg-blue-500', image: '👘', desc: '汉服巡游、古建打卡、开笔礼' }
  ];

  // 直播列表
  const liveStreams = [
    { id: 1, title: '四坪柿子园实拍', anchor: '柿子姐姐', viewers: 3562, image: '🍅', village: '四坪村', status: '直播中' },
    { id: 2, title: '古村慢生活', anchor: '龙潭小主', viewers: 2891, image: '🏞️', village: '龙潭古镇', status: '直播中' },
    { id: 3, title: '黄酒酿制现场', anchor: '北墘酒匠', viewers: 1876, image: '🍶', village: '北墘村', status: '直播中' },
    { id: 4, title: '水田书店打卡', anchor: '文艺青年', viewers: 2341, image: '📚', village: '厦地村', status: '直播中' }
  ];

  // 停车场列表
  const parkings = [
    { id: 1, name: '四坪村停车场', village: '四坪村', total: 200, available: 45, distance: '0.5km', price: '免费', image: '🅿️' },
    { id: 2, name: '龙潭古镇停车场', village: '龙潭古镇', total: 150, available: 32, distance: '0.3km', price: '免费', image: '🅿️' },
    { id: 3, name: '漈下村停车场', village: '漈下村', total: 180, available: 68, distance: '0.4km', price: '免费', image: '🅿️' },
    { id: 4, name: '双溪古镇停车场', village: '双溪古镇', total: 300, available: 156, distance: '0.6km', price: '¥10/次', image: '🅿️' },
    { id: 5, name: '厦地村停车场', village: '厦地村', total: 120, available: 28, distance: '0.8km', price: '免费', image: '🅿️' },
    { id: 6, name: '北墘村停车场', village: '北墘村', total: 100, available: 52, distance: '1.2km', price: '免费', image: '🅿️' }
  ];

  // 语音导览列表
  const voiceGuides = [
    { id: 1, name: '龙潭古镇全景导览', village: '龙潭古镇', duration: '25分钟', spots: 12, image: '🏞️' },
    { id: 2, name: '四坪柿子园导览', village: '四坪村', duration: '18分钟', spots: 8, image: '🍅' },
    { id: 3, name: '厦地水田书店导览', village: '厦地村', duration: '20分钟', spots: 10, image: '📚' },
    { id: 4, name: '北墘黄酒文化导览', village: '北墘村', duration: '22分钟', spots: 9, image: '🍶' },
    { id: 5, name: '漈下武侠文化导览', village: '漈下村', duration: '15分钟', spots: 7, image: '⚔️' },
    { id: 6, name: '双溪古镇人文导览', village: '双溪古镇', duration: '30分钟', spots: 15, image: '🏛️' }
  ];

  // 柿子产品列表
  const persimmonProducts = [
    { id: 1, name: '屏南柿子礼盒', price: 98, image: '🎁', desc: '四坪村特产柿子，软糯香甜', village: '四坪村' },
    { id: 2, name: '有机柿饼', price: 68, image: '🥮', desc: '传统古法晾晒，无添加', village: '四坪村' },
    { id: 3, name: '柿子干', price: 38, image: '🥭', desc: '便携装柿子干，零食首选', village: '四坪村' },
    { id: 4, name: '柿子果酱', price: 48, image: '🍯', desc: '纯天然柿子果酱', village: '四坪村' },
    { id: 5, name: '柿子醋', price: 58, image: '🫗', desc: '古法酿造，养生佳品', village: '四坪村' },
    { id: 6, name: '柿子采摘体验券', price: 58, image: '🎫', desc: '现场采摘体验', village: '四坪村' }
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

  // 成功提示
  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  // 加入后备箱清单
  const addToTrunk = (productId: number) => {
    if (!trunkItems.includes(productId)) {
      setTrunkItems([...trunkItems, productId]);
      showSuccessMessage('已加入后备箱清单');
    }
  };

  // 打卡
  const handleCheckIn = (spotId: number) => {
    if (!checkInList.includes(spotId)) {
      setCheckInList([...checkInList, spotId]);
      showSuccessMessage('打卡成功！');
    }
  };

  // 领取优惠券
  const handleTakeCoupon = (couponId: number) => {
    if (!couponList.includes(couponId)) {
      setCouponList([...couponList, couponId]);
      showSuccessMessage('领取成功！');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50 max-w-md mx-auto relative">
      {/* 顶部状态栏模拟 */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 flex justify-between items-center text-xs">
        <span>9:41</span>
        <div className="flex gap-2">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* 导航栏 */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-bold">屏南柿子节</h1>
          <div className="flex gap-3">
            <Search className="w-5 h-5" />
            <Bell className="w-5 h-5" />
          </div>
        </div>
        
        {/* 搜索框 */}
        <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
          <Search className="w-4 h-4 text-white/70" />
          <span className="text-white/70 text-sm">搜索景点、美食、住宿...</span>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="pb-20">
        {activeTab === 'home' && (
          <div className="px-4 py-4 space-y-4">
            {/* 欢迎卡片 */}
            <Card className="bg-gradient-to-r from-orange-500 to-green-500 text-white border-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🍅</div>
                  <div>
                    <h2 className="font-bold text-lg">欢迎来到屏南</h2>
                    <p className="text-sm opacity-90">柿子节精彩活动进行中</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 快捷功能入口 */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500" />
                快捷功能
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className={`w-10 h-10 ${action.color} rounded-xl flex items-center justify-center`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-700">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 热门村庄推荐 */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-green-500" />
                  热门村庄
                </h3>
                <span className="text-sm text-orange-500">查看全部 →</span>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[longtanVillage, sipingVillage, ...villages.slice(0, 4)].map((village) => (
                  <Card key={village.id} className="min-w-[140px] flex-shrink-0 border-0 shadow-md">
                    <CardContent className="p-3">
                      <div className={`w-full h-20 bg-gradient-to-br ${village.color} rounded-lg flex items-center justify-center text-3xl mb-2`}>
                        {village.icon}
                      </div>
                      <h4 className="font-bold text-sm text-gray-800">{village.name}</h4>
                      <p className="text-xs text-gray-500">{village.tagline}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-gray-600">{village.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 特色体验 */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                特色体验
              </h3>
              <div className="space-y-3">
                {experiences.map((exp, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardContent className="p-3">
                      <h4 className="font-bold text-sm text-gray-800 mb-2">{exp.category}</h4>
                      <div className="space-y-2">
                        {exp.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <div>
                              <span className="text-gray-700">{item.name}</span>
                              <span className="text-xs text-gray-500 ml-2">· {item.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">{item.tag}</Badge>
                              <span className="text-orange-500 font-bold">{item.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 推荐路线 */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-blue-500" />
                推荐路线
              </h3>
              <div className="space-y-2">
                <Card className="border-0 shadow-sm bg-gradient-to-r from-green-50 to-blue-50">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-gray-800">古村文化一日游</h4>
                        <p className="text-xs text-gray-500">龙潭古镇 → 四坪村 → 漈下村</p>
                        <p className="text-xs text-gray-500">预计5-6小时</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="px-4 py-4 space-y-4">
            {/* 地图区域 */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <Map className="w-5 h-5 text-blue-500" />
                    旅游地图
                  </h3>
                  <Button size="sm" variant="outline" className="text-xs">查看大图</Button>
                </div>
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">屏南乡村地图</p>
                  </div>
                  {/* 地图标记点 */}
                  <div className="absolute top-4 left-8 text-2xl cursor-pointer hover:scale-110 transition-transform" title="四坪村">🍅</div>
                  <div className="absolute top-8 right-12 text-2xl cursor-pointer hover:scale-110 transition-transform" title="龙潭古镇">🏞️</div>
                  <div className="absolute bottom-12 left-16 text-2xl cursor-pointer hover:scale-110 transition-transform" title="厦地村">📚</div>
                  <div className="absolute bottom-8 right-8 text-2xl cursor-pointer hover:scale-110 transition-transform" title="北墘村">🍶</div>
                </div>
              </CardContent>
            </Card>

            {/* 所有村庄列表 */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">全部村庄</h3>
              <div className="space-y-2">
                {[longtanVillage, sipingVillage, ...villages].map((village) => (
                  <Card key={village.id} className="border-0 shadow-sm">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 bg-gradient-to-br ${village.color} rounded-lg flex items-center justify-center text-2xl`}>
                          {village.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm text-gray-800">{village.name}</h4>
                            <Badge variant="outline" className="text-xs">{village.tagline}</Badge>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{village.highlights}</p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-gray-600">
                            <span className="flex items-center gap-1">
                              <Navigation2 className="w-3 h-3" />
                              {village.distance}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              {village.rating}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'shop' && (
          <div className="px-4 py-4 space-y-4">
            {/* 分类筛选 */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {productCategories.map((cat) => (
                <Button
                  key={cat.id}
                  size="sm"
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  className={`flex-shrink-0 ${activeCategory === cat.id ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.name}
                </Button>
              ))}
            </div>

            {/* 后备箱清单提示 */}
            {trunkItems.length > 0 && (
              <Card className="border-0 shadow-sm bg-orange-50">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-800">
                      后备箱清单已加入 <span className="font-bold text-orange-500">{trunkItems.length}</span> 件商品
                    </span>
                    <span className="text-xs text-gray-500 ml-auto">离开屏南前可顺路提货</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 商品列表 */}
            <div className="grid grid-cols-2 gap-3">
              {getFilteredProducts().map((product) => (
                <Card 
                  key={product.id} 
                  className="border-0 shadow-sm cursor-pointer hover:shadow-md transition-all"
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowProductDetail(true);
                  }}
                >
                  <CardContent className="p-3">
                    <div className="w-full h-24 bg-gradient-to-br from-orange-50 to-green-50 rounded-lg flex items-center justify-center text-4xl mb-2">
                      {product.image}
                    </div>
                    <h4 className="font-bold text-sm text-gray-800 truncate">{product.name}</h4>
                    <p className="text-xs text-gray-500 truncate">{product.village}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <span className="text-orange-500 font-bold">¥{product.price}</span>
                        <span className="text-xs text-gray-400 line-through ml-1">¥{product.originalPrice}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">{product.tag}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mine' && (
          <div className="px-4 py-4 space-y-4">
            {/* 用户信息 */}
            <Card className="border-0 shadow-md bg-gradient-to-r from-orange-500 to-green-500 text-white">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <h3 className="font-bold">屏南游客</h3>
                    <p className="text-sm opacity-90">扫码入园 · 探索乡村</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 后备箱清单 */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-orange-500" />
                    <span className="font-bold text-gray-800">后备箱清单</span>
                  </div>
                  <Badge className="bg-orange-500">{trunkItems.length}</Badge>
                </div>
                {trunkItems.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {trunkItems.slice(0, 3).map((id) => {
                      const product = allProducts.find(p => p.id === id);
                      return product ? (
                        <div key={id} className="flex items-center gap-2 text-sm">
                          <span className="text-lg">{product.image}</span>
                          <span className="text-gray-700">{product.name}</span>
                          <span className="text-orange-500 ml-auto">¥{product.price}</span>
                        </div>
                      ) : null;
                    })}
                    {trunkItems.length > 3 && (
                      <p className="text-xs text-gray-500">还有 {trunkItems.length - 3} 件商品</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 功能菜单 */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-2">
                <div className="space-y-1">
                  {[
                    { icon: CheckCircle2, label: '我的打卡', value: checkInList.length, color: 'text-green-500' },
                    { icon: Ticket, label: '我的优惠券', value: couponList.length, color: 'text-orange-500' },
                    { icon: Heart, label: '收藏景点', value: 0, color: 'text-pink-500' },
                    { icon: Clock, label: '浏览记录', value: 0, color: 'text-blue-500' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className="text-sm text-gray-800">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{item.value}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 游客服务热线 */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-800">游客服务热线</p>
                    <p className="text-lg font-bold text-green-600">400-123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* 底部TabBar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {[
            { icon: Home, label: '首页', key: 'home' },
            { icon: MapPin, label: '导览', key: 'guide' },
            { icon: ShoppingCart, label: '商城', key: 'shop' },
            { icon: User, label: '我的', key: 'mine' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex flex-col items-center gap-1 ${
                activeTab === tab.key ? 'text-orange-500' : 'text-gray-500'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-xs">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 成功提示 */}
      {showSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          {successMessage}
        </div>
      )}

      {/* 商品详情弹窗 */}
      <Dialog open={showProductDetail} onOpenChange={setShowProductDetail}>
        <DialogContent className="max-w-[350px]">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span className="text-2xl">{selectedProduct.image}</span>
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="w-full h-40 bg-gradient-to-br from-orange-50 to-green-50 rounded-lg flex items-center justify-center text-6xl">
                  {selectedProduct.image}
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-500">{selectedProduct.tag}</Badge>
                  <span className="text-sm text-gray-500">{selectedProduct.village}</span>
                  <span className="text-sm text-gray-500 ml-auto">销量 {selectedProduct.sales}</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-orange-500">¥{selectedProduct.price}</span>
                  <span className="text-sm text-gray-400 line-through ml-2">¥{selectedProduct.originalPrice}</span>
                </div>
                <p className="text-sm text-gray-600">{selectedProduct.desc}</p>
                <p className="text-xs text-gray-500">{selectedProduct.detail}</p>
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={() => {
                    addToTrunk(selectedProduct.id);
                    setShowProductDetail(false);
                  }}
                  disabled={trunkItems.includes(selectedProduct.id)}
                >
                  {trunkItems.includes(selectedProduct.id) ? '已加入清单' : '加入后备箱清单'}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* 导览地图弹窗 */}
      <Dialog open={showMapModal} onOpenChange={setShowMapModal}>
        <DialogContent className="max-w-[350px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Map className="w-5 h-5 text-blue-500" />
              导览地图
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="w-full h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-gray-700">屏南乡村导览地图</p>
                </div>
              </div>
              {/* 村庄标记 */}
              <div className="absolute top-6 left-6 text-2xl animate-pulse" title="四坪村">🍅</div>
              <div className="absolute top-10 right-10 text-2xl animate-pulse" title="龙潭古镇">🏞️</div>
              <div className="absolute bottom-16 left-12 text-2xl animate-pulse" title="厦地村">📚</div>
              <div className="absolute bottom-10 right-6 text-2xl animate-pulse" title="北墘村">🍶</div>
              <div className="absolute top-20 left-20 text-xl animate-pulse" title="漈下村">⚔️</div>
              <div className="absolute bottom-20 right-16 text-xl animate-pulse" title="双溪古镇">🏛️</div>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800">地图功能</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" variant="outline" className="w-full">
                  <Navigation2 className="w-4 h-4 mr-1" />
                  路线规划
                </Button>
                <Button size="sm" variant="outline" className="w-full">
                  <MapPin className="w-4 h-4 mr-1" />
                  周边搜索
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800">推荐路线</h4>
              <div className="space-y-2">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-bold text-sm text-gray-800">古村文化一日游</p>
                  <p className="text-xs text-gray-600">龙潭古镇 → 四坪村 → 漈下村</p>
                  <p className="text-xs text-gray-500 mt-1">预计5-6小时 · 适合深度游</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-bold text-sm text-gray-800">文艺打卡半日游</p>
                  <p className="text-xs text-gray-600">厦地村水田书店 → 陶艺工坊 → 稻田研学</p>
                  <p className="text-xs text-gray-500 mt-1">预计3-4小时 · 适合文艺青年</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 景点打卡弹窗 */}
      <Dialog open={showCheckInModal} onOpenChange={setShowCheckInModal}>
        <DialogContent className="max-w-[350px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-green-500" />
              景点打卡
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-800">
                已打卡 <span className="font-bold text-green-600">{checkInList.length}</span> / {checkInSpots.length} 个景点
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${(checkInList.length / checkInSpots.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              {checkInSpots.map((spot) => (
                <div key={spot.id} className="p-3 bg-white border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg flex items-center justify-center text-2xl">
                      {spot.image}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-gray-800">{spot.name}</h4>
                      <p className="text-xs text-gray-500">{spot.village}</p>
                    </div>
                    {spot.checked ? (
                      <Badge className="bg-green-500">已打卡</Badge>
                    ) : (
                      <Button 
                        size="sm" 
                        className="bg-orange-500 hover:bg-orange-600"
                        onClick={() => handleCheckIn(spot.id)}
                      >
                        打卡
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 优惠券弹窗 */}
      <Dialog open={showCouponModal} onOpenChange={setShowCouponModal}>
        <DialogContent className="max-w-[350px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Ticket className="w-5 h-5 text-orange-500" />
              优惠券
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-800">
                已领取 <span className="font-bold text-orange-600">{couponList.length}</span> 张优惠券
              </p>
            </div>
            <div className="space-y-2">
              {coupons.map((coupon) => (
                <div key={coupon.id} className="p-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                      {coupon.image}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-gray-800">{coupon.name}</h4>
                      <p className="text-xs text-gray-500">{coupon.condition}</p>
                      <p className="text-xs text-gray-500">有效期至 {coupon.expire}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-orange-200">
                    <div className="text-2xl font-bold text-red-500">{coupon.discount}</div>
                    {coupon.taken ? (
                      <Badge className="bg-gray-400">已领取</Badge>
                    ) : (
                      <Button 
                        size="sm" 
                        className="bg-orange-500 hover:bg-orange-600"
                        onClick={() => handleTakeCoupon(coupon.id)}
                      >
                        立即领取
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 活动日历弹窗 */}
      <Dialog open={showActivityModal} onOpenChange={setShowActivityModal}>
        <DialogContent className="max-w-[350px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              活动日历
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              {activities.map((activity) => (
                <div key={activity.id} className="p-3 bg-white border rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-purple-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      {activity.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-sm text-gray-800">{activity.name}</h4>
                        <Badge className={`${activity.color} text-white text-xs`}>{activity.status}</Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">📅 {activity.date}</p>
                      <p className="text-xs text-gray-600 mb-1">📍 {activity.location}</p>
                      <p className="text-xs text-gray-500">{activity.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 正在直播弹窗 */}
      <Dialog open={showLiveModal} onOpenChange={setShowLiveModal}>
        <DialogContent className="max-w-[350px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Video className="w-5 h-5 text-pink-500" />
              正在直播
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              {liveStreams.map((live) => (
                <div key={live.id} className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center text-3xl relative">
                      {live.image}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-gray-800">{live.title}</h4>
                      <p className="text-xs text-gray-600">{live.anchor} · {live.village}</p>
                      <p className="text-xs text-pink-500 mt-1">🔥 {live.viewers} 人正在观看</p>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-2 bg-pink-500 hover:bg-pink-600">
                    进入直播间
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 智慧停车弹窗 */}
      <Dialog open={showParkingModal} onOpenChange={setShowParkingModal}>
        <DialogContent className="max-w-[350px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Car className="w-5 h-5 text-cyan-500" />
              智慧停车
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-3 bg-cyan-50 rounded-lg">
              <p className="text-sm text-gray-800">
                实时车位查询 · 离场导航
              </p>
            </div>
            <div className="space-y-2">
              {parkings.map((parking) => (
                <div key={parking.id} className="p-3 bg-white border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-2xl">
                      {parking.image}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-gray-800">{parking.name}</h4>
                      <p className="text-xs text-gray-500">{parking.village}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-600">
                          空位 <span className="font-bold text-green-600">{parking.available}</span>/{parking.total}
                        </span>
                        <span className="text-xs text-gray-600">
                          距离 {parking.distance}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t">
                    <span className="text-sm font-bold text-cyan-600">{parking.price}</span>
                    <Button size="sm" variant="outline">
                      <Navigation2 className="w-4 h-4 mr-1" />
                      导航
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 语音导览弹窗 */}
      <Dialog open={showVoiceModal} onOpenChange={setShowVoiceModal}>
        <DialogContent className="max-w-[350px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-indigo-500" />
              语音导览
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-3 bg-indigo-50 rounded-lg">
              <p className="text-sm text-gray-800">
                AI语音讲解 · 边走边听
              </p>
            </div>
            <div className="space-y-2">
              {voiceGuides.map((guide) => (
                <div key={guide.id} className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">
                      {guide.image}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-gray-800">{guide.name}</h4>
                      <p className="text-xs text-gray-500">{guide.village}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-600">⏱ {guide.duration}</span>
                        <span className="text-xs text-gray-600">📍 {guide.spots}个景点</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-2 bg-indigo-500 hover:bg-indigo-600">
                    <Mic className="w-4 h-4 mr-1" />
                    开始导览
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 买柿子弹窗 */}
      <Dialog open={showPersimmonModal} onOpenChange={setShowPersimmonModal}>
        <DialogContent className="max-w-[350px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-red-500" />
              买柿子
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-800">
                🍅 四坪村柿子节专区 · 新鲜直达
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {persimmonProducts.map((product) => (
                <div key={product.id} className="p-3 bg-white border rounded-lg">
                  <div className="w-full h-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center text-3xl mb-2">
                    {product.image}
                  </div>
                  <h4 className="font-bold text-xs text-gray-800 truncate">{product.name}</h4>
                  <p className="text-xs text-gray-500 truncate">{product.village}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-bold text-red-500">¥{product.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-red-500 hover:bg-red-600 text-xs px-2"
                      onClick={() => {
                        addToTrunk(product.id);
                        setShowPersimmonModal(false);
                      }}
                    >
                      加入
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
