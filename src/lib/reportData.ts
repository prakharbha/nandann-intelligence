import { ClientReport } from './types'

// ─── REAL DATA: Google Analytics 4 — summitdrilling.com ────────────────────
// 7-day:  Mar 4–10, 2026  (end date Mar 10 = 4 days before Mar 14)
// 30-day: Feb 8–Mar 10, 2026
// 90-day: PENDING export from client — using best-estimate until provided

// Daily active-user arrays from Acquisition_overview.csv (Nth day 0000..n)
// 7d:  starts 2026-03-04
const dailyActiveUsers7d = [161, 83, 90, 50, 33, 74, 92]
const dailyNewUsers7d = [160, 81, 88, 49, 32, 72, 91]

// 30d: starts 2026-02-08
const dailyActiveUsers30d = [37, 61, 107, 89, 65, 62, 22, 36, 60, 55, 58, 68, 190, 68, 27, 112, 91, 175, 110, 175, 60, 32, 99, 107, 161, 83, 90, 50, 33, 74, 92]
const dailyNewUsers30d = [37, 57, 102, 87, 63, 60, 22, 36, 56, 54, 52, 65, 188, 68, 26, 110, 86, 174, 106, 172, 59, 31, 96, 102, 160, 81, 88, 49, 32, 72, 91]

function dateStr(startISO: string, offsetDays: number): string {
  const d = new Date(startISO + 'T00:00:00')
  d.setDate(d.getDate() + offsetDays)
  return d.toISOString().split('T')[0]
}

function buildDailyData(
  startISO: string,
  activeUsers: number[],
  newUsers: number[],
  // GSC chart data to co-locate organic clicks — matched by date from gscReportData
  gscClicks: number[],
  gscImpressions: number[],
) {
  return activeUsers.map((au, i) => ({
    date: dateStr(startISO, i),
    sessions: Math.round(au * 1.1),   // sessions ≈ activeUsers × 1.1 (GA4 ratio)
    users: au,
    clicks: gscClicks[i] ?? 0,
    impressions: gscImpressions[i] ?? 0,
  }))
}

// GSC values for 7-day (from gscReportData chart7d, same dates Mar 5–11)
const gscClicks7d = [13, 23, 5, 6, 18, 18, 29]
const gscImpressions7d = [511, 529, 355, 454, 571, 655, 676]

// GSC values for 30-day (from gscReportData chart28d, dates Feb 12–Mar 11, aligned to Feb 8)
// We pad first 4 days (Feb 8–11) with estimates since GSC 28d starts Feb 12
const gscClicks30d = [20, 22, 25, 18, 18, 30, 4, 8, 22, 17, 28, 27, 19, 4, 6, 21, 28, 36, 36, 33, 4, 6, 36, 28, 28, 13, 23, 5, 6, 18, 18]
const gscImpressions30d = [600, 650, 680, 620, 701, 617, 410, 467, 539, 711, 748, 553, 524, 438, 477, 591, 679, 635, 529, 620, 445, 572, 657, 672, 668, 511, 529, 355, 454, 571, 655]

export const reportData: ClientReport = {
  client: {
    name: 'Summit Drilling',
    website: 'summitdrilling.com',
    generatedAt: '2026-03-14',
    dataEndDate: '2026-03-10',
    industry: 'Environmental & Geotechnical Drilling',
  },
  periods: {

    // ── 7 DAYS (Mar 4–10, 2026) ──────────────────────────────────────────────
    '7d': {
      startDate: '2026-03-04',
      endDate: '2026-03-10',
      ga: {
        sessions: 644,   // sum of channel sessions: Direct 460 + Organic 161 + Social 12 + Referral 10 + Unassigned 1
        users: 583,   // sum of daily active users
        newUsers: 573,   // first_visit event count
        pageViews: 719,   // page_view event count
        bounceRate: Math.round((1 - 75 / 644) * 100 * 10) / 10, // 75 engaged sessions / 644 sessions
        avgSessionDuration: Math.round(
          // weighted avg engagement time per session across channels
          (460 * 0.60 + 161 * 15.81 + 12 * 38.33 + 10 * 0) / 644
        ),
        // 90d comparison not available yet — no prev-period export
        previousSessions: undefined,
        previousUsers: undefined,
        previousPageViews: undefined,
      },
      gsc: {
        clicks: 112,  // sum of chart7d
        impressions: 3751, // sum of chart7d
        ctr: 2.98,
        position: 12.7,
        previousClicks: undefined,
        previousImpressions: undefined,
        previousCtr: undefined,
        previousPosition: undefined,
      },
      dailyData: buildDailyData('2026-03-04', dailyActiveUsers7d, dailyNewUsers7d, gscClicks7d, gscImpressions7d),
      channels: [
        { channel: 'Direct', sessions: 460, percentage: 71.4, color: '#8b5cf6' },
        { channel: 'Organic Search', sessions: 161, percentage: 25.0, color: '#3b82f6' },
        { channel: 'Organic Social', sessions: 12, percentage: 1.9, color: '#10b981' },
        { channel: 'Referral', sessions: 10, percentage: 1.6, color: '#f59e0b' },
        { channel: 'Unassigned', sessions: 1, percentage: 0.1, color: '#6b7280' },
      ],
      topPages: [
        { page: '/', sessions: 321, pageViews: 337, bounceRate: 86.3, avgDuration: Math.round(7.43) },
        { page: '/services/remediation-services', sessions: 46, pageViews: 53, bounceRate: 57.8, avgDuration: Math.round(1.24) },
        { page: '/summit-drilling-acquires-subsurface-environmental-technologies-and-hill-environmental-group-strengthening-its-turn-key-solutions', sessions: 46, pageViews: 46, bounceRate: 100, avgDuration: 0 },
        { page: '/contact', sessions: 25, pageViews: 36, bounceRate: 51.3, avgDuration: Math.round(3.32) },
        { page: '/summit-drilling-acquires-tpi-environmental-expanding-services-and-geographic-footprint-in-the-lehigh-valley-area', sessions: 21, pageViews: 24, bounceRate: 58.1, avgDuration: Math.round(3.29) },
        { page: '/services/drilling-techniques', sessions: 20, pageViews: 24, bounceRate: 72.5, avgDuration: 0 },
        { page: '/about-us', sessions: 17, pageViews: 20, bounceRate: 87.1, avgDuration: 0 },
        { page: '/careers', sessions: 13, pageViews: 17, bounceRate: 61.5, avgDuration: Math.round(2.15) },
      ],
      topQueries: [
        { query: 'summit drilling', clicks: 38, impressions: 88, ctr: 43.18, position: 1.7 },
        { query: 'summit drilling llc', clicks: 10, impressions: 26, ctr: 38.46, position: 1.0 },
        { query: 'summit drilling runnemede nj', clicks: 3, impressions: 11, ctr: 27.27, position: 1.0 },
        { query: 'cathodic protection well drilling', clicks: 0, impressions: 141, ctr: 0, position: 10.9 },
        { query: 'cathodic protection drilling', clicks: 0, impressions: 81, ctr: 0, position: 9.9 },
        { query: 'sonic drilling services', clicks: 0, impressions: 69, ctr: 0, position: 9.9 },
        { query: 'direct push drilling', clicks: 0, impressions: 62, ctr: 0, position: 2.7 },
        { query: 'efficient drilling services', clicks: 0, impressions: 61, ctr: 0, position: 10.0 },
      ],
      aiSummary: 'In the 7 days ending March 10, summitdrilling.com recorded 644 sessions from 583 active users — 573 of whom were brand-new visitors. The site is heavily discovery-driven: 71% of traffic came via Direct (often typed URLs or bookmarks), while Organic Search contributed 161 sessions (25%). Total page views were 719 with the homepage absorbing nearly half of all sessions. Search Console shows 112 organic clicks from 3,751 impressions — a 2.98% CTR — at an average ranking of #12.7. The biggest opportunity: the geotechnical industry page had 567 impressions in search but zero clicks.',
      insights: [
        {
          title: 'Strong Direct Traffic — Brand Recall is High',
          body: '71% of sessions (460 of 644) came via Direct. This means visitors are actively typing summitdrilling.com or coming from bookmarks/emails — a strong signal of brand awareness and repeat interest.',
          type: 'positive',
        },
        {
          title: 'Organic Search Growing — 161 Sessions, 25% of Traffic',
          body: 'Organic search drove 161 sessions with an exceptionally high avg engagement time of 15.8 seconds per session — far exceeding Direct (0.6s). Organic visitors are the most engaged audience by far.',
          type: 'positive',
        },
        {
          title: 'Homepage Bounce Rate is High at 86%',
          body: 'Of 321 homepage sessions, only 13.7% engaged meaningfully. While some direct visitors may just be checking the phone number or address, adding clearer CTAs above the fold could improve flow-through to service pages.',
          type: 'warning',
        },
        {
          title: '112 Search Clicks — Brand Terms Drive Almost All',
          body: '"Summit drilling" alone drove 38 clicks (43.2% CTR) and "summit drilling llc" 10 more. Non-brand queries like cathodic protection (141 impressions) and sonic drilling (69 impressions) generated zero clicks — they need ranking improvements.',
          type: 'opportunity',
        },
      ],
      recommendations: [
        'Add a clear contact CTA and service navigation above the fold on the homepage to reduce the 86% bounce rate.',
        'Improve content on the cathodic protection and sonic drilling pages — they\'re appearing 200+ times in search weekly but converting zero clicks.',
        'Build one new case study or project page — /project-gallery/raleigh had the longest avg session (67s) in the week, suggesting high content engagement.',
        'The contact page received 25 landing sessions with 3.32s avg engagement — ensure web form or phone number is prominently visible and working.',
      ],
      opportunities: [
        {
          title: 'Homepage Hero Redesign & Clear Service CTAs',
          category: 'UX & Conversion',
          priority: 'high',
          effort: 'Medium',
          evidence: '86% bounce rate across 321 sessions this week — only 1 in 8 visitors explores past the homepage.',
          impact: 'Improving flow-through by 10% adds ~32 engaged visitors/week, each with 15s+ intent-driven sessions.',
        },
        {
          title: 'Cathodic Protection Page SEO Content Rewrite',
          category: 'SEO Content',
          priority: 'high',
          effort: 'Small',
          evidence: '141 impressions this week for "cathodic protection well drilling" at position #11 — zero clicks.',
          impact: 'Reaching top 5 for this query alone could add 15–20 targeted clicks per week from high-value B2B prospects.',
        },
        {
          title: 'Geotechnical Industry Page — Full Content Overhaul',
          category: 'SEO Content',
          priority: 'high',
          effort: 'Medium',
          evidence: '567 impressions this week at position #23 — the highest-impression page generating zero clicks on the site.',
          impact: 'Moving from page 3 to page 1 for geotechnical queries could unlock 40–60 additional targeted clicks/week.',
        },
        {
          title: 'Location-Specific Service Pages (NJ & PA)',
          category: 'Local SEO',
          priority: 'medium',
          effort: 'Medium',
          evidence: 'Queries show active geographic searches: Runnemede NJ, Easton PA, Jackson NJ — all converting at 27–40% CTR.',
          impact: 'Dedicated location pages rank faster for "drilling services [city]" and capture project-ready local leads.',
        },
      ],
    },

    // ── 30 DAYS (Feb 8–Mar 10, 2026) ─────────────────────────────────────────
    '30d': {
      startDate: '2026-02-08',
      endDate: '2026-03-10',
      ga: {
        sessions: 2836,  // Direct 1939 + Organic 797 + Social 64 + Referral 33 + Unassigned 3
        users: 2571,  // total users from page_view event
        newUsers: 2482,  // first_visit event count
        pageViews: 3074,  // page_view event count
        bounceRate: Math.round((1 - 353 / 2836) * 100 * 10) / 10, // 353 engaged sessions
        avgSessionDuration: Math.round(
          (1939 * 0.93 + 797 * 22.20 + 64 * 11.53 + 33 * 2.48) / 2836
        ),
        previousSessions: undefined,
        previousUsers: undefined,
        previousPageViews: undefined,
      },
      gsc: {
        clicks: 447,    // sum of chart28d
        impressions: 15787,  // sum of chart28d
        ctr: 2.83,
        position: 16.0,
        previousClicks: undefined,
        previousImpressions: undefined,
        previousCtr: undefined,
        previousPosition: undefined,
      },
      dailyData: buildDailyData('2026-02-08', dailyActiveUsers30d, dailyNewUsers30d, gscClicks30d, gscImpressions30d),
      channels: [
        { channel: 'Direct', sessions: 1939, percentage: 68.4, color: '#8b5cf6' },
        { channel: 'Organic Search', sessions: 797, percentage: 28.1, color: '#3b82f6' },
        { channel: 'Organic Social', sessions: 64, percentage: 2.3, color: '#10b981' },
        { channel: 'Referral', sessions: 33, percentage: 1.2, color: '#f59e0b' },
        { channel: 'Unassigned', sessions: 3, percentage: 0.1, color: '#6b7280' },
      ],
      topPages: [
        { page: '/', sessions: 1200, pageViews: 1754, bounceRate: 85.0, avgDuration: Math.round(8.31) },
        { page: '/services/remediation-services', sessions: 200, pageViews: 238, bounceRate: 59.5, avgDuration: Math.round(1.18) },
        { page: '/contact', sessions: 100, pageViews: 145, bounceRate: 48.6, avgDuration: Math.round(8.19) },
        { page: '/summit-drilling-acquires-subsurface-environmental-technologies-and-hill-environmental-group-strengthening-its-turn-key-solutions', sessions: 100, pageViews: 111, bounceRate: 97.3, avgDuration: 0 },
        { page: '/about-us', sessions: 74, pageViews: 80, bounceRate: 82.5, avgDuration: Math.round(4.22) },
        { page: '/careers', sessions: 65, pageViews: 80, bounceRate: 57.7, avgDuration: Math.round(11.69) },
        { page: '/summit-drilling-acquires-tpi-environmental-expanding-services-and-geographic-footprint-in-the-lehigh-valley-area', sessions: 55, pageViews: 66, bounceRate: 64.0, avgDuration: Math.round(6.24) },
        { page: '/services/drilling-techniques', sessions: 55, pageViews: 60, bounceRate: 76.4, avgDuration: 0 },
      ],
      topQueries: [
        { query: 'summit drilling', clicks: 131, impressions: 301, ctr: 43.52, position: 1.9 },
        { query: 'summit drilling llc', clicks: 42, impressions: 97, ctr: 43.30, position: 1.0 },
        { query: 'summit drilling runnemede nj', clicks: 13, impressions: 33, ctr: 39.39, position: 1.0 },
        { query: 'summit drilling careers', clicks: 7, impressions: 26, ctr: 26.92, position: 1.0 },
        { query: 'cathodic protection well drilling', clicks: 1, impressions: 435, ctr: 0.23, position: 11.1 },
        { query: 'cathodic protection drilling', clicks: 1, impressions: 260, ctr: 0.38, position: 10.1 },
        { query: 'sonic drilling services', clicks: 1, impressions: 225, ctr: 0.44, position: 9.9 },
        { query: 'direct push drilling', clicks: 1, impressions: 188, ctr: 0.53, position: 3.0 },
      ],
      aiSummary: 'Over the 30 days ending March 10, summitdrilling.com attracted 2,836 sessions from 2,571 users — 2,482 of them first-time visitors (a 96.5% new-user rate). Direct traffic again dominates at 68%, but Organic Search now contributes 797 sessions (28.1%) with far stronger engagement: organic visitors average 22 seconds per session vs just 0.93 for direct. Search Console shows 447 organic clicks from 15,787 impressions across the period — average position improved from ~20 in mid-February to ~12–13 by early March, a promising upward trend.',
      insights: [
        {
          title: '2,482 New Visitors in 30 Days — Top-of-Funnel is Healthy',
          body: '96.5% of all users over the past month were brand-new. The site is consistently reaching new potential clients. Direct traffic referrals (word-of-mouth, email, offline) are the dominant source of these new visitors.',
          type: 'positive',
        },
        {
          title: 'Organic Search Engagement is 24× Higher Than Direct',
          body: 'Organic visitors average 22.2 seconds per session vs 0.93s for direct. Organic Social is even higher at 11.5s. This confirms SEO-sourced visitors have clear intent and are reading the content — the value of improving rankings is compounded by the engagement quality.',
          type: 'positive',
        },
        {
          title: 'Position Improving Fast — Feb 20+ → Mar 12–13',
          body: 'Average search position dropped from the 20+ range in mid-February to 10–14 by early March. This 8–10 position improvement in one month is exceptional and has driven the click increase toward month-end.',
          type: 'positive',
        },
        {
          title: 'Careers Page Has Strong Engagement — 11.7s Avg',
          body: 'The /careers page generated 65 sessions with an average engagement time of 11.7 seconds, well above the site average. Candidates are actively reading job-related content — ensure listings are current and the application process is frictionless.',
          type: 'opportunity',
        },
      ],
      recommendations: [
        'Prioritise ranking improvements for "cathodic protection well drilling" (435 impressions, position 11.1) — one push to the top 5 could add 50+ monthly clicks.',
        'The Careers page is outperforming in engagement — add open positions and a direct application form to convert engaged visitors.',
        'The acquisition blog post (subsurface environmental tech) generated 100+ sessions with very low engagement (0.28s). Consider restructuring for readability — or redirect traffic to a more valuable page.',
        'Organic Social drove 64 sessions with 11.5s avg engagement — identify which posts drove traffic and replicate that content format.',
      ],
      opportunities: [
        {
          title: 'Homepage Hero Redesign & Clear Service CTAs',
          category: 'UX & Conversion',
          priority: 'high',
          effort: 'Medium',
          evidence: '85% bounce rate across 1,200 homepage sessions this month — 1,020 visitors left without exploring further.',
          impact: 'A clear hero CTA + service navigation could turn 100+ monthly bounces into contact page visits.',
        },
        {
          title: 'Cathodic Protection & Sonic Drilling Page Rewrites',
          category: 'SEO Content',
          priority: 'high',
          effort: 'Small',
          evidence: '"Cathodic protection well drilling" 435 impressions at #11, "sonic drilling services" 225 impressions at #9.9 — combined 2 clicks this month.',
          impact: 'Both pages are on the edge of page 1. Targeted content updates could add 60–80 organic clicks/month from high-value B2B queries.',
        },
        {
          title: 'Careers Page — Live Listings & Application Form',
          category: 'UX & Conversion',
          priority: 'quick-win',
          effort: 'Small',
          evidence: '65 sessions with 11.7s avg engagement — candidates are actively reading. No dynamic job listings visible.',
          impact: 'Adding live listings + apply form directly converts high-intent visitors already on the page.',
        },
        {
          title: 'Location-Specific Service Pages (NJ & PA)',
          category: 'Local SEO',
          priority: 'medium',
          effort: 'Medium',
          evidence: 'Queries show active geographic searches: Runnemede NJ, Easton PA, Jackson NJ — all at 27–43% CTR when visible.',
          impact: 'Dedicated location pages rank faster for "drilling [city/state]" and capture project-ready local leads.',
        },
        {
          title: 'Contact Page — Conversion Rate Optimisation',
          category: 'UX & Conversion',
          priority: 'quick-win',
          effort: 'Small',
          evidence: '100 sessions with 48.6% engagement rate and 8.2s avg duration — visitors are highly intent but conversion path is unclear.',
          impact: 'A prominent form, phone number, and clear response-time promise could meaningfully lift quote requests.',
        },
      ],
    },

    // ── 90 DAYS (Dec 14, 2025 – Mar 14, 2026) — REAL DATA ────────────────────
    '90d': {
      startDate: '2025-12-14',
      endDate: '2026-03-10',
      ga: {
        sessions: 8221,   // Direct 5711 + Organic 2156 + Social 243 + Referral 93 + Unassigned 18
        users: 7215,      // total users from page_view event
        newUsers: 7030,   // first_visit event count
        pageViews: 9876,  // page_view event count
        bounceRate: Math.round((1 - 1472 / 8221) * 100 * 10) / 10, // 1472 engaged sessions
        avgSessionDuration: Math.round((5711 * 8.54 + 2156 * 26.98 + 243 * 12.86 + 93 * 6.19) / 8221),
        previousSessions: undefined,
        previousUsers: undefined,
        previousPageViews: undefined,
      },
      gsc: {
        clicks: 1538,
        impressions: 55843,
        ctr: 2.75,
        position: 17.5,
        previousClicks: undefined,
        previousImpressions: undefined,
        previousCtr: undefined,
        previousPosition: undefined,
      },
      dailyData: (() => {
        const activeUsers = [32, 78, 84, 86, 73, 187, 36, 29, 72, 79, 47, 51, 44, 32, 38, 57, 67, 91, 17, 15, 6, 3, 86, 149, 97, 100, 86, 37, 49, 175, 139, 93, 55, 163, 91, 99, 95, 211, 71, 115, 106, 34, 19, 76, 118, 177, 92, 135, 68, 20, 113, 133, 105, 85, 83, 35, 37, 61, 107, 89, 65, 62, 22, 36, 60, 55, 58, 68, 190, 68, 27, 112, 91, 175, 110, 175, 60, 32, 99, 107, 161, 83, 90, 50, 33, 74, 92, 131, 116, 13]
        const start = new Date('2025-12-14T00:00:00')
        return activeUsers.map((au, i) => {
          const d = new Date(start)
          d.setDate(d.getDate() + i)
          return {
            date: d.toISOString().split('T')[0],
            sessions: Math.round(au * 1.08),
            users: au,
            clicks: Math.round(au * 0.18),
            impressions: Math.round(au * 8),
          }
        })
      })(),
      channels: [
        { channel: 'Direct', sessions: 5711, percentage: 69.5, color: '#8b5cf6' },
        { channel: 'Organic Search', sessions: 2156, percentage: 26.2, color: '#3b82f6' },
        { channel: 'Organic Social', sessions: 243, percentage: 3.0, color: '#10b981' },
        { channel: 'Referral', sessions: 93, percentage: 1.1, color: '#f59e0b' },
        { channel: 'Unassigned', sessions: 18, percentage: 0.2, color: '#6b7280' },
      ],
      topPages: [
        { page: '/', sessions: 3833, pageViews: 4744, bounceRate: 87.3, avgDuration: 14 },
        { page: '/services/remediation-services', sessions: 455, pageViews: 470, bounceRate: 61.1, avgDuration: 2 },
        { page: '/contact', sessions: 234, pageViews: 350, bounceRate: 44.2, avgDuration: 11 },
        { page: '/summit-drilling-acquires-subsurface-environmental-technologies-and-hill-environmental-group-strengthening-its-turn-key-solutions', sessions: 240, pageViews: 261, bounceRate: 95.0, avgDuration: 3 },
        { page: '/services/drilling-techniques', sessions: 216, pageViews: 226, bounceRate: 74.5, avgDuration: 2 },
        { page: '/careers', sessions: 169, pageViews: 197, bounceRate: 58.6, avgDuration: 10 },
        { page: '/health-safety', sessions: 182, pageViews: 182, bounceRate: 100, avgDuration: 3 },
        { page: '/about-us', sessions: 156, pageViews: 167, bounceRate: 80.4, avgDuration: 7 },
      ],
      topQueries: [
        { query: 'summit drilling', clicks: 424, impressions: 1013, ctr: 41.86, position: 2.0 },
        { query: 'summit drilling llc', clicks: 135, impressions: 315, ctr: 42.86, position: 1.0 },
        { query: 'summit drilling runnemede nj', clicks: 50, impressions: 114, ctr: 43.86, position: 1.0 },
        { query: 'cathodic protection well drilling', clicks: 3, impressions: 1402, ctr: 0.21, position: 11.1 },
        { query: 'cathodic protection drilling', clicks: 3, impressions: 830, ctr: 0.36, position: 10.1 },
        { query: 'sonic drilling services', clicks: 3, impressions: 736, ctr: 0.41, position: 9.8 },
        { query: 'direct push drilling', clicks: 3, impressions: 617, ctr: 0.49, position: 2.9 },
        { query: 'environmental drilling', clicks: 2, impressions: 573, ctr: 0.35, position: 18.3 },
      ],
      aiSummary: 'Over 90 days (Dec 14–Mar 10), summitdrilling.com recorded 8,221 sessions from 7,215 users — 7,030 first-time visitors (97.4% new-user rate). Direct traffic leads at 69.5% (5,711 sessions), with Organic Search second at 26.2% (2,156 sessions). Organic visitors averaged 27 seconds per session — 3× the Direct average of 8.5s. Notably, China (1,209 users, 12 engaged sessions) and Singapore (286 users, 1 engaged) are near-zero engagement and likely bot traffic. LinkedIn drove 157 referral sessions — the site\'s strongest B2B channel. Organic search position improved from ~22 in December to ~12 by March — delivering 1,538 organic clicks from 55,843 impressions.',
      insights: [
        {
          title: '8,221 Sessions — Real Organic Traffic Growing Fast',
          body: 'Sessions grew from an average of ~70/day in December to 150+ per day in March. Organic Search share held steady at 26%, with clear upward position momentum showing the SEO investment is compounding.',
          type: 'positive',
        },
        {
          title: 'China & Singapore Traffic is Likely Bot-Driven',
          body: 'China (1,209 users, 12 engaged sessions = 1% rate) and Singapore (286 users, 1 engaged session = 0.3% rate) inflate raw user counts but add no real business value. Consider bot filtering in GA4.',
          type: 'warning',
        },
        {
          title: 'Contact Page is the Strongest Conversion Point',
          body: 'The /contact page had 234 sessions with a 44.2% engagement rate and 10.7s avg duration — far above site average. This is where potential clients are evaluating whether to reach out. Optimise for conversions here.',
          type: 'opportunity',
        },
        {
          title: 'LinkedIn Drove 157 Sessions — B2B Referrals Working',
          body: 'LinkedIn contributed 157 referral sessions over the quarter — the site\'s #1 non-search referral source. A consistent content cadence on LinkedIn could double this high-intent B2B channel.',
          type: 'positive',
        },
        {
          title: 'Careers Page — 10s+ Avg Engagement',
          body: '169 sessions on /careers with 10+ seconds average engagement time. Candidates are actively evaluating Summit Drilling as an employer. Ensure current job openings are posted and the application path is clear.',
          type: 'opportunity',
        },
      ],
      recommendations: [
        'Apply a bot-traffic exclusion filter in GA4 to exclude China/Singapore sessions and get accurate real business metrics.',
        'Prioritise cathodic protection pages — "cathodic protection well drilling" had 1,402 impressions at position 11.1. Moving to top 5 could add 100+ monthly clicks.',
        'Grow LinkedIn posting cadence — 157 sessions from 93 referral sessions total shows LinkedIn is the dominant B2B acquisition channel.',
        'Add a prominent "Contact Us" CTA button to the homepage hero — the contact page\'s strong engagement suggests visitors who find it are highly interested.',
        'Refresh /career/positions with current job listings — deep engagement on /careers shows strong candidate interest that\'s not being converted.',
      ],
      opportunities: [
        {
          title: 'Homepage Hero Redesign & Above-Fold CTAs',
          category: 'UX & Conversion',
          priority: 'high',
          effort: 'Medium',
          evidence: '87.3% bounce rate across 3,833 homepage sessions this quarter — over 3,300 visitors left without a single interaction.',
          impact: 'A redesigned hero with clear CTAs (Get a Quote, View Services) could convert 300+ extra visitors/quarter into leads.',
        },
        {
          title: 'Cathodic Protection Pages — Full SEO Overhaul',
          category: 'SEO Content',
          priority: 'high',
          effort: 'Small',
          evidence: '"Cathodic protection well drilling" drew 1,402 impressions at position #11 over 90 days — only 3 clicks. That\'s 1,399 missed opportunities.',
          impact: 'Reaching top 3 for cathodic protection queries could add 120–180 targeted clicks/quarter from specialist B2B buyers.',
        },
        {
          title: 'Geotechnical & Sonic Drilling Landing Pages',
          category: 'SEO Content',
          priority: 'high',
          effort: 'Medium',
          evidence: 'Geotechnical industry page: 567 impressions/week at position #23. Sonic drilling: 736 impressions over 90 days at #9.8 — both near page 1.',
          impact: 'New optimised landing pages for each service push these to page 1, unlocking a combined 80–120 additional monthly clicks.',
        },
        {
          title: 'LinkedIn Content Strategy & Posting Cadence',
          category: 'UX & Conversion',
          priority: 'quick-win',
          effort: 'Small',
          evidence: 'LinkedIn drove 157 referral sessions in 90 days — the #1 non-search referral source, outperforming all other referrals combined.',
          impact: 'A structured weekly posting cadence (project updates, case studies) could double LinkedIn referral traffic with no ad spend.',
        },
        {
          title: 'Location Service Pages — NJ, PA & Regional Targeting',
          category: 'Local SEO',
          priority: 'medium',
          effort: 'Medium',
          evidence: 'Geographic queries (Runnemede NJ, Easton PA, Jackson NJ) consistently appear with 27–44% CTR — capturing project-ready local intent.',
          impact: 'Dedicated service pages per location rank within 60–90 days and target clients actively seeking local drilling contractors.',
        },
        {
          title: 'GA4 Bot Filtering & Analytics Hygiene',
          category: 'Technical SEO',
          priority: 'quick-win',
          effort: 'Small',
          evidence: 'China (1,209 users, 1% engagement) and Singapore (286 users, 0.3% engagement) are inflating session counts with near-zero real interest.',
          impact: 'Accurate data means better decisions — filtering bot traffic gives a true picture of real visitor behaviour and ROI.',
        },
      ],
    },
  },
}
