import { Switch, Route } from 'wouter';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

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

function Information() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          お知らせ
        </h1>
        <p className="text-center text-gray-600 mb-8">
          最新のお知らせをお届けします
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
        <Route path="/information" component={Information} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">404 - ページが見つかりません</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
