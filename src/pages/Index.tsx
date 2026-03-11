import Hero from "@/components/Hero";
import UseCaseLandscape from "@/components/UseCaseLandscape";
import RiskRewardMatrix from "@/components/RiskRewardMatrix";
import MoneySection from "@/components/MoneySection";
import SecurityCallout from "@/components/SecurityCallout";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <UseCaseLandscape />
      <RiskRewardMatrix />
      <MoneySection />
      <SecurityCallout />
      <footer className="border-t border-border py-6">
        <div className="container">
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
            DATA SOURCE: AI WITH ALLIE NEWSLETTER · THIS IS AN ARCHIVE, NOT MARKETING
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
