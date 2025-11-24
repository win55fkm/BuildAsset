import React from 'react';
import { 
    Trophy, 
    AlertTriangle, 
    TrendingDown, 
    TrendingUp, 
    Zap, 
    Target, 
    ShieldCheck 
} from 'lucide-react';

export const LightningSimulator = () => {
  const [missedDays, setMissedDays] = React.useState(0);
  
  // S&P500 過去30年のデータに基づく概算減少率モデル
  // 0日:100%, 10日:50%, 20日:35%, 30日:17%, 40日:10% と仮定して補間
  const calculateReturn = (days) => {
    if (days === 0) return 100;
    if (days <= 10) return 100 - (days * 5); // 0-10日で50%まで減る
    if (days <= 30) return 50 - ((days - 10) * 1.65); // 10-30日で17%まで減る
    return Math.max(0, 17 - ((days - 30) * 0.5));
  };

  const currentReturn = Math.round(calculateReturn(missedDays));
  const loss = 100 - currentReturn;

  return (
    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl my-8 shadow-xl border border-slate-700">
      <div className="flex items-center gap-2 mb-4 text-yellow-400">
        <Zap fill="currentColor" />
        <h3 className="font-bold text-lg">稲妻シミュレーター</h3>
      </div>
      
      <p className="text-sm text-slate-300 mb-8">
        「市場のベストな日」を何日逃すと、資産はどうなる？<br/>
        スライダーを動かして、タイミング投資の恐ろしさを体感してください。
      </p>

      {/* スライダー */}
      <div className="mb-8 px-2">
        <input 
          type="range" 
          min="0" 
          max="40" 
          step="1" 
          value={missedDays} 
          onChange={(e) => setMissedDays(Number(e.target.value))}
          className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-yellow-500"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
          <span>ずっと保有 (0日)</span>
          <span>ベスト40日を逃す</span>
        </div>
      </div>

      {/* 結果表示 */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-white/10 rounded-xl p-4 border border-white/10">
          <div className="text-xs text-slate-400 mb-1">逃した日数</div>
          <div className="text-2xl font-bold text-white">{missedDays} <span className="text-sm">日</span></div>
        </div>
        <div className={`rounded-xl p-4 border transition-colors duration-300 ${loss > 0 ? 'bg-red-500/20 border-red-500/50' : 'bg-green-500/20 border-green-500/50'}`}>
          <div className="text-xs text-slate-300 mb-1">リターン減少率</div>
          <div className={`text-2xl font-bold ${loss > 0 ? 'text-red-400' : 'text-green-400'}`}>
            {loss === 0 ? "基準値" : `-${loss}%`}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-slate-300 mb-2">あなたの資産価値</p>
        <div className="w-full bg-slate-700 rounded-full h-6 overflow-hidden relative">
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full transition-all duration-500 ease-out" 
            style={{ width: `${currentReturn}%` }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-md">
            {currentReturn}%
          </span>
        </div>
      </div>
    </div>
  );
};

// --- 1. テニスのアナロジー比較 ---
export const TennisAnalogy = () => {
  return (
    <div className="my-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">あなたはどちらのゲームをしていますか？</h3>
        <p className="text-sm text-gray-500">プロとアマチュアでは「勝つためのルール」が真逆です</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* 勝者のゲーム */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 bg-gray-100 px-3 py-1 rounded-bl-lg text-xs font-bold text-gray-500">プロの世界</div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <Trophy size={24} />
            </div>
            <h4 className="font-bold text-lg text-gray-800">勝者のゲーム</h4>
          </div>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start">
              <Target size={16} className="mr-2 mt-1 text-blue-500 shrink-0" />
              <span><strong>得点を奪う</strong>ことで勝つ</span>
            </li>
            <li className="flex items-start">
              <TrendingUp size={16} className="mr-2 mt-1 text-blue-500 shrink-0" />
              <span>華麗なウィニングショットが必要</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle size={16} className="mr-2 mt-1 text-gray-400 shrink-0" />
              <span>敵は「相手プレイヤー」</span>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-100 text-center">
             <span className="text-xs font-bold text-gray-400">投資で言うと...</span>
             <p className="text-sm font-bold text-gray-700">短期売買・個別株選定</p>
          </div>
        </div>

        {/* 敗者のゲーム */}
        <div className="bg-indigo-50 rounded-xl border-2 border-indigo-200 p-6 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 bg-indigo-200 px-3 py-1 rounded-bl-lg text-xs font-bold text-indigo-800">我々の世界</div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-indigo-600 text-white rounded-full">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-bold text-lg text-indigo-900">敗者のゲーム</h4>
          </div>
          <ul className="space-y-3 text-sm text-indigo-900">
            <li className="flex items-start">
              <TrendingDown size={16} className="mr-2 mt-1 text-indigo-600 shrink-0" />
              <span><strong>失点を防ぐ</strong>ことで勝つ</span>
            </li>
            <li className="flex items-start">
              <Target size={16} className="mr-2 mt-1 text-indigo-600 shrink-0" />
              <span>ミスをしないことが最優先</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle size={16} className="mr-2 mt-1 text-indigo-600 shrink-0" />
              <span>敵は「自分自身のミス」</span>
            </li>
          </ul>
           <div className="mt-4 pt-4 border-t border-indigo-200 text-center">
             <span className="text-xs font-bold text-indigo-400">投資で言うと...</span>
             <p className="text-sm font-bold text-indigo-800">インデックス積立・長期保有</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. 稲妻が輝く瞬間チャート (Missing Best Days) ---
export const LightningStrikeChart = () => {
  // S&P500 1995-2024 (概算データに基づく視覚化)
  const data = [
    { label: "保有し続けた", returnVal: 100, color: "bg-indigo-600", textColor: "text-indigo-600", text: "基準 (100%)" },
    { label: "ベスト10日を逃す", returnVal: 50, color: "bg-indigo-400", textColor: "text-indigo-400", text: "利益が半減" },
    { label: "ベスト30日を逃す", returnVal: 17, color: "bg-indigo-300", textColor: "text-indigo-300", text: "-83% 消失" },
  ];

  return (
    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl my-8 shadow-xl relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute -top-10 -right-10 text-yellow-400 opacity-20">
        <Zap size={150} fill="currentColor" />
      </div>

      <h3 className="text-xl font-bold mb-2 flex items-center relative z-10">
        <Zap className="text-yellow-400 mr-2" fill="currentColor" />
        「稲妻が輝く瞬間」を逃すな
      </h3>
      <p className="text-slate-300 text-sm mb-8 relative z-10">
        過去30年間で、相場が最も上昇した「たった30日」を逃すだけで、リターンはここまで激減します。
      </p>

      {/* グラフエリア */}
      <div className="space-y-6 relative z-10">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-bold">{item.label}</span>
              <span className={item.textColor + " font-bold"}>{item.text}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
              <div 
                className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out`} 
                style={{ width: `${item.returnVal}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-white/10 rounded-lg text-xs text-slate-300 border border-white/10 relative z-10">
        <strong>衝撃の事実：</strong><br/>
        ベストな日の多くは、暴落して皆が恐怖で逃げ出した（売却した）直後にやってきます。<br/>
        市場に居続けなければ、稲妻に打たれる（爆益を得る）ことはできません。
      </div>
    </div>
  );
};