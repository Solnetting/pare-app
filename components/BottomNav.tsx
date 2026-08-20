"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart";

const NAV = [
  { href: "/", label: "Home", icon: (active: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill={active ? "#1a7a70" : "#5a6470"} opacity={active ? 1 : 0.7}/>
    </svg>
  )},
  { href: "/products", label: "Products", icon: (active: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke={active ? "#1a7a70" : "#5a6470"} strokeWidth="2" opacity={active ? 1 : 0.7}/>
      <path d="M16.5 16.5L21 21" stroke={active ? "#1a7a70" : "#5a6470"} strokeWidth="2" strokeLinecap="round" opacity={active ? 1 : 0.7}/>
    </svg>
  )},
  { href: "/bag", label: "Bag", icon: (active: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19 6H17C17 3.79 15.21 2 13 2H11C8.79 2 7 3.79 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM11 4H13C14.1 4 15 4.9 15 6H9C9 4.9 9.9 4 11 4ZM19 20H5V8H19V20Z" fill={active ? "#1a7a70" : "#5a6470"} opacity={active ? 1 : 0.7}/>
    </svg>
  )},
  { href: "/profile", label: "Profile", icon: (active: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={active ? "#1a7a70" : "#5a6470"} strokeWidth="2" opacity={active ? 1 : 0.7}/>
      <path d="M4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20" stroke={active ? "#1a7a70" : "#5a6470"} strokeWidth="2" strokeLinecap="round" opacity={active ? 1 : 0.7}/>
    </svg>
  )},
];

export default function BottomNav() {
  const path = usePathname();
  const { count } = useCart();

  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      background: "rgba(250,250,247,0.92)", backdropFilter: "blur(12px)",
      borderTop: "1px solid #e8e8e4",
      paddingBottom: "env(safe-area-inset-bottom, 12px)",
      zIndex: 50,
    }}>
      <div style={{ display: "flex", padding: "8px 20px 4px" }}>
        {NAV.map(({ href, label, icon }) => {
          const active = href === "/" ? path === "/" : path.startsWith(href);
          return (
            <Link key={href} href={href} style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", gap: 4,
              padding: "6px 4px",
              borderRadius: 12,
              background: active ? "var(--color-teal-soft)" : "transparent",
              position: "relative",
            }}>
              {icon(active)}
              {href === "/bag" && count > 0 && (
                <span style={{
                  position: "absolute", top: 2, right: "18%",
                  background: "#1a7a70", color: "white",
                  fontSize: 10, fontWeight: 700,
                  width: 16, height: 16, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {count}
                </span>
              )}
              <span style={{
                fontSize: 11,
                fontWeight: active ? 600 : 400,
                color: active ? "#1a7a70" : "#5a6470",
                fontFamily: "var(--font-inter)",
              }}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
