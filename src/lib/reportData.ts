import { ClientReport } from './types'

// This file will be populated with real data extracted from GA4 and GSC
// Sample data structure for Summit Drilling

function generateDailyData(days: number, baseDate: string, baseSessions: number, baseClicks: number) {
  const data = []
  const end = new Date(baseDate)
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(end)
    d.setDate(d.getDate() - i)
    const dayOfWeek = d.getDay()
    const weekendFactor = dayOfWeek === 0 || dayOfWeek === 6 ? 0.55 : 1
    const variance = () => 0.75 + Math.random() * 0.5
    data.push({
      date: d.toISOString().split('T')[0],
      sessions: Math.round((baseSessions / days) * weekendFactor * variance()),
      users: Math.round((baseSessions / days) * 0.82 * weekendFactor * variance()),
      clicks: Math.round((baseClicks / days) * weekendFactor * variance()),
      impressions: Math.round((baseClicks / days) * 27 * weekendFactor * variance()),
    })
  }
  return data
}

export const reportData: ClientReport = {
  client: {
    name: 'Summit Drilling',
    website: 'summitdrilling.com',
    generatedAt: '2026-03-14',
    dataEndDate: '2026-03-10',
    industry: 'Oil & Gas / Drilling Services',
  },
  periods: {
    '7d': {
      startDate: '2026-03-04',
      endDate: '2026-03-10',
      ga: {
        sessions: 487,
        users: 398,
        newUsers: 312,
        pageViews: 1284,
        bounceRate: 57.4,
        avgSessionDuration: 154,
        previousSessions: 421,
        previousUsers: 352,
        previousPageViews: 1098,
      },
      gsc: {
        clicks: 328,
        impressions: 8940,
        ctr: 3.67,
        position: 17.8,
        previousClicks: 289,
        previousImpressions: 7820,
        previousCtr: 3.70,
        previousPosition: 18.9,
      },
      dailyData: generateDailyData(7, '2026-03-10', 487, 328),
      channels: [
        { channel: 'Organic Search', sessions: 248, percentage: 50.9, color: '#3b82f6' },
        { channel: 'Direct', sessions: 112, percentage: 23.0, color: '#8b5cf6' },
        { channel: 'Referral', sessions: 71, percentage: 14.6, color: '#f59e0b' },
        { channel: 'Social', sessions: 38, percentage: 7.8, color: '#10b981' },
        { channel: 'Other', sessions: 18, percentage: 3.7, color: '#6b7280' },
      ],
      topPages: [
        { page: '/services/directional-drilling', sessions: 98, pageViews: 142, bounceRate: 44.2, avgDuration: 198 },
        { page: '/', sessions: 87, pageViews: 134, bounceRate: 62.1, avgDuration: 112 },
        { page: '/services/well-completion', sessions: 64, pageViews: 91, bounceRate: 51.3, avgDuration: 175 },
        { page: '/projects', sessions: 48, pageViews: 78, bounceRate: 38.9, avgDuration: 224 },
        { page: '/about', sessions: 42, pageViews: 58, bounceRate: 67.4, avgDuration: 89 },
        { page: '/contact', sessions: 39, pageViews: 52, bounceRate: 28.2, avgDuration: 142 },
        { page: '/services/horizontal-drilling', sessions: 34, pageViews: 49, bounceRate: 47.1, avgDuration: 188 },
        { page: '/equipment', sessions: 29, pageViews: 41, bounceRate: 55.2, avgDuration: 163 },
      ],
      topQueries: [
        { query: 'directional drilling company', clicks: 42, impressions: 890, ctr: 4.72, position: 8.4 },
        { query: 'summit drilling services', clicks: 38, impressions: 320, ctr: 11.88, position: 3.2 },
        { query: 'oil well drilling contractor', clicks: 31, impressions: 1240, ctr: 2.50, position: 14.7 },
        { query: 'horizontal drilling services canada', clicks: 28, impressions: 760, ctr: 3.68, position: 11.2 },
        { query: 'well completion services', clicks: 24, impressions: 980, ctr: 2.45, position: 16.8 },
        { query: 'drilling contractor near me', clicks: 19, impressions: 1450, ctr: 1.31, position: 22.4 },
        { query: 'oilfield services company', clicks: 17, impressions: 2100, ctr: 0.81, position: 31.6 },
        { query: 'coiled tubing services', clicks: 15, impressions: 620, ctr: 2.42, position: 13.9 },
      ],
      aiSummary: 'Summit Drilling had a strong week with traffic up 15.7% compared to the previous 7 days. Organic search continues to be the dominant channel at 51% of sessions, and Search Console clicks grew 13.5%. The directional drilling services page is the top performer, reflecting strong industry demand. Average session duration of 2:34 indicates visitors are genuinely engaged with the content.',
      insights: [
        {
          title: 'Traffic Growing Week-Over-Week',
          body: 'Sessions increased by 15.7% (487 vs 421) compared to the previous 7 days, driven primarily by a 14.5% rise in organic search clicks. This is a strong positive signal for SEO momentum.',
          type: 'positive',
        },
        {
          title: 'Directional Drilling Page Outperforming',
          body: 'The /services/directional-drilling page has the lowest bounce rate (44.2%) and highest engagement of all service pages. This indicates strong intent from visitors — consider adding a clear call-to-action or quote request form.',
          type: 'opportunity',
        },
        {
          title: 'Average Search Position Improving',
          body: 'Average ranking improved from 18.9 to 17.8 over 7 days. The query "summit drilling services" ranks at position 3.2 — excellent brand visibility. "Directional drilling company" at position 8.4 is close to breaking into the top 5.',
          type: 'positive',
        },
        {
          title: 'High Bounce Rate on Homepage',
          body: 'The homepage has a 62.1% bounce rate, above the site average of 57.4%. Visitors may not be finding clear navigation to service pages immediately. A more prominent services overview or CTAs above the fold could help.',
          type: 'warning',
        },
      ],
      recommendations: [
        'Add a "Request a Quote" CTA to the directional drilling page — it has the highest engagement and lowest bounce rate',
        'Optimize the homepage to better guide visitors to key service pages (reduce bounce rate)',
        'Target the query "oil well drilling contractor" with more dedicated content — 1,240 impressions but only 2.5% CTR',
        'The contact page has only 28.2% bounce rate — ensure follow-up processes are in place for inquiries',
      ],
    },
    '30d': {
      startDate: '2026-02-09',
      endDate: '2026-03-10',
      ga: {
        sessions: 1924,
        users: 1587,
        newUsers: 1248,
        pageViews: 5142,
        bounceRate: 60.8,
        avgSessionDuration: 138,
        previousSessions: 1742,
        previousUsers: 1421,
        previousPageViews: 4618,
      },
      gsc: {
        clicks: 1287,
        impressions: 36240,
        ctr: 3.55,
        position: 18.9,
        previousClicks: 1098,
        previousImpressions: 31800,
        previousCtr: 3.45,
        previousPosition: 20.4,
      },
      dailyData: generateDailyData(30, '2026-03-10', 1924, 1287),
      channels: [
        { channel: 'Organic Search', sessions: 986, percentage: 51.2, color: '#3b82f6' },
        { channel: 'Direct', sessions: 432, percentage: 22.5, color: '#8b5cf6' },
        { channel: 'Referral', sessions: 284, percentage: 14.8, color: '#f59e0b' },
        { channel: 'Social', sessions: 148, percentage: 7.7, color: '#10b981' },
        { channel: 'Other', sessions: 74, percentage: 3.8, color: '#6b7280' },
      ],
      topPages: [
        { page: '/services/directional-drilling', sessions: 389, pageViews: 562, bounceRate: 45.8, avgDuration: 204 },
        { page: '/', sessions: 348, pageViews: 521, bounceRate: 63.4, avgDuration: 108 },
        { page: '/services/well-completion', sessions: 248, pageViews: 362, bounceRate: 52.1, avgDuration: 181 },
        { page: '/projects', sessions: 192, pageViews: 298, bounceRate: 39.7, avgDuration: 231 },
        { page: '/about', sessions: 168, pageViews: 228, bounceRate: 68.9, avgDuration: 84 },
        { page: '/contact', sessions: 152, pageViews: 201, bounceRate: 29.6, avgDuration: 148 },
        { page: '/services/horizontal-drilling', sessions: 138, pageViews: 194, bounceRate: 48.4, avgDuration: 192 },
        { page: '/equipment', sessions: 112, pageViews: 162, bounceRate: 56.8, avgDuration: 169 },
      ],
      topQueries: [
        { query: 'directional drilling company', clicks: 168, impressions: 3840, ctr: 4.38, position: 8.9 },
        { query: 'summit drilling services', clicks: 142, impressions: 1280, ctr: 11.09, position: 3.4 },
        { query: 'oil well drilling contractor', clicks: 124, impressions: 5120, ctr: 2.42, position: 15.2 },
        { query: 'horizontal drilling services canada', clicks: 112, impressions: 3120, ctr: 3.59, position: 11.8 },
        { query: 'well completion services', clicks: 98, impressions: 3980, ctr: 2.46, position: 17.3 },
        { query: 'drilling contractor near me', clicks: 74, impressions: 5840, ctr: 1.27, position: 23.1 },
        { query: 'oilfield services company', clicks: 62, impressions: 8420, ctr: 0.74, position: 32.8 },
        { query: 'coiled tubing services', clicks: 58, impressions: 2480, ctr: 2.34, position: 14.4 },
      ],
      aiSummary: 'Over the past 30 days, Summit Drilling\'s digital presence shows consistent growth. Sessions are up 10.4% month-over-month, with organic search clicks surging 17.2% and average ranking improving from position 20.4 to 18.9. The site attracted 1,248 new users — a strong signal of growing brand awareness. Service pages are drawing significant engagement, particularly directional drilling and well completion, indicating that the target audience is actively researching these specific services.',
      insights: [
        {
          title: 'Strong Month-Over-Month Traffic Growth',
          body: 'Sessions grew 10.4% (1,924 vs 1,742) while organic clicks surged 17.2% (1,287 vs 1,098). The site is gaining organic momentum — a sign that SEO efforts are compounding.',
          type: 'positive',
        },
        {
          title: 'Search Rankings Climbing Steadily',
          body: 'Average position improved from 20.4 to 18.9 over 30 days. Moving from page 2-3 territory toward page 2, which can dramatically increase CTR. Several key queries are approaching first-page positions.',
          type: 'positive',
        },
        {
          title: 'Large Impression Volume Not Converting to Clicks',
          body: '"Oilfield services company" gets 8,420 impressions but only 62 clicks (0.74% CTR). The low CTR suggests the meta title/description may not be compelling enough for this high-volume query.',
          type: 'opportunity',
        },
        {
          title: 'New User Acquisition Healthy',
          body: '1,248 new users over 30 days means the site is consistently reaching new potential clients. At a 22.5% direct traffic share, brand recall is also strong.',
          type: 'info',
        },
      ],
      recommendations: [
        'Rewrite the meta description for pages targeting "oilfield services company" — 8,420 impressions are going to waste with 0.74% CTR',
        'Create a dedicated case studies or projects page to target bottom-of-funnel queries and increase time-on-site',
        'The referral channel (14.8%) suggests good partner/directory presence — identify top referral sources and strengthen those relationships',
        'Add schema markup (LocalBusiness + Service) to boost rich snippet eligibility and improve CTR across all queries',
      ],
    },
    '90d': {
      startDate: '2025-12-10',
      endDate: '2026-03-10',
      ga: {
        sessions: 5482,
        users: 4318,
        newUsers: 3542,
        pageViews: 14628,
        bounceRate: 62.4,
        avgSessionDuration: 131,
        previousSessions: 4821,
        previousUsers: 3892,
        previousPageViews: 12840,
      },
      gsc: {
        clicks: 3724,
        impressions: 104800,
        ctr: 3.55,
        position: 19.8,
        previousClicks: 3142,
        previousImpressions: 89400,
        previousCtr: 3.51,
        previousPosition: 22.1,
      },
      dailyData: generateDailyData(90, '2026-03-10', 5482, 3724),
      channels: [
        { channel: 'Organic Search', sessions: 2812, percentage: 51.3, color: '#3b82f6' },
        { channel: 'Direct', sessions: 1238, percentage: 22.6, color: '#8b5cf6' },
        { channel: 'Referral', sessions: 812, percentage: 14.8, color: '#f59e0b' },
        { channel: 'Social', sessions: 420, percentage: 7.7, color: '#10b981' },
        { channel: 'Other', sessions: 200, percentage: 3.6, color: '#6b7280' },
      ],
      topPages: [
        { page: '/services/directional-drilling', sessions: 1104, pageViews: 1598, bounceRate: 46.2, avgDuration: 208 },
        { page: '/', sessions: 986, pageViews: 1482, bounceRate: 64.1, avgDuration: 104 },
        { page: '/services/well-completion', sessions: 712, pageViews: 1028, bounceRate: 53.4, avgDuration: 185 },
        { page: '/projects', sessions: 548, pageViews: 842, bounceRate: 40.8, avgDuration: 238 },
        { page: '/about', sessions: 482, pageViews: 648, bounceRate: 70.2, avgDuration: 81 },
        { page: '/contact', sessions: 428, pageViews: 568, bounceRate: 30.4, avgDuration: 152 },
        { page: '/services/horizontal-drilling', sessions: 392, pageViews: 548, bounceRate: 49.8, avgDuration: 196 },
        { page: '/equipment', sessions: 318, pageViews: 458, bounceRate: 57.4, avgDuration: 172 },
      ],
      topQueries: [
        { query: 'directional drilling company', clicks: 484, impressions: 11280, ctr: 4.29, position: 9.2 },
        { query: 'summit drilling services', clicks: 412, impressions: 3820, ctr: 10.79, position: 3.6 },
        { query: 'oil well drilling contractor', clicks: 358, impressions: 15840, ctr: 2.26, position: 15.8 },
        { query: 'horizontal drilling services canada', clicks: 322, impressions: 9120, ctr: 3.53, position: 12.1 },
        { query: 'well completion services', clicks: 284, impressions: 11840, ctr: 2.40, position: 17.9 },
        { query: 'drilling contractor near me', clicks: 218, impressions: 17480, ctr: 1.25, position: 23.8 },
        { query: 'oilfield services company', clicks: 184, impressions: 25240, ctr: 0.73, position: 33.4 },
        { query: 'coiled tubing services', clicks: 168, impressions: 7320, ctr: 2.30, position: 14.8 },
      ],
      aiSummary: 'Over the past 90 days, Summit Drilling has demonstrated sustained digital growth across all key metrics. Sessions increased 13.7% quarter-over-quarter, organic search clicks grew 18.5%, and average ranking improved significantly from position 22.1 to 19.8 — approaching page 2 on average. The site attracted 3,542 new users, indicating strong top-of-funnel growth. The consistent 51%+ organic traffic share reflects a healthy, sustainable channel mix. Service-specific pages are the primary engagement drivers, suggesting the target audience is in active research mode.',
      insights: [
        {
          title: 'Consistent Quarter-Over-Quarter Growth',
          body: 'All major metrics improved over 90 days: sessions +13.7%, organic clicks +18.5%, search impressions +17.2%, average position improved by 2.3 places. This represents strong, sustainable digital momentum.',
          type: 'positive',
        },
        {
          title: 'Brand Search Growing — Strong Recall',
          body: '"Summit drilling services" generates 412 clicks at position 3.6 with a 10.79% CTR. Brand searches have grown quarter-over-quarter, suggesting word-of-mouth and offline marketing are driving people to search for the brand directly.',
          type: 'positive',
        },
        {
          title: '25,000+ Impressions for "Oilfield Services" — Untapped',
          body: 'The query "oilfield services company" generates 25,240 impressions over 90 days but only 184 clicks (0.73% CTR). Improving ranking from position 33 to page 1-2 on this query alone could add 400-600 monthly clicks.',
          type: 'opportunity',
        },
        {
          title: 'Contact Page Conversion Signal',
          body: 'The /contact page has a 30.4% bounce rate — the lowest of any page except /projects. Visitors who reach the contact page are highly motivated. Consider adding phone number, chat widget, or a faster response guarantee.',
          type: 'opportunity',
        },
      ],
      recommendations: [
        'Invest in content targeting "oilfield services company" — 25,240 impressions at 0.73% CTR represents the biggest untapped opportunity on the site',
        'Build 2-3 detailed case study pages covering completed projects — the /projects page has the best engagement metrics and lowest bounce rate',
        'Implement Google Business Profile optimization — "drilling contractor near me" gets 17,480 impressions, suggesting local intent',
        'Consider a blog/resource section covering industry topics — this could capture additional top-of-funnel organic traffic and improve overall domain authority',
        'Add live chat or a 15-minute response guarantee to the contact page to convert the high-intent visitors already landing there',
      ],
    },
  },
}
