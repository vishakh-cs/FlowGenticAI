import React from 'react'
import {
  FileText,
  Sparkles,
  Target,
  TrendingUp,
  MessageSquare,
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowRight,
  Brain,
  Search,
  PenTool
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: "Resume Analysis",
    description: "Our AI instantly scans your resume, identifies weaknesses, and provides actionable suggestions to improve readability, ATS compatibility, and content quality.",
    stats: "92% more likely to pass ATS"
  },
  {
    icon: Target,
    title: "Job Matching",
    description: "Paste any job description and our algorithm matches your skills, experience, and keywords to find the perfect alignment score with real-time feedback.",
    stats: "3x more relevant applications"
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Get personalized suggestions for skills to add, experiences to highlight, and action verbs that make your resume pop and stand out to recruiters.",
    stats: "40% more responses"
  },
  {
    icon: MessageSquare,
    title: "Interview Prep",
    description: "Practice with AI-generated interview questions based on the job you're targeting. Get sample answers and tips to ace your interviews with confidence.",
    stats: "24/7 AI Career Coach"
  },
  {
    icon: PenTool,
    title: "Cover Letter Generator",
    description: "Create compelling cover letters in seconds. Our AI customizes your letter to match the job requirements while maintaining your unique voice and personality.",
    stats: "10x faster writing"
  },
  {
    icon: BarChart3,
    title: "Career Insights",
    description: "Track your application progress, analyze trends, and get data-driven insights to optimize your job search strategy for better results.",
    stats: "Real-time analytics"
  }
]

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#FF6A00]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#FF8C3A]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-[#FFF4ED] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6A00] dark:border-[#FF8C3A]/35 dark:bg-[#26160d] dark:text-[#FFB074]">
            <Zap className="mr-2 h-4 w-4" />
            Powerful Features
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything You Need to
            <span className="block bg-linear-to-r from-[#FF6A00] via-[#FF8C3A] to-[#FFB074] bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            FlowAI combines cutting-edge AI with proven career strategies to give you the competitive edge in today's job market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/30 hover:shadow-lg hover:shadow-[#FF6A00]/10"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-[#FF6A00] to-[#FF8C3A] text-white shadow-lg shadow-[#FF6A00]/25">
                <feature.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mb-4 text-muted-foreground">
                {feature.description}
              </p>

              {/* Stats Badge */}
              <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-[#FF6A00] dark:bg-secondary/80">
                <TrendingUp className="mr-1.5 h-4 w-4" />
                {feature.stats}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ArrowRight className="h-5 w-5 text-[#FF6A00]" />
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#FF6A00]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-border bg-card/80 p-8 md:flex-row">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6A00]/10">
              <Brain className="h-6 w-6 text-[#FF6A00]" />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground">Try All Features Free</h4>
              <p className="text-muted-foreground">No credit card required. Start your free trial today.</p>
            </div>
            <button className="mt-4 rounded-xl bg-linear-to-r from-[#FF6A00] to-[#FF8C3A] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(255,106,0,0.8)] transition-opacity hover:opacity-90 md:mt-0">
              Get Started Free
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#FF6A00]" />
            <span className="text-sm font-medium">500K+ Resumes Analyzed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#FF6A00]" />
            <span className="text-sm font-medium">98% Customer Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#FF6A00]" />
            <span className="text-sm font-medium">Used by Fortune 500</span>
          </div>
        </div>
      </div>
    </section>
  )
}

