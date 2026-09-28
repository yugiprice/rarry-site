import { Link } from 'react-router-dom'
import { APP_SIGNUP_URL } from '../lib/config'
import PhoneMock from '../components/PhoneMock'
import homeShot from '../assets/screenshots/home.jpg'
import eventsTableShot from '../assets/screenshots/events-table.jpg'
import eventsOrderShot from '../assets/screenshots/events-order.jpg'

type Feature = { icon: string; title: string; body: string; free?: boolean }

const FEATURES: Feature[] = [
  { icon: '🏓', title: '試合入力・レーティング', body: '対戦相手と結果を入力するだけで、Eloベースのレーティングが自動計算されます。', free: true },
  { icon: '🏆', title: 'ランキング', body: 'チーム内の実力順が一目でわかります（管理者向け）。' },
  { icon: '⏱️', title: '練習セッション', body: '参加者を卓球台に自動で割り振り、台ごとのタイマーを自動進行。組み直しも簡単です。' },
  { icon: '📋', title: '対戦表', body: 'リーグ戦・トーナメント・団体戦・ダブルスに対応。団体戦はチームごとにオーダーを組んで、お互い確定するまで相手に見えない仕組みつき。' },
  { icon: '💬', title: '掲示板', body: 'メンバーがそれぞれスレッドを立てて、話題ごとにコメントできます。', free: true },
  { icon: '📊', title: 'アンケート', body: '期限つきのアンケートを作成でき、募集中だけホーム画面に表示されます。', free: true },
  { icon: '📅', title: 'お知らせ・カレンダー・出欠確認', body: '練習日の連絡と出欠確認をカレンダーで一元管理。', free: true },
  { icon: '📱', title: '他チームのビジター参加（QR）', body: '他チームのメンバーが自分のQRコードを見せるだけで、対戦相手として追加できます。' },
]

const STEPS = [
  { n: '1', title: 'チームを作成', body: 'サークル・部活動・教室の名前でチームを作成します（30日間無料）。' },
  { n: '2', title: 'メンバーを招待', body: '招待リンクを共有するだけで、メンバーが自分のアカウントで参加できます。' },
  { n: '3', title: '試合・練習・対戦表を運用', body: '普段の練習や大会の運営に、そのまま使い始められます。' },
]

export default function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="section pb-10 pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
            卓球サークル・部活動・教室向け
          </p>
          <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
            試合の記録も、対戦表の運営も、<br className="hidden sm:block" />
            これ1つで。
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-500 sm:text-lg">
            Rarry Pro（ラリープロ）は、試合結果とレーティングの管理、対戦表・練習セッションの運営、
            お知らせやアンケートまでをまとめて行える、卓球サークル・部活動のための管理アプリです。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={APP_SIGNUP_URL} className="btn-primary w-full sm:w-auto">無料で始める（30日間トライアル）</a>
            <Link to="/docs" className="btn-sub w-full sm:w-auto">使い方を見る</Link>
          </div>
          <p className="mt-3 text-xs text-slate-400">クレジットカード登録は不要です</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6">
          <PhoneMock src={homeShot} alt="ホーム画面（レーティング・招待リンク・アンケート・お知らせ）" className="translate-y-4" />
          <PhoneMock src={eventsOrderShot} alt="リーグ戦の試合順画面" />
          <PhoneMock src={eventsTableShot} alt="対戦表画面" className="translate-y-4" />
        </div>
      </section>

      {/* Features */}
      <section className="section pt-0">
        <h2 className="text-center text-2xl font-black text-slate-800">サークル運営に必要な機能を、ひとまとめに</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="card">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-2 font-bold text-slate-800">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{f.body}</p>
              {f.free && (
                <span className="mt-2 inline-block rounded bg-emerald-50 px-1.5 py-0.5 text-[11px] font-bold text-emerald-700">
                  無料プランでも利用可
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-slate-50/70">
        <h2 className="text-center text-2xl font-black text-slate-800">導入までの流れ</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-lg font-black text-white">
                {s.n}
              </div>
              <h3 className="mt-3 font-bold text-slate-800">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section scroll-mt-16">
        <h2 className="text-center text-2xl font-black text-slate-800">料金プラン</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-500">
          チーム単位の月額課金制です。メンバーのアカウント登録は何人でも無料です。
        </p>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="card">
            <h3 className="font-bold text-slate-800">無料プラン</h3>
            <p className="mt-1 text-3xl font-black text-slate-900">¥0</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>✓ お知らせ・カレンダー・出欠確認</li>
              <li>✓ 試合入力・レーティング</li>
              <li>✓ ランキング</li>
              <li>✓ 掲示板・アンケート</li>
              <li>✓ プロフィール・試合履歴</li>
            </ul>
          </div>
          <div className="card ring-2 ring-brand-500">
            <h3 className="font-bold text-brand-700">フルプラン</h3>
            <p className="mt-1 text-3xl font-black text-slate-900">¥600<span className="text-base font-bold text-slate-400">/月（チームごと）</span></p>
            <p className="mt-1 text-xs text-slate-400">新規チームは30日間無料トライアルつき</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>✓ 無料プランの全機能</li>
              <li>✓ 練習セッション（台割り・タイマー自動化）</li>
              <li>✓ 対戦表（リーグ戦・団体戦・トーナメント・ダブルス）</li>
            </ul>
            <a href={APP_SIGNUP_URL} className="btn-primary mt-5 w-full">無料で始める</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="card mx-auto max-w-2xl bg-brand-700 text-center text-white">
          <h2 className="text-xl font-black">今のサークル運営を、Rarry Proでラクにしませんか？</h2>
          <p className="mt-2 text-sm text-brand-50">登録から数分で使い始められます。</p>
          <a href={APP_SIGNUP_URL} className="btn mt-5 bg-white text-brand-800 hover:bg-brand-50">無料で始める</a>
        </div>
      </section>
    </>
  )
}
