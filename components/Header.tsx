'use client';

import Link from 'next/link';
import { useState } from 'react';
import LogoMark from './LogoMark';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/methodology', label: 'Our Approach' },
    { href: '/about', label: 'About' },
    { href: '/enquiry', label: 'Enquiry' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="MSFT Trainings home">
            <LogoMark className="w-10 h-10" />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-indigo-950">
                MSFT <span className="font-normal text-indigo-700">Trainings</span>
              </span>
              <span className="hidden sm:inline text-xs text-slate-500">
                Your Path to Mastering Microsoft
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-navy-600 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Link
              href="/enquiry"
              className="px-6 py-2.5 bg-navy-600 text-white text-sm font-semibold rounded-md hover:bg-navy-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-600"
            >
              Request Training
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-navy-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-slate-600 hover:text-navy-600 font-medium text-sm transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/enquiry"
              className="block mt-4 px-6 py-2.5 bg-navy-600 text-white text-sm font-semibold rounded-md hover:bg-navy-700 transition-colors text-center"
              onClick={() => setMenuOpen(false)}
            >
              Request Training
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
