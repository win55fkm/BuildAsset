import React from 'react';
import { 
    TrendingUp, 
    DollarSign, 
    Clock, 
    AlertTriangle, 
    CheckCircle2,
    TimerOff
} from 'lucide-react';

// --- 1. 神様 vs ドルコスト平均法 比較カード ---
export const GodVsDCA = () => {
  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6 md:p-8 my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        「底値で買う神様」vs「コツコツ凡人」
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* 神様 */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">😇</span>
            <h4 className="font-bold text-gray-700">完璧なタイミングの神様</h4>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            暴落の「ド底」を完璧に見極め、そこで全額投資できる（現実には不可能）。
          </p>
          <div className="bg-white p-3 rounded border border-gray-100 text-center">
            <span className="text-xs text-gray-500 block">勝率</span>
            <span className="text-xl font-bold text-gray-400">意外と勝てない</span>
          </div>
        </div>

        {/* DCA */}
        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-200 text-emerald-800 text-xs font-bold px-2 py-1 rounded-bl">WINNER</div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🧑‍💻</span>
            <h4 className="font-bold text-emerald-900">ただ買い続ける凡人</h4>
          </div>
          <p className="text-sm text-emerald-800 mb-4">
            タイミングを無視して、給料が入るたびに即座に投資し続けた人。
          </p>
          <div className="bg-white/60 p-3 rounded border border-emerald-100 text-center">
             <span className="text-xs text-emerald-600 block">勝率</span>
             <span className="text-xl font-bold text-emerald-600">70%以上で勝利</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">
        <strong className="text-emerald-700 block mb-1">なぜ神様が負けるのか？</strong>
        「底値」を待っている間、お金を現金のまま遊ばせてしまうからです（機会損失）。
        市場は基本右肩上がりなので、待機している時間が長いほどリターンは押し下げられます。
        <strong className="block mt-2">結論：タイミングを計るより「早く市場に置く」が正義。</strong>
      </div>
    </div>
  );
};

// --- 2. 一括投資 vs 分割投資 ---
export const LumpSumVsDCA = () => {
  return (
    <div className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="text-emerald-600" />
        <h3 className="text-lg font-bold text-gray-900">Q. まとまった資金（100万円など）があるなら？</h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-emerald-600 text-white p-5 rounded-xl shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-lg">一括投資</h4>
            <span className="bg-white/20 text-xs px-2 py-1 rounded">推奨</span>
          </div>
          <div className="text-3xl font-bold mb-1">68% <span className="text-sm font-normal">の勝率</span></div>
          <p className="text-emerald-100 text-xs leading-relaxed">
            すぐに全額市場に投じる。<br/>
            「機会損失」を最小化できるため、統計的には分割投資よりもリターンが高くなる。
          </p>
        </div>

        <div className="flex-1 bg-white border border-gray-200 p-5 rounded-xl text-gray-600">
           <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-gray-800">分割投資 (DCA)</h4>
            <span className="bg-gray-100 text-xs px-2 py-1 rounded">心理的安心</span>
          </div>
          <div className="text-3xl font-bold mb-1 text-gray-400">32% <span className="text-sm font-normal">の勝率</span></div>
          <p className="text-xs leading-relaxed">
            時間を分散してリスクを減らす。<br/>
            「暴落が怖い」という心理的な守りには有効だが、リターンは一括に劣後しやすい。
          </p>
        </div>
      </div>
    </div>
  );
};

// --- 3. マイホーム購入の3条件 ---
export const HomeBuyingRules = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-8">
      <h3 className="text-center font-bold text-gray-800 mb-6">
        マイホーム購入の3つの鉄則
      </h3>
      <div className="space-y-3">
        {[
          "その土地に「10年以上」住む予定があるか？",
          "仕事と私生活は「安定的」か？",
          "維持費を含めても「経済的余裕」があるか？"
        ].map((rule, i) => (
          <div key={i} className="flex items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
            <CheckCircle2 className="text-emerald-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700 font-bold text-sm">{rule}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center">
        どれか1つでも欠けるなら、「賃貸」の方が経済的に有利な可能性が高いです。
      </p>
    </div>
  );
};

export const OpportunityCostCalc = () => {
  const [cash, setCash] = React.useState(300); // 万円
  
  // 年利5%で機会損失を計算 (1年あたりの逸失利益)
  const lostPerYear = Math.round(cash * 0.05);
  const lost3Years = Math.round(cash * (Math.pow(1.05, 3) - 1));

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8 my-8">
       <div className="flex items-center gap-2 mb-4 text-slate-800">
        <TimerOff className="text-red-500" size={24} />
        <h3 className="font-bold text-lg">「待ち」のコスト計算機</h3>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        「暴落が来たら買おう」と思って寝かせている現金はありませんか？<br/>
        そのお金が、ただ銀行に眠っている間に失っている「見えない利益」を計算します。
      </p>

      <div className="mb-6">
        <label className="text-xs font-bold text-gray-500 block mb-1">待機させている現金 (万円)</label>
        <div className="flex items-center gap-2">
           <input 
             type="number" 
             value={cash} 
             onChange={(e) => setCash(Number(e.target.value))} 
             className="flex-1 p-3 rounded-lg border border-gray-300 text-lg font-bold shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none"
           />
           <span className="font-bold text-gray-600">万円</span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-red-100 p-4 shadow-sm">
        <h4 className="text-sm font-bold text-red-600 mb-3 border-b border-red-50 pb-2">あなたが捨てている期待リターン</h4>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">1年待つと...</span>
          <span className="text-xl font-bold text-gray-800">
            -{lostPerYear.toLocaleString()}<span className="text-sm text-gray-500">万円</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">暴落を3年待ち続けると...</span>
          <span className="text-2xl font-bold text-red-500">
            -{lost3Years.toLocaleString()}<span className="text-sm text-red-300">万円</span>
          </span>
        </div>
        
        <p className="text-xs text-gray-400 mt-3 text-right">
          ※全世界株式等の平均的な期待リターン(年利5%)で試算
        </p>
      </div>
      
      <div className="mt-4 text-xs text-slate-500 bg-slate-100 p-3 rounded">
        <strong>解説：</strong> 暴落で20%安く買えたとしても、それが3年後であれば、その間の上昇分（約15-20%）を取り逃がしているため、トータルでは得をしていない可能性が高いのです。
      </div>
    </div>
  );
};