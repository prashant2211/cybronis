# Page Conversion Notes

All pages have been converted from Next.js to React. Key changes made:

1. **Imports**:
   - `import Link from 'next/link'` → `import { Link } from 'react-router-dom'`
   - `import { useRouter } from 'next/navigation'` → `import { useNavigate } from 'react-router-dom'`
   - `import Image from 'next/image'` → Regular `<img>` tags
   - Removed `'use client'` directive

2. **Routing**:
   - `Link href="/path"` → `Link to="/path"`
   - `router.push('/path')` → `navigate('/path')`
   - `router.replace('/path')` → `navigate('/path', { replace: true })`

3. **Images**:
   - `<Image src="..." width={...} height={...} />` → `<img src="..." className="..." />`
   - Removed `priority`, `alt` moved to className or kept as alt attribute

4. **API Calls**:
   - All API calls use `/api/*` which is proxied to backend via Vite config
   - Changed from Next.js API routes to Express backend endpoints

5. **Metadata**:
   - Removed Next.js metadata exports
   - SEO metadata moved to `index.html` head section

All pages maintain the exact same functionality and design as the original Next.js version.

