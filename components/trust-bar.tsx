const partners = [
  "Bramac",
  "Tondach",
  "Gerard",
  "Velux",
  "Isover",
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Sodelujemo z vodilnimi proizvajalci
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-12 items-center justify-center rounded-md bg-background px-6 py-2 border border-border"
            >
              <span className="text-sm font-semibold text-muted-foreground">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
