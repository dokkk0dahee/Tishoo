import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout-component";
import Home from "./pages/home/Index";
import Reservation from "./pages/reservation/Index";
import Compare from "./pages/compare/Index";
import Mypage from "./pages/mypage/Index"; 
import Onboarding from "./pages/home/Onboarding";
import GuideDetail from "./pages/home/GuideDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/guide/:id" element={<GuideDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;