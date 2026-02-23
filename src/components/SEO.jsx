import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/logo.png',
  type = 'website',
  structuredData = null
}) => {
  const location = useLocation();
  const baseUrl = 'https://cybronis.com';
  const currentUrl = `${baseUrl}${location.pathname}`;

  // Default keywords that should appear on every page
  const defaultKeywords = [
    'Cybronis', 'cybronis', 'CYBRONIS',
    'web development', 'Web Development', 'WEB DEVELOPMENT',
    'web application development', 'Web Application Development', 'WEB APPLICATION DEVELOPMENT',
    'website making', 'Website Making', 'WEBSITE MAKING',
    'application development', 'Application Development', 'APPLICATION DEVELOPMENT',
    'application making', 'Application Making', 'APPLICATION MAKING',
    'website development', 'Website Development', 'WEBSITE DEVELOPMENT',
    'web app development', 'Web App Development', 'WEB APP DEVELOPMENT',
    'mobile app development', 'Mobile App Development', 'MOBILE APP DEVELOPMENT',
    'software development', 'Software Development', 'SOFTWARE DEVELOPMENT',
    'custom website', 'Custom Website', 'CUSTOM WEBSITE',
    'web design', 'Web Design', 'WEB DESIGN',
    'app development company', 'App Development Company', 'APP DEVELOPMENT COMPANY',
    'web development company', 'Web Development Company', 'WEB DEVELOPMENT COMPANY',
    'cybronis ai', 'Cybronis AI', 'CYBRONIS AI',
    'cybronisai', 'CybronisAI', 'CYBRONISAI',
    'wise deployer', 'Wise Deployer', 'WISE DEPLOYER',
    'salesforce automation', 'Salesforce Automation', 'SALESFORCE AUTOMATION',
    'ai platform', 'AI Platform', 'AI PLATFORM',
    'automation platform', 'Automation Platform', 'AUTOMATION PLATFORM'
  ];

  // Combine default keywords with page-specific keywords
  const allKeywords = [...defaultKeywords, ...(keywords || [])].join(', ');

  useEffect(() => {
    // Update document title
    document.title = title || 'Cybronis - Website, Web App & Mobile App Development Studio';

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description || 'Cybronis - Leading web development and application development company. Expert in website making, web application development, and custom software solutions.');
    updateMetaTag('keywords', allKeywords);
    updateMetaTag('author', 'Prashant Raj - Cybronis');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');

    // Open Graph tags
    updateMetaTag('og:title', title || 'Cybronis - Website, Web App & Mobile App Development Studio', true);
    updateMetaTag('og:description', description || 'Cybronis - Leading web development and application development company. Expert in website making, web application development, and custom software solutions.', true);
    updateMetaTag('og:image', `${baseUrl}${image}`, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Cybronis', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title || 'Cybronis - Website, Web App & Mobile App Development Studio');
    updateMetaTag('twitter:description', description || 'Cybronis - Leading web development and application development company. Expert in website making, web application development, and custom software solutions.');
    updateMetaTag('twitter:image', `${baseUrl}${image}`);
    updateMetaTag('twitter:site', '@cybronis');
    updateMetaTag('twitter:creator', '@cybronis');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Additional SEO meta tags
    updateMetaTag('theme-color', '#0ea5e9');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('apple-mobile-web-app-title', 'Cybronis');
    updateMetaTag('application-name', 'Cybronis');
    updateMetaTag('msapplication-TileColor', '#0ea5e9');
    updateMetaTag('msapplication-config', '/browserconfig.xml');

  }, [title, description, allKeywords, image, type, currentUrl, structuredData]);

  return null;
};

export default SEO;

