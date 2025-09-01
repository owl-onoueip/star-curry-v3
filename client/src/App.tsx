import { Switch, Route } from 'wouter';

// Header コンポーネント
function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-star-golden">
            STAR Restaurant & Bar
          </div>
          <nav className="hidden md:flex space-x-1">
            <a href="/" className="px-4 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
              ホーム
            </a>
            <a href="/menu" className="px-4 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
              メニュー
            </a>
            <a href="/contact" className="px-4 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
              お問い合わせ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Hero コンポーネント
function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-star-golden">
            STAR Restaurant & Bar
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            本格的なインド・ネパール料理をお楽しみください
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300">
            新鮮な食材と伝統的なスパイスで作る136種類の豊富なメニュー
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/menu" className="inline-block bg-star-golden hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg">
              メニューを見る
            </a>
            <a href="/contact" className="inline-block border-2 border-star-golden text-star-golden hover:bg-star-golden hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
              ご予約・お問い合わせ
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-star-golden via-yellow-400 to-star-golden"></div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            本格インド・ネパール料理
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            136種類の豊富なメニューをご用意しております
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">カレーメニュー</h3>
              <p className="text-gray-600">チキン、マトン、シーフード、ベジタブルカレーなど豊富な種類</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">タンドリー料理</h3>
              <p className="text-gray-600">炭火で焼き上げた本格的なタンドリーチキンやナン</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">セットメニュー</h3>
              <p className="text-gray-600">ランチセット、ディナーセット、お弁当など</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Menu() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          メニュー
        </h1>
        <p className="text-center text-gray-600 mb-8">
          136種類の豊富なメニューを準備中です
        </p>
      </main>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          お問い合わせ
        </h1>
        <p className="text-center text-gray-600 mb-8">
          お気軽にお問い合わせください
        </p>
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
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">404 - ページが見つかりません</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
