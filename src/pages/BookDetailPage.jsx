import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { bookData } from '../data/bookData';

const BookDetailPage = () => {
  const { id } = useParams();
  const book = bookData[id];

  if (!book) {
    return <Navigate to="/" replace />;
  }

  const Icon = book.icon;

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* ナビゲーション */}
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600 font-bold mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2"/> トップに戻る
        </Link>

        {/* ヘッダーエリア */}
        <div className={`bg-white rounded-3xl shadow-sm border ${book.borderColor} overflow-hidden mb-10`}>
          <div className={`${book.bgColor} p-8 md:p-12 text-center`}>
            <div className={`inline-block p-4 rounded-full bg-white shadow-md mb-6 ${book.color}`}>
              <Icon size={48} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{book.title}</h1>
            <p className="text-xl text-gray-600 font-medium mb-2">{book.subtitle}</p>
            <p className="text-sm text-gray-500">著：{book.author}</p>
          </div>
          
          {/* 導入サマリー */}
          <div className="p-8 md:p-12 border-t border-gray-100">
             <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
               <Star className="text-yellow-400 mr-2 fill-current" /> 
               この本の結論
             </h2>
             <p className="text-lg text-gray-700 leading-relaxed font-medium">
               {book.summary}
             </p>
          </div>
        </div>

        {/* 詳細コンテンツ（レンダリングロジック修正版） */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12 mb-10 space-y-12">
          {book.content.map((section, index) => {
            
            // --- 修正箇所：typeによる条件分岐 ---
            if (section.type === 'component') {
              return (
                <div key={index} className="my-8">
                  {section.component}
                </div>
              );
            }
            // 通常のテキスト (デフォルト)
            return (
              <section key={index}>
                {section.headline && (
                  <h3 className={`text-2xl font-bold mb-4 pb-2 border-b-2 ${book.borderColor} ${book.color}`}>
                    {section.headline}
                  </h3>
                )}
                {/* 改行コードを <br/> に変換して表示 */}
                <p className="text-gray-700 leading-loose whitespace-pre-line">
                  {section.body}
                </p>
              </section>
            );
            // -----------------------------------

          })}
        </div>

        {/* アフィリエイトリンクエリア */}
        <div className="bg-slate-800 text-white rounded-2xl p-8 text-center shadow-lg">
           <h3 className="text-xl font-bold mb-4">この本を手に取ってみる</h3>
           <p className="text-slate-300 mb-8 text-sm">
             投資のテクニックだけでなく、人生の指針となる言葉が詰まっています。<br/>
             手元に置いて、迷った時に読み返したい一冊です。
           </p>
           {book.amazonLink ? (
             <a 
               href={book.amazonLink} 
               target="_blank" 
               rel="noreferrer"
               className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold py-4 px-8 rounded-full transition-transform transform hover:-translate-y-1 shadow-lg"
             >
               <ShoppingCart className="mr-2" />
               Amazonで詳細を見る
             </a>
           ) : (
             <span className="text-gray-500 text-xs">リンク準備中</span>
           )}
        </div>

      </div>
    </div>
  );
};

export default BookDetailPage;