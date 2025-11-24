import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HistoryChart from '../components/HistoryChart'; // 作成したチャートを読み込み
import { generateSp500Data } from '../data/mockData'; // データを読み込み

const sp500Data = generateSp500Data(); // データ生成

const Sp500Page = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* トップに戻るボタン */}
        <Link to="/" className="inline-flex items-center text-indigo-600 font-bold mb-8 hover:underline">
          <ArrowLeft size={20} className="mr-2"/> トップに戻る
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">S&P500 過去チャート検証</h1>
        <p className="text-gray-600 mb-8">
          過去のデータに基づき、積立シミュレーションを行います。<br/>
          グラフ下のバーを操作して、期間を変更してみてください。
        </p>

        {/* チャートコンポーネントの表示 */}
        <HistoryChart 
            data={sp500Data} 
            title="S&P500 積立シミュレーション" 
            color="#4F46E5" // インディゴ（青）
        />
        
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2">このデータの見方</h3>
          <p className="text-sm text-gray-600">
            初期状態では1950年からの全期間が表示されています。<br/>
            「ITバブル崩壊（2000年頃）」や「リーマンショック（2008年）」の直前から積立を始めた場合でも、
            長期で保有し続ければ資産が増えていることを確認してみましょう。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sp500Page;