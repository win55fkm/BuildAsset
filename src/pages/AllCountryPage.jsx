import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HistoryChart from '../components/HistoryChart'; // 作成したチャートを読み込み
import { generateAllCountryData } from '../data/mockData'; // オルカン用データ

const allCountryData = generateAllCountryData();

const AllCountryPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-emerald-600 font-bold mb-8 hover:underline">
           <ArrowLeft size={20} className="mr-2"/> トップに戻る
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">全世界株式（オルカン） 検証</h1>
        <p className="text-gray-600 mb-8">
           米国だけでなく、新興国を含む全世界に分散投資した場合のシミュレーションです。<br/>
           S&P500よりリターンは控えめですが、リスクも分散されています。
        </p>

        {/* データを渡す（色は緑系にしてみる） */}
        <HistoryChart 
           data={allCountryData} 
           title="オルカン 積立シミュレーション" 
           color="#059669" // エメラルド（緑）
        />
      </div>
    </div>
  );
};

export default AllCountryPage;