import { useState } from "react";
import type { UseCase } from "@/data/useCases";

const complexityMap = {
  low: "LOW",
  med: "MED",
  high: "HIGH",
};

interface UseCaseCardProps {
  useCase: UseCase;
  filtered: boolean;
}

const UseCaseCard = ({ useCase, filtered }: UseCaseCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`border border-border wet-surface transition-all duration-300 cursor-pointer hover:border-primary/30 ${filtered ? "hidden" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <span className="font-mono text-xs text-muted-foreground">
            {String(useCase.id).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            {useCase.category === "Unhinged" ? (
              <span className="font-mono text-[10px] tracking-wider text-accent neon-glow-magenta">
                {useCase.category.toUpperCase()}
              </span>
            ) : (
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                {useCase.category.toUpperCase()}
              </span>
            )}
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
              {complexityMap[useCase.complexity]}
            </span>
          </div>
        </div>
        <h3 className="font-mono text-sm md:text-base font-semibold mb-1 text-foreground">
          {useCase.title}
        </h3>
        <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
          {useCase.oneLiner}
        </p>
        {expanded && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-body text-sm text-foreground leading-relaxed">
              {useCase.detail}
            </p>
            {useCase.money && (
              <div className="mt-3 font-mono text-xs text-primary neon-glow-cyan">
                → {useCase.money}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UseCaseCard;
