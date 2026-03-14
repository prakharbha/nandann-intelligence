export interface GAMetrics {
  sessions: number
  users: number
  newUsers: number
  pageViews: number
  bounceRate: number
  avgSessionDuration: number
  previousSessions?: number
  previousUsers?: number
  previousPageViews?: number
}

export interface GSCMetrics {
  clicks: number
  impressions: number
  ctr: number
  position: number
  previousClicks?: number
  previousImpressions?: number
  previousCtr?: number
  previousPosition?: number
}

export interface DailyDataPoint {
  date: string
  sessions: number
  users: number
  clicks: number
  impressions: number
}

export interface ChannelData {
  channel: string
  sessions: number
  percentage: number
  color: string
}

export interface TopPage {
  page: string
  sessions: number
  pageViews: number
  bounceRate: number
  avgDuration: number
}

export interface TopQuery {
  query: string
  clicks: number
  impressions: number
  ctr: number
  position: number
}

export interface Insight {
  title: string
  body: string
  type: 'positive' | 'warning' | 'info' | 'opportunity'
}

export interface WebOpportunity {
  title: string
  category: 'UX & Conversion' | 'SEO Content' | 'New Page' | 'Technical SEO' | 'Local SEO' | 'Mobile'
  priority: 'high' | 'medium' | 'quick-win'
  effort: 'Small' | 'Medium' | 'Large'
  evidence: string
  impact: string
}

export interface PeriodReport {
  startDate: string
  endDate: string
  ga: GAMetrics
  gsc: GSCMetrics
  dailyData: DailyDataPoint[]
  channels: ChannelData[]
  topPages: TopPage[]
  topQueries: TopQuery[]
  aiSummary: string
  insights: Insight[]
  recommendations: string[]
  opportunities: WebOpportunity[]
}

export interface ClientReport {
  client: {
    name: string
    website: string
    generatedAt: string
    dataEndDate: string
    industry?: string
  }
  periods: {
    '7d': PeriodReport
    '30d': PeriodReport
    '90d': PeriodReport
  }
}

export type Period = '7d' | '30d' | '90d'
