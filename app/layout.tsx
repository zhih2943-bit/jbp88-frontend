import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jbp88 游戏大厅",
  description: "jbp88 深蓝霓虹风移动游戏大厅。",
  openGraph: {
    title: "jbp88 游戏大厅",
    description: "jbp88 深蓝霓虹风移动游戏大厅。",
    images: [{ url: "/jbp88-logo.jpg", width: 735, height: 900, alt: "jbp88 游戏大厅" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "jbp88 游戏大厅",
    description: "jbp88 深蓝霓虹风移动游戏大厅。",
    images: ["/jbp88-logo.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
