'use client'

import { TopQuery } from '@/lib/types'

interface TopQueriesTableProps {
  data: TopQuery[]
}

function PositionBadge({ position }: { position: number }) {
  const color =
    position <= 10 ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10' :
    position <= 20 ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10' :
    'text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-400/10'

  return (
    <span className={`inline-flex items-center justify-center w-12 text-xs font-semibold rounded-md px-1.5 py-0.5 ${color}`}>
      #{position.toFixed(1)}
    </span>
  )
}

export function TopQueriesTable({ data }: TopQueriesTableProps) {
  return (
    <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5">
      <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Top Search Queries</h3>
      <p className="text-gray-400 dark:text-slate-500 text-xs mb-5">From Google Search Console — what people searched to find the site</p>

      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm min-w-[480px]">
          <thead>
            <tr className="text-gray-400 dark:text-slate-500 text-xs">
              <th className="text-left pb-3 font-medium">Query</th>
              <th className="text-right pb-3 font-medium">Clicks</th>
              <th className="text-right pb-3 font-medium">Impressions</th>
              <th className="text-right pb-3 font-medium">CTR</th>
              <th className="text-right pb-3 font-medium">Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((q, i) => (
              <tr key={i} className="border-t border-gray-100 dark:border-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-2.5 pr-4 text-gray-700 dark:text-slate-200">
                  <span className="truncate block max-w-[160px] sm:max-w-xs">{q.query}</span>
                </td>
                <td className="py-2.5 text-right text-gray-900 dark:text-white font-semibold">{q.clicks.toLocaleString()}</td>
                <td className="py-2.5 text-right text-gray-500 dark:text-slate-400">{q.impressions.toLocaleString()}</td>
                <td className="py-2.5 text-right">
                  <span className={q.ctr >= 5 ? 'text-emerald-600 dark:text-emerald-400' : q.ctr >= 2 ? 'text-gray-600 dark:text-slate-300' : 'text-rose-500 dark:text-rose-400'}>
                    {q.ctr.toFixed(2)}%
                  </span>
                </td>
                <td className="py-2.5 text-right">
                  <PositionBadge position={q.position} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-400 dark:text-slate-500 border-t border-gray-100 dark:border-slate-800 pt-3">
        <span className="flex items-center gap-1"><span className="text-emerald-600 dark:text-emerald-400">■</span> Position 1–10 (Page 1)</span>
        <span className="flex items-center gap-1"><span className="text-amber-600 dark:text-amber-400">■</span> Position 11–20 (Page 2)</span>
        <span className="flex items-center gap-1"><span className="text-rose-500 dark:text-rose-400">■</span> Position 21+ (Page 3+)</span>
      </div>
    </div>
  )
}
