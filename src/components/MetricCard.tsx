'use client'

import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface MetricCardProps {
  label: string
  value: string
  change?: number
  icon?: React.ReactNode
  inverse?: boolean
}

export function MetricCard({ label, value, change, icon, inverse = false }: MetricCardProps) {
  const isPositive = inverse ? (change ?? 0) < 0 : (change ?? 0) > 0
  const isNegative = inverse ? (change ?? 0) > 0 : (change ?? 0) < 0
  const absChange = Math.abs(change ?? 0)

  return (
    <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col gap-2.5 hover:border-gray-300 dark:hover:border-slate-700 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-gray-500 dark:text-slate-400 text-xs font-medium leading-tight">{label}</span>
        {icon && (
          <div className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-400 dark:text-slate-400">
            {icon}
          </div>
        )}
      </div>

      <div className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">{value}</div>

      {change !== undefined && (
        <div className={`flex items-center gap-1 text-xs font-medium ${
          isPositive ? 'text-emerald-600 dark:text-emerald-400'
          : isNegative ? 'text-rose-500 dark:text-rose-400'
          : 'text-gray-400 dark:text-slate-500'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-3.5 h-3.5" />
          ) : isNegative ? (
            <TrendingDown className="w-3.5 h-3.5" />
          ) : (
            <Minus className="w-3.5 h-3.5" />
          )}
          <span>{absChange.toFixed(1)}% vs prev</span>
        </div>
      )}
    </div>
  )
}
