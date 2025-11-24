import React, { useState } from 'react';
import { 
    Target, 
    TrendingUp, 
    Search, 
    Lock, 
    ChevronDown, 
    ChevronUp, 
    Brain,
    Percent,
    ArrowRight
} from 'lucide-react';

// --- 1. 猿のダーツ投げ (Monkey Darts) ---
export const MonkeyDarts = () => {
  return (
    <div className="bg-white rounded-2xl border border-indigo-100 p-6 md:p-8 my-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* イラストエリア */}
        <div className="w-full md:w-1/3 flex justify-center">
           <div className="relative">
             <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-4xl">
               🐵
             </div>
             <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md border border-gray-100">
               <Target className="text-red-500" size={24} />
             </div>
           </div>
        </div>

        {/* テキストエリア */}
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            「目隠しした猿」vs「金融のプロ」
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            バートン・マルキール教授の有名な主張です。<br/>
            「目隠しをした猿が新聞の相場欄にダーツを投げて選んだポートフォリオと、専門家が慎重に選んだポートフォリオの成績は、長期的には変わらない」
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
            <h4 className="font-bold text-indigo-900 text-sm mb-2 flex items-center">
              <Brain className="mr-2" size={16}/>
              なぜプロが勝てないのか？
            </h4>
            <ul className="text-xs text-indigo-800 space-y-1 ml-1">
              <li>・プロ同士が戦うことで価格が適正化される（効率的市場）</li>
              <li>・プロは高額な手数料（コスト）がかかる</li>
              <li>・プロも人間であり、感情に流される</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. 効率的市場仮説アコーディオン ---
export const MarketEfficiencyAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "弱形効率性 (Weak Form)",
      subtitle: "テクニカル分析は無意味",
      icon: TrendingUp,
      content: "「過去の株価パターン」はすでに現在の価格に織り込まれているため、チャート分析で将来を予測することはできない。"
    },
    {
      title: "準強形効率性 (Semi-Strong Form)",
      subtitle: "ファンダメンタルズ分析も無意味",
      icon: Search,
      content: "ニュース、決算情報、アナリストレポートなど「公開されているすべての情報」は瞬時に価格に反映されるため、ニュースを見て売買しても勝てない。"
    },
    {
      title: "強形効率性 (Strong Form)",
      subtitle: "インサイダー情報すら無意味？",
      icon: Lock,
      content: "会社の内部情報を含む「あらゆる情報」が価格に反映されている状態。（※現実にはインサイダー取引は違法であり利益が出る可能性があるが、市場はこれに近い状態にあるとされる）"
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-center font-bold text-gray-800 mb-6">
        市場はどこまで「効率的」なのか？
      </h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${openIndex === index ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm md:text-base">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.subtitle}</div>
                </div>
              </div>
              {openIndex === index ? <ChevronUp size={20} className="text-gray-400"/> : <ChevronDown size={20} className="text-gray-400"/>}
            </button>
            
            {openIndex === index && (
              <div className="px-4 pb-4 pl-[4.5rem] pr-6">
                <p className="text-sm text-gray-600 leading-relaxed border-l-2 border-indigo-200 pl-3">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-gray-500 mt-4">
        結論：どんな情報を使っても、プロが市場平均（インデックス）を持続的に上回ることは極めて難しい。
      </p>
    </div>
  );
};

export const FeeSimulator = () => {
  const [amount, setAmount] = React.useState(1000); // 万円
  const [years, setYears] = React.useState(30);
  const returnRate = 0.05; // 年利5%

  // 計算ロジック
  const calculate = (fee) => {
    const netRate = returnRate - (fee / 100);
    // FV = PV * (1 + r)^n
    return Math.round(amount * Math.pow(1 + netRate, years));
  };

  const indexResult = calculate(0.1); // インデックス (信託報酬 0.1%)
  const activeResult = calculate(1.5); // アクティブ (信託報酬 1.5%)
  const diff = indexResult - activeResult;

  return (
    <div className="bg-indigo-50 rounded-2xl border border-indigo-200 p-6 md:p-8 my-8">
      <div className="flex items-center gap-2 mb-4 text-indigo-900">
        <Percent className="bg-indigo-200 p-1 rounded-full" size={24} />
        <h3 className="font-bold text-lg">コストの破壊力シミュレーター</h3>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        「手数料1%の違い」なんて誤差だと思いますか？<br/>
        30年後の未来、その1%がベンツ1台分の差になります。
      </p>

      {/* 入力エリア */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label className="text-xs font-bold text-gray-500 block mb-1">投資元本 (万円)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full p-2 rounded border border-gray-300 text-center font-bold" />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 block mb-1">運用期間 (年)</label>
          <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full p-2 rounded border border-gray-300 text-center font-bold" />
        </div>
      </div>

      {/* 結果比較 */}
      <div className="space-y-4">
        {/* インデックス */}
        <div className="bg-white p-4 rounded-xl border-l-4 border-indigo-500 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-end relative z-10">
            <div>
              <span className="text-xs font-bold text-indigo-500 block">インデックス (手数料 0.1%)</span>
              <span className="text-2xl font-bold text-gray-800">{indexResult.toLocaleString()}万円</span>
            </div>
            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded font-bold">Winner</span>
          </div>
        </div>

        {/* アクティブ */}
        <div className="bg-white p-4 rounded-xl border-l-4 border-gray-400 shadow-sm opacity-80 relative overflow-hidden">
           <div className="flex justify-between items-end relative z-10">
            <div>
              <span className="text-xs font-bold text-gray-500 block">アクティブ (手数料 1.5%)</span>
              <span className="text-2xl font-bold text-gray-600">{activeResult.toLocaleString()}万円</span>
            </div>
            <div className="text-right">
               <span className="text-xs text-red-500 font-bold block">手数料負け</span>
               <span className="text-sm font-bold text-red-500">-{diff.toLocaleString()}万円</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-center text-gray-500 mt-4">
        ※年利5%で運用した場合の試算。プロが市場平均と同じ成績を出せたと仮定しても、手数料だけでこれだけの差がつきます。
      </p>
    </div>
  );
};