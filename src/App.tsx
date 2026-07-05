import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { VisualSystem } from "./components/VisualSystem";
import { UseCases } from "./components/UseCases";
import { Audience } from "./components/Audience";
import { Comparison } from "./components/Comparison";
import { Process } from "./components/Process";
import { Packages } from "./components/Packages";
import { CaseStudies } from "./components/CaseStudies";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <VisualSystem />
        <UseCases />
        <Audience />
        <Comparison />
        <Process />
        <Packages />
        <CaseStudies />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
