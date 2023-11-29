import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
function App() {
  return (
    <div className="App bg-white ">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
