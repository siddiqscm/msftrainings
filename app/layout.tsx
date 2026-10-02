import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'MSFT Trainings | Your Path to Mastering Microsoft',
  description: 'Instructor-led Microsoft certification training across Azure, Microsoft 365, Power Platform, Dynamics 365 and Security. Hands-on labs, exam-oriented curriculum and Certified Corporate Trainers.',
  keywords: 'Microsoft certification training, Azure training, Microsoft 365 training, Power Platform training, Dynamics 365 training, Microsoft Security training, Dynamics 365 CE training, MB-910, MB-280, MB-230, MB-240, MB-260, PL-200, PL-400, PL-600, AZ-900, MS-900, PL-900, MB-800, MB-820, MB-330, MB-335, MB-500, MB-700',
  authors: [{ name: 'MSFT Trainings' }],
  openGraph: {
    type: 'website',
    url: 'https://msfttrainings.com',
    title: 'MSFT Trainings | Your Path to Mastering Microsoft',
    description: 'Instructor-led Microsoft certification training across Azure, Microsoft 365, Power Platform, Dynamics 365 and Security.',
    images: [
      {
        url: 'https://msfttrainings.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MSFT Trainings',
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
    name: 'MSFT Trainings',
    url: 'https://msfttrainings.com',
    logo: 'https://msfttrainings.com/logo.svg',
    description: 'Instructor-led Microsoft certification training across Azure, Microsoft 365, Power Platform and Dynamics 365, delivered by Certified Corporate Trainers.',
    sameAs: [
      'https://www.linkedin.com/company/msfttrainings',
      'https://www.facebook.com/msfttrainings',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'training@msfttrainings.com',
      telephone: '+1-XXX-XXX-XXXX',
    },
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      ...[
        ['MB-910', 'Dynamics 365 Fundamentals (CRM)', 'Overview of Dynamics 365 customer engagement apps on Dataverse and Power Platform.'],
        ['MB-280', 'Dynamics 365 Customer Experience Analyst', 'Configure Dynamics 365 Sales and Customer Insights - Journeys.'],
        ['MB-230', 'Dynamics 365 Customer Service Functional Consultant', 'Implement cases, knowledge, SLAs, unified routing and omnichannel.'],
        ['MB-240', 'Dynamics 365 Field Service Functional Consultant', 'Implement work orders, scheduling, inventory and the mobile app.'],
        ['MB-260', 'Customer Insights (Data) Specialist', 'Unify customer data, build segments and activate insights.'],
        ['PL-200', 'Power Platform Functional Consultant', 'Configure Dataverse, model-driven apps, security and automation.'],
        ['PL-400', 'Power Platform Developer', 'Extend Dynamics 365 CE with plug-ins, PCF controls and integrations.'],
        ['PL-600', 'Power Platform Solution Architect', 'Architect enterprise Dynamics 365 CE and Power Platform solutions.'],
      ].map(([code, name, description]) => ({
        '@type': 'Course',
        name: `${code}: ${name}`,
        description,
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: `https://msfttrainings.com/courses/${code.toLowerCase()}`,
      })),
      {
        '@type': 'Course',
        name: 'AZ-900: Microsoft Azure Fundamentals',
        description: 'Cloud concepts, core Azure services, security, pricing and governance.',
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: 'https://msfttrainings.com/courses/az-900',
      },
      {
        '@type': 'Course',
        name: 'MS-900: Microsoft 365 Fundamentals',
        description: 'Microsoft 365 apps and services, identity, security, compliance and licensing.',
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: 'https://msfttrainings.com/courses/ms-900',
      },
      {
        '@type': 'Course',
        name: 'PL-900: Microsoft Power Platform Fundamentals',
        description: 'Power Apps, Power Automate, Power BI and Copilot Studio fundamentals with hands-on labs.',
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: 'https://msfttrainings.com/courses/pl-900',
      },
      {
        '@type': 'Course',
        name: 'MB-800: Business Central Functional Consultant',
        description: 'Master Microsoft Dynamics 365 Business Central with hands-on labs covering core functional concepts.',
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: 'https://msfttrainings.com/courses/mb-800',
      },
      {
        '@type': 'Course',
        name: 'MB-820: Business Central Developer',
        description: 'Master advanced development in Business Central using AL language and extension framework.',
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: 'https://msfttrainings.com/courses/mb-820',
      },
      {
        '@type': 'Course',
        name: 'MB-330: Supply Chain Management Functional Consultant',
        description: 'Configure and implement Dynamics 365 Supply Chain Management.',
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: 'https://msfttrainings.com/courses/mb-330',
      },
      {
        '@type': 'Course',
        name: 'MB-335: Supply Chain Management Expert',
        description: 'Advanced SCM implementation expertise and enterprise solutions.',
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: 'https://msfttrainings.com/courses/mb-335',
      },
      {
        '@type': 'Course',
        name: 'MB-500: Finance and Operations Developer',
        description: 'Master X++ development and advanced customization in Finance and Operations.',
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: 'https://msfttrainings.com/courses/mb-500',
      },
      {
        '@type': 'Course',
        name: 'MB-700: Finance and Operations Solution Architect',
        description: 'Design and architect enterprise Dynamics 365 solutions.',
        provider: { '@type': 'Organization', name: 'MSFT Trainings' },
        url: 'https://msfttrainings.com/courses/mb-700',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MSFT Trainings',
    image: 'https://msfttrainings.com/logo.svg',
    description: 'Microsoft Certification Training Provider',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'XXXXX',
      addressCountry: 'US',
    },
    telephone: '+1-XXX-XXX-XXXX',
    email: 'training@msfttrainings.com',
    url: 'https://msfttrainings.com',
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
