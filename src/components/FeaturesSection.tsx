import React from 'react'
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  FileText,
  MessageSquare,
  PenTool,
  Search,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  metric: string
  eyebrow: string
  detail: string
  accent: string
  glow: string
  orbit: string
  height: string
}

const features: Feature[] = [
  {
    icon: FileText,
    title: 'Resume X-Ray',
    description: 'Spot weak bullets, missing keywords, and ATS blockers before your resume gets filtered out.',
    metric: '92% ATS lift',
    eyebrow: 'Scan layer',
    detail: 'Keyword gaps found in summary and impact bullets.',
    accent: 'from-[#FF6A00]/18 via-[#FFB074]/10 to-transparent',
    glow: 'bg-[#FF6A00]/20',
    orbit: '12 missing signals',
    height: 'xl:row-span-2',
  },
  {
    icon: Target,
    title: 'Job Match Canvas',
    description: 'Map your strengths against the role in a visual scorecard that shows what to fix first.',
    metric: '3x sharper targeting',
    eyebrow: 'Fit layer',
    detail: 'Aligns your strongest experience with the highest-value requirements.',
    accent: 'from-[#FF8C3A]/20 via-[#FFD4AE]/10 to-transparent',
    glow: 'bg-[#FFB074]/20',
    orbit: '81% match score',
    height: 'xl:translate-y-10',
  },
  {
    icon: Sparkles,
    title: 'AI Rewrite Glow-Up',
    description: 'Turn flat, generic bullets into sharp high-impact language that sounds like your best self.',
    metric: '40% more replies',
    eyebrow: 'Rewrite layer',
    detail: 'Upgrades weak phrasing with stronger verbs and measurable outcomes.',
    accent: 'from-[#FF6A00]/15 via-[#FFF4ED]/20 to-transparent',
    glow: 'bg-[#FFF4ED]',
    orbit: '5 stronger bullets',
    height: 'xl:-translate-y-4',
  },
  {
    icon: MessageSquare,
    title: 'Interview Simulator',
    description: 'Practice role-specific questions with instant coaching on clarity, confidence, and structure.',
    metric: 'Always-on prep',
    eyebrow: 'Prep layer',
    detail: 'Generates focused questions based on the role you are targeting.',
    accent: 'from-[#FFB074]/20 via-[#FF8C3A]/10 to-transparent',
    glow: 'bg-[#FF8C3A]/20',
    orbit: '24/7 role practice',
    height: 'xl:row-span-2 xl:-translate-y-6',
  },
  {
    icon: PenTool,
    title: 'Cover Letter Studio',
    description: 'Generate custom letters that feel tailored, not templated, in a few guided steps.',
    metric: '10x faster writing',
    eyebrow: 'Writing layer',
    detail: 'Builds a tailored narrative around the exact role and your strongest proof points.',
    accent: 'from-[#FF6A00]/20 via-[#FF8C3A]/8 to-transparent',
    glow: 'bg-[#FF6A00]/15',
    orbit: 'Draft in 30 sec',
    height: 'xl:translate-y-4',
  },
  {
    icon: BarChart3,
    title: 'Career Signal Tracking',
    description: 'See where you are getting traction and which roles are worth doubling down on next.',
    metric: 'Live search insights',
    eyebrow: 'Insight layer',
    detail: 'Tracks patterns in response rate, role fit, and application momentum.',
    accent: 'from-[#FFD4AE]/25 via-[#FF6A00]/10 to-transparent',
    glow: 'bg-[#FFD4AE]/60',
    orbit: 'Top 12 best-fit roles',
    height: 'xl:-translate-y-10',
  },
]

function FeatureCanvasCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon

  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 p-5 shadow-[0_24px_90px_-50px_rgba(255,106,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 ${feature.height}`}
    >
      <div className={`absolute inset-0 bg-linear-to-br ${feature.accent} opacity-90`} />
      <div className={`absolute -right-8 top-8 h-24 w-24 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125 ${feature.glow}`} />
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />

      <div className="relative flex h-full flex-col rounded-[1.5rem] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,244,237,0.75))] p-6 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(26,26,26,0.96),rgba(34,20,12,0.82))]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FF6A00] dark:text-[#FFB074]">
              {feature.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              {feature.title}
            </h3>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#FF6A00] to-[#FF8C3A] text-white shadow-[0_18px_40px_-18px_rgba(255,106,0,0.95)]">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          {feature.description}
        </p>

        <div className="relative mt-6 overflow-hidden rounded-[1.6rem] border border-border/60 bg-background/80 p-4 dark:bg-card/70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.12),transparent_35%)]" />
          <div className="relative flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Live insight</p>
              <p className="mt-2 text-base font-semibold text-foreground">{feature.detail}</p>
            </div>
            <div className="rounded-full border border-[#FF6A00]/20 bg-[#FFF4ED] px-3 py-1 text-xs font-semibold text-[#FF6A00] dark:bg-[#2a1a10] dark:text-[#FFB074]">
              {feature.metric}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-secondary">
              <div
                className="h-2 rounded-full bg-linear-to-r from-[#FF6A00] via-[#FF8C3A] to-[#FFB074]"
                style={{ width: `${68 + ((index * 7) % 18)}%` }}
              />
            </div>
            <span className="text-xs font-medium text-muted-foreground">{72 + index * 4}%</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-2 text-xs font-medium text-foreground/85 dark:bg-card/60">
            <CheckCircle2 className="h-4 w-4 text-[#FF6A00] dark:text-[#FFB074]" />
            {feature.orbit}
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/75 text-[#FF6A00] transition-transform duration-300 group-hover:translate-x-1 dark:bg-card/60 dark:text-[#FFB074]">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </article>
  )
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-background py-24 sm:py-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,176,116,0.18),transparent_20%),linear-gradient(180deg,rgba(255,244,237,0.55),transparent_38%,transparent_72%,rgba(255,106,0,0.06))] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(255,176,116,0.12),transparent_18%),linear-gradient(180deg,rgba(18,10,5,0.96),rgba(9,9,9,0.98))]" />
      <div className="absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-[#FF6A00]/15 blur-3xl animate-float-slow" />
      <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-[#FFB074]/12 blur-3xl animate-float-reverse" />
      <div className="absolute left-1/2 top-24 -z-10 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-[#FFF4ED]/80 blur-3xl dark:bg-[#FF6A00]/10 animate-drift-x" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/20 bg-[#FFF4ED]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF6A00] shadow-[0_12px_40px_-28px_rgba(255,106,0,0.8)] backdrop-blur dark:border-[#FF8C3A]/30 dark:bg-[#26160d]/80 dark:text-[#FFB074]">
              <Zap className="h-4 w-4" />
              AI Career Workflow
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Everything you need to turn
              <span className="mt-2 block bg-linear-to-r from-[#FF6A00] via-[#FF8C3A] to-[#FFB074] bg-clip-text text-transparent">
                more applications into interviews.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              FlowAI helps you improve your resume, target the right roles, write stronger applications, and prepare for interviews with one connected system built for job seekers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-foreground">
              <div className="rounded-full border border-border/70 bg-background/75 px-4 py-2 backdrop-blur dark:bg-card/60">Resume scoring</div>
              <div className="rounded-full border border-border/70 bg-background/75 px-4 py-2 backdrop-blur dark:bg-card/60">Job fit mapping</div>
              <div className="rounded-full border border-border/70 bg-background/75 px-4 py-2 backdrop-blur dark:bg-card/60">Rewrite suggestions</div>
              <div className="rounded-full border border-border/70 bg-background/75 px-4 py-2 backdrop-blur dark:bg-card/60">Interview drills</div>
            </div>
          </div>

          <div className="relative min-h-[420px] rounded-[2rem] border border-white/45 bg-white/70 p-5 shadow-[0_40px_120px_-50px_rgba(255,106,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.65),transparent_45%,rgba(255,106,0,0.08))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%,rgba(255,106,0,0.12))]" />
            <div className="absolute -right-8 top-10 h-24 w-24 rounded-full bg-[#FF6A00]/20 blur-2xl animate-pulse-glow" />
            <div className="absolute -left-4 bottom-14 h-20 w-20 rounded-full bg-[#FFB074]/20 blur-2xl animate-float-slow" />

            <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,244,237,0.72))] p-6 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(24,24,24,0.95),rgba(34,20,12,0.88))]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#FF6A00]">Live Match Canvas</p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">See what to improve before you apply.</h3>
                </div>
                <div className="rounded-full border border-[#FF6A00]/20 bg-[#FFF4ED] px-3 py-1 text-sm font-semibold text-[#FF6A00] dark:bg-[#2a1a10] dark:text-[#FFB074]">
                  +28 score
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="animate-float-slow rounded-3xl border border-border/60 bg-background/85 p-4 shadow-[0_24px_60px_-38px_rgba(255,106,0,0.45)] dark:bg-card/70">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Resume scan</p>
                      <p className="mt-2 text-lg font-semibold text-foreground">Missing leadership + product metrics</p>
                    </div>
                    <Search className="h-5 w-5 text-[#FF6A00]" />
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-secondary">
                    <div className="h-2 w-[78%] rounded-full bg-linear-to-r from-[#FF6A00] to-[#FFB074]" />
                  </div>
                </div>

                <div className="ml-auto max-w-[88%] animate-float-reverse rounded-3xl border border-[#FF6A00]/15 bg-[#1a120d] p-4 text-white shadow-[0_30px_80px_-40px_rgba(255,106,0,0.85)] dark:bg-[#120d09]">
                  <div className="flex items-center gap-3">
                    <Brain className="h-5 w-5 text-[#FFB074]" />
                    <p className="text-sm font-medium text-white/80">AI rewrite suggestion</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/90">
                    Reframed your experience to highlight ownership, measurable impact, and recruiter-friendly verbs.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-border/60 bg-background/85 p-4 dark:bg-card/70">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Interview pulse</p>
                    <p className="mt-2 text-3xl font-semibold text-foreground">24/7</p>
                    <p className="mt-2 text-sm text-muted-foreground">Role-specific prep ready whenever you are.</p>
                  </div>
                  <div className="rounded-3xl border border-border/60 bg-background/85 p-4 dark:bg-card/70">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Application focus</p>
                    <p className="mt-2 text-3xl font-semibold text-foreground">Top 12</p>
                    <p className="mt-2 text-sm text-muted-foreground">Best-fit roles surfaced from your resume and target stack.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3 xl:auto-rows-[230px]">
          {features.map((feature, index) => (
            <FeatureCanvasCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
