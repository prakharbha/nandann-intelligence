'use client'

import { WebOpportunity } from '@/lib/types'
import { ArrowUpRight, Zap, Clock, AlertCircle } from 'lucide-react'

interface OpportunitiesSectionProps {
  opportunities: WebOpportunity[]
  clientName: string
}

const priorityConfig = {
  'high': {
    label: 'High Priority',
    badge: 'bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20',
    dot: 'bg-rose-500',
    icon: AlertCircle,
  },
  'quick-win': {
    label: 'Quick Win',
    badge: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20',
    dot: 'bg-emerald-500',
    icon: Zap,
  },
  'medium': {
    label: 'Medium',
    badge: 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20',
    dot: 'bg-amber-500',
    icon: Clock,
  },
}

const categoryColors: Record<WebOpportunity['category'], string> = {
  'UX & Conversion': 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400',
  'SEO Content': 'bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400',
  'New Page': 'bg-sky-100 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400',
  'Technical SEO': 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300',
  'Local SEO': 'bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400',
  'Mobile': 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400',
}

export function OpportunitiesSection({ opportunities, clientName }: OpportunitiesSectionProps) {
  const high = opportunities.filter(o => o.priority === 'high')
  const quickWins = opportunities.filter(o => o.priority === 'quick-win')
  const medium = opportunities.filter(o => o.priority === 'medium')
  const sorted = [...high, ...quickWins, ...medium]

  return (
    <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 dark:border-slate-800 bg-gradient-to-r from-gray-50 to-white dark:from-slate-900/50 dark:to-[#0f172a]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ArrowUpRight className="w-4 h-4 text-blue-500" />
              <h3 className="text-gray-900 dark:text-white font-semibold text-sm">Growth Opportunities</h3>
            </div>
            <p className="text-gray-400 dark:text-slate-500 text-xs">
              Data-driven improvements identified for {clientName} — each tied to a specific metric.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {high.length > 0 && (
              <span className="text-xs px-2 py-1 rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 font-medium border border-rose-200 dark:border-rose-500/20">
                {high.length} high priority
              </span>
            )}
            {quickWins.length > 0 && (
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-200 dark:border-emerald-500/20">
                {quickWins.length} quick wins
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="divide-y divide-gray-100 dark:divide-slate-800">
        {sorted.map((opp, i) => {
          const p = priorityConfig[opp.priority]
          const PriorityIcon = p.icon
          return (
            <div key={i} className="px-5 py-4 hover:bg-gray-50/50 dark:hover:bg-slate-800/30 transition-colors">
              <div className="flex items-start gap-3">
                {/* Priority dot */}
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${p.dot}`} />

                <div className="flex-1 min-w-0">
                  {/* Title row */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="text-gray-900 dark:text-white text-sm font-semibold leading-tight">{opp.title}</h4>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${p.badge}`}>
                      <PriorityIcon className="w-3 h-3" />
                      {p.label}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[opp.category]}`}>
                      {opp.category}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 font-medium">
                      {opp.effort} effort
                    </span>
                  </div>

                  {/* Evidence + Impact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="bg-gray-50 dark:bg-slate-900/60 rounded-xl px-3 py-2">
                      <p className="text-gray-400 dark:text-slate-500 text-xs font-medium mb-0.5 uppercase tracking-wide">The Data</p>
                      <p className="text-gray-600 dark:text-slate-300 text-xs leading-relaxed">{opp.evidence}</p>
                    </div>
                    <div className="bg-blue-50/50 dark:bg-blue-500/5 rounded-xl px-3 py-2 border border-blue-100 dark:border-blue-500/10">
                      <p className="text-blue-500 dark:text-blue-400 text-xs font-medium mb-0.5 uppercase tracking-wide">Expected Impact</p>
                      <p className="text-gray-600 dark:text-slate-300 text-xs leading-relaxed">{opp.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="px-5 py-3.5 bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-between gap-3">
        <p className="text-white text-xs font-medium">
          Ready to action these? Let&apos;s build a plan together.
        </p>
        <a
          href="mailto:hello@nandann.com?subject=Growth Opportunities for summitdrilling.com"
          className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex-shrink-0"
        >
          Get in touch
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
