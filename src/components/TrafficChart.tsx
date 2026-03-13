'use client'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { DailyDataPoint } from '@/lib/types'
import { format, parseISO } from 'date-fns'
import { useTheme } from './ThemeProvider'

interface TrafficChartProps {
  data: DailyDataPoint[]
  period: string
}

const CustomTooltip = ({ active, payload, label }: {
  active?: boolean
  payload?: { name: string; value: number; color: string }[]
  label?: string
}) => {
  if (!active || !payload?.length) return null

  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 shadow-xl">
      <p className="text-gray-500 dark:text-slate-400 text-xs mb-2">{label}</p>
      {payload.map(p => (
        <div key={p.name} className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-gray-600 dark:text-slate-300 capitalize">{p.name}:</span>
          <span className="text-gray-900 dark:text-white font-semibold">{p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  )
}

export function TrafficChart({ data, period }: TrafficChartProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const gridColor = isDark ? '#1e293b' : '#e5e7eb'
  const tickColor = isDark ? '#64748b' : '#9ca3af'

  const formatted = data.map(d => ({
    ...d,
    label: period === '7d'
      ? format(parseISO(d.date), 'EEE d')
      : format(parseISO(d.date), 'MMM d'),
  }))

  const displayData = period === '90d'
    ? formatted.filter((_, i) => i % 3 === 0)
    : formatted

  return (
    <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5">
      <div className="mb-5">
        <h3 className="text-gray-900 dark:text-white font-semibold">Traffic Trend</h3>
        <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5">Sessions & organic clicks over time</p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={displayData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="label"
            tick={{ fill: tickColor, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: tickColor, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '14px', fontSize: '12px', color: isDark ? '#94a3b8' : '#6b7280' }}
          />
          <Line type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="clicks" stroke="#f59e0b" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
