'use client'

import type { GscPage } from '@/lib/gscReportData'

interface Props { data: GscPage[] }

function ctrColor(ctr: number) {
    if (ctr >= 0.05) return 'text-emerald-600 dark:text-emerald-400'
    if (ctr >= 0.02) return 'text-blue-600 dark:text-blue-400'
    if (ctr > 0) return 'text-amber-600 dark:text-amber-400'
    return 'text-gray-400 dark:text-slate-600'
}

function shortPath(url: string): string {
    try {
        const u = new URL(url)
        return u.pathname === '/' ? '/ (Homepage)' : u.pathname
    } catch {
        return url
    }
}

export function GscPagesTable({ data }: Props) {
    return (
        <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold">Top Pages</h3>
                    <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5">Pages ranked in Google Search</p>
                </div>
                <span className="text-gray-400 dark:text-slate-500 text-xs">{data.length} pages</span>
            </div>
            <div className="overflow-x-auto scrollbar-thin">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 dark:border-slate-800">
                            {['Page', 'Clicks', 'Impressions', 'CTR', 'Position'].map(h => (
                                <th key={h} className={`pb-2.5 text-xs font-medium text-gray-400 dark:text-slate-500 ${h === 'Page' ? 'text-left' : 'text-right'}`}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((p, i) => (
                            <tr key={i} className="border-b border-gray-50 dark:border-slate-800/60 hover:bg-gray-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <td className="py-2.5 pr-4 max-w-[260px]">
                                    <a
                                        href={p.page}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 text-xs hover:underline truncate block"
                                        title={p.page}
                                    >
                                        {shortPath(p.page)}
                                    </a>
                                </td>
                                <td className="py-2.5 text-right">
                                    <span className="text-gray-900 dark:text-white text-xs font-semibold">{p.clicks}</span>
                                </td>
                                <td className="py-2.5 text-right">
                                    <span className="text-gray-500 dark:text-slate-400 text-xs">{p.impressions.toLocaleString()}</span>
                                </td>
                                <td className="py-2.5 text-right">
                                    <span className={`text-xs ${ctrColor(p.ctr)}`}>{(p.ctr * 100).toFixed(1)}%</span>
                                </td>
                                <td className="py-2.5 text-right">
                                    <span className={`text-xs ${p.position <= 10 ? 'text-emerald-500 dark:text-emerald-400 font-semibold' : p.position <= 20 ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 dark:text-slate-500'}`}>
                                        #{p.position.toFixed(1)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
