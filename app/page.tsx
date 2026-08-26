"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Icon, type IconName } from "./icons";

type MainView = "首页" | "活动" | "客服" | "下载" | "我的";
type DialogName = "充值" | "提现" | "任务" | "我的收入" | "邀请好友" | "活动详情" | "下载说明" | "游戏详情" | null;

const categories: Array<{ name: string; icon: IconName }> = [
  { name: "首页", icon: "home" }, { name: "热门", icon: "flame" },
  { name: "电子游戏", icon: "slots" }, { name: "真人视讯", icon: "video" },
  { name: "捕鱼游戏", icon: "fish" }, { name: "彩票游戏", icon: "ticket" },
  { name: "体育竞猜", icon: "ball" }, { name: "棋牌游戏", icon: "chess" },
  { name: "jbp88影视", icon: "film" },
];

const quickActions: Array<{ label: Exclude<DialogName, "活动详情" | "下载说明" | "游戏详情" | null>; icon: IconName; color: string }> = [
  { label: "充值", icon: "wallet", color: "cyan" }, { label: "提现", icon: "withdraw", color: "green" },
  { label: "任务", icon: "task", color: "purple" }, { label: "我的收入", icon: "income", color: "pink" },
  { label: "邀请好友", icon: "invite", color: "blue" },
];

const gameSections: Array<{ title: string; icon: IconName; tone: string; games: Array<{ title: string; tag: string; art: string; image?: string }> }> = [
  { title: "热门", icon: "flame", tone: "hot", games: [
    { title: "极速糖果", tag: "PRAGMATIC PLAY", art: "🍭", image: "/game-covers/hot-1.png" }, { title: "麻将大胜三宝壶", tag: "PRAGMATIC PLAY", art: "🐉", image: "/game-covers/hot-2.png" },
    { title: "麻将胡了", tag: "PGSOFT", art: "🀄", image: "/game-covers/hot-3.png" }, { title: "麻将胡了2", tag: "PGSOFT", art: "🀄", image: "/game-covers/hot-4.png" },
  ]},
  { title: "电子游戏", icon: "slots", tone: "arcade", games: [
    { title: "PP电子", tag: "PRAGMATIC PLAY", art: "⚡", image: "/game-covers/arcade-1.png" }, { title: "PG电子", tag: "PGSOFT", art: "🎰", image: "/game-covers/arcade-2.png" },
    { title: "CQ9电子", tag: "CQ9", art: "👑", image: "/game-covers/arcade-3.png" }, { title: "JDB电子", tag: "JDB", art: "💎" },
  ]},
  { title: "真人视讯", icon: "video", tone: "live", games: [
    { title: "PP真人", tag: "PRAGMATIC PLAY", art: "♠️", image: "/game-covers/live-1.png" }, { title: "BBIN视讯", tag: "BBIN", art: "♦️", image: "/game-covers/live-2.png" },
    { title: "即将推出", tag: "COMING SOON", art: "⌛", image: "/game-covers/live-3.png" },
  ]},
  { title: "捕鱼游戏", icon: "fish", tone: "ocean", games: [
    { title: "深海探险", tag: "OCEAN", art: "🐠" }, { title: "珊瑚秘境", tag: "REEF", art: "🪸" },
    { title: "海底宝藏", tag: "TREASURE", art: "🐚" },
  ]},
  { title: "彩票游戏", icon: "ticket", tone: "lottery", games: [
    { title: "幸运号码", tag: "LUCKY", art: "🎟️" }, { title: "缤纷转盘", tag: "SPIN", art: "🎯" }, { title: "欢乐彩球", tag: "COLOR", art: "🔮" },
  ]},
  { title: "体育竞猜", icon: "ball", tone: "sport", games: [
    { title: "足球中心", tag: "FOOTBALL", art: "⚽" }, { title: "篮球现场", tag: "BASKETBALL", art: "🏀" }, { title: "极速赛场", tag: "RACE", art: "🏁" },
  ]},
  { title: "棋牌游戏", icon: "chess", tone: "chess", games: [
    { title: "欢乐棋牌", tag: "CARD", art: "♠️" }, { title: "象棋对弈", tag: "CHESS", art: "♟️" }, { title: "好友牌局", tag: "FRIENDS", art: "🃏" },
  ]},
  { title: "jbp88影视", icon: "film", tone: "movie", games: [
    { title: "热门电影", tag: "MOVIE", art: "🎞️" }, { title: "精彩短剧", tag: "SERIES", art: "📺" }, { title: "即将上线", tag: "COMING", art: "✨" },
  ]},
];

const navItems: Array<{ name: MainView; icon: IconName }> = [
  { name: "首页", icon: "home" }, { name: "活动", icon: "activity" }, { name: "客服", icon: "headset" },
  { name: "下载", icon: "download" }, { name: "我的", icon: "user" },
];

const activities = [
  { tag: "新会员", title: "注册即领体验积分", copy: "完成注册后即可解锁新手任务与专属徽章。", tone: "gold", icon: "gift" as IconName },
  { tag: "每日活动", title: "连续签到七日礼", copy: "每日回来签到，连续七天可点亮全部奖励。", tone: "violet", icon: "activity" as IconName },
  { tag: "好友计划", title: "邀请好友一起体验", copy: "分享专属邀请码，与好友一起探索游戏大厅。", tone: "blue", icon: "invite" as IconName },
];

export default function Home() {
  const [view, setView] = useState<MainView>("首页");
  const [category, setCategory] = useState("首页");
  const [slide, setSlide] = useState(0);
  const [authMode, setAuthMode] = useState<"登录" | "注册" | null>(null);
  const [dialog, setDialog] = useState<DialogName>(null);
  const [selectedItem, setSelectedItem] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [toast, setToast] = useState("");
  const [faq, setFaq] = useState<number | null>(null);
  const [chatText, setChatText] = useState("");
  const [messages, setMessages] = useState<string[]>(["您好，我是 jbp88 在线助手，请问有什么可以帮您？"]);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % 3), 4200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2300);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const visibleSections = useMemo(() => category === "首页" ? gameSections : gameSections.filter((section) => section.title === category), [category]);

  function changeView(next: MainView) {
    setView(next);
    setDialog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submitAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoggedIn(true);
    setAuthMode(null);
    setToast(authMode === "注册" ? "账号注册成功" : "登录成功，欢迎回来");
  }

  function openDialog(name: DialogName, item = "") {
    setSelectedItem(item);
    setDialog(name);
  }

  function confirmDemo(message: string) {
    setDialog(null);
    setToast(message);
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!chatText.trim()) return;
    setMessages((items) => [...items, chatText.trim(), "已收到您的消息，在线客服稍后为您处理。"]);
    setChatText("");
  }

  return (
    <main className="site-stage">
      <section className="app-shell" aria-label="jbp88 游戏大厅">
        {view === "首页" ? (
          <header className="topbar">
            <button className="brand" onClick={() => changeView("首页")} aria-label="返回首页">
              <img className="brand-logo" src="/jbp88-logo.jpg" alt="jbp88 金蟾 Logo" />
              <span><strong>jbp88</strong><small>游戏大厅</small></span>
            </button>
            <div className="account-actions">
              {loggedIn ? <button className="member-chip" onClick={() => changeView("我的")}><Icon name="user" />会员中心</button> : <><button onClick={() => setAuthMode("登录")}>登录</button><button onClick={() => setAuthMode("注册")}>注册</button></>}
            </div>
          </header>
        ) : (
          <header className="sub-header"><button onClick={() => changeView("首页")} aria-label="返回首页">‹</button><h1>{view}</h1><span /></header>
        )}

        {view === "首页" && <HomeView slide={slide} setSlide={setSlide} category={category} setCategory={setCategory} sections={visibleSections} openDialog={openDialog} />}
        {view === "活动" && <ActivityView openDialog={openDialog} />}
        {view === "客服" && <SupportView messages={messages} chatText={chatText} setChatText={setChatText} sendMessage={sendMessage} faq={faq} setFaq={setFaq} />}
        {view === "下载" && <DownloadView openDialog={openDialog} />}
        {view === "我的" && <ProfileView loggedIn={loggedIn} setAuthMode={setAuthMode} openDialog={openDialog} onLogout={() => { setLoggedIn(false); setToast("已退出账号"); }} />}

        <nav className="bottom-nav" aria-label="底部导航">
          {navItems.map((item) => <button key={item.name} className={view === item.name ? "active" : ""} onClick={() => changeView(item.name)}><Icon name={item.icon} /><b>{item.name}</b></button>)}
        </nav>

        {authMode && <AuthDialog mode={authMode} setMode={setAuthMode} onSubmit={submitAuth} />}
        {dialog && <ActionDialog name={dialog} selectedItem={selectedItem} onClose={() => setDialog(null)} onConfirm={confirmDemo} />}
        {toast && <div className="toast" role="status"><Icon name="check" />{toast}</div>}
      </section>
    </main>
  );
}

function HomeView({ slide, setSlide, category, setCategory, sections, openDialog }: {
  slide: number; setSlide: (value: number) => void; category: string; setCategory: (value: string) => void;
  sections: typeof gameSections; openDialog: (name: DialogName, item?: string) => void;
}) {
  const headline = ["jbp88 幸运新世界", "每日登录 领取积分", "好友同乐 周末加倍"][slide];
  const copy = ["全新界面体验，畅玩精选内容", "完成每日任务，解锁更多奖励", "邀请好友体验 jbp88 游戏大厅"][slide];
  return <>
    <section className="hero" aria-label="活动轮播">
      <img src="/jbp88-logo.jpg" alt="jbp88 聚宝盆金蟾品牌图" />
      <div className="hero-overlay"><span className="eyebrow">WELCOME BONUS</span><h1>{headline}</h1><p>{copy}</p><button onClick={() => openDialog("活动详情", headline)}>立即体验</button></div>
      <div className="carousel-dots" aria-label="轮播页码">{[0, 1, 2].map((item) => <button key={item} className={slide === item ? "active" : ""} onClick={() => setSlide(item)} aria-label={`转到第 ${item + 1} 张`} />)}</div>
    </section>
    <div className="ticker" role="status"><Icon name="speaker" /><div>欢迎来到 jbp88 游戏大厅，精彩活动与热门游戏尽在掌握。</div></div>
    <section className="quick-grid" aria-label="快捷功能">{quickActions.map((action) => <button key={action.label} onClick={() => openDialog(action.label)}><span className={`quick-icon ${action.color}`}><Icon name={action.icon} /></span><b>{action.label}</b></button>)}</section>
    <nav className="category-tabs" aria-label="游戏分类">{categories.map((item) => <button key={item.name} className={category === item.name ? "active" : ""} onClick={() => setCategory(item.name)}><Icon name={item.icon} /><span>{item.name}</span></button>)}</nav>
    <div className="content-area">
      {sections.map((section) => <section className="game-section" key={section.title}>
        <div className="section-heading"><h2><span><Icon name={section.icon} /></span>{section.title}</h2><button onClick={() => setCategory(section.title)} aria-label={`查看更多${section.title}`}><Icon name="chevron" /></button></div>
        <div className="game-row">{section.games.map((game, index) => <button className={`game-card ${section.tone} card-${index} ${game.image ? "has-cover" : ""}`} key={game.title} onClick={() => openDialog("游戏详情", game.title)}>{game.image && <img className="game-cover" src={game.image} alt={`${game.title} 游戏封面`} />}<span className="game-shine" /><span className="game-art" aria-hidden="true">{game.art}</span><span className="game-copy"><strong>{game.title}</strong><small>{game.tag}</small></span></button>)}</div>
      </section>)}
      <section className="trust-strip"><div><Icon name="shield" /><b>安全防护</b><small>数据加密</small></div><div><Icon name="check" /><b>快捷服务</b><small>操作便捷</small></div><div><Icon name="star" /><b>流畅体验</b><small>移动端适配</small></div></section>
    </div>
  </>;
}

function ActivityView({ openDialog }: { openDialog: (name: DialogName, item?: string) => void }) {
  return <div className="inner-page"><div className="page-intro"><span>POPULAR EVENTS</span><h2>精彩活动</h2><p>查看当前热门活动</p></div><div className="activity-list">{activities.map((item) => <article className={`activity-card ${item.tone}`} key={item.title}><div className="activity-icon"><Icon name={item.icon} /></div><div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.copy}</p><button onClick={() => openDialog("活动详情", item.title)}>查看详情 <Icon name="chevron" /></button></div></article>)}</div></div>;
}

function SupportView({ messages, chatText, setChatText, sendMessage, faq, setFaq }: { messages: string[]; chatText: string; setChatText: (value: string) => void; sendMessage: (event: FormEvent<HTMLFormElement>) => void; faq: number | null; setFaq: (value: number | null) => void }) {
  const questions = [{ q: "如何注册账号？", a: "点击页面右上角注册，按提示填写账号资料。" }, { q: "如何联系在线客服？", a: "在当前页面输入问题并发送即可。" }, { q: "如何回到首页？", a: "点击底部“首页”图标即可回到大厅。" }];
  return <div className="inner-page support-page"><section className="support-hero"><span className="support-avatar"><Icon name="headset" /></span><div><small>在线客服</small><h2>您好，有什么可以帮您？</h2><p><i /> 客服在线</p></div></section><section className="chat-box"><div className="chat-messages">{messages.map((message, index) => <div className={index % 2 ? "message mine" : "message"} key={`${message}-${index}`}>{message}</div>)}</div><form onSubmit={sendMessage}><input value={chatText} onChange={(event) => setChatText(event.target.value)} placeholder="输入您的问题…" aria-label="客服消息" /><button aria-label="发送消息"><Icon name="chat" /></button></form></section><h3 className="page-section-title">常见问题</h3><div className="faq-list">{questions.map((item, index) => <button key={item.q} className={faq === index ? "open" : ""} onClick={() => setFaq(faq === index ? null : index)}><span><Icon name="help" />{item.q}<Icon name="chevron" /></span>{faq === index && <p>{item.a}</p>}</button>)}</div></div>;
}

function DownloadView({ openDialog }: { openDialog: (name: DialogName, item?: string) => void }) {
  return <div className="inner-page download-page"><section className="download-hero"><img src="/jbp88-logo.jpg" alt="jbp88 应用图标" /><span>jbp88 MOBILE</span><h2>随时随地 畅享体验</h2><p>选择您的设备查看安全安装说明</p></section><div className="download-cards"><button onClick={() => openDialog("下载说明", "iPhone / iPad")}><span className="os-icon apple"><Icon name="apple" /></span><span><small>Download for</small><b>iPhone / iPad</b></span><Icon name="chevron" /></button><button onClick={() => openDialog("下载说明", "Android")}><span className="os-icon android"><Icon name="android" /></span><span><small>Download for</small><b>Android</b></span><Icon name="chevron" /></button></div><section className="security-note"><Icon name="shield" /><div><b>安全说明</b><p>请通过 jbp88 官方渠道获取安装文件并完成安全检查。</p></div></section></div>;
}

function ProfileView({ loggedIn, setAuthMode, openDialog, onLogout }: { loggedIn: boolean; setAuthMode: (value: "登录" | "注册" | null) => void; openDialog: (name: DialogName, item?: string) => void; onLogout: () => void }) {
  const menu: Array<{ label: DialogName; icon: IconName }> = [{ label: "任务", icon: "task" }, { label: "我的收入", icon: "income" }, { label: "邀请好友", icon: "invite" }];
  return <div className="inner-page profile-page"><section className="profile-card"><span className="profile-avatar">{loggedIn ? <img src="/jbp88-logo.jpg" alt="会员头像" /> : <Icon name="user" />}</span><div><small>{loggedIn ? "JBP88 MEMBER" : "WELCOME"}</small><h2>{loggedIn ? "jbp88 会员" : "登录后查看会员中心"}</h2><p>{loggedIn ? "会员等级 · 黄金会员" : "登录后管理您的账户"}</p></div></section>{loggedIn ? <section className="balance-card"><small>账户积分</small><strong>8,888</strong><span>今日新增 +88</span></section> : <div className="profile-auth"><button onClick={() => setAuthMode("登录")}>立即登录</button><button onClick={() => setAuthMode("注册")}>注册账号</button></div>}<div className="profile-menu">{menu.map((item) => <button key={item.label} onClick={() => openDialog(item.label)}><span><Icon name={item.icon} /></span><b>{item.label}</b><Icon name="chevron" /></button>)}<button onClick={() => openDialog("活动详情", "账户与安全")}><span><Icon name="settings" /></span><b>账户与安全</b><Icon name="chevron" /></button>{loggedIn && <button className="logout" onClick={onLogout}><span><Icon name="logout" /></span><b>退出登录</b><Icon name="chevron" /></button>}</div></div>;
}

function AuthDialog({ mode, setMode, onSubmit }: { mode: "登录" | "注册"; setMode: (value: "登录" | "注册" | null) => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return <div className="modal-backdrop auth-backdrop"><section className="auth-modal" role="dialog" aria-modal="true"><button className="close-button" onClick={() => setMode(null)} aria-label="关闭"><Icon name="close" /></button><div className="auth-brand"><img src="/jbp88-logo.jpg" alt="jbp88" /><strong>jbp88</strong><span>JBP88 MEMBER</span></div><h2>{mode === "登录" ? "欢迎登录" : "注册新账号"}</h2><p>{mode === "登录" ? "登录您的 jbp88 会员账号" : "创建您的 jbp88 会员账号"}</p><form onSubmit={onSubmit}><label><Icon name="user" /><input required placeholder={mode === "登录" ? "用户名 / 手机号码" : "设置用户名"} /></label>{mode === "注册" && <label><Icon name="phone" /><input required inputMode="tel" placeholder="手机号码" /></label>}<label><Icon name="lock" /><input required type="password" minLength={6} placeholder="登录密码（至少6位）" /><Icon name="eye" /></label>{mode === "注册" && <label><Icon name="lock" /><input required type="password" minLength={6} placeholder="再次确认密码" /></label>}<button type="submit" className="primary-button">{mode}</button></form><div className="auth-links"><button type="button">忘记密码？</button><button type="button" className="switch-auth" onClick={() => setMode(mode === "登录" ? "注册" : "登录")}>{mode === "登录" ? "免费注册" : "返回登录"}</button></div><small className="local-only"><Icon name="shield" />安全加密保护您的账号资料</small></section></div>;
}

function ActionDialog({ name, selectedItem, onClose, onConfirm }: { name: Exclude<DialogName, null>; selectedItem: string; onClose: () => void; onConfirm: (message: string) => void }) {
  const iconMap: Record<Exclude<DialogName, null>, IconName> = { "充值": "wallet", "提现": "withdraw", "任务": "task", "我的收入": "income", "邀请好友": "invite", "活动详情": "gift", "下载说明": "download", "游戏详情": "slots" };
  return <div className="modal-backdrop sheet-backdrop" onClick={onClose}><section className="action-sheet" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}><div className="sheet-handle" /><button className="close-button" onClick={onClose} aria-label="关闭"><Icon name="close" /></button><span className="sheet-icon"><Icon name={iconMap[name]} /></span><h2>{selectedItem || name}</h2>
    {(name === "充值" || name === "提现") && <><p>当前资金通道正在配置中，正式开放后可提交{name}申请。</p><label className="amount-field"><small>金额</small><input type="number" min="1" defaultValue="100" /><b>USDT</b></label><button className="primary-button" onClick={() => onConfirm(`${name}通道暂未开放`)}>确认{name}</button></>}
    {name === "任务" && <div className="task-list">{["完成一次登录", "浏览三个游戏分类", "查看今日活动"].map((item, index) => <div key={item}><span className={index < 2 ? "done" : ""}><Icon name={index < 2 ? "check" : "activity"} /></span><b>{item}</b><small>{index < 2 ? "已完成" : "+20 积分"}</small></div>)}</div>}
    {name === "我的收入" && <div className="income-panel"><small>本周积分</small><strong>1,280</strong><div><span>任务奖励<b>880</b></span><span>签到奖励<b>400</b></span></div></div>}
    {name === "邀请好友" && <><p>复制专属邀请码，与好友分享 jbp88。</p><div className="invite-code"><b>JBP88-VIP</b><button onClick={() => { navigator.clipboard?.writeText("JBP88-VIP"); onConfirm("邀请码已复制"); }}><Icon name="copy" />复制</button></div></>}
    {name === "活动详情" && <><p>查看{selectedItem || "精彩活动"}的活动内容与参与条件。</p><button className="primary-button" onClick={() => onConfirm("活动参与成功")}>立即参与</button></>}
    {name === "下载说明" && <><p>请根据您的 {selectedItem} 设备查看安装步骤。</p><ol className="install-steps"><li>确认设备系统版本</li><li>通过官方来源下载安装包</li><li>完成安全检查后安装</li></ol><button className="primary-button" onClick={() => onConfirm("已查看安装说明")}>我知道了</button></>}
    {name === "游戏详情" && <><div className="game-preview"><Icon name="slots" /><span>JBP88 GAME</span></div><p>{selectedItem} 游戏通道正在配置中。</p><button className="primary-button" onClick={() => onConfirm(`${selectedItem}暂未开放`)}>进入游戏</button></>}
  </section></div>;
}
