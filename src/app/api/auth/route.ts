import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { password, domain } = await request.json()
  const correctPassword = process.env.REPORT_PASSWORD || 'nandann2024'
  const correctDomain = process.env.REPORT_DOMAIN || 'summitdrilling.com'

  if (password === correctPassword && domain === correctDomain) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('nandann-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })
    return response
  }

  return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 })
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('nandann-auth')
  return response
}
