import Link from 'next/link';

interface CourseCardProps {
  code: string;
  title: string;
  shortDescription: string;
  track: string;
}

export default function CourseCard({
  code,
  title,
  shortDescription,
  track,
}: CourseCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg hover:border-navy-300 transition-all duration-300">
      <div className="mb-4">
        <span className="inline-block text-xs font-semibold text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
          {track}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-xs text-slate-500 font-mono font-semibold mb-1">
          Exam Code: {code}
        </p>
        <h3 className="text-lg font-semibold text-navy-900 group-hover:text-navy-600 transition-colors">
          {title}
        </h3>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
        {shortDescription}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="text-xs text-slate-500">Instructor-led • Hands-on Labs</span>
        <Link
          href={`/courses/${code.toLowerCase()}`}
          className="text-navy-600 hover:text-navy-700 font-semibold text-sm inline-flex items-center gap-2 group/link"
        >
          Learn More
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
