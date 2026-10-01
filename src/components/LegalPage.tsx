import type { ReactNode } from 'react'

export default function LegalPage({
  title, updated, children,
}: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-black text-slate-900">{title}</h1>
      <p className="mt-2 text-xs text-slate-400">最終更新日：{updated}</p>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-600">{children}</div>
    </div>
  )
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-base font-black text-slate-800">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  )
}
