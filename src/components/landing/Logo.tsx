import { Link } from "@tanstack/react-router";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const title = variant === "dark" ? "text-white" : "text-slate-900 dark:text-white";
  const sub = variant === "dark" ? "text-navy-foreground/80" : "text-primary";

  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Cerebiia Data">
      <img src="/favicon.png" alt="" aria-hidden className="h-9 w-9 object-contain" />
      <span className="leading-none">
        <span className={`block text-[1.15rem] font-extrabold tracking-[0.08em] ${title}`}>
          CEREBIIA
        </span>
        <span className={`mt-1 block text-[0.62rem] font-bold tracking-[0.32em] ${sub}`}>
          DATA
        </span>
      </span>
    </Link>
  );
}