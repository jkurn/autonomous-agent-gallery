const stats = [
  { value: "196,000", label: "GITHUB STARS" },
  { value: "3", label: "MONTHS" },
  { value: "2M", label: "WEEKLY VISITORS" },
  { value: "3,984", label: "COMMUNITY SKILLS" },
  { value: "100+", label: "BUILT-IN AGENTSKILLS" },
];

const Hero = () => {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="container">
        <p className="font-mono text-xs tracking-widest text-muted-foreground mb-6">
          OPEN SOURCE AI AGENT — EST. NOV 2025
        </p>
        <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-4">
          OPENCLAW<span className="terminal-cursor text-primary">_</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-muted-foreground max-w-2xl mb-12">
          An AI assistant that runs locally on your computer, connects to your messaging apps, and takes actions on your behalf every 30 minutes. Its creator just got hired by OpenAI.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-4 md:p-6">
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary">
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
