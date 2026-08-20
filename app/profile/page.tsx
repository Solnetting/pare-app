"use client";
import BottomNav from "@/components/BottomNav";

const SUBSCRIPTIONS = [
  { name: "Laundry sheets", interval: "Every 6 weeks", next: "Sep 2026", price: "CHF 17.01", img: "/p5.png" },
  { name: "Hand soap refill", interval: "Every 6 weeks", next: "Sep 2026", price: "CHF 7.65", img: "/p3.png" },
  { name: "Shampoo bar", interval: "Every 8 weeks", next: "Oct 2026", price: "CHF 13.05", img: "/p4.png" },
];

export default function ProfilePage() {
  return (
    <div style={{ position: "relative", height: "100%", background: "#fafaf7", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 100, scrollbarWidth: "none" }}>

        {/* Header */}
        <div style={{ padding: "20px 20px 0", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#ddf2ef", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
            🌿
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 20, color: "#1f2e45" }}>Lea Müller</p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#5a6470" }}>Member since 2025</p>
          </div>
        </div>

        {/* Impact stats */}
        <div style={{ margin: "20px 20px 0", background: "#ddf2ef", borderRadius: 16, padding: 16 }}>
          <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", color: "#0d7a70", textTransform: "uppercase", marginBottom: 12 }}>Your impact</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {[
              { val: "24", unit: "orders" },
              { val: "312", unit: "plastic items saved" },
              { val: "CHF 47", unit: "saved with Repeat" },
            ].map(({ val, unit }) => (
              <div key={unit} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 18, color: "#1f2e45" }}>{val}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, color: "#5a6470", lineHeight: 1.3, marginTop: 2 }}>{unit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e8e8e4", margin: "24px 0" }} />

        {/* Active Subscriptions */}
        <div style={{ padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 16, color: "#1f2e45" }}>Pare Repeat</p>
            <span style={{ background: "#1a7a70", color: "white", fontSize: 10, fontWeight: 700, borderRadius: 100, padding: "2px 7px" }}>3 active</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SUBSCRIPTIONS.map(s => (
              <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 12, background: "white", border: "1px solid #d9dbd5", borderRadius: 14, padding: "10px 14px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.name} style={{ width: 48, height: 48, objectFit: "contain", borderRadius: 8, background: "#f5f5ed", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14, color: "#1f2e45" }}>{s.name}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#5a6470", marginTop: 2 }}>{s.interval} · next: {s.next}</p>
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 13, color: "#147a6e" }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e8e8e4", margin: "24px 0" }} />

        {/* Settings */}
        <div style={{ padding: "0 20px" }}>
          <p style={{ fontFamily: "var(--font-lora)", fontWeight: 600, fontSize: 16, color: "#1f2e45", marginBottom: 12 }}>Account</p>
          {["Order history", "Delivery address", "Payment methods", "Notifications", "Help & support"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid #e8e8e4" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#1f2e45" }}>{item}</span>
              <span style={{ color: "#5a6470" }}>›</span>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
