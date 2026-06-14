export function Skeleton({ className = "" }: { className?: string }) {
  return <span className={`block rounded-md skeleton ${className}`} aria-hidden="true" />;
}
