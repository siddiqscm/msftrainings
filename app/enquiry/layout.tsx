import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Training | Dynamics 365 Certification Enquiry Form',
  description: 'Contact Microsoft Dynamics 365 Training to request certification training. Get information about course schedules, customized corporate training, and pricing.',
  keywords: 'Dynamics 365 training request, contact form, course enquiry, training schedule, certification course contact',
  openGraph: {
    title: 'Request Dynamics 365 Training',
    description: 'Contact us to request certification training or get more information.',
    type: 'website',
    url: 'https://msftrainings.com/enquiry',
  },
};

export default function EnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
