import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Training | MSFT Trainings',
  description: 'Contact MSFT Trainings to request Microsoft certification training. Get information about course schedules, customized corporate training, and pricing.',
  keywords: 'Dynamics 365 training request, contact form, course enquiry, training schedule, certification course contact',
  openGraph: {
    title: 'Request Microsoft Training | MSFT Trainings',
    description: 'Contact us to request certification training or get more information.',
    type: 'website',
    url: 'https://msfttrainings.com/enquiry',
  },
};

export default function EnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
