const SecurityCallout = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="border-2 neon-border-magenta p-6 md:p-8 wet-surface">
          <h2 className="font-display text-lg md:text-xl font-bold mb-6 tracking-tight text-accent neon-glow-magenta">
            SECURITY CONCERNS_
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-accent/20 mb-6">
            {[
              { value: "40,000+", label: "UNPROTECTED INSTANCES LEAKING API KEYS" },
              { value: "341", label: "MALICIOUS SKILLS ON CLAWHUB" },
              { value: "27,000", label: "FAMILY PHOTOS NEARLY DELETED BY AGENT" },
            ].map((stat) => (
              <div key={stat.label} className="bg-background p-4">
                <div className="font-display text-2xl font-bold text-accent neon-glow-magenta">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] tracking-wider text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-sm text-foreground leading-relaxed mb-6">
            Peter himself says this technology "should only be run by people who understand computer security." Researchers found malicious skills disguised as crypto wallets and trading bots designed to steal credentials. One user's agent bombarded 500+ messages to random contacts. Another had his email compromised by a single prompt injection.
          </p>

          <div className="border-t border-accent/30 pt-6">
            <h3 className="font-mono text-xs tracking-wider text-accent mb-4">
              SAFETY CHECKLIST
            </h3>
            <ul className="space-y-2">
              {[
                "Install on completely separate hardware - its own Mac Mini or MacBook",
                "Create its own Apple account and email address",
                "Give it a pre-paid debit card with forced daily spend limit, no overdraw",
                "Use API keys with spend alerts and hard limits",
                "Do NOT give it access to any personal accounts",
                "Start with web browsing and research - not finances or sensitive data",
              ].map((item) => (
                <li key={item} className="font-mono text-xs text-muted-foreground flex gap-2">
                  <span className="text-primary shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCallout;
