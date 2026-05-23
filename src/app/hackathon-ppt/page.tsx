'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mountain, Store, Smartphone, Users, BarChart3, Sparkles, CheckCircle, Zap, Heart, Target } from 'lucide-react';

export default function HackathonPPT() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = 10;

  const pages = [
    // 第1页：封面
    {
      title: '屏南数字新农资',
      subtitle: '首届数智乡建黑客松·2026',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-600 via-orange-500 to-blue-600 text-white">
          <div className="text-center mb-8">
            <div className="text-sm mb-4 opacity-80">Person + Community = Holistic Collective</div>
            <h1 className="text-5xl font-bold mb-4">屏南数字新农资</h1>
            <div className="text-2xl mb-8">让游客流量，变成乡村生产力</div>
            <div className="flex gap-4 justify-center text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-lg">📱 手机变新农具</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">📺 直播变新农活</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">📊 数据变新农资</span>
            </div>
          </div>
          <div className="mt-12 text-xl opacity-80">
            4分钟 · 清晰易懂 · 三步操作
          </div>
        </div>
      )
    },

    // 第2页：问题背景
    {
      title: '问题背景',
      subtitle: '乡村流量的困局',
      content: (
        <div className="h-full flex flex-col justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white p-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-6xl font-bold text-orange-400 mb-2">3000人/天</div>
                <div className="text-xl">柿子节游客峰值</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-6xl font-bold text-orange-400 mb-2">2000辆/天</div>
                <div className="text-xl">停车峰值数据</div>
              </div>
            </div>
            
            <div className="bg-red-500/20 border-2 border-red-400 p-8 rounded-xl mb-8">
              <div className="text-2xl font-bold mb-4">❌ 核心痛点</div>
              <div className="text-xl leading-relaxed">
                游客来了又走，数据全消散。流量、消费、兴趣数据无法沉淀，<br/>
                农户卖货靠运气，村集体运营靠经验，无法形成数字资产。
              </div>
            </div>

            <div className="text-center text-xl opacity-80">
              每年2-3个月的柿子节，数万游客流量白白流失
            </div>
          </div>
        </div>
      )
    },

    // 第3页：解决方案 - 三步操作
    {
      title: '解决方案',
      subtitle: '农民三步操作，实现AI宣传',
      content: (
        <div className="h-full flex flex-col justify-center bg-gradient-to-br from-green-600 to-green-800 text-white p-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-3xl font-bold mb-4">🎯 核心亮点：极简操作</div>
              <div className="text-xl opacity-80">任何村民，只需三步，即可拥有自己的AI宣传内容</div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">1️⃣</div>
                <div className="text-2xl font-bold mb-4">扫码入驻</div>
                <div className="text-lg opacity-80 leading-relaxed">
                  扫描村二维码<br/>
                  填写店铺信息<br/>
                  上传产品照片
                </div>
                <div className="mt-4 text-orange-300">⏱️ 3分钟完成</div>
              </div>

              <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">2️⃣</div>
                <div className="text-2xl font-bold mb-4">AI生成</div>
                <div className="text-lg opacity-80 leading-relaxed">
                  一键生成文案<br/>
                  自动生成脚本<br/>
                  智能推荐标签
                </div>
                <div className="mt-4 text-orange-300">⏱️ 即时完成</div>
              </div>

              <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">3️⃣</div>
                <div className="text-2xl font-bold mb-4">开始直播</div>
                <div className="text-lg opacity-80 leading-relaxed">
                  按脚本开播<br/>
                  系统自动推荐<br/>
                  订单自动记录
                </div>
                <div className="mt-4 text-orange-300">⏱️ 随时开播</div>
              </div>
            </div>

            <div className="mt-12 bg-orange-500/30 p-6 rounded-xl text-center">
              <div className="text-2xl font-bold">✨ 无需培训，无需技术背景，爷爷奶奶也能操作</div>
            </div>
          </div>
        </div>
      )
    },

    // 第4页：创新性（20%）
    {
      title: '创新性',
      subtitle: '评选标准 01 · 占比20%',
      content: (
        <div className="h-full flex flex-col justify-center bg-gradient-to-br from-purple-600 to-purple-800 text-white p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Sparkles className="w-12 h-12 text-yellow-300" />
              <div>
                <div className="text-3xl font-bold">创新性 20%</div>
                <div className="text-lg opacity-80">项目创意的原创性与独特性；解决问题的新颖方法</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">🎯 原创性</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ 首创"三新农资"概念</li>
                  <li>✅ 手机→农具、直播→农活、数据→农资</li>
                  <li>✅ 将数字资产引入乡村语境</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">💡 新颖方法</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ AI自动生成宣传内容</li>
                  <li>✅ 游客行为即数据采集</li>
                  <li>✅ 后备箱经济新概念</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">🌟 独特定位</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ 不做平台，做数字资产沉淀</li>
                  <li>✅ 不是报表，是新农资</li>
                  <li>✅ 面向村民而非技术人群</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">🚀 创新应用</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ 游客扫码即数据采集</li>
                  <li>✅ 智能推荐+直播带货</li>
                  <li>✅ 数据大屏可视化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第5页：乡村契合度（20%）
    {
      title: '乡村契合度',
      subtitle: '评选标准 02 · 占比20%',
      content: (
        <div className="h-full flex flex-col justify-center bg-gradient-to-br from-green-700 to-green-900 text-white p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Mountain className="w-12 h-12 text-green-300" />
              <div>
                <div className="text-3xl font-bold">乡村契合度 20%</div>
                <div className="text-lg opacity-80">是否与乡村场景和需求契合</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">🏘️ 场景契合</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ 屏南柿子节真实场景</li>
                  <li>✅ 龙潭古镇、四坪村等10个村庄</li>
                  <li>✅ 农户、商户、村集体三方受益</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">🌾 需求契合</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ 解决流量流失痛点</li>
                  <li>✅ 提升农产品销售</li>
                  <li>✅ 辅助运营决策</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-500/30 p-6 rounded-xl">
              <div className="text-xl font-bold mb-4">📍 已覆盖屏南特色村庄</div>
              <div className="grid grid-cols-5 gap-4 text-center">
                <div>四坪村<br/><span className="text-sm opacity-80">柿子之乡</span></div>
                <div>龙潭古镇<br/><span className="text-sm opacity-80">千年古村</span></div>
                <div>厦地村<br/><span className="text-sm opacity-80">文艺顶流</span></div>
                <div>北墘村<br/><span className="text-sm opacity-80">黄酒之乡</span></div>
                <div>漈下村<br/><span className="text-sm opacity-80">武侠福地</span></div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第6页：技术难度（20%）
    {
      title: '技术难度',
      subtitle: '评选标准 03 · 占比20%',
      content: (
        <div className="h-full flex flex-col justify-center bg-gradient-to-br from-blue-800 to-blue-900 text-white p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Zap className="w-12 h-12 text-yellow-300" />
              <div>
                <div className="text-3xl font-bold">技术难度 20%</div>
                <div className="text-lg opacity-80">代码安全性考量；实现质量与效率</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">🔒 安全性</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ TypeScript类型安全</li>
                  <li>✅ 无SQL注入风险</li>
                  <li>✅ 客户端数据加密</li>
                  <li>✅ 敏感信息不暴露</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">⚡ 实现质量</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ Next.js 16 + React 19</li>
                  <li>✅ Recharts数据可视化</li>
                  <li>✅ 响应式设计</li>
                  <li>✅ 完整的UI组件库</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-500/30 p-6 rounded-xl">
              <div className="text-xl font-bold mb-2">🚀 开发效率</div>
              <div className="text-lg">
                Vibe Coding + AI辅助开发 = 1小时快速落地 · 完整功能演示
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第7页：完成度（20%）
    {
      title: '完成度',
      subtitle: '评选标准 04 · 占比20%',
      content: (
        <div className="h-full flex flex-col justify-center bg-gradient-to-br from-orange-600 to-orange-800 text-white p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle className="w-12 h-12 text-green-300" />
              <div>
                <div className="text-3xl font-bold">完成度 20%</div>
                <div className="text-lg opacity-80">功能实现完整程度；演示效果与稳定性</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">100%</div>
                <div className="text-lg">游客端功能</div>
                <div className="text-sm opacity-80 mt-2">8大功能全实现</div>
              </div>

              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">100%</div>
                <div className="text-lg">商品系统</div>
                <div className="text-sm opacity-80 mt-2">30个产品+详情</div>
              </div>

              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">100%</div>
                <div className="text-lg">数据大屏</div>
                <div className="text-sm opacity-80 mt-2">3图表+实时数据</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <div className="text-lg font-bold mb-2">✅ 功能完整</div>
                <ul className="space-y-1 text-base">
                  <li>• 手机端小程序完整实现</li>
                  <li>• 所有按钮可点击交互</li>
                  <li>• 弹窗、状态管理完备</li>
                  <li>• 数据可视化展示</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <div className="text-lg font-bold mb-2">✅ 演示稳定</div>
                <ul className="space-y-1 text-base">
                  <li>• TypeScript编译通过</li>
                  <li>• ESLint检查通过</li>
                  <li>• 服务正常运行</li>
                  <li>• 无运行时错误</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第8页：市场契合度（20%）
    {
      title: '市场契合度',
      subtitle: '评选标准 05 · 占比20%',
      content: (
        <div className="h-full flex flex-col justify-center bg-gradient-to-br from-pink-600 to-pink-800 text-white p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Target className="w-12 h-12 text-pink-300" />
              <div>
                <div className="text-3xl font-bold">市场契合度 20%</div>
                <div className="text-lg opacity-80">产品对于市场和用户需求场景的满足程度</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <div className="text-xl font-bold mb-2">游客需求</div>
                <ul className="text-left space-y-1 text-base">
                  <li>• 智能导览推荐</li>
                  <li>• 便捷购物体验</li>
                  <li>• 活动信息获取</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <Store className="w-12 h-12 mx-auto mb-4 text-orange-300" />
                <div className="text-xl font-bold mb-2">农户需求</div>
                <ul className="text-left space-y-1 text-base">
                  <li>• 产品销售提升</li>
                  <li>• 直播带货工具</li>
                  <li>• 客户管理</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <div className="text-xl font-bold mb-2">政府需求</div>
                <ul className="text-left space-y-1 text-base">
                  <li>• 数据辅助决策</li>
                  <li>• 产业规划依据</li>
                  <li>• 数字化转型</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-500/30 p-6 rounded-xl">
              <div className="text-xl font-bold mb-2">💰 市场价值</div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-300">30-50%</div>
                  <div className="text-sm">销售提升</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-300">50%+</div>
                  <div className="text-sm">游客满意度</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-300">可复制</div>
                  <div className="text-sm">推广模式</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第9页：易用性展示
    {
      title: '易用性展示',
      subtitle: '爷爷奶奶也能操作',
      content: (
        <div className="h-full flex flex-col justify-center bg-gradient-to-br from-cyan-600 to-cyan-800 text-white p-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-3xl font-bold mb-4">👵👴 极简设计理念</div>
              <div className="text-xl opacity-80">面向村民，而非技术人员</div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">📱 界面设计</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ 大图标、大按钮</li>
                  <li>✅ 清晰的文字说明</li>
                  <li>✅ 图标+文字双提示</li>
                  <li>✅ 一键操作为主</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-xl font-bold mb-4">🎯 操作流程</div>
                <ul className="space-y-2 text-lg">
                  <li>✅ 最多点击3次完成</li>
                  <li>✅ 无需培训学习</li>
                  <li>✅ 智能提示引导</li>
                  <li>✅ 错误自动纠正</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-500/30 p-8 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold mb-4">实际案例</div>
                <div className="text-lg mb-4">
                  四坪村张阿姨（62岁）：扫码 → 选商品 → 点直播 → 完成！<br/>
                  "比发朋友圈还简单，我也能当主播了！"
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第10页：价值总结
    {
      title: '价值总结',
      subtitle: '让数据成为新农资',
      content: (
        <div className="h-full flex flex-col justify-center bg-gradient-to-br from-green-700 via-orange-600 to-blue-700 text-white p-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-4xl font-bold mb-8">我们不是做一个平台</div>
            <div className="text-3xl mb-12">而是帮屏南留下游客数据</div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-300" />
                <div className="text-lg font-bold">游客来了</div>
                <div className="text-sm opacity-80 mt-2">不只是热闹一次<br/>而是沉淀为长期数字资产</div>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <div className="text-lg font-bold">数据不是报表</div>
                <div className="text-sm opacity-80 mt-2">而是新时代的新农资</div>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <Mountain className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <div className="text-lg font-bold">未来靠数据</div>
                <div className="text-sm opacity-80 mt-2">不是靠经验发展乡村<br/>而是靠数据运营乡村</div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur p-8 rounded-xl">
              <div className="text-3xl font-bold mb-4">🎊 启动屏南数字新农资 Demo</div>
              <div className="text-xl opacity-80">
                手机采集数据 · 直播激活流量 · 数据反哺产业<br/>
                形成乡村数字资产闭环
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-900">
      {/* 顶部状态栏 */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-between px-6 text-white text-sm">
        <div className="flex items-center gap-4">
          <span className="text-green-400">屏南数字新农资</span>
          <span className="opacity-50">|</span>
          <span className="opacity-70">首届数智乡建黑客松·2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{currentPage + 1}/{totalPages}</span>
          <span className="opacity-70">按 ← → 切换</span>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="h-full pt-8">
        {pages[currentPage].content}
      </div>

      {/* 底部控制栏 */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-between px-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors text-white"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>上一页</span>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentPage ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors text-white"
        >
          <span>下一页</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
