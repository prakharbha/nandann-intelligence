'use client'

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'
import type { GscDailyPoint } from '@/lib/gscReportData'

interface Props {
    data: GscDailyPoint[]
}

function fmt(date: string) {
    const d = new Date(date + 'T00:00:00')
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    return (
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-3 shadow-lg text-xs">
            <p className="text-gray-500 dark:text-slate-400 mb-2">{fmt(label)}</p>
            {payload.map((p: any) => (
                <div key={p.name} className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-gray-600 dark:text-slate-300">{p.name}:</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{p.value.toLocaleString()}</span>
                </div>
            ))}
        </div>
    )
}

export function GscTrendChart({ data }: Props) {
    const stride = data.length > 28 ? 7 : 1

    const chartData = data.map(d => ({
        date: d.date,
        Clicks: d.clicks,
        Impressions: d.impressions,
    }))

    return (
        <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Clicks & Impressions Over Time</h3>
            <p className="text-gray-400 dark:text-slate-500 text-xs mb-5">Daily performance from Google Search Console</p>
            <ResponsiveContainer width="100%" height={220}>
                <LineChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.15} />
                    <XAxis
                        dataKey="date"
                        tickFormatter={fmt}
                        tick={{ fill: '#94a3b8', fontSize: 10 }}
                        interval={stride - 1}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis yAxisId="clicks" orientation="left" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="impressions" orientation="right" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
                    <Line yAxisId="clicks" type="monotone" dataKey="Clicks" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                    <Line yAxisId="impressions" type="monotone" dataKey="Impressions" stroke="#8b5cf6" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
