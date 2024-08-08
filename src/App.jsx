import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import About from "./components/About/About";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <About setPlayState={setPlayState} />
      <Value />
      <Testimonial />
      <Contact />
      <GetStarted />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
