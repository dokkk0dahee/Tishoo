import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Page1";
import Community from "./pages/Page2";
import Profile from "./pages/Page3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<div>검색 페이지</div>} />
          <Route path="/page2" element={<div>커뮤니티 페이지</div>} />
          <Route path="/page3" element={<div>프로필 페이지</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;