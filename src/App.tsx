import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";

function App(): JSX.Element {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
