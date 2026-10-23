/** Wordmark: "ms" in serif, a square ledger dot, then an italic "a". */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-serif leading-none tracking-[-0.02em] ${className}`} aria-hidden="true">
      ms
      <span className="mx-[0.06em] inline-block h-[0.17em] w-[0.17em] bg-fg" />
      <span className="italic">a</span>
    </span>
  );
}
