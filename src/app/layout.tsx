import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '屏南数字新农资',
    template: '%s | 屏南数字新农资',
  },
  description:
    '让游客流量变成乡村生产力。手机变新农具、直播变新农活、数据变新农资，打造屏南乡村数字资产闭环。',
  keywords: [
    '屏南',
    '柿子节',
    '数字乡村',
    '新农资',
    '乡村数字化',
    '后备箱经济',
    '流量沉淀',
  ],
  authors: [{ name: '屏南乡村数字化黑客松' }],
  generator: 'Coze Code',
  openGraph: {
    title: '屏南数字新农资 | 让游客流量变成乡村生产力',
    description:
      '手机变新农具、直播变新农活、数据变新农资，打造屏南乡村数字资产闭环。',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
