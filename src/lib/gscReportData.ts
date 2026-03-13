// Real Google Search Console data for summitdrilling.com
// Extracted from CSV exports on 2026-03-14
// Periods: Last 7 Days, Last 28 Days, Last 3 Months

export type GscPeriod = '7d' | '28d' | '3m'

export interface GscDailyPoint {
    date: string
    clicks: number
    impressions: number
    ctr: number   // as decimal e.g. 0.0254
    position: number
}

export interface GscQuery {
    query: string
    clicks: number
    impressions: number
    ctr: number   // as decimal
    position: number
}

export interface GscPage {
    page: string
    clicks: number
    impressions: number
    ctr: number   // as decimal
    position: number
}

export interface GscCountry {
    country: string
    clicks: number
    impressions: number
    ctr: number   // as decimal
    position: number
}

export interface GscDevice {
    device: string
    clicks: number
    impressions: number
    ctr: number   // as decimal
    position: number
    color: string
}

export interface GscPeriodData {
    label: string
    startDate: string
    endDate: string
    totalClicks: number
    totalImpressions: number
    avgCtr: number    // as decimal
    avgPosition: number
    chart: GscDailyPoint[]
    queries: GscQuery[]
    pages: GscPage[]
    countries: GscCountry[]
    devices: GscDevice[]
    insights: GscInsight[]
    recommendations: string[]
    summary: string
}

export interface GscInsight {
    title: string
    body: string
    type: 'positive' | 'warning' | 'opportunity' | 'info'
}

// ─── 7 DAYS ─────────────────────────────────────────────────────────────────

const chart7d: GscDailyPoint[] = [
    { date: '2026-03-05', clicks: 13, impressions: 511, ctr: 0.0254, position: 11.6 },
    { date: '2026-03-06', clicks: 23, impressions: 529, ctr: 0.0435, position: 10.7 },
    { date: '2026-03-07', clicks: 5, impressions: 355, ctr: 0.0141, position: 14.6 },
    { date: '2026-03-08', clicks: 6, impressions: 454, ctr: 0.0132, position: 12.8 },
    { date: '2026-03-09', clicks: 18, impressions: 571, ctr: 0.0315, position: 13.3 },
    { date: '2026-03-10', clicks: 18, impressions: 655, ctr: 0.0275, position: 12.8 },
    { date: '2026-03-11', clicks: 29, impressions: 676, ctr: 0.0429, position: 12.7 },
]

const devices7d: GscDevice[] = [
    { device: 'Desktop', clicks: 71, impressions: 2888, ctr: 0.0246, position: 12.99, color: '#3b82f6' },
    { device: 'Mobile', clicks: 39, impressions: 839, ctr: 0.0465, position: 11.36, color: '#8b5cf6' },
    { device: 'Tablet', clicks: 2, impressions: 24, ctr: 0.0833, position: 4.79, color: '#f59e0b' },
]

const countries7d: GscCountry[] = [
    { country: 'United States', clicks: 99, impressions: 3437, ctr: 0.0288, position: 11.8 },
    { country: 'India', clicks: 3, impressions: 24, ctr: 0.1250, position: 14.62 },
    { country: 'Nigeria', clicks: 3, impressions: 13, ctr: 0.2308, position: 17.38 },
    { country: 'Canada', clicks: 2, impressions: 50, ctr: 0.0400, position: 12.62 },
    { country: 'Philippines', clicks: 1, impressions: 18, ctr: 0.0556, position: 17.61 },
    { country: 'Pakistan', clicks: 1, impressions: 7, ctr: 0.1429, position: 5.43 },
    { country: 'China', clicks: 1, impressions: 3, ctr: 0.3333, position: 8.33 },
    { country: 'Bangladesh', clicks: 1, impressions: 3, ctr: 0.3333, position: 20.33 },
    { country: 'Egypt', clicks: 1, impressions: 1, ctr: 1.0000, position: 1 },
    { country: 'Australia', clicks: 0, impressions: 45, ctr: 0, position: 46.24 },
]

const queries7d: GscQuery[] = [
    { query: 'summit drilling', clicks: 38, impressions: 88, ctr: 0.4318, position: 1.73 },
    { query: 'summit drilling llc', clicks: 10, impressions: 26, ctr: 0.3846, position: 1 },
    { query: 'summit drilling runnemede nj', clicks: 3, impressions: 11, ctr: 0.2727, position: 1 },
    { query: 'summit drilling easton pa', clicks: 2, impressions: 7, ctr: 0.2857, position: 1 },
    { query: 'summit drilling jackson nj', clicks: 2, impressions: 5, ctr: 0.4000, position: 1.2 },
    { query: '"summit drilling, llc"', clicks: 1, impressions: 11, ctr: 0.0909, position: 1 },
    { query: 'summit drilling careers', clicks: 1, impressions: 8, ctr: 0.1250, position: 1 },
    { query: 'tpi environmental', clicks: 1, impressions: 5, ctr: 0.2000, position: 9 },
    { query: 'summit drilling services', clicks: 1, impressions: 4, ctr: 0.2500, position: 1.25 },
    { query: 'drill rigs near me', clicks: 1, impressions: 3, ctr: 0.3333, position: 4.67 },
    { query: 'drilling companies pennsylvania', clicks: 1, impressions: 2, ctr: 0.5000, position: 10 },
    { query: 'oil rigging companies', clicks: 1, impressions: 1, ctr: 1.0000, position: 2 },
    { query: 'cathodic protection well drilling', clicks: 0, impressions: 141, ctr: 0, position: 10.94 },
    { query: 'cathodic protection drilling', clicks: 0, impressions: 81, ctr: 0, position: 9.91 },
    { query: 'sonic drilling services', clicks: 0, impressions: 69, ctr: 0, position: 9.88 },
]

const pages7d: GscPage[] = [
    { page: 'https://summitdrilling.com/', clicks: 55, impressions: 1701, ctr: 0.0323, position: 12.41 },
    { page: 'http://www.summitdrilling.com/', clicks: 16, impressions: 359, ctr: 0.0446, position: 5.97 },
    { page: 'https://summitdrilling.com/contact', clicks: 9, impressions: 344, ctr: 0.0262, position: 4.48 },
    { page: 'http://summitdrilling.com/', clicks: 9, impressions: 145, ctr: 0.0621, position: 5.19 },
    { page: 'https://summitdrilling.com/careers', clicks: 6, impressions: 259, ctr: 0.0232, position: 3.86 },
    { page: 'https://summitdrilling.com/industries/environmental', clicks: 3, impressions: 565, ctr: 0.0053, position: 19.25 },
    { page: 'https://summitdrilling.com/services/geophysical-services', clicks: 3, impressions: 80, ctr: 0.0375, position: 13.7 },
    { page: 'https://summitdrilling.com/ron-bucca-promoted-to-chief-executive-officer-as-summit-drilling-fortifies-its-expansion-strategy', clicks: 3, impressions: 65, ctr: 0.0462, position: 5.8 },
    { page: 'https://summitdrilling.com/services/remediation-systems', clicks: 2, impressions: 59, ctr: 0.0339, position: 5.56 },
    { page: 'https://summitdrilling.com/services/seismic-refraction', clicks: 2, impressions: 35, ctr: 0.0571, position: 13.09 },
    { page: 'https://summitdrilling.com/about-us', clicks: 1, impressions: 343, ctr: 0.0029, position: 9.83 },
    { page: 'https://summitdrilling.com/industries/geotechnical', clicks: 0, impressions: 567, ctr: 0, position: 23.33 },
    { page: 'https://summitdrilling.com/industries/cathodic', clicks: 0, impressions: 277, ctr: 0, position: 10.93 },
    { page: 'https://summitdrilling.com/services/sonic-drilling', clicks: 0, impressions: 209, ctr: 0, position: 14.31 },
    { page: 'https://summitdrilling.com/services/direct-push', clicks: 0, impressions: 152, ctr: 0, position: 14.53 },
]

const insights7d: GscInsight[] = [
    {
        title: '112 Clicks from 3,751 Impressions — 2.98% CTR',
        body: 'Over the last 7 days the site received 112 organic clicks from 3,751 search impressions. An average position of 12.7 puts most pages just below page 1 — small ranking gains could significantly boost traffic.',
        type: 'info',
    },
    {
        title: 'Brand Queries Dominate Clicks',
        body: '"Summit drilling" alone drove 38 clicks (43.2% CTR) and "summit drilling llc" drove 10 more. Brand searches account for ~47% of all clicks this week, reflecting strong offline brand recognition.',
        type: 'positive',
    },
    {
        title: 'Desktop Drives Most Traffic but Mobile CTR is Higher',
        body: 'Desktop accounted for 71 clicks (63%) yet mobile achieved a 4.65% CTR vs desktop\'s 2.46%. Mobile searchers are more decisive — ensure mobile page speed and UX are optimised.',
        type: 'opportunity',
    },
    {
        title: '141 Impressions for "Cathodic Protection Well Drilling" — Zero Clicks',
        body: 'The query "cathodic protection well drilling" generated 141 impressions at position 10.9 with 0 clicks. It sits just off page 1; improving the page\'s title tag or earning one more backlink could push it to page 1 and drive significant clicks.',
        type: 'opportunity',
    },
    {
        title: 'Homepage CTR Low at 3.2%',
        body: 'The homepage received 55 clicks from 1,701 impressions (3.23% CTR at position 12.4). Refining the homepage meta title/description to be more compelling could meaningfully lift clicks.',
        type: 'warning',
    },
    {
        title: 'Geotechnical Industry Page Has 567 Impressions — 0 Clicks',
        body: 'The /industries/geotechnical page appears in search 567 times per week but converts none. At position 23.3 it needs content improvement and internal linking to break onto page 1.',
        type: 'warning',
    },
    {
        title: 'US Dominates — 99% of Clicks',
        body: 'United States accounts for 99 of the 112 clicks. The site\'s geographic targeting is well-aligned with the service area. However, Canada appears with 50 impressions and 2 clicks — worth monitoring for future geographic expansion.',
        type: 'info',
    },
]

const recommendations7d: string[] = [
    'Optimise the title tag and meta description for the /industries/geotechnical page — 567 weekly impressions at position 23 is a prime page-1 candidate.',
    'Add one targeted piece of content around "cathodic protection well drilling" to push from position 11 to the top 10.',
    'Run a mobile Core Web Vitals audit — mobile CTR (4.65%) outpaces desktop, signalling mobile intent is strong.',
    'Strengthen internal linking from the homepage to the Cathodic and Sonic Drilling pages to distribute page authority.',
    'Test a new homepage meta description that calls out specific industries or geographies to improve the 3.23% CTR.',
]

// ─── 28 DAYS ────────────────────────────────────────────────────────────────

const chart28d: GscDailyPoint[] = [
    { date: '2026-02-12', clicks: 18, impressions: 701, ctr: 0.0257, position: 18.5 },
    { date: '2026-02-13', clicks: 30, impressions: 617, ctr: 0.0486, position: 14.3 },
    { date: '2026-02-14', clicks: 4, impressions: 410, ctr: 0.0098, position: 20.8 },
    { date: '2026-02-15', clicks: 8, impressions: 467, ctr: 0.0171, position: 20.9 },
    { date: '2026-02-16', clicks: 22, impressions: 539, ctr: 0.0408, position: 17.5 },
    { date: '2026-02-17', clicks: 17, impressions: 711, ctr: 0.0239, position: 19.6 },
    { date: '2026-02-18', clicks: 28, impressions: 748, ctr: 0.0374, position: 18.5 },
    { date: '2026-02-19', clicks: 27, impressions: 553, ctr: 0.0488, position: 17.3 },
    { date: '2026-02-20', clicks: 19, impressions: 524, ctr: 0.0363, position: 18.2 },
    { date: '2026-02-21', clicks: 4, impressions: 438, ctr: 0.0091, position: 21.0 },
    { date: '2026-02-22', clicks: 6, impressions: 477, ctr: 0.0126, position: 22.7 },
    { date: '2026-02-23', clicks: 21, impressions: 591, ctr: 0.0355, position: 14.4 },
    { date: '2026-02-24', clicks: 28, impressions: 679, ctr: 0.0412, position: 17.5 },
    { date: '2026-02-25', clicks: 36, impressions: 635, ctr: 0.0567, position: 15.2 },
    { date: '2026-02-26', clicks: 36, impressions: 529, ctr: 0.0681, position: 13.1 },
    { date: '2026-02-27', clicks: 33, impressions: 620, ctr: 0.0532, position: 17.5 },
    { date: '2026-02-28', clicks: 4, impressions: 445, ctr: 0.0090, position: 20.1 },
    { date: '2026-03-01', clicks: 6, impressions: 572, ctr: 0.0105, position: 17.9 },
    { date: '2026-03-02', clicks: 36, impressions: 657, ctr: 0.0548, position: 13.9 },
    { date: '2026-03-03', clicks: 28, impressions: 672, ctr: 0.0417, position: 16.7 },
    { date: '2026-03-04', clicks: 28, impressions: 668, ctr: 0.0419, position: 14.8 },
    { date: '2026-03-05', clicks: 13, impressions: 511, ctr: 0.0254, position: 11.6 },
    { date: '2026-03-06', clicks: 23, impressions: 529, ctr: 0.0435, position: 10.7 },
    { date: '2026-03-07', clicks: 5, impressions: 355, ctr: 0.0141, position: 14.6 },
    { date: '2026-03-08', clicks: 6, impressions: 454, ctr: 0.0132, position: 12.8 },
    { date: '2026-03-09', clicks: 18, impressions: 571, ctr: 0.0315, position: 13.3 },
    { date: '2026-03-10', clicks: 18, impressions: 655, ctr: 0.0275, position: 12.8 },
    { date: '2026-03-11', clicks: 29, impressions: 676, ctr: 0.0429, position: 12.7 },
]

const devices28d: GscDevice[] = [
    { device: 'Desktop', clicks: 280, impressions: 12158, ctr: 0.0230, position: 16.61, color: '#3b82f6' },
    { device: 'Mobile', clicks: 161, impressions: 3556, ctr: 0.0453, position: 14.60, color: '#8b5cf6' },
    { device: 'Tablet', clicks: 6, impressions: 73, ctr: 0.0822, position: 4.51, color: '#f59e0b' },
]

const countries28d: GscCountry[] = [
    { country: 'United States', clicks: 417, impressions: 14185, ctr: 0.0294, position: 15.68 },
    { country: 'India', clicks: 9, impressions: 144, ctr: 0.0625, position: 15.87 },
    { country: 'Nigeria', clicks: 6, impressions: 54, ctr: 0.1111, position: 21.50 },
    { country: 'Canada', clicks: 5, impressions: 188, ctr: 0.0266, position: 16.97 },
    { country: 'Philippines', clicks: 4, impressions: 89, ctr: 0.0449, position: 20.97 },
    { country: 'Pakistan', clicks: 3, impressions: 35, ctr: 0.0857, position: 7.17 },
    { country: 'China', clicks: 2, impressions: 14, ctr: 0.1429, position: 9.50 },
    { country: 'Australia', clicks: 1, impressions: 168, ctr: 0.0060, position: 44.02 },
    { country: 'United Kingdom', clicks: 0, impressions: 95, ctr: 0, position: 30.76 },
    { country: 'New Zealand', clicks: 0, impressions: 52, ctr: 0, position: 31.38 },
]

const queries28d: GscQuery[] = [
    { query: 'summit drilling', clicks: 131, impressions: 301, ctr: 0.4352, position: 1.93 },
    { query: 'summit drilling llc', clicks: 42, impressions: 97, ctr: 0.4330, position: 1.01 },
    { query: 'summit drilling runnemede nj', clicks: 13, impressions: 33, ctr: 0.3939, position: 1.00 },
    { query: 'summit drilling careers', clicks: 7, impressions: 26, ctr: 0.2692, position: 1.00 },
    { query: 'summit drilling easton pa', clicks: 7, impressions: 21, ctr: 0.3333, position: 1.00 },
    { query: 'summit drilling jackson nj', clicks: 6, impressions: 18, ctr: 0.3333, position: 1.00 },
    { query: 'tpi environmental', clicks: 5, impressions: 21, ctr: 0.2381, position: 7.86 },
    { query: 'summit drilling services', clicks: 4, impressions: 16, ctr: 0.2500, position: 1.31 },
    { query: 'cathodic protection well drilling', clicks: 1, impressions: 435, ctr: 0.0023, position: 11.06 },
    { query: 'cathodic protection drilling', clicks: 1, impressions: 260, ctr: 0.0038, position: 10.08 },
    { query: 'sonic drilling services', clicks: 1, impressions: 225, ctr: 0.0044, position: 9.88 },
    { query: 'direct push drilling', clicks: 1, impressions: 188, ctr: 0.0053, position: 2.96 },
    { query: 'environmental drilling', clicks: 1, impressions: 176, ctr: 0.0057, position: 18.55 },
    { query: 'efficient drilling services', clicks: 0, impressions: 198, ctr: 0, position: 10.21 },
    { query: 'drilling services', clicks: 0, impressions: 112, ctr: 0, position: 16.04 },
]

const pages28d: GscPage[] = [
    { page: 'https://summitdrilling.com/', clicks: 221, impressions: 7003, ctr: 0.0316, position: 12.94 },
    { page: 'http://www.summitdrilling.com/', clicks: 67, impressions: 1468, ctr: 0.0456, position: 5.96 },
    { page: 'https://summitdrilling.com/contact', clicks: 35, impressions: 1258, ctr: 0.0278, position: 4.61 },
    { page: 'http://summitdrilling.com/', clicks: 32, impressions: 582, ctr: 0.0550, position: 5.30 },
    { page: 'https://summitdrilling.com/careers', clicks: 23, impressions: 957, ctr: 0.0240, position: 3.91 },
    { page: 'https://summitdrilling.com/industries/environmental', clicks: 16, impressions: 1910, ctr: 0.0084, position: 17.96 },
    { page: 'https://summitdrilling.com/about-us', clicks: 7, impressions: 1246, ctr: 0.0056, position: 9.38 },
    { page: 'https://summitdrilling.com/industries/geotechnical', clicks: 0, impressions: 2108, ctr: 0, position: 21.99 },
    { page: 'https://summitdrilling.com/industries/cathodic', clicks: 5, impressions: 1004, ctr: 0.0050, position: 10.68 },
    { page: 'https://summitdrilling.com/services/sonic-drilling', clicks: 2, impressions: 648, ctr: 0.0031, position: 13.84 },
    { page: 'https://summitdrilling.com/services/direct-push', clicks: 3, impressions: 534, ctr: 0.0056, position: 13.24 },
    { page: 'https://summitdrilling.com/services/geophysical-services', clicks: 10, impressions: 299, ctr: 0.0334, position: 13.04 },
    { page: 'https://summitdrilling.com/ron-bucca-promoted-to-chief-executive-officer-as-summit-drilling-fortifies-its-expansion-strategy', clicks: 8, impressions: 234, ctr: 0.0342, position: 6.03 },
    { page: 'https://summitdrilling.com/services/remediation-systems', clicks: 6, impressions: 218, ctr: 0.0275, position: 5.17 },
    { page: 'https://summitdrilling.com/services/seismic-refraction', clicks: 5, impressions: 135, ctr: 0.0370, position: 13.21 },
]

const insights28d: GscInsight[] = [
    {
        title: '447 Clicks from 15,787 Impressions This Month',
        body: 'Over 28 days the site earned 447 organic clicks from 15,787 search impressions (2.83% CTR). Average position improved to ~16.0, continuing a positive trend toward more page-1 real estate.',
        type: 'info',
    },
    {
        title: 'Brand Queries Still Lead — But Non-Brand Is Building',
        body: '"Summit drilling" drove 131 clicks (43.5% CTR). Non-brand queries like "cathodic protection well drilling" (435 impressions) and "sonic drilling services" (225 impressions) are gaining impressions — showing topical authority is growing.',
        type: 'positive',
    },
    {
        title: 'Weekend Click Drop is Consistent',
        body: 'Saturdays and Sundays consistently show 4–8 clicks vs 18–36 on weekdays. This confirms the audience is B2B — drilling contractors and environmental engineers searching during work hours.',
        type: 'info',
    },
    {
        title: 'Geotechnical Page: 2,108 Impressions, 0 Clicks',
        body: 'The /industries/geotechnical page appeared 2,108 times in the past 28 days but generated zero clicks — at an average position of 22. This is the single biggest missed-click opportunity on the site.',
        type: 'warning',
    },
    {
        title: 'Position Improving Toward Month End',
        body: 'Average daily position shifted from ~20 in mid-February to ~12–13 by early March. This rapid improvement over 28 days suggests recent on-page or authority changes are working.',
        type: 'positive',
    },
    {
        title: 'Environmental Industry Page Underperforming',
        body: 'The /industries/environmental page had 1,910 impressions and only 16 clicks (0.84% CTR) at position 18. A content refresh + heading-tag improvement could push this into the top 10.',
        type: 'opportunity',
    },
]

const recommendations28d: string[] = [
    'Prioritise a content refresh on /industries/geotechnical — 2,108 impressions at position 22 is the site\'s highest-value dormant page.',
    'Write a dedicated landing page for "cathodic protection well drilling" — 435 monthly impressions at position 11 is within striking distance of page 1.',
    'Investigate the position improvement trend (page 2 → top-of-page-2 between Feb and Mar) and replicate the approach on weaker pages.',
    'Create a structured FAQ section for the /industries/environmental page to target featured-snippet opportunities at position 18.',
    'Ensure all 4 homepage variants (http/https, www/non-www) use canonical tags pointing to https://summitdrilling.com/ to consolidate link equity.',
]

// ─── 3 MONTHS ───────────────────────────────────────────────────────────────

const chart3m: GscDailyPoint[] = [
    { date: '2025-12-12', clicks: 13, impressions: 573, ctr: 0.0227, position: 17.0 },
    { date: '2025-12-13', clicks: 4, impressions: 745, ctr: 0.0054, position: 16.4 },
    { date: '2025-12-14', clicks: 3, impressions: 408, ctr: 0.0074, position: 18.0 },
    { date: '2025-12-15', clicks: 18, impressions: 634, ctr: 0.0284, position: 16.0 },
    { date: '2025-12-16', clicks: 24, impressions: 709, ctr: 0.0339, position: 18.7 },
    { date: '2025-12-17', clicks: 20, impressions: 553, ctr: 0.0362, position: 16.0 },
    { date: '2025-12-18', clicks: 21, impressions: 584, ctr: 0.0360, position: 14.0 },
    { date: '2025-12-19', clicks: 16, impressions: 484, ctr: 0.0331, position: 17.0 },
    { date: '2025-12-20', clicks: 1, impressions: 447, ctr: 0.0022, position: 21.7 },
    { date: '2025-12-21', clicks: 4, impressions: 439, ctr: 0.0091, position: 24.7 },
    { date: '2025-12-22', clicks: 18, impressions: 678, ctr: 0.0265, position: 19.1 },
    { date: '2025-12-23', clicks: 15, impressions: 596, ctr: 0.0252, position: 20.8 },
    { date: '2025-12-24', clicks: 5, impressions: 551, ctr: 0.0091, position: 25.0 },
    { date: '2025-12-25', clicks: 3, impressions: 373, ctr: 0.0080, position: 20.3 },
    { date: '2025-12-26', clicks: 7, impressions: 398, ctr: 0.0176, position: 21.0 },
    { date: '2025-12-27', clicks: 1, impressions: 478, ctr: 0.0021, position: 22.5 },
    { date: '2025-12-28', clicks: 4, impressions: 476, ctr: 0.0084, position: 23.1 },
    { date: '2025-12-29', clicks: 15, impressions: 605, ctr: 0.0248, position: 20.8 },
    { date: '2025-12-30', clicks: 14, impressions: 644, ctr: 0.0217, position: 16.3 },
    { date: '2025-12-31', clicks: 9, impressions: 621, ctr: 0.0145, position: 23.6 },
    { date: '2026-01-01', clicks: 10, impressions: 409, ctr: 0.0244, position: 21.9 },
    { date: '2026-01-02', clicks: 10, impressions: 489, ctr: 0.0204, position: 20.4 },
    { date: '2026-01-03', clicks: 3, impressions: 556, ctr: 0.0054, position: 20.8 },
    { date: '2026-01-04', clicks: 9, impressions: 468, ctr: 0.0192, position: 19.6 },
    { date: '2026-01-05', clicks: 22, impressions: 806, ctr: 0.0273, position: 17.4 },
    { date: '2026-01-06', clicks: 33, impressions: 691, ctr: 0.0478, position: 18.4 },
    { date: '2026-01-07', clicks: 22, impressions: 780, ctr: 0.0282, position: 18.7 },
    { date: '2026-01-08', clicks: 20, impressions: 702, ctr: 0.0285, position: 16.5 },
    { date: '2026-01-09', clicks: 20, impressions: 603, ctr: 0.0332, position: 16.1 },
    { date: '2026-01-10', clicks: 3, impressions: 765, ctr: 0.0039, position: 17.8 },
    { date: '2026-01-11', clicks: 3, impressions: 478, ctr: 0.0063, position: 21.2 },
    { date: '2026-01-12', clicks: 27, impressions: 756, ctr: 0.0357, position: 19.1 },
    { date: '2026-01-13', clicks: 31, impressions: 725, ctr: 0.0428, position: 17.7 },
    { date: '2026-01-14', clicks: 18, impressions: 689, ctr: 0.0261, position: 18.4 },
    { date: '2026-01-15', clicks: 21, impressions: 566, ctr: 0.0371, position: 15.4 },
    { date: '2026-01-16', clicks: 20, impressions: 529, ctr: 0.0378, position: 17.5 },
    { date: '2026-01-17', clicks: 5, impressions: 441, ctr: 0.0113, position: 22.6 },
    { date: '2026-01-18', clicks: 9, impressions: 385, ctr: 0.0234, position: 21.6 },
    { date: '2026-01-19', clicks: 18, impressions: 668, ctr: 0.0269, position: 24.7 },
    { date: '2026-01-20', clicks: 30, impressions: 619, ctr: 0.0485, position: 17.4 },
    { date: '2026-01-21', clicks: 28, impressions: 658, ctr: 0.0426, position: 19.4 },
    { date: '2026-01-22', clicks: 25, impressions: 617, ctr: 0.0405, position: 19.8 },
    { date: '2026-01-23', clicks: 19, impressions: 461, ctr: 0.0412, position: 21.4 },
    { date: '2026-01-24', clicks: 2, impressions: 475, ctr: 0.0042, position: 26.2 },
    { date: '2026-01-25', clicks: 3, impressions: 395, ctr: 0.0076, position: 24.1 },
    { date: '2026-01-26', clicks: 18, impressions: 730, ctr: 0.0247, position: 24.2 },
    { date: '2026-01-27', clicks: 28, impressions: 713, ctr: 0.0393, position: 17.5 },
    { date: '2026-01-28', clicks: 25, impressions: 826, ctr: 0.0303, position: 22.9 },
    { date: '2026-01-29', clicks: 22, impressions: 561, ctr: 0.0392, position: 19.2 },
    { date: '2026-01-30', clicks: 27, impressions: 596, ctr: 0.0453, position: 17.6 },
    { date: '2026-01-31', clicks: 5, impressions: 554, ctr: 0.0090, position: 21.0 },
    { date: '2026-02-01', clicks: 3, impressions: 516, ctr: 0.0058, position: 17.8 },
    { date: '2026-02-02', clicks: 38, impressions: 740, ctr: 0.0514, position: 15.1 },
    { date: '2026-02-03', clicks: 37, impressions: 639, ctr: 0.0579, position: 15.2 },
    { date: '2026-02-04', clicks: 31, impressions: 692, ctr: 0.0448, position: 19.3 },
    { date: '2026-02-05', clicks: 29, impressions: 595, ctr: 0.0487, position: 14.8 },
    { date: '2026-02-06', clicks: 35, impressions: 516, ctr: 0.0678, position: 14.8 },
    { date: '2026-02-07', clicks: 9, impressions: 478, ctr: 0.0188, position: 19.3 },
    { date: '2026-02-08', clicks: 2, impressions: 410, ctr: 0.0049, position: 21.0 },
    { date: '2026-02-09', clicks: 26, impressions: 630, ctr: 0.0413, position: 19.3 },
    { date: '2026-02-10', clicks: 36, impressions: 814, ctr: 0.0442, position: 16.5 },
    { date: '2026-02-11', clicks: 25, impressions: 738, ctr: 0.0339, position: 18.6 },
    { date: '2026-02-12', clicks: 18, impressions: 701, ctr: 0.0257, position: 18.5 },
    { date: '2026-02-13', clicks: 30, impressions: 617, ctr: 0.0486, position: 14.3 },
    { date: '2026-02-14', clicks: 4, impressions: 410, ctr: 0.0098, position: 20.8 },
    { date: '2026-02-15', clicks: 8, impressions: 467, ctr: 0.0171, position: 20.9 },
    { date: '2026-02-16', clicks: 22, impressions: 539, ctr: 0.0408, position: 17.5 },
    { date: '2026-02-17', clicks: 17, impressions: 711, ctr: 0.0239, position: 19.6 },
    { date: '2026-02-18', clicks: 28, impressions: 748, ctr: 0.0374, position: 18.5 },
    { date: '2026-02-19', clicks: 27, impressions: 553, ctr: 0.0488, position: 17.3 },
    { date: '2026-02-20', clicks: 19, impressions: 524, ctr: 0.0363, position: 18.2 },
    { date: '2026-02-21', clicks: 4, impressions: 438, ctr: 0.0091, position: 21.0 },
    { date: '2026-02-22', clicks: 6, impressions: 477, ctr: 0.0126, position: 22.7 },
    { date: '2026-02-23', clicks: 21, impressions: 591, ctr: 0.0355, position: 14.4 },
    { date: '2026-02-24', clicks: 28, impressions: 679, ctr: 0.0412, position: 17.5 },
    { date: '2026-02-25', clicks: 36, impressions: 635, ctr: 0.0567, position: 15.2 },
    { date: '2026-02-26', clicks: 36, impressions: 529, ctr: 0.0681, position: 13.1 },
    { date: '2026-02-27', clicks: 33, impressions: 620, ctr: 0.0532, position: 17.5 },
    { date: '2026-02-28', clicks: 4, impressions: 445, ctr: 0.0090, position: 20.1 },
    { date: '2026-03-01', clicks: 6, impressions: 572, ctr: 0.0105, position: 17.9 },
    { date: '2026-03-02', clicks: 36, impressions: 657, ctr: 0.0548, position: 13.9 },
    { date: '2026-03-03', clicks: 28, impressions: 672, ctr: 0.0417, position: 16.7 },
    { date: '2026-03-04', clicks: 28, impressions: 668, ctr: 0.0419, position: 14.8 },
    { date: '2026-03-05', clicks: 13, impressions: 511, ctr: 0.0254, position: 11.6 },
    { date: '2026-03-06', clicks: 23, impressions: 529, ctr: 0.0435, position: 10.7 },
    { date: '2026-03-07', clicks: 5, impressions: 355, ctr: 0.0141, position: 14.6 },
    { date: '2026-03-08', clicks: 6, impressions: 454, ctr: 0.0132, position: 12.8 },
    { date: '2026-03-09', clicks: 18, impressions: 571, ctr: 0.0315, position: 13.3 },
    { date: '2026-03-10', clicks: 18, impressions: 655, ctr: 0.0275, position: 12.8 },
    { date: '2026-03-11', clicks: 29, impressions: 676, ctr: 0.0429, position: 12.7 },
]

const devices3m: GscDevice[] = [
    { device: 'Desktop', clicks: 968, impressions: 42988, ctr: 0.0225, position: 17.50, color: '#3b82f6' },
    { device: 'Mobile', clicks: 549, impressions: 12580, ctr: 0.0436, position: 15.67, color: '#8b5cf6' },
    { device: 'Tablet', clicks: 21, impressions: 275, ctr: 0.0764, position: 5.35, color: '#f59e0b' },
]

const countries3m: GscCountry[] = [
    { country: 'United States', clicks: 1456, impressions: 49762, ctr: 0.0293, position: 16.81 },
    { country: 'India', clicks: 29, impressions: 509, ctr: 0.0570, position: 15.62 },
    { country: 'Nigeria', clicks: 18, impressions: 183, ctr: 0.0984, position: 19.27 },
    { country: 'Canada', clicks: 17, impressions: 666, ctr: 0.0255, position: 17.04 },
    { country: 'Philippines', clicks: 12, impressions: 317, ctr: 0.0379, position: 20.22 },
    { country: 'Pakistan', clicks: 9, impressions: 121, ctr: 0.0744, position: 7.95 },
    { country: 'Australia', clicks: 3, impressions: 596, ctr: 0.0050, position: 44.18 },
    { country: 'United Kingdom', clicks: 2, impressions: 339, ctr: 0.0059, position: 30.28 },
    { country: 'New Zealand', clicks: 1, impressions: 183, ctr: 0.0055, position: 31.49 },
    { country: 'Brazil', clicks: 0, impressions: 77, ctr: 0, position: 18.24 },
]

const queries3m: GscQuery[] = [
    { query: 'summit drilling', clicks: 424, impressions: 1013, ctr: 0.4186, position: 1.97 },
    { query: 'summit drilling llc', clicks: 135, impressions: 315, ctr: 0.4286, position: 1.01 },
    { query: 'summit drilling runnemede nj', clicks: 50, impressions: 114, ctr: 0.4386, position: 1.00 },
    { query: 'summit drilling careers', clicks: 24, impressions: 88, ctr: 0.2727, position: 1.00 },
    { query: 'summit drilling easton pa', clicks: 20, impressions: 67, ctr: 0.2985, position: 1.00 },
    { query: 'tpi environmental', clicks: 19, impressions: 79, ctr: 0.2405, position: 7.46 },
    { query: 'cathodic protection well drilling', clicks: 3, impressions: 1402, ctr: 0.0021, position: 11.14 },
    { query: 'cathodic protection drilling', clicks: 3, impressions: 830, ctr: 0.0036, position: 10.09 },
    { query: 'sonic drilling services', clicks: 3, impressions: 736, ctr: 0.0041, position: 9.84 },
    { query: 'direct push drilling', clicks: 3, impressions: 617, ctr: 0.0049, position: 2.85 },
    { query: 'environmental drilling', clicks: 2, impressions: 573, ctr: 0.0035, position: 18.26 },
    { query: 'efficient drilling services', clicks: 1, impressions: 612, ctr: 0.0016, position: 10.10 },
    { query: 'msha certified drilling company', clicks: 0, impressions: 420, ctr: 0, position: 34.00 },
    { query: 'downhole geophysics', clicks: 0, impressions: 318, ctr: 0, position: 36.04 },
    { query: 'sonic drilling companies', clicks: 0, impressions: 285, ctr: 0, position: 16.72 },
]

const pages3m: GscPage[] = [
    { page: 'https://summitdrilling.com/', clicks: 755, impressions: 24082, ctr: 0.0313, position: 13.34 },
    { page: 'http://www.summitdrilling.com/', clicks: 228, impressions: 5054, ctr: 0.0451, position: 5.99 },
    { page: 'https://summitdrilling.com/contact', clicks: 118, impressions: 4343, ctr: 0.0272, position: 4.64 },
    { page: 'http://summitdrilling.com/', clicks: 105, impressions: 2001, ctr: 0.0525, position: 5.28 },
    { page: 'https://summitdrilling.com/careers', clicks: 78, impressions: 3305, ctr: 0.0236, position: 3.92 },
    { page: 'https://summitdrilling.com/industries/environmental', clicks: 53, impressions: 6577, ctr: 0.0081, position: 17.46 },
    { page: 'https://summitdrilling.com/about-us', clicks: 22, impressions: 4295, ctr: 0.0051, position: 9.38 },
    { page: 'https://summitdrilling.com/industries/geotechnical', clicks: 0, impressions: 7233, ctr: 0, position: 22.36 },
    { page: 'https://summitdrilling.com/industries/cathodic', clicks: 17, impressions: 3457, ctr: 0.0049, position: 10.72 },
    { page: 'https://summitdrilling.com/services/sonic-drilling', clicks: 6, impressions: 2213, ctr: 0.0027, position: 13.68 },
    { page: 'https://summitdrilling.com/services/direct-push', clicks: 11, impressions: 1827, ctr: 0.0060, position: 13.05 },
    { page: 'https://summitdrilling.com/services/geophysical-services', clicks: 32, impressions: 1028, ctr: 0.0311, position: 12.79 },
    { page: 'https://summitdrilling.com/ron-bucca-promoted-to-chief-executive-officer-as-summit-drilling-fortifies-its-expansion-strategy', clicks: 27, impressions: 810, ctr: 0.0333, position: 6.04 },
    { page: 'https://summitdrilling.com/services/remediation-systems', clicks: 21, impressions: 754, ctr: 0.0278, position: 5.27 },
    { page: 'https://summitdrilling.com/services/seismic-refraction', clicks: 18, impressions: 466, ctr: 0.0386, position: 13.14 },
]

const insights3m: GscInsight[] = [
    {
        title: '1,538 Clicks & 55,843 Impressions Over 3 Months',
        body: 'The site generated 1,538 organic clicks from 55,843 search impressions (2.75% CTR) over 3 months. Average position improved from ~22 in December to ~12 in March — a dramatic upward trajectory.',
        type: 'positive',
    },
    {
        title: 'Ranking Improvement: Position 22 → 12 in One Quarter',
        body: 'In December, average daily position hovered around 20–25. By early March it consistently sits at 11–14. This 10-position improvement is significant and compounds as more keywords approach page 1.',
        type: 'positive',
    },
    {
        title: '7,233 Impressions on Geotechnical Page — Still Zero Clicks',
        body: 'The /industries/geotechnical page is the site\'s most-seen page in search (7,233 impressions over 3 months) but has earned not a single click. At position 22.4 it needs a targeted content push to crack the top 10.',
        type: 'warning',
    },
    {
        title: '1,402 Impressions for Cathodic Protection — Position 11',
        body: '"Cathodic protection well drilling" appears 1,402 times quarterly at position 11.1 with only 3 clicks. This query is right on the cusp of page 1 — one authoritative page or a few quality links could unlock hundreds of clicks.',
        type: 'opportunity',
    },
    {
        title: 'Brand Dominates Clicks — Non-Brand Opportunity is Vast',
        body: 'Brand queries ("summit drilling" family) drove ~660 of 1,538 clicks (43%). Non-brand organic — with 55,000+ impressions — is largely unconverted. Closing the non-brand CTR gap is the primary growth lever.',
        type: 'opportunity',
    },
    {
        title: 'Holiday Dip in December Was Temporary',
        body: 'Clicks dropped sharply Dec 20–28 (1–7 clicks/day). Traffic fully recovered by January and has been consistently growing since. The underlying trend is strongly positive.',
        type: 'info',
    },
]

const recommendations3m: string[] = [
    'Target /industries/geotechnical with a comprehensive content refresh — 7,233 quarterly impressions is the largest untapped click opportunity on the site.',
    'Commission 2–3 high-quality external links to the cathodic protection pages — position 11 to top-5 on "cathodic protection well drilling" could deliver 100+ monthly clicks.',
    'Build a content calendar around non-brand drilling queries ("sonic drilling services", "environmental drilling", "direct push drilling") to capture the 50,000+ non-brand impressions.',
    'Consolidate all 4 homepage URL variants to a single canonical URL (https://summitdrilling.com/) — split impressions/links reduce ranking potential.',
    'Implement schema markup (LocalBusiness, Service) across all industry and service pages to improve CTR via rich snippets.',
]

// ─── AGGREGATE TOTALS ────────────────────────────────────────────────────────

function sum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0)
}

function avg(arr: number[]): number {
    return arr.length ? sum(arr) / arr.length : 0
}

export const gscData: Record<GscPeriod, GscPeriodData> = {
    '7d': {
        label: 'Last 7 Days',
        startDate: '2026-03-05',
        endDate: '2026-03-11',
        totalClicks: sum(chart7d.map(d => d.clicks)),
        totalImpressions: sum(chart7d.map(d => d.impressions)),
        avgCtr: avg(chart7d.map(d => d.ctr)),
        avgPosition: avg(chart7d.map(d => d.position)),
        chart: chart7d,
        queries: queries7d,
        pages: pages7d,
        countries: countries7d,
        devices: devices7d,
        insights: insights7d,
        recommendations: recommendations7d,
        summary: 'In the last 7 days, summitdrilling.com earned 112 organic clicks from 3,751 search impressions — a healthy 2.98% click-through rate. Average ranking sits at position 12.7, putting the site close to the top of page 2 on most queries. Brand searches continue to dominate clicks. The week shows strong momentum: mid-week peaks (March 6 and 11) each exceeded 23 clicks, while weekends dropped as expected for a B2B audience. The single biggest opportunity this week is the geotechnical industry page, which appeared in search 567 times without drawing a single visitor.',
    },
    '28d': {
        label: 'Last 28 Days',
        startDate: '2026-02-12',
        endDate: '2026-03-11',
        totalClicks: sum(chart28d.map(d => d.clicks)),
        totalImpressions: sum(chart28d.map(d => d.impressions)),
        avgCtr: avg(chart28d.map(d => d.ctr)),
        avgPosition: avg(chart28d.map(d => d.position)),
        chart: chart28d,
        queries: queries28d,
        pages: pages28d,
        countries: countries28d,
        devices: devices28d,
        insights: insights28d,
        recommendations: recommendations28d,
        summary: 'Over the past 28 days, summitdrilling.com generated 447 organic clicks from 15,787 impressions (2.83% CTR). The trend tells an encouraging story: average daily position improved meaningfully from ~20 in mid-February to ~12–13 in early March. Brand queries (summit drilling, summit drilling llc) are very strong performers with 40%+ click-through rates. The month also revealed the site\'s biggest missed opportunity — the /industries/geotechnical page, which accumulated 2,108 impressions without a single click. Desktop drives most volume, but mobile achieves nearly double the CTR, confirming that mobile experience deserves investment.',
    },
    '3m': {
        label: 'Last 3 Months',
        startDate: '2025-12-12',
        endDate: '2026-03-11',
        totalClicks: sum(chart3m.map(d => d.clicks)),
        totalImpressions: sum(chart3m.map(d => d.impressions)),
        avgCtr: avg(chart3m.map(d => d.ctr)),
        avgPosition: avg(chart3m.map(d => d.position)),
        chart: chart3m,
        queries: queries3m,
        pages: pages3m,
        countries: countries3m,
        devices: devices3m,
        insights: insights3m,
        recommendations: recommendations3m,
        summary: 'The 3-month view reveals a compelling growth story for summitdrilling.com. From 1,538 clicks across 55,843 search impressions, average position has improved dramatically from ~22 in December to ~12 in March — a 10-position gain in a single quarter. The holiday dip in late December was temporary; January surged back and February/March have seen the strongest numbers in the period. Brand visibility is exceptional. Non-brand organic — where 50,000+ impressions are still largely untapped — represents the primary growth frontier. Addressing the geotechnical and cathodic protection page gaps alone could double organic click volume within a quarter.',
    },
}
