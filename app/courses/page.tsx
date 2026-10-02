import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 Certification Courses | MB-800, MB-820, MB-330, MB-335, MB-500, MB-700',
  description: 'Comprehensive Dynamics 365 certification training programs: Business Central (MB-800, MB-820), Supply Chain Management (MB-330, MB-335), Finance & Operations (MB-500, MB-700). Instructor-led hands-on labs.',
  keywords: 'Dynamics 365 courses, MB-800 training, MB-820 course, MB-330 certification, MB-335 expert, MB-500 developer, MB-700 architect, Microsoft Dynamics training',
  openGraph: {
    title: 'Dynamics 365 Certification Courses | 6 Training Programs',
    description: 'Hands-on Dynamics 365 certification training for all 6 exam codes. Business Central, Supply Chain Management, Finance & Operations.',
    type: 'website',
    url: 'https://msftrainings.com/courses',
  },
};

const courseDetails = [
  {
    code: 'MB-800',
    title: 'Microsoft Dynamics 365 Business Central Functional Consultant',
    description: 'Develop expertise in implementing and configuring Microsoft Dynamics 365 Business Central. This hands-on course covers core functionality, module setup, and practical deployment scenarios.',
    outcomes: [
      'Configure Business Central core components',
      'Implement financial management features',
      'Set up supply chain and operations modules',
      'Manage customer relationships and sales',
      'Perform system administration and maintenance',
    ],
    audience: 'Business analysts, functional consultants, implementation specialists, and ERP professionals seeking Business Central certification.',
    format: 'Instructor-led • 4-5 Days • Practical Labs • Real-world Scenarios',
    prerequisites: 'Basic ERP knowledge recommended',
  },
  {
    code: 'MB-820',
    title: 'Microsoft Dynamics 365 Business Central Developer',
    shortTitle: 'Business Central Developer',
    description: 'Master advanced development in Business Central using AL language and extension framework. Learn to build custom solutions and extend platform capabilities.',
    outcomes: [
      'Develop solutions using AL language',
      'Create and manage extensions',
      'Implement business logic and workflows',
      'Integrate with external systems',
      'Optimize application performance',
    ],
    audience: 'Developers, software engineers, and technical consultants with C# or object-oriented programming experience.',
    format: 'Instructor-led • 5 Days • Coding Labs • Real-world Development Scenarios',
    prerequisites: 'Strong programming background required, C# or similar language experience',
  },
  {
    code: 'MB-330',
    title: 'Microsoft Dynamics 365 Supply Chain Management Functional Consultant',
    description: 'Comprehensive training on implementing and configuring Supply Chain Management. Master demand planning, inventory management, procurement, and production control.',
    outcomes: [
      'Configure SCM core components',
      'Implement demand planning',
      'Manage inventory and warehouse operations',
      'Set up procurement and purchasing',
      'Configure production and scheduling',
    ],
    audience: 'Supply chain professionals, operations managers, business analysts, and implementation consultants.',
    format: 'Instructor-led • 5 Days • Practical Labs • Industry-specific Scenarios',
    prerequisites: 'Supply chain or operations background helpful',
  },
  {
    code: 'MB-335',
    title: 'Microsoft Dynamics 365 Supply Chain Management Functional Consultant Expert',
    shortTitle: 'SCM Functional Consultant Expert',
    description: 'Advanced implementation expertise in Supply Chain Management. Focus on complex scenarios, integration, and optimization of supply chain processes at enterprise scale.',
    outcomes: [
      'Design advanced supply chain solutions',
      'Implement complex demand planning strategies',
      'Manage enterprise inventory optimization',
      'Configure advanced procurement workflows',
      'Optimize production and logistics networks',
    ],
    audience: 'Senior supply chain consultants, enterprise implementation leads, and SCM technical architects.',
    format: 'Instructor-led • 5 Days • Advanced Labs • Enterprise Solution Design',
    prerequisites: 'SCM functional experience and MB-330 completion recommended',
  },
  {
    code: 'MB-500',
    title: 'Microsoft Dynamics 365 Finance and Operations Apps Developer',
    description: 'Master X++ development and advanced customization in Finance and Operations. Build enterprise-grade solutions with hands-on development exercises.',
    outcomes: [
      'Develop solutions using X++ language',
      'Create custom extensions and frameworks',
      'Implement business processes and workflows',
      'Integrate with Power Platform and external APIs',
      'Deploy and maintain custom solutions',
    ],
    audience: 'Software developers, solution developers, and technical architects with programming expertise.',
    format: 'Instructor-led • 5 Days • Advanced Coding Labs • Real-world Development Scenarios',
    prerequisites: 'Strong programming experience (C# or similar), OOP concepts essential',
  },
  {
    code: 'MB-700',
    title: 'Microsoft Dynamics 365 Finance and Operations Apps Solution Architect',
    description: 'Design and architect enterprise Dynamics 365 solutions. Learn to plan implementations, manage integration, and guide technical strategy.',
    outcomes: [
      'Design scalable enterprise solutions',
      'Plan technical architecture and infrastructure',
      'Manage system integration and data migration',
      'Implement governance and security frameworks',
      'Lead solution delivery and optimization',
    ],
    audience: 'Solution architects, senior technical leads, enterprise architects, and implementation directors.',
    format: 'Instructor-led • 5 Days • Strategic Design Sessions • Case Study Analysis',
    prerequisites: 'Senior development/implementation experience, MB-500 or equivalent background',
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Microsoft Dynamics 365 Certification Courses
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Comprehensive hands-on training programs delivered by certified instructors to ensure your success.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {courseDetails.map((course) => (
              <div
                key={course.code}
                className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10 hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="mb-6">
                  <p className="text-sm font-mono font-bold text-blue-600 mb-2">
                    {course.code}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
                    {course.shortTitle || course.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-slate-200">
                  <div>
                    <h4 className="font-semibold text-blue-900 text-sm mb-3">
                      FORMAT & DELIVERY
                    </h4>
                    <p className="text-slate-600 text-sm">{course.format}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 text-sm mb-3">
                      PREREQUISITES
                    </h4>
                    <p className="text-slate-600 text-sm">{course.prerequisites}</p>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-8">
                  <h4 className="font-semibold text-blue-900 text-sm mb-4">
                    LEARNING OUTCOMES
                  </h4>
                  <ul className="space-y-2">
                    {course.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-700 text-sm">
                        <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Audience */}
                <div className="mb-8 pb-8 border-b border-slate-200">
                  <h4 className="font-semibold text-navy-900 text-sm mb-3">
                    WHO SHOULD ATTEND
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {course.audience}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/enquiry?course=${course.code}`}
                    className="px-6 py-3 bg-navy-600 text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-600"
                  >
                    Request Training for {course.code}
                  </Link>
                  <Link
                    href="/methodology"
                    className="px-6 py-3 border-2 border-navy-200 text-navy-600 font-semibold rounded-lg hover:bg-navy-50 transition-colors text-center"
                  >
                    Our Training Approach
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 pt-12 border-t border-slate-200 text-center">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Need Custom Training?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We provide tailored training programs adapted to your organization specific needs, timelines, and technical requirements.
            </p>
            <Link
              href="/enquiry"
              className="inline-block px-8 py-3 bg-navy-600 text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors"
            >
              Request Corporate Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
