import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-6xl px-6">
        <Separator />
        <div className="flex items-center justify-between py-8">
          <p className="text-sm text-muted-foreground">
            A personal site for structured thinking, writing, and experimentation.
          </p>
          <p className="text-sm text-muted-foreground">2026</p>
        </div>
      </div>
    </footer>
  )
}
