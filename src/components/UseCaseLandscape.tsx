import { useState } from "react";
import { useCases, categories, type Category } from "@/data/useCases";
import UseCaseCard from "./UseCaseCard";

const UseCaseLandscape = () => {
  const [activeFilter, setActiveFilter] = useState<Category | "ALL">("ALL");

  return (
    <section className="border-b border-border py-12 md:py-16">
      <div className="container">
        <h2 className="font-mono text-lg md:text-xl font-bold mb-6 tracking-tight">
          USE CASE LANDSCAPE<span className="terminal-cursor text-primary">_</span>
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveFilter("ALL")}
            className={`font-mono text-xs tracking-wider px-3 py-1.5 border transition-colors ${
              activeFilter === "ALL"
                ? "border-primary text-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            ALL ({useCases.length})
          </button>
          {categories.map((cat) => {
            const count = useCases.filter((u) => u.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-mono text-xs tracking-wider px-3 py-1.5 border transition-colors ${
                  activeFilter === cat
                    ? cat === "Unhinged"
                      ? "border-destructive text-destructive"
                      : "border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {cat.toUpperCase()} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {useCases.map((uc) => (
            <div key={uc.id} className="bg-background">
              <UseCaseCard
                useCase={uc}
                filtered={activeFilter !== "ALL" && uc.category !== activeFilter}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseLandscape;
