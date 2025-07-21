export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://neverleavetheplayground.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*.xml$

# Allow important pages
Allow: /about-me/
Allow: /keynote-speaker/
Allow: /activities/
Allow: /public-videos/
Allow: /a-health-revolution/
Allow: /slides/
Allow: /testimonials-media/
Allow: /contact/
Allow: /blog/
Allow: /images/

# Social media verification
# Add your social media verification codes here when available
`;
};