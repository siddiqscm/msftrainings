import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | 404 Error',
  description: 'The page you are looking for could not be found. Please return to the home page or use the navigation menu.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-200 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Please check the URL or navigate using the menu below.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
