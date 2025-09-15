export interface ProductData {
  id: string;
  badge?: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  originalPrice: number;
  currentPrice: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}
