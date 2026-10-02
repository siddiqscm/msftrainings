import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Microsoft Certification Courses | MSFT Trainings',
  description: 'Instructor-led Microsoft certification training: Dynamics 365 ERP (MB-800, MB-820, MB-330, MB-335, MB-500, MB-700), Dynamics 365 CE (MB-910, MB-280, MB-230, MB-240, MB-260, PL-200, PL-400, PL-600), Power Platform (PL-900), Azure (AZ-900) and Microsoft 365 (MS-900).',
  keywords: 'Dynamics 365 CE training, Dynamics 365 CRM training, MB-910 training, MB-280 training, MB-230 training, MB-240 training, MB-260 training, PL-200 training, PL-400 training, PL-600 training, AZ-900 training, MS-900 training, PL-900 training, Azure Fundamentals, Microsoft 365 Fundamentals, Power Platform Fundamentals, Dynamics 365 courses, MB-800 training, MB-820 course, MB-330 certification, MB-335 expert, MB-500 developer, MB-700 architect',
  openGraph: {
    title: 'Microsoft Certification Courses | MSFT Trainings',
    description: 'Hands-on Microsoft certification training across Azure, Microsoft 365, Power Platform and Dynamics 365.',
    type: 'website',
    url: 'https://msfttrainings.com/courses',
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
  {
    code: 'MB-910',
    title: 'Microsoft Dynamics 365 Fundamentals (CRM)',
    description: 'Get a clear overview of the Dynamics 365 customer engagement apps: Sales, Customer Service, Field Service, Customer Insights and the shared platform beneath them.',
    outcomes: [
      'Describe Dynamics 365 Sales, Customer Service, Field Service and Customer Insights',
      'Explain shared capabilities in Dataverse and Power Platform',
      'Follow core CRM processes from lead to service resolution',
      'Describe Copilot and AI features across CE apps',
      'Understand reporting, integration and security fundamentals',
    ],
    audience: 'Business users, new CE consultants and developers, project managers, and IT professionals new to Dynamics 365 customer engagement.',
    format: 'Instructor-led • 1-2 Days • Live App Walkthroughs • Exam Practice',
    prerequisites: 'None. General business process awareness helpful',
  },
  {
    code: 'MB-280',
    title: 'Microsoft Dynamics 365 Customer Experience Analyst',
    description: 'Configure Dynamics 365 Sales and Customer Insights to manage the full customer journey, from lead capture and pipeline to personalised engagement.',
    outcomes: [
      'Configure Dynamics 365 Sales processes, products and pricing',
      'Set up forecasting, sales accelerator and Copilot for sellers',
      'Build segments, journeys and lead scoring in Customer Insights - Journeys',
      'Customise Dataverse tables, forms, views and security',
      'Deliver reporting with dashboards and Power BI',
    ],
    audience: 'Functional consultants, CRM analysts, sales operations and marketing operations professionals.',
    format: 'Instructor-led • 4-5 Days • Hands-on Labs • Real-world Scenarios',
    prerequisites: 'MB-910 or equivalent Dynamics 365 CE familiarity recommended',
  },
  {
    code: 'MB-230',
    title: 'Microsoft Dynamics 365 Customer Service Functional Consultant',
    shortTitle: 'Customer Service Functional Consultant',
    description: 'Implement Dynamics 365 Customer Service and Contact Center: cases, knowledge, SLAs, unified routing, omnichannel engagement and Copilot for agents.',
    outcomes: [
      'Configure case management, queues and routing rules',
      'Implement knowledge management and self-service',
      'Set up entitlements and service-level agreements',
      'Configure omnichannel engagement and the Customer Service workspace',
      'Use Copilot, analytics and dashboards to improve service',
    ],
    audience: 'Functional consultants, service operations leads, contact centre managers and CRM analysts.',
    format: 'Instructor-led • 4-5 Days • Hands-on Labs • Contact Centre Scenarios',
    prerequisites: 'MB-910 or equivalent Dynamics 365 CE familiarity recommended',
  },
  {
    code: 'MB-240',
    title: 'Microsoft Dynamics 365 Field Service Functional Consultant',
    shortTitle: 'Field Service Functional Consultant',
    description: 'Implement Dynamics 365 Field Service: work orders, resource scheduling, inventory, agreements, the mobile app and connected field service.',
    outcomes: [
      'Configure work orders, incident types and service tasks',
      'Set up resources, skills, territories and scheduling',
      'Manage inventory, purchasing and returns',
      'Create agreements for recurring and preventive service',
      'Configure the mobile app, customer assets and connected field service',
    ],
    audience: 'Functional consultants, service delivery managers, dispatch leads and CRM analysts.',
    format: 'Instructor-led • 4-5 Days • Hands-on Labs • Service Operations Scenarios',
    prerequisites: 'MB-910 or equivalent Dynamics 365 CE familiarity recommended',
  },
  {
    code: 'MB-260',
    title: 'Microsoft Customer Insights (Data) Specialist',
    description: 'Implement Dynamics 365 Customer Insights - Data to unify customer data, build profiles, measures and segments, and activate insights across the business.',
    outcomes: [
      'Ingest and prepare data from multiple sources',
      'Unify data into customer profiles with match and merge rules',
      'Build measures, segments and enrichments',
      'Use AI predictions such as churn and lifetime value',
      'Activate insights in Dynamics 365 and external destinations',
    ],
    audience: 'Data analysts, marketing technologists, functional consultants and data engineers.',
    format: 'Instructor-led • 3-4 Days • Hands-on Data Labs • Real-world Scenarios',
    prerequisites: 'Familiarity with Dynamics 365 CE and basic data concepts recommended',
  },
  {
    code: 'PL-200',
    title: 'Microsoft Power Platform Functional Consultant',
    description: 'Configure the Dataverse and Power Platform foundation of Dynamics 365 CE: data model, model-driven apps, security, automation, Copilot Studio and reporting.',
    outcomes: [
      'Design and configure the Dataverse data model',
      'Build model-driven and canvas apps',
      'Configure security roles, business units and teams',
      'Automate processes with Power Automate and business process flows',
      'Build Copilot Studio agents and Power BI reports',
    ],
    audience: 'Dynamics 365 CE functional consultants, business analysts and power users.',
    format: 'Instructor-led • 5 Days • Hands-on Labs • CE Implementation Scenarios',
    prerequisites: 'PL-900 or MB-910 recommended',
  },
  {
    code: 'PL-400',
    title: 'Microsoft Power Platform Developer',
    description: 'Extend Dynamics 365 CE and Power Platform with code: plug-ins, client scripting, PCF controls, custom connectors, Web API and Azure integration.',
    outcomes: [
      'Design technical architecture for Power Platform and CE solutions',
      'Develop plug-ins and custom APIs in C#',
      'Extend the user experience with JavaScript and PCF controls',
      'Integrate using Web API, custom connectors and Azure services',
      'Implement ALM with solutions, pipelines and source control',
    ],
    audience: 'Developers and technical consultants building and extending Dynamics 365 CE and Power Platform solutions.',
    format: 'Instructor-led • 5 Days • Advanced Coding Labs • Real-world Development Scenarios',
    prerequisites: 'Programming experience in C# and JavaScript; PL-200 knowledge helpful',
  },
  {
    code: 'PL-600',
    title: 'Microsoft Power Platform Solution Architect',
    description: 'Architect enterprise Dynamics 365 CE and Power Platform solutions: requirements, solution design, data, integration, security, ALM and governance.',
    outcomes: [
      'Lead discovery, requirements and fit-gap analysis',
      'Design data model, integration and security architecture',
      'Define environment strategy, ALM and governance',
      'Plan data migration, testing and go-live',
      'Guide teams and stakeholders through implementation',
    ],
    audience: 'Solution architects, senior functional and technical consultants, and technical leads.',
    format: 'Instructor-led • 5 Days • Design Workshops • Enterprise Case Studies',
    prerequisites: 'Experience as a CE functional consultant or developer; PL-200 or PL-400 recommended',
  },
  {
    code: 'PL-900',
    title: 'Microsoft Power Platform Fundamentals',
    description: 'Learn how Power Apps, Power Automate, Power BI and Copilot Studio work together to analyze data, automate processes and build business solutions.',
    outcomes: [
      'Describe the business value of Microsoft Power Platform',
      'Understand Dataverse, connectors and Power Fx basics',
      'Build a basic canvas and model-driven app with Power Apps',
      'Create automated flows with Power Automate',
      'Build reports and dashboards with Power BI and agents with Copilot Studio',
    ],
    audience: 'Business users, analysts, citizen developers, functional consultants and IT professionals exploring low-code solutions.',
    format: 'Instructor-led • 1-2 Days • Hands-on Build Labs • Exam Practice',
    prerequisites: 'None. Basic Excel or data familiarity helpful',
  },
  {
    code: 'AZ-900',
    title: 'Microsoft Azure Fundamentals',
    description: 'Build a solid foundation in cloud concepts and core Azure services. Ideal starting point for anyone beginning their Azure journey, technical or non-technical.',
    outcomes: [
      'Explain cloud concepts, service models and deployment models',
      'Describe core Azure compute, networking and storage services',
      'Understand Azure identity, access and security fundamentals',
      'Use Azure cost management and pricing tools',
      'Describe Azure governance, compliance and monitoring tools',
    ],
    audience: 'IT professionals, business stakeholders, sales and pre-sales teams, students, and anyone new to Microsoft Azure.',
    format: 'Instructor-led • 1-2 Days • Guided Portal Demos • Exam Practice',
    prerequisites: 'None. General IT awareness helpful',
  },
  {
    code: 'MS-900',
    title: 'Microsoft 365 Fundamentals',
    description: 'Understand the Microsoft 365 suite, from productivity and collaboration apps to security, compliance, licensing and support.',
    outcomes: [
      'Describe cloud concepts and Microsoft 365 benefits',
      'Explain Microsoft 365 apps, Teams, SharePoint and Copilot',
      'Understand Microsoft Entra ID and identity concepts',
      'Describe security, compliance and privacy capabilities',
      'Compare Microsoft 365 licensing, pricing and support options',
    ],
    audience: 'IT professionals, decision makers, procurement and licensing teams, and end users moving to Microsoft 365.',
    format: 'Instructor-led • 1-2 Days • Live Tenant Walkthroughs • Exam Practice',
    prerequisites: 'None. Familiarity with office productivity tools helpful',
  },
];

const sections = [
  {
    id: 'dynamics-365-erp',
    title: 'Dynamics 365 ERP',
    subtitle: 'Business Central, Supply Chain Management, Finance & Operations',
    codes: ['MB-800', 'MB-820', 'MB-330', 'MB-335', 'MB-500', 'MB-700'],
  },
  {
    id: 'dynamics-365-ce',
    title: 'Dynamics 365 CE (CRM)',
    subtitle: 'Functional: Sales, Customer Service, Field Service, Customer Insights. Technical: Developer and Solution Architect',
    codes: ['MB-910', 'MB-280', 'MB-230', 'MB-240', 'MB-260', 'PL-200', 'PL-400', 'PL-600'],
  },
  {
    id: 'power-platform',
    title: 'Power Platform',
    subtitle: 'Power Apps, Power Automate, Power BI, Copilot Studio',
    codes: ['PL-900'],
  },
  {
    id: 'azure',
    title: 'Azure',
    subtitle: 'Cloud fundamentals',
    codes: ['AZ-900'],
  },
  {
    id: 'microsoft-365',
    title: 'Microsoft 365',
    subtitle: 'Modern workplace fundamentals',
    codes: ['MS-900'],
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Microsoft Certification Courses
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Comprehensive hands-on training programs delivered by certified instructors to ensure your success.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Jump Links */}
          <nav aria-label="Course categories" className="flex flex-wrap gap-3 mb-12">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 text-sm font-semibold text-blue-900 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </nav>

          {sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-24 mb-16">
          <div className="mb-8 pb-4 border-b-2 border-blue-900">
            <h2 className="text-3xl font-bold text-blue-900">{section.title}</h2>
            <p className="text-slate-600 mt-1">{section.subtitle}</p>
          </div>
          <div className="space-y-12">
            {courseDetails.filter((course) => section.codes.includes(course.code)).map((course) => (
              <div
                key={course.code}
                className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10 hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="mb-6">
                  <p className="text-sm font-mono font-bold text-blue-600 mb-2">
                    {course.code}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
                    <Link href={`/courses/${course.code.toLowerCase()}`} className="hover:text-blue-700">
                      {course.shortTitle || course.title}
                    </Link>
                  </h3>
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
          </div>
          ))}

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
