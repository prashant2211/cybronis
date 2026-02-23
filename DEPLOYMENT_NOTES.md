# Deployment Notes for Sitemap.xml

## Issue
If you're seeing a different sitemap.xml (like from mahilavikashfoundation.org) when visiting https://cybronis.com/sitemap.xml, follow these steps:

## Solution Steps

### 1. Build the Frontend
```bash
cd cybronis/FrontEnd
npm run build
```

This will create a `dist` folder with all static files including `sitemap.xml`.

### 2. Verify Sitemap Location
After building, check that `sitemap.xml` is in the `dist` folder:
```bash
ls dist/sitemap.xml
```

### 3. Deploy the Build
- Copy the entire `dist` folder contents to your web server
- Ensure `sitemap.xml` is in the root directory of your website

### 4. Clear Server Cache
- Clear any CDN cache (Cloudflare, etc.)
- Clear server-side cache
- Wait a few minutes for DNS propagation

### 5. Verify Sitemap
Visit: https://cybronis.com/sitemap.xml

You should see the Cybronis sitemap, not another website's sitemap.

## Server Configuration

### For Apache (.htaccess)
The `.htaccess` file in the `public` folder should handle routing. Make sure it's deployed.

### For Nginx
Add this to your Nginx config:
```nginx
location /sitemap.xml {
    root /path/to/your/dist;
    try_files $uri =404;
}
```

### For Vercel/Netlify
The sitemap.xml in the `public` folder will be automatically served at the root.

## Testing Locally

1. Build the project:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

3. Visit: http://localhost:4173/sitemap.xml

You should see the correct sitemap.

## If Still Seeing Wrong Sitemap

1. **Check DNS**: Ensure cybronis.com points to your server
2. **Check Server**: Verify you're deploying to the correct server
3. **Check File**: Ensure the sitemap.xml file in dist/ has the correct content
4. **Clear Browser Cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. **Check CDN**: If using Cloudflare or similar, purge the cache

## Current Sitemap Content

The sitemap includes:
- Homepage (/)
- Main pages (about, services, features, products, contact)
- Product pages (cybronisai, cybronis-bridge, shop-sahayak, salesforce)
- Other pages (pricing, blog, community, help, status, api-docs)
- Legal pages (privacy, terms, cookies, gdpr)
- Auth pages (login, register)

Total: 20 URLs

