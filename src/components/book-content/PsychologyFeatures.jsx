import React, { useState } from 'react';
import { Eye, EyeOff, TrendingUp, Clock } from 'lucide-react';

// --- 1. Rich vs Wealth 比較カード ---
export const RichVsWealth = () => {
  const [mode, setMode] = useState('rich'); // 'rich' or 'wealth'

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 my-8 shadow-sm">
      <h3 className="text-xl font-bold text-center text-slate-800 mb-6">
        あなたはどちらを目指しますか？
      </h3>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setMode('rich')}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            mode === 'rich' 
              ? 'bg-orange-500 text-white shadow-md transform scale-105' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          Rich (金持ち)
        </button>
        <button
          onClick={() => setMode('wealth')}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            mode === 'wealth' 
              ? 'bg-emerald-600 text-white shadow-md transform scale-105' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          Wealth (富豪)
        </button>
      </div>

      <div className="min-h-[200px] flex flex-col items-center justify-center text-center transition-all duration-500">
        {mode === 'rich' ? (
          <div className="space-y-4 animate-in fade-in zoom-in duration-300">
            <div className="bg-orange-100 p-4 rounded-full inline-block text-orange-600">
              <Eye size={48} />
            </div>
            <h4 className="text-2xl font-bold text-orange-600">目に見える成功</h4>
            <p className="text-gray-600 max-w-md mx-auto">
              高級車、豪邸、ブランド品。<br/>
              お金を「使った」結果であり、他人に見せびらかすことができる。<br/>
              <span className="text-sm text-red-500 font-bold block mt-2">弱点：維持費がかかり、資産は減っていく。</span>
            </p>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in zoom-in duration-300">
            <div className="bg-emerald-100 p-4 rounded-full inline-block text-emerald-600">
              <EyeOff size={48} />
            </div>
            <h4 className="text-2xl font-bold text-emerald-600">目に見えない自由</h4>
            <p className="text-gray-600 max-w-md mx-auto">
              まだ使われていないお金（貯蓄、投資）。<br/>
              他人には見えないが、選択肢と時間をコントロールする力を与える。<br/>
              <span className="text-sm text-emerald-600 font-bold block mt-2">真価：嫌な仕事を辞める自由、病気で休む自由。</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 2. バフェットの複利グラフ（修正版） ---
export const BuffettGraph = () => {
  return (
    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl my-8 border border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="text-yellow-400" size={28} />
        <div>
          <h3 className="font-bold text-lg">ウォーレン・バフェットの秘密</h3>
          <p className="text-xs text-slate-400">彼の純資産(約845億ドル)はいつ作られた？</p>
        </div>
      </div>

      {/* グラフエリア */}
      <div className="flex justify-around items-end h-64 pb-8 border-b border-slate-600 mb-4 px-4">
        
        {/* 50歳未満 */}
        <div className="flex flex-col items-center gap-2">
          {/* 常時表示に変更 */}
          <div className="text-sm font-bold text-slate-400 text-center">
            約3億ドル<br/><span className="text-xs font-normal opacity-70">(0.3%)</span>
          </div>
          {/* 高さを h-1 (非常に低い) に設定 */}
          <div className="w-16 md:w-24 h-1 bg-slate-600 rounded-t-lg"></div>
          <span className="text-sm font-bold text-slate-400 mt-1">50歳まで</span>
        </div>

        {/* 50歳以降 */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-xl md:text-2xl font-bold text-yellow-400 text-center mb-1">
            842億ドル<br/><span className="text-sm text-yellow-200 font-normal">(99.7%)</span>
          </div>
          {/* 高さを h-40 (固定値) に変更して確実に表示させる */}
          <div className="w-20 md:w-32 h-40 bg-gradient-to-t from-yellow-600 to-yellow-300 rounded-t-lg shadow-[0_0_20px_rgba(250,204,21,0.3)] animate-pulse"></div>
          <span className="text-sm font-bold text-yellow-400 mt-1">50歳以降</span>
        </div>
        
      </div>

      <div className="bg-white/10 rounded-xl p-4 flex gap-4 items-start">
        <Clock className="text-yellow-400 shrink-0 mt-1" size={20} />
        <div>
          <h4 className="font-bold text-sm mb-1">天才的な投資手腕ではなく「時間」</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            バフェットの凄さは、80年以上も投資の世界から退場せず、複利の坂を転がり続けたことです。<br/>
            <span className="text-yellow-200 font-bold">「そこそこのリターン」×「超長期」＝「最強」</span>
          </p>
        </div>
      </div>
    </div>
  );
};