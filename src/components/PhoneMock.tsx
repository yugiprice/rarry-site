export default function PhoneMock({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[220px] ${className}`}>
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 shadow-xl">
        <div className="aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-white">
          <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
        </div>
      </div>
      <div className="absolute left-1/2 top-1 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
    </div>
  )
}
