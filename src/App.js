import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/Header/Header";
import MainContent from "../src/components/MainContent/MainContent";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
