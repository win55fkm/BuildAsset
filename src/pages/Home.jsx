import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookData } from '../data/bookData';
import {
  Activity,
  AlertOctagon,
  AlertTriangle,
  Anchor,
  ArrowDown,
  ArrowRight,
  Award,
  BarChart2,
  Beer,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Car,
  CheckCircle,
  CheckCircle2,
  Cigarette,
  Clock,
  Coffee,
  Coins,
  FileText,
  Globe,
  HeartPulse,
  HelpCircle,
  Landmark,
  Layers,
  Lightbulb,
  Menu,
  Percent,
  PieChart,
  Plane,
  Quote,
  RefreshCw,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sun,
  Target,
  TrendingDown,
  TrendingUp,
  Unlock,
  User,
  Users,
  Wallet,
  X,
  XCircle
} from 'lucide-react';

// --- 共通コンポーネント ---

const Section = ({ title, subtitle, children, id, icon: Icon, className = "" }) => (
  <section id={id} className={`py-12 md:py-24 px-4 md:px-12 max-w-5xl mx-auto ${className}`}>
    <div className="mb-8 md:mb-12 text-center">
      {Icon && (
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
            <Icon size={28} className="md:w-8 md:h-8" />
          </div>
        </div>
      )}
      {/* タイトル：スマホで小さく、PCで大きく */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{title}</h2>
      {/* サブタイトル：スマホではtext-sm */}
      {subtitle && <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const Card = ({ title, children, className = "", highlight = false }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 ${highlight ? 'ring-2 ring-indigo-500' : ''} ${className}`}>
    <div className="p-5 md:p-8 h-full">
      {title && <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">{title}</h3>}
      <div className="text-gray-600 leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </div>
  </div>
);

const InfoBox = ({ type = "info", title, children }) => {
  const colors = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    danger: "bg-red-50 border-red-200 text-red-800",
    purple: "bg-purple-50 border-purple-200 text-purple-800"
  };
  
  return (
    <div className={`border-l-4 p-4 rounded-r-lg my-4 ${colors[type]}`}>
      {title && <h4 className="font-bold mb-2 text-sm md:text-base">{title}</h4>}
      <div className="text-xs md:text-base leading-relaxed">{children}</div>
    </div>
  );
};

const TabGroup = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50 scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-bold whitespace-nowrap transition-colors flex-shrink-0 ${
              activeTab === index 
                ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-5 md:p-8">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const RiskSection = () => (
  <Section id="step5" title="Chapter 5: リスクを知る" subtitle="「最悪の事態」を想定しておけば、不安が和らぐ" icon={AlertTriangle} className="bg-red-50/30">
    <div className="space-y-8 md:space-y-12">
      
      {/* 導入 */}
      <div className="text-center max-w-3xl mx-auto mb-4 md:mb-8">
        <p className="text-gray-700 leading-loose text-sm md:text-base">
          投資における「リスク」とは、「危険」という意味ではなく、<br className="hidden md:block" />
          <strong>「振れ幅（リターンがどれくらいブレるか）」</strong>のことです。<br className="hidden md:block" />
          あらかじめ「最大でどれくらい下がる可能性があるか」を想定できていると、<br className="hidden md:block" />
          実際にそれが起きた時も冷静に対処できます。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        
        {/* 1. 市場暴落リスク */}
        <div className="bg-white p-5 md:p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center text-base md:text-lg">
            <TrendingDown className="text-red-500 mr-2" />
            1. 市場全体の暴落
          </h4>
          <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
            大災害、パンデミック、戦争、金融危機などで、世界中の株価が一斉に下がることがあります。
          </p>
          <div className="bg-red-50 p-4 rounded-lg mb-4">
             <div className="flex justify-between items-center border-b border-red-200 pb-2 mb-2">
               <span className="text-xs font-bold text-red-800">過去の最大級の暴落</span>
               <span className="text-base md:text-lg font-bold text-red-600">-50% 前後</span>
             </div>
             <p className="text-xs text-red-700 leading-relaxed">
               1000万円が、一時的に500万円になる可能性があります。<br className="hidden md:block"/>
               しかし過去の歴史上、世界経済はその後<strong>数年かけて必ず回復し、最高値を更新</strong>してきました。
             </p>
          </div>
          <div className="text-xs text-gray-500 flex items-center">
            <AlertOctagon size={14} className="mr-1 flex-shrink-0"/>
            <span>対策：暴落時も絶対に売らず、嵐が過ぎるのを待つ。</span>
          </div>
        </div>

        {/* 2. 為替リスク */}
        <div className="bg-white p-5 md:p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center text-base md:text-lg">
            <Globe className="text-indigo-500 mr-2" />
            2. 為替リスク（円高・円安）
          </h4>
          <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
            外国の資産（S&P500やオルカン）を買うということは、間接的に「ドルなどの外貨」を持つことになります。
          </p>
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between text-xs md:text-sm bg-indigo-50 p-2 rounded">
              <span>円安になる（100円→150円）</span>
              <span className="font-bold text-indigo-600">資産価値 UP ⤴</span>
            </div>
            <div className="flex items-center justify-between text-xs md:text-sm bg-orange-50 p-2 rounded">
              <span>円高になる（150円→100円）</span>
              <span className="font-bold text-orange-600">資産価値 DOWN ⤵</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            株価が上がっても、急激な「円高」が進むと、日本円での受取額が減る可能性があります。こればかりはコントロールできません。
          </p>
        </div>

        {/* 3. 金利リスク */}
        <div className="bg-white p-5 md:p-6 rounded-xl border-l-4 border-yellow-500 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center text-base md:text-lg">
            <Scale className="text-yellow-500 mr-2" />
            3. 金利の変動
          </h4>
          <p className="text-xs md:text-sm text-gray-600 mb-3 leading-relaxed">
            「金利」と「株価」はシーソーの関係にあります。
          </p>
          <ul className="text-xs md:text-sm text-gray-600 space-y-2 list-disc list-inside bg-gray-50 p-3 rounded">
            <li>金利が上がる → 企業はお金を借りにくい → 株価は下がりやすい</li>
            <li>金利が下がる → 企業はお金を借りやすい → 株価は上がりやすい</li>
          </ul>
          <p className="text-xs text-gray-400 mt-2">※債券などを混ぜることで、この影響をマイルドにすることができます。</p>
        </div>

        {/* 4. インフレリスク */}
        <div className="bg-white p-5 md:p-6 rounded-xl border-l-4 border-gray-500 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center text-base md:text-lg">
            <Anchor className="text-gray-500 mr-2" />
            4. インフレリスク（現金の死）
          </h4>
          <p className="text-xs md:text-sm text-gray-600 mb-3 leading-relaxed">
            「投資は怖いから現金で持つ」というのは、安全なようで実は<strong>「確実に資産が目減りするリスク」</strong>を負っています。
          </p>
          <div className="bg-gray-100 p-3 rounded text-center mb-2">
            <span className="text-xs text-gray-500 block">物価が年2%上昇すると...</span>
            <span className="font-bold text-gray-700 text-sm md:text-base">20年後、現金の価値は約67%に下落</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            「暴落」は戻る可能性がありますが、インフレで失われた現金の価値は戻りません。
          </p>
        </div>
      </div>

      {/* 結論：リスク許容度 */}
      <div className="bg-indigo-900 text-white p-6 md:p-8 rounded-2xl shadow-lg mt-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">結局、どうすればいいのか？</h3>
        <p className="text-indigo-100 mb-6 leading-relaxed text-sm md:text-base">
          未来を予測することは誰にもできません。<br className="hidden md:block"/>
          唯一の対策は、<strong>「最悪（資産が半分になること）を想定し、許容できる金額の範囲内で投資すること」</strong>です。
        </p>
        <div className="inline-block bg-white/10 backdrop-blur border border-white/20 px-6 py-4 rounded-xl">
          <p className="font-bold text-base md:text-lg text-yellow-400 mb-2">鉄の掟：生活防衛資金を守る</p>
          <p className="text-xs md:text-sm text-indigo-200 leading-relaxed">
            生活費の6ヶ月〜1年分は必ず「現金」で確保する。<br className="hidden md:block"/>
            暴落時に生活費のために株を売ることほど、悲惨なことはありません。<br className="hidden md:block"/>
            「余剰資金」でやる限り、あなたは市場の変動を笑ってやり過ごせます。
          </p>
        </div>
      </div>

    </div>
  </Section>
);

const ActionSection = () => (
  <Section id="step6" title="Chapter 6: 最強の武器と実践" subtitle="NISA（ニーサ）を正しく理解し、最初の行動を起こす" icon={ShieldCheck} className="bg-gradient-to-b from-indigo-50 to-white">
    <div className="space-y-12 max-w-4xl mx-auto">
      
      {/* 1. NISAの定義 */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-indigo-100 shadow-sm">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="bg-indigo-100 p-2 rounded-full text-indigo-600 mr-3 flex-shrink-0"><Landmark size={24}/></span>
          NISA（ニーサ）とは？
        </h3>
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <p className="font-bold text-gray-800 mb-2 text-sm md:text-base">Nippon Individual Savings Account（少額投資非課税制度）</p>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            これは特定の怪しい投資商品などではなく、国が国民の資産形成を支援するために作った<strong>「税金がかからない特別な口座（非課税口座）」</strong>のことです。<br className="hidden md:block"/>
            通常、投資で得た利益には税金がかかりますが、この口座内で取引した利益に関しては、国が「税金を取らない」と定めています。
          </p>
        </div>
      </div>

      {/* 2. Action 01: 口座開設 */}
      <div>
        <div className="flex items-center mb-6">
          <div className="bg-indigo-600 text-white font-bold px-4 py-1 rounded-full mr-4 shadow-sm text-sm">Action 01</div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">証券口座を開設する</h3>
        </div>
        
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          銀行口座とは別に、株式を売買するための「証券口座」が必要です。<br className="hidden md:block"/>
          ここで<span className="font-bold text-indigo-600">NISA口座</span>を選ぶことで、将来手元に残る金額が大きく変わります。
        </p>

        {/* グラフエリア */}
        <div className="flex flex-row justify-center gap-4 md:gap-16 items-end max-w-3xl mx-auto pb-8 pt-4">
          {/* ... グラフ部分はレイアウトが複雑なのでそのまま維持しますが、文字サイズは調整済み ... */}
          <div className="w-1/2 max-w-[220px] flex flex-col justify-end group">
             <div className="mb-4 flex flex-col items-center justify-end h-20">
               <p className="text-center font-bold text-gray-500 text-xs md:text-base">
                 通常の口座<br/><span className="text-[10px] md:text-xs font-normal">(特定口座)</span>
               </p>
             </div>
             <div className="w-full flex flex-col items-center">
               <div className="w-full h-32 flex flex-col relative">
                  <div className="w-full h-[20%] border-2 border-red-200 border-dashed border-b-0 rounded-t-xl relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,_#fee2e2_0px,_#fee2e2_10px,_#ffffff_10px,_#ffffff_20px)] opacity-70"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-red-600 text-white text-[8px] md:text-xs font-bold px-2 py-0.5 rounded shadow-sm z-10 animate-pulse">
                        TAX(引かれる)
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-[80%] bg-gray-200 border-x border-gray-300 flex items-center justify-center text-gray-500 font-bold text-xs md:text-sm relative z-10 shadow-sm">
                    <div className="text-center">
                      <span className="text-[10px] md:text-xs block text-gray-400">手取り</span>
                      <span className="text-xs md:text-base text-gray-600">約80%</span>
                    </div>
                  </div>
                  <div className="absolute -left-2 top-2 md:-left-20 md:top-0 text-red-500 text-xs font-bold flex flex-col items-center">
                     <span className="text-sm md:text-lg font-bold">−20%</span>
                     <span className="hidden md:inline text-[10px]">引かれる</span>
                  </div>
               </div>
               <div className="w-full h-32 bg-slate-500 rounded-b-xl flex items-center justify-center text-white font-bold shadow-lg z-20 border-t border-slate-400">
                 <span className="text-xs md:text-lg tracking-widest">投資元本</span>
               </div>
             </div>
          </div>

          <div className="w-1/2 max-w-[220px] flex flex-col justify-end relative transform md:scale-105 transition-transform duration-500">
             <div className="mb-4 flex flex-col items-center justify-end h-20">
                <span className="bg-yellow-400 text-yellow-900 text-[8px] md:text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap mb-2 animate-bounce">
                  これを使わないと損
                </span>
                <p className="text-center font-bold text-indigo-700 text-xs md:text-base">
                  NISA口座<br/><span className="text-[10px] md:text-xs font-normal">(非課税)</span>
                </p>
             </div>
             <div className="w-full flex flex-col items-center shadow-2xl rounded-xl">
               <div className="w-full h-32 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-t-xl flex flex-col items-center justify-center text-yellow-900 font-bold border border-yellow-500/30 z-10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 opacity-20"><Sparkles size={24} /></div>
                 <span className="text-base md:text-2xl drop-shadow-sm">利益</span>
                 <span className="text-[10px] md:text-sm bg-white/20 px-3 py-0.5 rounded-full mt-1 border border-white/30">まるごと受取</span>
               </div>
               <div className="w-full h-32 bg-slate-600 rounded-b-xl flex items-center justify-center text-white font-bold shadow-inner z-20 border-t border-slate-500">
                 <span className="text-xs md:text-lg tracking-widest">投資元本</span>
               </div>
             </div>
          </div>
        </div>
        <p className="text-center text-[10px] md:text-xs text-gray-500 mt-2 pb-4">※イメージ図です。実際の税額は利益に対して20.315%となります。</p>
      </div>

      {/* 3. NISAのスペック表 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h4 className="font-bold text-gray-800 text-center text-sm md:text-base">現在のNISA制度（新NISA）の仕組み</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm text-left min-w-[300px]">
            <thead className="text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-2 md:px-4 py-3 w-1/4">項目</th>
                <th className="px-2 md:px-4 py-3 text-indigo-700 w-1/3 bg-indigo-50">つみたて投資枠</th>
                <th className="px-2 md:px-4 py-3 text-emerald-700 w-1/3 bg-emerald-50">成長投資枠</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-100">
                <td className="px-2 md:px-4 py-4 font-bold text-gray-900">年間投資上限</td>
                <td className="px-2 md:px-4 py-4 font-bold text-indigo-600">120万円 / 年</td>
                <td className="px-2 md:px-4 py-4 font-bold text-emerald-600">240万円 / 年</td>
              </tr>
              <tr className="bg-white border-b border-gray-100">
                <td className="px-2 md:px-4 py-4 font-bold text-gray-900">対象商品</td>
                <td className="px-2 md:px-4 py-4 text-gray-600">金融庁が厳選した<br/>長期積立向きの投信</td>
                <td className="px-2 md:px-4 py-4 text-gray-600">投資信託に加え、<br/>個別株も購入可能</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-2 md:px-4 py-4 font-bold text-gray-900">併用</td>
                <td className="px-2 md:px-4 py-4 text-center font-bold text-gray-700" colSpan="2">
                  可能（合計で年間 <span className="text-base md:text-lg">360万円</span> まで）
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-yellow-50 text-xs md:text-sm text-gray-700 border-t border-yellow-100">
          <p className="font-bold mb-1 flex items-center"><Lightbulb size={14} className="mr-1 text-yellow-600"/>最短5年で枠を埋められる</p>
          <p>年間360万円 × 5年 ＝ 1800万円（生涯上限）。もちろん、月1万円からなど少額でも全く問題ありません。</p>
        </div>
      </div>

      {/* 4. Action 02: 積立設定 */}
      <div>
        <div className="flex items-center mb-6">
          <div className="bg-indigo-600 text-white font-bold px-4 py-1 rounded-full mr-4 shadow-sm text-sm">Action 02</div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">購入設定（積立）をする</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
             <h4 className="font-bold text-gray-800 mb-4 border-b pb-2 text-base">設定の流れ</h4>
             <ol className="space-y-4 text-sm text-gray-600 flex-1">
               <li className="flex items-start"><span className="bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">1</span>証券口座に入金（またはクレカ登録）</li>
               <li className="flex items-start"><span className="bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">2</span>商品を選ぶ（eMAXIS Slim 全世界株式など）</li>
               <li className="flex items-start"><span className="bg-indigo-100 text-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">3</span>「つみたて投資枠」で毎月〇万円と入力</li>
               <li className="flex items-start"><span className="bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">4</span>設定完了！あとは放置</li>
             </ol>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-100 shadow-sm">
             <h4 className="font-bold text-green-900 mb-4 flex items-center text-base"><Unlock className="mr-2" size={20}/>柔軟なルール</h4>
             <p className="text-sm text-gray-700 mb-4 leading-relaxed">
               投資した資産は、いつでも売却して現金に戻せます。結婚・住宅・教育資金など、必要な時に必要な分だけ取り崩せばOKです。
             </p>
             <div className="bg-white/60 p-3 rounded text-xs text-green-800 border border-green-200">
               <strong>注意点：</strong><br className="hidden md:block"/>
               売却しても、その年に使った「年間非課税枠」は戻ってきません。（翌年になれば、売却した元本分の枠が復活します）
             </div>
          </div>
        </div>
      </div>

      {/* 5. SBI証券誘導 (CTA) */}
      <div className="border-t border-gray-200 pt-10">
        <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">NISAを始めるなら「SBI証券」がおススメ</h3>
            <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto">
                手数料、ポイント還元、使いやすさ。どれをとっても国内No.1のシェアを誇ります。<br className="hidden md:block"/>
                迷ったらここを選んでおけば、将来後悔することはありません。
            </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border-2 border-indigo-100 overflow-hidden max-w-3xl mx-auto transform transition hover:shadow-2xl">
            <div className="bg-gradient-to-r from-slate-50 to-indigo-50 p-4 border-b border-indigo-100 flex justify-between items-center">
                <span className="font-bold text-indigo-900 flex items-center text-sm md:text-base"><Award className="mr-2 text-yellow-500"/>Recommended</span>
                <div className="text-xs text-gray-500">ネット証券口座開設数 No.1</div>
            </div>
            <div className="p-6 md:p-10 text-center">
                <div className="grid grid-cols-3 gap-2 mb-8 text-xs md:text-sm">
                    <div className="flex flex-col items-center p-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2 text-indigo-600"><Coins size={20} className="md:w-6 md:h-6"/></div>
                        <span className="font-bold text-gray-700 block">売買手数料</span>
                        <span className="text-base md:text-lg font-bold text-red-500">0円</span>
                    </div>
                    <div className="flex flex-col items-center p-2 border-l border-r border-gray-100">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2 text-yellow-600"><Sparkles size={20} className="md:w-6 md:h-6"/></div>
                        <span className="font-bold text-gray-700 block">ポイント</span>
                        <span className="text-[10px] md:text-xs text-gray-500 mt-1">Vポイント等が貯まる</span>
                    </div>
                    <div className="flex flex-col items-center p-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 text-green-600"><CheckCircle size={20} className="md:w-6 md:h-6"/></div>
                        <span className="font-bold text-gray-700 block">銘柄数</span>
                        <span className="text-[10px] md:text-xs text-gray-500 mt-1">業界最高水準</span>
                    </div>
                </div>
                
                {/* Affiliate Link Button */}
                <a 
                  href="https://www.sbisec.co.jp/ETGate/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-lg md:text-xl py-4 md:py-5 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  SBI証券で無料口座開設
                  <span className="block text-[10px] md:text-xs font-normal mt-1 opacity-90">※最短5分・マイナンバーカード対応</span>
                </a>
                
                <p className="mt-4 md:mt-6 text-[10px] md:text-xs text-gray-400 leading-relaxed">
                    本サイトはアフィリエイトプログラムを利用して商品を紹介しています。<br className="hidden md:block"/>
                    キャンペーン内容等は変更になる場合があります。公式サイトで最新情報をご確認ください。
                </p>
            </div>
        </div>
      </div>

    </div>
  </Section>
);

// --- カスタム図解コンポーネント ---

// 複利効果の視覚化
const CompoundInterestVisualizer = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-4 md:p-6 rounded-xl border border-indigo-100 my-6">
      <h5 className="text-center font-bold text-gray-800 mb-2 text-base md:text-lg">1000万円を年利5%で運用した場合</h5>
      <p className="text-center text-xs text-gray-500 mb-6">時間が経つほど、その差は圧倒的に開きます</p>
      
      <div className="grid grid-cols-2 gap-2 md:gap-8">
        {/* 単利の世界 */}
        <div className="flex flex-col items-center space-y-2 border-r border-gray-200 pr-2 md:pr-4">
          <div className="text-xs md:text-sm font-bold text-gray-500 bg-gray-200 px-2 md:px-3 py-1 rounded-full mb-2">単利（貯金）</div>
          <div className="space-y-4 w-full">
            <div className="flex justify-between items-center text-xs md:text-sm p-2 bg-white rounded border border-gray-100">
              <span className="text-gray-500 scale-90 origin-left">1年目</span>
              <span className="font-mono font-bold">1050万</span>
            </div>
            <div className="flex flex-col items-center text-gray-300"><ArrowDown size={12} /></div>
            <div className="flex justify-between items-center text-xs md:text-sm p-2 bg-white rounded border border-gray-100">
              <span className="text-gray-500 scale-90 origin-left">10年目</span>
              <span className="font-mono font-bold">1500万</span>
            </div>
            <div className="flex flex-col items-center text-gray-300"><ArrowDown size={12} /></div>
            <div className="flex justify-between items-center font-bold text-gray-700 bg-gray-200 p-2 md:p-3 rounded shadow-sm text-xs md:text-sm">
              <span className="scale-90 origin-left">30年目</span>
              <span className="font-mono text-sm md:text-lg">2500万</span>
            </div>
          </div>
          <div className="text-[10px] text-gray-500 mt-2 text-center">毎年+50万</div>
        </div>

        {/* 複利の世界 */}
        <div className="flex flex-col items-center space-y-2 pl-2 md:pl-4">
          <div className="text-xs md:text-sm font-bold text-white bg-indigo-500 px-2 md:px-3 py-1 rounded-full shadow-md mb-2">複利（投資）</div>
          <div className="space-y-4 w-full">
            <div className="flex justify-between items-center text-xs md:text-sm p-2 bg-indigo-50 rounded border border-indigo-100 text-indigo-900">
              <span className="text-indigo-400 scale-90 origin-left">1年目</span>
              <span className="font-mono font-bold">1050万</span>
            </div>
            <div className="flex flex-col items-center text-indigo-300"><ArrowDown size={12} /></div>
            <div className="flex justify-between items-center text-xs md:text-sm p-2 bg-indigo-50 rounded border border-indigo-100 text-indigo-900">
              <span className="text-indigo-400 scale-90 origin-left">10年目</span>
              <span className="font-mono font-bold">1629万</span>
            </div>
            <div className="flex flex-col items-center text-indigo-400 font-bold"><ArrowDown size={20} /></div>
            <div className="flex justify-between items-center font-bold text-white bg-indigo-600 p-2 md:p-3 rounded shadow-lg transform scale-105 text-xs md:text-sm">
              <span className="scale-90 origin-left">30年目</span>
              <span className="font-mono text-sm md:text-lg">4321万</span>
            </div>
          </div>
          <div className="text-[10px] text-indigo-600 mt-2 text-center font-bold">加速して増える！</div>
        </div>
      </div>
      <p className="text-center text-xs text-indigo-500 mt-6 font-bold">
        30年後の差額：<span className="text-base md:text-lg mx-1 text-red-500">1821万円</span>
      </p>
    </div>
  );
};


const HabitSimulator = () => {
  const [selectedHabit, setSelectedHabit] = useState('coffee');
  
  const habits = {
    coffee: { 
      label: '毎日カフェラテ', 
      price: 500, 
      freq: '毎日',
      desc: '仕事前の至福の一杯。でも...',
      icon: Coffee,
      color: 'bg-amber-100 text-amber-700'
    },
    lunch: { 
      label: 'コンビニ弁当', 
      price: 800, 
      freq: '毎日',
      desc: 'ついつい買っちゃうお昼ご飯',
      icon: ShoppingBag,
      color: 'bg-orange-100 text-orange-700'
    },
    drink: { 
      label: '週1回の飲み会', 
      price: 5000, 
      freq: '週1回',
      desc: '付き合いの飲み会、2次会まで...',
      icon: Beer,
      color: 'bg-yellow-100 text-yellow-700'
    },
    subsc: { 
      label: '不要なサブスク', 
      price: 2000, 
      freq: '月額',
      desc: '見てない動画サイトやジム代',
      icon: Coins,
      color: 'bg-purple-100 text-purple-700'
    },
  };

  // 年利5%で30年運用した計算
  const calculateAsset = (price, type) => {
    let monthly = 0;
    if (type === '毎日') monthly = price * 30;
    if (type === '週1回') monthly = price * 4;
    if (type === '月額') monthly = price;

    const r = 0.05 / 12; // 月利
    const n = 30 * 12;   // 30年
    // 積立計算式: P * ((1+r)^n - 1) / r
    const futureValue = monthly * (Math.pow(1 + r, n) - 1) / r;
    
    return {
      monthly: monthly,
      total: Math.round(futureValue / 10000)
    };
  };

  const result = calculateAsset(habits[selectedHabit].price, habits[selectedHabit].freq);
  const SelectedIcon = habits[selectedHabit].icon;

  return (
    <div className="bg-white p-5 md:p-8 rounded-2xl border-2 border-indigo-100 shadow-lg my-8 md:my-10">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          <span className="text-indigo-600">「ちりつも」</span>資産変換シミュレーター
        </h3>
        <p className="text-gray-600 text-xs md:text-sm">
          今のその習慣、投資に回していたら30年後どうなっていた？
        </p>
      </div>

      {/* 習慣選択ボタン */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {Object.entries(habits).map(([key, data]) => {
          const Icon = data.icon;
          const isSelected = selectedHabit === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedHabit(key)}
              className={`p-3 md:p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 ${
                isSelected 
                  ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200 transform scale-105' 
                  : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50'
              }`}
            >
              <div className={`p-2 rounded-full ${data.color}`}>
                <Icon size={20} className="md:w-6 md:h-6" />
              </div>
              <span className={`text-[10px] md:text-xs font-bold ${isSelected ? 'text-indigo-700' : 'text-gray-600'}`}>
                {data.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* 結果表示エリア */}
      <div className="bg-gradient-to-br from-slate-800 to-indigo-900 rounded-2xl p-5 md:p-6 text-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <SelectedIcon size={150} />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3 md:space-y-4">
            <div>
              <p className="text-indigo-200 text-[10px] md:text-xs font-bold tracking-widest mb-1">SELECTED HABIT</p>
              <div className="flex items-center gap-3">
                 <div className={`p-2 rounded-lg ${habits[selectedHabit].color} bg-white/10 backdrop-blur`}>
                    <SelectedIcon size={20} className="text-white md:w-6 md:h-6"/>
                 </div>
                 <div>
                   <h4 className="text-lg md:text-xl font-bold">{habits[selectedHabit].label}</h4>
                   <p className="text-xs md:text-sm text-indigo-200">
                     {habits[selectedHabit].price.toLocaleString()}円 / {habits[selectedHabit].freq}
                   </p>
                 </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-3 md:p-4 border border-white/10">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-xs md:text-sm text-indigo-200">月間の出費</span>
                 <span className="font-mono font-bold text-base md:text-lg">{result.monthly.toLocaleString()}円</span>
               </div>
               <div className="flex justify-between items-center text-[10px] md:text-xs text-indigo-300 border-t border-white/10 pt-2 mt-2">
                 <span>30年間の総出費</span>
                 <span>{(result.monthly * 12 * 30 / 10000).toFixed(1)}万円</span>
               </div>
            </div>
          </div>

          <div className="text-center md:text-right">
             <p className="text-indigo-200 text-xs md:text-sm mb-2">これを年利5%で運用していたら...</p>
             <div className="inline-block">
               <span className="text-4xl md:text-6xl font-bold text-yellow-400 tracking-tighter">
                 {result.total}
               </span>
               <span className="text-lg md:text-xl font-bold ml-2">万円</span>
             </div>
             <p className="text-[10px] md:text-xs text-indigo-300 mt-2">
               ベンツが買える金額が、お腹の中に消えていませんか？
             </p>
          </div>
        </div>
      </div>
      
      <p className="text-center text-[10px] md:text-xs text-gray-400 mt-4">
        ※年利5%で30年間複利運用した場合の試算（税引前）。
      </p>
    </div>
  );
};

// ドルコスト平均法の視覚化
const DcaVisualizer = () => (
  <div className="bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-200 my-6">
    <h5 className="text-center font-bold text-gray-800 mb-6 text-sm md:text-base">毎月千円分「リンゴ」を買うとしたら？</h5>
    <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-8">
      <div className="text-center w-full">
        <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold inline-block mb-2">値段が高い月</div>
        <div className="text-gray-500 text-xs md:text-sm mb-2">1個 500円</div>
        <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-3 md:p-4 flex justify-center gap-1">
          {[...Array(2)].map((_, i) => <div key={i} className="w-5 h-5 md:w-6 md:h-6 bg-red-400 rounded-full shadow-sm"></div>)}
        </div>
        <p className="mt-2 font-bold text-gray-700 text-sm md:text-base">2個しか買えない</p>
        <p className="text-[10px] md:text-xs text-gray-500">（高値掴みを防止）</p>
      </div>
      <div className="hidden md:block text-gray-400"><ArrowRight size={32} /></div>
      <div className="md:hidden text-gray-400"><ArrowDown size={24} /></div>
      <div className="text-center w-full">
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold inline-block mb-2">値段が安い月（暴落）</div>
        <div className="text-gray-500 text-xs md:text-sm mb-2">1個 250円</div>
        <div className="bg-white rounded-lg border-2 border-blue-200 p-3 md:p-4 flex justify-center gap-1">
          {[...Array(4)].map((_, i) => <div key={i} className="w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full shadow-sm"></div>)}
        </div>
        <p className="mt-2 font-bold text-blue-600 text-sm md:text-base">4個も買える！</p>
        <p className="text-[10px] md:text-xs text-gray-500">（安く大量に仕込める）</p>
      </div>
    </div>
  </div>
);

// 投資信託の仕組み視覚化
const MutualFundVisualizer = () => (
  <div className="bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-200 my-6 text-center">
    <h5 className="text-center font-bold text-gray-800 mb-6 text-sm md:text-base">投資信託（ファンド）の仕組み</h5>
    <div className="relative max-w-md mx-auto">
      <div className="flex justify-between px-4 mb-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm"><User size={16} className="text-gray-500 md:w-5 md:h-5"/></div>
            <ArrowDown size={14} className="text-indigo-300 mt-1"/>
          </div>
        ))}
      </div>
      <div className="bg-white border-2 border-indigo-200 rounded-xl p-4 md:p-6 relative z-10 shadow-lg mb-4">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap">ファンド（大きな財布）</div>
        <Building2 className="mx-auto text-indigo-400 mb-2 md:w-10 md:h-10" size={32} />
        <p className="text-[10px] md:text-xs text-gray-500">プロが運用・管理</p>
      </div>
      <ArrowDown size={20} className="mx-auto text-indigo-400 mb-2"/>
      <div className="grid grid-cols-3 gap-2">
        {['Apple', 'Toyota', 'Amazon'].map((name, i) => (
          <div key={i} className="bg-green-50 p-2 rounded border border-green-100 text-[10px] md:text-xs font-bold text-green-800">{name}</div>
        ))}
      </div>
      <p className="text-[10px] md:text-xs text-gray-400 mt-2">数百〜数千社へ分散投資</p>
    </div>
  </div>
);

// ポートフォリオ円グラフ
const PortfolioChart = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm my-6">
    <h5 className="text-center font-bold text-gray-800 mb-6 text-sm md:text-base">理想的なポートフォリオ例（コア・サテライト戦略）</h5>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
      <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg flex-shrink-0" 
           style={{ background: `conic-gradient(#4F46E5 0% 70%, #10B981 70% 90%, #F59E0B 90% 100%)` }}>
        <div className="absolute inset-0 m-auto bg-white w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center">
          <span className="text-[10px] md:text-xs font-bold text-gray-500">Total<br/>100%</span>
        </div>
      </div>
      <div className="space-y-3 w-full max-w-xs text-xs md:text-sm">
        <div className="flex items-start">
          <span className="w-3 h-3 rounded bg-indigo-600 mt-1 mr-2 flex-shrink-0"></span>
          <div><div className="font-bold">インデックス投信 (70%)</div><p className="text-xs text-gray-500">【コア】守りの要。全世界株式など</p></div>
        </div>
        <div className="flex items-start">
          <span className="w-3 h-3 rounded bg-emerald-500 mt-1 mr-2 flex-shrink-0"></span>
          <div><div className="font-bold">債券 (20%)</div><p className="text-xs text-gray-500">【バランサー】暴落時のクッション</p></div>
        </div>
        <div className="flex items-start">
          <span className="w-3 h-3 rounded bg-amber-500 mt-1 mr-2 flex-shrink-0"></span>
          <div><div className="font-bold">個別株・REIT (10%)</div><p className="text-xs text-gray-500">【サテライト】楽しみ・攻め枠</p></div>
        </div>
      </div>
    </div>
  </div>
);

// --- メインアプリケーション ---

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // シミュレーション用State
  const [principal, setPrincipal] = useState(0);
  const [monthly, setMonthly] = useState(5);
  const [years, setYears] = useState(30);
  const [rate, setRate] = useState(5);
  const [result, setResult] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);

  useEffect(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    let futureValue = principal * 10000;
    for (let i = 0; i < n; i++) futureValue = futureValue * (1 + r) + (monthly * 10000);
    setResult(Math.round(futureValue / 10000));
    setTotalInvested(principal + (monthly * years * 12));
  }, [principal, monthly, years, rate]);

  const navItems = [
    { id: 'step1', label: '1. 目的とマインド', icon: Target },
    { id: 'step2', label: '2. 先人の知恵', icon: BookOpen },
    { id: 'step3', label: '3. 勝利の法則', icon: Activity },
    { id: 'step4', label: '4. 最適な商品', icon: PieChart },
    { id: 'step5', label: '5. 暴落への備え', icon: AlertTriangle },
    { id: 'step6', label: '6. 実践・NISA', icon: ShieldCheck },
    { id: 'step7', label: '7. 未来のビジョン', icon: ArrowRight },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans selection:bg-indigo-100">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="bg-indigo-600 text-white p-1.5 rounded-lg mr-2"><TrendingUp size={20} /></div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">AssetBuild</span>
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-xs lg:text-sm font-medium transition-colors hover:text-indigo-600 ${activeSection === item.id ? 'text-indigo-600' : 'text-gray-500'}`}>{item.label}</button>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-indigo-600">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
                  <div className="flex items-center"><item.icon size={18} className="mr-3" />{item.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="hero" className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 tracking-wide">資産形成 入門編</div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight">
            賢明な投資家のための<br className="hidden md:block" />
            <span className="text-indigo-600">理論と実践バイブル</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            「なんとなく怖い」を「確固たる自信」へ。<br className="hidden md:block" />
            安心して投資を始めるための、歴史とデータが示す「答え」をここに。
          </p>
          <button onClick={() => scrollToSection('step1')} className="bg-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center mx-auto">
            投資を始める理由を知る <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      {/* Chapter 1: step1 */}
      <Section id="step1" title="Chapter 1: 目的とマインドセット" subtitle="なぜ投資が必要で、どう考えるべきか？" icon={Target}>
        <div className="space-y-12 md:space-y-16">
          <div className="text-center mb-8">
             <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-4">何のために投資をするのでしょうか？</h3>
             <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-loose text-left md:text-center">
               投資は、「お金持ち」だけがやるものではありません。<br className="hidden md:block" />
               一発逆転に賭け、「成功者」になるためのギャンブルでもありません。<br className="hidden md:block" />
               投資は、あなたの人生を守り、自由にし、豊かにするための<strong>資産形成の1つの「手段」</strong>です。<br/><br className="hidden md:block" />
               まずは資産形成に興味を持つきっかけとして、<strong>初めに心得ておくべき基本の「キ」</strong>をまとめています。<br className="hidden md:block" />
               一人でも多くの方が安心して初めの一歩を踏み出せるようになってくれたら幸いです。
             </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-6 text-center">投資の「4つの目的」</h3>
            <div className="grid md:grid-cols-2 gap-6">
            
              {/* 1. お金に働かせる */}
              <div className="bg-orange-50 p-5 md:p-6 rounded-xl border border-orange-100">
                <div className="flex items-center mb-3 text-orange-600"><Building2 size={24} className="mr-2"/><h4 className="font-bold text-base md:text-lg">1. 自分以外の「稼ぎ手」をつくる</h4></div>
                <p className="text-sm text-gray-700 leading-relaxed">自分一人の労働力と時間には限界があります。投資とは、世界中の企業にお金を託し、<strong>「自分の代わりに働いてもらう」</strong>ことです。超優秀なエリートがあなたが寝ている間にも、汗水流し利益を生み出します。株主となることで、あなたはその利益の一部を享受し続けることができます。これが株式投資の本質です</p>
              </div>

              {/* 2. インフレ対策 */}
              <div className="bg-red-50 p-5 md:p-6 rounded-xl border border-red-100">
                <div className="flex items-center mb-3 text-red-600"><Shield size={24} className="mr-2"/><h4 className="font-bold text-base md:text-lg">2. インフレから資産を守る</h4></div>
                <p className="text-sm text-gray-700 leading-relaxed">物価上昇が進むインフレ時代の今、物価が2倍になれば、銀行に寝かせている現金の価値は実質半減します。現金は株のように「暴落」することはありませんが、<strong>「持ち続ける」こと自体が資産上のリスク</strong>なのです。物価上昇を上回る「成長する資産」を持つ必要があります。</p>
              </div>

              {/* 3. 自由と選択肢 */}
              <div className="bg-yellow-50 p-5 md:p-6 rounded-xl border border-yellow-100">
                <div className="flex items-center mb-3 text-yellow-600"><Sun size={24} className="mr-2"/><h4 className="font-bold text-base md:text-lg">3. 人生の「選択肢」を増やす</h4></div>
                <p className="text-sm text-gray-700 leading-relaxed">十分な資産があれば、生活費のために嫌々働く必要がなくなります。「いつでも辞められる」という心の余裕は、日々のストレスを減らし、本当にやりたいことに挑戦する<strong>自由と選択肢</strong>をあなたに与えてくれます。これが、誰もが今すぐ投資を始める最大の目的です。</p>
              </div>

              {/* 4. 成長の享受 */}
              <div className="bg-green-50 p-5 md:p-6 rounded-xl border border-green-100">
                <div className="flex items-center mb-3 text-green-600"><Users size={24} className="mr-2"/><h4 className="font-bold text-base md:text-lg">4. 人口増加という後ろ盾</h4></div>
                <p className="text-sm text-gray-700 leading-relaxed">「世界の人口は2080年まで増加し続ける」<br/>
                これが、資産形成の手段として世界経済に投資を行う最大の安心材料となります。人口が増えると、そこに衣食住の需要が生まれ、労働が行われます。この原則がある限り、市場経済は成長と発展を続けます。</p>
              </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div>
            <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-6 text-center">富裕層の方程式</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card title="真のお金持ちとは？" highlight>
                <p className="mb-4 text-sm text-gray-500">資産額ではなく「マインド」の差です。</p>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-900 mb-2 text-sm md:text-base">❌ 見せかけの金持ち</h4>
                    <p className="text-xs md:text-sm text-indigo-800">収入が増えても生活水準を上げてしまい、いつまでも満たされることはない。結局、お金は残らない。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-2 text-sm md:text-base">⭕ 真のお金持ち</h4>
                    <p className="text-xs md:text-sm text-green-800">足るを知り、収入の範囲内で暮らし、余剰資金を種銭として育てることができる。</p>
                  </div>
                </div>
              </Card>
              <Card title="最初の目標：1000万円の壁">
                <p className="mb-4 text-sm md:text-base">0から1000万円を作るのが最も過酷ですが、ここを超えると資産増加スピードが劇的に変わります。</p>
                <div className="bg-indigo-600 text-white p-4 rounded-lg text-center shadow-md">
                   <p className="font-bold text-base md:text-lg mb-1">資産 1000万円 × 年利 5%</p>
                   <p className="text-xl md:text-2xl font-bold text-yellow-400">＝ 年間 +50万円</p>
                   <p className="text-[10px] md:text-xs mt-2 text-indigo-200 leading-relaxed">株式であれば、1000万円分を保有している限り<br className="hidden md:block"/>労働せずとも年利分資産が増え続けます。<br className="hidden md:block"/>毎年ボーナスが1回増える感覚です。</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <HabitSimulator />

      {/* Chapter 2: Wisdom */}
      <Section id="step2" title="Chapter 2: 先人の知恵" subtitle="SNSなどの情報ではなく、名著から原則を学ぶ" icon={BookOpen}>
        <div className="bg-indigo-50 p-6 md:p-8 rounded-2xl border border-indigo-100 mb-10 shadow-sm">
          <h3 className="text-lg md:text-2xl font-bold text-indigo-900 mb-6 text-center flex items-center justify-center"><BookOpen className="mr-3 w-6 h-6 md:w-8 md:h-8" />名著たちが辿り着いた「3つの共通結論」</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm flex flex-col items-center text-center">
              <BarChart2 size={32} className="text-indigo-500 mb-4 md:w-10 md:h-10"/>
              <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">長期インデックス積立</h4>
              <p className="text-xs md:text-sm text-gray-600">個別株ではなく市場全体を長期で積み立てることが、最も再現性が高い。</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm flex flex-col items-center text-center">
              <AlertTriangle size={32} className="text-indigo-500 mb-4 md:w-10 md:h-10"/>
              <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">短期売買は負ける</h4>
              <p className="text-xs md:text-sm text-gray-600">短期売買はプロでも難しい。長い時間で見ればインデックスに劣後する。</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm flex flex-col items-center text-center">
              <Clock size={32} className="text-indigo-500 mb-4 md:w-10 md:h-10"/>
              <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">タイミングを計らない</h4>
              <p className="text-xs md:text-sm text-gray-600">市場変動を無視し、淡々と機械的に買い続けることが正解。</p>
            </div>
          </div>
        </div>

        {/* 書籍紹介エリアのタイトルブロック */}
        <div className="text-center mb-10 mt-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full mb-4 border border-indigo-100">
             <BookOpen size={16} className="mr-2" />
             <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase">Must Read Books</span>
          </div>
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">
            知識は名著から。<br className="md:hidden"/>資産形成のバイブル5選
          </h3>
          <p className="text-gray-500 text-xs md:text-base max-w-2xl mx-auto">
            数ある投資本の中から、時代を超えて読み継がれる「本物」を厳選しました。<br className="hidden md:block"/>
            信頼できる理論/知識を身に付けることこそが、投資を行う上での最大の自信と安心となります。<br/>
          </p>
        </div>

        <TabGroup tabs={[
          { 
            label: "1. バビロンの大富豪", 
            content: (
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">入門</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">お金の基礎・原理原則</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{bookData.babylon.title}</h4>
                <p className="text-gray-600 mb-6 text-xs md:text-sm">{bookData.babylon.summary}</p>
                
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-left max-w-xl mx-auto mb-8 shadow-sm">
                  <h5 className="font-bold text-gray-700 text-[10px] md:text-xs mb-3 border-b border-slate-200 pb-2">この本の論点</h5>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-amber-500 mr-2 mt-0.5 shrink-0"/>収入の1/10を貯金し、種銭を作る</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-amber-500 mr-2 mt-0.5 shrink-0"/>欲望に優先順位をつけ、予算内で暮らす</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-amber-500 mr-2 mt-0.5 shrink-0"/>蓄えた金を働かせ、複利の恩恵を受ける</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-amber-500 mr-2 mt-0.5 shrink-0"/>自分自身（人的資本）に投資する</li>
                  </ul>
                </div>

                <Link to="/books/babylon" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md text-xs md:text-sm">
                  詳しく学ぶ <ArrowRight size={16} className="ml-2"/>
                </Link>
              </div>
            ) 
          },
          { 
            label: "2. サイコロジー", 
            content: (
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">初級</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">投資マインド・行動心理</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{bookData.psychology.title}</h4>
                <p className="text-gray-600 mb-6 text-xs md:text-sm">{bookData.psychology.summary}</p>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-left max-w-xl mx-auto mb-8 shadow-sm">
                  <h5 className="font-bold text-gray-700 text-[10px] md:text-xs mb-3 border-b border-slate-200 pb-2">この本の論点</h5>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-purple-500 mr-2 mt-0.5 shrink-0"/>成功は知性ではなく「振る舞い」で決まる</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-purple-500 mr-2 mt-0.5 shrink-0"/>「富（Wealth）」と「リッチ」は違う</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-purple-500 mr-2 mt-0.5 shrink-0"/>足るを知り、ゴールポストを動かさない</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-purple-500 mr-2 mt-0.5 shrink-0"/>合理性より「夜安眠できる」計画を立てる</li>
                  </ul>
                </div>

                <Link to="/books/psychology" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md text-xs md:text-sm">
                  詳しく学ぶ <ArrowRight size={16} className="ml-2"/>
                </Link>
              </div>
            ) 
          },
          { 
            label: "3. 敗者のゲーム", 
            content: (
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">中級</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">インデックス投資入門</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{bookData.loser.title}</h4>
                <p className="text-gray-600 mb-6 text-xs md:text-sm">{bookData.loser.summary}</p>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-left max-w-xl mx-auto mb-8 shadow-sm">
                  <h5 className="font-bold text-gray-700 text-[10px] md:text-xs mb-3 border-b border-slate-200 pb-2">この本の論点</h5>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-blue-500 mr-2 mt-0.5 shrink-0"/>投資はミスをしない「敗者のゲーム」</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-blue-500 mr-2 mt-0.5 shrink-0"/>稲妻が輝く瞬間（ベストな日）を逃すな</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-blue-500 mr-2 mt-0.5 shrink-0"/>市場に「居続ける」ことが最大の鍵</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-blue-500 mr-2 mt-0.5 shrink-0"/>低コストなインデックスファンドを選ぶ</li>
                  </ul>
                </div>

                <Link to="/books/loser" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md text-xs md:text-sm">
                  詳しく学ぶ <ArrowRight size={16} className="ml-2"/>
                </Link>
              </div>
            ) 
          },
          { 
            label: "4. JUST KEEP BUYING", 
            content: (
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">中級</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">データ分析・入金力</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{bookData.buying.title}</h4>
                <p className="text-gray-600 mb-6 text-xs md:text-sm">{bookData.buying.summary}</p>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-left max-w-xl mx-auto mb-8 shadow-sm">
                  <h5 className="font-bold text-gray-700 text-[10px] md:text-xs mb-3 border-b border-slate-200 pb-2">この本の論点</h5>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-emerald-500 mr-2 mt-0.5 shrink-0"/>タイミングを計らず「ただ買い続けろ」</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-emerald-500 mr-2 mt-0.5 shrink-0"/>底値買いの「神様」でも積立には勝てない</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-emerald-500 mr-2 mt-0.5 shrink-0"/>貧しい時は人的資本、富める時は金融資本</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-emerald-500 mr-2 mt-0.5 shrink-0"/>現金を遊ばせる機会損失を避ける</li>
                  </ul>
                </div>

                <Link to="/books/buying" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md text-xs md:text-sm">
                  詳しく学ぶ <ArrowRight size={16} className="ml-2"/>
                </Link>
              </div>
            ) 
          },
          { 
            label: "5. ランダム・ウォーカー", 
            content: (
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">上級</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">金融理論・歴史</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{bookData.random.title}</h4>
                <p className="text-gray-600 mb-6 text-xs md:text-sm">{bookData.random.summary}</p>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-left max-w-xl mx-auto mb-8 shadow-sm">
                  <h5 className="font-bold text-gray-700 text-[10px] md:text-xs mb-3 border-b border-slate-200 pb-2">この本の論点</h5>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-indigo-500 mr-2 mt-0.5 shrink-0"/>株価の短期的予測は不可能（ランダム・ウォーク）</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-indigo-500 mr-2 mt-0.5 shrink-0"/>プロも「猿のダーツ投げ」には勝てない</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-indigo-500 mr-2 mt-0.5 shrink-0"/>テクニカル・ファンダメンタル分析の限界</li>
                     <li className="flex items-start"><CheckCircle2 size={16} className="text-indigo-500 mr-2 mt-0.5 shrink-0"/>効率的市場仮説とインデックスの優位性</li>
                  </ul>
                </div>

                <Link to="/books/random" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md text-xs md:text-sm">
                  詳しく学ぶ <ArrowRight size={16} className="ml-2"/>
                </Link>
              </div>
            ) 
          }
        ]} />
        
        <div className="mt-12">
          <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertTriangle size={120} className="text-amber-900" />
            </div>
            
            <h4 className="text-lg md:text-xl font-bold text-amber-900 mb-6 flex items-center relative z-10">
              <span className="bg-amber-500 text-white p-2 rounded-lg mr-3 shadow-md"><AlertTriangle size={20} className="md:w-6 md:h-6" /></span>
              もう一つの重要な教え：退屈と規律
            </h4>

            <div className="space-y-6 relative z-10">
              <div>
                <h5 className="font-bold text-gray-800 mb-2 text-base md:text-lg">一度決めた投資方針は変えない</h5>
                <p className="text-sm text-gray-700 leading-relaxed bg-white/60 p-4 rounded-xl backdrop-blur-sm border border-amber-100">
                  「今月は余裕があるから多めに」「今月は相場が怖いから少なめに」...これは<span className="font-bold text-red-600">避けるべき</span>です。<br className="hidden md:block"/>
                  ドルコスト平均法の真価は、株価が暴落した時に（恐怖心を無視して）自動的に大量に仕込める点にあります。
                  自分の感情で金額を調整してしまうと、この「リスクを均して利益を最大化する」メカニズムが機能しなくなります。<br className="hidden md:block"/>
                  毎月の積立額は、月々の特別な事情を考慮しても、後から変更する必要がない金額に設定しましょう。
                  <span className="text-xs text-gray-500 mt-2 block">※ライフステージの変化による数年に一度の見直しは問題ありません。</span>
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h5 className="font-bold text-gray-800 mb-2 flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    最大の敵は「飽き」
                  </h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    インデックス積立は、設定したら後はやることがありません。あまりに退屈で、刺激が欲しくなり「個別株」や「怪しい投資話」に手を出したくなります。<br className="hidden md:block"/>
                    その誘惑は、せっかく学んだ名著の教えに背き、失敗への道を歩み始めている<span className="font-bold text-amber-600">黄色信号</span>です。
                  </p>
                </div>
                <div className="flex-1 bg-white p-4 rounded-xl border border-amber-100 shadow-sm flex items-center">
                   <Quote className="text-amber-300 mr-4 flex-shrink-0" size={32} />
                   <p className="text-xs md:text-sm font-bold text-gray-700 italic leading-relaxed">
                     「投資とは、本来退屈なものであるべきだ。<br/>
                     もしワクワクしているなら、それはおそらくギャンブルをしている。」
                     <span className="block text-right text-[10px] md:text-xs font-normal text-gray-400 mt-2">- ジョージ・ソロス -</span>
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 3: Theory */}
      <Section id="step3" title="Chapter 3: 勝利の法則" subtitle="複利・時間・分散を味方につける" icon={Activity}>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">1. 投資と投機の違い</h3>
            <InfoBox type="success" title="結論：あなたがやるべきは「投資」です">
              <p>「株＝ギャンブル」は「投機」のイメージです。我々は企業の成長にお金を託す「投資」を行います。投機は誰かが損をするゼロサムゲームですが、投資は全員で得を生むプラスサムゲームです。</p>
            </InfoBox>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 md:p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <h4 className="text-base md:text-lg font-bold text-indigo-700 mb-2 flex items-center"><Briefcase className="mr-2" size={20}/> 投資 (Investment)</h4>
                <ul className="text-xs md:text-sm space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle size={14} className="text-indigo-500 mr-2"/> 対象：企業の成長、配当</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-indigo-500 mr-2"/> 期間：長期（数年〜数十年）</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-indigo-500 mr-2"/> 性質：プラスサムゲーム</li>
                </ul>
              </div>
              <div className="bg-white p-5 md:p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
                <h4 className="text-base md:text-lg font-bold text-red-700 mb-2 flex items-center"><Coins className="mr-2" size={20}/> 投機 (Speculation)</h4>
                <ul className="text-xs md:text-sm space-y-2 text-gray-700">
                  <li className="flex items-center"><AlertTriangle size={14} className="text-red-500 mr-2"/> 対象：価格の歪み、タイミング</li>
                  <li className="flex items-center"><AlertTriangle size={14} className="text-red-500 mr-2"/> 期間：短期（数秒〜数ヶ月）</li>
                  <li className="flex items-center"><AlertTriangle size={14} className="text-red-500 mr-2"/> 性質：ゼロサムゲーム</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">2. 複利効果</h3>
            <div className="bg-indigo-50 p-4 md:p-6 rounded-xl border border-indigo-100 mb-8">
              <h4 className="text-base md:text-lg font-bold text-indigo-900 mb-3 flex items-start"><Quote className="mr-2 text-indigo-500 flex-shrink-0" /> <span>アインシュタイン：「複利は人類最大の発明である」</span></h4>
              <CompoundInterestVisualizer />
            </div>
            {/* シミュレーター */}
            <div className="bg-indigo-900 text-white p-6 md:p-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6">
                  <div><label className="block text-indigo-200 text-xs md:text-sm mb-2">毎月の積立額: {monthly} 万円</label><input type="range" min="1" max="30" step="1" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="w-full h-2 bg-indigo-400 rounded-lg appearance-none cursor-pointer"/></div>
                  <div><label className="block text-indigo-200 text-xs md:text-sm mb-2">運用期間: {years} 年</label><input type="range" min="5" max="50" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-2 bg-indigo-400 rounded-lg appearance-none cursor-pointer"/></div>
                  <div><label className="block text-indigo-200 text-xs md:text-sm mb-2">想定年利: {rate} %</label><input type="range" min="1" max="10" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-2 bg-indigo-400 rounded-lg appearance-none cursor-pointer"/></div>
                </div>
                <div className="text-center bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <p className="text-indigo-200 mb-2 text-sm">あなたの将来資産</p>
                  <div className="text-4xl md:text-5xl font-bold mb-4">{result}<span className="text-lg md:text-xl">万円</span></div>
                  <div className="flex justify-between text-xs md:text-sm border-t border-white/20 pt-4">
                    <span>元本: {totalInvested}万円</span>
                    <span className="text-green-400">運用益: +{result - totalInvested}万円</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">3. ドルコスト平均法</h3>
            <Card>
              <div className="mb-6">
                <p className="text-gray-700 mb-4 font-medium text-sm md:text-base">長期投資を成功させる上で、心理的にも実利的にも最も理に適っている手法です。</p>
                <h4 className="text-base md:text-lg font-bold text-indigo-700 mb-2">「ドルコスト平均法」とは？</h4>
                <p className="text-gray-600 mb-4 text-sm md:text-base">価格変動に関わらず、<strong>「常に一定金額で、定期的に購入し続ける」</strong>手法。（例：毎月3万円分購入）</p>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-6">
                  <h5 className="text-sm md:text-base font-bold text-gray-800 flex items-center"><ShoppingBag className="mr-2 text-indigo-600"/>仕組みを「スーパーのリンゴ」で理解する</h5>
                  <p className="text-xs md:text-sm text-gray-700 mt-1">「毎月千円分リンゴを買う」と決めれば、高い月は少なく、安い月は多く買えます。</p>
                </div>
              </div>
              <DcaVisualizer />
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mt-6">
                <h5 className="font-bold text-gray-800 mb-2 text-sm md:text-base">なぜ最強なのか？</h5>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">暴落はバーゲンセールであり、「安いときに大量に買う」ことで、将来の利益の種まき期間と捉えることができます。<br/><br/>
                しかし、実際は、暴落時には「さらに下がるのではないか」という<strong>恐怖の感情</strong>により大量に買うことは難しくなります。<br/>
                逆に、株価が上がると、もっと買って利益を上げたいという<strong>欲</strong>が生じます。これが健全な企業の利益によるものではなく、市場の過熱した期待感によるものだった場合、その後の暴落で損失を生じます。大量に高値掴みをしていた場合は最悪です。<br/>
                <br/>
                長期積立投資においては、こうした感情を排して買い続けることが重要です。ドルコスト平均法は自動的に安いときに大量に買うことができるシンプルで最も簡単な手法です。
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Chapter 4: Products */}
      <Section id="step4" title="Chapter 4: 最適な商品" subtitle="結論：インデックスファンドへの投資が正解" icon={PieChart}>
        <div className="space-y-12">
          
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center"><span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>まずは基本：個別株 vs 投資信託</h3>
            <Card>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center text-base md:text-lg"><Building2 className="mr-2 text-gray-500" size={20}/> 個別株</h4>
                  <p className="text-sm text-gray-600 mb-2">特定の1社の株を買う。ハイリスク・ハイリターン。分析が必要。</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200 relative">
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] md:text-xs px-2 py-1 rounded">推奨</div>
                  <h4 className="font-bold text-indigo-800 mb-2 flex items-center text-base md:text-lg"><Briefcase className="mr-2 text-indigo-600" size={20}/> 投資信託（ファンド）</h4>
                  <p className="text-sm text-indigo-900 mb-2">プロが選んだ株の詰め合わせ。1本で数百社以上に<strong>分散投資</strong>できる。</p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center"><span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>投資信託の仕組みを理解する</h3>
            <MutualFundVisualizer />
            <div className="mt-6 bg-slate-50 p-5 rounded-lg border border-slate-200">
              <h5 className="font-bold text-gray-800 mb-3 flex items-center text-sm md:text-base"><Search className="mr-2 text-indigo-500" size={20} />運用会社はどうやって銘柄を選んでいる？</h5>
              <div className="space-y-4">
                <div><span className="font-bold text-indigo-700 text-sm">① パッシブ運用（インデックス）</span><p className="text-xs md:text-sm text-gray-600 ml-4">市場平均に連動するように機械的に買う。シンプルで<strong>手数料が安い</strong>。</p></div>
                <div><span className="font-bold text-gray-700 text-sm">② アクティブ運用</span><p className="text-xs md:text-sm text-gray-600 ml-4">市場平均超えを狙い人間が予測・選定する。調査コストがかかり<strong>手数料が高い</strong>。</p></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
              結論：「インデックスファンド」を選ぶ理由
            </h3>
            
            <div className="space-y-6">
              {/* 1. 個別株の罠 */}
              <div className="bg-red-50 p-5 md:p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-4 flex items-center text-base md:text-lg">
                  <AlertTriangle className="mr-2" size={20}/>
                  なぜ「個別株」ではダメなのか？
                </h4>
                <ul className="space-y-3">
                  <li className="bg-white p-3 rounded-lg border border-red-100 shadow-sm">
                    <div className="font-bold text-gray-800 text-sm mb-1">📉 プロでも市場平均には勝てない</div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      名著のデータによると、プロのファンドマネージャーであっても、その<span className="font-bold text-red-500">7割以上</span>は、長期的に市場平均（インデックス）の成績を下回ります。プロでも勝てないゲームで、個人の素人が勝ち続けるのは困難です。
                    </p>
                  </li>
                  <li className="bg-white p-3 rounded-lg border border-red-100 shadow-sm">
                    <div className="font-bold text-gray-800 text-sm mb-1">🏢 「100年続く企業」はほぼ存在しない</div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      今は好調な企業も、10年後・20年後には衰退している可能性があります。個別株の場合、時代の変化に合わせて<span className="font-bold text-red-500">自分で銘柄を分析し、買い替える</span>という高度なメンテナンスが必要です。
                    </p>
                  </li>
                  <li className="bg-white p-3 rounded-lg border border-red-100 shadow-sm">
                    <div className="font-bold text-gray-800 text-sm mb-1">💣 1回の失敗が利益を食いつぶす</div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      短期的には大きく跳ねることもありますが、暴落時のダメージも甚大です。自分で数十社に分散投資を行わない限り、たった1社の倒産や不祥事で資産の大半を失うリスクがあります。
                    </p>
                  </li>
                </ul>
              </div>

              {/* 矢印 */}
              <div className="flex justify-center text-gray-400">
                <ArrowDown size={32} />
              </div>

              {/* 2. インデックスの強み */}
              <div className="bg-indigo-50 p-5 md:p-6 rounded-xl border border-indigo-200">
                <h4 className="font-bold text-indigo-800 mb-4 flex items-center text-base md:text-lg">
                  <ShieldCheck className="mr-2" size={20}/>
                  インデックスが「最強」である理由
                </h4>
                
                {/* 仕組みの図解 */}
                <div className="bg-white p-4 rounded-xl border border-indigo-100 mb-4 text-center">
                  <h5 className="font-bold text-gray-700 text-sm mb-4">勝手に「新陳代謝」してくれるシステム</h5>
                  <div className="flex items-center justify-center gap-4 text-xs">
                    <div className="opacity-50 flex flex-col items-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded text-gray-500 flex items-center justify-center mb-1"><XCircle size={20}/></div>
                      <span>衰退企業</span>
                      <span className="text-red-500 font-bold">自動除外</span>
                    </div>
                    <div className="text-indigo-400">
                      <RefreshCw size={24} />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 rounded text-indigo-600 flex items-center justify-center mb-1 shadow-md"><TrendingUp size={24}/></div>
                      <span className="font-bold">成長企業</span>
                      <span className="text-indigo-600 font-bold">自動採用</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs md:text-sm text-gray-600 text-left bg-indigo-50/50 p-2 rounded leading-relaxed">
                    S&P500などのインデックスは、定期的に業績が悪くなった企業と、新しく台頭してきた強い企業を組み入れる「リバランス」を行います。<br className="hidden md:block"/>
                    あなたは<span className="font-bold text-indigo-700">「一度積立設定をして放置するだけ」</span>で、常にその時代ごとの最強企業チームの恩恵を受け続けることができます。
                  </p>
                </div>

                <InfoBox type="success" title="結論：メンテナンスフリーの果実">
                  <p className="text-xs md:text-sm leading-relaxed">
                    「どの株が上がるか？」を予想する必要はありません。「世界経済全体の成長」さえ信じられれば、あとはインデックスの自浄作用に任せて寝て待つのが、最も合理的で確実性の高い戦略です。
                  </p>
                </InfoBox>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center"><span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>ポートフォリオの黄金比率</h3>
            <PortfolioChart />
            <div className="bg-white p-5 md:p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm mt-8">
              <h4 className="font-bold text-indigo-900 mb-2 flex items-center text-base md:text-lg"><Layers className="mr-2" />コア・サテライト戦略</h4>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">資産を「コア（守り）」と「サテライト（攻め）」に分ける手法。インデックスと債券で盤石な土台を作り、少額で個別株などの楽しみやハイリターンを狙う。<br className="hidden md:block"/>
              ※個別株が完全に悪だということはありません。リスク許容範囲内であれば、失敗も経験として金融リテラシーを高める貴重な知見となります</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-10">
          <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-6 text-center">
            過去データで検証してみよう
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {/* S&P500 リンク */}
            <Link to="/sp500" className="group relative overflow-hidden bg-white border border-indigo-100 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <TrendingUp size={80} className="text-indigo-600 md:w-[100px] md:h-[100px]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                    <TrendingUp size={20} className="md:w-6 md:h-6" />
                  </div>
                  <ArrowRight className="text-indigo-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <h5 className="text-base md:text-lg font-bold text-gray-900 mb-1">S&P500 積立検証</h5>
                <p className="text-xs text-gray-500">
                  米国最強指数。ITバブル崩壊やリーマンショックを乗り越えた驚異の実績をシミュレーション。
                </p>
              </div>
            </Link>

            {/* オルカン リンク */}
            <Link to="/all-country" className="group relative overflow-hidden bg-white border border-emerald-100 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe size={80} className="text-emerald-600 md:w-[100px] md:h-[100px]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                    <Globe size={20} className="md:w-6 md:h-6" />
                  </div>
                  <ArrowRight className="text-emerald-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <h5 className="text-base md:text-lg font-bold text-gray-900 mb-1">全世界株式（オルカン）検証</h5>
                <p className="text-xs text-gray-500">
                  究極の分散投資。米国・欧州・新興国の成長を丸ごと取り込む安定感をチェック。
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      {/* Chapter 5: Market Mechanics */}
      <RiskSection />

      {/* Chapter 6: Action (ActionSectionコンポーネントを利用) */}
      <ActionSection />

      {/* Chapter 7: Exit Strategy */}
      <Section id="step7" title="Chapter 7: 未来のビジョン" subtitle="増やした資産で、どのような人生を描くか" icon={ArrowRight}>
        <div className="space-y-8">
          <div className="bg-indigo-900 text-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center"><Percent className="mr-2" /> 4%ルール（Trinity Study）</h3>
            <p className="mb-4 text-indigo-100 text-xs md:text-sm leading-relaxed">資産を寿命より長持ちさせるための取り崩しメソッド。年間支出を資産の4%以内に抑えれば、30年後も資産が残る確率が高いとされています。</p>
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
              <p className="text-xs md:text-sm">（例）3000万円の資産なら、年間120万円（月10万円）を取り崩して使える。</p>
            </div>
          </div>
          <Card title="取り崩しのメンタルブロック">
            <p className="text-sm md:text-base leading-relaxed">長年「積み上げる」ことに特化してきた投資家にとって、「資産を減らす」ことは心理的に難しいもの。ゴールは通帳の数字を増やすことではなく、そのお金で人生を豊かにすることだと忘れないでください。</p>
          </Card>
        </div>
      </Section>

      {/* Final Message */}
      <section className="py-16 px-6 bg-gradient-to-br from-indigo-900 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <BookOpen className="mx-auto mb-6 text-indigo-300 w-10 h-10 md:w-12 md:h-12" />
          <h2 className="text-2xl md:text-4xl font-bold mb-6">知識は、あなたを守る最強の盾になる</h2>
          <p className="text-sm md:text-lg text-indigo-100 mb-8 leading-relaxed">
            このガイドブックは「きっかけ」に過ぎません。正解は一つではありません。<br className="hidden md:block"/>
            ぜひ名著を手に取り、知識を深め、自ら納得して決断してください。<br className="hidden md:block"/>
            それが長期投資を続ける最大の力となります。
          </p>
          <div className="inline-block border border-indigo-400/30 bg-white/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold tracking-widest">JUST KEEP BUYING.</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* ▼▼▼ リンクの追加 ▼▼▼ */}
          <div className="flex justify-center space-x-6 mb-8 text-xs md:text-sm font-medium">
            <Link to="/profile" className="hover:text-white transition-colors">運営者情報</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
          </div>

          <div className="border-t border-gray-800 pt-8 text-[10px] md:text-xs text-gray-600">
            {/* Amazonアソシエイトの免責文言（必須） */}
            <p className="mb-4">
              Amazonのアソシエイトとして、当メディアは適格販売により収入を得ています。
            </p>
            <p className="mb-2">
              ※本資料は一般的な投資理論に基づいた学習用資料です。<br className="hidden md:block"/>
              ※特定の金融商品の勧誘を目的としたものではありません。投資の最終判断はご自身の責任で行ってください。
            </p>
            <p>&copy; 2025 AssetBuild Guidebook</p>
          </div>
        </div>
      </footer>
    </div>
  );
}