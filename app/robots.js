export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://gocampus.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        '*.json',
        '/search?*',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

