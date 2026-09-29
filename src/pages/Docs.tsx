import type { ReactNode } from 'react'
import { APP_SIGNUP_URL } from '../lib/config'
import PhoneMock from '../components/PhoneMock'
import homeShot from '../assets/screenshots/home.jpg'
import eventsShot from '../assets/screenshots/events.jpg'
import matchInputShot from '../assets/screenshots/match-input.jpg'
import practiceShot from '../assets/screenshots/practice.jpg'
import teamOrderShot from '../assets/screenshots/team-order.jpg'
import profileShot from '../assets/screenshots/profile.jpg'

type Section = { id: string; title: string; body: ReactNode; image?: { src: string; alt: string } }

const SECTIONS: Section[] = [
  {
    id: 'intro',
    title: 'はじめに',
    body: (
      <>
        <p>
          Rarry Pro（ラリープロ）は、卓球サークル・部活動・教室のための試合記録・レーティング・対戦表・
          練習管理アプリです。チーム（サークル・部活動単位）ごとにアカウントを作成し、メンバーを招待して使います。
        </p>
        <p>
          メンバーのアカウント登録は何人でも無料です。チームとして課金が必要になるのは、
          練習セッション機能・対戦表機能を使う場合のみです（詳しくは
          {' '}<a href="#pricing-docs" className="font-bold text-brand-700 underline">料金プラン</a>参照）。
        </p>
      </>
    ),
  },
  {
    id: 'team',
    title: 'チームを作る・メンバーを招待する',
    image: { src: homeShot, alt: 'ホーム画面（招待リンク）' },
    body: (
      <>
        <p>
          トップページの「無料で始める」からアカウントを作成し、チーム名を入力するとチームが作成されます
          （作成した人がオーナー権限を持ちます）。
        </p>
        <p>
          管理画面（またはホーム画面）に表示される招待リンクを、LINEなどでメンバーに共有するだけで、
          メンバーは自分のアカウントを作ってチームに参加できます。合言葉を設定して、
          知っている人だけ参加できるようにすることもできます。
        </p>
      </>
    ),
  },
  {
    id: 'matches',
    title: '試合を記録する・レーティングについて',
    image: { src: matchInputShot, alt: '試合入力画面' },
    body: (
      <>
        <p>
          「試合入力」画面で対戦相手とセットカウントを選ぶだけで結果が記録され、Eloレーティングをベースにした
          レーティングが自動で計算されます。各セットの点数まで入力することもできます。
        </p>
        <p>
          新規メンバーは初期レーティング1800からスタートします（チーム間で比較できるよう、全チーム共通の
          基準になっています）。試合数が少ないうちはレーティングの変動を大きくする設定も管理画面から調整できます。
        </p>
      </>
    ),
  },
  {
    id: 'practice',
    title: '練習セッション',
    image: { src: practiceShot, alt: '練習セッション画面' },
    body: (
      <>
        <p>
          その日の参加者と使用する卓球台の数を選ぶと、自動で台割りとタイマーが決まります。
          台の人数に応じてタイマーの長さを自動調整するモードと、全台まとめて同じ時間で進めるモードを選べます。
        </p>
        <p>
          練習中の飛び込み参加・途中離脱・組み直しにも対応しています。体験参加者（ビジター）を
          アカウント無しで追加することもできます。
        </p>
      </>
    ),
  },
  {
    id: 'events',
    title: '対戦表（リーグ戦・トーナメント・団体戦・ダブルス）',
    image: { src: eventsShot, alt: '対戦表画面' },
    body: (
      <>
        <p>
          参加者を選んで分け方（レベル別・ランダム・バランス調整など）を選ぶだけで、対戦表が自動生成されます。
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><b>リーグ戦</b>：総当たり戦。勝敗・セット差から順位表が自動計算されます。</li>
          <li><b>トーナメント</b>：勝ち上がり式。準決勝・準々決勝敗者の順位決定戦も自動で組まれます
            （前のラウンドが全試合終わってから次のラウンドが表示されるので、組み合わせが試合の途中で変わることはありません）。</li>
          <li><b>団体戦</b>：下記「団体戦のオーダー機能」参照。</li>
          <li><b>ダブルス</b>：ペアを組んで総当たり戦（レーティングには反映されません）。</li>
        </ul>
        <p>結果は「結果入力」から入力するだけで、対戦表・順位表に自動反映されます。</p>
      </>
    ),
  },
  {
    id: 'team-order',
    title: '団体戦のオーダー機能',
    image: { src: teamOrderShot, alt: '団体戦オーダー編成画面' },
    body: (
      <>
        <p>
          参加者をチームに分けた後、対戦するチームどうしがそれぞれ「オーダー」（誰がダブルス・シングルスに
          出るか）を組みます。チームの人数が5人以上なら「ダブルス1＋シングルス4」、4人以下なら
          「ダブルス1＋シングルス2」の形式になります。
        </p>
        <p>
          オーダーは対戦相手ごとに個別に組め、お互いが「確定」ボタンを押すまで相手には内容が見えません。
          両チームが確定すると、その場で対戦カードが公開され、リーグ戦・トーナメントと同じ「結果入力」で
          各枠の勝敗を記録できます（シングルスはレーティングに反映、ダブルスは反映されません）。
        </p>
      </>
    ),
  },
  {
    id: 'calendar',
    title: 'お知らせ・カレンダー・出欠確認',
    image: { src: homeShot, alt: 'ホーム画面（練習日カレンダー）' },
    body: (
      <>
        <p>
          ホーム画面から、サークル全体へのお知らせを投稿できます。重要なお知らせは先頭に固定表示できます。
        </p>
        <p>
          練習日カレンダーには「練習・試合・その他」の区分と、卓球台の最大台数、大会ページなどへの詳細URLを
          登録できます。メンバーは各練習日に「参加・未定・不参加」を回答でき、誰が参加するか一覧で確認できます。
        </p>
      </>
    ),
  },
  {
    id: 'board',
    title: '掲示板',
    body: (
      <p>
        メンバーが自由にスレッドを立てて、話題ごとにコメントできる掲示板です。新着があると下部メニューに
        未読バッジが表示されます。
      </p>
    ),
  },
  {
    id: 'survey',
    title: 'アンケート',
    body: (
      <p>
        管理者は質問・選択肢（複数選択可否）・回答期限を指定してアンケートを作成できます。
        募集中のアンケートだけがホーム画面に表示され、期限が来る（または管理者が締め切る）と
        一般メンバーには表示されなくなります。
      </p>
    ),
  },
  {
    id: 'visitor-qr',
    title: '他チームのビジター参加（QR）',
    image: { src: profileShot, alt: 'マイページ画面' },
    body: (
      <p>
        マイページから、他チームで参加登録するための使い捨てQRコード（10分間有効）を表示できます。
        訪問先チームの管理者がカメラで読み取ると、そのチームのビジター（アカウント無し扱い・レーティング対象外）
        として、試合入力・練習・対戦表にすぐに加われます。
      </p>
    ),
  },
  {
    id: 'pricing-docs',
    title: '料金プラン',
    body: (
      <>
        <p>
          お知らせ・カレンダー・出欠確認・試合入力・ランキング・掲示板・アンケート・プロフィールは無料です。
          練習セッション・対戦表を使う場合のみ、チームごとに月額600円のプランへの加入が必要です
          （新規チームは30日間無料トライアルつき）。
        </p>
        <p>お支払いはチームのオーナーが管理画面から行え、いつでも解約できます。</p>
      </>
    ),
  },
  {
    id: 'faq',
    title: 'よくある質問',
    body: (
      <div className="space-y-4">
        <div>
          <p className="font-bold text-slate-700">Q. 複数のチームに参加できますか？</p>
          <p>A. はい。1つのアカウントで複数のチームに参加でき、画面上部のチーム切り替えでいつでも移動できます。</p>
        </div>
        <div>
          <p className="font-bold text-slate-700">Q. スマホとパソコンどちらでも使えますか？</p>
          <p>A. はい。スマホはアプリのような操作感、パソコンでは画面が広いレイアウトに自動で切り替わります。</p>
        </div>
        <div>
          <p className="font-bold text-slate-700">Q. 支払い方法は？</p>
          <p>A. クレジットカードでのお支払いに対応しています（Stripe決済）。</p>
        </div>
      </div>
    ),
  },
]

export default function Docs() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-black text-slate-900">使い方ガイド</h1>
      <p className="mt-2 text-sm text-slate-500">Rarry Proの各機能の使い方をまとめています。</p>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">
        <nav className="top-20 shrink-0 lg:sticky lg:w-56">
          <ul className="space-y-1 text-sm">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="block rounded-lg px-2 py-1.5 font-bold text-slate-500 hover:bg-brand-50 hover:text-brand-700">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 flex-1 space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-20">
              <h2 className="text-lg font-black text-slate-800">{s.title}</h2>
              <div className={`mt-3 ${s.image ? 'flex flex-col-reverse gap-6 sm:flex-row sm:items-start' : ''}`}>
                <div className="min-w-0 flex-1 space-y-3 text-sm leading-relaxed text-slate-600">{s.body}</div>
                {s.image && (
                  <div className="mx-auto w-full max-w-[180px] shrink-0 sm:mx-0">
                    <PhoneMock src={s.image.src} alt={s.image.alt} />
                  </div>
                )}
              </div>
            </section>
          ))}

          <div className="card bg-brand-50 text-center ring-brand-100">
            <p className="font-bold text-brand-800">実際に使ってみましょう</p>
            <a href={APP_SIGNUP_URL} className="btn-primary mt-3">無料で始める</a>
          </div>
        </div>
      </div>
    </div>
  )
}
