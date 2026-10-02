export default function LogoMark({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg viewBox="10 10 100 100" className={className} aria-hidden="true">
      <rect x="10" y="10" width="100" height="100" rx="22" fill="#312E81" />
      <polyline
        points="26,90 46,90 46,72 64,72 64,54 82,54 82,40"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="82" cy="28" r="9" fill="#FBBF24" />
    </svg>
  );
}
