'use client'

import type { GscCountry } from '@/lib/gscReportData'

interface Props { data: GscCountry[] }

const flagEmoji: Record<string, string> = {
    'United States': '🇺🇸', India: '🇮🇳', Nigeria: '🇳🇬', Canada: '🇨🇦',
    Philippines: '🇵🇭', Pakistan: '🇵🇰', China: '🇨🇳', Bangladesh: '🇧🇩',
    Egypt: '🇪🇬', Australia: '🇦🇺', 'United Kingdom': '🇬🇧', 'New Zealand': '🇳🇿',
    Brazil: '🇧🇷', Vietnam: '🇻🇳', France: '🇫🇷', Germany: '🇩🇪',
}

export function GscCountriesTable({ data }: Props) {
    const maxClicks = Math.max(...data.map(c => c.clicks), 1)

    return (
        <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5 h-full">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Clicks by Country</h3>
            <p className="text-gray-400 dark:text-slate-500 text-xs mb-4">Geographic reach of organic search traffic</p>
            <div className="space-y-2.5">
                {data.map((c, i) => (
                    <div key={i}>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-gray-700 dark:text-slate-300 text-xs flex items-center gap-1.5">
                                <span>{flagEmoji[c.country] ?? '🌐'}</span>
                                {c.country}
                            </span>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-gray-900 dark:text-white font-semibold">{c.clicks}</span>
                                <span className="text-gray-400 dark:text-slate-600">{c.impressions.toLocaleString()} imp</span>
                            </div>
                        </div>
                        <div className="h-1.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                                style={{ width: `${maxClicks > 0 ? (c.clicks / maxClicks) * 100 : 0}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
