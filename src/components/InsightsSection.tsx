'use client'

import { Insight } from '@/lib/types'
import { TrendingUp, AlertTriangle, Lightbulb, Info, CheckCircle2 } from 'lucide-react'

interface InsightsSectionProps {
  insights: Insight[]
  recommendations: string[]
  summary: string
}

const insightConfig = {
  positive: {
    icon: TrendingUp,
    bg: 'bg-emerald-50 dark:bg-emerald-500/5',
    border: 'border-emerald-200 dark:border-emerald-500/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    badge: 'bg-emerald-100 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400',
    label: 'Positive',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-amber-50 dark:bg-amber-500/5',
    border: 'border-amber-200 dark:border-amber-500/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-100 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400',
    label: 'Watch',
  },
  opportunity: {
    icon: Lightbulb,
    bg: 'bg-blue-50 dark:bg-blue-500/5',
    border: 'border-blue-200 dark:border-blue-500/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-100 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400',
    label: 'Opportunity',
  },
  info: {
    icon: Info,
    bg: 'bg-gray-50 dark:bg-slate-500/5',
    border: 'border-gray-200 dark:border-slate-600',
    iconColor: 'text-gray-500 dark:text-slate-400',
    badge: 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-400',
    label: 'Info',
  },
}

export function InsightsSection({ insights, recommendations, summary }: InsightsSectionProps) {
  return (
    <div className="space-y-5">
      {/* AI Summary */}
      <div className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-500/10 dark:to-violet-500/5 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center">
            <span className="text-xs">✦</span>
          </div>
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">AI Executive Summary</span>
        </div>
        <p className="text-gray-700 dark:text-slate-200 text-sm leading-relaxed">{summary}</p>
      </div>

      {/* Insights grid */}
      <div>
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, i) => {
            const config = insightConfig[insight.type]
            const Icon = config.icon
            return (
              <div key={i} className={`rounded-2xl p-5 border ${config.bg} ${config.border}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${config.bg} border ${config.border}`}>
                    <Icon className={`w-4 h-4 ${config.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h4 className="text-gray-900 dark:text-white text-sm font-semibold leading-tight">{insight.title}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${config.badge}`}>
                        {config.label}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed">{insight.body}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5">
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Recommended Actions</h3>
        <ul className="space-y-3">
          {recommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">{rec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
