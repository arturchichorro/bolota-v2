"use client"

import Link from "next/link"
import { Icons } from "./icons"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function MainNav() {

    const pathname = usePathname();

    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="mr-4 flex items-center space-x-2 text-accent hover:border-transparent text-base font-normal hover:bg-destructive hover:text-accent-foreground no-underline p-1">
                <Icons.logo className="h-6 w-6" />
                <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <Link href="/posts" className={cn("px-1 text-sm text-accent sm:inline-block border-b-2 border-accent/[0.6] hover:border-transparent hover:bg-destructive hover:text-accent-foreground", pathname === "/blog" ? "text-accent-foreground bg-destructive border-transparent" : "text-accent")}>
                Posts
            </Link>
            <Link href="/about" className={cn("px-1 text-sm text-accent sm:inline-block border-b-2 border-accent/[0.6] hover:border-transparent hover:bg-destructive hover:text-accent-foreground", pathname === "/about" ? "text-accent-foreground bg-destructive border-transparent" : "text-accent")}>
                About
            </Link>
        </nav>
    )
}