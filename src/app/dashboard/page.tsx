'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  BarChart2, Users, MousePointerClick, Eye, Globe,
  TrendingDown, LogOut, Calendar, RefreshCw, Sun, Moon,
} from 'lucide-react'
import { MetricCard } from '@/components/MetricCard'
import { TrafficChart } from '@/components/TrafficChart'
import { ChannelChart } from '@/components/ChannelChart'
import { TopPagesTable } from '@/components/TopPagesTable'
import { TopQueriesTable } from '@/components/TopQueriesTable'
import { InsightsSection } from '@/components/InsightsSection'
import { useTheme } from '@/components/ThemeProvider'
import { reportData } from '@/lib/reportData'
import { Period } from '@/lib/types'

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function pctChange(current: number, previous: number) {
  return ((current - previous) / previous) * 100
}

const periodLabels: Record<Period, string> = {
  '7d': 'Last 7 Days',
  '30d': 'Last 30 Days',
  '90d': 'Last 90 Days',
}

export default function DashboardPage() {
  const [period, setPeriod] = useState<Period>('30d')
  const router = useRouter()
  const { theme, toggle } = useTheme()
  const { client, periods } = reportData
  const data = periods[period]

  async function handleLogout() {
    await fetch('/api/auth', { method: 'DELETE' })
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#020617]/95 backdrop-blur border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          {/* Left: brand + site */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <BarChart2 className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-gray-900 dark:text-white font-semibold text-sm hidden md:block flex-shrink-0">Nandann Intelligence</span>
            <span className="text-gray-300 dark:text-slate-600 hidden md:block">|</span>
            <a
              href={`https://${client.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-500 dark:text-slate-400 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors min-w-0"
            >
              <Globe className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{client.website}</span>
            </a>
          </div>

          {/* Right: data date + theme toggle + logout */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-500">
              <RefreshCw className="w-3 h-3" />
              Data to {client.dataEndDate}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-5">
        {/* Page title + period selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">Analytics Report</h1>
            <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {data.startDate} → {data.endDate}
            </p>
          </div>

          {/* Period tabs */}
          <div className="flex bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-1 gap-1 self-start sm:self-auto">
            {(['7d', '30d', '90d'] as Period[]).map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  period === p
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {p === '7d' ? '7 days' : p === '30d' ? '30 days' : '90 days'}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 dark:text-slate-500 -mt-2">
          {periodLabels[period]} · compared to previous {period === '7d' ? '7' : period === '30d' ? '30' : '90'} days
        </p>

        {/* KPI Cards — 2 cols mobile, 3 cols tablet, 6 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <MetricCard label="Sessions" value={data.ga.sessions.toLocaleString()} change={data.ga.previousSessions ? pctChange(data.ga.sessions, data.ga.previousSessions) : undefined} icon={<BarChart2 className="w-3.5 h-3.5" />} />
          <MetricCard label="Users" value={data.ga.users.toLocaleString()} change={data.ga.previousUsers ? pctChange(data.ga.users, data.ga.previousUsers) : undefined} icon={<Users className="w-3.5 h-3.5" />} />
          <MetricCard label="Page Views" value={data.ga.pageViews.toLocaleString()} change={data.ga.previousPageViews ? pctChange(data.ga.pageViews, data.ga.previousPageViews) : undefined} icon={<Eye className="w-3.5 h-3.5" />} />
          <MetricCard label="Organic Clicks" value={data.gsc.clicks.toLocaleString()} change={data.gsc.previousClicks ? pctChange(data.gsc.clicks, data.gsc.previousClicks) : undefined} icon={<MousePointerClick className="w-3.5 h-3.5" />} />
          <MetricCard label="Impressions" value={data.gsc.impressions >= 1000 ? `${(data.gsc.impressions / 1000).toFixed(1)}K` : String(data.gsc.impressions)} change={data.gsc.previousImpressions ? pctChange(data.gsc.impressions, data.gsc.previousImpressions) : undefined} icon={<Eye className="w-3.5 h-3.5" />} />
          <MetricCard label="Avg Position" value={`#${data.gsc.position}`} change={data.gsc.previousPosition ? pctChange(data.gsc.position, data.gsc.previousPosition) : undefined} icon={<TrendingDown className="w-3.5 h-3.5" />} inverse />
        </div>

        {/* Secondary metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Bounce Rate', value: `${data.ga.bounceRate}%`, sub: 'Lower is better' },
            { label: 'Avg Session Time', value: formatDuration(data.ga.avgSessionDuration), sub: 'Min:Sec' },
            { label: 'New Users', value: data.ga.newUsers.toLocaleString(), sub: `${((data.ga.newUsers / data.ga.users) * 100).toFixed(0)}% of users` },
            { label: 'Search CTR', value: `${data.gsc.ctr.toFixed(2)}%`, sub: 'Click-through rate' },
          ].map(({ label, value, sub }) => (
            <div key={label} className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-4">
              <p className="text-gray-400 dark:text-slate-500 text-xs mb-1">{label}</p>
              <p className="text-gray-900 dark:text-white text-lg font-bold">{value}</p>
              <p className="text-gray-400 dark:text-slate-600 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>

        {/* Traffic Chart */}
        <TrafficChart data={data.dailyData} period={period} />

        {/* Channel + Top Pages */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2">
            <ChannelChart data={data.channels} />
          </div>
          <div className="lg:col-span-3">
            <TopPagesTable data={data.topPages} website={client.website} />
          </div>
        </div>

        {/* Top Queries */}
        <TopQueriesTable data={data.topQueries} />

        {/* AI Insights */}
        <InsightsSection
          insights={data.insights}
          recommendations={data.recommendations}
          summary={data.aiSummary}
        />

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-slate-800 pt-5 pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-slate-600">
          <span>Generated by <span className="text-gray-500 dark:text-slate-500 font-medium">Nandann Intelligence</span></span>
          <span>Report date: {client.generatedAt}</span>
        </footer>
      </main>
    </div>
  )
}
