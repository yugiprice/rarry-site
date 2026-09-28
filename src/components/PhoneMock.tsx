export default function PhoneMock({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full rounded-2xl border border-slate-200 shadow-lg ${className}`}
    />
  )
}
