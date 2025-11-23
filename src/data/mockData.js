// 生成したJSONファイルをインポート
import sp500Raw from './sp500_full.json';
import acwiRaw from './acwi_full.json';

// データ整形用のヘルパー関数
// Pythonで作った [{"Date": "1980-01-01", "Close": 100}, ...] を
// Recharts用の [{date: "1980/01", price: 100}, ...] に変換します
const formatData = (rawData) => {
  return rawData.map(item => {
    const dateObj = new Date(item.Date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    
    return {
      date: `${year}/${month.toString().padStart(2, '0')}`,
      price: item.Close 
    };
  });
};

// S&P500データ (1980年以降に絞るのが一般的でおすすめ)
export const generateSp500Data = () => {
  // 元データが古い場合もあるので、1980年以降にフィルタリング
  const filtered = sp500Raw//.filter(item => new Date(item.Date).getFullYear() >= 1928);
  return formatData(filtered);
};

// オルカンデータ
export const generateAllCountryData = () => {
  // オルカン(ACWI)はデータが新しい(2008年~)のでそのまま全期間返します
  return formatData(acwiRaw);
};