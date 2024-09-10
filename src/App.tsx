import { Route, Routes } from "react-router-dom";

import MajesticMiles from "./pages/majesticmiles";
import LucidForms from "./pages/lucidforms";

import Home from "@/pages/index";
import SecureShare from "@/pages/secureshare";
import About from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<LucidForms />} path="/projects/lucid-forms" />
      <Route element={<SecureShare />} path="/projects/secureshare" />
      <Route element={<MajesticMiles />} path="/projects/majestic-miles" />
      <Route element={<About />} path="/about" />
    </Routes>
  );
}

export default App;
