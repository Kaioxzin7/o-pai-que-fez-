import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.jpg.asset.json";

let shown = false;

/** Short branded intro shown once per visit. */
export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(shown);
  useEffect(() => {
    if (shown) return;
    shown = true;
    (async () => {
      const { gsap } = await import("gsap");
      if (!ref.current) return;
      gsap
        .timeline({ onComplete: () => setDone(true) })
        .fromTo(".pl-logo", { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" })
        .fromTo(".pl-bar", { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, "<0.2")
        .to(ref.current, { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "power4.inOut" }, "+=0.15");
    })();
  }, []);
  if (done) return null;
  return (
    <div ref={ref} className="fixed inset-0 z-[100] grid place-items-center bg-background [clip-path:inset(0_0_0_0)]">
      <div className="flex flex-col items-center gap-6">
        <img src={logo.url} alt="" className="pl-logo h-40 w-40 object-contain" />
        <div className="pl-bar h-1 w-40 origin-left rounded-full bg-gold" />
      </div>
    </div>
  );
}
