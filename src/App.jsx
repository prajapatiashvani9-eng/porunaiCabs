import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Routes from "./components/Routes";
// import Tariff from "./components/Tariff";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

function App() {
  return (
    <div className="overflow-x-hidden bg-slate-50">

      {/* Navigation */}
      <Navbar />

      {/* Main Website */}
      <main>
        <Hero />

        <TrustBar />

        <Services />

        <Fleet />

        <Routes />

        {/* <Tariff /> */}

        <WhyChooseUs />

        <Reviews />

        <FAQ />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call + WhatsApp Buttons */}
      <FloatingActions />

    </div>
  );
}

export default App;