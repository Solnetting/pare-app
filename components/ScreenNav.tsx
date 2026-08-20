"use client";
import { usePathname, useRouter } from "next/navigation";

const SCREENS = [
  { label: "Home",     path: "/" },
  { label: "Products", path: "/products" },
  { label: "Bundle",   path: "/bundle" },
  { label: "Bag",      path: "/bag" },
  { label: "Profile",  path: "/profile" },
];

export default function ScreenNav() {
  const pathname = usePathname();
  const router = useRouter();

  const active = SCREENS.find(s =>
    s.path === "/" ? pathname === "/" : pathname.startsWith(s.path)
  );

  return (
    <div
      className="screen-nav"
      style={{
        position: "fixed",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 8px",
        background: "rgba(30,30,32,0.85)",
        backdropFilter: "blur(20px)",
        borderRadius: 100,
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        whiteSpace: "nowrap",
      }}
    >
      {SCREENS.map(s => {
        const isActive = active?.path === s.path;
        return (
          <button
            key={s.path}
            onClick={() => router.push(s.path)}
            style={{
              padding: isActive ? "7px 16px" : "7px 14px",
              borderRadius: 100,
              background: isActive ? "#fafaf7" : "transparent",
              color: isActive ? "#1f2e45" : "rgba(255,255,255,0.5)",
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: isActive ? 600 : 400,
              transition: "all 0.2s ease",
              letterSpacing: isActive ? "-0.01em" : "0",
            }}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
}
