"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={cn(
          "text-sm font-medium transition-colors hover:text-orange-500",
          pathname === "/dashboard" ? "text-orange-500 font-bold" : "text-white"
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/data"
        className={cn(
          "text-sm font-medium transition-colors hover:text-orange-500",
          pathname === "/data" ? "text-orange-500 font-bold" : "text-white"
        )}
      >
        Data
      </Link>
      <Link
        href="/statistic"
        className={cn(
          "text-sm font-medium transition-colors hover:text-orange-500",
          pathname === "/statistic" ? "text-orange-500 font-bold" : "text-white"
        )}
      >
        Statistics
      </Link>
    </nav>
  );
}
