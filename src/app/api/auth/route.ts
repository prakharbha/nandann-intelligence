import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { password, domain } = await request.json()
  const correctPassword = process.env.REPORT_PASSWORD
  const correctDomain = process.env.REPORT_DOMAIN

  if (!correctPassword || !correctDomain) {
    return NextResponse.json({ success: false, error: 'Server misconfiguration' }, { status: 500 })
  }

  if (password === correctPassword && domain === correctDomain) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('nandann-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
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
