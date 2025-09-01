import { useState } from 'react';
import { Link } from 'wouter';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-star-golden">
              STAR Restaurant & Bar
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-1">
            <Link href="/" className="px-4 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
              ホーム
            </Link>
            <Link href="/menu" className="px-4 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
              メニュー
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
              お問い合わせ
            </Link>
            <Link href="/information" className="px-4 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
              お知らせ
            </Link>
          </nav>

          {/* モバイルハンバーガーメニュー */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            aria-label="メニューを開く"
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
              <Link href="/" className="block px-3 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
                ホーム
              </Link>
              <Link href="/menu" className="block px-3 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
                メニュー
              </Link>
              <Link href="/contact" className="block px-3 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
                お問い合わせ
              </Link>
              <Link href="/information" className="block px-3 py-2 bg-yellow-500 hover:bg-green-500 text-black font-semibold rounded transition-colors duration-200">
                お知らせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
