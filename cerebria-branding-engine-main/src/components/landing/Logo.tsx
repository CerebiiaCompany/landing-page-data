import { Link } from "@tanstack/react-router";
import brain from "@/assets/cerebiia-brain.png.asset.json";
import wordmark from "@/assets/cerebiia-wordmark.png.asset.json";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const sub = variant === "dark" ? "text-navy-foreground/80" : "text-primary";

  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Cerebiia Data">
      <img src={brain.url} alt="" aria-hidden className="h-9 w-auto" />
      <span className="leading-none">
        <img
          src={wordmark.url}
          alt="Cerebiia"
          className={`h-4 w-auto sm:h-[1.15rem] ${variant === "dark" ? "brightness-0 invert" : ""}`}
        />
        <span className={`mt-1 block text-[0.62rem] font-bold tracking-[0.32em] ${sub}`}>DATA</span>
      </span>
    </Link>
  );
}
