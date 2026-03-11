import Hero from "@/components/Hero";
import UseCaseLandscape from "@/components/UseCaseLandscape";
import RiskRewardMatrix from "@/components/RiskRewardMatrix";
import MoneySection from "@/components/MoneySection";
import SecurityCallout from "@/components/SecurityCallout";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scanline">
      <Hero />
      <UseCaseLandscape />
      <RiskRewardMatrix />
      <MoneySection />
      <SecurityCallout />
      <footer className="border-t border-border py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-primary mb-3 uppercase">What is OpenClaw?</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                An open-source AI agent that runs on your computer, connects to WhatsApp, iMessage, and Slack, and acts on tasks you text it — no back and forth. It also runs on a 30-minute timer and acts on your behalf whether you asked it to or not.
              </p>
              <a
                href="https://github.com/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[10px] tracking-wider text-primary mt-3 hover:neon-glow-cyan transition-all"
              >
                GITHUB →
              </a>
            </div>

            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-primary mb-3 uppercase">About this gallery</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                33 real use cases sourced from the OpenClaw community. Covers work automation, smart home control, multi-agent orchestration, and the genuinely strange. Includes a risk/reward breakdown and the ones with dollar figures attached.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-primary mb-3 uppercase">Built by</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Jonathan Kurniawan — AI strategist and builder. If you've done something wild with OpenClaw that belongs here, send it over.
              </p>
              <a
                href="mailto:jonathan@bridgeaiknowledge.com"
                className="inline-block font-mono text-[10px] tracking-wider text-primary mt-3 hover:neon-glow-cyan transition-all"
              >
                SUBMIT A USE CASE →
              </a>
            </div>
          </div>

          <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
              BUILD ON CLAW · 33 COMMUNITY USE CASES · {new Date().getFullYear()}
            </p>
            <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
              COMPLEXITY: LOW / MED / HIGH · RISK IS REAL — READ THE SECURITY SECTION
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
