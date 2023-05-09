import Navigation from "./Navigation"
import Hero from "./Hero"
import InfoSection from "./InfoSection"
import Footer from "./Footer"

const Landing = () => {
  return (
    <div className="bg-gray-900 w-[100%%] lg:w-[100%] m-auto py-[20px]">
      <Navigation />
      <Hero />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default Landing
