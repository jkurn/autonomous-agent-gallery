import { useCases } from "@/data/useCases";

const MoneySection = () => {
  const moneyUseCases = useCases.filter((uc) => uc.money);

  return (
    <section className="border-b border-border py-12 md:py-16">
      <div className="container">
        <h2 className="font-display text-lg md:text-xl font-bold mb-6 tracking-tight">
          WHERE THE MONEY IS<span className="terminal-cursor text-primary">_</span>
        </h2>

        <div className="space-y-0">
          {moneyUseCases.map((uc) => (
            <div
              key={uc.id}
              className="flex items-baseline justify-between border-b border-border py-3 last:border-b-0 hover:bg-primary/5 transition-colors px-2"
            >
              <div className="flex items-baseline gap-3 min-w-0">
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  {String(uc.id).padStart(2, "0")}
                </span>
                <span className="font-mono text-sm text-foreground truncate">
                  {uc.title}
                </span>
              </div>
              <span className="font-mono text-sm text-primary shrink-0 ml-4 neon-glow-cyan">
                {uc.money}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoneySection;
