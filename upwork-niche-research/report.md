# Upwork: rising niches with low competition — research snapshot

**Snapshot date:** 2026-10-07. Live marketplace numbers were pulled through the Upwork connector (read-only searches and public profile reads; nothing on the account was changed). Web sources are listed at the bottom.

---

## 1. Bottom line

1. **The metric "70–80% of freelancers in the niche have an active contract" is not published** by Upwork or by any dataset I could find. I tested it directly on 22 public freelancer profiles (section 4). 32% had *started* a new contract in the last 90 days, 45% had started *or ended* one, and about 64% showed signs of ongoing work under the most generous reading. No niche cluster clearly reached 70–80% under any definition. The sample is small (±20 points), so treat it as indicative.
2. **That metric also measures the wrong thing.** It measures how booked the *incumbents* are, not how easy it is for a *new* freelancer to win work. On the strictest definition the AI skills had the most recently booked incumbents in my sample (50% vs 17%), yet they also have the most proposals per job (median 25–41) and at least 10,000 freelancers listing each skill.
3. **"Rising" and "low competition" mostly pull in opposite directions right now.** The only documented growth is AI-related work, AI strategy & consulting, and the enterprise tier (Business Plus) — and the AI tags are the most crowded places on the platform. Meanwhile the whole marketplace is shrinking: GigRadar's Q2 2026 report says "not one of the twelve categories grew."
4. **Closest matches to what you asked for** (details in section 5):
   1. Language-specific and domain-expert AI data work (transcription/annotation/evaluation) — rising and low competition, but low pay.
   2. Credential-gated professional services (legal, regulatory/compliance) — lowest competition, stable, not rising.
   3. Location-bound / hybrid video production — low competition, no documented growth.
   4. Outbound sales / appointment setting — low competition, no documented growth, low pay.
   5. AI consulting inside a profession — rising, moderate competition.

---

## 2. What is actually rising

| Signal | Figure | Basis | Source |
|---|---|---|---|
| AI-related skills (freelancer earnings) | +109% YoY | 2025 vs 2024, US demand, six work categories; published Feb 2026 | Upwork In-Demand Skills 2026 |
| AI video generation & editing | +329% | same | same |
| AI integration | +178% | same | same |
| AI data annotation & labeling | +154% | same | same |
| AI chatbot development | +71% | same | same |
| AI-related GSV | ≈ $330M annualised run-rate, +22% YoY | Q2 2026 (Aug 2026) | Upwork Q2 2026 call / SIA |
| AI strategy & consulting GSV | +51% YoY | Q2 2026 | Upwork Q2 2026 call |
| Business Plus (larger-client tier) GSV | +174% YoY; active clients +219%; 38% new to Upwork | Q2 2026 | Upwork Q2 2026 call |
| Employer of Record | +29% | Q2 2026 | Upwork Q2 2026 call |
| Total GSV | ≈ −4% YoY to $966.4M; active clients 763K | Q2 2026 | Upwork Q2 2026 call |
| Job postings, all categories | −14.2% QoQ to 448,118; −27% since Q3 2025; no category grew | Q2 2026, public crawl | GigRadar |
| AI-related skills cluster postings | −15.1% QoQ | Q2 2026 | GigRadar |

How to read this: Upwork's growth figures are **dollars** (and the skill-growth list is 2025 vs 2024, so it is 8+ months old). GigRadar's figures are **posting counts**. Both can be true — fewer, bigger, longer contracts — but it means "rising" is relative in a shrinking marketplace. AI GSV growth has also slowed (≈ +50% YoY in Q4 2025 → +22% in Q2 2026).

Upwork's own commentary: nearly half of surveyed talent say their latest job was AI-related, yet only 16% of those postings mention AI explicitly.

---

## 3. Where competition is lowest

### 3a. Category-level (third-party)

**UpHunt** (3.6M jobs, Jan 2021–Jun 2026; random census of 44,863 postings re-read after closing). Average proposals per job: Legal 3.3, Sales & Marketing 4.7, Design & Creative 5.5, Engineering & Architecture 5.7, Web/Mobile/Software 8.0, Admin Support 9.6 (all jobs 6.5). Proposals per hire: Legal 8, Sales & Marketing 14, Design 13, Engineering 13, Web 20, Admin 22.

**GigRadar reply rates** ("reply" = a chat thread opened; outbound proposals from GigRadar's agency customers only, so it describes automated agency bidding, not all freelancers):
- Dec 2025–Feb 2026 (133,872 proposals): Game design 14.58%, Lead gen & telemarketing 14.38%, Sales copywriting 14.24%, Marketing/PR 13.64%, Info security & compliance 11.21% — vs AI & ML 7.21%, Web dev 5.80%, Mobile 5.60%, platform mean 7.45%.
- Q2 2026: platform average 5.1%; Engineering 10.3%; Customer service 9.6%; Writing 5.2%; Web dev 3.7%. Videography ≈ 16% reply at $8.95 per conversation with the widest spread of bidding accounts; Lead gen & telemarketing 11.3% at $14.85 per conversation across 236 agencies. Work that ships as a file fell 19.9% in volume; work needing a voice or physical presence was roughly flat (−1.6%).

### 3b. Live snapshot of Upwork (my measurements)

Method: for each Upwork skill tag, the newest-first job list; "jobs/day" is estimated from the age of the 26th-newest open job (rough, ±40%, time-of-day sensitive); proposal counts are from 10 jobs per skill, sampled where jobs were roughly 1–2.5 days old so counts are mostly settled. Freelancer counts are the number of profiles listing the skill (the search API caps at 10,000).

| Skill tag | Jobs/day (est.) | Median proposals | Jobs with ≤10 proposals | Freelancers listing it | Pay seen in sample |
|---|---|---|---|---|---|
| AI Chatbot | ~7 | **41** | 0% | ≥10,000 | $500 fixed; $25–65/hr |
| AI Agent Development | ~36 | **25** | 30% | ≥10,000 | $20–5,000 fixed; $25–90/hr |
| AI Video Generator | ~10 | **29.5** | 40% | 3,000–10,000 | $5–10 gigs up to $1,500/mo; $15–60/hr |
| AI Consulting | ~2.5 | **20** | 30% | 3,000–10,000 | $10–60/hr; range 2–197 proposals |
| Data Annotation (all, n=10) | ~5 | **13.5** | 40% | ≥10,000 | $5 fixed listings; $5–15/hr |
| – language-specific (n=9) | | **12** | 33% | | $5 fixed listings (check real pay) |
| – other annotation (n=6) | | **~38** | 17% | | $5–15/hr; $40–120 fixed trials; one job drew 147 |
| Information Security | ~5 | **26** | 40% | ≥10,000 | $30–70/hr; $120–2,000 fixed |
| Regulatory Compliance | ~4 | **11.5** | 50% | <10,000 | $8–50/hr; $40–250 fixed |
| Legal Research | ~21 | **4** | 56% | 3,000–10,000 | attorneys $120–200/hr; small fixed $15–1,500 |
| Videography | ~65 | **7.5** | 60% | 3,000–10,000 | $250–800 per on-site shoot; editors $5–50/hr |
| Appointment Setting | ~55 | **7.5** | 70% | ≥10,000 | $3–8/hr or commission |
| Lead Generation | ~90 | **10** (re-sampled at ~28h) | 50% | ≥10,000 | $3–20/hr; $8–200 fixed |
| Product Design | ~40 | **11** | 40% | ≥10,000 | $750–4,000 fixed; $5–45/hr |
| Game Development | ~14 | **18** | 30% | 3,000–10,000 | $5–30/hr; $8,000 fixed prototype |
| HighLevel | ~20 | **14** | 30% | ≥10,000 | $4–15/hr; $60–1,000 fixed |
| Microsoft Dynamics 365 | ~1.7 | **25.5** | 10% | 3,000–10,000 | $12–80/hr; $100–30,000 fixed |
| NetSuite Development | ~0.9 | **26** | 0% | n/a | $12–100/hr |
| Customer Service | ~100 | **27** | 20% | ≥10,000 | $4–7/hr; generic roles drew 54–191 |

Annotation rows exclude postings that carry the annotation tag but are clearly unrelated (e.g., cold-email or sales roles).

Observations:
- **Low competition sits in gated work**: licensed attorneys (1–4 proposals), on-site shoots (2–13), compliance roles requiring credentials (0–9), and non-English audio/annotation (5–20).
- **Generic AI tags are crowded**: 25–41 median proposals, single postings with 110–197 proposals, and ≥10,000 freelancers listing each tag.
- **Low-volume enterprise tags are not low-competition**: NetSuite has under 1 new job/day yet a median of 26 proposals per job.
- **Skill tags are noisy**: Upwork tags are free-form, so "AI Chatbot" appears on VA roles and WordPress jobs, and many unrelated freelancers list AI tags. Treat tag counts as a rough guide.

---

## 4. Testing the "70–80% have an active contract" idea

**Sample.** 24 freelancer profiles returned by Upwork's skill search at positions ~1,200–1,203 (mid-ranked results, 4 per skill) for six skills: AI Chatbot, AI Agent Development, AI Video Generator (the "AI" cluster) and Videography, Legal Research, Appointment Setting (the "gated/other" cluster). 22 were opened; 2 with no earnings at all were not.

**Window.** 90 days ending 2026-10-07 (cutoff 2026-07-09).

**Definitions.**
- **A** — started a new contract in the window ("secured recently").
- **C** — started *or ended* a contract in the window.
- **E** — C, or a long-running hourly contract (≥100 logged hours) flagged active (generous reading).

| Group | n | A | C | E |
|---|---|---|---|---|
| AI cluster | 10 | 50% | 50% | 60% |
| Gated / other cluster | 12 | 17% | 42% | 67% |
| **All opened** | **22** | **32%** | **45%** | **64%** |

If the 2 unopened zero-earnings profiles are counted as "no": 29% / 42% / 58%.

**Data-quality warnings**
- Upwork's "Active" flag is unreliable: at least 8 of 22 profiles had a contract marked *Active* that started more than a year earlier (some from 2020–2024 with only $20–$200 earned). Counting "Active" flags would have produced a misleadingly high booked rate.
- Only the 10 most recent contracts are visible, active ones first; a profile with 10 stale "Active" contracts hides any recently closed work.
- Search results are not a random sample of freelancers; 22 of 24 had completed paid work, so the search already filters out many dormant profiles. Results are rank- and visibility-biased, and n is tiny.

**What it shows.**
- No cluster clearly reached 70–80%; the strict and generous readings bracket it from 32% to 64%.
- The AI cluster had the highest *strict* booked share, but a few individuals held several fresh contracts at once (e.g. three started within three weeks) while the niche has the highest proposals per job. High incumbent utilisation can coexist with a hard market for newcomers.
- One appointment-setting profile showed very sticky work (hourly contracts of 690 and 2,446 hours), which fits GigRadar's finding that voice-based work held up better than file-based work. One profile is an anecdote, not a trend.

**Better indicators of entry difficulty:** proposals per job (section 3b), proposals per hire (UpHunt), reply rate (GigRadar), and the share of postings you are eligible for (location/licence/language).

---

## 5. Shortlist (ranked by combined evidence)

Confidence labels reflect the quality of the evidence, not a prediction of income.

1. **Language-specific and domain-expert AI data work** — *rising + low competition; confidence: medium.*
   Upwork reports AI data annotation & labeling +154%. In my sample, language-specific transcription/annotation postings drew a median of ~12 proposals (Belarusian 5, Hebrew 9, German 8, Mongolian 11, Slovenian 12, Thai 15) versus ~38 for generic annotation (one entry-level video-rating job drew 147). Domain-expert review postings also had few bidders (a veterinary safety review 10, a trade-compliance tester 0). The biggest repeat buyer in the sample (a speech-AI company with >$3M lifetime Upwork spend) posts many such roles. *Weaknesses:* many listings show $5 fixed or $5–15/hr (verify real pay before applying), requires native-level language or credentials, and AI-training demand can be cyclical.
2. **Credential-gated professional services (legal, regulatory/compliance, infosec compliance)** — *lowest competition, stable, not rising; confidence: medium-high.*
   Legal: 3.3 average proposals per job (UpHunt), sample median 4, highest median fixed budget of GigRadar's categories ($188), and Legal posting volume fell only 3.8% in Q2 vs −14.2% overall. Info security & compliance replied at 11.2% vs a 7.45% mean. *Weaknesses:* needs licences or recognised credentials and often jurisdiction-specific; no documented growth.
3. **Location-bound and hybrid video production** — *low competition, no documented growth; confidence: medium.*
   Videography ≈ 16% reply rate at $8.95 per conversation; sample median 7.5 proposals, on-site shoots 2–13. The rising part is AI video (+329%), but pure AI-video postings are crowded (median ~30, many $5–10 gigs), so the better position is on-site/hybrid work. *Weakness:* you must be where the shoot is.
4. **Outbound sales / appointment setting / cold calling** — *low competition, no documented growth, low pay; confidence: medium.*
   Lead gen & telemarketing replies at 11–14%; sample median 7.5–10 proposals; GigRadar reports voice/physical-presence work held up far better than file-based work (−1.6% vs −19.9% in Q2 volume). *Weakness:* much of the work pays $3–8/hr or commission only.
5. **AI consulting inside a profession** — *rising, moderate competition; confidence: medium-low.*
   AI strategy & consulting GSV +51%, but median ~20 proposals with a wide spread (2–197). Domain credentials plus workflow design is the differentiator, which is my inference rather than something the data proves.

**Rising but crowded — not "low competition":** AI chatbot development, AI agents/automation (n8n/Make/GoHighLevel), generic AI video generation. GigRadar calls AI & ML "over-fished."

**Longer-term lane:** Upwork's Expert-Vetted status (top ~1%, mostly invitation-only, certain categories) gives priority access to Business Plus and Enterprise clients — the segment growing fastest (+174%) — but it needs an established track record first.

---

## 6. Methods and limitations

- Live numbers are one-day snapshots from a read-only connector: jobs/day is a rough estimate; proposal medians use only 10 jobs per skill; supply is capped at 10,000.
- Upwork's In-Demand Skills press release could not be fetched directly (access errors); its figures are taken from consistent coverage in multiple outlets and Upwork's investor-site excerpt. Q2 2026 figures come from the earnings-call transcript and a trade-press report.
- GigRadar and UpHunt are third-party vendors with their own sampling; GigRadar's reply rates reflect its agency customers. Figures were extracted from the web pages by an automated summariser; I re-checked the key quotes verbatim (AI cluster −15.1%, "not one of the twelve categories grew", videography, lead gen, Legal/Engineering −3.8%, reply-rate definition) but not every number (e.g. −1.6% vs −19.9%, the 5.1% average reply rate, Engineering 10.3%).
- One search summary claimed specific percentages of location-locked videography/legal postings; a direct check of that GigRadar page did not confirm them, so they are **not** used here. Several aggregator pages showed implausibly large growth percentages (e.g. "+934% no-code") with no primary source; those are excluded.
- Anything labelled "inference" is my interpretation, not a measured result.

---

## 7. Sources

- Upwork In-Demand Skills 2026 (investor-site press release): https://investors.upwork.com/news-releases/news-release-details/upworks-demand-skills-2026-demand-top-ai-skills-more-doubles-ai
- Quartz: https://qz.com/demand-is-rising-for-these-ai-skills-in-2026
- CNBC (Feb 9, 2026): https://www.cnbc.com/2026/02/09/upwork-fastest-growing-in-demand-skills-companies-are-hiring-for.html
- SelfEmployed summary: https://www.selfemployed.com/news/upwork-ai-freelance-skills-demand-2026/
- Upwork Q2 2026 earnings call transcript: https://www.fool.com/earnings/call-transcripts/2026/08/17/upwork-upwk-q2-2026-earnings-call-transcript/
- Staffing Industry Analysts on Upwork Q2: https://www.staffingindustry.com/news/global-daily-news/upwork-q2-revenue-falls-17-though-ai-related-work-provides-bright-spot
- GigRadar Q2 2026 report: https://gigradar.io/upwork/reports/2026/q2/all-industries
- GigRadar market report (Dec 2025–Feb 2026): https://gigradar.io/blog/upwork-market-report-2026
- UpHunt proposals analysis: https://uphunt.io/blog/how-many-proposals-upwork-jobs-get-2026
- Upwork Business Plus / Expert-Vetted help pages: https://support.upwork.com/hc/en-us/articles/49880154277267-Business-Plus-features-and-how-they-work
- Upwork FY2025 Form 10-K: https://www.sec.gov/Archives/edgar/data/1627475/000162747526000012/upwk-20251231.htm
