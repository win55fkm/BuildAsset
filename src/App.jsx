import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 各ページの読み込み
import Home from './pages/Home';
import Sp500Page from './pages/Sp500Page';
import AllCountryPage from './pages/AllCountryPage';
import BookDetailPage from './pages/BookDetailPage'; // 書籍詳細ページ

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

// ▼▼▼ ここに function App() が1つだけある状態にします ▼▼▼
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* URLが "/" のときは Home を表示 */}
        <Route path="/" element={<Home />} />
        
        {/* シミュレーターページ */}
        <Route path="/sp500" element={<Sp500Page />} />
        <Route path="/all-country" element={<AllCountryPage />} />
        
        {/* 書籍詳細ページ（ダイナミックルーティング） */}
        <Route path="/books/:id" element={<BookDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;