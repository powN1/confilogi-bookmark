import Download from "../components/Download";
import Faq from "../components/Faq";
import FeatureModal from "../components/FeatureModal";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Overview from "../components/Overview";

const HomePage = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <Overview />
        <Features />
        <Download />
        <Faq />
      </div>
      <NewsLetter />
      <FeatureModal />
      <Footer />
    </div>
  );
};

export default HomePage;
