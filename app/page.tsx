import Link from 'next/link';
import CourseSearch from '@/components/CourseSearch';

const courses = [
  {
    code: 'MB-800',
    title: 'Business Central Functional Consultant',
    shortDescription: 'Master Microsoft Dynamics 365 Business Central with hands-on labs covering core functional concepts, implementation, and configuration.',
    track: 'Business Central',
  },
  {
    code: 'MB-820',
    title: 'Business Central Developer',
    shortDescription: 'Develop advanced solutions in Business Central. Learn AL language, extensions, and customization techniques through practical exercises.',
    track: 'Business Central',
  },
  {
    code: 'MB-330',
    title: 'Supply Chain Management Functional Consultant',
    shortDescription: 'Configure and implement Dynamics 365 Supply Chain Management. Master demand planning, inventory, and procurement functionality.',
    track: 'Supply Chain',
  },
  {
    code: 'MB-335',
    title: 'Supply Chain Management Expert',
    shortDescription: 'Advance your expertise in Supply Chain Management. Expert-level implementation, integration, and advanced configuration scenarios.',
    track: 'Supply Chain',
  },
  {
    code: 'MB-500',
    title: 'Finance and Operations Apps Developer',
    shortDescription: 'Develop enterprise solutions with Finance and Operations. X++ programming, customization, and advanced development practices.',
    track: 'Finance & Operations',
  },
  {
    code: 'MB-700',
    title: 'Finance and Operations Apps Solution Architect',
    shortDescription: 'Design enterprise solutions at the architect level. Strategic planning, system integration, and solution governance principles.',
    track: 'Finance & Operations',
  },
  {
    code: 'MB-910',
    title: 'Dynamics 365 Fundamentals (CRM)',
    shortDescription: 'Overview of Dynamics 365 Sales, Customer Service, Field Service and Customer Insights on Dataverse and Power Platform.',
    track: 'Dynamics 365 CE',
  },
  {
    code: 'MB-280',
    title: 'Customer Experience Analyst',
    shortDescription: 'Configure Dynamics 365 Sales and Customer Insights - Journeys for pipeline, forecasting, Copilot and personalised engagement.',
    track: 'Dynamics 365 CE',
  },
  {
    code: 'MB-230',
    title: 'Customer Service Functional Consultant',
    shortDescription: 'Implement cases, knowledge, SLAs, unified routing, omnichannel engagement and Copilot for service agents.',
    track: 'Dynamics 365 CE',
  },
  {
    code: 'MB-240',
    title: 'Field Service Functional Consultant',
    shortDescription: 'Implement work orders, resource scheduling, inventory, agreements, the mobile app and connected field service.',
    track: 'Dynamics 365 CE',
  },
  {
    code: 'MB-260',
    title: 'Customer Insights (Data) Specialist',
    shortDescription: 'Unify customer data into profiles, build segments and measures, use AI predictions and activate insights.',
    track: 'Dynamics 365 CE',
  },
  {
    code: 'PL-200',
    title: 'Power Platform Functional Consultant',
    shortDescription: 'Configure the Dataverse foundation of Dynamics 365 CE: data model, model-driven apps, security and automation.',
    track: 'Dynamics 365 CE',
  },
  {
    code: 'PL-400',
    title: 'Power Platform Developer',
    shortDescription: 'Extend Dynamics 365 CE with plug-ins, JavaScript, PCF controls, custom connectors, Web API and Azure integration.',
    track: 'Dynamics 365 CE',
  },
  {
    code: 'PL-600',
    title: 'Power Platform Solution Architect',
    shortDescription: 'Architect enterprise CE solutions: requirements, data, integration, security, ALM and governance.',
    track: 'Dynamics 365 CE',
  },
  {
    code: 'PL-900',
    title: 'Power Platform Fundamentals',
    shortDescription: 'Build apps, flows, reports and agents with Power Apps, Power Automate, Power BI and Copilot Studio in hands-on labs.',
    track: 'Power Platform',
  },
  {
    code: 'AZ-900',
    title: 'Azure Fundamentals',
    shortDescription: 'Start your cloud journey. Core cloud concepts, Azure services, security, pricing and governance, with guided portal demos.',
    track: 'Azure',
  },
  {
    code: 'MS-900',
    title: 'Microsoft 365 Fundamentals',
    shortDescription: 'Understand Microsoft 365 apps, Teams, Copilot, identity, security, compliance and licensing in one focused course.',
    track: 'Microsoft 365',
  },
];

const categoryByTrack: Record<string, string> = {
  'Business Central': 'Dynamics 365 ERP',
  'Supply Chain': 'Dynamics 365 ERP',
  'Finance & Operations': 'Dynamics 365 ERP',
  'Dynamics 365 CE': 'Dynamics 365 CE',
  'Power Platform': 'Power Platform',
  Azure: 'Azure',
  'Microsoft 365': 'Microsoft 365',
};

// Extra search terms: product names, abbreviations and roles people actually type.
const ERP = 'dynamics 365 d365 erp';
const CE = 'dynamics 365 d365 crm ce customer engagement';
const keywordsByCode: Record<string, string> = {
  'MB-800': `${ERP} bc nav navision finance accounting functional consultant`,
  'MB-820': `${ERP} bc nav al developer extensions programming technical`,
  'MB-330': `${ERP} scm fno fo d365fo inventory warehouse procurement manufacturing production functional consultant`,
  'MB-335': `${ERP} scm fno fo d365fo expert advanced manufacturing planning functional consultant`,
  'MB-500': `${ERP} fno fo d365fo ax axapta x++ developer programming technical`,
  'MB-700': `${ERP} fno fo d365fo ax axapta solution architect technical`,
  'MB-910': `${CE} fundamentals beginner sales customer service field service customer insights`,
  'MB-280': `${CE} sales marketing customer insights journeys functional consultant`,
  'MB-230': `${CE} customer service contact center omnichannel functional consultant`,
  'MB-240': `${CE} field service work orders scheduling functional consultant`,
  'MB-260': `${CE} customer insights data cdp marketing analyst`,
  'PL-200': `${CE} power platform power apps power automate dataverse functional consultant`,
  'PL-400': `${CE} power platform power apps dataverse developer plugins pcf javascript c# technical`,
  'PL-600': `${CE} power platform solution architect technical`,
  'PL-900': 'power platform power apps power automate power bi copilot studio low code fundamentals beginner',
  'AZ-900': 'azure cloud fundamentals beginner',
  'MS-900': 'microsoft 365 m365 office 365 o365 teams sharepoint copilot fundamentals beginner',
};

const searchableCourses = courses.map((course) => ({
  ...course,
  category: categoryByTrack[course.track],
  keywords: keywordsByCode[course.code] ?? '',
}));

const benefits = [
  {
    icon: '🔬',
    title: 'Practical Hands-on Labs',
    description: 'Real-world scenarios and exercises with live systems to reinforce learning.',
  },
  {
    icon: '👨‍🏫',
    title: 'Certified Instructors',
    description: 'Learn from experienced Certified Corporate Trainers with deep enterprise expertise.',
  },
  {
    icon: '🎯',
    title: 'Exam-Oriented Curriculum',
    description: 'Targeted content aligned directly with official Microsoft exam objectives.',
  },
  {
    icon: '🏢',
    title: 'Corporate Customization',
    description: 'Tailored training programs adapted to your organization specific needs.',
  },
  {
    icon: '👥',
    title: 'Group Training Options',
    description: 'Flexible delivery models for teams, departments, and enterprise groups.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'IT Manager',
    company: 'Global Tech Solutions',
    quote: 'The hands-on training was exceptional. Our team passed all certification exams on the first attempt. The instructors were knowledgeable and provided real-world insights.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'Enterprise Architect',
    company: 'Fortune 500 Manufacturing',
    quote: 'This training program transformed how our team approaches Dynamics 365 implementations. The practical labs directly translated to our production deployments.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    title: 'Finance Director',
    company: 'International Finance Corp',
    quote: 'Corporate training customization was outstanding. The trainers adapted the content to our specific needs without compromising exam preparation.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Your Path to Mastering Microsoft
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Azure · Microsoft 365 · Power Platform · Dynamics 365 · Security
            </p>
            <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Prepare for Microsoft certification exams with intensive, instructor-led training from Certified Corporate Trainers, combining hands-on labs, real-world scenarios and complete exam readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/courses"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                View Certification Programs
              </Link>
              <Link
                href="/enquiry"
                className="px-8 py-4 bg-cyan-400 text-blue-900 font-semibold rounded-lg border-2 border-white hover:bg-cyan-300 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Partner Badge & Trust */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-8 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-blue-900 mb-2">CERTIFIED MICROSOFT LEARNING PARTNER</p>
            <div className="flex justify-center mb-4">
              <div className="inline-block bg-white p-4 rounded-lg shadow-sm border-2 border-blue-600">
                <p className="text-xs font-bold text-blue-900">Microsoft</p>
                <p className="text-xs font-bold text-blue-600">Certified Learning Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Enhanced */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">17+</p>
              <p className="text-sm text-slate-600 font-medium">Certification Tracks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-sm text-slate-600 font-medium">Professionals Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">95%</p>
              <p className="text-sm text-slate-600 font-medium">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By - Client Logos */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-blue-900 mb-8">TRUSTED BY ENTERPRISE LEADERS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
            <div className="text-center text-slate-700 text-sm font-semibold">Fortune 500 Company</div>
            <div className="text-center text-slate-700 text-sm font-semibold">Global Enterprise</div>
            <div className="text-center text-slate-700 text-sm font-semibold">Technology Leader</div>
            <div className="text-center text-slate-700 text-sm font-semibold">Manufacturing Corp</div>
            <div className="text-center text-slate-700 text-sm font-semibold">Finance Group</div>
            <div className="text-center text-slate-700 text-sm font-semibold">Distribution Co</div>
          </div>
          <p className="text-center text-xs text-slate-600 mt-6">Add your company logos here for enhanced credibility (logos of your training clients)</p>
        </div>
      </section>

      {/* Certification Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Microsoft Certifications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from our comprehensive portfolio of hands-on certification training programs, delivered by industry experts.
            </p>
          </div>

          <CourseSearch courses={searchableCourses} />

          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Why Choose Our Training
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our proven methodology ensures you gain practical expertise and pass your certification exam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-md transition-shadow"
              >
                <p className="text-4xl mb-4">{benefit.icon}</p>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join hundreds of professionals who have successfully advanced their careers with our training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-blue-200 pt-4">
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Certified?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Start your journey to Microsoft certification today. Contact our training specialists for course schedules and customized corporate training options.
          </p>
          <Link
            href="/enquiry"
            className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Get Training Quote Today
          </Link>
        </div>
      </section>
    </>
  );
}
