'use client';

import { FormEvent, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const certifications = [
  { code: 'MB-800', label: 'MB-800 (Business Central Functional Consultant)' },
  { code: 'MB-820', label: 'MB-820 (Business Central Developer)' },
  { code: 'MB-330', label: 'MB-330 (Supply Chain Management Functional Consultant)' },
  { code: 'MB-335', label: 'MB-335 (Supply Chain Management Expert)' },
  { code: 'MB-500', label: 'MB-500 (Finance & Operations Developer)' },
  { code: 'MB-700', label: 'MB-700 (Finance & Operations Solution Architect)' },
  { code: 'PL-900', label: 'PL-900 (Power Platform Fundamentals)' },
  { code: 'AZ-900', label: 'AZ-900 (Azure Fundamentals)' },
  { code: 'MS-900', label: 'MS-900 (Microsoft 365 Fundamentals)' },
];

const trainingTypes = [
  'Corporate On-Site Training',
  'Cohort-Based Instructor-Led Program',
  'Customized Training Program',
  'Executive Briefing',
  'Other (Please Specify)',
];

function EnquiryFormContent() {
  const searchParams = useSearchParams();
  const courseParam = searchParams?.get('course') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    certification: courseParam || '',
    trainingType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        certification: courseParam || '',
        trainingType: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Request Training
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Complete the form below to discuss your Microsoft certification training needs with our specialists.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted && (
                <div className="mb-8 p-6 bg-emerald-50 border-2 border-emerald-500 rounded-lg">
                  <h3 className="font-bold text-emerald-900 mb-2">
                    Thank you for your enquiry!
                  </h3>
                  <p className="text-emerald-800 text-sm">
                    Our training specialists will review your request and contact you within 24 business hours to discuss your training needs and options.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 p-8">
                {/* Full Name */}
                <div className="mb-6">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>

                {/* Company Name */}
                <div className="mb-6">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                    placeholder="Your Organization"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Certification */}
                <div className="mb-6">
                  <label
                    htmlFor="certification"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Certification of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="certification"
                    name="certification"
                    value={formData.certification}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a certification...</option>
                    {certifications.map((cert) => (
                      <option key={cert.code} value={cert.code}>
                        {cert.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Training Type */}
                <div className="mb-6">
                  <label
                    htmlFor="trainingType"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Training Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="trainingType"
                    name="trainingType"
                    value={formData.trainingType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select training type...</option>
                    {trainingTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Message <span className="text-slate-400">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your training requirements, team size, timeline, or any specific needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                  {isLoading ? 'Sending...' : 'Send Enquiry'}
                </button>

                <p className="text-xs text-slate-500 text-center mt-4">
                  We respect your privacy. Your information will only be used to respond to your training enquiry.
                </p>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-lg border border-slate-200 p-8 sticky top-20">
                <h3 className="text-lg font-bold text-navy-900 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                      Email
                    </p>
                    <p className="text-slate-900 font-medium">
                      <a
                        href="mailto:training@msfttrainings.com"
                        className="text-navy-600 hover:text-navy-700"
                      >
                        training@msfttrainings.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                      Phone
                    </p>
                    <p className="text-slate-900 font-medium">
                      <a
                        href="tel:+1234567890"
                        className="text-navy-600 hover:text-navy-700"
                      >
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                      Business Hours
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Monday – Friday<br />
                      9:00 AM – 6:00 PM<br />
                      <span className="text-slate-500">(EST)</span>
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-300">
                    <p className="text-sm text-slate-600">
                      <strong>Response Time:</strong> Our training specialists typically respond within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-white rounded-lg border border-slate-200 p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-navy-900">
                What is the typical cohort size?
                <span className="text-lg">+</span>
              </summary>
              <p className="text-slate-600 mt-4">
                We maintain small batches with a maximum of 12 participants per cohort to ensure personalized instructor attention and optimal learning outcomes.
              </p>
            </details>

            <details className="bg-white rounded-lg border border-slate-200 p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-navy-900">
                Do you offer corporate on-site training?
                <span className="text-lg">+</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Yes. We provide on-site training programs customized for your organization, including dedicated instructors and tailored curriculum.
              </p>
            </details>

            <details className="bg-white rounded-lg border border-slate-200 p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-navy-900">
                What is the duration of the training?
                <span className="text-lg">+</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Most certification programs run 4-5 days of intensive instruction. Customized programs can be adjusted to meet your organization timeline.
              </p>
            </details>

            <details className="bg-white rounded-lg border border-slate-200 p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-navy-900">
                Are there prerequisites for the courses?
                <span className="text-lg">+</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Prerequisites vary by certification. Functional consultant courses require basic ERP knowledge; developer courses require strong programming expertise. See course details for specific requirements.
              </p>
            </details>

          </div>
        </div>
      </section>
    </>
  );
}

export default function EnquiryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <p className="text-slate-600">Loading...</p>
        </div>
      }
    >
      <EnquiryFormContent />
    </Suspense>
  );
}
