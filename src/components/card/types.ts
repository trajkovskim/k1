export type ProductProps = {
  imageHeight?: string;
  imageWidth?: string;
  id: number;
  title: string;
  summary?: string;
  amount?: string;
  bookmarked?: boolean;
  images?: string[];
  onView?: () => void;
  fullwidth?: boolean;
  className?: string;
};
