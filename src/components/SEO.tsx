// import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'Clarithix - Where Complexity Meets Clarity',
  description = 'Simplifying complex technology for learners and businesses through structured thinking and clean systems. Full-stack development training and software architecture consulting.',
  keywords = 'tech education, full-stack development, software architecture, web development, coding bootcamp, React, Node.js, MongoDB, software consulting, clean code',
  ogImage = '/og-image.svg',
  ogType = 'website',
  canonicalUrl,
}: SEOProps) => {
  const siteUrl = 'https://clarithix.com';
  const fullTitle = title.includes('Clarithix') ? title : `${title} | Clarithix`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <header>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Clarithix" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Clarithix" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:creator" content="@clarithix" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#0B1220" />
      <meta name="msapplication-TileColor" content="#0B1220" />
    </header>
  );
};

export default SEO;
