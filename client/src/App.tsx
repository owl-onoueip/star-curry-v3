import { Switch, Route } from 'wouter';
import { useState } from 'react';
import { menuItems, menuCategoryGroups } from '../data/menu';
import { getImageUrl } from '../utils/getImageUrl';

// Header コンポーネント - 既存のまま
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
