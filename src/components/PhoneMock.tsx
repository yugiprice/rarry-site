// 画面の内容を途中で切らないよう、縦横比は強制せず自然な高さで表示する
// （スクリーンショットの横幅はすべて共通なので、枠の横幅は揃う）。
export default function PhoneMock({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-[1.75rem] border-[6px] border-slate-900 bg-slate-900 shadow-xl ${className}`}>
      <img src={src} alt={alt} className="block w-full rounded-[1.2rem]" />
    </div>
  )
}
