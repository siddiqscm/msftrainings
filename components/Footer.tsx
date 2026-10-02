import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-navy-400 to-navy-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D365</span>
              </div>
              <span className="font-semibold">D365 Training</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Enterprise-grade Microsoft Dynamics 365 training delivered by Certified Corporate Trainers.
            </p>
          </div>

          {/* Training Programs */}
          <div>
            <h3 className="font-semibold text-white mb-4">Certifications</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Business Central
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Supply Chain Management
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Finance & Operations
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  View All Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-slate-300 hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-slate-300 hover:text-white transition-colors">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                <span className="block text-white font-medium mb-1">Email</span>
                <a href="mailto:training@d365solutions.com" className="hover:text-white transition-colors">
                  training@d365solutions.com
                </a>
              </p>
              <p>
                <span className="block text-white font-medium mb-1">Hours</span>
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              &copy; {currentYear} D365 Training Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
