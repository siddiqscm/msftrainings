'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import CourseCard from './CourseCard';

export interface SearchableCourse {
  code: string;
  title: string;
  shortDescription: string;
  track: string;
  category: string;
  keywords: string;
}

const SUGGESTIONS = ['MB-800', 'PL-400', 'Business Central', 'Supply Chain', 'Sales', 'Azure'];

// Lowercase, unify "F&O" spellings, and turn punctuation into spaces (keeps x++ and c#).
function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/f\s*&\s*o/g, 'fno')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9+#]+/g, ' ')
    .trim();
}

export default function CourseSearch({ courses }: { courses: SearchableCourse[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(courses.map((c) => c.category)))],
    [courses]
  );

  const index = useMemo(
    () =>
      courses.map((course) => {
        const text = normalize(
          [course.code, course.title, course.shortDescription, course.track, course.category, course.keywords].join(' ')
        );
        return { course, text, compact: text.replace(/ /g, '') };
      }),
    [courses]
  );

  const tokens = normalize(query).split(' ').filter(Boolean);

  const results = index
    .filter(({ course }) => category === 'All' || course.category === category)
    .filter(({ text, compact }) => tokens.every((t) => text.includes(t) || compact.includes(t)))
    .map(({ course }) => course);

  const reset = () => {
    setQuery('');
    setCategory('All');
  };

  return (
    <div>
      {/* Search box */}
      <div className="max-w-2xl mx-auto mb-6">
        <label htmlFor="course-search" className="sr-only">
          Search courses
        </label>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
          </svg>
          <input
            id="course-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Exam code or product, e.g. MB-800, Azure"
            autoComplete="off"
            className="w-full pl-12 pr-12 py-4 text-base bg-white border-2 border-slate-200 rounded-xl shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-700 rounded-full"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {!query && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-sm">
            <span className="text-slate-500">Try:</span>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setQuery(s)}
                className="px-3 py-1 text-slate-600 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Category filter */}
      <div role="group" aria-label="Filter by category" className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
              category === c
                ? 'bg-blue-900 text-white border-blue-900'
                : 'bg-white text-blue-900 border-blue-200 hover:bg-blue-50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="text-center text-sm text-slate-500 mb-8">
        {results.length === courses.length
          ? `Showing all ${courses.length} courses`
          : `${results.length} of ${courses.length} courses`}
      </p>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((course) => (
            <CourseCard
              key={course.code}
              code={course.code}
              title={course.title}
              shortDescription={course.shortDescription}
              track={course.track}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-xl mx-auto text-center bg-white border border-slate-200 rounded-lg p-10">
          <p className="text-lg font-semibold text-navy-900 mb-2">
            No courses match &ldquo;{query}&rdquo;
          </p>
          <p className="text-slate-600 mb-6">
            Try an exam code like MB-800 or a product like Business Central. Looking for something we don&rsquo;t list? We also run custom Microsoft training.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={reset}
              className="px-6 py-3 border-2 border-blue-200 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Show all courses
            </button>
            <Link
              href="/enquiry"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ask about custom training
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
