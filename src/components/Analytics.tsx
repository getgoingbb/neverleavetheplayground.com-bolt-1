import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Analytics: React.FC = () => {
  return (
    <Helmet>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GT-P3NCVWX" />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-P3NCVWX');
        `}
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