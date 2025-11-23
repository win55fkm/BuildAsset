import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 各ページの読み込み
import Home from './pages/Home';
import Sp500Page from './pages/Sp500Page';
import AllCountryPage from './pages/AllCountryPage'; // ★ここが抜けていました！

// ページ遷移時にスクロールを上に戻すためのコンポーネント
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* URLが "/" のときは Home を表示 */}
        <Route path="/" element={<Home />} />
        
        {/* URLが "/sp500" のときは Sp500Page を表示 */}
        <Route path="/sp500" element={<Sp500Page />} />

        {/* URLが "/all-country" のときは AllCountryPage を表示 */}
        <Route path="/all-country" element={<AllCountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;