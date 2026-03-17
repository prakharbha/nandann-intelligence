'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, BarChart2, TrendingUp, Eye, Globe } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

function normalizeDomain(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '')
}

export default function LoginPage() {
  const [domain, setDomain] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, domain: normalizeDomain(domain) }),
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      const data = await res.json()
      setError(data.error || 'Invalid credentials. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-[#020617] overflow-hidden">
      {/* Left — login panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 relative z-10">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-5">
              <BarChart2 className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Nandann Intelligence</h1>
            <p className="text-gray-500 dark:text-slate-400 text-sm mt-1.5">AI-Powered Analytics Reports</p>
          </div>

          {/* Features */}
          <div className="flex gap-4 mb-8 justify-center">
            {[
              { icon: TrendingUp, label: 'Trend Analysis' },
              { icon: Eye, label: 'AI Insights' },
              { icon: BarChart2, label: 'Visual Reports' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-500">
                <Icon className="w-3 h-3" />
                {label}
              </div>
            ))}
          </div>

          {/* Login card */}
          <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Domain field */}
              <div>
                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-2">Website Domain</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
                  <input
                    type="text"
                    value={domain}
                    onChange={e => setDomain(e.target.value)}
                    placeholder="e.g. nandann.com"
                    className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-3 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                    autoFocus
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
                <p className="text-xs text-gray-400 dark:text-slate-600 mt-1.5">With or without www / https://</p>
              </div>

              {/* Password field */}
              <div>
                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-2">Access Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-3 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                  />
                </div>
              </div>

              {error && (
                <p className="text-rose-500 text-xs flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-rose-500 rounded-full inline-block flex-shrink-0" />
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !password || !domain}
                className="w-full bg-blue-500 hover:bg-blue-400 disabled:bg-gray-100 dark:disabled:bg-slate-700 disabled:text-gray-400 dark:disabled:text-slate-500 text-white font-medium rounded-xl py-3 text-sm transition-colors duration-150"
              >
                {loading ? 'Verifying...' : 'View Report'}
              </button>
            </form>
          </div>

          <p className="text-center text-xs text-gray-400 dark:text-slate-600 mt-6">
            Powered by{' '}
            <a
              href="https://www.nandann.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-slate-500 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Nandann Creative Agency
            </a>
          </p>
        </div>
      </div>

      {/* Right — Spline scene (hidden on mobile, visible on tablet and up) */}
      <div className="hidden sm:flex flex-1 relative bg-black/[0.96] overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
