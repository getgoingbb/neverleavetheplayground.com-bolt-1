import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Never Leave The Playground - Stephen Jepson's Health Revolution",
  description = "Transform your health and longevity through the power of play. Stephen Jepson's revolutionary approach combines fun activities with cutting-edge science to enhance brain function, improve physical vitality, and unlock your body's natural potential for lifelong wellness.",
  keywords = "Stephen Jepson, Never Leave The Playground, health revolution, brain health, longevity, playful movement, anti-aging, cognitive improvement, physical vitality, neuroplasticity",
  canonicalUrl = "https://neverleavetheplayground.com/",
  ogImage = "https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png",
  ogType = "website",
  structuredData,
  noindex = false
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Stephen Jepson" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Never Leave The Playground" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@stephenjepson56" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Florida" />
      <meta name="geo.position" content="28.5383;-81.3792" />
      <meta name="ICBM" content="28.5383, -81.3792" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-US" />
      <html lang="en" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Research Citation Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "headline": "Physical Activity and Cognitive Function Research",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8918377/",
          "publisher": {
            "@type": "Organization",
            "name": "National Institutes of Health",
            "url": "https://www.nih.gov/"
          },
          "about": [
            "Neuroplasticity",
            "Physical Activity",
            "Cognitive Function",
            "Brain Health"
          ]
        })}
      </script>
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      
      {/* Bing Webmaster Tools */}
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Facebook Domain Verification */}
      <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
    </Helmet>
  );
};