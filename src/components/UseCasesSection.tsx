import React from 'react'
import {
  BriefcaseBusiness,
  GraduationCap,
  Rocket,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type UseCase = {
  icon: LucideIcon
  title: string
  audience: string
  description: string
  highlights: string[]
  accent: string
}

const useCases: UseCase[] = [
  {
    icon: GraduationCap,
    title: 'Students & Freshers',
    audience: 'Start strong',
    description:
      'Build your first resume, understand what recruiters are looking for, and apply with more confidence even if you have limited experience.',
    highlights: ['Entry-level resume help', 'Internship targeting', 'Interview practice'],
    accent: 'from-[#FF6A00]/18 via-[#FFB074]/10 to-transparent',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Working Professionals',
    audience: 'Move up faster',
    description:
      'Position your current experience for better roles, stronger salary conversations, and more relevant interview opportunities.',
    highlights: ['Resume repositioning', 'Role-fit insights', 'Career growth planning'],
    accent: 'from-[#FF8C3A]/18 via-[#FFD4AE]/10 to-transparent',
  },
  {
    icon: Rocket,
    title: 'Career Switchers',
    audience: 'Change direction',
    description:
      'Translate your past experience into a new story, surface transferable skills, and target roles that match your next chapter.',
    highlights: ['Transferable skills mapping', 'Rewrite support', 'Focused applications'],
    accent: 'from-[#FFB074]/18 via-[#FFF4ED]/20 to-transparent',
  },
]

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  const Icon = useCase.icon

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 p-5 shadow-[0_24px_90px_-50px_rgba(255,106,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <div className={`absolute inset-0 bg-linear-to-br ${useCase.accent} opacity-90`} />
      <div className="relative rounded-[1.5rem] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,244,237,0.78))] p-6 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(26,26,26,0.96),rgba(34,20,12,0.82))]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FF6A00] dark:text-[#FFB074]">
              {useCase.audience}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              {useCase.title}
            </h3>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#FF6A00] to-[#FF8C3A] text-white shadow-[0_18px_40px_-18px_rgba(255,106,0,0.95)]">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
          {useCase.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {useCase.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-border/70 bg-background/75 px-3 py-2 text-xs font-medium text-foreground/85 dark:bg-card/60"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-5">
          <span className="text-sm font-medium text-[#FF6A00] dark:text-[#FFB074]">
            Tailored workflow
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/75 text-[#FF6A00] transition-transform duration-300 group-hover:translate-x-1 dark:bg-card/60 dark:text-[#FFB074]">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </article>
  )
}

export default function UseCasesSection() {
  return (
    <section className="relative overflow-hidden bg-background py-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(255,106,0,0.12),transparent_24%),radial-gradient(circle_at_85%_25%,rgba(255,176,116,0.18),transparent_20%),linear-gradient(180deg,transparent,rgba(255,106,0,0.04))]" />
      <div className="absolute left-0 top-20 -z-10 h-64 w-64 rounded-full bg-[#FF6A00]/10 blur-3xl animate-float-slow" />
      <div className="absolute right-0 bottom-10 -z-10 h-72 w-72 rounded-full bg-[#FFB074]/10 blur-3xl animate-float-reverse" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/20 bg-[#FFF4ED]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF6A00] shadow-[0_12px_40px_-28px_rgba(255,106,0,0.8)] backdrop-blur dark:border-[#FF8C3A]/30 dark:bg-[#26160d]/80 dark:text-[#FFB074]">
            <BriefcaseBusiness className="h-4 w-4" />
            Use Cases
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Built for every stage of
            <span className="mt-2 block bg-linear-to-r from-[#FF6A00] via-[#FF8C3A] to-[#FFB074] bg-clip-text text-transparent">
              the job search journey.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Whether you are applying for your first internship, aiming for your next promotion, or switching careers entirely, FlowAI adapts the workflow to your goals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.title} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  )
}
