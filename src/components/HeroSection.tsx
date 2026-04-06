import { RobotScene } from "@/components/robot/RobotScene";

export function HeroSection() {
    return (
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-12 pt-6 sm:gap-10 sm:px-6 sm:pb-14 sm:pt-8 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:pt-12">
            <div className="relative space-y-6 sm:space-y-7">
                <p className="inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-[#FFF4ED] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF6A00] sm:text-xs dark:border-[#FF8C3A]/35 dark:bg-[#26160d] dark:text-[#FFB074]">
                    AI Co-Pilot for Career Growth
                </p>
                <div
                    className="absolute inset-0 -z-10 overflow-hidden rounded-3xl"
                    style={{
                        background: `
                       radial-gradient(circle at 20% 30%, rgba(255,106,0,0.25) 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, rgba(255,140,58,0.25) 0%, transparent 50%),
                       radial-gradient(circle at 50% 50%, rgba(255,176,116,0.18) 0%, transparent 50%),
                       var(--hero-bg)
                       `,
                        filter: "blur(60px)",
                    }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="
                        absolute inset-0 h-full w-full object-cover 
                        opacity-30 
                        dark:opacity-40
                        mix-blend-multiply
                        dark:mix-blend-screen
                        "
                    >
                        <source src="/videos/shattered_nebula_orb_remix.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                <h1 className="max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Build Better Resumes.
                    <span className="mt-2 block bg-linear-to-r from-[#FF6A00] via-[#FF8C3A] to-[#FFB074] bg-clip-text text-transparent">
                        Match Jobs Faster.
                    </span>
                </h1>

                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                    FlowAI scans job descriptions, scores your resume in seconds, and gives personalized AI
                    recommendations so you can apply with confidence and land interviews sooner.
                </p>

                <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                    <div className="rounded-2xl border border-border/70 bg-card/80 p-4">
                        <p className="text-2xl font-semibold text-foreground">92%</p>
                        <p className="text-xs text-muted-foreground">Resume Match Accuracy</p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-card/80 p-4">
                        <p className="text-2xl font-semibold text-foreground">3x</p>
                        <p className="text-xs text-muted-foreground">More Relevant Interviews</p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-card/80 p-4">
                        <p className="text-2xl font-semibold text-foreground">24/7</p>
                        <p className="text-xs text-muted-foreground">AI Career Assistant</p>
                    </div>
                </div>

                <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <button className="w-full rounded-xl bg-linear-to-r from-[#FF6A00] to-[#FF8C3A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(255,106,0,0.8)] transition-opacity hover:opacity-90 sm:w-auto">
                        Start Free Trial
                    </button>
                    <button className="w-full rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:w-auto">
                        Watch Demo
                    </button>
                </div>
            </div>

            <div className="relative mx-auto w-full flex items-center justify-center lg:justify-end">
                <RobotScene />
            </div>
        </section>
    );
}
