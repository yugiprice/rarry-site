import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { APP_LOGIN_URL, APP_SIGNUP_URL } from '../lib/config'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700 text-sm font-black text-white">R</span>
          <span className="text-lg font-black text-slate-800">Rarry Pro</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-bold text-slate-600">
          <Link to="/docs" className="hidden hover:text-brand-700 sm:inline">使い方</Link>
          <Link to="/#pricing" className="hidden hover:text-brand-700 sm:inline">料金</Link>
          <a href={APP_LOGIN_URL} className="hover:text-brand-700">ログイン</a>
          <a href={APP_SIGNUP_URL} className="btn-primary px-4 py-2 text-sm">無料で始める</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-slate-500 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-700 text-xs font-black text-white">R</span>
              <span className="font-black text-slate-700">Rarry Pro</span>
            </div>
            <p className="mt-2 max-w-xs text-xs text-slate-400">
              卓球サークル・部活動・教室のための試合記録・レーティング・対戦表・練習管理アプリ
            </p>
          </div>
          <div className="flex gap-10 text-xs">
            <div className="space-y-2">
              <div className="font-bold text-slate-600">サイト</div>
              <Link to="/" className="block hover:text-brand-700">トップ</Link>
              <Link to="/docs" className="block hover:text-brand-700">使い方ガイド</Link>
              <Link to="/#pricing" className="block hover:text-brand-700">料金</Link>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-slate-600">アプリ</div>
              <a href={APP_LOGIN_URL} className="block hover:text-brand-700">ログイン</a>
              <a href={APP_SIGNUP_URL} className="block hover:text-brand-700">無料で始める</a>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-slate-600">法的情報</div>
              <Link to="/legal" className="block hover:text-brand-700">特定商取引法に基づく表示</Link>
              <Link to="/privacy" className="block hover:text-brand-700">プライバシーポリシー</Link>
              <Link to="/terms" className="block hover:text-brand-700">利用規約</Link>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-300">&copy; {new Date().getFullYear()} Rarry Pro</p>
      </div>
    </footer>
  )
}
