'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    BarChart2, Globe, LogOut, RefreshCw, MousePointerClick,
    Eye, TrendingDown, Percent, Sun, Moon, LayoutDashboard, Search,
} from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { GscMetricCard } from '@/components/gsc/GscMetricCard'
import { GscTrendChart } from '@/components/gsc/GscTrendChart'
import { GscPositionChart } from '@/components/gsc/GscPositionChart'
import { GscDevicesChart } from '@/components/gsc/GscDevicesChart'
import { GscQueriesTable } from '@/components/gsc/GscQueriesTable'
import { GscPagesTable } from '@/components/gsc/GscPagesTable'
import { GscCountriesTable } from '@/components/gsc/GscCountriesTable'
import { GscInsights } from '@/components/gsc/GscInsights'
import { OpportunitiesSection } from '@/components/OpportunitiesSection'
import { gscData, type GscPeriod } from '@/lib/gscReportData'

const periods: { key: GscPeriod; label: string; short: string }[] = [
    { key: '7d', label: 'Last 7 Days', short: '7d' },
    { key: '28d', label: 'Last 28 Days', short: '28d' },
    { key: '3m', label: 'Last 3 Months', short: '3m' },
]

export default function SearchConsolePage() {
    const [period, setPeriod] = useState<GscPeriod>('28d')
    const { theme, toggle } = useTheme()
    const router = useRouter()
    const data = gscData[period]

    async function handleLogout() {
        await fetch('/api/auth', { method: 'DELETE' })
        router.push('/')
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#020617]">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#020617]/95 backdrop-blur border-b border-gray-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
                    {/* Left */}
                    <div className="flex items-center gap-2 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                            <BarChart2 className="w-4 h-4 text-blue-500" />
                        </div>
                        <a
                            href="https://www.nandann.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-white font-semibold text-sm hidden md:block flex-shrink-0 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                            Nandann Intelligence
                        </a>
                        <span className="text-gray-300 dark:text-slate-600 hidden md:block">|</span>
                        <a
                            href="https://summitdrilling.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-gray-500 dark:text-slate-400 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors min-w-0"
                        >
                            <Globe className="w-3.5 h-3.5 flex-shrink-0" />
                            <span className="truncate">summitdrilling.com</span>
                        </a>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-500">
                            <RefreshCw className="w-3 h-3" />
                            Data to {data.endDate}
                        </div>

                        <button
                            onClick={toggle}
                            className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
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

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-6">

                {/* ── Report Navigation ── */}
                <div className="grid grid-cols-2 gap-3">
                    <a
                        href="/dashboard"
                        className="flex items-center gap-3 bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl px-4 py-3.5 transition-all group"
                    >
                        <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 flex items-center justify-center flex-shrink-0 transition-colors">
                            <LayoutDashboard className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                            <p className="font-semibold text-sm leading-tight">Google Analytics</p>
                            <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5 truncate">Traffic &amp; audience</p>
                        </div>
                    </a>
                    <div className="flex items-center gap-3 bg-blue-500 text-white rounded-2xl px-4 py-3.5 shadow-sm shadow-blue-500/20">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                            <Search className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                            <p className="font-semibold text-sm leading-tight">Search Console</p>
                            <p className="text-blue-100 text-xs mt-0.5 truncate">SEO &amp; rankings</p>
                        </div>
                    </div>
                </div>

                {/* Page title + period selector */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-lg font-bold text-gray-900 dark:text-white">Google Search Console Report</h1>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-medium">
                                Web Search
                            </span>
                        </div>
                        <p className="text-gray-400 dark:text-slate-500 text-xs">
                            {data.startDate} → {data.endDate} · summitdrilling.com
                        </p>
                    </div>

                    {/* Period tabs */}
                    <div className="flex bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-1 gap-1 self-start sm:self-auto">
                        {periods.map(p => (
                            <button
                                key={p.key}
                                onClick={() => setPeriod(p.key)}
                                className={`px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${period === p.key
                                        ? 'bg-blue-500 text-white shadow-sm'
                                        : 'text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                {p.short}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Section 1: Executive Summary ── */}
                <section>
                    <GscInsights
                        insights={data.insights}
                        recommendations={data.recommendations}
                        summary={data.summary}
                    />
                </section>

                {/* ── Section 2: KPI Cards ── */}
                <section>
                    <h2 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm uppercase tracking-wide">Performance Metrics</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        <GscMetricCard
                            label="Total Clicks"
                            value={data.totalClicks.toLocaleString()}
                            sub="Organic search clicks"
                            icon={<MousePointerClick className="w-4 h-4" />}
                            accent="blue"
                        />
                        <GscMetricCard
                            label="Total Impressions"
                            value={data.totalImpressions >= 1000
                                ? `${(data.totalImpressions / 1000).toFixed(1)}K`
                                : data.totalImpressions.toLocaleString()}
                            sub="Times shown in search"
                            icon={<Eye className="w-4 h-4" />}
                            accent="violet"
                        />
                        <GscMetricCard
                            label="Avg Click-Through Rate"
                            value={`${(data.avgCtr * 100).toFixed(2)}%`}
                            sub="Clicks ÷ Impressions"
                            icon={<Percent className="w-4 h-4" />}
                            accent="emerald"
                        />
                        <GscMetricCard
                            label="Avg Search Position"
                            value={`#${data.avgPosition.toFixed(1)}`}
                            sub="Lower = closer to top"
                            icon={<TrendingDown className="w-4 h-4" />}
                            accent="amber"
                        />
                    </div>
                </section>

                {/* ── Section 3: Trend Charts ── */}
                <section>
                    <h2 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm uppercase tracking-wide">Performance Trends</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-2">
                            <GscTrendChart data={data.chart} />
                        </div>
                        <div>
                            <GscPositionChart data={data.chart} />
                        </div>
                    </div>
                </section>

                {/* ── Section 4: Queries + Pages ── */}
                <section>
                    <h2 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm uppercase tracking-wide">Top Queries & Pages</h2>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        <GscQueriesTable data={data.queries} />
                        <GscPagesTable data={data.pages} />
                    </div>
                </section>

                {/* ── Section 5: Devices + Countries ── */}
                <section>
                    <h2 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm uppercase tracking-wide">Audience Breakdown</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        <div className="lg:col-span-2">
                            <GscDevicesChart data={data.devices} />
                        </div>
                        <div className="lg:col-span-3">
                            <GscCountriesTable data={data.countries} />
                        </div>
                    </div>
                </section>

                {/* ── Section 6: Growth Opportunities ── */}
                <section>
                    <OpportunitiesSection
                        opportunities={data.opportunities}
                        clientName="Summit Drilling"
                    />
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-200 dark:border-slate-800 pt-5 pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-slate-600">
                    <span>Generated by{' '}
                        <a
                            href="https://www.nandann.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-slate-500 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                            Nandann Intelligence
                        </a>
                    </span>
                    <span>Report date: 2026-03-14 · Data source: Google Search Console</span>
                </footer>
            </main>
        </div>
    )
}
