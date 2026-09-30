// 一般公開前の簡易アクセス制限（Basic認証）。
export const config = {
  matcher: '/:path*',
}

export default function middleware(request: Request) {
  const user = process.env.BASIC_AUTH_USER
  const pass = process.env.BASIC_AUTH_PASS
  // 未設定の場合はロックアウトを避けるためスルーする
  if (!user || !pass) return

  const authHeader = request.headers.get('authorization')
  if (authHeader?.startsWith('Basic ')) {
    const decoded = atob(authHeader.slice(6))
    const separatorIndex = decoded.indexOf(':')
    const u = decoded.slice(0, separatorIndex)
    const p = decoded.slice(separatorIndex + 1)
    if (u === user && p === pass) return
  }

  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Rarry Pro"' },
  })
}
