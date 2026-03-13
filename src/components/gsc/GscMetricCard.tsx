'use client'

interface GscMetricCardProps {
    label: string
    value: string
    sub?: string
    icon: React.ReactNode
    accent?: string
}

export function GscMetricCard({ label, value, sub, icon, accent = 'blue' }: GscMetricCardProps) {
    const accentMap: Record<string, { bg: string; text: string; border: string }> = {
        blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/20' },
        violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
        emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
        amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
    }
    const a = accentMap[accent] ?? accentMap.blue

    return (
        <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${a.bg} border ${a.border} ${a.text}`}>
                {icon}
            </div>
            <div>
                <p className="text-gray-400 dark:text-slate-500 text-xs mb-0.5">{label}</p>
                <p className="text-gray-900 dark:text-white text-2xl font-bold tracking-tight">{value}</p>
                {sub && <p className="text-gray-400 dark:text-slate-600 text-xs mt-1">{sub}</p>}
            </div>
        </div>
    )
}
