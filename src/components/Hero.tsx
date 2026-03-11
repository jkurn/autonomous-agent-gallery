const stats = [
  { value: "196K", label: "GITHUB STARS" },
  { value: "3", label: "MONTHS" },
  { value: "2M", label: "WEEKLY VISITORS" },
  { value: "3,984", label: "COMMUNITY SKILLS" },
  { value: "100+", label: "BUILT-IN SKILLS" },
];

const Hero = () => {
  return (
    <section className="border-b border-border py-16 md:py-24 scanline grid-overlay relative overflow-hidden">
      {/* Ambient glow spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6 uppercase">
          33 Real Use Cases — From the Community — No Marketing, Just Receipts
        </p>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8 neon-glow-cyan text-primary">
          BUILD ON CLAW<span className="terminal-cursor">_</span>
        </h1>

        <div className="max-w-3xl space-y-6 mb-12">
          <div>
            <h2 className="font-mono text-xs tracking-[0.2em] text-primary mb-2 uppercase">What is OpenClaw?</h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              An open-source AI agent that runs on your computer and connects to your messaging apps. WhatsApp, iMessage, Slack. You text it a task and it executes. No back and forth. It also runs on a timer, checking in every <span className="text-primary font-mono text-xs">30 minutes</span> to act on your behalf — whether you asked it to or not.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-[0.2em] text-primary mb-2 uppercase">What is this page?</h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              33 real things people have done with it. Someone negotiated a car purchase and saved <span className="text-accent font-mono text-xs neon-glow-magenta">$4,200</span>. Someone fixed a software bug from a vacation in Morocco without opening their laptop. Someone woke up to a phone call from their own AI, which had quietly acquired a Twilio number overnight and decided morning was a good time to check in.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-[0.2em] text-primary mb-2 uppercase">What you can do here</h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Browse by category — work, personal, smart home, multi-agent, and the genuinely strange. Filter by complexity. See which ones carry real security risk, and which ones someone actually put a dollar figure on.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border/50">
          {stats.map((stat) => (
            <div key={stat.label} className="wet-surface p-4 md:p-6 border border-border/30">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary neon-glow-cyan">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] md:text-xs tracking-wider text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
