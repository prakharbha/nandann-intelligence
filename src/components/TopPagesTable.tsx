'use client'

import { TopPage } from '@/lib/types'
import { ExternalLink } from 'lucide-react'

interface TopPagesTableProps {
  data: TopPage[]
  website: string
}

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function TopPagesTable({ data, website }: TopPagesTableProps) {
  return (
    <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5 h-full">
      <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Top Pages</h3>
      <p className="text-gray-400 dark:text-slate-500 text-xs mb-5">Best performing pages by sessions</p>

      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm min-w-[480px]">
          <thead>
            <tr className="text-gray-400 dark:text-slate-500 text-xs">
              <th className="text-left pb-3 font-medium">Page</th>
              <th className="text-right pb-3 font-medium">Sessions</th>
              <th className="text-right pb-3 font-medium">Views</th>
              <th className="text-right pb-3 font-medium">Bounce</th>
              <th className="text-right pb-3 font-medium">Avg Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((page, i) => (
              <tr key={i} className="border-t border-gray-100 dark:border-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-2.5 pr-4">
                  <a
                    href={`https://${website}${page.page}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-500 hover:text-blue-400 font-mono text-xs max-w-[180px] sm:max-w-xs truncate"
                  >
                    <span className="truncate">{page.page}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </td>
                <td className="py-2.5 text-right text-gray-900 dark:text-white font-semibold">{page.sessions.toLocaleString()}</td>
                <td className="py-2.5 text-right text-gray-600 dark:text-slate-300">{page.pageViews.toLocaleString()}</td>
                <td className="py-2.5 text-right">
                  <span className={`${page.bounceRate < 45 ? 'text-emerald-600 dark:text-emerald-400' : page.bounceRate > 65 ? 'text-rose-500 dark:text-rose-400' : 'text-gray-600 dark:text-slate-300'}`}>
                    {page.bounceRate}%
                  </span>
                </td>
                <td className="py-2.5 text-right text-gray-600 dark:text-slate-300">{formatDuration(page.avgDuration)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
