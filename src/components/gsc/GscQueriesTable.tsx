'use client'

import type { GscQuery } from '@/lib/gscReportData'

interface Props { data: GscQuery[] }

function ctrColor(ctr: number) {
    if (ctr >= 0.15) return 'text-emerald-600 dark:text-emerald-400'
    if (ctr >= 0.05) return 'text-blue-600 dark:text-blue-400'
    if (ctr >= 0.01) return 'text-amber-600 dark:text-amber-400'
    return 'text-gray-400 dark:text-slate-500'
}

function posColor(pos: number) {
    if (pos <= 3) return 'text-emerald-600 dark:text-emerald-400 font-bold'
    if (pos <= 10) return 'text-blue-600 dark:text-blue-400 font-semibold'
    if (pos <= 20) return 'text-amber-600 dark:text-amber-400'
    return 'text-gray-400 dark:text-slate-500'
}

export function GscQueriesTable({ data }: Props) {
    return (
        <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold">Top Queries</h3>
                    <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5">Search terms driving traffic to summitdrilling.com</p>
                </div>
                <span className="text-gray-400 dark:text-slate-500 text-xs">{data.length} queries</span>
            </div>
            <div className="overflow-x-auto scrollbar-thin">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 dark:border-slate-800">
                            {['Query', 'Clicks', 'Impressions', 'CTR', 'Position'].map(h => (
                                <th key={h} className={`pb-2.5 text-xs font-medium text-gray-400 dark:text-slate-500 ${h === 'Query' ? 'text-left' : 'text-right'}`}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((q, i) => (
                            <tr key={i} className="border-b border-gray-50 dark:border-slate-800/60 hover:bg-gray-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <td className="py-2.5 pr-4 max-w-xs">
                                    <span className="text-gray-800 dark:text-slate-200 text-xs truncate block" title={q.query}>{q.query}</span>
                                </td>
                                <td className="py-2.5 text-right">
                                    <span className="text-gray-900 dark:text-white text-xs font-semibold">{q.clicks}</span>
                                </td>
                                <td className="py-2.5 text-right">
                                    <span className="text-gray-500 dark:text-slate-400 text-xs">{q.impressions.toLocaleString()}</span>
                                </td>
                                <td className="py-2.5 text-right">
                                    <span className={`text-xs ${ctrColor(q.ctr)}`}>{(q.ctr * 100).toFixed(1)}%</span>
                                </td>
                                <td className="py-2.5 text-right">
                                    <span className={`text-xs ${posColor(q.position)}`}>#{q.position.toFixed(1)}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
