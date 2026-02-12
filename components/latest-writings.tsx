import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { Writing } from "@/lib/data"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function LatestWritings({ writings }: { writings: Writing[] }) {
  return (
    <ul className="flex flex-col">
      {writings.map((writing, index) => (
        <li key={writing.slug}>
          <Link
            href={`/writing/${writing.slug}`}
            className="group block py-5 transition-colors hover:bg-accent/50 -mx-4 px-4 rounded-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-lg text-foreground group-hover:text-foreground/80 transition-colors">
                  {writing.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {writing.excerpt}
                </p>
              </div>
              <div className="flex flex-shrink-0 flex-col items-end gap-2 pt-1">
                <time className="text-xs text-muted-foreground" dateTime={writing.date}>
                  {formatDate(writing.date)}
                </time>
                {writing.tag && (
                  <Badge
                    variant="outline"
                    className="text-xs font-normal text-muted-foreground"
                  >
                    {writing.tag}
                  </Badge>
                )}
              </div>
            </div>
          </Link>
          {index < writings.length - 1 && (
            <div className="border-b border-border" />
          )}
        </li>
      ))}
    </ul>
  )
}
