import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 Certification Training | Practical Hands-on Instruction',
  description: 'Enterprise-grade Microsoft Dynamics 365 training delivered by Certified Corporate Trainers. Practical hands-on labs, exam-oriented curriculum, and real-world scenarios.',
  keywords: 'Microsoft Dynamics 365, certification training, MB-800, MB-820, MB-330, MB-335, MB-500, MB-700, hands-on training',
  authors: [{ name: 'Microsoft Dynamics 365 Training' }],
  openGraph: {
    type: 'website',
    url: 'https://msftrainings.com',
    title: 'Microsoft Dynamics 365 Certification Training',
    description: 'Enterprise-grade Microsoft Dynamics 365 training delivered by Certified Corporate Trainers.',
    images: [
      {
        url: 'https://msftrainings.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Microsoft Dynamics 365 Training',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Microsoft Dynamics 365 Training',
    url: 'https://msftrainings.com',
    logo: 'https://msftrainings.com/logo.png',
    description: 'Enterprise-grade Microsoft Dynamics 365 certification training delivered by Certified Corporate Trainers.',
    sameAs: [
      'https://www.linkedin.com/company/msftrainings',
      'https://www.facebook.com/msftrainings',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'training@msftrainings.com',
      telephone: '+1-XXX-XXX-XXXX',
    },
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Course',
        name: 'MB-800: Business Central Functional Consultant',
        description: 'Master Microsoft Dynamics 365 Business Central with hands-on labs covering core functional concepts.',
        provider: { '@type': 'Organization', name: 'Microsoft Dynamics 365 Training' },
        url: 'https://msftrainings.com/courses/mb-800',
      },
      {
        '@type': 'Course',
        name: 'MB-820: Business Central Developer',
        description: 'Master advanced development in Business Central using AL language and extension framework.',
        provider: { '@type': 'Organization', name: 'Microsoft Dynamics 365 Training' },
        url: 'https://msftrainings.com/courses/mb-820',
      },
      {
        '@type': 'Course',
        name: 'MB-330: Supply Chain Management Functional Consultant',
        description: 'Configure and implement Dynamics 365 Supply Chain Management.',
        provider: { '@type': 'Organization', name: 'Microsoft Dynamics 365 Training' },
        url: 'https://msftrainings.com/courses/mb-330',
      },
      {
        '@type': 'Course',
        name: 'MB-335: Supply Chain Management Expert',
        description: 'Advanced SCM implementation expertise and enterprise solutions.',
        provider: { '@type': 'Organization', name: 'Microsoft Dynamics 365 Training' },
        url: 'https://msftrainings.com/courses/mb-335',
      },
      {
        '@type': 'Course',
        name: 'MB-500: Finance and Operations Developer',
        description: 'Master X++ development and advanced customization in Finance and Operations.',
        provider: { '@type': 'Organization', name: 'Microsoft Dynamics 365 Training' },
        url: 'https://msftrainings.com/courses/mb-500',
      },
      {
        '@type': 'Course',
        name: 'MB-700: Finance and Operations Solution Architect',
        description: 'Design and architect enterprise Dynamics 365 solutions.',
        provider: { '@type': 'Organization', name: 'Microsoft Dynamics 365 Training' },
        url: 'https://msftrainings.com/courses/mb-700',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Microsoft Dynamics 365 Training',
    image: 'https://msftrainings.com/logo.png',
    description: 'Microsoft Dynamics 365 Certification Training Provider',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'XXXXX',
      addressCountry: 'US',
    },
    telephone: '+1-XXX-XXX-XXXX',
    email: 'training@msftrainings.com',
    url: 'https://msftrainings.com',
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1e3a5f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-slate-25">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
