"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState, ReactNode } from "react"
import { cn } from "@/lib/utils"

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [stage, setStage] = useState(0)

  useEffect(() => {
    setStage(1)
    return () => {
      setStage(0)
    }
  }, [pathname])

  return (
    <div
      key={pathname}
      className={cn(
        "transition-all duration-500 ease-out",
        stage === 0 ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      )}
    >
      {children}
    </div>
  )
}
