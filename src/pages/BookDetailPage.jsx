import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { bookData } from '../data/bookData';

const BookDetailPage = () => {
  const { id } = useParams();
  const book = bookData[id];

  // データがない場合はトップへリダイレクト
  if (!book) {
    return <Navigate to="/" replace />;
  }

  const Icon = book.icon;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* ナビゲーション */}
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600 font-bold mb-6 md:mb-8 transition-colors text-sm md:text-base">
          <ArrowLeft size={20} className="mr-2"/> トップに戻る
        </Link>

        {/* ヘッダーエリア */}
        <div className={`bg-white rounded-3xl shadow-sm border ${book.borderColor} overflow-hidden mb-8 md:mb-10`}>
          <div className={`${book.bgColor} p-6 md:p-12 text-center`}>
            <div className={`inline-block p-3 md:p-4 rounded-full bg-white shadow-md mb-4 md:mb-6 ${book.color}`}>
              <Icon size={32} className="md:w-12 md:h-12" />
            </div>
            {/* タイトル：スマホで大きすぎないように調整 */}
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">{book.title}</h1>
            <p className="text-base md:text-xl text-gray-600 font-medium mb-2">{book.subtitle}</p>
            <p className="text-xs md:text-sm text-gray-500">著：{book.author}</p>
          </div>
          
          {/* 導入サマリー */}
          <div className="p-6 md:p-12 border-t border-gray-100">
             <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
               <Star className="text-yellow-400 mr-2 fill-current w-5 h-5 md:w-6 md:h-6" /> 
               この本の結論
             </h2>
             <p className="text-sm md:text-lg text-gray-700 leading-relaxed font-medium">
               {book.summary}
             </p>
          </div>
        </div>

        {/* 詳細コンテンツ */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-12 mb-8 md:mb-10 space-y-8 md:space-y-12">
          {book.content.map((section, index) => {
            
            // コンポーネントの場合
            if (section.type === 'component') {
              return (
                <div key={index} className="my-6 md:my-8">
                  {section.component}
                </div>
              );
            }
            // 通常のテキスト
            return (
              <section key={index}>
                {section.headline && (
                  <h3 className={`text-lg md:text-2xl font-bold mb-3 md:mb-4 pb-2 border-b-2 ${book.borderColor} ${book.color}`}>
                    {section.headline}
                  </h3>
                )}
                <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </section>
            );

          })}
        </div>

        {/* アフィリエイトリンクエリア */}
        <div className="bg-slate-800 text-white rounded-2xl p-6 md:p-8 text-center shadow-lg">
           <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">この本を手に取ってみる</h3>
           <p className="text-slate-300 mb-6 md:mb-8 text-xs md:text-sm">
             投資のテクニックだけでなく、人生の指針となる言葉が詰まっています。<br className="hidden md:block" />
             手元に置いて、迷った時に読み返したい一冊です。
           </p>
           
           {/* ▼▼▼ ここを修正しました（フラグメント <>...</> で囲んでいます） ▼▼▼ */}
           {book.amazonLink ? (
             <>
               <a 
                 href={book.amazonLink} 
                 target="_blank" 
                 rel="noreferrer"
                 className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full transition-transform transform hover:-translate-y-1 shadow-lg text-sm md:text-base"
               >
                 <ShoppingCart className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                 Amazonで詳細を見る
               </a>
               {/* 規約対応用の注記 */}
               <p className="text-[10px] text-slate-400 mt-4 opacity-70">
                 ※本記事はAmazonアソシエイト・プログラムを利用しています
               </p>
             </>
           ) : (
             <span className="text-gray-500 text-xs">リンク準備中</span>
           )}
        </div>

      </div>
    </div>
  );
};

export default BookDetailPage;