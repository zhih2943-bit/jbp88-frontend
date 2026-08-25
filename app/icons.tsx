import type { SVGProps } from "react";

export type IconName =
  | "home" | "flame" | "slots" | "video" | "fish" | "ticket" | "ball" | "chess" | "film"
  | "wallet" | "withdraw" | "task" | "income" | "invite" | "activity" | "headset" | "download" | "user"
  | "speaker" | "chevron" | "close" | "mail" | "lock" | "eye" | "phone" | "copy" | "chat" | "android"
  | "apple" | "shield" | "gift" | "star" | "check" | "help" | "settings" | "logout";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  const content = (() => {
    switch (name) {
      case "home": return <><path d="M3 10.8 12 3l9 7.8"/><path d="M5.5 9.5V21h13V9.5M9.5 21v-6h5v6"/></>;
      case "flame": return <path d="M13.5 2.5c.8 4-2.4 5.1-1.8 8.1.3 1.3 1.4 2.1 2.7 2.1 2 0 3.4-1.8 2.8-4.4 2.3 2 3.3 4.5 2.4 7.4-1 3.4-4 5.8-7.7 5.8-4.2 0-7.5-3-7.5-7.2 0-3.5 2-6 5-8.9-.1 3 1.2 4 2.1 3.1 1.2-1.1.6-3.5 2-6Z"/>;
      case "slots": return <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M8 9h.01M12 9h.01M16 9h.01M8 14h.01M12 14h.01M16 14h.01" strokeWidth="3"/></>;
      case "video": return <><rect x="3" y="5" width="13" height="14" rx="3"/><path d="m16 10 5-3v10l-5-3"/></>;
      case "fish": return <><path d="M4 12c3.2-5.2 8.6-5.2 13 0-4.4 5.2-9.8 5.2-13 0Z"/><path d="m17 12 4-4v8l-4-4ZM9 10h.01" strokeWidth="2.4"/></>;
      case "ticket": return <><path d="M5 4h14v4a2 2 0 0 0 0 4v4H5v-4a2 2 0 0 0 0-4V4Z"/><path d="M12 7v6"/></>;
      case "ball": return <><circle cx="12" cy="12" r="9"/><path d="m8.5 4.8 3.5 2.6 3.5-2.6M12 7.4v4.3m0 0-4.2 3m4.2-3 4.2 3M7.8 14.7l1.4 4.7m7-4.7-1.4 4.7"/></>;
      case "chess": return <><path d="M8 21h8M9 18h6l-1-6H10l-1 6Z"/><circle cx="12" cy="7" r="3"/></>;
      case "film": return <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4m10 0h4M3 15h4m10 0h4"/></>;
      case "wallet": return <><path d="M4 6.5h14a2 2 0 0 1 2 2V19H4a2 2 0 0 1-2-2V7a3 3 0 0 1 3-3h12"/><path d="M16 11h6v4h-6a2 2 0 1 1 0-4Z"/></>;
      case "withdraw": return <><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M5 19h14"/></>;
      case "task": return <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 9h6m-6 4h6m-6 4h4M9 3h6v3H9z"/></>;
      case "income": return <><circle cx="12" cy="12" r="9"/><path d="M8.5 9.5c0-1.2 1.3-2 3.2-2 2.1 0 3.3.8 3.3 2 0 3-6.5 1.2-6.5 4.5 0 1.3 1.4 2.2 3.5 2.2 2 0 3.5-.9 3.5-2.2M12 5.5v13"/></>;
      case "invite": return <><path d="M15 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M19 8v6m-3-3h6"/></>;
      case "activity": return <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4m8-4v4M3 10h18"/><path d="m8 15 2 2 5-5"/></>;
      case "headset": return <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2Zm16 0h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Z"/></>;
      case "download": return <><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 19h16"/></>;
      case "user": return <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>;
      case "speaker": return <><path d="M4 10v4h4l5 4V6L8 10H4Z"/><path d="M16 9a4 4 0 0 1 0 6m2-9a8 8 0 0 1 0 12"/></>;
      case "chevron": return <path d="m9 18 6-6-6-6"/>;
      case "close": return <path d="m6 6 12 12M18 6 6 18"/>;
      case "mail": return <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>;
      case "lock": return <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>;
      case "eye": return <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></>;
      case "phone": return <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 5h4m-3 14h2"/></>;
      case "copy": return <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></>;
      case "chat": return <><path d="M21 12a8 8 0 0 1-8 8H5l-3 2 1-5a8 8 0 1 1 18-5Z"/><path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth="2.5"/></>;
      case "android": return <><path d="M7 8h10a2 2 0 0 1 2 2v8H5v-8a2 2 0 0 1 2-2Z"/><path d="m8 5-2-2m10 2 2-2M9 12h.01M15 12h.01M7 18v3m10-3v3"/></>;
      case "apple": return <><path d="M16.7 13.4c0-3 2.5-4.4 2.6-4.5-1.4-2.1-3.7-2.3-4.5-2.3-1.9-.2-3.7 1.1-4.7 1.1-1 0-2.5-1.1-4.1-1-2.1 0-4.1 1.2-5.2 3.1-2.2 3.9-.6 9.6 1.6 12.7 1.1 1.5 2.3 3.2 4 3.1 1.6-.1 2.2-1 4.2-1s2.5 1 4.2 1c1.7 0 2.8-1.5 3.9-3.1 1.2-1.8 1.7-3.5 1.8-3.6-.1 0-3.8-1.5-3.8-6.5Z" transform="scale(.75) translate(3 1)"/><path d="M15.5 3c.8-1 2.2-1.7 3.4-1.8.2 1.4-.4 2.8-1.2 3.7-.8.9-2.1 1.6-3.4 1.5-.2-1.3.5-2.6 1.2-3.4Z"/></>;
      case "shield": return <path d="M12 3 4 6v5c0 5.2 3.2 8.7 8 10 4.8-1.3 8-4.8 8-10V6l-8-3Z"/>;
      case "gift": return <><rect x="3" y="9" width="18" height="12" rx="2"/><path d="M12 9v12M2 9h20V5H2v4Z"/><path d="M12 5c-2-4-7-3-6 0h6Zm0 0c2-4 7-3 6 0h-6Z"/></>;
      case "star": return <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>;
      case "check": return <path d="m5 12 4 4L19 6"/>;
      case "help": return <><circle cx="12" cy="12" r="9"/><path d="M9.7 9a2.5 2.5 0 1 1 3.6 2.2c-1 .5-1.3 1.1-1.3 2.1M12 17h.01"/></>;
      case "settings": return <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>;
      case "logout": return <><path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5"/><path d="m15 16 4-4-4-4m4 4H9"/></>;
    }
  })();

  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}>{content}</svg>;
}
