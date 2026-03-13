import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout-component";
import Home from "./pages/home/Home";
import Search from "./pages/reservation/Page1";
import Community from "./pages/compare/Page2";
import Profile from "./pages/mypage/Page3"; 
import Onboarding from "./pages/home/Onboarding";
import GuideDetail from "./pages/home/GuideDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Search />} />
          <Route path="/page2" element={<Community />} />
          <Route path="/page3" element={<Profile />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/guide/:id" element={<GuideDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;