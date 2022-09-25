import { CompanyInfo } from "./components/CompanyInfo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Specialization } from "./components/Specialization";



function App() {
  return (
    <div className="App">
       <Header/>
       <Intro/>
       <CompanyInfo/>
       <Specialization/>
       <Footer/>
    </div>
  );
}

export default App;
