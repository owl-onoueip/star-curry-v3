import { Switch, Route } from 'wouter';
import { useState } from 'react';

// メニューデータとユーティリティを直接インポート
import { menuItems, menuCategoryGroups } from './data/menu';
import { imageMapping } from './data/imageMapping';

// 画像URL取得関数をここで定義
function getImageUrl(itemId: string, fallbackUrl: string): string {
  if (imageMapping[itemId]) {
    const mappedFile = imageMapping[itemId];
    const imageUrl = `/api/assets/${mappedFile}`;
    console.log(`[getImageUrl] ${itemId} -> ${mappedFile} (URL: ${imageUrl})`);
    return imageUrl;
  }
  
  console.log(`[getImageUrl] ${itemId} -> fallback: ${fallbackUrl}`);
  return fallbackUrl;
}

// Header コンポーネント
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      {/* STARロゴセクション */}
      <div className="text-center py-6">
        <h1 className="text-3xl md:text-5xl font-bold text-star-golden mb-2">STAR</h1>
        <p className="text-sm md:text-lg text-star-golden italic">Restaurant & Bar</p>
      </div>
      
      {/* デスクトップナビゲーション */}
      <nav className="bg-yellow-400 hidden md:block">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <a href="/" className="px-4 lg:px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600 text-sm lg:text-base">
              HOME
            </a>
            <a href="/staff" className="px-4 lg:px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600 text-sm lg:text-base">
              STAFF
            </a>
            <a href="/services" className="px-4 lg:px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600 text-sm lg:text-base">
              SERVICES
            </a>
            <a href="/food-menu" className="px-4 lg:px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600 text-sm lg:text-base">
              FOOD MENU
            </a>
            <a href="/drink-menu" className="px-4 lg:px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600 text-sm lg:text-base">
              DRINK MENU
            </a>
            <a href="/information" className="px-4 lg:px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600 text-sm lg:text-base">
              INFORMATION
            </a>
            <a href="/contact" className="px-4 lg:px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600 text-sm lg:text-base">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* モバイルハンバーガーメニュー */}
      <div className="md:hidden bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <span className="text-black font-semibold">MENU</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8"
              aria-label="メニューを開く"
            >
              <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
          </div>

          {/* モバイルメニュー展開 */}
          {isMenuOpen && (
            <div className="pb-4">
              <div className="grid grid-cols-2 gap-2">
                <a href="/" className="block px-3 py-3 text-center text-black font-semibold bg-white hover:bg-green-500 transition-colors duration-200 rounded text-sm">
                  HOME
                </a>
                <a href="/staff" className="block px-3 py-3 text-center text-black font-semibold bg-white hover:bg-green-500 transition-colors duration-200 rounded text-sm">
                  STAFF
                </a>
                <a href="/services" className="block px-3 py-3 text-center text-black font-semibold bg-white hover:bg-green-500 transition-colors duration-200 rounded text-sm">
                  SERVICES
                </a>
                <a href="/food-menu" className="block px-3 py-3 text-center text-black font-semibold bg-white hover:bg-green-500 transition-colors duration-200 rounded text-sm">
                  FOOD MENU
                </a>
                <a href="/drink-menu" className="block px-3 py-3 text-center text-black font-semibold bg-white hover:bg-green-500 transition-colors duration-200 rounded text-sm">
                  DRINK MENU
                </a>
                <a href="/information" className="block px-3 py-3 text-center text-black font-semibold bg-white hover:bg-green-500 transition-colors duration-200 rounded text-sm">
                  INFORMATION
                </a>
                <a href="/contact" className="block px-3 py-3 text-center text-black font-semibold bg-white hover:bg-green-500 transition-colors duration-200 rounded text-sm">
                  CONTACT
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// Hero コンポーネント
function Hero() {
  return (
    <section className="bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 md:mb-8">
          <span className="inline-block bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold">
            ⭐ INDIAN NEPALI ⭐
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 mb-6 md:mb-8">
          Restaurant & Bar
        </h1>
        
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-4 md:mb-6">
          東川口の本格インドカレー・ネパール料理のSTARです。
        </p>
        
        <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8">
          本場のスパイス料理をお楽しみください。
        </p>
        
        <p className="text-sm md:text-lg lg:text-xl text-gray-500 italic">
          It is a star (STAR) of authentic Indian curry and Nepalese cuisine in Higashikawaguchi.
        </p>
      </div>
    </section>
  );
}

// FOOD MENUページの実装
function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // カテゴリでフィルタリング
  const filteredItems = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* ページタイトル */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">FOOD MENU</h1>
          <p className="text-lg md:text-xl text-gray-600">136種類の豊富なメニューをお楽しみください</p>
        </div>

        {/* カテゴリグループナビゲーション */}
        <div className="space-y-6 mb-8 md:mb-12">
          {menuCategoryGroups.map((group) => (
            <div key={group.name} className="text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{group.name}</h2>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {group.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.id ? null : category.id
                    )}
                    className={`px-3 md:px-4 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `${group.color} ${group.textColor} shadow-lg scale-105`
                        : `bg-gray-100 text-gray-700 hover:bg-gray-200 ${group.hoverColor} hover:text-white`
                    }`}
                  >
                    {category.displayName}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 全カテゴリ表示ボタン */}
        <div className="text-center mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-200 ${
              selectedCategory === null
                ? 'bg-star-golden text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-star-golden hover:text-white'
            }`}
          >
            🍽️ 全メニュー表示 (136品)
          </button>
        </div>

        {/* 選択中のカテゴリ表示 */}
        {selectedCategory && (
          <div className="text-center mb-6">
            <p className="text-lg md:text-xl text-gray-600">
              選択中: <span className="font-bold text-gray-800">
                {menuCategoryGroups
                  .flatMap(group => group.categories)
                  .find(cat => cat.id === selectedCategory)?.displayName
                }
              </span>
              ({filteredItems.length}品)
            </p>
          </div>
        )}

        {/* メニューアイテム表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* 料理画像 */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={getImageUrl(item.id, item.image)}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* 料理情報 */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-bold text-star-golden">
                    ¥{item.price.toLocaleString()}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {menuCategoryGroups
                      .flatMap(group => group.categories)
                      .find(cat => cat.id === item.category)?.icon
                    }
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* メニュー統計情報 */}
        <div className="mt-12 md:mt-16 text-center bg-gray-50 rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">メニュー統計</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-star-golden">{menuItems.length}</div>
              <div className="text-sm md:text-base text-gray-600">総メニュー数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-star-golden">
                {menuCategoryGroups.flatMap(group => group.categories).length}
              </div>
              <div className="text-sm md:text-base text-gray-600">カテゴリ数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-star-golden">
                ¥{Math.min(...menuItems.map(item => item.price)).toLocaleString()}
              </div>
              <div className="text-sm md:text-base text-gray-600">最低価格</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-star-golden">
                ¥{Math.max(...menuItems.map(item => item.price)).toLocaleString()}
              </div>
              <div className="text-sm md:text-base text-gray-600">最高価格</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// CONTACTページの実装
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // フォーム送信のシミュレーション（実際のAPIエンドポイントは未実装）
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* ページタイトル */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">CONTACT</h1>
          <p className="text-lg md:text-xl text-gray-600">お問い合わせ・ご予約</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* 店舗情報 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">店舗情報</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-star-golden rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">住所</h3>
                  <p className="text-gray-600">〒334-0013<br />埼玉県川口市南鳩ヶ谷5-25-1</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-star-golden rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">電話番号</h3>
                  <p className="text-gray-600">048-287-3980</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-star-golden rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">営業時間</h3>
                  <p className="text-gray-600">
                    ランチ: 11:00 - 15:00<br />
                    ディナー: 17:00 - 23:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-star-golden rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🚗</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">アクセス</h3>
                  <p className="text-gray-600">
                    JR京浜東北線「東川口駅」徒歩12分<br />
                    駐車場8台完備
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-star-golden rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">📅</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">定休日</h3>
                  <p className="text-gray-600">火曜日</p>
                </div>
              </div>
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">お問い合わせフォーム</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-golden focus:border-transparent"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-golden focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-golden focus:border-transparent"
                  placeholder="090-1234-5678"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望日
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-golden focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望時間
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-golden focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="17:00">17:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                  人数
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-golden focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="1">1名</option>
                  <option value="2">2名</option>
                  <option value="3">3名</option>
                  <option value="4">4名</option>
                  <option value="5">5名</option>
                  <option value="6">6名</option>
                  <option value="7">7名</option>
                  <option value="8">8名</option>
                  <option value="9">9名</option>
                  <option value="10+">10名以上</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-golden focus:border-transparent"
                  placeholder="ご質問やご要望などがございましたらお聞かせください"
                />
              </div>

              {/* 送信状態表示 */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  お問い合わせを受け付けました。ありがとうございます。
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  送信に失敗しました。しばらくしてから再度お試しください。
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-star-golden text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

// INFORMATIONページの実装
function Information() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* ページタイトル */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">INFORMATION</h1>
          <p className="text-lg md:text-xl text-gray-600">店舗情報・お知らせ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* 店舗詳細情報 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">店舗詳細情報</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">営業時間</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">ランチタイム</span>
                    <span>11:00 - 15:00 (L.O. 14:30)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">ディナータイム</span>
                    <span>17:00 - 23:00 (L.O. 22:30)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-red-600">定休日</span>
                    <span className="text-red-600">火曜日</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">アクセス</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">住所：</span>
                    <span>〒334-0013 埼玉県川口市南鳩ヶ谷5-25-1</span>
                  </div>
                  <div>
                    <span className="font-medium">最寄り駅：</span>
                    <span>JR京浜東北線「東川口駅」徒歩12分</span>
                  </div>
                  <div>
                    <span className="font-medium">駐車場：</span>
                    <span>8台完備（無料）</span>
                  </div>
                  <div>
                    <span className="font-medium">電話：</span>
                    <span>048-287-3980</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">お支払い方法</h3>
                <div className="space-y-2">
                  <div>✅ 現金</div>
                  <div>✅ クレジットカード（VISA, MasterCard, JCB, AMEX）</div>
                  <div>✅ 電子マネー（iD, nanaco, WAON, 楽天Edy）</div>
                  <div>✅ QRコード決済（PayPay, 楽天Pay, LINE Pay）</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">設備・サービス</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>🍺 アルコール提供</div>
                  <div>🚗 駐車場完備</div>
                  <div>👥 団体様対応</div>
                  <div>🎉 貸切対応</div>
                  <div>📱 Wi-Fi完備</div>
                  <div>🚭 禁煙</div>
                  <div>♿ バリアフリー</div>
                  <div>📞 電話予約</div>
                </div>
              </div>
            </div>
          </div>

          {/* お知らせ・ニュース */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">お知らせ</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-star-golden pl-6 py-4">
                <div className="text-sm text-gray-500 mb-2">2024年1月15日</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">新春特別メニューのお知らせ</h3>
                <p className="text-gray-600">新年を記念して、限定メニューをご用意いたします。本格スパイスカレーとネパール料理をお楽しみください。</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <div className="text-sm text-gray-500 mb-2">2024年1月10日</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">年末年始営業時間のお知らせ</h3>
                <p className="text-gray-600">12月30日〜1月3日は特別営業時間となります。詳細はお電話にてお問い合わせください。</p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-4">
                <div className="text-sm text-gray-500 mb-2">2024年1月5日</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">ランチセット価格改定のお知らせ</h3>
                <p className="text-gray-600">原材料価格高騰により、一部メニューの価格を改定させていただきます。ご理解のほどよろしくお願いいたします。</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <div className="text-sm text-gray-500 mb-2">2023年12月25日</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">忘年会・新年会承ります</h3>
                <p className="text-gray-600">最大30名様までの団体様でのご利用を承っております。コース料理もご用意しておりますので、お気軽にお問い合わせください。</p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 py-4">
                <div className="text-sm text-gray-500 mb-2">2023年12月20日</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">年末のご予約について</h3>
                <p className="text-gray-600">年末は混雑が予想されます。お早めのご予約をお勧めいたします。お電話またはこちらのフォームからご予約ください。</p>
              </div>
            </div>

            {/* コンセプト */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">STARのこだわり</h2>
              <div className="bg-gradient-to-r from-star-golden to-yellow-600 text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">本格的なスパイス料理をお届け</h3>
                <p className="leading-relaxed">
                  STARでは、インドとネパールから直輸入したスパイスを使用し、本場の味を再現しています。
                  経験豊富なシェフが心を込めて調理する136種類のメニューは、辛さや量の調整も可能です。
                  東川口で本格的なスパイス料理をお楽しみいただける、地域密着型のレストランです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
    </div>
  );
}

function Staff() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">STAFF</h1>
          <p className="text-lg md:text-xl text-gray-600">スタッフ紹介</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center bg-gray-50 rounded-lg p-8">
              <div className="w-32 h-32 bg-star-golden rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-white">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ヘッドシェフ</h3>
              <p className="text-gray-600 mb-4">インド・ネパール料理歴15年</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                本場インドで修行を積んだベテランシェフ。伝統的なスパイス使いと現代的なアレンジを融合させた料理をお届けします。
              </p>
            </div>

            <div className="text-center bg-gray-50 rounded-lg p-8">
              <div className="w-32 h-32 bg-star-golden rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-white">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">店長</h3>
              <p className="text-gray-600 mb-4">飲食業界歴10年</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                お客様に最高のサービスを提供することをモットーに、スタッフ一同、心を込めてお迎えいたします。
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-star-golden to-yellow-600 text-white rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">私たちの想い</h3>
            <p className="leading-relaxed">
              STARでは、お客様に本格的なインド・ネパール料理を通じて、
              心温まるひとときをお過ごしいただけるよう、スタッフ一同努めております。
              地域の皆様に愛されるお店を目指し、日々精進してまいります。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function Services() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">SERVICES</h1>
          <p className="text-lg md:text-xl text-gray-600">サービス案内</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-star-golden rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-white">🍽️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">ランチサービス</h3>
            <p className="text-gray-600 leading-relaxed">
              平日11:00-15:00限定のお得なランチセット。
              カレー・ナン・ライス・サラダがセットで1000円から。
            </p>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-star-golden rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-white">🎉</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">パーティーコース</h3>
            <p className="text-gray-600 leading-relaxed">
              歓送迎会、忘年会、誕生日会などに最適。
              4名様から承ります。要予約。
            </p>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-star-golden rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-white">🍱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">テイクアウト</h3>
            <p className="text-gray-600 leading-relaxed">
              全メニューテイクアウト可能。
              事前にお電話でご注文いただくとスムーズです。
            </p>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-star-golden rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-white">🚗</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">駐車場完備</h3>
            <p className="text-gray-600 leading-relaxed">
              8台分の無料駐車場をご用意。
              お車でのご来店も安心です。
            </p>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-star-golden rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-white">🏢</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">貸切対応</h3>
            <p className="text-gray-600 leading-relaxed">
              最大30名様まで貸切可能。
              会社の歓送迎会や同窓会などにご利用ください。
            </p>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-star-golden rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-white">🌶️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">辛さ調整</h3>
            <p className="text-gray-600 leading-relaxed">
              1番（甘口）から5番（激辛）まで、
              お好みに合わせて辛さを調整いたします。
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">営業時間・料金</h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-star-golden to-yellow-600 text-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-2">営業時間</h3>
                <p>ランチ: 11:00-15:00</p>
                <p>ディナー: 17:00-23:00</p>
                <p className="mt-2 text-sm">定休日: 火曜日</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">予算目安</h3>
                <p>ランチ: 1,000円〜2,000円</p>
                <p>ディナー: 2,000円〜4,000円</p>
                <p className="mt-2 text-sm">コース: 3,000円〜5,000円</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function DrinkMenu() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">DRINK MENU</h1>
          <p className="text-lg md:text-xl text-gray-600">お飲み物メニュー</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* アルコール */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">🍺 アルコール</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ビール</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>アサヒスーパードライ</span>
                    <span className="font-bold text-star-golden">¥550</span>
                  </div>
                  <div className="flex justify-between">
                    <span>キリン一番搾り</span>
                    <span className="font-bold text-star-golden">¥550</span>
                  </div>
                  <div className="flex justify-between">
                    <span>サッポロ黒ラベル</span>
                    <span className="font-bold text-star-golden">¥550</span>
                  </div>
                  <div className="flex justify-between">
                    <span>キングフィッシャー（インドビール）</span>
                    <span className="font-bold text-star-golden">¥650</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ワイン</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>赤ワイン（グラス）</span>
                    <span className="font-bold text-star-golden">¥480</span>
                  </div>
                  <div className="flex justify-between">
                    <span>白ワイン（グラス）</span>
                    <span className="font-bold text-star-golden">¥480</span>
                  </div>
                  <div className="flex justify-between">
                    <span>赤ワイン（ボトル）</span>
                    <span className="font-bold text-star-golden">¥2,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>白ワイン（ボトル）</span>
                    <span className="font-bold text-star-golden">¥2,800</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">焼酎・日本酒</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>芋焼酎</span>
                    <span className="font-bold text-star-golden">¥420</span>
                  </div>
                  <div className="flex justify-between">
                    <span>麦焼酎</span>
                    <span className="font-bold text-star-golden">¥420</span>
                  </div>
                  <div className="flex justify-between">
                    <span>日本酒（1合）</span>
                    <span className="font-bold text-star-golden">¥480</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ソフトドリンク */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">🥤 ソフトドリンク</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ドリンク</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>コーラ</span>
                    <span className="font-bold text-star-golden">¥320</span>
                  </div>
                  <div className="flex justify-between">
                    <span>オレンジジュース</span>
                    <span className="font-bold text-star-golden">¥320</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ウーロン茶</span>
                    <span className="font-bold text-star-golden">¥320</span>
                  </div>
                  <div className="flex justify-between">
                    <span>アイスコーヒー</span>
                    <span className="font-bold text-star-golden">¥350</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ホットコーヒー</span>
                    <span className="font-bold text-star-golden">¥350</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">インドドリンク</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>チャイ（インドミルクティー）</span>
                    <span className="font-bold text-star-golden">¥420</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ラッシー（プレーン）</span>
                    <span className="font-bold text-star-golden">¥450</span>
                  </div>
                  <div className="flex justify-between">
                    <span>マンゴーラッシー</span>
                    <span className="font-bold text-star-golden">¥480</span>
                  </div>
                  <div className="flex justify-between">
                    <span>バナナラッシー</span>
                    <span className="font-bold text-star-golden">¥480</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">その他</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>お水</span>
                    <span className="font-bold text-star-golden">無料</span>
                  </div>
                  <div className="flex justify-between">
                    <span>アイスクリーム</span>
                    <span className="font-bold text-star-golden">¥350</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-star-golden to-yellow-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">🎉 飲み放題プラン</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>アルコール飲み放題（2時間）</span>
                    <span className="font-bold">¥1,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ソフトドリンク飲み放題（2時間）</span>
                    <span className="font-bold">¥800</span>
                  </div>
                  <p className="text-sm mt-3">※コース料理とセットでのご利用がお得です</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/staff" component={Staff} />
        <Route path="/services" component={Services} />
        <Route path="/food-menu" component={FoodMenu} />
        <Route path="/drink-menu" component={DrinkMenu} />
        <Route path="/information" component={Information} />
        <Route path="/contact" component={Contact} />
        <Route>
          <div className="min-h-screen flex items-center justify-center px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">404 - ページが見つかりません</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
