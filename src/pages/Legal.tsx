import LegalPage from '../components/LegalPage'

type Row = { label: string; value: string }

const ROWS: Row[] = [
  { label: '販売事業者', value: '北　桂典' },
  { label: '運営責任者', value: '北　桂典' },
  { label: '所在地', value: 'ご請求をいただいた場合、遅滞なく開示いたします。' },
  { label: '電話番号', value: 'ご請求をいただいた場合、遅滞なく開示いたします。' },
  { label: 'メールアドレス', value: 'ttcrarrykobe@gmail.com' },
  { label: '販売価格', value: 'ベーシック：月額300円／スタンダード：月額600円／アンリミテッド：月額980円（すべて税込）' },
  { label: '商品代金以外の必要料金', value: 'インターネット接続料金・通信料金等はお客様のご負担となります。' },
  { label: 'お支払い方法', value: 'クレジットカード決済（Stripe社の決済システムを利用）' },
  {
    label: 'お支払い時期',
    value: 'サブスクリプション契約成立時に初回分を請求し、以後は毎月同日に自動的に同額を請求します。',
  },
  { label: 'サービス提供時期', value: 'お支払い手続き完了後、直ちにご利用いただけます。' },
  {
    label: '返品・キャンセルについて',
    value:
      'デジタルサービスの性質上、提供開始後のご返金には応じておりません。解約はいつでも管理画面から行うことができ、解約後も次回更新日の前日まで引き続きご利用いただけます（日割りでの返金はありません）。',
  },
  { label: '動作環境', value: 'スマートフォン・パソコンの最新版Webブラウザ（Chrome / Safari 等）' },
]

export default function Legal() {
  return (
    <LegalPage title="特定商取引法に基づく表示" updated="2026年10月1日">
      <dl className="divide-y divide-slate-100 rounded-xl border border-slate-100">
        {ROWS.map((r) => (
          <div key={r.label} className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <dt className="shrink-0 font-bold text-slate-700">{r.label}</dt>
            <dd className="text-slate-600">{r.value}</dd>
          </div>
        ))}
      </dl>
    </LegalPage>
  )
}
