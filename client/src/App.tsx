import { Switch, Route } from 'wouter';
import { useState } from 'react';

// Header コンポーネント - モバイル対応版
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

// Hero コンポーネント - モバイル対応版
function Hero() {
  return (
    <section className="bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4 text-center">
        {/* INDIAN NEPALI バッジ */}
        <div className="mb-6 md:mb-8">
          <span className="inline-block bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold">
            ⭐ INDIAN NEPALI ⭐
          </span>
        </div>
        
        {/* メインタイトル */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 mb-6 md:mb-8">
          Restaurant & Bar
        </h1>
        
        {/* 日本語説明 */}
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-4 md:mb-6">
          東川口の本格インドカレー・ネパール料理のSTARです。
        </p>
        
        {/* サブテキスト */}
        <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8">
          本場のスパイス料理をお楽しみください。
        </p>
        
        {/* 英語説明 */}
        <p className="text-sm md:text-lg lg:text-xl text-gray-500 italic">
          It is a star (STAR) of authentic Indian curry and Nepalese cuisine in Higashikawaguchi.
        </p>
      </div>
    </section>
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
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">STAFF</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-8">スタッフ紹介ページ</p>
      </main>
    </div>
  );
}

function Services() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">SERVICES</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-8">サービス案内ページ</p>
      </main>
    </div>
  );
}

function FoodMenu() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">FOOD MENU</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-8">136種類の豊富なメニューを準備中です</p>
      </main>
    </div>
  );
}

function DrinkMenu() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">DRINK MENU</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-8">ドリンクメニューページ</p>
      </main>
    </div>
  );
}

function Information() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">INFORMATION</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-8">店舗情報・お知らせページ</p>
      </main>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">CONTACT</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-8">お問い合わせページ</p>
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
