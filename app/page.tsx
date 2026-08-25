"use client";

import { useEffect, useState } from "react";

const categories = [
  { name: "首页", icon: "⌂" }, { name: "热门", icon: "♨" },
  { name: "电子游戏", icon: "▦" }, { name: "真人视讯", icon: "◉" },
  { name: "捕鱼游戏", icon: "⌁" }, { name: "彩票游戏", icon: "✦" },
  { name: "体育竞猜", icon: "◒" }, { name: "棋牌游戏", icon: "♞" },
  { name: "jbp88影视", icon: "▶" },
];

const gameSections = [
  { title: "热门", icon: "♨", tone: "hot", games: [
    { title: "甜蜜冲刺", tag: "10,000", art: "🍭" }, { title: "烈焰金猴", tag: "大奖赛", art: "🐒" },
    { title: "麻将胡了", tag: "经典", art: "🀄" }, { title: "好运连连", tag: "每日", art: "🍊" },
  ]},
  { title: "电子游戏", icon: "▦", tone: "arcade", games: [
    { title: "星际电子", tag: "ARCADE", art: "👾" }, { title: "霓虹乐园", tag: "PLAY", art: "🎡" },
    { title: "黄金传说", tag: "QUEST", art: "🪙" }, { title: "极速赛车", tag: "RACING", art: "🏎️" },
  ]},
  { title: "互动视讯", icon: "◉", tone: "live", games: [
    { title: "星光舞台", tag: "LIVE", art: "🎙️" }, { title: "魔术剧场", tag: "SHOW", art: "🎩" },
    { title: "即将推出", tag: "COMING", art: "⌛" },
  ]},
  { title: "捕鱼游戏", icon: "⌁", tone: "ocean", games: [
    { title: "深海探险", tag: "OCEAN", art: "🐠" }, { title: "珊瑚秘境", tag: "REEF", art: "🪸" },
    { title: "海底宝藏", tag: "TREASURE", art: "🐚" },
  ]},
];

const quickActions = [
  { label: "演示充值", icon: "▰", color: "cyan" }, { label: "演示提现", icon: "▱", color: "green" },
  { label: "每日任务", icon: "★", color: "purple" }, { label: "我的积分", icon: "●", color: "pink" },
  { label: "邀请好友", icon: "•••", color: "blue" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("首页");
  const [activeNav, setActiveNav] = useState("首页");
  const [slide, setSlide] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % 3), 4200);
    return () => window.clearInterval(timer);
  }, []);

  function showDemo(label: string) {
    setNotice(`${label}为界面演示功能，不会提交账户或资金信息。`);
  }

  return (
    <main className="site-stage">
      <section className="app-shell" aria-label="jbp88 游戏大厅演示界面">
        <header className="topbar">
          <button className="brand" onClick={() => showDemo("品牌首页")} aria-label="返回首页">
            <img className="brand-logo" src="/jbp88-logo.jpg" alt="jbp88 金蟾 Logo" />
            <span><strong>jbp88</strong><small>游戏大厅</small></span>
          </button>
          <div className="account-actions">
            <button onClick={() => showDemo("登录")}>登录</button>
            <button onClick={() => showDemo("注册")}>注册</button>
          </div>
        </header>

        <section className="hero" aria-label="活动轮播">
          <img src="/jbp88-logo.jpg" alt="jbp88 聚宝盆金蟾品牌图" />
          <div className="hero-overlay">
            <span className="eyebrow">WELCOME BONUS</span>
            <h1>{slide === 0 ? "jbp88 幸运新世界" : slide === 1 ? "每日登录 领取积分" : "好友同乐 周末加倍"}</h1>
            <p>{slide === 0 ? "全新界面体验，畅玩精选内容" : slide === 1 ? "完成演示任务，解锁更多徽章" : "邀请好友体验原创游戏大厅"}</p>
            <button onClick={() => showDemo("立即体验")}>立即体验</button>
          </div>
          <div className="carousel-dots" aria-label="轮播页码">
            {[0, 1, 2].map((item) => <button key={item} className={slide === item ? "active" : ""} onClick={() => setSlide(item)} aria-label={`转到第 ${item + 1} 张`} />)}
          </div>
        </section>

        <div className="ticker" role="status"><span>◆</span><div>欢迎来到 jbp88 游戏大厅演示版。本页面仅展示原创界面与交互，不提供真实充值、提现或投注服务。</div></div>

        <section className="quick-grid" aria-label="快捷功能">
          {quickActions.map((action) => (
            <button key={action.label} onClick={() => showDemo(action.label)}>
              <span className={`quick-icon ${action.color}`}>{action.icon}</span><b>{action.label}</b>
            </button>
          ))}
        </section>

        <nav className="category-tabs" aria-label="游戏分类">
          {categories.map((category) => (
            <button key={category.name} className={activeCategory === category.name ? "active" : ""} onClick={() => {
              setActiveCategory(category.name);
              if (category.name !== "首页") document.getElementById(category.name === "热门" ? "热门" : "电子游戏")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}><span>{category.icon}</span>{category.name}</button>
          ))}
        </nav>

        <div className="content-area">
          {gameSections.map((section) => (
            <section className="game-section" id={section.title} key={section.title}>
              <div className="section-heading">
                <h2><span>{section.icon}</span>{section.title}</h2>
                <button onClick={() => showDemo(`${section.title}更多内容`)} aria-label={`查看更多${section.title}`}>›</button>
              </div>
              <div className="game-row">
                {section.games.map((game, index) => (
                  <button className={`game-card ${section.tone} card-${index}`} key={game.title} onClick={() => showDemo(game.title)}>
                    <span className="game-shine" /><span className="game-art" aria-hidden="true">{game.art}</span>
                    <span className="game-copy"><strong>{game.title}</strong><small>{game.tag}</small></span>
                  </button>
                ))}
              </div>
            </section>
          ))}

          <section className="partner-panel">
            <div><span>◈</span><b>原创内容</b><small>独立设计</small></div>
            <div><span>✓</span><b>演示模式</b><small>无真实资金</small></div>
            <div><span>⚡</span><b>极速体验</b><small>移动端适配</small></div>
          </section>
          <p className="legal-note">本项目为 jbp88 原创前端界面演示，与第三方平台无隶属关系，不提供真钱游戏、充值、提现或账户服务。</p>
        </div>

        <nav className="bottom-nav" aria-label="底部导航">
          {[{name:"首页",icon:"⌂"},{name:"活动",icon:"♔"},{name:"客服",icon:"◉"},{name:"下载",icon:"⇩"},{name:"我的",icon:"●"}].map((item) => (
            <button key={item.name} className={activeNav === item.name ? "active" : ""} onClick={() => {
              setActiveNav(item.name); if (item.name === "首页") window.scrollTo({ top: 0, behavior: "smooth" }); else showDemo(item.name);
            }}><span>{item.icon}</span><b>{item.name}</b></button>
          ))}
        </nav>

        {notice && (
          <div className="modal-backdrop" role="presentation" onClick={() => setNotice(null)}>
            <section className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" onClick={(event) => event.stopPropagation()}>
              <div className="modal-icon">✦</div><h2 id="demo-title">演示模式</h2><p>{notice}</p><button onClick={() => setNotice(null)}>我知道了</button>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}
