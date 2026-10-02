import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const courseData: Record<string, any> = {
  'mb-800': {
    code: 'MB-800',
    title: 'Microsoft Dynamics 365 Business Central Functional Consultant',
    description: 'Develop expertise in implementing and configuring Microsoft Dynamics 365 Business Central. This hands-on course covers core functionality, module setup, and practical deployment scenarios.',
    fullDescription: `Microsoft Dynamics 365 Business Central is a comprehensive cloud-based enterprise resource planning (ERP) solution designed for small and mid-market organizations. The MB-800 certification validates your ability to implement, configure, and support Business Central deployments across financial management, supply chain, sales, and operations modules. This intensive 5-day hands-on training equips you with the skills to manage complete implementations, from system setup and data migration to ongoing optimization and user support. You'll work with live Business Central environments, configure real-world scenarios, and develop the expertise needed to pass the MB-800 certification exam on your first attempt. The training emphasizes practical implementation patterns, best practices learned from hundreds of successful deployments, and problem-solving techniques used by certified consultants in the field.`,
    industryApplications: [
      { industry: 'Manufacturing', value: 'Production planning, inventory optimization, and supply chain automation' },
      { industry: 'Retail & Distribution', value: 'Multi-location inventory management and vendor collaboration' },
      { industry: 'Financial Services', value: 'Regulatory compliance, multi-currency handling, and financial reporting' },
      { industry: 'Healthcare', value: 'Budget management, vendor tracking, and compliance requirements' },
    ],
    outcomes: [
      'Configure Business Central core components and modules',
      'Implement and manage financial management features',
      'Set up supply chain and operations functionality',
      'Configure customer relationship management and sales',
      'Perform system administration, maintenance, and reporting',
    ],
    syllabus: [
      {
        module: 'Module 1: Business Central Fundamentals',
        topics: ['System overview', 'Navigation', 'Basic configuration', 'Data entry and management'],
      },
      {
        module: 'Module 2: Financial Management',
        topics: ['Chart of accounts', 'General ledger setup', 'Banking and payments', 'Financial reporting'],
      },
      {
        module: 'Module 3: Sales and Receivables',
        topics: ['Customer setup', 'Sales orders', 'Invoicing', 'Customer management', 'Reporting'],
      },
      {
        module: 'Module 4: Purchasing and Payables',
        topics: ['Vendor setup', 'Purchase orders', 'Invoice processing', 'Payment management'],
      },
      {
        module: 'Module 5: Inventory Management',
        topics: ['Item setup', 'Stock transfers', 'Inventory valuation', 'Warehousing basics'],
      },
      {
        module: 'Module 6: Implementation and Administration',
        topics: ['System setup', 'User management', 'Security', 'Integration', 'Troubleshooting'],
      },
    ],
    audience: 'Business analysts, functional consultants, implementation specialists, and ERP professionals seeking Business Central expertise.',
    format: 'Instructor-led • 5 Days • Hands-on Labs • Real-world Scenarios',
    prerequisites: 'Basic ERP knowledge recommended; no prior Business Central experience required',
  },
  'mb-820': {
    code: 'MB-820',
    title: 'Microsoft Dynamics 365 Business Central Developer',
    description: 'Master advanced development in Business Central using AL language and extension framework. Learn to build custom solutions and extend platform capabilities.',
    fullDescription: `The MB-820 certification targets developers and technical specialists who need to extend Microsoft Dynamics 365 Business Central through custom code and integrations. AL (a modern, object-oriented programming language) is the foundation of Business Central extensibility, allowing you to create powerful applications that enhance system functionality without modifying core code. This advanced 5-day training covers AL language fundamentals, VS Code development environment setup, object model architecture, and enterprise integration patterns. You'll build real-world extensions, implement business logic, create automated workflows, and integrate with external systems through APIs and web services. The course emphasizes clean code architecture, testing practices, performance optimization, and deployment strategies. Graduates are prepared for the MB-820 exam and equipped to develop production-quality Business Central extensions used by thousands of organizations globally.`,
    industryApplications: [
      { industry: 'Technology Consulting', value: 'Building custom extensions and AppSource solutions' },
      { industry: 'Enterprise Integration', value: 'Connecting Business Central to ERP and specialized systems' },
      { industry: 'SaaS Providers', value: 'Creating vertical solutions on top of Business Central' },
      { industry: 'Digital Transformation', value: 'Automating legacy system migration and workflow optimization' },
    ],
    outcomes: [
      'Develop solutions using AL programming language',
      'Create and manage Business Central extensions',
      'Implement business logic and automated workflows',
      'Integrate Business Central with external systems',
      'Optimize application performance and debug solutions',
    ],
    syllabus: [
      {
        module: 'Module 1: AL Language Fundamentals',
        topics: ['AL syntax', 'Variables and data types', 'Control structures', 'Object hierarchy'],
      },
      {
        module: 'Module 2: AL Development Environment',
        topics: ['VS Code setup', 'Build tools', 'Debugging', 'Testing frameworks'],
      },
      {
        module: 'Module 3: Objects and Properties',
        topics: ['Tables', 'Pages', 'Codeunits', 'Queries', 'Object properties'],
      },
      {
        module: 'Module 4: Business Logic Implementation',
        topics: ['Triggers and events', 'Validations', 'Calculations', 'Business rules'],
      },
      {
        module: 'Module 5: Integration and APIs',
        topics: ['Web services', 'APIs', 'Data exchange', 'Third-party integrations'],
      },
      {
        module: 'Module 6: Performance and Deployment',
        topics: ['Performance optimization', 'Extension publishing', 'AppSource submission', 'Maintenance'],
      },
    ],
    audience: 'Developers, software engineers, and technical consultants with strong C# or object-oriented programming experience.',
    format: 'Instructor-led • 5 Days • Advanced Coding Labs • Real-world Development Scenarios',
    prerequisites: 'Strong programming background required; C# or similar language experience essential',
  },
  'mb-330': {
    code: 'MB-330',
    title: 'Microsoft Dynamics 365 Supply Chain Management Functional Consultant',
    description: 'Comprehensive training on implementing and configuring Supply Chain Management. Master demand planning, inventory management, procurement, and production control.',
    fullDescription: `Microsoft Dynamics 365 Supply Chain Management delivers end-to-end visibility and control over your organization's supply chain operations. The MB-330 certification validates expertise in implementing, configuring, and optimizing SCM functionality including inventory management, demand planning, procurement, production planning, and logistics. This intensive training covers practical implementation of multi-location inventory operations, vendor collaboration, forecasting techniques, and production scheduling in real-world scenarios. You'll configure demand-driven planning models, optimize inventory levels, implement procurement workflows, and set up production control processes. The course emphasizes integration with financial systems, data-driven decision-making, and supply chain best practices from industries including manufacturing, distribution, and retail. Upon completion, you'll possess the skills to lead SCM implementations, manage complex supply chain networks, and improve operational efficiency.`,
    industryApplications: [
      { industry: 'Manufacturing', value: 'Production planning, BOM management, and inventory optimization' },
      { industry: 'Global Distribution', value: 'Multi-warehouse inventory and demand forecasting' },
      { industry: 'Retail', value: 'Vendor management and procurement collaboration' },
      { industry: 'Automotive', value: 'Complex supply chain networks and compliance' },
    ],
    outcomes: [
      'Configure Supply Chain Management core components',
      'Implement demand planning and forecasting',
      'Manage inventory operations and optimization',
      'Set up procurement and vendor management',
      'Configure production planning and scheduling',
    ],
    syllabus: [
      {
        module: 'Module 1: SCM Fundamentals',
        topics: ['System overview', 'Core concepts', 'Navigation', 'Configuration basics'],
      },
      {
        module: 'Module 2: Inventory Management',
        topics: ['Item setup', 'Warehousing', 'Inventory valuation', 'Tracking'],
      },
      {
        module: 'Module 3: Demand Planning',
        topics: ['Forecasting', 'Planning', 'Master scheduling', 'Demand management'],
      },
      {
        module: 'Module 4: Procurement',
        topics: ['Vendor management', 'Purchase requisitions', 'Purchase orders', 'Supplier collaboration'],
      },
      {
        module: 'Module 5: Production',
        topics: ['Production planning', 'BOM management', 'Operations scheduling', 'Quality control'],
      },
      {
        module: 'Module 6: Advanced Topics',
        topics: ['Analytics', 'Optimization', 'Integration', 'Best practices'],
      },
    ],
    audience: 'Supply chain professionals, operations managers, business analysts, and implementation consultants.',
    format: 'Instructor-led • 5 Days • Hands-on Labs • Industry-specific Scenarios',
    prerequisites: 'Supply chain or operations background helpful; basic ERP concepts recommended',
  },
  'mb-335': {
    code: 'MB-335',
    title: 'Microsoft Dynamics 365 Supply Chain Management Functional Consultant Expert',
    description: 'Advanced implementation expertise in Supply Chain Management. Focus on complex scenarios, integration, and optimization of supply chain processes at enterprise scale.',
    fullDescription: `The MB-335 certification represents expert-level mastery of Dynamics 365 Supply Chain Management implementation and optimization. This advanced course targets experienced supply chain professionals and consultants who manage complex, multi-entity implementations for large organizations with sophisticated supply chain requirements. Topics include demand-driven planning models, advanced procurement strategies, supply chain network optimization, lean manufacturing principles, advanced analytics, and enterprise-wide deployment patterns. You'll work through case studies involving multi-national operations, complex BOM structures, advanced demand planning algorithms, and integrated supply chain networks. The training emphasizes architectural design decisions, change management in large implementations, and optimization strategies that drive measurable business value. Graduates are prepared to architect enterprise supply chain solutions, lead large-scale implementations, and serve as technical leaders in supply chain transformation initiatives.`,
    industryApplications: [
      { industry: 'Enterprise Manufacturing', value: 'Multi-plant optimization and advanced planning' },
      { industry: 'Global Logistics', value: 'Network optimization and international compliance' },
      { industry: 'Pharmaceuticals', value: 'Traceability, compliance, and specialized sourcing' },
      { industry: 'High-Tech', value: 'Complex BOMs and supply chain agility' },
    ],
    outcomes: [
      'Design advanced supply chain solutions for enterprise',
      'Implement complex demand planning and optimization strategies',
      'Manage enterprise-wide inventory optimization',
      'Configure advanced procurement workflows and strategies',
      'Design and optimize production and logistics networks',
    ],
    syllabus: [
      {
        module: 'Module 1: Advanced Planning',
        topics: ['Demand-driven planning', 'Constraint-based planning', 'Advanced forecasting', 'Plan optimization'],
      },
      {
        module: 'Module 2: Advanced Procurement',
        topics: ['Procurement analytics', 'Supplier collaboration', 'Contract management', 'Strategic sourcing'],
      },
      {
        module: 'Module 3: Advanced Production',
        topics: ['Lean manufacturing', 'Advanced scheduling', 'Quality management', 'Product compliance'],
      },
      {
        module: 'Module 4: Supply Chain Analytics',
        topics: ['Analytics and reporting', 'Performance metrics', 'Cost analysis', 'Optimization tools'],
      },
      {
        module: 'Module 5: Integration and Optimization',
        topics: ['Cross-system integration', 'Supply chain network optimization', 'Process automation'],
      },
      {
        module: 'Module 6: Enterprise Implementation',
        topics: ['Global deployment', 'Multi-entity scenarios', 'Best practices', 'Change management'],
      },
    ],
    audience: 'Senior supply chain consultants, enterprise implementation leads, technical architects, and supply chain directors.',
    format: 'Instructor-led • 5 Days • Advanced Labs • Enterprise Solution Design',
    prerequisites: 'Supply chain functional experience strongly recommended; MB-330 completion or equivalent background',
  },
  'mb-500': {
    code: 'MB-500',
    title: 'Microsoft Dynamics 365 Finance and Operations Apps Developer',
    description: 'Master X++ development and advanced customization in Finance and Operations. Build enterprise-grade solutions with hands-on development exercises.',
    fullDescription: `The MB-500 certification validates expert-level development skills in Microsoft Dynamics 365 Finance and Operations. X++ is a powerful, object-oriented programming language designed for enterprise application development, and this advanced course covers everything needed to build production-quality solutions. Topics include X++ language fundamentals, object-oriented design patterns, application development, reporting frameworks, integration architecture, and deployment strategies. You'll develop custom business logic, create complex reports, implement workflow processes, integrate with external systems, and optimize application performance. The training emphasizes enterprise development best practices, security frameworks, compliance requirements, and ALM (Application Lifecycle Management) practices used in large-scale implementations. Graduates are equipped to lead technical development efforts, architect complex solutions, and serve as subject matter experts in Finance and Operations customization and development.`,
    industryApplications: [
      { industry: 'Financial Services', value: 'Custom financial processes and compliance automation' },
      { industry: 'Global Enterprises', value: 'Complex integrations and multi-legal entity structures' },
      { industry: 'Manufacturing', value: 'Advanced production processes and scheduling' },
      { industry: 'Consulting', value: 'Delivering vertical solutions and industry-specific capabilities' },
    ],
    outcomes: [
      'Develop enterprise solutions using X++ programming',
      'Create and manage custom extensions and frameworks',
      'Implement complex business processes and workflows',
      'Integrate Finance and Operations with external APIs and systems',
      'Deploy, maintain, and optimize custom solutions',
    ],
    syllabus: [
      {
        module: 'Module 1: X++ Language Fundamentals',
        topics: ['X++ syntax', 'Data types', 'Classes and inheritance', 'Exception handling'],
      },
      {
        module: 'Module 2: X++ Advanced Concepts',
        topics: ['OOP principles', 'Design patterns', 'Static and instance members', 'Collections'],
      },
      {
        module: 'Module 3: Object Model',
        topics: ['Tables', 'Forms', 'Reports', 'Queries', 'Business logic'],
      },
      {
        module: 'Module 4: Integration and APIs',
        topics: ['Services', 'Web services', 'Data exchange', 'Third-party integration'],
      },
      {
        module: 'Module 5: Performance and Security',
        topics: ['Performance tuning', 'Security framework', 'Role-based access', 'Compliance'],
      },
      {
        module: 'Module 6: Deployment and Maintenance',
        topics: ['Build and deployment', 'ALM practices', 'Troubleshooting', 'Support models'],
      },
    ],
    audience: 'Software developers, solution developers, senior technical specialists, and technical architects.',
    format: 'Instructor-led • 5 Days • Advanced Coding Labs • Real-world Development Scenarios',
    prerequisites: 'Strong programming experience (C# or similar); OOP concepts essential',
  },
  'mb-700': {
    code: 'MB-700',
    title: 'Microsoft Dynamics 365 Finance and Operations Apps Solution Architect',
    description: 'Design and architect enterprise Dynamics 365 solutions. Learn to plan implementations, manage integration, and guide technical strategy.',
    fullDescription: `The MB-700 certification represents the highest level of expertise in Dynamics 365 Finance and Operations, targeting solution architects and technical leaders responsible for designing enterprise-scale implementations. This strategic course goes beyond implementation details to focus on architecture principles, design patterns, integration strategies, security frameworks, and governance models. You'll learn to design scalable solutions for complex business requirements, manage multi-phased implementations across multiple legal entities, implement security and compliance frameworks, and lead technical teams through challenging implementations. Topics include system design, infrastructure planning, data migration strategies, integration architecture, performance optimization, and change management. The training uses enterprise case studies, design workshops, and strategic planning exercises. Graduates are prepared to architect solutions for the world's largest organizations, lead transformation initiatives, and serve as trusted technical advisors to C-level executives.`,
    industryApplications: [
      { industry: 'Enterprise Transformation', value: 'Strategic system deployments across complex organizations' },
      { industry: 'Global Corporations', value: 'Multi-country, multi-currency, multi-legal entity implementations' },
      { industry: 'Consulting Leadership', value: 'Managing large-scale engagements and technical delivery' },
      { industry: 'Technical Executive', value: 'CTO-level strategic planning and technology governance' },
    ],
    outcomes: [
      'Design scalable enterprise Dynamics 365 solutions',
      'Plan technical architecture and infrastructure',
      'Manage system integration and data migration strategy',
      'Implement governance, security, and compliance frameworks',
      'Lead solution delivery and drive organizational optimization',
    ],
    syllabus: [
      {
        module: 'Module 1: Solution Architecture Fundamentals',
        topics: ['Architecture frameworks', 'Design principles', 'Stakeholder management', 'Technology selection'],
      },
      {
        module: 'Module 2: Technical Architecture Design',
        topics: ['System design', 'Integration architecture', 'Infrastructure', 'Scalability'],
      },
      {
        module: 'Module 3: Implementation Planning',
        topics: ['Project methodology', 'Planning and estimation', 'Risk management', 'Change management'],
      },
      {
        module: 'Module 4: Data Migration and Integration',
        topics: ['Data strategy', 'Migration planning', 'Integration patterns', 'Data validation'],
      },
      {
        module: 'Module 5: Governance and Compliance',
        topics: ['Governance framework', 'Security architecture', 'Compliance requirements', 'Best practices'],
      },
      {
        module: 'Module 6: Enterprise Leadership',
        topics: ['Stakeholder communication', 'Solution governance', 'Quality assurance', 'Optimization'],
      },
    ],
    audience: 'Solution architects, senior technical leads, enterprise architects, implementation directors, and CTO/technical leadership.',
    format: 'Instructor-led • 5 Days • Strategic Design Sessions • Enterprise Case Studies',
    prerequisites: 'Senior development or implementation experience strongly recommended; MB-500 or equivalent background',
  },
};

export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
  const course = courseData[params.code.toLowerCase()];

  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }

  return {
    title: `${course.code} - ${course.title} | Dynamics 365 Certification Training`,
    description: course.description,
    keywords: `${course.code}, ${course.title}, Dynamics 365 training, Microsoft certification, hands-on course`,
    openGraph: {
      title: `${course.code} - ${course.title}`,
      description: course.description,
      type: 'website',
      url: `https://msftrainings.com/courses/${params.code.toLowerCase()}`,
    },
  };
}

interface CoursePageProps {
  params: {
    code: string;
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = courseData[params.code.toLowerCase()];

  if (!course) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono font-bold text-blue-200 mb-2">
            {course.code}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {course.title}
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            {course.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Overview */}
          <div className="mb-16 pb-16 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Course Overview
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {course.fullDescription}
            </p>
          </div>

          {/* Industry Applications */}
          {course.industryApplications && (
            <div className="mb-16 pb-16 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Industry Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.industryApplications.map((app: any, idx: number) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="font-semibold text-navy-900 mb-2">{app.industry}</h3>
                    <p className="text-slate-700 text-sm">{app.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-slate-200">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                Format & Duration
              </p>
              <p className="text-slate-900 font-medium text-sm leading-relaxed">
                {course.format}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                Prerequisites
              </p>
              <p className="text-slate-900 font-medium text-sm leading-relaxed">
                {course.prerequisites}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                Target Audience
              </p>
              <p className="text-slate-900 font-medium text-sm leading-relaxed">
                {course.audience}
              </p>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Learning Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.outcomes.map((outcome: string, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div className="mb-16 pb-16 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              Course Syllabus
            </h2>
            <div className="space-y-4">
              {course.syllabus.map((item: any, idx: number) => (
                <details
                  key={idx}
                  className="group bg-blue-50 rounded-lg border border-blue-200 p-6 cursor-pointer hover:bg-blue-100 transition-colors"
                >
                  <summary className="flex items-center justify-between font-semibold text-blue-900">
                    <span>{item.module}</span>
                    <span className="text-lg group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <ul className="space-y-2">
                      {item.topics.map((topic: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <span className="text-blue-400 font-bold flex-shrink-0">
                            •
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/enquiry?course=${course.code}`}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Get Training Quote
            </Link>
            <Link
              href="/courses"
              className="px-8 py-3 border-2 border-blue-200 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
