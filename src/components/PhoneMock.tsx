// 実機（Pixel 8）のスクリーンショットは高さが撮影内容によってバラバラなので、
// 枠の縦横比を固定し、上詰め（object-position: top）でクロップして表示サイズを揃える。
// 比率は手元のスクリーンショットのうち一番丈が短いものに合わせてあるので、
// 横方向が欠けることはない（縦方向の下側だけが枠の外に出る）。
export default function PhoneMock({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-[1.75rem] border-[6px] border-slate-900 bg-slate-900 shadow-xl ${className}`}>
      <div className="aspect-[1080/1315] w-full overflow-hidden rounded-[1.2rem] bg-white">
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
      </div>
    </div>
  )
}
