import React from 'react';
import { BookOpen, TrendingUp, Shield, Anchor, Brain } from 'lucide-react';

// バビロンの大富豪用コンポーネント
import { SevenCuresChecklist, SavingsSimulator, GoldenLaws } from '../components/book-content/BabylonFeatures';

// 敗者のゲーム用コンポーネント
import { TennisAnalogy, LightningStrikeChart ,LightningSimulator } from '../components/book-content/LoserFeatures';

// ウォール街のランダムウォーク用コンポーネント
import { MonkeyDarts, MarketEfficiencyAccordion, FeeSimulator } from '../components/book-content/RandomFeatures';

// JUST KEEP BUYING用コンポーネント
import { GodVsDCA, LumpSumVsDCA, HomeBuyingRules, OpportunityCostCalc } from '../components/book-content/BuyingFeatures';

// サイコロジーオブマネー用コンポーネント
import { RichVsWealth, BuffettGraph } from '../components/book-content/PsychologyFeatures';

export const bookData = {
  // --- 1. バビロンの大富豪 ---
  "babylon": {
    id: "babylon",
    title: "バビロンの大富豪",
    subtitle: "繁栄と富と幸福はいかにして築かれるのか",
    author: "ジョージ・S・クレイソン",
    icon: BookOpen,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    summary: "「収入の1割を貯金せよ」「欲望に優先順位をつけよ」など、古代バビロンから伝わる不変の真理。テクニック以前の「お金持ちになるための土台」を作る最初の一冊。",
    amazonLink: "https://amzn.to/3XyB0Dr", 
    content: [
      {
        type: "text",
        headline: "物語の始まり：なぜ彼らは豊かになれなかったのか？",
        body: `物語の舞台は、古代世界で最も豊かだった都市、バビロン。主人公は、腕利きの二輪馬車職人であるバンシルです。彼は誰にも負けない見事な馬車を作りますが、その暮らしは一向に豊かになりません。
        
        ある日、彼は親友のコビと共に、幼なじみでありながら「バビロンで最も裕福な男」となったアルカドを訪ねます。「僕たちと君は、子供の頃は何も変わらなかったはずだ。真面目に働いているのに、なぜ君だけがこれほどの大富豪になれたんだ？」
        
        アルカドは静かに答えます。「本当のお金持ちとは、お金をたくさん持っている人のことではない。お金の増やし方を知っている人のことなのだ」と。
        そして彼は、誰にでも実践できる、富を築くための「七つの知恵」を語り始めます。`
      },
      {
        type: "component",
        component: <SevenCuresChecklist />
      },
      {
        type: "text",
        headline: "第一の知恵：収入の十分の一を貯金せよ",
        body: `これがすべての土台となる、最もシンプルで強力な法則です。「財布に10枚のコインを入れたなら、使うのは9枚までと心得よ」。
        
        多くの人は、稼いだお金を家賃や食費、服の支払いに使い、残った分を貯金しようとします。しかし、それではいつまで経っても自分の財産は築けません。まず「未来の自分」のために収入の10%を確保する。この習慣こそが、あなたの財布を「痩せた財布」から「黄金で膨らむ財布」へと変える第一歩です。`
      },
      {
        type: "component",
        component: <SavingsSimulator />
      },
      {
        type: "text",
        headline: "第二の知恵：欲望に優先順位をつけよ",
        body: `第一の知恵を実践しようとすると、「生活費が足りない」と感じるかもしれません。そこで必要なのがこの知恵です。
        
        人間の欲望には際限がありません。収入が増えれば、もっと良い家に住み、もっと贅沢をしたくなるのが人情です。アルカドは言います。「収入の9割で賄えない欲望は、諦めなさい」。
        本当に必要なものと、単なる「欲しいもの」を区別し、予算を守ること。これが富への種銭を守る唯一の方法です。`
      },
      {
        type: "text",
        headline: "第三の知恵：蓄えた金を働かせよ",
        body: `貯めたお金は、あなたの富の「種銭」です。しかし、ただ壺に入れて眠らせておくだけでは意味がありません。
        
        アルカドは言います。「お金を、あなたのために働く奴隷にしなさい」。
        お金が子供（利子）を産み、その子供がまた孫を産む。この「複利」の力を利用することで、労働収入の限界を超えて資産を雪だるま式に増やすことができます。現代において、この役割を果たすのが「NISA」や「iDeCo」といった税制優遇のある投資制度です。`
      },
      {
        type: "text",
        headline: "第四の知恵：危険や天敵から金を堅守せよ",
        body: `お金を持ち始めると、必ず「儲け話」が寄ってきます。
        「一攫千金」や「元本保証で高配当」といった甘い話には、常に警戒心を持つべきです。アルカドは、元本を守ることの重要性を繰り返し説きます。
        
        自分が理解できない商売や、その道の専門家が推奨しない投資には手を出さないこと。資産を増やす「攻め」と同じくらい、愚かなリスクから資産を守る「守り」の知恵が不可欠です。`
      },
      {
        type: "text",
        headline: "第七の知恵：自分こそを最大の資本とせよ",
        body: `七つの知恵の中で、アルカドが最も重要だと説くのがこの最後の教えです。
        
        どんなに優れた投資手法を知っていても、それを実行する「あなた自身」に行動力がなければ意味がありません。知識をつけ、スキルを磨き、稼ぐ力（人的資本）を高めること。
        自分自身への投資こそが、他のどんな金融商品よりも高いリターンをもたらす、究極の資産形成術なのです。`
      },
      {
        type: "component",
        component: <GoldenLaws />
      },
      {
        type: "text",
        headline: "結論：知識を行動に変える",
        body: `「幸運の女神は、行動する人間にしか微笑まない」。
        
        この本が100年読み継がれている理由は、それが単なるテクニック集ではなく、人生を豊かにするための「哲学」だからです。
        まずは今日、お財布の中身を整理することから始めてみませんか？あるいは、ネット銀行で「自動定額入金」の設定をするのも良いでしょう。その小さな一歩が、あなたをバビロンの大富豪へと近づけます。`
      }
    ]
  },

  // --- 2. 敗者のゲーム ---
  "loser": {
    id: "loser",
    title: "敗者のゲーム",
    subtitle: "資産運用で勝つための「負けない」戦略",
    author: "チャールズ・エリス",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    summary: "投資は「ミスをしない」ゲームである。プロでも市場平均に勝つのは難しい。だからこそ、インデックスファンドで市場全体を保有し続けることが、個人投資家の最適解となる。",
    amazonLink: "https://amzn.to/48wKVPR",
    content: [
      {
        type: "text",
        headline: "はじめに：なぜ、世界中の投資家がこの一冊を読み継ぐのか",
        body: (
          <>
            資産形成のバイブルとして名高い本書。その核心的な問いはシンプルです。<br/>
            「なぜ、ほとんどの個人投資家は市場で勝とうとして失敗するのか？」<br/><br/>
            著者のチャールズ・エリスは、現代の株式市場が構造的に変化してしまったことを指摘し、私たちが戦うべきゲームのルールを根本から再定義します。
          </>
        )
      },
      {
        type: "component",
        component: <TennisAnalogy />
      },
      {
        type: "text",
        headline: "プロとアマチュアで全く異なる「ゲームのルール」",
        body: (
          <>
            エリス氏はテニスを例に挙げます。<br/>
            プロの試合は、強烈なサーブやボレーを決める「勝者のゲーム」です。しかし、我々アマチュアの週末テニスは違います。相手の強烈なショットではなく、<strong className="text-blue-700 bg-blue-50 px-1 rounded">自分のネットミスやアウトで勝敗が決まる「敗者のゲーム」</strong>なのです。<br/><br/>
            現代の株式市場も同じです。世界中の超優秀なプロたちがしのぎを削る市場において、個人投資家が彼らを出し抜こうとすることは、自らミスを犯しに行くようなものです。我々が目指すべきは「スーパーショット」ではなく、<strong className="text-blue-700 bg-blue-50 px-1 rounded">「自滅的なミスをしないこと」</strong>なのです。
          </>
        )
      },
      {
        type: "text",
        headline: "最大のミス：稲妻が輝く瞬間を逃すこと",
        body: (
          <>
            投資家が犯す最大のミスの一つが「タイミング投資」です。「安く買って高く売りたい」と考え、暴落時に怖くなって一度売却し、底値で買い戻そうとする行為です。<br/>
            しかし、市場のリターンの大半は、<strong className="text-blue-700 bg-blue-50 px-1 rounded">ごく短期間の爆発的な上昇（稲妻）</strong>によってもたらされます。
          </>
        )
      },
      {
        type: "component",
        component: <LightningStrikeChart />
      },
 
      {
        type: "component",
        component: <LightningSimulator /> // ← LightningStrikeChart の代わり、あるいは追加で
      },

      {
        type: "text",
        headline: "なぜ「居続ける」ことが難しいのか？",
        body: (
          <>
            データを見れば「持ち続ける」のが正解なのは明らかです。しかし、多くの人が失敗します。それは、稲妻が輝くベストな日は、<strong className="text-red-600 bg-red-50 px-1 rounded">市場が暴落して皆が悲観に暮れている最中や、その直後</strong>に訪れることが多いからです。<br/><br/>
            「もう少し下がってから...」と現金のまま様子見をしている間に、市場は一気に回復し、二度と手が出せない高値へと去っていきます。タイミングを計ろうとすることは、この稲妻をみすみす逃す行為に他なりません。
          </>
        )
      },
      {
        type: "text",
        headline: "勝利への戦略：インデックスファンドという最強の武器",
        body: (
          <>
            では、この「敗者のゲーム」で確実に勝つにはどうすればいいのでしょうか？<br/>
            答えはシンプルです。<strong className="text-blue-700 bg-blue-50 px-1 rounded">「そもそも戦わないこと」</strong>です。<br/><br/>
            特定の株を選んだり、タイミングを計ったりするゲームから降ります。その代わりに、低コストの「インデックスファンド」を通じて市場全体を丸ごと保有します。<br/><br/>
            1. <strong className="font-bold">市場平均（インデックス）を買う</strong><br/>
            2. <strong className="font-bold">余計な売買をせず、コストと税金を最小化する</strong><br/>
            3. <strong className="font-bold">時間を味方につけて、複利効果を最大化する</strong><br/><br/>
            これが、プロの機関投資家をも凌駕する、個人投資家にとっての「不敗の投資法」なのです。
          </>
        )
      },
      {
        type: "text",
        headline: "結論：投資を忘れて人生を楽しもう",
        body: (
          <>
            『敗者のゲーム』の最終的なメッセージは、投資で勝つこと以上に価値があります。<br/><br/>
            「負けない仕組み（インデックス積立）」を作ったら、あとは投資のことは忘れなさい。<br/>
            市場のニュースに一喜一憂する時間をなくし、そのエネルギーを仕事や家族、趣味といった、<strong className="text-blue-700 bg-blue-50 px-1 rounded">あなたの人生という「勝者のゲーム」</strong>に使いなさい。<br/><br/>
            これこそが、本書が真に伝えたい「投資のゴール」なのです。
          </>
        )
      }
    ]
  },

  // --- 3. ウォール街のランダム・ウォーカー ---
  "random": {
    id: "random",
    title: "ウォール街のランダム・ウォーカー",
    subtitle: "株式投資の不滅の真理",
    author: "バートン・マルキール",
    icon: TrendingUp,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    summary: "株価の動きは予測不能（ランダム・ウォーク）である。テクニカル分析やファンダメンタル分析の限界を説き、結論として「インデックス投資」の優位性を半世紀以上前から証明し続けている名著。",
    amazonLink: "https://amzn.to/3XLRcRD", // 仮リンク
    content: [
      {
        type: "text",
        headline: "序論：明日の株価は誰にも読めない",
        body: (
          <>
            半世紀以上にわたり読み継がれるこの名著の主張は、極めてシンプルで衝撃的です。<br/>
            <strong className="text-indigo-700 bg-indigo-50 px-1 rounded">「個別の株価の短期的な動きは予測不可能である（ランダム・ウォーク）」</strong><br/><br/>
            過去のチャートパターン（テクニカル分析）を見ても、企業の決算書（ファンダメンタルズ分析）を分析しても、明日株価が上がるか下がるかは「コイン投げ」と同じ確率でしかありません。<br/>
            「来月は暴落する」「この株は底値だ」といった専門家の予測は、エンターテイメントとしては面白いですが、資産運用の根拠にするにはあまりに頼りないものです。
          </>
        )
      },
      
      // ★ コンポーネント: 猿のダーツ投げ
      {
        type: "component",
        component: <MonkeyDarts />
      },

      {
        type: "text",
        headline: "なぜプロでも市場に勝てないのか？",
        body: (
          <>
            長年の訓練を受けたプロのファンドマネージャーが、なぜ猿（ランダムな選択）に勝てないのでしょうか？<br/>
            その理由は<strong className="text-indigo-700 bg-indigo-50 px-1 rounded">「効率的市場仮説（EMH）」</strong>にあります。<br/><br/>
            市場には世界中の賢い投資家が参加しており、あらゆるニュースや情報は「瞬時」に株価に織り込まれてしまいます。私たちがニュースを見て「あ、この企業の株は上がりそうだ」と思ったときには、すでに株価は上がった後なのです。<br/>
            さらに、プロが頻繁に売買を繰り返すことで発生する<strong className="text-red-600 bg-red-50 px-1 rounded">「手数料や税金（コスト）」</strong>が、リターンを確実に蝕んでいきます。市場が効率的であればあるほど、コストの分だけアクティブ運用はインデックス運用に劣後するのです。
          </>
        )
      },

      {
        type: "component",
        component: <FeeSimulator />
      },

      // ★ コンポーネント: 効率性アコーディオン
      {
        type: "component",
        component: <MarketEfficiencyAccordion />
      },

      {
        type: "text",
        headline: "最大の敵は「自分自身」：行動ファイナンスの罠",
        body: (
          <>
            市場が予測不能である以上に厄介なのが、投資家自身の「心」です。<br/>
            行動経済学の「プロスペクト理論」によれば、人間は合理的な判断ができません。私たちは<strong className="text-red-600 bg-red-50 px-1 rounded">「利益の喜び」よりも「損失の痛み」を2倍以上強く感じる</strong>ようにプログラムされています（損失回避バイアス）。<br/><br/>
            その結果、以下のような自滅的な行動をとってしまいます。<br/>
            ・少し利益が出ると、すぐに売りたくなる（利小）<br/>
            ・含み損が出ると、「いつか戻るはずだ」と塩漬けにしたり、ナンピン買いをして傷口を広げる（損大）<br/><br/>
            ランダム・ウォークする市場において、感情に任せた売買は、資産を減らす最速の手段となってしまうのです。
          </>
        )
      },
      {
        type: "text",
        headline: "結論：不敗の投資法",
        body: (
          <>
            予測不能な市場で、感情的な人間にできる最善の策は何か？<br/>
            マルキール教授が膨大なデータから導き出した結論は揺るぎません。<br/><br/>
            <strong className="text-indigo-700 bg-indigo-50 px-1 rounded">「市場全体（インデックスファンド）を買い、じっと持ち続けること」</strong><br/><br/>
            個別株の予測という不可能なゲーム（敗者のゲーム）からは降りてください。<br/>
            そして、「ドルコスト平均法」で感情を排して機械的に買い続けること。<br/>
            これこそが、ウォール街のプロたちを出し抜き、確実に資産を築くための唯一の「近道」なのです。
          </>
        )
      }
    ]
  },

  // --- 4. JUST KEEP BUYING ---
  "buying": {
    id: "buying",
    title: "JUST KEEP BUYING",
    subtitle: "自動的に富が増え続ける「お金」と「時間」の法則",
    author: "ニック・マジューリ",
    icon: Anchor,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    summary: "「いつ買うか？」への最終回答。暴落時だろうが高値圏だろうが、タイミングを計らず「ただ買い続けなさい」。データサイエンティストが膨大なデータから導き出した結論。",
    amazonLink: "https://amzn.to/4oehbw0",
    content: [
      {
        type: "text",
        headline: "結論：タイミングを計るな、ただ買い続けろ",
        body: (
          <>
            「いつ投資を始めるべきか？」「暴落を待って底値で買うべきか？」<br/>
            多くの投資家が悩むこの問いに、データサイエンティストである著者は100年以上の膨大なデータ分析をもって終止符を打ちました。<br/><br/>
            答えは<strong className="text-emerald-700 bg-emerald-50 px-1 rounded">「今すぐ買いなさい。そして買い続けなさい」</strong>です。<br/><br/>
            市場は長期的には右肩上がりであり、投資しない期間（機会損失）を作ることこそが、資産形成における最大のリスクだからです。
          </>
        )
      },
      
      // ★ コンポーネント: 神様 vs DCA
      {
        type: "component",
        component: <GodVsDCA />
      },

      {
        type: "text",
        headline: "なぜ「待機」は損失なのか？",
        body: (
          <>
            多くの人は「暴落したら買おう」と思って現金を貯め込みます。しかし、データによれば、市場が暴落する回数は圧倒的に少なく、大半の期間は上昇しています。<br/><br/>
            底値を待っている間に市場は上昇し続け、あなたが買おうとした時には、<strong className="text-emerald-700 bg-emerald-50 px-1 rounded">暴落した後ですら、現在の価格よりも高くなっている</strong>可能性が高いのです。<br/>
            「安く買う」ことよりも「早く市場に資金を置く」ことの方が、統計的な期待値は遥かに高いことが証明されています。
          </>
        )
      },

      {
        type: "component",
        component: <OpportunityCostCalc />
      },

      // ★ コンポーネント: 一括 vs 分割
      {
        type: "component",
        component: <LumpSumVsDCA />
      },

      {
        type: "text",
        headline: "貧しい人は「貯金」、豊かな人は「投資」",
        body: (
          <>
            著者は資産形成のステージによって注力すべきポイントが異なると説きます。<br/><br/>
            <strong className="font-bold">・資産が少ない段階：</strong><br/>
            投資リターン（利回り）を気にするよりも、<strong className="text-emerald-700 bg-emerald-50 px-1 rounded">「人的資本（稼ぐ力）」を高めて入金力を上げる</strong>方が遥かに効率的です。10万円を年利10%で運用しても1万円にしかなりませんが、副業で月1万円稼ぐのは現実的だからです。<br/><br/>
            <strong className="font-bold">・資産が増えた段階：</strong><br/>
            資産を守り増やすための「投資戦略」の重要性が高まります。
          </>
        )
      },

      {
        type: "text",
        headline: "今日から使える具体的なアクション",
        body: (
          <>
            精神論ではなく、行動経済学に基づいた具体的なルールも紹介されています。<br/><br/>
            1. <strong className="font-bold">昇給の50%ルール：</strong><br/>
            昇給やボーナスがあったら、その半分は使っていいが、残り半分は必ず投資に回す。生活水準を上げすぎないための強力な防波堤です。<br/><br/>
            2. <strong className="font-bold">2倍のルール（罪悪感なき支出）：</strong><br/>
            欲しいブランド品や旅行など「贅沢」をする時は、それと同額を投資に回すこと。もし同額を投資できる余裕がないなら、その贅沢はまだ身の丈に合っていません。
          </>
        )
      },
      
      // ★ コンポーネント: マイホーム
      {
        type: "component",
        component: <HomeBuyingRules />
      },
      
      {
        type: "text",
        headline: "最大の資産は「時間」",
        body: (
          <>
            「お金」は失っても取り戻せますが、「時間」は二度と戻りません。<br/>
            投資を早く始める最大のメリットは、複利という時間を味方につけられることです。<br/><br/>
            迷っている暇があったら、少額でもいいから今日から買い始める。<br/>
            <strong className="text-emerald-700 bg-emerald-50 px-1 rounded">JUST KEEP BUYING.</strong><br/>
            それが富への最短ルートです。
          </>
        )
      }
    ]
  },

  // --- 5. サイコロジー・オブ・マネー ---
  "psychology": {
    id: "psychology",
    title: "サイコロジー・オブ・マネー",
    subtitle: "一生お金に困らない「富」のマインドセット",
    author: "モーガン・ハウセル",
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    summary: "お金の成功は「知性」ではなく「行動」で決まる。19のストーリーを通じて、私たちの心の弱さと、富を築くための正しい振る舞いを解き明かす。",
    amazonLink: "https://amzn.to/49CZVwG", // 必要に応じて正しいリンクに差し替え
    content: [
      {
        type: "text",
        headline: "知識よりも「振る舞い」がすべて",
        body: (
          <>
            金融工学の天才が破産し、地味な清掃員が10億円の資産を残して亡くなる。<br/>
            なぜ、お金の世界ではこんなことが起こるのでしょうか？<br/><br/>
            著者のモーガン・ハウセルは言います。<br/>
            <strong className="text-purple-700 bg-purple-50 px-1 rounded">「ファイナンスは『物理学』ではなく『心理学』だ」</strong><br/><br/>
            多くの人は投資を「知識」や「IQ」の問題だと思っていますが、それは間違いです。<br/>
            経済的な成功は、何を知っているか（ハードスキル）ではなく、どう振る舞うか（ソフトスキル）で決まります。恐怖、強欲、嫉妬といった感情をコントロールできなければ、どれほど頭が良くても資産を築くことはできません。
          </>
        )
      },
      {
        type: "text",
        headline: "清掃員 vs エリート役員",
        body: (
          <>
            本書には象徴的な二人の人物が登場します。<br/><br/>
            <strong className="font-bold">・ロナルド・リード（清掃員）：</strong><br/>
            ガソリンスタンドとデパートで働きながら、地味に貯蓄し、優良株を買い続けました。92歳で亡くなった時、彼は800万ドル（約10億円）以上の資産を持っていました。<br/><br/>
            <strong className="font-bold">・リチャード・フスコーン（金融エリート）：</strong><br/>
            ハーバード卒でメリルリンチの役員。40代で早期リタイアしましたが、強欲になり、借金で豪邸を買い、リーマンショックですべてを失いました。<br/><br/>
            二人の差は「学歴」でも「運」でもありません。<strong className="text-purple-700 bg-purple-50 px-1 rounded">「忍耐強かったか、強欲だったか」</strong>という振る舞いの差だけです。
          </>
        )
      },

      // ★ コンポーネント: Rich vs Wealth
      {
        type: "component",
        component: <RichVsWealth />
      },

      {
        type: "text",
        headline: "「車の中の男」のパラドックス",
        body: (
          <>
            街でフェラーリを見かけた時、あなたは「運転している人はなんてクールなんだ」と思いますか？<br/>
            いいえ。思うのは<strong className="text-purple-700 bg-purple-50 px-1 rounded">「もし自分がアレに乗っていたら、クールに見られるだろうな」</strong>ということだけです。<br/><br/>
            誰も所有者自身には関心がありません。人々はあなたの持ち物を通して、自分自身の姿を想像しているだけです。<br/>
            他人からの尊敬や称賛を得るために高級品を買うのはやめましょう。それは「自由」を買うための資金を減らすだけの行為です。
          </>
        )
      },

      // ★ コンポーネント: バフェットグラフ
      {
        type: "component",
        component: <BuffettGraph />
      },

      {
        type: "text",
        headline: "お金がもたらす最高の配当",
        body: (
          <>
            なぜ私たちは富を築く必要があるのでしょうか？<br/>
            高級なモノを買うためではありません。<strong className="text-purple-700 bg-purple-50 px-1 rounded">「自分の時間をコントロールするため」</strong>です。<br/><br/>
            貯金があれば、病気で休んでも生活に困りません。<br/>
            さらに資産があれば、理不尽な上司に頭を下げる必要も、嫌な仕事を続ける必要もなくなります。<br/>
            「好きな時に、好きな人と、好きなだけ、好きなことができる」。これこそが、お金が支払ってくれる最高の配当なのです。
          </>
        )
      },
      
      {
        type: "text",
        headline: "「合理的」ではなく「納得ずく」を目指せ",
        body: (
          <>
            机上の空論で「数学的に最適なポートフォリオ」を作っても意味がありません。<br/>
            なぜなら、私たちは感情を持った人間だからです。<br/><br/>
            暴落時に恐怖で夜も眠れなくなるような「最適な計画」よりも、多少リターンは劣っても<strong className="text-purple-700 bg-purple-50 px-1 rounded">「これなら暴落しても手放さずに続けられる」と思える「納得できる計画」</strong>の方が、結果的に大きな富をもたらします。<br/>
            長く市場に居続けること（サバイバル）こそが、複利の恩恵を受ける絶対条件だからです。
          </>
        )
      }
    ]
  }
};