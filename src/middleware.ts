import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED = ['/dashboard', '/search-console']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (PROTECTED.some(p => pathname.startsWith(p))) {
    const token = request.cookies.get('nandann-auth')
    if (!token || token.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/search-console/:path*'],
}
