import { useState } from "react";
import { useCases, type Category } from "@/data/useCases";

const categoryColor: Record<Category, string> = {
  "Everyday Life": "hsl(130, 100%, 50%)",
  "Work": "hsl(130, 60%, 60%)",
  "Multi-Agent": "hsl(190, 80%, 55%)",
  "Smart Home": "hsl(50, 80%, 55%)",
  "Unhinged": "hsl(1, 100%, 61%)",
};

const RiskRewardMatrix = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hoveredUseCase = useCases.find((u) => u.id === hoveredId);

  const CHART_W = 100;
  const CHART_H = 100;
  const PAD = 10;

  return (
    <section className="border-b border-border py-12 md:py-16">
      <div className="container">
        <h2 className="font-mono text-lg md:text-xl font-bold mb-2 tracking-tight">
          RISK / REWARD MATRIX<span className="terminal-cursor text-primary">_</span>
        </h2>
        <p className="font-body text-xs text-muted-foreground mb-8">
          X = Capability · Y = Risk · Color = Category
        </p>

        <div className="relative w-full" style={{ maxWidth: 800 }}>
          <svg
            viewBox={`0 0 ${CHART_W} ${CHART_H}`}
            className="w-full border border-border bg-background"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid lines */}
            {[2, 4, 6, 8].map((v) => (
              <g key={v}>
                <line
                  x1={PAD + ((v - 1) / 9) * (CHART_W - 2 * PAD)}
                  y1={PAD}
                  x2={PAD + ((v - 1) / 9) * (CHART_W - 2 * PAD)}
                  y2={CHART_H - PAD}
                  stroke="hsl(0,0%,20%)"
                  strokeWidth="0.2"
                />
                <line
                  x1={PAD}
                  y1={PAD + ((v - 1) / 9) * (CHART_H - 2 * PAD)}
                  x2={CHART_W - PAD}
                  y2={PAD + ((v - 1) / 9) * (CHART_H - 2 * PAD)}
                  stroke="hsl(0,0%,20%)"
                  strokeWidth="0.2"
                />
              </g>
            ))}

            {/* Axis labels */}
            <text x={CHART_W / 2} y={CHART_H - 2} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 3, fontFamily: "Roboto Mono" }}>
              CAPABILITY →
            </text>
            <text x={3} y={CHART_H / 2} textAnchor="middle" className="fill-destructive" style={{ fontSize: 3, fontFamily: "Roboto Mono" }} transform={`rotate(-90, 3, ${CHART_H / 2})`}>
              RISK →
            </text>

            {/* Data points */}
            {useCases.map((uc) => {
              const cx = PAD + ((uc.capability - 1) / 9) * (CHART_W - 2 * PAD);
              const cy = CHART_H - PAD - ((uc.risk - 1) / 9) * (CHART_H - 2 * PAD);
              const isHovered = hoveredId === uc.id;
              return (
                <circle
                  key={uc.id}
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 2.5 : 1.8}
                  fill={categoryColor[uc.category]}
                  opacity={isHovered ? 1 : 0.75}
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredId(uc.id)}
                  onMouseLeave={() => setHoveredId(null)}
                />
              );
            })}
          </svg>

          {/* Tooltip */}
          {hoveredUseCase && (
            <div className="absolute top-4 right-4 bg-card border border-border p-3 max-w-xs pointer-events-none">
              <div className="font-mono text-xs text-primary mb-1">
                {String(hoveredUseCase.id).padStart(2, "0")} — {hoveredUseCase.category.toUpperCase()}
              </div>
              <div className="font-mono text-sm font-semibold text-foreground mb-1">
                {hoveredUseCase.title}
              </div>
              <div className="font-body text-xs text-muted-foreground">
                Capability: {hoveredUseCase.capability}/10 · Risk: {hoveredUseCase.risk}/10
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4">
          {Object.entries(categoryColor).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5" style={{ backgroundColor: color }} />
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                {cat.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskRewardMatrix;
