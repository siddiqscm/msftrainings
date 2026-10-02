import type { MetadataRoute } from 'next';

const BASE_URL = 'https://msfttrainings.com';

const courses = [
  { code: 'mb-800', lastModified: new Date('2026-01-01') },
  { code: 'mb-820', lastModified: new Date('2026-01-01') },
  { code: 'mb-330', lastModified: new Date('2026-01-01') },
  { code: 'mb-335', lastModified: new Date('2026-01-01') },
  { code: 'mb-500', lastModified: new Date('2026-01-01') },
  { code: 'mb-700', lastModified: new Date('2026-01-01') },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...courses.map((course) => ({
      url: `${BASE_URL}/courses/${course.code}`,
      lastModified: course.lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/methodology`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/enquiry`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
