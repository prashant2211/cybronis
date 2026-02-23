// Script to help convert Next.js pages to React pages
// This is a helper script - pages still need manual review

const fs = require('fs');
const path = require('path');

const sourceDir = '../../src/app';
const targetDir = './src/pages';

// Conversion rules
const conversions = [
  // Remove 'use client'
  { from: /'use client';\n\n/g, to: '' },
  { from: /'use client';\n/g, to: '' },
  
  // Import conversions
  { from: /import Link from 'next\/link'/g, to: "import { Link } from 'react-router-dom'" },
  { from: /import { useRouter } from 'next\/navigation'/g, to: "import { useNavigate } from 'react-router-dom'" },
  { from: /import Image from 'next\/image'/g, to: '' },
  
  // Link conversions
  { from: /<Link href="([^"]+)"/g, to: '<Link to="$1"' },
  { from: /href="([^"]+)"/g, to: 'to="$1"' },
  
  // Router conversions
  { from: /const router = useRouter\(\)/g, to: 'const navigate = useNavigate()' },
  { from: /router\.push\(['"]([^'"]+)['"]\)/g, to: "navigate('$1')" },
  { from: /router\.replace\(['"]([^'"]+)['"]\)/g, to: "navigate('$1', { replace: true })" },
  
  // Image conversions (basic - needs manual review)
  { from: /<Image\s+src="([^"]+)"[^>]*\/>/g, to: '<img src="$1" className="w-full h-full object-contain" />' },
  
  // TypeScript type annotations (remove or convert)
  { from: /: React\.ReactNode/g, to: '' },
  { from: /: string \| null/g, to: '' },
  { from: /: React\.FormEvent/g, to: '' },
  { from: /: React\.ChangeEvent<HTMLInputElement>/g, to: '' },
  { from: /: React\.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement>/g, to: '' },
];

function convertFile(sourcePath, targetPath) {
  let content = fs.readFileSync(sourcePath, 'utf8');
  
  // Apply conversions
  conversions.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  // Remove TypeScript interface definitions (or convert to JSDoc)
  content = content.replace(/interface \w+ \{[^}]*\}/g, '');
  
  // Change file extension in export
  const fileName = path.basename(targetPath, '.jsx');
  content = content.replace(/export default \w+;/, `export default ${fileName};`);
  
  // Ensure proper imports
  if (content.includes('useNavigate') && !content.includes("from 'react-router-dom'")) {
    content = content.replace(
      /import { Link } from 'react-router-dom'/,
      "import { Link, useNavigate } from 'react-router-dom'"
    );
  }
  
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log(`Converted: ${path.basename(sourcePath)} -> ${path.basename(targetPath)}`);
}

// This is a helper - you'll need to run this manually or integrate it
console.log('Conversion script ready. This is a helper - pages need manual review after conversion.');

