import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Training Approach | MSFT Trainings',
  description: 'Discover our proven 5-pillar training methodology. Hands-on labs, certified trainers, exam-oriented curriculum, corporate customization, and small batch training for Dynamics 365 certifications.',
  keywords: 'training methodology, hands-on labs, certified trainers, Dynamics 365 approach, training process, exam preparation',
  openGraph: {
    title: 'Our Training Approach | MSFT Trainings',
    description: 'Proven methodology delivering practical hands-on training with certified experts.',
    type: 'website',
    url: 'https://msfttrainings.com/methodology',
  },
};

const methodologyPillars = [
  {
    title: 'Hands-on Lab Environment',
    description: 'Every student works in a fully configured, live system environment. Gain practical experience with real tools and workflows rather than theory alone.',
    points: [
      'Dedicated lab instances for each participant',
      'Live system configuration exercises',
      'Realistic data scenarios',
      'Real-world business workflows',
    ],
  },
  {
    title: 'Certified Expert Trainers',
    description: 'Learn from experienced Certified Corporate Trainers with proven expertise in Microsoft Dynamics 365 implementations across diverse industries.',
    points: [
      'All trainers hold current Microsoft certifications',
      'Years of enterprise implementation experience',
      'Active involvement in production deployments',
      'Current knowledge of latest platform updates',
    ],
  },
  {
    title: 'Exam-Oriented Curriculum',
    description: 'Our curriculum is directly aligned with official Microsoft exam objectives. Every lesson targets exam domains and skills.',
    points: [
      'Complete coverage of all exam topics',
      'Practice exams and assessments',
      'Exam strategies and time management',
      'Confidence building before certification',
    ],
  },
  {
    title: 'Real-World Business Scenarios',
    description: 'Move beyond theoretical exercises. Engage with case studies and scenarios based on actual enterprise implementations.',
    points: [
      'Industry-specific use cases',
      'Complex multi-module scenarios',
      'Integration and data flow exercises',
      'Performance optimization practices',
    ],
  },
  {
    title: 'Small Batch Training',
    description: 'Maintain instructor-to-student ratios that enable personalized attention, quick question resolution, and customized pacing.',
    points: [
      'Maximum 12 participants per class',
      'Individual attention to each learner',
      'Flexible pace adjustments',
      'Deep Q&A sessions',
    ],
  },
];

const trainingProcess = [
  {
    step: '01',
    title: 'Pre-Training Assessment',
    description: 'We evaluate your current skill level and learning objectives to ensure optimal course placement and personalization.',
  },
  {
    step: '02',
    title: 'Structured Instruction',
    description: 'Follow a carefully designed curriculum alternating between instructor-led lectures and hands-on lab exercises.',
  },
  {
    step: '03',
    title: 'Practical Exercises',
    description: 'Apply concepts immediately with guided labs, case studies, and real-world scenarios in dedicated lab environments.',
  },
  {
    step: '04',
    title: 'Knowledge Assessment',
    description: 'Validate your learning with practice exams, quizzes, and performance assessments aligned with official exam standards.',
  },
  {
    step: '05',
    title: 'Exam Preparation',
    description: 'Receive focused exam prep, strategies, study materials, and final review sessions to maximize certification success.',
  },
];

export default function MethodologyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Training Approach
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            A proven methodology that combines expert instruction, hands-on labs, and exam readiness to ensure certification success.
          </p>
        </div>
      </section>

      {/* Core Methodology */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Five Pillars of Our Training Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures you gain practical expertise, build confidence, and achieve certification success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-navy-600 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Five-Step Training Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured approach that takes you from assessment through certification success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingProcess.map((process, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line (hidden on mobile) */}
                {idx < trainingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 left-full w-8 h-0.5 bg-gradient-to-r from-navy-300 to-transparent"></div>
                )}

                {/* Card */}
                <div className="bg-white rounded-lg border border-slate-200 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {process.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Why Participants Choose Us
            </h2>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Proven Success Rate
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  95% of our participants successfully pass their certification exam within the first attempt. Our targeted curriculum and intensive hands-on approach ensure you're truly prepared.
                </p>
              </div>
              <div className="bg-gradient-to-br from-navy-50 to-slate-50 rounded-lg p-8 border border-navy-200">
                <p className="text-4xl font-bold text-navy-600 mb-2">95%</p>
                <p className="text-slate-600">First-time certification success rate</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-navy-50 to-slate-50 rounded-lg p-8 border border-navy-200">
                <p className="text-4xl font-bold text-navy-600 mb-2">12</p>
                <p className="text-slate-600">Maximum participants per cohort</p>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Personalized Attention
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Small batch training ensures you receive individualized instructor attention. Every question gets answered, every concept gets clarified, and every learner progresses at an optimal pace.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Enterprise Experience
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  All instructors bring real-world enterprise implementation experience. You learn from professionals who have successfully deployed Dynamics 365 in complex, large-scale environments.
                </p>
              </div>
              <div className="bg-gradient-to-br from-navy-50 to-slate-50 rounded-lg p-8 border border-navy-200">
                <p className="text-4xl font-bold text-navy-600 mb-2">10+</p>
                <p className="text-slate-600">Average years of Microsoft platform experience per trainer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Experience Our Training Approach
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our training specialists to discuss your certification goals and training requirements.
          </p>
          <Link
            href="/enquiry"
            className="inline-block px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
