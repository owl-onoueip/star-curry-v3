import { imageMapping } from '../data/imageMapping';

// 画像URLを動的に取得する関数
export function getImageUrl(itemId: string, fallbackUrl: string): string {
  // imageMappingにマッピングがある場合、attached_assetsから画像を取得
  if (imageMapping[itemId]) {
    const mappedFile = imageMapping[itemId];
    const imageUrl = `/api/assets/${mappedFile}`;
    console.log(`[getImageUrl] ${itemId} -> ${mappedFile} (URL: ${imageUrl})`);
    return imageUrl;
  }
  
  console.log(`[getImageUrl] ${itemId} -> fallback: ${fallbackUrl}`);
  // マッピングがない場合はfallback URL（Unsplash等）を使用
  return fallbackUrl;
}
