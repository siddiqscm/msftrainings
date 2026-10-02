import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About MSFT Trainings | Certified Microsoft Trainers',
  description: 'Learn about MSFT Trainings. Certified corporate trainers delivering Microsoft certification training across Azure, Microsoft 365, Power Platform, Dynamics 365 and Security.',
  keywords: 'about Microsoft Dynamics 365 training, certified trainers, training company, Dynamics 365 experts, training mission, training values',
  openGraph: {
    title: 'About MSFT Trainings',
    description: 'Enterprise-grade Microsoft Dynamics 365 training delivered by certified experts.',
    type: 'website',
    url: 'https://msfttrainings.com/about',
  },
};

const teamHighlights = [
  {
    title: 'Certified Expertise',
    description: 'All our trainers hold current Microsoft certifications and maintain active knowledge of the latest platform updates and best practices.',
  },
  {
    title: 'Enterprise Experience',
    description: 'Decades of combined experience implementing Dynamics 365 solutions across banking, manufacturing, retail, supply chain, and financial services sectors.',
  },
  {
    title: 'Hands-on Mastery',
    description: 'Our trainers are not just certified; they actively work on production implementations and understand real-world complexities and solutions.',
  },
  {
    title: 'Teaching Excellence',
    description: 'Dedicated to adult learning principles. We focus on practical application, immediate relevance, and certification success for every participant.',
  },
];

const companyValues = [
  {
    title: 'Excellence',
    description: 'We are committed to delivering training of the highest quality, with attention to detail and rigorous adherence to curriculum standards.',
  },
  {
    title: 'Integrity',
    description: 'Honest, transparent communication with clients and participants. Clear expectations, reliable delivery, and follow-through on every commitment.',
  },
  {
    title: 'Practical Focus',
    description: 'Theory without practice is incomplete. Every concept is grounded in real business scenarios and hands-on application.',
  },
  {
    title: 'Continuous Learning',
    description: 'The technology landscape evolves constantly. We stay current with platform updates, new features, and emerging best practices.',
  },
  {
    title: 'Client Success',
    description: 'Your success is our success. We measure our effectiveness by your certification achievements and implementation readiness.',
  },
  {
    title: 'Corporate Responsibility',
    description: 'We understand the investment organizations make in professional development and we honor that trust through quality delivery.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Leading enterprise Microsoft Dynamics 365 training provider specializing in certification and implementation readiness.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To provide enterprise-grade Microsoft Dynamics 365 training that equips professionals with practical expertise and confidence to achieve certification success and drive successful implementations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe that quality training is an investment in professional growth and organizational capability. Our mission is to deliver that investment with excellence, integrity, and measurable results.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To be the preferred training partner for organizations seeking to build and develop Microsoft Dynamics 365 expertise across their enterprise.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We envision a future where professionals can access world-class, practical training that bridges the gap between theory and real-world implementation, enabling career advancement and organizational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Our Team of Certified Trainers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert instructors with proven certification credentials and years of enterprise implementation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Why Organizations Partner With Us
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-navy-600 font-bold text-lg">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">
                  Proven Track Record
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  500+ professionals trained, 95% first-time certification success rate, and consistent client retention demonstrate our commitment to quality.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-navy-600 font-bold text-lg">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">
                  Tailored Solutions
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We customize training programs to address your organization specific needs, technical requirements, and timeline constraints.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-navy-600 font-bold text-lg">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">
                  Flexible Delivery
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  On-site corporate training, cohort-based instructor-led programs, and customized schedules to fit your organizational needs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-navy-600 font-bold text-lg">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">
                  Ongoing Partnership
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Post-training support, resource access, instructor availability, and sustained partnership to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every training program we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Your Microsoft Expertise?
          </h2>
          <p className="text-lg text-slate-200 mb-8">
            Contact us to discuss your training needs and discover how we can help you achieve certification success.
          </p>
          <Link
            href="/enquiry"
            className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
