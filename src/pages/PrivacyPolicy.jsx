import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-gray-700">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        
        <Link to="/" className="inline-flex items-center text-indigo-600 font-bold mb-8 hover:underline">
          <ArrowLeft size={20} className="mr-2"/> トップに戻る
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center border-b pb-4">
          <Shield className="mr-3 text-indigo-600" />
          プライバシーポリシー
        </h1>

        <div className="space-y-8 text-sm leading-relaxed">
          
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">1. 基本方針</h2>
            <p>
              当サイト（AssetBuild）は、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">2. 広告の配信について</h2>
            <p className="mb-4">
              当サイトは、第三者配信の広告サービス（Amazonアソシエイト・プログラム、A8.net、もしもアフィリエイト等）を利用しています。<br/>
              広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
            </p>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <p className="font-bold mb-2">Amazonアソシエイト・プログラムについて</p>
              <p>
                当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">3. アクセス解析ツールについて</h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br/>
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。<br/>
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">4. 免責事項</h2>
            <p>
              当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。<br/>
              記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。<br/><br/>
              当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。<br/>
              当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。<br/>
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。投資の最終判断はご自身の責任で行ってください。
            </p>
          </section>

          <div className="pt-8 border-t border-gray-100 text-xs text-gray-500 text-right">
            <p>制定日：2025年11月24日</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;