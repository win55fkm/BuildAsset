import React, { useState } from 'react';
import {
    CheckCircle2,
    Circle,
    Coins,
    TrendingUp,
    ShieldAlert,
    ArrowRight,
    UserCheck,
    Ban,
    Scale
} from 'lucide-react';

// --- 1. 7つの知恵 自己診断チェックリスト ---
export const SevenCuresChecklist = () => {
  const [checked, setChecked] = useState(new Array(7).fill(false));

  const cures = [
    { title: "1. 収入の十分の一を貯金せよ", desc: "まずは自分自身に支払う。これが全ての始まり。" },
    { title: "2. 欲望に優先順位をつけよ", desc: "必要なものと、欲しいものを混同していないか？" },
    { title: "3. 蓄えた金を働かせよ", desc: "お金を「奴隷」にして、子（利子）を産ませているか？" },
    { title: "4. 危険や天敵から金を堅守せよ", desc: "元本保証のない怪しい儲け話に手を出していないか？" },
    { title: "5. より良きところに住め", desc: "住居は単なる消費ではなく、生活の質を高める投資。" },
    { title: "6. 今日から未来の生活に備えよ", desc: "老後や不測の事態への備え（保険・年金）はあるか？" },
    { title: "7. 自分こそを最大の資本とせよ", desc: "稼ぐ力（人的資本）を高める努力をしているか？" }
  ];

  const handleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const score = checked.filter(Boolean).length;

  return (
    <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-200 my-8 shadow-sm">
      <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center">
        <CheckCircle2 className="mr-2" />
        あなたは実践できていますか？「黄金のチェックリスト」
      </h3>
      
      <div className="space-y-4 mb-8">
        {cures.map((cure, index) => (
          <div 
            key={index}
            onClick={() => handleCheck(index)}
            className={`flex items-start p-4 rounded-xl border transition-all cursor-pointer hover:shadow-md ${
              checked[index] 
                ? 'bg-white border-amber-400 shadow-sm' 
                : 'bg-white/50 border-amber-100 text-gray-500'
            }`}
          >
            <div className={`mt-1 mr-4 ${checked[index] ? 'text-amber-500' : 'text-gray-300'}`}>
              {checked[index] ? <CheckCircle2 size={24} /> : <Circle size={24} />}
            </div>
            <div>
              <div className={`font-bold ${checked[index] ? 'text-gray-900' : 'text-gray-500'}`}>
                {cure.title}
              </div>
              <div className="text-xs md:text-sm mt-1 opacity-80">
                {cure.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 診断結果エリア */}
      <div className="bg-white rounded-xl p-6 text-center border border-amber-100">
        <p className="text-sm text-gray-500 mb-2">現在の習得レベル</p>
        <div className="text-3xl font-bold text-amber-600 mb-2">
          {score} / 7 <span className="text-base font-normal text-gray-400">Items</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-amber-500 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${(score / 7) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm font-bold text-gray-700">
          {score === 7 ? "素晴らしい！あなたはバビロンの大富豪の資質があります。" : 
           score >= 4 ? "良い調子です。残りの習慣も身につけましょう。" : 
           "まずは「第一の知恵」から始めましょう。"}
        </p>
      </div>
    </div>
  );
};

// --- 2. 1/10貯金シミュレーター ---
export const SavingsSimulator = () => {
  const [income, setIncome] = useState(25); // 万円

  // 10%貯蓄
  const monthlySave = income * 0.1;
  const yearlySave = monthlySave * 12;
  
  // 30年後の計算（単利 vs 複利5%）
  const years = 30;
  const totalPrincipal = yearlySave * years;
  
  // 複利計算: 積立額 * ((1+r)^n - 1) / r
  const r = 0.05 / 12;
  const n = years * 12;
  const totalCompound = (monthlySave * 10000) * (Math.pow(1 + r, n) - 1) / r / 10000;

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 md:p-8 my-8 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 text-yellow-500">
        <Coins size={120} />
      </div>

      <h3 className="text-xl font-bold mb-2 relative z-10">「第一の知恵」シミュレーター</h3>
      <p className="text-slate-300 text-sm mb-8 relative z-10">
        もし、給料の1/10を「なかったこと」にして、年利5%で運用し続けたら？
      </p>

      <div className="mb-8 relative z-10">
        <label className="block text-sm font-medium mb-2 text-slate-300">
          あなたの手取り月収: <span className="text-yellow-400 font-bold text-xl">{income}万円</span>
        </label>
        <input 
          type="range" 
          min="15" 
          max="100" 
          step="1" 
          value={income} 
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-yellow-400"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-2">
          <span>15万円</span>
          <span>100万円</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 relative z-10">
        <div className="bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Coins className="text-slate-400" size={18} />
            <span className="text-sm font-bold text-slate-300">毎月の貯蓄額（10%）</span>
          </div>
          <div className="text-2xl font-bold">{monthlySave.toFixed(1)} <span className="text-sm">万円</span></div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-600/40 rounded-xl p-4 border border-yellow-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-yellow-400" size={18} />
            <span className="text-sm font-bold text-yellow-200">30年後の資産額（年利5%）</span>
          </div>
          <div className="text-3xl font-bold text-yellow-400">
            {Math.round(totalCompound).toLocaleString()} <span className="text-base">万円</span>
          </div>
          <div className="text-xs text-yellow-200/70 mt-1">
            (元本: {Math.round(totalPrincipal)}万円 + 利息: {Math.round(totalCompound - totalPrincipal)}万円)
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-slate-900/50 rounded-lg text-xs text-slate-400 leading-relaxed border border-white/5 relative z-10">
        <ShieldAlert size={14} className="inline mr-1 mb-0.5" />
        <strong>アルカドの教え：</strong><br/>
        「残りの{Math.round(income * 0.9)}万円で生活しなさい。不思議なことに、10%を先に抜いても生活水準は変わらないものだ。」
      </div>
    </div>
  );
};

// --- 3. 5つの黄金法則デザイン ---
export const GoldenLaws = () => {
  const laws = [
    {
      id: 1,
      icon: Coins,
      title: "第一の法則：【貯蓄】",
      text: "家族と自分の将来のために、収入の十分の一以上を蓄える者の元には、黄金は自らを膨らませながら喜んでやってくるだろう。",
      color: "text-yellow-600",
      bg: "bg-yellow-100"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "第二の法則：【投資】",
      text: "黄金に稼げる勤め先（投資先）を見つけてやり、群れを増やす羊飼いのように賢明に扱えば、黄金は懸命に働くだろう。",
      color: "text-indigo-600",
      bg: "bg-indigo-100"
    },
    {
      id: 3,
      icon: UserCheck,
      title: "第三の法則：【助言】",
      text: "黄金の扱いに秀でた者（専門家や良書）の助言に、熱心に耳を傾ける持ち主からは、黄金が離れることはないだろう。",
      color: "text-emerald-600",
      bg: "bg-emerald-100"
    },
    {
      id: 4,
      icon: ShieldAlert,
      title: "第四の法則：【防衛】",
      text: "自分が理解していない商いや、黄金の防衛に秀でた者が否定する商いに投資してしまう持ち主からは、黄金は離れていくだろう。",
      color: "text-red-600",
      bg: "bg-red-100",
      warning: true
    },
    {
      id: 5,
      icon: Ban,
      title: "第五の法則：【回避】",
      text: "非現実的な利益（一攫千金）を出そうとしたり、甘い誘惑の言葉に乗ったりする者からは、黄金は逃げることになるだろう。",
      color: "text-slate-600",
      bg: "bg-slate-200",
      warning: true
    }
  ];

  return (
    <div className="my-10">
      {/* 石板風のヘッダー */}
      <div className="bg-gradient-to-r from-amber-700 to-yellow-600 p-6 rounded-t-2xl shadow-lg text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <h3 className="text-2xl font-bold text-white relative z-10 flex justify-center items-center">
          <Scale className="mr-3" /> 五つの黄金法則
        </h3>
        <p className="text-yellow-100 text-sm mt-2 relative z-10">
          アルカドが息子に託した、富を守り抜くための石板
        </p>
      </div>

      {/* 法則リスト */}
      <div className="bg-amber-50 border-x-2 border-b-2 border-amber-200 rounded-b-2xl p-4 md:p-8 space-y-4">
        {laws.map((law) => (
          <div 
            key={law.id} 
            className={`bg-white p-5 rounded-xl border-l-4 shadow-sm flex flex-col md:flex-row gap-4 transition-transform hover:scale-[1.01] ${
              law.warning ? 'border-red-400' : 'border-amber-400'
            }`}
          >
            {/* 左側：番号とアイコン */}
            <div className="flex-shrink-0 flex items-center md:flex-col md:justify-center md:w-20">
              <div className={`w-12 h-12 ${law.bg} rounded-full flex items-center justify-center ${law.color} mb-1 shadow-inner`}>
                <law.icon size={24} />
              </div>
              <span className="ml-3 md:ml-0 text-2xl font-bold text-gray-300 font-serif">
                #{law.id}
              </span>
            </div>

            {/* 右側：テキスト */}
            <div>
              <h4 className={`font-bold text-lg mb-2 ${law.color}`}>
                {law.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                {law.text}
              </p>
              {law.warning && (
                <p className="text-xs text-red-500 mt-2 bg-red-50 inline-block px-2 py-1 rounded">
                  ※ 現代の「詐欺」や「狼狽売り」への警告
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};