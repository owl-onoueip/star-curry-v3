import { Switch, Route } from 'wouter';

// Header コンポーネント - Replit版完全再現
function Header() {
  return (
    <header className="bg-black text-white">
      {/* STARロゴセクション */}
      <div className="text-center py-6">
        <h1 className="text-5xl font-bold text-star-golden mb-2">STAR</h1>
        <p className="text-lg text-star-golden italic">Restaurant & Bar</p>
      </div>
      
      {/* ナビゲーションメニュー */}
      <nav className="bg-yellow-400">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <a href="/" className="px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600">
              HOME
            </a>
            <a href="/staff" className="px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600">
              STAFF
            </a>
            <a href="/services" className="px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600">
              SERVICES
            </a>
            <a href="/food-menu" className="px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600">
              FOOD MENU
            </a>
            <a href="/drink-menu" className="px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600">
              DRINK MENU
            </a>
            <a href="/information" className="px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600">
              INFORMATION
            </a>
            <a href="/contact" className="px-6 py-4 text-black font-semibold hover:bg-green-500 transition-colors duration-200 border-r border-gray-600">
              CONTACT
            </a>
            <a href="/admin" className="px-6 py-4 text-white font-semibold bg-red-500 hover:bg-red-600 transition-colors duration-200">
              画像管理
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Hero コンポーネント - Replit版完全再現
function Hero() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* INDIAN NEPALI バッジ */}
        <div className="mb-8">
          <span className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold">
            ⭐ INDIAN NEPALI ⭐
          </span>
        </div>
        
        {/* メインタイトル */}
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-8">
          Restaurant & Bar
        </h1>
        
        {/* 日本語説明 */}
        <p className="text-2xl md:text-3xl text-gray-700 mb-6">
          東川口の本格インドカレー・ネパール料理のSTARです。
        </p>
        
        {/* サブテキスト */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          本場のスパイス料理をお楽しみください。
        </p>
        
        {/* 英語説明 */}
        <p className="text-lg md:text-xl text-gray-500 italic">
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
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">STAFF</h1>
        <p className="text-center text-gray-600 mb-8">スタッフ紹介ページ</p>
      </main>
    </div>
  );
}

function Services() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">SERVICES</h1>
        <p className="text-center text-gray-600 mb-8">サービス案内ページ</p>
      </main>
    </div>
  );
}

function FoodMenu() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">FOOD MENU</h1>
        <p className="text-center text-gray-600 mb-8">136種類の豊富なメニューを準備中です</p>
      </main>
    </div>
  );
}

function DrinkMenu() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">DRINK MENU</h1>
        <p className="text-center text-gray-600 mb-8">ドリンクメニューページ</p>
      </main>
    </div>
  );
}

function Information() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">INFORMATION</h1>
        <p className="text-center text-gray-600 mb-8">店舗情報・お知らせページ</p>
      </main>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">CONTACT</h1>
        <p className="text-center text-gray-600 mb-8">お問い合わせページ</p>
      </main>
    </div>
  );
}

function Admin() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">画像管理</h1>
        <p className="text-center text-gray-600 mb-8">管理者ページ</p>
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
        <Route path="/admin" component={Admin} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">404 - ページが見つかりません</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
