import React from 'react'
import { Sparkles } from 'lucide-react'

const productLinks = ['Features', 'Pricing', 'Docs']
const companyLinks = ['About', 'Careers', 'Contact']
const resourceLinks = ['Resume Tips', 'Interview Prep', 'Job Search Guide']

export default function Footer() {
  return (
    <footer id="docs" className="relative overflow-hidden bg-background pb-10 pt-14">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,106,0,0.05),transparent_30%),radial-gradient(circle_at_20%_0%,rgba(255,176,116,0.16),transparent_22%)] dark:bg-[linear-gradient(180deg,rgba(255,106,0,0.08),transparent_30%),radial-gradient(circle_at_20%_0%,rgba(255,176,116,0.08),transparent_18%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 md:px-10 lg:px-12">
        <div className="grid gap-8 rounded-[2rem] border border-white/50 bg-white/70 p-6 shadow-[0_24px_90px_-50px_rgba(255,106,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div className="rounded-[1.5rem] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,244,237,0.76))] p-6 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(26,26,26,0.96),rgba(34,20,12,0.82))]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#FF6A00] to-[#FF8C3A] text-white">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="bg-linear-to-br from-[#FF6A00] to-[#FF8C3A] bg-clip-text text-2xl font-bold text-transparent">
                  FlowAI
                </p>
                <p className="text-sm text-muted-foreground">AI co-pilot for sharper resumes and faster job matches.</p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Build stronger applications, uncover better-fit roles, and practice interviews with an AI workflow designed to help candidates move with clarity and confidence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">Product</h3>
              <div className="mt-4 space-y-3">
                {productLinks.map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-muted-foreground transition-colors hover:text-[#FF6A00]">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">Company</h3>
              <div className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <a key={link} href="#" className="block text-sm text-muted-foreground transition-colors hover:text-[#FF6A00]">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">Resources</h3>
              <div className="mt-4 space-y-3">
                {resourceLinks.map((link) => (
                  <a key={link} href="#" className="block text-sm text-muted-foreground transition-colors hover:text-[#FF6A00]">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 FlowAI. Built for faster, more confident job search journeys.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="transition-colors hover:text-[#FF6A00]">Privacy</a>
            <a href="#" className="transition-colors hover:text-[#FF6A00]">Terms</a>
            <a href="#" className="transition-colors hover:text-[#FF6A00]">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
