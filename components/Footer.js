export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          Designed & Built by <span className="text-accent">Ahmed Jan</span> · 2026
        </p>
        <p className="font-mono text-xs text-muted/50">
          Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
