'use client'

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import type { GscDevice } from '@/lib/gscReportData'

interface Props { data: GscDevice[] }

const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null
    const d = payload[0].payload as GscDevice
    return (
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-3 shadow-lg text-xs">
            <p className="text-gray-900 dark:text-white font-semibold mb-1">{d.device}</p>
            <p className="text-gray-500 dark:text-slate-400">Clicks: <span className="text-gray-900 dark:text-white font-medium">{d.clicks}</span></p>
            <p className="text-gray-500 dark:text-slate-400">CTR: <span className="text-gray-900 dark:text-white font-medium">{(d.ctr * 100).toFixed(2)}%</span></p>
            <p className="text-gray-500 dark:text-slate-400">Avg Position: <span className="text-gray-900 dark:text-white font-medium">{d.position.toFixed(1)}</span></p>
        </div>
    )
}

export function GscDevicesChart({ data }: Props) {
    const total = data.reduce((s, d) => s + d.clicks, 0)

    return (
        <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5 h-full">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Clicks by Device</h3>
            <p className="text-gray-400 dark:text-slate-500 text-xs mb-4">Device split from Search Console</p>

            <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={80}
                        dataKey="clicks"
                        nameKey="device"
                        paddingAngle={3}
                    >
                        {data.map((d, i) => <Cell key={i} fill={d.color} />)}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
                        formatter={(val) => <span className="text-gray-600 dark:text-slate-400">{val}</span>}
                    />
                </PieChart>
            </ResponsiveContainer>

            <div className="mt-3 space-y-2">
                {data.map((d, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                            <span className="text-gray-700 dark:text-slate-300">{d.device}</span>
                        </div>
                        <span className="text-gray-500 dark:text-slate-500">
                            {d.clicks} clicks · {total > 0 ? ((d.clicks / total) * 100).toFixed(0) : 0}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
