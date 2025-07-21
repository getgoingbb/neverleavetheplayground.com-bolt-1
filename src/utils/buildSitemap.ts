import { generateSitemap } from './generateSitemap';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

export const buildSitemap = async () => {
  try {
    console.log('🗺️ Generating sitemap...');
    const sitemap = await generateSitemap();
    
    // Write to public directory
    const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
    writeFileSync(sitemapPath, sitemap);
    
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📅 Last updated: ${new Date().toISOString()}`);
    
    return sitemap;
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    throw error;
  }
};

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  buildSitemap();
}