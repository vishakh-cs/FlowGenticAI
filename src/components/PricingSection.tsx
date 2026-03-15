import React from 'react'
import { ArrowRight, Check, Sparkles, Stars } from 'lucide-react'

type Plan = {
  name: string
  price: string
  cadence: string
  description: string
  features: string[]
  cta: string
  badge?: string
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    cadence: '/month',
    description: 'A focused toolkit for first-time users who want resume feedback and a clear job-match snapshot.',
    features: [
      '3 resume scans per month',
      'Basic ATS keyword analysis',
      '1 job match report',
      'Email support',
    ],
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    price: '$19',
    cadence: '/month',
    description: 'The complete FlowAI workflow for active job seekers who need faster iteration and stronger applications.',
    features: [
      'Unlimited resume scans',
      'Unlimited job match scoring',
      'AI bullet rewrites and cover letters',
      'Interview simulator with role-specific prompts',
      'Priority support',
    ],
    cta: 'Get Pro',
    badge: 'Most Popular',
    featured: true,
  },
  {
    name: 'Teams',
    price: '$79',
    cadence: '/month',
    description: 'A collaborative workspace for career coaches, placement cells, and bootcamps managing multiple candidates.',
    features: [
      'Up to 10 member seats',
      'Shared candidate workspaces',
      'Progress tracking dashboard',
      'Admin analytics and exports',
    ],
    cta: 'Talk to Sales',
  },
]

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border p-5 shadow-[0_24px_90px_-50px_rgba(255,106,0,0.45)] backdrop-blur-xl ${
        plan.featured
          ? 'border-[#FF6A00]/35 bg-[linear-gradient(180deg,rgba(255,244,237,0.96),rgba(255,228,209,0.88))] dark:border-[#FF8C3A]/35 dark:bg-[linear-gradient(180deg,rgba(36,21,12,0.98),rgba(22,14,9,0.96))]'
          : 'border-white/50 bg-white/70 dark:border-white/10 dark:bg-white/5'
      }`}
    >
      <div
        className={`absolute inset-0 ${
          plan.featured
            ? 'bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.18),transparent_35%)]'
            : 'bg-[radial-gradient(circle_at_top_right,rgba(255,176,116,0.16),transparent_35%)]'
        }`}
      />

      <div className="relative rounded-[1.5rem] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,244,237,0.76))] p-6 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(26,26,26,0.96),rgba(34,20,12,0.82))]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF6A00] dark:text-[#FFB074]">
              {plan.name}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              {plan.price}
              <span className="text-base font-medium text-muted-foreground">{plan.cadence}</span>
            </h3>
          </div>
          {plan.badge ? (
            <span className="rounded-full border border-[#FF6A00]/20 bg-[#FFF4ED] px-3 py-1 text-xs font-semibold text-[#FF6A00] dark:bg-[#2a1a10] dark:text-[#FFB074]">
              {plan.badge}
            </span>
          ) : null}
        </div>

        <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
          {plan.description}
        </p>

        <ul className="mt-6 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF4ED] text-[#FF6A00] dark:bg-[#2a1a10] dark:text-[#FFB074]">
                <Check className="h-4 w-4" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
            plan.featured
              ? 'bg-linear-to-r from-[#FF6A00] to-[#FF8C3A] text-white shadow-[0_16px_30px_-18px_rgba(255,106,0,0.8)] hover:opacity-90'
              : 'border border-border bg-background/75 text-foreground hover:bg-accent dark:bg-card/60'
          }`}
        >
          {plan.cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  )
}

export default function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-background py-24 sm:py-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(255,106,0,0.12),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(255,176,116,0.18),transparent_22%),linear-gradient(180deg,transparent,rgba(255,106,0,0.05))] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(255,106,0,0.16),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(255,176,116,0.1),transparent_18%),linear-gradient(180deg,rgba(10,8,7,0.98),rgba(10,8,7,1))]" />
      <div className="absolute left-4 top-20 -z-10 h-72 w-72 rounded-full bg-[#FF6A00]/10 blur-3xl animate-float-slow" />
      <div className="absolute right-6 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#FFB074]/12 blur-3xl animate-float-reverse" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/20 bg-[#FFF4ED]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF6A00] shadow-[0_12px_40px_-28px_rgba(255,106,0,0.8)] backdrop-blur dark:border-[#FF8C3A]/30 dark:bg-[#26160d]/80 dark:text-[#FFB074]">
              <Stars className="h-4 w-4" />
              Pricing
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Choose the plan that moves your
              <span className="mt-2 block bg-linear-to-r from-[#FF6A00] via-[#FF8C3A] to-[#FFB074] bg-clip-text text-transparent">
                job search forward faster.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              Start free, upgrade when you need the full AI workflow, or bring FlowAI to your coaching or placement team with shared workspaces and analytics.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/50 bg-white/70 p-6 shadow-[0_24px_90px_-50px_rgba(255,106,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="rounded-[1.5rem] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,244,237,0.76))] p-6 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(26,26,26,0.96),rgba(34,20,12,0.82))]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#FF6A00] to-[#FF8C3A] text-white shadow-[0_18px_40px_-18px_rgba(255,106,0,0.95)]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#FF6A00]">All plans include</p>
                  <h3 className="text-2xl font-semibold text-foreground">Fast setup, instant guidance, and a cleaner apply flow.</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-border/60 bg-background/85 p-4 dark:bg-card/70">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Onboarding</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Under 5 min</p>
                </div>
                <div className="rounded-3xl border border-border/60 bg-background/85 p-4 dark:bg-card/70">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Resume formats</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">PDF + DOCX</p>
                </div>
                <div className="rounded-3xl border border-border/60 bg-background/85 p-4 dark:bg-card/70">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Support</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Human + AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
