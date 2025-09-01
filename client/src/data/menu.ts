export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// カテゴリをグループ分け（色分け・アイコン付き）
export const menuCategoryGroups = [
  {
    name: 'アラカルト',
    color: 'bg-green-500',
    textColor: 'text-white',
    hoverColor: 'hover:bg-green-600',
    categories: [
      { id: 'salads', name: 'サラダ', displayName: '🥗 サラダ', icon: '🥗' },
      { id: 'stir-fry', name: '炒め料理', displayName: '🍳 炒め料理', icon: '🍳' },
      { id: 'tandoori', name: 'タンドリー料理', displayName: '🔥 タンドリー料理', icon: '🔥' },
      { id: 'snacks', name: 'スナック', displayName: '🍿 スナック', icon: '🍿' },
      { id: 'soups', name: 'スープ', displayName: '🍲 スープ', icon: '🍲' },
      { id: 'nepali-snacks', name: 'ネパールスナック', displayName: '🏔️ ネパールスナック', icon: '🏔️' },
      { id: 'asian', name: 'アジアン料理', displayName: '🍜 アジアン料理', icon: '🍜' },
      { id: 'ice-cream', name: 'アイス', displayName: '🍨 アイス', icon: '🍨' },
    ]
  },
  {
    name: '🍛 CURRY MENU',
    color: 'bg-orange-500',
    textColor: 'text-white',
    hoverColor: 'hover:bg-orange-600',
    categories: [
      { id: 'chicken-curry', name: 'Chicken Curry', displayName: '🐔 Chicken Curry', icon: '🐔' },
      { id: 'mutton-curry', name: 'Mutton Curry', displayName: '🐑 Mutton Curry', icon: '🐑' },
      { id: 'seafood-curry', name: 'Seafood Curry', displayName: '🦐 Seafood Curry', icon: '🦐' },
      { id: 'fish-curry', name: 'Fish Curry', displayName: '🐟 Fish Curry', icon: '🐟' },
      { id: 'vegetable-curry', name: 'Vegetable Curry', displayName: '🥬 Vegetable Curry', icon: '🥬' },
      { id: 'beans-curry', name: 'Beans Curry', displayName: '🌰 Beans Curry', icon: '🌰' },
    ]
  },
  {
    name: 'ライス・ナン・セット',
    color: 'bg-blue-500',
    textColor: 'text-white',
    hoverColor: 'hover:bg-blue-600',
    categories: [
      { id: 'rice', name: 'Rice', displayName: '🍚 Rice', icon: '🍚' },
      { id: 'nan', name: 'Nan', displayName: '🥖 Nan', icon: '🥖' },
      { id: 'lunch-set', name: 'Lunch Set', displayName: '🍽️ Lunch Set', icon: '🍽️' },
      { id: 'dinner-set', name: 'Dinner Set', displayName: '🌙 Dinner Set', icon: '🌙' },
      { id: 'party', name: 'Party', displayName: '🎉 Party', icon: '🎉' },
      { id: 'bento', name: 'お弁当', displayName: '🍱 お弁当', icon: '🍱' },
    ]
  }
];

// 全カテゴリのフラットリスト（既存コードとの互換性のため）
export const menuCategories = menuCategoryGroups.flatMap(group => group.categories);

// 一時的なメニューアイテム配列（後で完全版に置き換え）
export const menuItems: MenuItem[] = [
  // 基本的なサンプルアイテム
  {
    id: 'green-salad',
    name: 'グリーンサラダ',
    description: 'キャベツ。レタス、サニーレタス、トマト、キュウリなどの盛り合せ。',
    price: 630,
    image: 'placeholder.jpg',
    category: 'salads'
  }
];
