import AboveFold from "../components/AboveFold/AboveFold";
import Container from "../components/container/Container";
import Howtowork from "../components/Howtowork/Howtowork";
import Growth from "../components/Growth/Growth";
import Faq from "../components/Faq/Faq";
import Contact from "../components/Contact/Contact";
import Team from "../components/Team/Team";
import Testimonials from "../components/Contact/Testimonials";
import Managers from "../components/Team/Managers";
import Features from "../components/Features/Features";
import { homeData } from "../data/homeData";

const Home = () => {
  return (
    <div className="">
      <AboveFold 
        title={homeData.title}
        subtitle={homeData.subtitle}
        ctaText={homeData.ctaText}
        backgroundImage={homeData.backgroundImage}
      />
      <div className="bg-[#0C182A]">
        <Container>
          <Howtowork />
        </Container>
      </div>
      <Features />
      <Managers />
      <Growth />
      <Testimonials />
      <Team />
      <Faq />
      <Contact />
    </div>
  );
}

export default Home;  