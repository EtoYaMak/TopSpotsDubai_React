import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <div className="App bg-white ">
      <Navbar />
      <Home />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
