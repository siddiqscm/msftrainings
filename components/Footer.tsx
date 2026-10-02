import Link from 'next/link';
import LogoMark from './LogoMark';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoMark className="w-10 h-10" />
              <span className="text-lg font-bold">
                MSFT <span className="font-normal text-slate-300">Trainings</span>
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your Path to Mastering Microsoft. Instructor-led training across Azure, Microsoft 365, Power Platform, Dynamics 365 and Security.
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
                <a href="mailto:training@msfttrainings.com" className="hover:text-white transition-colors">
                  training@msfttrainings.com
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
            <div>
              <p>&copy; {currentYear} MSFT Trainings. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-500">
                Independent training provider. Not affiliated with or endorsed by Microsoft Corporation. Microsoft, Azure and Dynamics 365 are trademarks of the Microsoft group of companies.
              </p>
            </div>
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
