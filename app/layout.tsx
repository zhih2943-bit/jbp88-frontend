import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jbp88 游戏大厅演示版",
  description: "原创深蓝霓虹风移动游戏大厅界面，仅作前端展示。",
  openGraph: {
    title: "jbp88 游戏大厅演示版",
    description: "原创深蓝霓虹风移动游戏大厅界面，仅作前端展示。",
    images: [{ url: "/jbp88-logo.jpg", width: 735, height: 900, alt: "jbp88 游戏大厅演示版" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "jbp88 游戏大厅演示版",
    description: "原创深蓝霓虹风移动游戏大厅界面，仅作前端展示。",
    images: ["/jbp88-logo.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
