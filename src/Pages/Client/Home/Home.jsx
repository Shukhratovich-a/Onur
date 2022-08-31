import Hero from "../../../Components/Hero/Hero";
import Services from "../../../Components/Services/Services";
import Partners from "../../../Components/Partners/Partners";
// import News from "../../../Components/News/News";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Services />
      <Partners />
      {/* <News /> */}
    </main>
  );
};

export default Home;
