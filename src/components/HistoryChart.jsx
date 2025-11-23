import React, { useState, useMemo } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush
} from 'recharts';
import { TrendingUp, Calendar, ArrowRight, Coins } from 'lucide-react'; // Coins追加

// 引数（props）で data, title, color を受け取る
export default function HistoryChart({ data = [], title = "積立シミュレーター", color = "#4F46E5" }) {
  
  // ★変更点1: 積立額を固定値から「State（可変）」に変更
  const [monthlyInvest, setMonthlyInvest] = useState(30000); // 初期値3万
  
  // 選択肢の定義（単位：円）
  const investmentOptions = [
    { label: '1万円', value: 10000 },
    { label: '3万円', value: 30000 },
    { label: '5万円', value: 50000 },
    { label: '10万円', value: 100000 },
    { label: '20万円', value: 200000 },
    { label: '30万円', value: 300000 },
  ];

  if (!data || data.length === 0) {
    return <div className="p-10 text-center">データを読み込み中...</div>;
  }

  const [range, setRange] = useState({
    startIndex: 0,
    endIndex: data.length - 1
  });

  const handleBrushChange = (e) => {
    if (e && e.startIndex !== undefined && e.endIndex !== undefined) {
      setRange({ startIndex: e.startIndex, endIndex: e.endIndex });
    }
  };

  const simulation = useMemo(() => {
    const slicedData = data.slice(range.startIndex, range.endIndex + 1);
    if (slicedData.length === 0) return { totalInvested: 0, finalValue: 0, returnRate: 0 };

    let totalUnits = 0;
    let totalInvested = 0;

    slicedData.forEach(item => {
      totalInvested += monthlyInvest;
      totalUnits += monthlyInvest / item.price;
    });

    const finalPrice = slicedData[slicedData.length - 1].price;
    const finalValue = Math.round(totalUnits * finalPrice);
    const profit = finalValue - totalInvested;
    const returnRate = totalInvested > 0 ? ((finalValue / totalInvested) - 1) * 100 : 0;

    return {
      totalInvested,
      finalValue,
      profit,
      returnRate,
      startLabel: slicedData[0].date,
      endLabel: slicedData[slicedData.length - 1].date,
      months: slicedData.length
    };
  }, [range, data, monthlyInvest]); // ★変更点2: monthlyInvestが変わったら再計算

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm max-w-4xl mx-auto my-8">
      
      {/* ヘッダーエリア */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 justify-center md:justify-start">
             <TrendingUp style={{ color: color }} />
             {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            グラフの範囲を動かして、積立期間を変更できます。
          </p>
        </div>

        {/* ★変更点3: 金額選択プルダウン */}
        <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
           <Coins size={20} className="text-gray-400 mr-2" />
           <span className="text-sm text-gray-600 mr-2 font-bold">毎月の積立額:</span>
           <select 
             value={monthlyInvest}
             onChange={(e) => setMonthlyInvest(Number(e.target.value))}
             className="bg-transparent font-bold text-gray-900 focus:outline-none cursor-pointer border-b border-gray-300 hover:border-indigo-500 transition-colors"
           >
             {investmentOptions.map(opt => (
               <option key={opt.value} value={opt.value}>{opt.label}</option>
             ))}
           </select>
        </div>
      </div>

      {/* 結果表示パネル */}
      <div className="bg-slate-800 text-white rounded-xl p-6 mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           {/* 期間表示 */}
           <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm w-full md:w-auto justify-center">
             <Calendar className="text-indigo-300" size={20} />
             <div className="text-sm">
               <span className="font-bold">{simulation.startLabel}</span>
               <ArrowRight size={14} className="inline mx-2" />
               <span className="font-bold">{simulation.endLabel}</span>
               <span className="ml-2 text-indigo-300 text-xs">({Math.floor(simulation.months/12)}年{simulation.months%12}ヶ月)</span>
             </div>
          </div>
          
          {/* 金額結果 */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center md:text-right w-full md:w-auto">
             <div>
                <p className="text-xs text-indigo-300 mb-1">投資元本</p>
                <p className="font-mono text-xl font-bold">{(simulation.totalInvested / 10000).toFixed(1)}<span className="text-sm">万円</span></p>
             </div>
             <div>
                <p className="text-xs text-indigo-300 mb-1">最終評価額</p>
                <p className="font-mono text-3xl font-bold text-yellow-400">{(simulation.finalValue / 10000).toFixed(1)}<span className="text-lg text-white">万円</span></p>
             </div>
             <div>
                <p className="text-xs text-indigo-300 mb-1">リターン</p>
                <p className={`font-mono text-xl font-bold ${simulation.returnRate >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                   {simulation.returnRate > 0 ? '+' : ''}{simulation.returnRate.toFixed(1)}%
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* グラフエリア（変更なし） */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB"/>
            <XAxis dataKey="date" tick={{fontSize: 12}} minTickGap={50} />
            <YAxis hide={true} domain={['dataMin', 'dataMax']} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              formatter={(value) => [value.toFixed(0), "指数"]}
            />
            <Area 
              type="monotone" dataKey="price" stroke={color} strokeWidth={2}
              fillOpacity={1} fill="url(#colorPrice)" animationDuration={300}
            />
            <Brush 
              dataKey="date" height={40} stroke={color} fill="#F3F4F6"
              tickFormatter={() => ""} onChange={handleBrushChange}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

       <p className="text-xs text-gray-400 mt-6 text-center">
        ※上記は実際の過去データ（Yahoo Financeより取得）に基づいたシミュレーションです。<br/>
        ※配当再投資や手数料、税金は考慮されていません。将来の成果を保証するものではありません。
      </p>
    </div>
  );
}