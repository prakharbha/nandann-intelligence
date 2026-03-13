'use client'

import { useState } from 'react'
import { ChannelData } from '@/lib/types'

interface ChannelChartProps {
  data: ChannelData[]
}

/** Pure SVG donut — no Recharts (Recharts v3 Pie has a sector rendering bug in flex containers) */
function DonutChart({ data }: { data: ChannelData[] }) {
  const [hovered, setHovered] = useState<string | null>(null)
  const r = 48
  const stroke = 20
  const cx = 70
  const cy = 70
  const circ = 2 * Math.PI * r
  const total = data.reduce((s, d) => s + d.sessions, 0)

  // Pre-calculate accumulated percentages
  let acc = 0
  const segments = data.map(d => {
    const pct = d.sessions / total
    const start = acc
    acc += pct
    return { ...d, pct, accPct: start }
  })

  return (
    <svg width={140} height={140} style={{ overflow: 'visible' }}>
      {segments.map(seg => {
        const dash = seg.pct * circ
        const gap = circ - dash
        // circ*0.25 rotates start point to 12 o'clock; subtract accPct offset
        const dashOffset = circ * 0.25 - seg.accPct * circ
        const isHovered = hovered === seg.channel
        return (
          <circle
            key={seg.channel}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={isHovered ? stroke + 4 : stroke}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={dashOffset}
            strokeLinecap="butt"
            style={{ transition: 'stroke-width 0.15s', cursor: 'pointer', opacity: hovered && !isHovered ? 0.5 : 1 }}
            onMouseEnter={() => setHovered(seg.channel)}
            onMouseLeave={() => setHovered(null)}
          />
        )
      })}
      {/* Center hole */}
      <circle cx={cx} cy={cy} r={r - stroke / 2 - 2} fill="transparent" />
    </svg>
  )
}

export function ChannelChart({ data }: ChannelChartProps) {
  return (
    <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 rounded-2xl p-5 h-full">
      <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Traffic Channels</h3>
      <p className="text-gray-400 dark:text-slate-500 text-xs mb-4">Where visitors come from</p>

      <div className="flex flex-row items-center gap-5">
        <div style={{ flexShrink: 0, width: 140, height: 140 }}>
          <DonutChart data={data} />
        </div>

        <div className="flex flex-col gap-2.5 flex-1 min-w-0">
          {data.map(d => (
            <div key={d.channel} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: d.color }} />
                <span className="text-sm text-gray-600 dark:text-slate-300 truncate">{d.channel}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-gray-400 dark:text-slate-500 hidden sm:block">{d.sessions.toLocaleString()}</span>
                <span className="text-xs font-semibold text-gray-900 dark:text-white w-10 text-right">{d.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
