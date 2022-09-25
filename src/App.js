import { useEffect, useState } from "react";
import { CompanyInfo } from "./components/CompanyInfo";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Number } from "./components/Number";
import { RecruitmentAreas } from "./components/RecruitmentAreas";
import { Specialization } from "./components/Specialization";
import Splashscreen from "./components/Splashscreen";


function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
      sessionStorage.setItem("showSplashScreen", "false");
    }, 3000);
  }, []);
  return (
    <>
    {JSON.parse(sessionStorage.getItem("showSplashScreen")) !== false &&
    showSplashScreen && (
      <div className="absolute inset-0 bg-[#1C1C1C] h-screen w-screen flex items-center justify-center">
      <Splashscreen />
    </div>
    )}
    {!showSplashScreen && (
      <div className="sm:mx-0">
        <Header/>
        <div className="p-5">
       <Intro/>
       <CompanyInfo/>
       <Specialization/>
       <RecruitmentAreas/>
       <Number/>
       <ContactUs/>

        </div>

      </div>
    )}
       
       <Footer/>
    </>
  );
}

export default App;
