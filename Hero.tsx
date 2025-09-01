import { Link } from 'wouter';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
      <div className="absolute inset-0 bg-black opacity-40"></div>
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
            <Link href="/menu" className="inline-block bg-star-golden hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg">
              メニューを見る
            </Link>
            <Link href="/contact" className="inline-block border-2 border-star-golden text-star-golden hover:bg-star-golden hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
              ご予約・お問い合わせ
            </Link>
          </div>
        </div>
      </div>
      
      {/* 装飾的な要素 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-star-golden via-yellow-400 to-star-golden"></div>
    </section>
  );
}
