import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-gray-700">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        
        <Link to="/" className="inline-flex items-center text-indigo-600 font-bold mb-8 hover:underline">
          <ArrowLeft size={20} className="mr-2"/> トップに戻る
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center border-b pb-4">
          <User className="mr-3 text-indigo-600" />
          運営者情報
        </h1>

        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
            <User size={40} className="text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">管理人</h2>
            <p className="text-indigo-600 font-bold mb-4">30代 / 通信系企業勤務 / 個人投資家</p>
            <p className="leading-relaxed text-sm">
              長野県出身。関東での10年間の生活を経て、現在はフルリモートで働きながら地元で暮らしています。<br/>
              「7つの習慣」や「Atomic Habits」などの書籍を通じて習慣化の技術を研究し、自身の資産形成に応用。<br/>
              インデックス投資を軸に、無理なく続けられる資産形成のノウハウを発信しています。<br/><br/>
              将来は「習慣コンサルタント」として独立し、多くの人の人生を好転させる手助けをすることが目標です。
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4">お問い合わせ</h3>
          <p className="text-sm text-gray-600 mb-4">
            当サイトに関するお問い合わせ、ご感想、ご要望は以下のメールアドレスよりお願いいたします。
          </p>
          {/* メールアドレスを記載するか、Googleフォームのリンクを貼るのが一般的です */}
          <div className="text-sm">
            <span className="font-bold text-gray-500">Email: </span>
            <a href="mailto:your-email@example.com" className="text-indigo-600 hover:underline">m.katsuno.pv@gmail.com</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;