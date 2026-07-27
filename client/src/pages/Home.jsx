import "../App.css";

import ScrollProgress from "../components/ScrollProgress";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturedLetter from "../components/FeaturedLetter";
import QuoteSection from "../components/QuoteSection";
import ExploreLetters from "../components/ExploreLetters";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedLetter />
      <QuoteSection />
      <ExploreLetters />
      <About />
      <Footer />
    </>
  );
}

export default Home;