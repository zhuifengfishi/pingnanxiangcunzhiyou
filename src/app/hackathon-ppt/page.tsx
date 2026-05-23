'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HackathonPPT() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = 10;

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const pages = [
    // 第1页：封面
    {
      title: '屏南数字新农资',
      subtitle: '首届数智乡建黑客松·2026',
      content: (
        <div className="min-h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-600 via-orange-500 to-blue-600 text-white p-8">
          <div className="text-center">
            <p className="text-sm mb-4 opacity-80">Person + Community = Holistic Collective</p>
            <h1 className="text-5xl font-bold mb-4">屏南数字新农资</h1>
            <p className="text-2xl mb-8">让游客流量，变成乡村生产力</p>
            <div className="flex gap-4 justify-center text-lg flex-wrap">
              <span className="bg-white/20 px-4 py-2 rounded-lg">📱 手机变新农具</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">📺 直播变新农活</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">📊 数据变新农资</span>
            </div>
          </div>
          <p className="mt-12 text-xl opacity-80">
            4分钟 · 清晰易懂 · 三步操作
          </p>
        </div>
      )
    },

    // 第2页：问题背景
    {
      title: '问题背景',
      subtitle: '乡村流量的困局',
      content: (
        <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-5xl font-bold text-orange-400 mb-2">3000人/天</p>
                <p className="text-xl">柿子节游客峰值</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-5xl font-bold text-orange-400 mb-2">2000辆/天</p>
                <p className="text-xl">停车峰值数据</p>
              </div>
            </div>
            
            <div className="bg-red-500/20 border-2 border-red-400 p-6 rounded-xl mb-8">
              <p className="text-2xl font-bold mb-4">❌ 核心痛点</p>
              <p className="text-xl">
                游客来了又走，数据全消散。流量、消费、兴趣数据无法沉淀，<br/>
                农户卖货靠运气，村集体运营靠经验，无法形成数字资产。
              </p>
            </div>

            <p className="text-center text-xl opacity-80">
              每年2-3个月的柿子节，数万游客流量白白流失
            </p>
          </div>
        </div>
      )
    },

    // 第3页：解决方案 - 三步操作
    {
      title: '解决方案',
      subtitle: '农民三步操作，实现AI宣传',
      content: (
        <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-green-600 to-green-800 text-white p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-3xl font-bold mb-4">🎯 核心亮点：极简操作</p>
              <p className="text-xl opacity-80">任何村民，只需三步，即可拥有自己的AI宣传内容</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-5xl mb-4">1️⃣</p>
                <p className="text-2xl font-bold mb-4">扫码入驻</p>
                <p className="text-lg opacity-80">
                  扫描村二维码<br/>
                  填写店铺信息<br/>
                  上传产品照片
                </p>
                <p className="mt-4 text-orange-300">⏱️ 3分钟完成</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-5xl mb-4">2️⃣</p>
                <p className="text-2xl font-bold mb-4">AI生成</p>
                <p className="text-lg opacity-80">
                  一键生成文案<br/>
                  自动生成脚本<br/>
                  智能推荐标签
                </p>
                <p className="mt-4 text-orange-300">⏱️ 即时完成</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-5xl mb-4">3️⃣</p>
                <p className="text-2xl font-bold mb-4">开始直播</p>
                <p className="text-lg opacity-80">
                  按脚本开播<br/>
                  系统自动推荐<br/>
                  订单自动记录
                </p>
                <p className="mt-4 text-orange-300">⏱️ 随时开播</p>
              </div>
            </div>

            <div className="mt-8 bg-orange-500/30 p-6 rounded-xl text-center">
              <p className="text-2xl font-bold">✨ 无需培训，无需技术背景，爷爷奶奶也能操作</p>
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
        <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-3xl font-bold">✨ 创新性 20%</p>
              <p className="text-lg opacity-80">项目创意的原创性与独特性；解决问题的新颖方法</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🎯 原创性</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 首创"三新农资"概念</li>
                  <li>✅ 手机→农具、直播→农活、数据→农资</li>
                  <li>✅ 将数字资产引入乡村语境</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">💡 新颖方法</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ AI自动生成宣传内容</li>
                  <li>✅ 游客行为即数据采集</li>
                  <li>✅ 后备箱经济新概念</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🌟 独特定位</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 不做平台，做数字资产沉淀</li>
                  <li>✅ 不是报表，是新农资</li>
                  <li>✅ 面向村民而非技术人群</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🚀 创新应用</p>
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
        <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-green-700 to-green-900 text-white p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-3xl font-bold">🏘️ 乡村契合度 20%</p>
              <p className="text-lg opacity-80">是否与乡村场景和需求契合</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">📍 真实场景</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 屏南柿子节（真实案例）</li>
                  <li>✅ 10个特色村庄覆盖</li>
                  <li>✅ 年接待游客数万+</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">👥 真实需求</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 农户卖货难</li>
                  <li>✅ 村集体运营缺数据</li>
                  <li>✅ 游客服务待提升</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🎯 三方受益</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 农户：增收30-50%</li>
                  <li>✅ 游客：体验升级</li>
                  <li>✅ 村集体：数据决策</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🔄 可持续性</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 本地化运营</li>
                  <li>✅ 村民自主使用</li>
                  <li>✅ 数据持续沉淀</li>
                </ul>
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
        <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-800 to-blue-900 text-white p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-3xl font-bold">⚙️ 技术难度 20%</p>
              <p className="text-lg opacity-80">代码安全性考量；实现质量与效率</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🛡️ 安全性</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ TypeScript类型安全</li>
                  <li>✅ 数据校验与过滤</li>
                  <li>✅ 用户隐私保护</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">📊 实现质量</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ React 19 + Next.js 16</li>
                  <li>✅ Recharts数据可视化</li>
                  <li>✅ 响应式设计</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">⚡ 开发效率</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 1小时快速落地</li>
                  <li>✅ Vibe Coding模式</li>
                  <li>✅ 热更新开发</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🔧 技术栈</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ TypeScript 5</li>
                  <li>✅ Tailwind CSS 4</li>
                  <li>✅ shadcn/ui组件</li>
                </ul>
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
        <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-orange-600 to-orange-800 text-white p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-3xl font-bold">✅ 完成度 20%</p>
              <p className="text-lg opacity-80">功能实现完整程度；演示效果与稳定性</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">📱 功能完整</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 8大核心功能 100%</li>
                  <li>✅ 30个商品详情</li>
                  <li>✅ 3个数据图表</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🎨 UI完整</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 主应用页面</li>
                  <li>✅ 手机端小程序</li>
                  <li>✅ 路演PPT</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🚀 演示稳定</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 所有按钮可点击</li>
                  <li>✅ 所有交互可用</li>
                  <li>✅ 无运行时错误</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">📦 交付完整</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 代码已推送到GitHub</li>
                  <li>✅ 文档齐全</li>
                  <li>✅ 可立即演示</li>
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
        <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-teal-600 to-teal-800 text-white p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-3xl font-bold">🎯 市场契合度 20%</p>
              <p className="text-lg opacity-80">产品对于市场和用户需求场景的满足程度</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">👥 游客需求</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 智能导览推荐</li>
                  <li>✅ 便捷购物体验</li>
                  <li>✅ 后备箱好物清单</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">👨‍🌾 农户需求</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 销售额提升30-50%</li>
                  <li>✅ 直播带货能力</li>
                  <li>✅ AI内容生成</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🏛️ 政府需求</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 数据决策支持</li>
                  <li>✅ 乡村振兴抓手</li>
                  <li>✅ 产业升级赋能</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-xl font-bold mb-4">🔄 可复制性</p>
                <ul className="space-y-2 text-lg">
                  <li>✅ 适用所有乡村景区</li>
                  <li>✅ 低成本部署</li>
                  <li>✅ 易推广复制</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 第9页：易用性展示
    {
      title: '易用性',
      subtitle: '爷爷奶奶也能操作',
      content: (
        <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-pink-600 to-pink-800 text-white p-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-3xl font-bold mb-4">👴👵 面向村民，而非技术人群</p>
              <p className="text-xl opacity-80">比发朋友圈还简单！</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-5xl mb-4">📱</p>
                <p className="text-xl font-bold mb-2">扫码入驻</p>
                <p className="opacity-80">就像加微信好友</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-5xl mb-4">🤖</p>
                <p className="text-xl font-bold mb-2">AI生成</p>
                <p className="opacity-80">一键生成，无需输入</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-5xl mb-4">🎥</p>
                <p className="text-xl font-bold mb-2">开始直播</p>
                <p className="opacity-80">按脚本读，不用怕忘词</p>
              </div>
            </div>

            <div className="bg-yellow-500/30 p-6 rounded-xl text-center">
              <p className="text-2xl font-bold mb-2">💡 真实案例</p>
              <p className="text-lg">
                四坪村张阿姨，60岁，种柿子为生。扫码入驻后，<br/>
                AI自动生成"屏南柿子节，百年古村，甜在心头"文案，<br/>
                第一次直播就卖出50斤柿子，收入800元！
              </p>
            </div>
          </div>
        </div>
      )
    },

    // 第10页：价值总结
    {
      title: '价值总结',
      subtitle: '三方受益，持续发展',
      content: (
        <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-3xl font-bold mb-4">🎉 三方受益，持续发展</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-4xl mb-4">👥</p>
                <p className="text-xl font-bold mb-2">游客</p>
                <p className="opacity-80">体验升级<br/>省时省力</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-4xl mb-4">👨‍🌾</p>
                <p className="text-xl font-bold mb-2">农户</p>
                <p className="opacity-80">增收30-50%<br/>能力提升</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl text-center">
                <p className="text-4xl mb-4">🏛️</p>
                <p className="text-xl font-bold mb-2">政府</p>
                <p className="opacity-80">数据决策<br/>乡村振兴</p>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-2xl font-bold mb-4">手机采集、直播带货、数据沉淀</p>
              <p className="text-xl">让屏南游客流量变成乡村数字资产与持续生产力</p>
            </div>

            <div className="bg-green-500/30 p-6 rounded-xl text-center">
              <p className="text-2xl font-bold">🚀 启动屏南数字新农资 Demo</p>
              <p className="text-lg mt-2">游客来了，不只是热闹一次，而是沉淀为长期数字资产</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900">
      {/* 顶部状态栏 */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-black/50 z-50 flex items-center justify-between px-6 text-white text-sm">
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
      <div className="pt-8 pb-16 min-h-screen">
        {pages[currentPage].content}
      </div>

      {/* 底部控制栏 */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-black/50 z-50 flex items-center justify-between px-6">
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
