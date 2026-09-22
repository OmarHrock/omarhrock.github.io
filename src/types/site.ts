export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  locale: string;
  siteName: string;
  author: string;
  ogImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}
