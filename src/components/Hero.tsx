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
          Open Source AI Agent — Est. Nov 2025 — Creator hired by OpenAI
        </p>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6 neon-glow-cyan text-primary">
          OPENCLAW<span className="terminal-cursor">_</span>
        </h1>

        <p className="font-body text-base md:text-lg text-foreground max-w-3xl mb-4 leading-relaxed">
          An open-source AI assistant that runs locally on your computer, connects to your messaging apps — WhatsApp, Telegram, iMessage, Slack, Discord — and takes autonomous actions on your behalf every 30 minutes.
        </p>
        <p className="font-body text-sm md:text-base text-muted-foreground max-w-3xl mb-4 leading-relaxed">
          You text it like a friend. It has access to your files, your browser, your APIs. It remembers conversations for weeks. It doesn't wait for prompts — it runs on a <span className="text-primary font-mono text-xs">"heartbeat"</span>, proactively working while you sleep.
        </p>
        <p className="font-mono text-xs text-accent mb-12 neon-glow-magenta">
          Below: 33 real use cases from the community. From grocery shopping to negotiating a $4,200 car discount to building a YouTube dashboard overnight.
        </p>

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
